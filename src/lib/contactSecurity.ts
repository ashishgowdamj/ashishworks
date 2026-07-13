import { z } from 'zod';

/** Shared contact payload limits and anti-spam helpers (client-side). */

export const FIELD_LIMITS = {
  name: 100,
  email: 254,
  subject: 200,
  message: 5000,
} as const;

const noUrl = (value: string) => !/https?:\/\/|www\./i.test(value);

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, 'Please enter your name')
    .max(FIELD_LIMITS.name, `Name must be at most ${FIELD_LIMITS.name} characters`)
    .refine(noUrl, 'Name cannot contain links'),
  email: z
    .string()
    .trim()
    .min(1, 'Please enter your email')
    .max(FIELD_LIMITS.email, 'Email is too long')
    .email('Enter a valid email address'),
  subject: z
    .string()
    .trim()
    .min(1, 'Please enter a subject')
    .max(FIELD_LIMITS.subject, `Subject must be at most ${FIELD_LIMITS.subject} characters`),
  message: z
    .string()
    .trim()
    .min(1, 'Please write a short message')
    .max(FIELD_LIMITS.message, `Message must be at most ${FIELD_LIMITS.message} characters`),
  /** Honeypot: must stay empty. Bots often fill hidden fields. */
  website: z.string().max(0, 'Spam detected'),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

const RATE_LIMIT_KEY = 'contact_submit_timestamps';
const MAX_SUBMISSIONS = 3;
const WINDOW_MS = 60 * 60 * 1000; // 1 hour
/** Minimum time the form must be open before submit (ms). */
const MIN_FILL_MS = 3000;

export function checkRateLimit(): { allowed: boolean; retryAfterMinutes?: number } {
  try {
    const raw = localStorage.getItem(RATE_LIMIT_KEY);
    const now = Date.now();
    const timestamps: number[] = (raw ? JSON.parse(raw) : [])
      .filter((t: number) => typeof t === 'number' && now - t < WINDOW_MS);

    if (timestamps.length >= MAX_SUBMISSIONS) {
      const oldest = Math.min(...timestamps);
      const retryAfterMinutes = Math.max(1, Math.ceil((WINDOW_MS - (now - oldest)) / 60000));
      return { allowed: false, retryAfterMinutes };
    }
    return { allowed: true };
  } catch {
    return { allowed: true };
  }
}

export function recordSubmission(): void {
  try {
    const raw = localStorage.getItem(RATE_LIMIT_KEY);
    const now = Date.now();
    const timestamps: number[] = (raw ? JSON.parse(raw) : [])
      .filter((t: number) => typeof t === 'number' && now - t < WINDOW_MS);
    timestamps.push(now);
    localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(timestamps));
  } catch {
    // ignore storage errors
  }
}

export function isSubmittedTooFast(formOpenedAt: number): boolean {
  return Date.now() - formOpenedAt < MIN_FILL_MS;
}

export function validateContactForm(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string;
}): { success: true; data: ContactFormValues } | { success: false; errors: Record<string, string> } {
  const result = contactSchema.safeParse(data);
  if (result.success) {
    return { success: true, data: result.data };
  }
  const errors: Record<string, string> = {};
  for (const issue of result.error.issues) {
    const key = String(issue.path[0] ?? 'form');
    if (!errors[key]) errors[key] = issue.message;
  }
  return { success: false, errors };
}

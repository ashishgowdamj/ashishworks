/**
 * Every piece of site copy lives here so it can be edited without touching layout.
 * Rule for this file: nothing goes in that Ashish could not defend in an interview.
 */

export const profile = {
  name: "Ashish Gowda M J",
  role: "Software Developer",
  location: "Bengaluru, Karnataka, India",
  email: "ashishgowdamj@gmail.com",
  phone: "+91-63620-32496",
  github: "https://github.com/ashishgowdamj",
  linkedin: "https://linkedin.com/in/ashishgowdamj",
  agency: "https://vortex-lane.vercel.app",
  resumePath: "/Ashish-Gowda-MJ-Resume.pdf",
  available: true,
};

/** Short, factual headline stats. */
export const quickStats = [
  { value: "3+", label: "years building" },
  { value: "8", label: "products shipped" },
  { value: "2,000+", label: "vehicles tracked live" },
  { value: "<200ms", label: "live position updates" },
];

/** What I'm on right now — the section that dates the site and proves it's alive. */
export const now = {
  updated: "September 2026",
  items: [
    {
      title: "Building at Dhanvith Ventures",
      detail:
        "Web and mobile products across analytics, monitoring and business management. Most of it lives behind a login.",
    },
    {
      title: "Running Vortex Lane",
      detail:
        "A small engineering practice taking on full-stack and AI builds for teams that need to ship quickly.",
    },
    {
      title: "Going deeper on real-time systems",
      detail:
        "Sockets, stream processing and the awkward parts — reconnection, backpressure, and what to show a user when the data stops arriving.",
    },
  ],
};

export type StackGroup = {
  title: string;
  note: string;
  items: { name: string; detail: string }[];
};

/**
 * Grouped by what I actually reach for, with a reason attached. A bare logo wall
 * says nothing; the reason is the part worth reading.
 */
export const stack: StackGroup[] = [
  {
    title: "Building interfaces",
    note: "Where most of my hours go.",
    items: [
      { name: "React", detail: "Default for anything that needs to hold state" },
      { name: "TypeScript", detail: "Catches the class of bug I'd otherwise ship" },
      { name: "Next.js", detail: "When routing and rendering should be someone else's problem" },
      { name: "Tailwind CSS", detail: "Consistent spacing without a naming argument" },
      { name: "Leaflet", detail: "Maps that stay smooth with thousands of moving markers" },
      { name: "Recharts", detail: "Charts that don't fight the rest of the layout" },
    ],
  },
  {
    title: "Mobile",
    note: "One codebase, two stores.",
    items: [
      { name: "React Native", detail: "Shared logic across iOS and Android" },
      { name: "Expo", detail: "Builds and over-the-air updates without native pain" },
      { name: "Android Studio", detail: "For the Java work that has to be native" },
    ],
  },
  {
    title: "Data & backend",
    note: "The part users never see and always feel.",
    items: [
      { name: "Node.js / Express", detail: "APIs and the glue between services" },
      { name: "PostgreSQL", detail: "Relational by default; most data really is" },
      { name: "Supabase", detail: "Auth, storage and Postgres without standing it all up" },
      { name: "Socket.IO / MQTT", detail: "Moving live telemetry to a screen fast" },
    ],
  },
  {
    title: "How I work faster",
    note: "AI-assisted, not AI-replaced.",
    items: [
      { name: "Claude Code", detail: "Daily driver for building and refactoring" },
      { name: "Cursor", detail: "Fast edits inside a file I already understand" },
      { name: "Figma", detail: "Wireframes before code, from the UI/UX side of my work" },
      { name: "Git / GitHub", detail: "Small commits, readable history" },
    ],
  },
];

/** How a project actually runs with me. */
export const process = [
  {
    step: "01",
    title: "Understand the real problem",
    detail:
      "The brief is rarely the problem. I want to know who is stuck, what they do today, and what breaks. Cheaper to find here than after it's built.",
  },
  {
    step: "02",
    title: "Cut the scope",
    detail:
      "Most features are optional. I'd rather ship the two that matter and get them in front of users than deliver ten in three months.",
  },
  {
    step: "03",
    title: "Build in thin slices",
    detail:
      "One working path end to end, then widen. It means there's always something real to look at, and no integration surprise at the end.",
  },
  {
    step: "04",
    title: "Harden before launch",
    detail:
      "Error states, loading states, what happens on a bad connection. The unglamorous work that decides whether people trust the thing.",
  },
  {
    step: "05",
    title: "Ship and watch",
    detail:
      "Deploy, then monitor. A launch is the start of the information, not the end of the work.",
  },
];

/** What I can be hired to build. */
export const services = [
  {
    title: "Full-stack web apps",
    detail: "React and TypeScript front ends on Node or Supabase, from empty repo to deployed.",
  },
  {
    title: "Real-time dashboards",
    detail: "Live data on a screen — sockets, maps, charts, and sensible behaviour when a feed drops.",
  },
  {
    title: "Mobile apps",
    detail: "React Native and Expo, one codebase shipped to both stores.",
  },
  {
    title: "Internal & admin tooling",
    detail: "The portals that make a product operable: bulk import, CRUD, roles, audit trails.",
  },
  {
    title: "UI/UX design",
    detail: "Figma wireframes and interfaces, then the build — no handoff gap between the two.",
  },
];

export const faqs = [
  {
    q: "What kind of work are you looking for?",
    a: "Product engineering where I own a real surface — a dashboard, an app, an internal tool — rather than tickets in isolation. Full-time or project work both suit me.",
  },
  {
    q: "How do you use AI in your work?",
    a: "Heavily, and openly. I use Claude Code and Cursor daily to move faster through scaffolding and refactoring. It doesn't replace knowing why the code is shaped the way it is — which is the part that matters when something breaks at 2am.",
  },
  {
    q: "Why aren't most of your projects public?",
    a: "Most of what I've built is internal software for a company, behind a login. I show screenshots where I have permission and describe the engineering where I don't. I'd rather say that plainly than pad the page.",
  },
  {
    q: "What are you strongest at?",
    a: "Front-end and product development — turning a vague requirement into an interface people can actually use, especially where live data is involved.",
  },
  {
    q: "How fast can you start?",
    a: "Get in touch and I'll tell you honestly. For project work I'll usually come back with a scope and estimate within a couple of days.",
  },
];

export const education = {
  degree: "Bachelor of Computer Applications (BCA)",
  institution: "RNS First Grade College, Bengaluru",
  period: "Aug 2022 – June 2025",
  score: "CGPA 8.35 / 10",
};

export const courses = [
  { name: "Python for Everybody", issuer: "University of Michigan (Coursera)" },
  { name: "React.js Bootcamp", issuer: "DevTown" },
  { name: "Microsoft Power BI", issuer: "Skill Nation" },
];

export type Role = {
  company: string;
  title: string;
  period: string;
  type: string;
  detail: string;
};

export const experience: Role[] = [
  {
    company: "Dhanvith Ventures LLP",
    title: "Software Developer",
    period: "Nov 2025 — Present",
    type: "Full-time",
    detail:
      "Web and mobile products across analytics, monitoring and business management. Frontend, database-connected applications, and shipping features through design, testing and deployment.",
  },
  {
    company: "Ideafloats Technologies",
    title: "Full Stack Developer Intern",
    period: "Sep 2025 — Nov 2025",
    type: "Internship",
    detail:
      "Healthcare platforms for digital health management. Built responsive interfaces, dashboard components and data-driven features.",
  },
  {
    company: "Ideafloats Technologies",
    title: "UI/UX Design Intern",
    period: "Jun 2025 — Sep 2025",
    type: "Internship",
    detail:
      "Wireframes, user flows and high-fidelity interfaces in Figma, then worked with developers to get them built as designed.",
  },
];

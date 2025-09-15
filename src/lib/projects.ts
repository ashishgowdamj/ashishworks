export type Project = {
  title: string;
  description: string;
  tech: string[];
  category: string;
  image: string;
  features?: string[];
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Advina Solutions",
    description:
      "Modern business website with clean, responsive design and clear service presentation.",
    tech: ["Web", "Business Website", "Responsive"],
    category: "Web",
    image: "/advina-hero.png",
    features: ["Service Showcase", "Responsive Layout", "Modern UI"],
    link: "https://advina.in/",
  },
  {
    title: "Dhanvith Ventures",
    description:
      "Professional business website featuring modern design, services showcase, and client engagement.",
    tech: ["Wix", "Web Design", "Business Website", "Responsive"],
    category: "Web",
    image: "/dhanvith-hero.png",
    features: ["Business Showcase", "Professional Design", "Client Engagement"],
    link: "https://www.dhanvith-ventures.com",
  },
  {
    title: "EduCompare",
    description:
      "Cross‑platform mobile app for iOS and Android built with React Native (Expo). Backend powered by MongoDB.",
    tech: ["React Native", "Expo", "MongoDB", "iOS", "Android"],
    category: "Mobile",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=500&fit=crop&auto=format",
    features: ["Cross‑Platform", "Modern UI", "MongoDB Backend"],
  },
  {
    title: "Interactive Learning Platform",
    description:
      "React app with interactive quizzes, progress tracking, and personalized learning paths.",
    tech: ["React", "TypeScript", "Local Storage"],
    category: "Web",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=500&fit=crop&auto=format",
    features: ["Quizzes", "Progress Tracking", "Responsive"],
    link: "https://interactive-learning-platform-nu.vercel.app/",
    repo: "https://github.com/ashishgowdamj",
  },
  {
    title: "GPS Simulator App",
    description:
      "Android app with advanced GPS functionality, location spoofing, and sharing.",
    tech: ["Android", "Java", "SQLite"],
    category: "Mobile",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop&auto=format",
    features: ["Real-time Tracking", "Location Sharing", "GPS Spoofing"],
  },
];

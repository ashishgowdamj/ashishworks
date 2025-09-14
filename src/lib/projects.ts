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
    title: "Dhanvith Ventures",
    description:
      "Professional business website featuring modern design, services showcase, and client engagement.",
    tech: ["Wix", "Web Design", "Business Website", "Responsive"],
    category: "Web",
    image:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&h=500&fit=crop&auto=format",
    features: ["Business Showcase", "Professional Design", "Client Engagement"],
    link: "https://www.dhanvith-ventures.com",
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
    title: "Travel App UI",
    description:
      "Modern travel application UI/UX in Figma with intuitive navigation and visuals.",
    tech: ["Figma", "UI/UX", "Prototyping"],
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=500&fit=crop&auto=format",
    features: ["Modern UI", "Travel Planning", "Mobile-First"],
    link: "https://www.figma.com/design/ObzfpjbvxVphl9vPVGiO1O/Travel-App?node-id=0-1",
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
  {
    title: "Netflix Landing Clone",
    description:
      "Pixel-perfect responsive clone of Netflix landing page using modern CSS.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "UI",
    image:
      "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&h=500&fit=crop&auto=format",
    features: ["Responsive Layout", "Modern CSS", "Interactive Elements"],
    link: "https://netflix-clone-beta-snowy-67.vercel.app",
  },
  {
    title: "Facebook UI Clone",
    description:
      "Social platform UI clone with modern design and responsive layout.",
    tech: ["React", "CSS", "JavaScript"],
    category: "Web",
    image:
      "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=800&h=500&fit=crop&auto=format",
    features: ["Social Interface", "Modern Design", "Interactions"],
    link: "https://face-book-clone-zzpx.vercel.app",
  },
  {
    title: "Rock Paper Scissors UI",
    description:
      "Enhanced UI for the classic game with smooth animations and great UX.",
    tech: ["JavaScript", "CSS", "HTML"],
    category: "UI/UX",
    image:
      "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=800&h=500&fit=crop&auto=format",
    features: ["Animations", "Enhanced UX", "Score Tracking"],
    link: "https://rock-paper-scissors-iota-green.vercel.app",
  },
];

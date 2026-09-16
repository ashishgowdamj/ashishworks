export type Project = {
  title: string;
  description: string;
  tech: string[];
  category: string;
  image: string;
  features?: string[];
  link?: string;
  repo?: string;
  doc?: string; // Optional: details document for unpublished apps
};

export const projects: Project[] = [
  {
    title: "Fleet Tracking & Management System",
    description:
      "Real-time fleet monitoring platform used to track vehicle activity, visualize operational data, and support management decisions.",
    tech: ["React", "TypeScript", "MQTT", "Maps Integration"],
    category: "Web",
    image:
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800&h=500&fit=crop&auto=format",
    features: [
      "Real-time fleet tracking dashboard",
      "Analytics visualizations & reporting",
      "Responsive management workflows",
    ],
  },
  {
    title: "Offers Unlimited",
    description:
      "Cross-platform mobile app that helps users discover deals, offers, and business promotions across multiple locations. Includes admin dashboard for managing promotions and catalogues.",
    tech: ["React Native", "Supabase", "REST APIs"],
    category: "Mobile",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop&auto=format",
    features: [
      "Retail offers & promotions aggregator",
      "Multi-location business discovery",
      "Admin dashboard with CRUD operations",
    ],
  },
  {
    title: "Enterprise Analytics Dashboard",
    description:
      "Data management and reporting platform used to search, analyze, visualize, and manage large datasets through a unified dashboard.",
    tech: ["React", "TypeScript", "Node.js", "Express.js", "Tailwind CSS"],
    category: "Web / Analytics",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&auto=format",
    features: [
      "Search, filtering & reporting capabilities",
      "SQL-backed data workflows",
      "Large-scale data visualization",
    ],
  },
  {
    title: "GPS Simulator App",
    description:
      "Android application designed for GPS location simulation and location-based testing. Built with interactive map features and coordinate export.",
    tech: ["Java", "Android Studio", "Google Maps APIs"],
    category: "Mobile",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop&auto=format",
    features: [
      "Interactive map plotting & recording",
      "Coordinate export capabilities",
      "Real-time coordinate visualization",
    ],
  },
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
    title: "Dhanvit Ventures",
    description:
      "Professional business website featuring modern design, services showcase, and client engagement.",
    tech: ["React", "TypeScript", "Web Design", "Responsive"],
    category: "Web",
    image: "/dhanvith-hero.png",
    features: ["Business Showcase", "Professional Design", "Client Engagement"],
    link: "https://www.dhanvit-ventures.com",
  },
];

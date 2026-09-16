export type Metric = {
  value: string;
  label: string;
};

export type Project = {
  title: string;
  /** One specific line. What it is, not what category it belongs to. */
  tagline: string;
  /** The situation that made the project necessary. */
  problem: string;
  /** What I personally built. First person, scoped honestly. */
  contribution: string;
  metrics?: Metric[];
  tech: string[];
  category: string;
  year: string;
  /** Real screenshot. Omitted when there is nothing truthful to show. */
  image?: string;
  link?: string;
  repo?: string;
  doc?: string;
};

export const projects: Project[] = [
  {
    title: "FleetTrack",
    tagline: "Real-time tracking console for a live vehicle fleet.",
    problem:
      "Fleet operators were working from stale position reports. By the time a vehicle drifted off route or idled too long, the window to act had already closed.",
    contribution:
      "I built the web dashboard: a live vehicle map, geofence alerts, route playback and driver analytics. Positions arrive over a socket stream and render on Leaflet, so the map reflects what is happening on the road rather than what happened five minutes ago.",
    metrics: [
      { value: "2,000+", label: "vehicles tracked" },
      { value: "<200ms", label: "position updates" },
      { value: "99.9%", label: "uptime" },
    ],
    tech: ["React", "TypeScript", "Socket.IO", "MQTT", "Leaflet", "Supabase", "Recharts"],
    category: "Real-time systems",
    year: "2025",
    image: "/work/fleettrack-login.png",
  },
  {
    title: "Offers Unlimited",
    tagline: "Deals discovery app, plus the admin portal that feeds it.",
    problem:
      "Retail offers live in paper flyers and scattered posts. Shoppers cannot search them, and the businesses running them have no way to publish at any scale.",
    contribution:
      "I built the cross-platform mobile app and the admin portal behind it. The portal handles bulk CSV import for stores and flyers, an image pipeline for flyer pages, and full CRUD across brands, stores, categories and flyers — so a non-technical operator can load a season of promotions without touching a database.",
    metrics: [
      { value: "iOS + Android", label: "single codebase" },
      { value: "CSV bulk import", label: "operator workflow" },
      { value: "Supabase", label: "backing store" },
    ],
    tech: ["React Native", "Expo", "Supabase", "REST APIs", "PostgreSQL"],
    category: "Mobile + admin tooling",
    year: "2025",
    image: "/work/offers-unlimited-dashboard.png",
  },
  {
    title: "Enterprise Analytics Dashboard",
    tagline: "Search, filter and report across large operational datasets.",
    problem:
      "The data existed but nobody could interrogate it. Answering a routine question meant asking someone to write SQL and waiting.",
    contribution:
      "I built the reporting interface — search, filtering and visualisation over SQL-backed workflows — so the people who needed answers could get them without going through an engineer.",
    tech: ["React", "TypeScript", "Node.js", "Express", "SQL", "Tailwind CSS"],
    category: "Data platform",
    year: "2025",
  },
  {
    title: "TraceLink",
    tagline: "Asset tracking across multi-warehouse supply chains.",
    problem:
      "Warehouse floors have poor connectivity, but compliance still demands an unbroken audit trail. A scanner that only works online is a scanner that loses records.",
    contribution:
      "I worked on barcode scanning with offline-first sync, so scans queue locally and reconcile when the connection returns, and every movement lands in an audit trail that holds up under inspection.",
    tech: ["React Native", "Offline sync", "Barcode scanning", "REST APIs"],
    category: "Supply chain",
    year: "2025",
  },
  {
    title: "NavTools — GPS Simulator & Record/Replay",
    tagline: "Field-test GPS behaviour without going to the field.",
    problem:
      "Testing location features meant physically driving routes. Every code change cost hours and a tank of fuel, and a bug found at the desk could not be reproduced on demand.",
    contribution:
      "I built an Android tool to plot, record and replay custom coordinate paths, with export so a route captured once becomes a repeatable test case. QA could then reproduce a location bug at a desk instead of on a road.",
    tech: ["Java", "Android Studio", "Google Maps APIs", "NMEA"],
    category: "Developer tooling",
    year: "2024",
  },
  {
    title: "Advina Solutions",
    tagline: "Corporate site for an electronics engineering firm.",
    problem:
      "An established engineering firm had no credible web presence, which cost them enquiries they never knew about.",
    contribution:
      "I built the site end to end — responsive across devices, structured for search, and organised so a visitor understands what the firm does within one screen.",
    tech: ["React", "TypeScript", "Responsive design", "SEO"],
    category: "Web",
    year: "2025",
    image: "/advina-hero.png",
    link: "https://advina.in/",
  },
  {
    title: "Dhanvith Ventures",
    tagline: "Company site for the firm I build with.",
    problem:
      "The company needed a front door: something that presents the work clearly to prospective clients and partners.",
    contribution:
      "I designed and built the site, covering services, positioning and client engagement paths.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    category: "Web",
    year: "2025",
    image: "/dhanvith-hero.png",
    link: "https://www.dhanvith-ventures.com",
  },
  {
    title: "MatchPulse",
    tagline: "IPL match predictor. Built because I wanted to know.",
    problem:
      "A personal project. I wanted to see how far simple modelling could get on match outcomes, and to have something to argue about with friends.",
    contribution:
      "I built the data pipeline, the prediction logic and the interface. No client, no brief — which made it the project where I tried things I would not risk on someone else's product.",
    tech: ["React", "TypeScript", "Data analysis"],
    category: "Personal",
    year: "2025",
    image: "/work/matchpulse.png",
  },
];

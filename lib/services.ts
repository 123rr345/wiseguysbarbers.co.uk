export interface Service {
  name: string;
  description: string;
  price: string;
  duration: string;
  icon: string;
  isNew?: boolean;
  tagline?: string;
}

export const popularServices: Service[] = [
  {
    name: "Haircut & Wash",
    description: "Clean, sharp haircut with a fresh wash, tailored to your style.",
    price: "£21",
    duration: "25min",
    icon: "scissors",
  },
  {
    name: "Skin Fade",
    description: "Detailed fade with a smooth blend and sharp finish.",
    price: "£23",
    duration: "30min",
    icon: "scissors",
  },
  {
    name: "Haircut & Beard",
    description: "Full service including haircut and beard shaping.",
    price: "£33",
    duration: "45min",
    icon: "scissors",
  },
  {
    name: "Skin Fade & Beard",
    description: "Premium skin fade paired with a sharp beard trim.",
    price: "£36",
    duration: "40min",
    icon: "scissors",
  },
  {
    name: "Hot Towel Shave / Beard Trim & Shape Up",
    description: "Traditional hot towel shave or a clean beard trim and shape-up.",
    price: "£18",
    duration: "20min",
    icon: "flame",
  },
  {
    name: "Wise Guys Deluxe",
    description: "The full works — haircut, beard, hot towel treatment and more.",
    price: "£47",
    duration: "55min",
    icon: "sparkles",
    tagline: "Our signature service",
  },
];

export const otherServices: Service[] = [
  {
    name: "Buzz Cut",
    description: "Quick, clean buzz cut with even coverage.",
    price: "£18",
    duration: "15min",
    icon: "scissors",
  },
  {
    name: "Kids Haircut (under 12)",
    description: "Clean, patient service for younger clients.",
    price: "£16 / £18",
    duration: "25min",
    icon: "scissors",
    tagline: "Weekdays £16 · Weekends £18",
  },
  {
    name: "Kids Skin Fade",
    description: "Detailed skin fade for younger clients.",
    price: "£19",
    duration: "25min",
    icon: "scissors",
  },
  {
    name: "O.A.P Haircut",
    description: "Discounted cut for senior customers.",
    price: "£16 / £21",
    duration: "25min",
    icon: "scissors",
    tagline: "Weekdays £16 · Weekends £21",
  },
  {
    name: "O.A.P Skin Fade",
    description: "Skin fade for senior customers at a discounted rate.",
    price: "£17",
    duration: "25min",
    icon: "scissors",
  },
  {
    name: "Hot Wax",
    description: "Quick wax treatment for a clean, tidy look.",
    price: "£8",
    duration: "10min",
    icon: "droplets",
  },
  {
    name: "Face Mask",
    description: "Refreshing face mask to rejuvenate your skin.",
    price: "£8",
    duration: "15min",
    icon: "sparkles",
  },
  {
    name: "Threading",
    description: "Precise eyebrow threading for a defined, sharp look.",
    price: "£10",
    duration: "10min",
    icon: "sparkles",
  },
  {
    name: "Perm & Haircut",
    description: "Professional hair perming by an experienced female stylist with over 22 years in the industry.",
    price: "£95",
    duration: "2h",
    icon: "waves",
    isNew: true,
    tagline: "22+ years of styling expertise",
  },
];

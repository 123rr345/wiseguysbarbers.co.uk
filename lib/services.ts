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
    name: "Skin Fade",
    description: "Detailed fade with a smooth blend and sharp finish.",
    price: "£24",
    duration: "30min",
    icon: "scissors",
  },
  {
    name: "Haircut",
    description: "Clean, sharp haircut tailored to your style.",
    price: "£22",
    duration: "25min",
    icon: "scissors",
  },
  {
    name: "Haircut & Beard",
    description: "Full service including haircut and beard shaping.",
    price: "£35",
    duration: "45min",
    icon: "scissors",
  },
  {
    name: "Skin Fade & Beard",
    description: "Premium skin fade paired with a sharp beard trim.",
    price: "£38",
    duration: "40min",
    icon: "scissors",
  },
  {
    name: "Hot Towel Shave",
    description: "Traditional shave with hot towel treatment for a smooth finish.",
    price: "£20",
    duration: "20min",
    icon: "flame",
  },
  {
    name: "Kids Skin Fade",
    description: "Clean, patient service for younger clients.",
    price: "£18",
    duration: "25min",
    icon: "scissors",
  },
];

export const otherServices: Service[] = [
  {
    name: "Kid's Haircut (under 12)",
    description: "Clean, patient service for younger clients.",
    price: "£17",
    duration: "25min",
    icon: "scissors",
  },
  {
    name: "O.A.P (Mon–Thur)",
    description: "Discounted cut for senior customers, Monday to Thursday.",
    price: "£16",
    duration: "25min",
    icon: "scissors",
  },
  {
    name: "Beard Shave",
    description: "Shape up, line-up and tidy.",
    price: "£20",
    duration: "15min",
    icon: "scissors",
  },
  {
    name: "Head Shave",
    description: "Clean head shave for a sharp, fresh look.",
    price: "£21",
    duration: "25min",
    icon: "scissors",
  },
  {
    name: "Buzz Cut",
    description: "Quick, clean buzz cut with even coverage.",
    price: "£21",
    duration: "25min",
    icon: "scissors",
  },
  {
    name: "Head Shave & Beard Trim",
    description: "Complete head shave paired with a beard shape-up.",
    price: "£36",
    duration: "40min",
    icon: "scissors",
  },
  {
    name: "Full Service",
    description: "The works — haircut, beard, and hot towel treatment.",
    price: "£50",
    duration: "55min",
    icon: "sparkles",
  },
  {
    name: "Nose Waxing",
    description: "Quick nose hair removal for a clean look.",
    price: "£8",
    duration: "15min",
    icon: "droplets",
  },
  {
    name: "Eyebrow Shaping",
    description: "Precise brow shaping for a defined look.",
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

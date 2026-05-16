export interface Service {
  name: string;
  description: string;
  price: string;
  icon: string;
  isNew?: boolean;
  tagline?: string;
}

export const services: Service[] = [
  {
    name: "Skin Fades & Haircuts",
    description:
      "Precision fades and cuts tailored to your style. From low skin fades to textured crops, we've got you.",
    price: "From £15",
    icon: "scissors",
  },
  {
    name: "Beard Trims & Shaping",
    description:
      "Clean lines and sharp edges. We sculpt and shape your beard to complement your face.",
    price: "From £10",
    icon: "scissors",
  },
  {
    name: "Hot Towel Shaves",
    description:
      "The classic barbershop experience. Hot towels, warm lather, and a razor-smooth finish.",
    price: "From £15",
    icon: "flame",
  },
  {
    name: "Full Face Threading",
    description:
      "Precise hair removal for clean, defined brows and a fresh-faced look.",
    price: "From £8",
    icon: "sparkles",
  },
  {
    name: "Hot Wax",
    description:
      "Quick, effective waxing for nose, ears, and brows. Walk out feeling polished.",
    price: "From £5",
    icon: "droplets",
  },
  {
    name: "Perms",
    description:
      "Professional hair perming by an experienced female stylist with over 22 years in the industry.",
    price: "From £40",
    icon: "waves",
    isNew: true,
    tagline: "22+ years of styling expertise",
  },
];

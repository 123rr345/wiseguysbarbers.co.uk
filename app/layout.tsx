import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wise Guys Barbers | Hoddesdon's Premier Barbershop",
  description:
    "Sharp cuts, skin fades, beard trims, hot towel shaves & perms in Hoddesdon. Walk-ins welcome 7 days a week. Book online via Booksy.",
  keywords: [
    "barber",
    "Hoddesdon",
    "skin fade",
    "beard trim",
    "hot towel shave",
    "perms",
    "Wise Guys Barbers",
    "Hertfordshire",
    "Broxbourne",
  ],
  openGraph: {
    title: "Wise Guys Barbers | Hoddesdon",
    description:
      "Sharp cuts, skin fades, beard trims & more. Walk-ins welcome 7 days a week.",
    type: "website",
    locale: "en_GB",
    url: "https://wiseguysbarbers.co.uk",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

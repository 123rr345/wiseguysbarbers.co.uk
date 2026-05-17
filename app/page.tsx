import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import BookingCTA from "@/components/BookingCTA";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";
import FloatingSocial from "@/components/FloatingSocial";
import ScrollToTop from "@/components/ScrollToTop";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BarberShop",
  name: "Wise Guys Barbers",
  description:
    "Premium barbershop in Hoddesdon offering skin fades, beard trims, hot towel shaves, threading, waxing and perms.",
  url: "https://wiseguysbarbers.co.uk",
  telephone: "01992676774",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3A Brocket Road",
    addressLocality: "Hoddesdon",
    addressRegion: "Hertfordshire",
    postalCode: "EN11 8NZ",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.7612,
    longitude: -0.0099,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "08:00",
      closes: "18:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "09:00",
      closes: "16:00",
    },
  ],
  sameAs: ["https://www.instagram.com/wiseguyshoddesdon"],
  image: "/gallery/cut-08.jpg",
  priceRange: "££",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollToTop />
      <Nav />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <About />
        <BookingCTA />
        <Visit />
      </main>
      <Footer />
      <FloatingSocial />
    </>
  );
}

export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

export const galleryImages: GalleryImage[] = [
  { src: "/gallery/cut-02.jpg", alt: "Textured crop with skin fade", category: "Fades" },
  { src: "/gallery/cut-03.jpg", alt: "Clean skin fade", category: "Fades" },
  { src: "/gallery/cut-04.jpg", alt: "Happy customers at Wise Guys", category: "Shop" },
  { src: "/gallery/cut-05.jpg", alt: "Boys haircut with clean lines", category: "Fades" },
  { src: "/gallery/cut-06.jpg", alt: "Kids textured cut", category: "Fades" },
  { src: "/gallery/cut-07.jpg", alt: "Skin fade with beard shape-up", category: "Beards" },
  { src: "/gallery/cut-08.jpg", alt: "Wise Guys Barbers shop interior", category: "Shop" },
  { src: "/gallery/cut-09.jpg", alt: "Curly perm with fade", category: "Perms" },
  { src: "/gallery/cut-10.jpg", alt: "Boys textured crop", category: "Fades" },
  { src: "/gallery/cut-11.jpg", alt: "Low taper fade with texture", category: "Fades" },
  { src: "/gallery/cut-12.jpg", alt: "Classic slick back taper", category: "Fades" },
  { src: "/gallery/cut-13.jpg", alt: "Loose perm with fade", category: "Perms" },
  { src: "/gallery/cut-14.jpg", alt: "Messy textured crop fade", category: "Fades" },
  { src: "/gallery/cut-15.jpg", alt: "Mid fade with beard trim", category: "Beards" },
  { src: "/gallery/cut-16.jpg", alt: "Perm and fade combination", category: "Perms" },
  { src: "/gallery/cut-17.jpg", alt: "Perm rods in progress", category: "Perms" },
  { src: "/gallery/cut-19.jpg", alt: "Clean buzz cut fade", category: "Fades" },
  { src: "/gallery/cut-20.jpg", alt: "Fresh textured fade", category: "Fades" },
];

export const categories = ["All", "Fades", "Beards", "Perms", "Shop"];

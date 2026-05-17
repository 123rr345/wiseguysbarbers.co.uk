export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

export const galleryImages: GalleryImage[] = [
  { src: "/gallery/cut-01.jpg", alt: "Skin fade with beard trim", category: "Beards" },
  { src: "/gallery/cut-02.jpg", alt: "Textured crop from the back", category: "Fades" },
  { src: "/gallery/cut-03.jpg", alt: "Clean mid fade side profile", category: "Fades" },
  { src: "/gallery/cut-04.jpg", alt: "Skin fade with textured top", category: "Fades" },
  { src: "/gallery/cut-05.jpg", alt: "Kids curly perm with fade", category: "Perms" },
  { src: "/gallery/cut-06.jpg", alt: "Boys clean buzz cut", category: "Fades" },
  { src: "/gallery/cut-07.jpg", alt: "Kids textured crop with highlights", category: "Fades" },
  { src: "/gallery/cut-08.jpg", alt: "Textured mullet with fade", category: "Fades" },
  { src: "/gallery/cut-09.jpg", alt: "Low fade with textured top", category: "Fades" },
  { src: "/gallery/cut-10.jpg", alt: "Afro taper fade", category: "Fades" },
  { src: "/gallery/cut-11.jpg", alt: "Curly crop with fade", category: "Perms" },
  { src: "/gallery/cut-12.jpg", alt: "Taper fade back view", category: "Fades" },
  { src: "/gallery/cut-13.jpg", alt: "Fresh crop fade side profile", category: "Fades" },
  { src: "/gallery/cut-14.jpg", alt: "Skin fade with beard shape-up", category: "Beards" },
  { src: "/gallery/cut-15.jpg", alt: "Afro curls back view", category: "Fades" },
  { src: "/gallery/cut-16.jpg", alt: "Classic taper with styled top", category: "Fades" },
];

export const categories = ["All", "Fades", "Beards", "Perms"];

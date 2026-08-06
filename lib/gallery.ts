export type GalleryPhoto = {
  src: string;
  alt: string;
  barber?: string;
};

export const galleryPhotos: GalleryPhoto[] = [
  { src: "/images/barber-3.jpeg", alt: "Fresh cut", barber: "NICK" },
  { src: "/images/barber-juan.jpeg", alt: "Fresh cut", barber: "JUAN" },
  { src: "/images/barber-mario.jpeg", alt: "Fresh cut", barber: "MARIO" },
  { src: "/images/barber-kesean.jpeg", alt: "Fresh cut", barber: "KESEAN" },
];

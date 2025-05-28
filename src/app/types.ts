export interface MuseumItem {
  id: string;
  title: string;
  date: string;
  shortDescription: string;
  longDescription: string;
  imageUrl: string;
  category: string;
}

export type ViewMode = "main_menu" | "slideshow" | "detail" | "about";

export interface MuseumTopic {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

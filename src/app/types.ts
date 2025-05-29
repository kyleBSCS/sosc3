export interface ProminentFigure {
  name: string;
  bio: string;
  works: string[];
  events: string[];
  born: string;
  died: string;
  imageUrl?: string; // Optional portrait
}

export interface MuseumItem {
  id: string;
  title: string;
  date: string;
  shortDescription: string;
  longDescription: string;
  imageUrl: string;
  category: string;
  prominentFigure?: ProminentFigure; // Only for relevant items
}

export type ViewMode = "main_menu" | "slideshow" | "detail" | "about";

export interface MuseumTopic {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

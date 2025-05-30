export interface ProminentFigure {
  name: string;
  bio: string;
  works: { title: string; imageUrl: string }[];
  events: { title: string; imageUrl: string }[];
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
  prominentFigure?: ProminentFigure;
  referenceUrl?: string[];
}

export type ViewMode = "main_menu" | "slideshow" | "detail" | "about";

export interface MuseumTopic {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

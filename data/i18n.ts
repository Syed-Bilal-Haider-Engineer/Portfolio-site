import { de } from "./de";
import { en } from "./en";

export type Locale = "en" | "de";
export type Copy = typeof en;

export const dictionaries: Record<Locale, Copy> = {
  en,
  de: de as Copy,
};

export const LOCALES: { id: Locale; label: string }[] = [
  { id: "en", label: "EN" },
  { id: "de", label: "DE" },
];

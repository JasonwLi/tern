import type { Locale } from "./config";
import { en, type Dictionary } from "./dictionaries/en";
import { es } from "./dictionaries/es";
import { pt } from "./dictionaries/pt";
import { de } from "./dictionaries/de";
import { fr } from "./dictionaries/fr";
import { it } from "./dictionaries/it";
import { ja } from "./dictionaries/ja";
import { ko } from "./dictionaries/ko";
import { zhTW } from "./dictionaries/zh-TW";

const dictionaries: Record<Locale, Dictionary> = {
  en,
  es,
  pt,
  de,
  fr,
  it,
  ja,
  ko,
  "zh-TW": zhTW,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? en;
}

export type { Dictionary };

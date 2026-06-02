import type { Locale } from "./config";
import { en, type Dictionary } from "./dictionaries/en";
import { es } from "./dictionaries/es";
import { ja } from "./dictionaries/ja";
import { ko } from "./dictionaries/ko";
import { zhTW } from "./dictionaries/zh-TW";

const dictionaries: Record<Locale, Dictionary> = {
  en,
  es,
  ja,
  ko,
  "zh-TW": zhTW,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? en;
}

export type { Dictionary };

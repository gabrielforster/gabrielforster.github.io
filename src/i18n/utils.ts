import { ui, defaultLang, showDefaultLang } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`;
  };
}

export function useSwitchLanguagePath(currentUrl: URL) {
  const currentLang = getLangFromUrl(currentUrl);
  const pathname = currentUrl.pathname;

  return function switchLanguagePath(targetLang: string): string {
    // Strip the current lang prefix if present
    const stripped = currentLang !== defaultLang
      ? pathname.replace(new RegExp(`^/${currentLang}(/|$)`), "/")
      : pathname;

    // Add target lang prefix if needed
    if (!showDefaultLang && targetLang === defaultLang) {
      return stripped || "/";
    }
    return `/${targetLang}${stripped === "/" ? "" : stripped}` || `/${targetLang}`;
  };
}

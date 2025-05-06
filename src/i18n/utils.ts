import { labels } from "./ui";
const defaultLang = "en";

export function useTranslations(langs: keyof typeof labels ){
    return function translate(key:keyof typeof labels[typeof defaultLang]){
        return labels[langs][key]||labels[defaultLang][key];
    }
}
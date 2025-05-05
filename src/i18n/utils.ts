import { labels } from "./ui";
const defaultlang = "en";

export function useTranslations(langs: keyof typeof labels ){
    return function translate(key:keyof typeof labels[typeof defaultlang]){
        return labels[langs][key]||labels[defaultlang][key];
    }
}
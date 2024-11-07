import { ui, defaultLang, showDefaultLang } from './ui'

export function getLangFromUrl(url: URL) {
	const [, lang] = url.pathname.split('/')
	if (lang in ui) return lang as keyof typeof ui
	return defaultLang
}

export function useTranslations(lang: keyof typeof ui) {
	return function t(key: keyof (typeof ui)[typeof defaultLang]) {
		return ui[lang][key] || ui[defaultLang][key]
	}
}

export function useTranslatedPath(currentLang: keyof typeof ui) {
	return function translatePath(path: string, targetLang: string = currentLang) {
		const segments = path.split('/').filter(Boolean);

		if (segments[0] in ui) {
			if (targetLang === defaultLang && !showDefaultLang) {
				segments.shift();
			} else {
				segments[0] = targetLang;
			}
		} else {
			if (targetLang !== defaultLang || showDefaultLang) {
				segments.unshift(targetLang);
			}
		}
		return '/' + segments.join('/');
	};
}

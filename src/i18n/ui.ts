export const languages = {
    fr: 'Français',
    en: 'English',
};

export const defaultLang = 'fr';
export const showDefaultLang = false;

export const ui = {
    fr: {
        'nav.home': 'Accueil',
        'nav.about': 'À propos',

        '404.head.title' : '404 — Page non trouvée',
        '404.head.description' : 'Erreur 404 — Cette page n\'a pas été trouvé',
        '404.page.title': '404',
        '404.page.oops': 'Oups !',
        '404.page.sorry': 'Désolé, nous n\'avons pas pu trouver votre page.',
        '404.page.home': 'Retourner à l\'accueil',

        'footer.rights': 'Tous droits réservés',
    },
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',

        '404.head.title' : '404 — Page not found',
        '404.head.description' : 'Error 404 — This page was not found',
        '404.page.title': '404',
        '404.page.oops': 'Oops!',
        '404.page.sorry': 'Sorry, we couldn\'t find your page.',
        '404.page.home': 'Go back to the homepage',

        'footer.rights': 'All rights reserved',
    },
} as const;
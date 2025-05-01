import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.umd.js';
import 'https://cdn.jsdelivr.net/gh/orestbida/iframemanager@1.2.5/dist/iframemanager.js';

CookieConsent.run({

    categories: {
        nécessaires: {
            enabled: true,  // cette catégorie est activée par défaut
            readOnly: true  // cette catégorie ne peut pas être désactivée
        },
        données: {
            enabled: false,  // cette catégorie est désactivée par défaut
            readOnly: false  // cette catégorie peut être désactivée
        },
    },

    language: {
        default: 'fr',
        translations: {
            fr: {
                "consentModal": {
                    "title": "Nous utilisons des cookies",
                    "description": "Nous utilisons des cookies et vos données personnelles pour améliorer votre expérience sur notre site web. Vous pouvez choisir d'accepter tous les cookies ou de gérer vos préférences.",
                    "acceptAllBtn": "Accepter tous les cookies",
                    "acceptNecessaryBtn": "Refuser tous les cookies",
                    "showPreferencesBtn": "Gérer vos préférences"
                },
                "preferencesModal": {
                    "title": "Gestion des preferences",
                    "acceptAllBtn": "Accepter tous les cookies",
                    "acceptNecessaryBtn": "Refuser tous les cookies",
                    "savePreferencesBtn": "Accepter la sélection actuelle",
                    "closeIconLabel": "Fermer la fenêtre",
                    "sections": [
                        {
                            "title": "Cookies nécessaires",
                            "description": "Ces cookies sont indispensables au bon fonctionnement du site et ne peuvent pas être désactivés.",
                            "linkedCategory": "nécessaires",
                            "cookieTable": {
                                "caption": "Cookie table",
                                "headers": {
                                    "name": "Cookie",
                                    "desc": "Description",
                                    "domain": "Domain",
                                    "expiration": "Expiration"
                                },
                                "body": [
                                    {
                                        "name": "cookie de session",
                                        "desc": "Ce site utilise des cookies nécessaires à l'authentication d'un utilisateur pour son utilisation sécurisée. Ils ne peuvent pas être désactivés.",
                                        "domain": "Localhost",
                                        "expiration": "Session"
                                    }
                                ]
                            }
                        },
                        {
                            "title": "Collecte et utilisation des données personnelles",
                            "description": "Nous collectons et stockons certaines données personnelles, telles que votre nom d'utilisateur, mot de passe, et adresse email, afin de vous offrir une expérience utilisateur optimale et sécurisée. Voici comment nous utilisons ces informations :",
                            "linkedCategory": "données",
                            "cookieTable": {
                                "caption": "Données table",
                                "headers": {
                                    "name": "Donnée",
                                    "desc": "Description",
                                },
                                "body": [
                                    {
                                        "name": "Username",
                                        "desc": "Permet de vous identifier de manière unique sur notre site et de personnaliser votre expérience (pour l'affichage du nom de l'utilsateur dans le cadre de meeting et pour préciser quel utilisateur qui a déposé un document)."
                                    },
                                    {
                                        "name": "Password",
                                        "desc": "Assure la sécurité de votre compte et protège vos informations personnelles."
                                    },
                                    {
                                        "name": "Full Name",
                                        "desc": "Utilisé pour personnaliser les communications et interactions sur notre site."
                                    },
                                    {
                                        "name": "Email",
                                        "desc": "Utilisée pour la communication importante concernant votre compte, telles que les notifications et pour la réinitialisation du mot de passe."
                                    },
                                    {
                                        "name": "Photo de profil",
                                        "desc": "Permet de personnaliser votre compte et de faciliter les interactions avec d'autres utilisateurs."
                                    },
                                    {
                                        "name": "Identifiant",
                                        "desc": "Utilisé pour gérer et suivre votre compte de manière unique et sécurisée."
                                    },
                                    {
                                        "name": "Rôle",
                                        "desc": "Permet de définir les permissions et accès spécifiques à votre compte en fonction de votre position ou fonction."
                                    },
                                    {
                                        "name": "Documents",
                                        "desc": "Utilisés pour stocker et gérer les fichiers que vous avez téléchargés sur notre site, facilitant ainsi l'accès et le partage de ces documents."
                                    }
                                ]
                            }
                        },
                        {
                            "title": "Plus d'informations",
                            "description": "Pour toute question relative à ma politique en matière de cookies et à vos choix, veuillez <a href='#contact-page'>nous contacter</a>"
                        }
                    ]
                }
            }
        }
    }
});
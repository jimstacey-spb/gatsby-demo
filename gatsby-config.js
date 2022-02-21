module.exports = {
    pathPrefix: "/gatsby-demo",
    siteMetadata: {
        title: `My Gatsby Site`,
        siteUrl: `https://www.yourdomain.tld`
    },
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/locales`,
                name: `locales`
            }
        },
        {
            resolve: `gatsby-plugin-react-i18next`,
            options: {
                localeJsonSourceName: `locales`,
                languages: [`en`, `ru`],
                defaultLanguage: `en`,
                siteUrl: `http://localhost:8000/`,
                getLanguageFromPath: true,
                i18nextOptions: {
                    interpolation: {
                        escapeValue: false
                    },
                    keySeparator: false,
                    nsSeparator: false
                },
            }
        }
    ]
};
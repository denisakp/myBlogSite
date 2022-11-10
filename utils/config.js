const config = {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    inProduction: process.env.IN_PRODUCTION || false,
    site: {
        name: "Denis AKPAGNONITE",
        description: "La description de mon site web",
        lang: "fr",
        title: "Denis AKPAGNONITE - Mon site web"
    },
};

export default config;

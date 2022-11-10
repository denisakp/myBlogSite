import config from "./config"

const generateMeta = (meta) => {
    return [
        { name: 'title', content: (meta && meta.title) || `${config.site.title}`},
        { name: 'description', content: (meta && meta.description) || `${config.site.description}`},

        { name: 'og:type', content: 'website' },
        { name: 'og:url', content: (meta && meta.ogUrl) || `${config.baseUrl}` },
        { name: 'og:title', content: (meta && meta.ogTitle) || `${config.site.title}` },
        { name: 'og:description', content: (meta && meta.ogDescription) || `${config.site.description}` },
        { name: 'og:image', content: (meta && meta.ogImage) || 'https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png' },

        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:url', content: `${config.baseUrl}` },
        { name: 'twitter:tile', content: `${config.site.title}` },
        { name: 'twitter:description', content: `${config.site.description}` },
        { name: 'twitter:image', content: 'https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png' },
    ]
}

export default generateMeta

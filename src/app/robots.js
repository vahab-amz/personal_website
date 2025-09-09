export default function robots() {
    const base = 'https://vahab-amz.com';
    return {
        rules: [
            { userAgent: '*', allow: '/' },
            { userAgent: '*', disallow: ['/api/'] },
        ],
        sitemap: `${base}/sitemap.xml`,
        host: base,
    };
}

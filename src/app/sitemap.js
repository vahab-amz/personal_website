export default function sitemap() {
  const base = 'https://vahab-amz.com';
  const locales = ['en', 'es'];
  const routes = ['', '/about', '/cv'];

  const urls = [];

  for (const locale of locales) {
    for (const route of routes) {
      urls.push({
        url: `${base}/${locale}${route}`,
        lastModified: new Date(),
        alternates: {
          languages: {
            en: `${base}/en${route}`,
            es: `${base}/es${route}`
          }
        }
      });
    }
  }

  return urls;
}
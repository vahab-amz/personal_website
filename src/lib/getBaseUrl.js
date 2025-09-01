export default function getBaseUrl() {
    if (typeof window !== 'undefined') {
        // Client-side (browser)
        return '';
    }

    if (process.env.NODE_ENV === 'development') {
        return 'http://localhost:3000';
    }

    if (
        process.env.VERCEL_ENV === 'production' &&
        process.env.VERCEL_PROJECT_PRODUCTION_URL
    ) {
        return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
    }

    if (process.env.VERCEL_URL) {
        return `https://${process.env.VERCEL_URL}`;
    }

    // Fallback
    return 'http://localhost:3000';
}

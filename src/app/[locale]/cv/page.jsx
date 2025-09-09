import CvClientView from '@/components/view/CvClientView';
import { Suspense } from 'react';
import { getTranslations, setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }) {
    setRequestLocale(locale);
    const t = await getTranslations({ locale, namespace: 'metadata' });

    return {
        title: t('cvTitle'),
        description: t('cvDescription'),
        alternates: { canonical: `/${locale}/cv` },
        openGraph: {
            title: t('cvTitle'),
            description: t('cvDescription'),
            url: `https://vahab-amz.com/${locale}/cv`,
            images: [`/og.png`],
        },
    };
}

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: 'https://vahab-amz.com/cv',
    name: 'Currículum Vitae – Vahab Azimzadeh',
    about: {
        '@id': 'https://vahab-amz.com/#person',
    },
    dateModified: '2025-09-01',
};

function Cv() {
    return (
        <>
            <Suspense fallback={null}>
                <CvClientView />
            </Suspense>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </>
    );
}

export default Cv;

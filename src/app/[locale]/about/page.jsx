import ContactForm from '@/components/ContactForm';
import { Minus } from 'lucide-react';
import React from 'react';
import { useTranslations } from 'next-intl';
import { Suspense } from 'react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import AboutPic from '../../../../public/images/AboutCover.png';

export async function generateMetadata({ params: { locale } }) {
    setRequestLocale(locale);
    const t = await getTranslations({ locale, namespace: 'metadata' });

    return {
        title: t('aboutTitle'),
        description: t('aboutDescription'),
        alternates: { canonical: `/${locale}/about` },
        openGraph: {
            title: t('aboutTitle'),
            description: t('aboutDescription'),
            url: `https://vahab-amz.com/${locale}/about`,
            images: [`/og.png`],
        },
    };
}

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://vahab-amz.com/#person',
    name: 'Vahab Azimzadeh',
    description:
        'Full-Stack Developer based in Barcelona, passionate about creating user-friendly digital products.',
    jobTitle: 'Full-Stack Developer',
    url: 'https://vahab-amz.com/about',
    sameAs: [
        'https://github.com/vahab-amz',
        'https://www.linkedin.com/in/vahab-azimzadeh-sadeghi-a10097247',
    ],
};

function AboutMe() {
    const t = useTranslations('aboutMePage');

    return (
        <>
            <main className="p-2 md:p-5">
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-[50%] p-1 md:p-5 flex flex-col justify-center">
                        <h1
                            className="text-red-600 text-5xl font-bold intersect-once intersect:motion-preset-slide-up"
                            suppressHydrationWarning
                        >
                            {t('aboutMe')}
                        </h1>
                        <p
                            className="text-lg mt-5 text-justify font-medium dark:font-normal intersect-once intersect:motion-preset-slide-up"
                            suppressHydrationWarning
                        >
                            {t('title')}
                        </p>
                    </div>
                    <div
                        className="w-full md:w-[50%] mt-5 md:mt-0 intersect-once intersect:motion-preset-slide-up flex items-center"
                        suppressHydrationWarning
                    >
                        <Image
                            src={AboutPic}
                            alt="about-picture"
                            width={400}
                            height="auto"
                            className="object-cover mx-auto border-5 border-slate-500 dark:border-slate-700  rounded-2xl"
                            priority
                        />
                    </div>
                </div>
                <div className="flex justify-center">
                    <Minus size="60px" color="red" />
                    <Minus size="60px" color="red" />
                    <Minus size="60px" color="red" />
                    <Minus size="60px" color="red" />
                    <Minus size="60px" color="red" />
                    <Minus size="60px" color="red" />
                    <Minus size="60px" color="red" />
                    <Minus size="60px" color="red" />
                    <Minus size="60px" color="red" />
                    <Minus size="60px" color="red" />
                </div>
                <div className="w-full flex justify-center mb-20">
                    <Suspense fallback={null}>
                        <ContactForm />
                    </Suspense>
                </div>
            </main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </>
    );
}

export default AboutMe;

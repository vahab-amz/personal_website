import ContactForm from '@/components/ContactForm';
import { Minus } from 'lucide-react';
import React from 'react';
import { useTranslations } from 'next-intl';
import { Suspense } from 'react';

// export const dynamic = 'force-static';

export const metadata = {
    title: 'About Me – Vahab Azimzadeh',
    description:
        'Learn more about my background, journey into web development, and passion for building user-friendly digital products.',
};

function AboutMe() {
    const t = useTranslations('aboutMePage');

    return (
        <main className="p-5">
            <h1 className="text-red-600 text-5xl font-bold intersect-once intersect:motion-preset-slide-up">
                {t('aboutMe')}
            </h1>
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-[45%] mt-4 p-5">
                    <p className="text-lg intersect-once intersect:motion-preset-slide-up">
                        {t('title')}
                    </p>
                </div>
                <div className="w-[80%] h-[200px] md:w-[55%] intersect-once intersect:motion-preset-slide-up  rounded"></div>
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
    );
}

export default AboutMe;

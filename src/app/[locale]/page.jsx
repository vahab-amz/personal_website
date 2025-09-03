import { Button } from '@/components/ui/button';
import { Minus } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

// export const dynamic = 'force-static';

export const metadata = {
    title: 'Vahab Azimzadeh – Full-Stack Developer',
    description:
        'Explore my portfolio, skills, and experience as a Full-Stack Developer based in Barcelona. Specialized in Next.js, React, Tailwind CSS.',
};

export default function Home() {
    const t = useTranslations('HomePage');
    const tt = useTranslations('Navbar');

    return (
        <main className="bg-[url('/images/main-pic-light.png')] dark:bg-[url('/images/main-pic-dark.png')] transition-all duration-150 bg-no-repeat bg-cover bg-center absolute left-0 top-0 w-full h-full ">
            <div className="p-10 pt-30 md:p-40 md:pt-40 h-full backdrop-blur-xs dark:backdrop-blur-none">
                <div className="max-w-[1400px] mx-auto motion-preset-slide-right motion-duration-1000 motion-ease-in-out ">
                    <h1 className="text-8xl font-extrabold">
                        {t('hello')}
                        <span className="text-red-600">.</span>
                    </h1>
                    <h1 className="text-4xl font-semibold flex items-center">
                        <Minus size="60px" color="red" /> {t('intro')} VAHAB
                    </h1>
                    <div className="inline-block">
                        <h1 className="text-2xl font-semibold tracking-[5px] mb-4">
                            {t('title')}
                        </h1>
                        <div className="flex justify-center space-x-3 mt-10 ">
                            <Button
                                asChild
                                variant="outline"
                                className="dark:border-red-600 "
                            >
                                <Link href="/cv">CV</Link>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                className="dark:border-red-600 "
                            >
                                <Link href="/about">{tt('about')}</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

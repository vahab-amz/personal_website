import { Button } from '@/components/ui/button';
import { Minus } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Home() {
    const t = useTranslations('HomePage');
    const tt = useTranslations('Navbar');

    return (
        <div className="p-20">
            <h1 className="text-8xl font-extrabold">
                {t('hello')}
                <span className="text-red-600">.</span>{' '}
            </h1>
            <h1 className="text-4xl font-semibold flex items-center">
                <Minus size="60px" color="red" /> {t('intro')} VAHAB
            </h1>
            <div className="inline-block">
                <h1 className="text-2xl font-semibold tracking-[5px] mb-4">
                    {t('title')}
                </h1>
                <div className="flex justify-center space-x-3 mt-10">
                    <Button
                        asChild
                        variant="outline"
                        className="dark:border-red-600"
                    >
                        <Link href="/cv">CV</Link>
                    </Button>
                    <Button
                        asChild
                        variant="outline"
                        className="dark:border-red-600"
                    >
                        <Link href="/about">{tt('about')}</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}

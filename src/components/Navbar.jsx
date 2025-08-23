import { Link } from '@/i18n/navigation';
import React from 'react';
import { Button } from './ui/button';
import { useTranslations } from 'next-intl';
import ModeToggle from './ModeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { AlignJustify } from 'lucide-react';

function Navbar() {
    const t = useTranslations('Navbar');
    return (
        <main className="flex items-center justify-between py-5 md:py-10">
            <div className="space-x-3 hidden md:block">
                <Button asChild variant="navLinkLg">
                    <Link href="/">{t('home')}</Link>
                </Button>
                <Button asChild variant="navLinkLg">
                    <Link href="/portfolio">{t('portfolio')}</Link>
                </Button>
                <Button asChild variant="navLinkLg">
                    <Link href="/about">{t('about')}</Link>
                </Button>
                <Button asChild variant="navLinkLg">
                    <Link href="/cv">CV</Link>
                </Button>
            </div>
            <div className="md:hidden">
                <Sheet>
                    <SheetTrigger>
                        <AlignJustify />
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[270px]">
                        <SheetHeader>
                            <SheetTitle>{t('menu')}</SheetTitle>
                            <SheetDescription className="flex flex-col items-center justify-center">
                                <Button asChild variant="navLinkSm">
                                    <Link href="/">{t('home')}</Link>
                                </Button>
                                <Button asChild variant="navLinkSm">
                                    <Link href="/portfolio">
                                        {t('portfolio')}
                                    </Link>
                                </Button>
                                <Button asChild variant="navLinkSm">
                                    <Link href="/about">{t('about')}</Link>
                                </Button>
                                <Button asChild variant="navLinkSm">
                                    <Link href="">CV</Link>
                                </Button>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
            <div>
                <ModeToggle />
                <LanguageSwitcher />
            </div>
        </main>
    );
}

export default Navbar;

'use client';

import { Link, usePathname } from '@/i18n/navigation';
import React, { useEffect, useState } from 'react';
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
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    return (
        <main className="flex items-center justify-between py-5 md:py-10 z-10 relative backdrop-blur-xs dark:backdrop-blur-none">
            <div className="space-x-3 hidden md:block">
                <Button asChild variant="navLinkLg">
                    <Link href="/">{t('home')}</Link>
                </Button>
                {/* <Button asChild variant="navLinkLg">
                    <Link href="/portfolio">{t('portfolio')}</Link>
                </Button> */}
                <Button asChild variant="navLinkLg">
                    <Link href="/cv">CV</Link>
                </Button>
                <Button asChild variant="navLinkLg">
                    <Link href="/about">{t('about')}</Link>
                </Button>
            </div>
            <div className="md:hidden">
                <Sheet open={open} onOpenChange={setOpen}>
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
                                {/* <Button asChild variant="navLinkSm">
                                    <Link href="/portfolio">
                                        {t('portfolio')}
                                    </Link>
                                </Button> */}
                                <Button asChild variant="navLinkSm">
                                    <Link href="/cv">CV</Link>
                                </Button>
                                <Button asChild variant="navLinkSm">
                                    <Link href="/about">{t('about')}</Link>
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

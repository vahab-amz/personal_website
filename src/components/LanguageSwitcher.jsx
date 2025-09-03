'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation'; // helpers ساختۀ next-intl
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';

const LOCALES = ['es', 'en'];

export default function LanguageDropdown() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const cleanPath = pathname.replace(/^\/(fa|en|es)(?=\/|$)/, '') || '/';

    const changeLang = (next) => {
        router.replace(cleanPath, { locale: next });
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Switch language"
                >
                    <Languages className="h-5 w-5" />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
                {LOCALES.map((l) => (
                    <DropdownMenuItem key={l} onClick={() => changeLang(l)}>
                        {l === 'es' ? 'Español' : 'English'}
                        {locale === l ? ' ✓' : ''}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

function NotFound() {
    const t = useTranslations('notFound');
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-8xl font-bold animate-bounce">404</h1>
            <p className="text-xl text-gray-600 my-4">{t('message')}</p>
            <Button asChild>
                <Link href="/">{t('backHome')}</Link>
            </Button>
        </div>
    );
}

export default NotFound;

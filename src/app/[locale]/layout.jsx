import { ThemeProvider } from '@/components/theme-provider';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import './globals.css';
import Navbar from '@/components/Navbar';
import { Toaster } from '@/components/ui/sonner';
import ObserverProvider from './ObserverProvider';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { Suspense } from 'react';

export const metadata = {
    title: 'Vahab Azimzadeh – Full-Stack Developer in Barcelona',
    description:
        'Portfolio and CV of Vahab Azimzadeh, a passionate Full-Stack Web Developer specialized in Next.js, React, Tailwind CSS and modern web technologies.',
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }) {
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }
    setRequestLocale(locale);
    const messages = await getMessages();
    return (
        <html lang={locale} messages={messages} suppressHydrationWarning>
            <body className="relative">
                <NextIntlClientProvider>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChang
                    >
                        <main className="w-full min-h-screen max-w-[1400px] mx-auto px-5 z-10">
                            {/* <div className="absolute inset-0 backdrop-blur-xs"></div> */}
                            <Suspense fallback={null}>
                                <Navbar />
                            </Suspense>
                            <ObserverProvider>{children}</ObserverProvider>
                            <Toaster />
                        </main>
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}

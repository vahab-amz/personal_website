'use client';
import { Observer } from 'tailwindcss-intersect';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ObserverProvider({ children }) {
    const pathname = usePathname();

    useEffect(() => {
        Observer.start({ rootMargin: '0px 0px -15% 0px' });
        return () => Observer.stop?.();
    }, []);

    useEffect(() => {
        Observer.stop?.();
        Observer.start({ rootMargin: '0px 0px -15% 0px' });
    }, [pathname]);

    return <>{children}</>;
}

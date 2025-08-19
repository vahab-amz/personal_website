import ModeToggle from "@/components/ModeToggle";
import {useTranslations} from 'next-intl';

export default function Home() {
    const t = useTranslations('HomePage');
    return (
        <div>
            Hi from Next
            <ModeToggle />
            <h1>{t('title')}</h1>
        </div>
    );
}

import CvClientView from '@/components/view/CvClientView';
import { Suspense } from 'react';

export const dynamic = 'force-static';

export const metadata = {
    title: 'Curriculum Vitae – Vahab Azimzadeh',
    description:
        'Download and view the CV of Vahab Azimzadeh, showcasing education, work experience, skills and projects as a Full-Stack Developer.',
};

function Cv() {
    return (
        <Suspense fallback={null}>
            <CvClientView />
        </Suspense>
    );
}

export default Cv;

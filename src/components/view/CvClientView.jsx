'use client';

import React, { useEffect, useState, useRef } from 'react';
import { MapPin, Minus } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { otherSkills, skills } from '@/components/mock/skill';
import CvPic from '../../../public/images/CvCover.png';
import Image from 'next/image';
import { Button } from '../ui/button';

function CvClientView() {
    const t = useTranslations('HomePage');
    const tt = useTranslations('CvPage');
    const locale = useLocale();

    const baseDelay = 200;
    const stepDelay = 120;

    const skillsRef = useRef(null);
    const showSkills = useInViewOnceSkill(skillsRef, {
        threshold: 0.1,
        rootMargin: '0px 0px -20% 0px',
    });

    return (
        <main className="mt-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row">
                <div
                    className="order-last md:order-none flex w-[70%] h-[300px] md:w-[40%] mx-auto md:mx-0 mt-5 md:mt-0 rounded-xl intersect-once intersect:motion-preset-slide-up"
                    suppressHydrationWarning
                >
                    <Image
                        src={CvPic}
                        alt="cv-picture"
                        sizes="100vw"
                        fill
                        className="object-contain"
                    />
                </div>
                <div
                    className="order-first md:order-none w-full md:w-[60%] ps-1 md:ps-5 lg:ps-10 intersect-once intersect:motion-preset-slide-up"
                    suppressHydrationWarning
                >
                    <div className="inline-block px-2 pb-4 md:px-4 md:pb-8 border-l-2 border-b-4 border-l-red-600 border-b-red-600">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                            VAHAB
                        </h1>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                            AZIMZADEH SADEGHI
                        </h1>
                    </div>

                    <h2 className="text-2xl font-semibold tracking-[4px] md:tracking-[5px] mt-4 ps-4">
                        {t('title')}
                    </h2>

                    <div className="ps-4 mt-4 flex justify-between md:block">
                        <div className="flex items-center space-x-20">
                            <div className="space-x-4">
                                <a
                                    href="https://github.com/vahab-amz"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-red-500 transition-colors"
                                    aria-label="GitHub profile"
                                >
                                    GitHub
                                </a>
                                <a
                                    href="https://linkedin.com/in/vahab-azimzadeh-sadeghi-a10097247"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-red-500 transition-colors"
                                    aria-label="LinkedIn profile"
                                >
                                    LinkedIn
                                </a>
                            </div>
                            <div>
                                {locale === 'es' ? (
                                    <Button asChild variant="destructive">
                                        <a
                                            href="/cv/CV_VahabAzimzadehSadeghi_EN.pdf"
                                            download
                                            aria-label="Download CV (PDF)"
                                        >
                                            {
                                                tt(
                                                    'download_cv'
                                                )
                                            }
                                        </a>
                                    </Button>
                                ) : (
                                    <Button asChild variant="destructive">
                                        <a
                                            href="/cv/CV_VahabAzimzadehSadeghi_EN.pdf"
                                            download
                                            aria-label="Download CV (PDF)"
                                        >
                                            {
                                                tt(
                                                    'download_cv'
                                                )
                                            }
                                        </a>
                                    </Button>
                                )}
                            </div>
                        </div>
                        <div className="flex items-center gap-2 md:mt-3 text-muted-foreground">
                            <MapPin className="size-4" />
                            <span>Barcelona, Spain</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="mt-10 flex flex-col md:flex-row">
                {/* Left column */}
                <div className="w-full md:w-[45%] lg:w-[40%] p-1 lg:p-5 order-last md:order-none">
                    {/* Skills */}
                    <h3
                        className="text-4xl ps-5 md:ps-10 font-medium intersect-once intersect:motion-preset-slide-up"
                        suppressHydrationWarning
                    >
                        {tt('mySkill')}
                    </h3>

                    <div
                        ref={skillsRef}
                        className="mt-5 w-full md:max-w-[90%] intersect-once intersect:motion-preset-slide-up"
                        suppressHydrationWarning
                    >
                        <Table>
                            <TableHeader>
                                <TableRow className="text-xl">
                                    <TableHead className="w-[150px]">
                                        Skill
                                    </TableHead>
                                    <TableHead className="text-center">
                                        Status
                                    </TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {skills?.map((skill, i) => (
                                    <TableRow key={skill.title}>
                                        <TableCell className="font-medium p-2 text-lg">
                                            {skill.title}
                                        </TableCell>
                                        <TableCell>
                                            <div className="h-[20px] w-full bg-slate-300/70 dark:bg-slate-400 overflow-hidden rounded">
                                                <div
                                                    className="h-full bg-slate-700 origin-left transform-gpu will-change-transform
                                                                transition-transform duration-1000 ease-out motion-reduce:transition-none"
                                                    style={{
                                                        // GPU scaleX → روان‌تر از تغییر width
                                                        transform: `scaleX(${showSkills ? (Number(skill.status) || 0) / 100 : 0})`,
                                                        transitionDelay: `${baseDelay + i * stepDelay}ms`,
                                                        opacity: showSkills
                                                            ? 1
                                                            : 0.2,
                                                    }}
                                                    role="progressbar"
                                                    aria-label={`${skill.title} ${skill.status}%`}
                                                    aria-valuenow={
                                                        Number(skill.status) ||
                                                        0
                                                    }
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                />
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>

                    {/* Other skills */}
                    <h3
                        className="text-4xl ps-5 md:ps-10 font-medium mt-10 intersect-once intersect:motion-preset-slide-up"
                        suppressHydrationWarning
                    >
                        {tt('otherSkill')}
                    </h3>
                    <ul
                        className="mt-4 space-y-2 intersect-once intersect:motion-preset-slide-up"
                        suppressHydrationWarning
                    >
                        {otherSkills?.map((key) => (
                            <li
                                className="text-lg flex items-center gap-2"
                                key={key}
                            >
                                <Minus
                                    size={20}
                                    color="red"
                                    className="mt-[2px]"
                                />
                                {tt(key)}
                            </li>
                        ))}
                    </ul>

                    {/* Languages */}
                    <h3
                        className="text-4xl ps-5 md:ps-10 font-medium mt-10 intersect-once intersect:motion-preset-slide-up"
                        suppressHydrationWarning
                    >
                        {tt('language')}
                    </h3>
                    <div
                        className="mt-4 w-full md:max-w-[90%] intersect-once intersect:motion-preset-slide-up"
                        suppressHydrationWarning
                    >
                        <Table>
                            <TableBody>
                                <LangRow
                                    label={tt('persian')}
                                    filled={7}
                                    total={7}
                                    start={0}
                                />
                                <LangRow
                                    label={tt('spanish')}
                                    filled={4}
                                    total={7}
                                    start={200}
                                />
                                <LangRow
                                    label={tt('english')}
                                    filled={4}
                                    total={7}
                                    start={400}
                                />
                            </TableBody>
                        </Table>
                    </div>
                </div>

                {/* Right column */}
                <div className="w-full md:w-[55%] lg:w-[60%] p-1 lg:p-5 order-first md:order-none">
                    {/* About me */}
                    <SectionTitle>{tt('aboutMe')}</SectionTitle>
                    <p
                        className="mt-5 ps-3 md:ps-5 text-lg/6 intersect-once intersect:motion-preset-slide-up"
                        suppressHydrationWarning
                    >
                        {tt('aboutMeContext')}
                    </p>

                    {/* Education */}
                    <div className="mt-10 ">
                        <SectionTitle>{tt('myEducation')}</SectionTitle>
                        <div
                            className="mt-5 intersect-once intersect:motion-preset-slide-up"
                            suppressHydrationWarning
                        >
                            <div>
                                <div className="flex gap-6 md:gap-20 p-2 hover:bg-muted/50 border-b transition-colors">
                                    <div className="flex flex-col font-medium grow">
                                        <span className="w-[90px] lg:w-auto text-md md:text-lg">
                                            2023 - 2025
                                        </span>
                                        <span className="text-sm">Ilerna</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-lg/6">
                                            {tt('degree')}
                                        </span>
                                        <span className="text-sm">
                                            {tt('daw')}
                                        </span>
                                    </div>
                                </div>
                                <p className="p-2 md:p-5 text-lg/6">
                                    {tt('myEducationContext')}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Work Experience */}
                    <div className="mt-10">
                        <SectionTitle>{tt('workExperience')}</SectionTitle>
                        <div
                            className="mt-5 intersect-once intersect:motion-preset-slide-up"
                            suppressHydrationWarning
                        >
                            <div>
                                <div className="flex gap-6 md:gap-20 p-2 hover:bg-muted/50 border-b transition-colors">
                                    <div className="flex flex-col font-medium grow">
                                        <span className="text-lg md:w-[170px] lg:w-auto">
                                            Mar 2025 – Jul 2025
                                        </span>
                                        <span className="text-sm">
                                            Empresa Kidson S.L.
                                        </span>
                                    </div>
                                    <div className="flex flex-col flex-none">
                                        <span className="text-lg">
                                            {tt('intership')}
                                        </span>
                                    </div>
                                </div>
                                <p className="p-2 md:p-5 text-lg/6">
                                    {tt('workExperienceContext')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
function SectionTitle({ children }) {
    return (
        <h2
            className="text-4xl font-medium relative px-3 md:px-10 after:absolute after:-bottom-3 after:left-0 md:after:-left-4 after:h-[1.5px] after:w-[50%] after:bg-red-600 intersect-once intersect:motion-preset-slide-up"
            suppressHydrationWarning
        >
            {children}
        </h2>
    );
}

function LangRow({ label, filled = 0, total = 7, start = 0 }) {
    const anchorRef = useRef(null);
    const show = useInViewOnceLang(anchorRef, { threshold: 0.2 });

    const dots = Array.from({ length: total });

    return (
        <TableRow>
            <TableCell className="p-2 font-medium text-lg">{label}</TableCell>
            <TableCell>
                <div
                    ref={anchorRef}
                    className="flex items-center justify-evenly"
                >
                    {dots.map((_, i) => {
                        const active = i < filled;
                        return (
                            <div
                                key={i}
                                className={[
                                    'w-5 h-5 lg:w-6 lg:h-6 rounded-full',
                                    'transition-[transform,opacity,background-color] duration-500 ease-out',
                                    'motion-reduce:transition-none',
                                    show
                                        ? 'scale-100 opacity-100'
                                        : 'scale-75 opacity-0',
                                    show &&
                                        (active
                                            ? 'bg-slate-700'
                                            : 'bg-slate-400'),
                                ].join(' ')}
                                style={{
                                    transitionDelay: `${start + i * 90}ms`,
                                }}
                                aria-hidden="true"
                            />
                        );
                    })}
                </div>
            </TableCell>
        </TableRow>
    );
}

function useInViewOnceLang(ref, options = { threshold: 0.15 }) {
    const [inView, setInView] = useState(false);

    useEffect(() => {
        if (!ref.current || inView) return;
        const io = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true);
                io.unobserve(ref.current);
            }
        }, options);
        io.observe(ref.current);
        return () => io.disconnect();
    }, [ref, inView, options.threshold]);

    return inView;
}

function useInViewOnceSkill(
    ref,
    { threshold = 0.15, rootMargin = '0px 0px -15% 0px' } = {},
) {
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el || inView) return;
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    io.unobserve(entry.target);
                }
            },
            { threshold, rootMargin },
        );
        io.observe(el);
        return () => io.disconnect();
    }, [ref, inView, threshold, rootMargin]);
    return inView;
}

export default CvClientView;

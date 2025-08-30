'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from './ui/button';
import { sendEmail } from './services';
import { toast } from 'sonner';
import { useTranslations } from 'next-intl';

function ContactForm() {
    const t = useTranslations('aboutMePage');

    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmitForm = async (data) => {
        setLoading(true);
        const result = await sendEmail(data);
        if (result.error) {
            toast.error('Failed to send, please try again');
        } else {
            toast.success('Message sent successfully');
        }
        setLoading(false);
        reset();
    };

    return (
        <div className="mt-10 intersect-once intersect:motion-preset-slide-up">
            <form
                className="bg-slate-500 dark:bg-slate-800 w-[400px] p-4 rounded-lg"
                onSubmit={handleSubmit(onSubmitForm)}
            >
                <h1 className="text-4xl font-bold mb-5">{t('formTitle')}</h1>
                <div className="relative mb-4">
                    <input
                        {...register('name', { required: true })}
                        type="text"
                        id="name"
                        className="block px-4 py-2 w-full text-lg border rounded-md focus:outline-none  peer"
                        placeholder=" "
                        autoComplete="off"
                    />
                    <label
                        htmlFor="name"
                        className="absolute left-4 top-2 bg-slate-500 dark:bg-slate-800 duration-200 transform -translate-y-5 scale-75 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5 peer-focus:text-gray-800 dark:peer-focus:text-gray-400"
                    >
                        {t('name')}
                    </label>
                    {errors.name && (
                        <span className="text-red-600 ms-3">
                            {t('nameRequired')}
                        </span>
                    )}
                </div>
                <div className="relative mb-4">
                    <input
                        {...register('email', { required: true })}
                        type="email"
                        id="email"
                        className="block px-4 py-2 w-full text-lg border rounded-md focus:outline-none peer"
                        placeholder=" "
                        autoComplete="off"
                    />
                    <label
                        htmlFor="email"
                        className="absolute left-4 top-2 bg-slate-500 dark:bg-slate-800 duration-200 transform -translate-y-5 scale-75 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5 peer-focus:text-gray-800 dark:peer-focus:text-gray-400"
                    >
                        {t('email')}
                    </label>
                    {errors.email && (
                        <span className="text-red-600 ms-3">
                            {t('emailRequired')}
                        </span>
                    )}
                </div>
                <div className="relative ">
                    <textarea
                        {...register('message', { required: true })}
                        id="message"
                        className="block px-4 py-2 w-full text-lg border rounded-md focus:outline-none peer h-[200px]"
                        placeholder=" "
                        autoComplete="off"
                    ></textarea>
                    <label
                        htmlFor="message"
                        className="absolute left-4 top-2 bg-slate-500 dark:bg-slate-800 duration-200 transform -translate-y-5 scale-75 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5 peer-focus:text-gray-800 dark:peer-focus:text-gray-400"
                    >
                        {t('message')}
                    </label>
                    {errors.message && (
                        <span className="text-red-600 ms-3">
                            {t('messageRequired')}
                        </span>
                    )}
                </div>
                <div className="mt-4">
                    <Button variant="default" type="submit" disabled={loading}>
                        {loading ? (
                            <span className="flex items-center">
                                <svg
                                    className="mr-3 size-5 animate-spin"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                    ></path>
                                </svg>
                                {t('sendLoading')}
                            </span>
                        ) : (
                            <span>{t('send')}</span>
                        )}
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;

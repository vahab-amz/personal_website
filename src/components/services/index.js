'use server';

import getBaseUrl from '@/lib/getBaseUrl';

export const sendEmail = async (data) => {
    try {
        const res = await fetch(`${getBaseUrl()}/api/send`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        if (!res.ok) {
            const e = await res.json().catch(() => ({}));
            return {
                error: true,
                message: e?.error || `Request failed: ${res.status}`,
            };
        }

        const out = await res.json();
        return { error: false, data: out };
    } catch (err) {
        return { error: true, message: err.message };
    }
};

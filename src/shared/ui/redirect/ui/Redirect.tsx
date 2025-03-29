'use client';

import { useRouter } from 'next/navigation';
import { memo } from 'react';
import { useMount } from '~/shared/lib/hooks';

type RedirectProps = {
    href: string;
    /**
     * The number of milliseconds to wait before calling the `redirect`.
     */
    delay?: number;
};

const Redirect: React.FC<RedirectProps> = memo(({ href, delay }) => {
    const router = useRouter();

    useMount(() => {
        if (delay) setTimeout(() => router.replace(href), delay);
        else router.replace(href);
    });

    return null;
});
Redirect.displayName = 'Redirect';

export default Redirect;

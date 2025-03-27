import { addSeconds } from 'date-fns/addSeconds';
import { isAfter } from 'date-fns/isAfter';
import { useEffect, useMemo, useState } from 'react';
import { env } from '~/env';

type UseCountdownOpts = {
    onReady?: () => void;
};

const targetDate = env.NEXT_PUBLIC_TARGET_DATE;

const useTarget = () => {
    return useMemo(() => {
        const date = new Date();

        if (isAfter(date, targetDate) || env.NEXT_PUBLIC_DEBUG_COUNTDOWN) {
            return addSeconds(date, env.NEXT_PUBLIC_COUNTDOWN_EXPIRE_OFFSET).getTime();
        }

        return targetDate.getTime();
    }, []);
};

export const useCountdown = ({ onReady }: UseCountdownOpts) => {
    const [isReady, setIsReady] = useState(false);
    const target = useTarget();
    const [countdown, setCountdown] = useState(Math.floor((target - Date.now()) / 1000));

    useEffect(() => {
        if (isReady) return;

        const interval = setInterval(() => {
            const newSeconds = Math.floor((target - Date.now()) / 1000);

            if (newSeconds > 0) return setCountdown(newSeconds);

            setCountdown(0);
            setIsReady(true);
            onReady?.();
        }, 1000);

        return () => clearInterval(interval);
    }, [target, isReady, onReady]);

    const hours = Math.floor((countdown % 3600) / 360);
    const minutes = Math.floor((countdown % 3600) / 60);
    const seconds = countdown % 60;

    return {
        hours,
        minutes,
        seconds,
        countdown,
    };
};

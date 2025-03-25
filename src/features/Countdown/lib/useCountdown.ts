import { addSeconds } from 'date-fns/addSeconds';
import { isAfter } from 'date-fns/isAfter';
import { useEffect, useMemo, useState } from 'react';
import { targetDate } from '../config/targetDate';

type UseCountdownOpts = {
    onReady?: () => void;
};

const useTarget = () => {
    return useMemo(() => {
        const date = new Date();

        if (isAfter(date, targetDate) || true) return addSeconds(date, 5).getTime();

        return targetDate.getTime();
    }, []);
};

export const useCountdown = ({ onReady }: UseCountdownOpts) => {
    const [isReady, setIsReady] = useState(false);
    const target = useTarget();
    const [seconds, setSeconds] = useState(Math.floor((target - Date.now()) / 1000));

    useEffect(() => {
        if (isReady) return;

        const interval = setInterval(() => {
            const newSeconds = Math.floor((target - Date.now()) / 1000);

            if (newSeconds > 0) return setSeconds(newSeconds);

            setSeconds(0);
            setIsReady(true);
            onReady?.();
        }, 1000);

        return () => clearInterval(interval);
    }, [target, isReady, onReady]);

    return seconds;
};

import { useEffect, useState } from 'react';

export const useIsShown = (countdown: number) => {
    const [prevCountdown, setPrevCountdown] = useState(countdown);

    useEffect(() => setPrevCountdown(countdown), [countdown]);

    return prevCountdown > 0;
};

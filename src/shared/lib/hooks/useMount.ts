'use client';

import { type EffectCallback, useEffect, useRef } from 'react';

export const useMount = (effect: EffectCallback) => {
    const mountedRef = useRef(false);

    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    useEffect(() => {
        if (mountedRef.current) return;

        const destructor = effect();

        return () => {
            mountedRef.current = true;
            destructor?.();
        };
    }, []);
};

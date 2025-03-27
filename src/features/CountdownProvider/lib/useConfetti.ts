'use client';

import confetti from 'canvas-confetti';

const count = 200;
const defaults: confetti.Options = {
    origin: { y: 0.9 },
    ticks: 500,
};

const fire = (particleRatio: number, opts?: confetti.Options) => {
    confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
    });
};

export const useConfetti = () => {
    return async () => {
        await new Promise(resolve => setTimeout(resolve, 1000));

        fire(0.35, {
            spread: 26,
            startVelocity: 55,
        });
        fire(0.3, {
            spread: 60,
        });
        fire(0.45, {
            spread: 100,
            decay: 0.91,
            scalar: 0.8,
        });
        fire(0.2, {
            spread: 120,
            startVelocity: 25,
            decay: 0.92,
            scalar: 1.2,
        });
        fire(0.2, {
            spread: 120,
            startVelocity: 45,
        });
    };
};

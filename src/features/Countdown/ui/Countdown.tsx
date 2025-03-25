'use client';

import NumberFlow, { NumberFlowGroup } from '@number-flow/react';
import { useRouter } from 'next/navigation';
import { cn } from '~/lib/utils';
import { useConfetti } from '../lib/useConfetti';
import { useCountdown } from '../lib/useCountdown';
import { useIsClient } from '../lib/useIsClient';
import { Heart } from '~/entities/Heart';

type CountdownProps = {
    redirect: string;
};

const Countdown: React.FC<CountdownProps> = ({ redirect }) => {
    const router = useRouter();
    const isClient = useIsClient();

    const confetti = useConfetti();
    const countdown = useCountdown({
        onReady: () => {
            confetti();
            new Promise(resolve => setTimeout(resolve, 7000)).then(() => router.push(redirect));
        },
    });

    if (!isClient) return null;

    const minutes = Math.floor((countdown % 3600) / 60);
    const seconds = countdown % 60;

    return (
        <NumberFlowGroup>
            <div className={'relative contents'}>
                <span
                    className={cn(
                        'flex flex-row items-baseline pb-8 text-6xl',
                        countdown <= 0 && 'fade-out animate-out fill-mode-forwards delay-1000 duration-500',
                    )}
                    style={{ fontVariantNumeric: 'tabular-nums', '--number-flow-char-height': '0.85em' }}
                >
                    <NumberFlow
                        trend={-1}
                        value={minutes}
                        digits={{ 1: { max: 5 } }}
                        format={{ minimumIntegerDigits: 2 }}
                    />
                    <NumberFlow
                        prefix={':'}
                        trend={-1}
                        value={seconds}
                        digits={{ 1: { max: 5 } }}
                        format={{ minimumIntegerDigits: 2 }}
                    />
                </span>
                <Heart
                    className={cn(
                        'absolute inset-0 m-auto size-72',
                        countdown <= 0
                            ? 'fade-in animate-in fill-mode-backwards delay-[5.5s] duration-[1.5s]'
                            : 'opacity-0',
                    )}
                />
            </div>
        </NumberFlowGroup>
    );
};
Countdown.displayName = 'Countdown';

export default Countdown;

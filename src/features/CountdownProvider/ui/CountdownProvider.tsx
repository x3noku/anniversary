'use client';

import NumberFlow, { NumberFlowGroup } from '@number-flow/react';
import { AnimatePresence, motion } from 'motion/react';
import { useCountdown } from '~/entities/Countdown';
import { useIsClient } from '~/shared/lib/hooks';
import { useConfetti } from '../lib/useConfetti';
import { useIsShown } from '../lib/useIsShown';

type CountdownProviderProps = React.PropsWithChildren;

const CountdownProvider: React.FC<CountdownProviderProps> = ({ children }) => {
    const isClient = useIsClient();

    const confetti = useConfetti();
    const { hours, minutes, seconds, countdown } = useCountdown({ onReady: confetti });
    const isShown = useIsShown(countdown);

    if (!isClient) return null;

    return (
        <>
            <AnimatePresence initial={false}>
                {isShown && (
                    <motion.div
                        className={'absolute inset-0 m-auto flex h-svh w-screen flex-col items-center justify-center'}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 1 }}
                    >
                        <span className={'absolute top-24 text-center'}>
                            <h1 className={'font-heading font-semibold text-5xl'}>Anniversary</h1>
                            <h3 className={'mt-4 text-lg'}>Celebrating our love on March 29, 2025</h3>
                            <h5 className={'text-stone-500 text-xs leading-none'}>Almost March 26</h5>
                        </span>

                        <NumberFlowGroup>
                            <span
                                className={'flex flex-row items-baseline text-6xl'}
                                style={{ fontVariantNumeric: 'tabular-nums', '--number-flow-char-height': '0.85em' }}
                            >
                                {hours > 0 && (
                                    <NumberFlow trend={-1} value={hours} format={{ minimumIntegerDigits: 2 }} />
                                )}
                                <NumberFlow
                                    prefix={hours > 0 ? ':' : undefined}
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
                        </NumberFlowGroup>
                    </motion.div>
                )}
            </AnimatePresence>
            {!isShown && (
                <div className={'fade-in animate-in fill-mode-backwards delay-1000 duration-500'}>{children}</div>
            )}
        </>
    );
};
CountdownProvider.displayName = 'CountdownProvider';

export default CountdownProvider;

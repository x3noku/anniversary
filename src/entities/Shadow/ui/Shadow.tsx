import { memo } from 'react';
import { cn } from '~/lib/utils';
import styles from './Shadow.module.css';

const Shadow: React.FC = memo(() => {
    return (
        <div
            className={cn(
                '-z-10 fixed inset-0 h-lvh w-screen overflow-hidden',
                'pointer-events-none flex flex-col items-center',
            )}
        >
            <div
                className={cn(
                    '-translate-x-full absolute inset-y-0 left-0 my-auto size-[10vh] rounded-full',
                    `${styles.shadow} shadow-rose-100`,
                )}
            />
            <div
                className={cn(
                    'absolute inset-y-0 right-0 my-auto size-[10vh] translate-x-full rounded-full',
                    `${styles.shadow} shadow-rose-100`,
                )}
            />
            <div
                className={cn(
                    '-translate-y-full absolute top-0 size-[120vw] rounded-full',
                    `${styles.shadow} shadow-rose-200/60`,
                )}
            />
            <div
                className={cn(
                    'absolute bottom-0 size-[120vw] translate-y-full rounded-full',
                    `${styles.shadow} shadow-rose-200`,
                )}
            />
        </div>
    );
});

Shadow.displayName = 'Shadow';

export default Shadow;

'use client';

import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Heart } from '~/entities/Heart';

type ClickerProps = {
    size: number;
    redirect: string;
};

const Clicker: React.FC<ClickerProps> = ({ size, redirect }) => {
    const router = useRouter();

    const [scale, setScale] = useState(1);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const maxSize = Math.max(window.innerWidth, window.innerHeight);
        const scaledSize = (size * scale) / 2.5;

        if (scaledSize < maxSize) return;

        router.push(redirect);
    }, [size, redirect, router.push, scale]);

    return (
        <motion.button
            className={'cursor-pointer select-none'}
            animate={{ scale }}
            transition={{ type: 'spring', duration: 0.4, repeatDelay: 1 }}
            whileTap={{ scale: scale * 0.9 }}
            onTap={() => setScale(prevScale => prevScale * 1.2)}
        >
            <Heart style={{ width: `${size}px`, height: `${size}px` }} />
        </motion.button>
    );
};
Clicker.displayName = 'Clicker';

export default Clicker;

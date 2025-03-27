'use client';

import * as motion from 'motion/react-client';
import { useEffect, useState } from 'react';
import { Heart } from '~/entities/Heart';

const size = 288;

const Clicker: React.FC = () => {
    const [scale, setScale] = useState(1);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const maxSize = Math.max(window.innerWidth, window.innerHeight);
        const scaledSize = (size * scale) / 2.5;

        if (scaledSize < maxSize) return;

        console.log('take action');
    }, [scale]);

    return (
        <motion.button
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

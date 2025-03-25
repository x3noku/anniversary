'use client';

import { useEffect, useState } from 'react';
import { Heart } from '~/entities/Heart';
import * as motion from 'motion/react-client';

const Clicker: React.FC = () => {
    const [scale, setScale] = useState(1);

    useEffect(() => {
        if (scale < 7) return;

        console.log('take action');
    }, [scale]);

    return (
        <motion.button
            animate={{ scale }}
            transition={{ type: 'spring', duration: 0.4, repeatDelay: 1 }}
            onTap={() => setScale(prevScale => prevScale * 1.2)}
        >
            <Heart className={'size-72'} />
        </motion.button>
    );
};
Clicker.displayName = 'Clicker';

export default Clicker;

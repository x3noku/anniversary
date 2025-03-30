import type { Variants } from 'motion/react';
import * as motion from 'motion/react-client';
import Image from 'next/image';

const cardVariants: Variants = {
    offscreen: {
        y: 200,
    },
    onscreen: {
        y: 50,
        rotate: -6,
        transition: {
            type: 'spring',
            bounce: 0.4,
            duration: 0.8,
        },
    },
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

const clipPath =
    'polygon( 94.137% 2.068%,94.138% 2.068%,94.574% 1.953%,95.011% 1.916%,95.446% 1.955%,95.875% 2.069%,96.298% 2.256%,96.71% 2.516%,97.111% 2.847%,97.497% 3.248%,97.866% 3.717%,98.216% 4.253%,98.216% 4.253%,98.54% 4.849%,98.836% 5.494%,99.1% 6.185%,99.332% 6.917%,99.532% 7.684%,99.698% 8.483%,99.828% 9.31%,99.923% 10.159%,99.981% 11.026%,100% 11.906%,100% 11.906%,100% 88.094%,99.922% 90.025%,99.697% 91.857%,99.336% 93.565%,98.851% 95.125%,98.256% 96.513%,97.563% 97.703%,96.783% 98.671%,95.929% 99.393%,95.013% 99.844%,94.047% 100%,94.047% 100%,5.953% 100%,4.987% 99.844%,4.071% 99.393%,3.217% 98.671%,2.437% 97.703%,1.744% 96.513%,1.149% 95.125%,0.664% 93.565%,0.303% 91.857%,0.078% 90.025%,0% 88.094%,0% 88.094%,0% 47.172%,0.073% 45.14%,0.284% 43.189%,0.625% 41.343%,1.087% 39.623%,1.66% 38.051%,2.334% 36.65%,3.101% 35.442%,3.951% 34.449%,4.875% 33.694%,5.863% 33.198%,5.863% 33.198% )';

export type CardProps = {
    href: string;
    hueA: number;
    hueB: number;
};

const Card: React.FC<CardProps> = ({ href, hueA, hueB }) => {
    const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

    return (
        <motion.li
            className={'relative flex w-80 items-center justify-center overflow-hidden pt-4'}
            initial={'offscreen'}
            whileInView={'onscreen'}
            viewport={{ amount: 0.8 }}
        >
            <div className={'absolute inset-x-0 bottom-0 h-40 w-full'} style={{ clipPath, background }} />
            <motion.div
                className={'h-72 w-64 rounded-3xl bg-gradient-to-b from-stone-50 to-stone-200 p-2 shadow-xl'}
                style={{ transformOrigin: '10% 60%' }}
                variants={cardVariants}
            >
                <div className={'relative size-full overflow-hidden rounded-2xl'}>
                    <Image src={href} className={'z-10 object-cover'} fill alt={''} />
                    <div
                        className={'absolute z-30 size-full bg-gradient-to-b from-60% from-transparent to-stone-900/40'}
                    />
                </div>
            </motion.div>
        </motion.li>
    );
};
Card.displayName = 'Card';

export { Card };

'use client';

import Image from 'next/image';
import { useRotationTransform } from '~/entities/Rotation';
import { cn } from '~/lib/utils';
import converseShadow from '~/public/assets/converse-shadow.png';

const ConverseCard: React.FC = () => {
    const transform = useRotationTransform();

    return (
        <div className={'perspective-midrange absolute'}>
            <div
                className={'transform-3d h-96 w-72'}
                style={{
                    transform,
                    WebkitTransform: transform,
                }}
            >
                <div
                    className={cn(
                        'transform-3d absolute h-full w-full',
                        'bg-gradient-to-b from-stone-50 to-stone-100 shadow-xl',
                        'rounded-3xl p-2',
                    )}
                >
                    <div className={'absolute inset-2 m-auto rounded-2xl bg-gradient-to-b from-pink-100 to-pink-200'} />
                    <div
                        className={'translate-z-8 absolute inset-0 m-auto flex size-fit flex-col items-center gap-y-8'}
                    >
                        <Image
                            src={converseShadow.src}
                            width={converseShadow.width}
                            height={converseShadow.height}
                            className={'size-72'}
                            alt={''}
                        />
                        <p className={'-translate-y-16 text-xl'}>Converse 1970s All Star</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
ConverseCard.displayName = 'ConverseCard';

export default ConverseCard;

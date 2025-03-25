import Image from 'next/image';
import heart from '~/public/assets/heart.png';

type HeartProps = Omit<React.ComponentPropsWithoutRef<typeof Image>, 'src' | 'width' | 'height' | 'alt' | 'priority'>;

const Heart: React.FC<HeartProps> = props => {
    return <Image src={heart.src} width={heart.width} height={heart.height} alt={''} priority {...props} />;
};
Heart.displayName = 'Heart';

export default Heart;

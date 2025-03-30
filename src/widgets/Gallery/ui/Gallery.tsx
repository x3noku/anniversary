import { items } from '../config/items';
import { Card } from './Card';

const Gallery: React.FC = () => {
    return (
        <ul className={'flex flex-col items-center'}>
            {items.map(item => (
                <Card key={item.src} {...item} />
            ))}
        </ul>
    );
};
Gallery.displayName = 'Gallery';

export default Gallery;

import { items } from '../config/items';
import { Card } from './Card';

const Gallery: React.FC = () => {
    return (
        <ul className={'flex flex-col items-center'}>
            {items.map((item, index) => (
                <Card key={index.toString()} {...item} />
            ))}
        </ul>
    );
};
Gallery.displayName = 'Gallery';

export default Gallery;

'use client';

import { useItems } from '../config/items';
import { Card } from './Card';

const Gallery: React.FC = () => {
    const items = useItems();

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

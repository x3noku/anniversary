'use client';

import Link from 'next/link';
import { Button } from './button';

type LinkButtonProps = React.ComponentPropsWithoutRef<typeof Link>;

const LinkButton: React.FC<LinkButtonProps> = ({ onClick, ...props }) => {
    return (
        <Button asChild>
            <Link
                onClick={event => {
                    event.stopPropagation();
                    onClick?.(event);
                }}
                {...props}
            />
        </Button>
    );
};
LinkButton.displayName = 'LinkButton';

export { LinkButton };

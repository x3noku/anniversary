'use client';

import { useMemo } from 'react';
import { env } from '~/env';
import { Button } from '~/shared/ui/button';
import { api } from '~/trpc/react';
import type { CardProps } from '../ui/Card';

export const useItems = () => {
    const { isPending, mutate } = api.email.sendPromoCode.useMutation();

    return useMemo<CardProps[]>(
        () => [
            {
                src: '/assets/gallery-photo-01.jpg',

                title: 'Текст',
                description: (
                    <p>
                        Cursus aenean, dictum nascetur eleifend et tortor aliquam elit, dolor. Aliquam condimentum lacus
                        praesent quis vel, cras nisi nunc consectetur. Vivamus est ut ut hac suscipit dolor fermentum
                        dapibus tortor.
                    </p>
                ),

                hueA: 0,
                hueB: 7.06,
            },
            {
                src: '/assets/gallery-photo-02.jpg',

                title: '',
                description: '',

                hueA: 14.51,
                hueB: 21.57,
            },
            {
                src: '/assets/gallery-photo-03.jpg',

                title: '',
                description: '',

                hueA: 28.63,
                hueB: 36.08,
            },
            {
                src: '/assets/gallery-photo-04.jpg',

                title: '',
                description: '',

                hueA: 43.14,
                hueB: 50.59,
            },
            {
                src: '/assets/gallery-photo-05.jpg',

                title: '',
                description: '',

                hueA: 57.65,
                hueB: 64.71,
            },
            {
                src: '/assets/gallery-photo-06.jpg',

                title: '',
                description: '',

                hueA: 72.16,
                hueB: 79.22,
            },
            {
                src: '/assets/gallery-photo-07.jpg',

                title: '',
                description: '',

                hueA: 86.27,
                hueB: 93.73,
            },
            {
                src: '/assets/gallery-photo-08.jpg',

                title: '',
                description: '',

                hueA: 100.78,
                hueB: 107.84,
            },
            {
                src: '/assets/gallery-photo-09.jpg',

                title: '',
                description: '',

                hueA: 115.29,
                hueB: 122.35,
            },
            {
                src: '/assets/gallery-photo-10.jpg',

                title: '',
                description: '',

                hueA: 129.41,
                hueB: 136.86,
            },
            {
                src: '/assets/gallery-photo-11.jpg',

                title: '',
                description: '',

                hueA: 143.92,
                hueB: 151.37,
            },
            {
                src: '/assets/gallery-photo-12.jpg',

                title: '',
                description: '',

                hueA: 158.43,
                hueB: 165.49,
            },
            {
                cover: <h3 className={'select-none font-poppins text-8xl text-stone-500'}>?</h3>,

                title: 'Ой',
                description: (
                    <span className={'flex flex-col items-center gap-y-4'}>
                        <p className={'text-center'}>Совсем забыл упоменуть. У меня для тебя есть подарок</p>
                        <Button
                            onClick={event => {
                                event.preventDefault();
                                event.stopPropagation();

                                mutate({ email: env.NEXT_PUBLIC_RECIPIENT_EMAIL, promo: env.NEXT_PUBLIC_GIFT_PROMO });
                            }}
                            loading={isPending}
                        >
                            Какой?
                        </Button>
                    </span>
                ),

                hueA: 172.94,
                hueB: 180,
            },
        ],
        [isPending, mutate],
    );
};

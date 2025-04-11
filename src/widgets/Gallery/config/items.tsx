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
                src: '/assets/gallery-photo-06.jpg',

                title: 'Первая встреча',
                description: (
                    <span className={'space-y-2'}>
                        <p>Эта фоточка была сделана, когда мы были в кофейне в первые недели знакомства</p>
                        <p>Фотка с дачи мне не сильно нравится, поэтому будем считать первой эту)</p>
                    </span>
                ),

                hueA: 0,
                hueB: 7.06,
            },
            {
                src: '/assets/gallery-photo-02.jpg',

                title: 'Азимут',
                description: 'Ну тут что могу сказать? Был удивлен звонкости твоего голоса)',

                hueA: 14.51,
                hueB: 21.57,
            },
            {
                src: '/assets/gallery-photo-04.jpg',

                title: 'Дату не помню',
                description: 'Но эта прогулка была очень важной и очень хорошо запомнилась мне',

                hueA: 28.63,
                hueB: 36.08,
            },
            {
                src: '/assets/gallery-photo-03.jpg',

                title: 'Этот кадр',
                description: 'Особенно он. Если помнишь, у меня даже это место ассоциируется с тобой',

                hueA: 43.14,
                hueB: 50.59,
            },
            {
                src: '/assets/gallery-photo-08.jpg',

                title: 'Тут я красивый)',
                description: 'А ты смешная. Про красоту не говорю, и так понятно)',

                hueA: 57.65,
                hueB: 64.71,
            },
            {
                src: '/assets/gallery-photo-05.jpg',

                title: 'Кадры из лифта',
                description: (
                    <span className={'space-y-2'}>
                        <p>Ты их любишь делать</p>
                        <p>Жаль что в последние несколько месяцев не удавалось пополнить их коллекцию</p>
                    </span>
                ),

                hueA: 72.16,
                hueB: 79.22,
            },
            {
                src: '/assets/gallery-photo-07.jpg',

                title: 'Славянский бульвар',
                description: 'Хорошая станция метро. Одна из моих любимых в Москве)',

                hueA: 86.27,
                hueB: 93.73,
            },
            {
                src: '/assets/gallery-photo-09.jpg',

                title: 'Остров Мечты',
                description: (
                    <span className={'space-y-2'}>
                        <p>Если быть честным, то твои острова мне нравятся больше, чем этот)</p>
                        <p>Но там тоже было прикольно</p>
                    </span>
                ),

                hueA: 100.78,
                hueB: 107.84,
            },
            {
                src: '/assets/gallery-photo-10.jpg',

                title: 'Это не моё',
                description: 'А ещё маска белая, а не голубая. Я настаиваю',

                hueA: 115.29,
                hueB: 122.35,
            },
            {
                src: '/assets/gallery-photo-01.jpg',

                title: 'Поу',
                description: 'Он крутой. Спасибо большое, что подарила!',

                hueA: 129.41,
                hueB: 136.86,
            },
            {
                src: '/assets/gallery-photo-12.jpg',

                title: 'Новороссийск',
                description: 'Оттуда много крутых кадрово, но этот один из самых',

                hueA: 143.92,
                hueB: 151.37,
            },
            {
                src: '/assets/gallery-photo-11.jpg',

                title: 'Люблю тебя',
                description: (
                    <span className={'space-y-2'}>
                        <p>
                            На фотке видно, что это правда. Я тебя целую, обнимаю. Все, что делают любящие друг друга
                            люди
                        </p>
                        <p>Эта поездка была крутой, спасибо. И ты крутая, спасибо за тебя)</p>
                    </span>
                ),

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

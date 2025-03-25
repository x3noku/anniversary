import { Clicker } from '~/features/Clicker';

export default () => {
    return (
        <main
            className={
                'flex min-h-svh flex-col items-center justify-center bg-gradient-to-b from-stone-50 to-stone-300 p-8'
            }
        >
            <Clicker />
        </main>
    );
};

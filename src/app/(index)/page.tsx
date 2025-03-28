import { Clicker } from '~/features/Clicker';

export default () => {
    return (
        <main className={'flex h-svh w-screen flex-col items-center justify-center overflow-hidden p-8'}>
            <Clicker size={288} redirect={'/gallery'} />
        </main>
    );
};

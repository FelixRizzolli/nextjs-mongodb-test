import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Books',
    description: 'This is the books page.',
};

export default async function Books() {
    return (
        <main>
            <h1>This is the books page.</h1>
        </main>
    );
}
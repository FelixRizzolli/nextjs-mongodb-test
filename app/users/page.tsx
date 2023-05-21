import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Users',
    description: 'This is the users page.',
};

export default function Users() {
    return (
        <main>
            This is the users page.
        </main>
    );
}
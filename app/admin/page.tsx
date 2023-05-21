import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
    title: 'Admin',
    description: 'This is the administration page.',
};

export default async function Admin() {

    const session = await getServerSession();

    if (!session) {
        redirect('/api/auth/signin');
    }

    return (
        <main>
            <h1>This is the administration page.</h1>
        </main>
    );
}
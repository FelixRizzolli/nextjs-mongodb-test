import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Homepage',
    description: 'This is the homepage.',
};

export default function Home() {
  return (
    <main>
      <h1>This is the homepage.</h1>
    </main>
  );
}

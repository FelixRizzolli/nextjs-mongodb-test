import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'This is the about page.',
};

export default async function About() {
  return (
    <main>
      <h1>This is the about page.</h1>
    </main>
  );
}
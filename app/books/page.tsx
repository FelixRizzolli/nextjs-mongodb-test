import { Metadata } from 'next';
import BookList from './BookList';
import { Book, getBooks } from '../mongodb/books';

export const metadata: Metadata = {
  title: 'Books',
  description: 'This is the books page.',
};

export default async function Books() {
  const books: Book[] = await getBooks();

  return (
    <main>
      <h1>This is the books page.</h1>
      <BookList books={books} />
    </main>
  );
}
import { Book } from '../mongodb/books';

export default function BookList(props: {books: Book[]}) {
  console.log(props.books);
  return (
    <div>
      <h2>List of Books</h2>
      <ul>
        { 
          props.books && props.books.map((book: Book) => (
            // eslint-disable-next-line react/jsx-key
            <li key={book._id.toString()}>
              <h2>{book.title}</h2>
              <p>{book.description}</p>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
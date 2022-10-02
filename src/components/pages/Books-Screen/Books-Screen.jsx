import "./Books-Screen.css";
import { useContext, useEffect } from "react";
import { booksContext } from "../../../contexts/Books-Context.jsx";
import { getBooksApi } from "../../../service/books-service";
import BooksCard from "../Books-Card/Books-Card"
import BooksDetails from "../Books-Details/Books-Details";

function BookScreen() {
  const booksArray = ["author", "country", "language", "link", "pages", "title", "year"]
  const { books, setBooks } = useContext(booksContext);

  console.log(books);
  useEffect(() => {
    getBooksApi().then(res => setBooks(res));
  }, []);
  return (
    <div className="books_screen">
      <div className="bookscards_display">
        {books.map((bookItem) =>
          <BooksCard bookItem={bookItem} />
        )}</div>
      <BooksDetails title={booksArray} books={books} />
    </div>
  );
};

export default BookScreen;

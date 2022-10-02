import "./Books-Card.css";

function BooksCard({bookItem}) {
  return (
    <div  className="book_card">
    <p>{bookItem.author}</p>
    <p>{bookItem.country}</p>
    <p>{bookItem.language}</p>
    <p>{bookItem.link}</p>
    <p>{bookItem.pages}</p>
    <p>{bookItem.title}</p>
    <p>{bookItem.year}</p>
    </div>
  );
};

export default BooksCard;

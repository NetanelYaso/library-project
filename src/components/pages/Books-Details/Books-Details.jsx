import "./Books-Details.css";

function BooksDetails({ title, books }) {

  return (
    <div className="books-details">
      <table>
        <thead>
          {title.map(tit => 
            <th>{tit}</th>
          )
          }
        </thead>
        <tbody>
          {books.map((book) => 
            <tr>
              <td>{book.author}</td>
              <td>{book.country}</td>
              <td>{book.language}</td>
              <td>{book.link}</td>
              <td>{book.pages}</td>
              <td>{book.title}</td>
              <td>{book.year}</td>
            </tr>
          )}

        </tbody>
      </table>
    </div>
  );
};

export default BooksDetails;

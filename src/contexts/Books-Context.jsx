import { createContext,useState} from "react";
export const booksContext = createContext();

 function BooksProvider({ children }) {
    const [books, setBooks] = useState([]);
    return (
        <booksContext.Provider value= {{books,setBooks }}>
            {children}
        </booksContext.Provider>
    )
}

export default BooksProvider;
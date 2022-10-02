const BooksApi = `https://my-json-server.typicode.com/Jeck99/books-api/books`
export const getBooksApi = async () => {
    try {
        return await fetch(BooksApi)
            .then(response => response.json())
    }
    catch (error) {
        throw error
    }
}
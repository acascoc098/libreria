import { deleteBook } from "../Api/BookApi";

const Book = ({book, onDeleteBook}) => {
    const delBook = async () => {
        const response = await deleteBook(book);
        if (!response.error) {
            onDeleteBook(book)
        }
    }

    return <div>
        <h1>{book.tittle}</h1>
        <p><strong>{book.author}</strong></p>
        <p>{book.description}</p>
        <img src={book.cover} alt="portada"></img>
        {
            book.author ? <p>{book.author}</p> : <p>Autor desconocido</p>
        }
        <button onClick={delBook}>Borrar libro</button>

    </div>
}

export default Book;
import { deleteBook } from "../Api/BookApi";

const Book = ({categories,book, onDeleteBook}) => {
    const delBook = async () => {
        const response = await deleteBook(book);
        if (!response.error) {
            onDeleteBook(book)
        }
    }

    const getCategory = ()=>{
        const cat = categories.find((category)=>category.id==book.category);
        if (cat) {
          return cat.name;
        } else {
          return "No clasificado";
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
        <p>La categoría es: {getCategory()}</p>
        <button onClick={delBook}>Borrar libro</button>

    </div>
}

export default Book;
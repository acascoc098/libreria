import { useEffect, useState } from 'react';
import Book from './Book';
import { getBooks } from '../Api/BookApi';

function Booklist({categories,books,setBooks,onDeleteBook}) {
  //const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const [serverError, setServerError] = useState({error: false, message: ""});

  const downloadBooks = async () => {
    const response = await getBooks();
    if (!response.error)
      setBooks(response.data)
    else {
      setBooks([]);
      setServerError(response.data);
    }

  }

  useEffect(() => {
    setTimeout(() => {
      downloadBooks();
      setLoading(false);
    },10000)
  },[]);

  return (
    <div className="App">
      <div className="resultados">
        {
          books.length === 0 ?
            <p>No se han encontrado libros</p>
          :
            ""
        }
        {
          serverError ?
            <p>{serverError.message}</p>
          :""
        }
        {
          books.map(book =>
            <Book categories={categories} book={book} key={book.id} onDeleteBook={onDeleteBook}/>
          )
        }
      </div>
      {/*
        loading ? 
          <img src='iconos/bar-progress.gif' alt='loading'/>
        :
          books.map(book => //Sin la llaves, porque si no hay que poner un return
            <Book book={book} key={book.id} onDeleteBook={onDeleteBook}/>
          )
      */}
    </div>
  );
}

export default Booklist;

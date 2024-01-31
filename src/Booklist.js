import logo from './logo.svg';
import { useEffect, useState } from 'react';
import Book from './Book';
import { getBooks } from './BookApi';
import { wait } from '@testing-library/user-event/dist/utils';

function Booklist() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const downloadBooks = async () => {    
    //console.log(loading);
    const books = await getBooks();
    setBooks(books);
  }

  useEffect(() => {
    setTimeout(() => {
      downloadBooks();
      setLoading(false);
    },10000)
  },[]);

  return (
    <div className="App">
      {
        loading ? 
          <img src='iconos/bar-progress.gif' alt='loading'/>
        :
          books.map(book => //Sin la llaves, porque si no hay que poner un return
            <Book book={book} key={book.id}/>
          )
      }
    </div>
  );
}

export default Booklist;

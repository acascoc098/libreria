import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Book from './Book';
import { wait } from '@testing-library/user-event/dist/utils';

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const downloadBooks = async () => {    
    console.log(loading);
    const response = await fetch("http://localhost:3001/books");
    const books = await response.json();
    setBooks(books);
  }

  useEffect(() => {
    setTimeout(() => {
      downloadBooks();
      setLoading(false);
    },3000)
  },[]);

  return (
    <div className="App">
      {
        loading ? 
          <img src='iconos/bar-progress.gif' alt='loading'/>
        :
          books.map(book => //Sin la llaves, porque si no hya que poner un return
            <Book book={book} key={book.id}/>
          )
      }
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Book from './Book';

function App() {
  const [books, setBooks] = useState([]);

  const downloadBooks = async () => {
    const response = await fetch("http://localhost:3001/books");
    const books = await response.json();
    console.log(books);
    setBooks(books);
  }

  useEffect(() => {
    downloadBooks();
  },[]);

  return (
    <div className="App">
      {
        books.map(book => //Sin la llaves, porque si no hya que poner un return
          <Book book={book}/>
        )
      }
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Book from './Components/Book';
import { wait } from '@testing-library/user-event/dist/utils';
import Booklist from './Components/Booklist';
import BookForm from './Components/BookForm';

function App() {
  const [books, setBooks] = useState([]);
  const onSaveBook = (newBook) => {
    setBooks([...books,newBook]);
  }

  const onDeleteBooks = (delbook) => {
    const newBooks = books.filter((book) => delbook !== book);
    setBooks(newBooks);
  }

  return (
    <div className='App'>
      {
        //<BookForm onSaveBook={onSaveBook}/>
      }
      <Booklist books={books} setBooks={setBooks} onDeleteBook={onDeleteBooks}/>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Book from './Book';
import { wait } from '@testing-library/user-event/dist/utils';
import Booklist from './Booklist';
import BookForm from './BookForm';

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
      <BookForm saveBook={onSaveBook}/>
      <Booklist books={books} setBooks={setBooks}/>
    </div>
  );
}

export default App;

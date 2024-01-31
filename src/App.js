import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Book from './Book';
import { wait } from '@testing-library/user-event/dist/utils';
import Booklist from './Booklist';
import BookForm from './BookForm';

function App() {
  const [books, setBooks] = useState([]);
  const saveBook = (newBook) => {
    setBooks([...books,newBook]);
  }
  return (
    <div className='App'>
      <BookForm saveBook={saveBook}/>
      <Booklist books={books} setBooks={setBooks}/>
    </div>
  );
}

export default App;

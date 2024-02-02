import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Booklist from './Components/Booklist';
import BookForm from './Components/BookForm';
import BookValidationForm from './Components/BookValidationForm';

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
      <BookValidationForm onSaveBook={onSaveBook}/>
      <Booklist books={books} setBooks={setBooks} onDeleteBook={onDeleteBooks}/>
    </div>
  );
}

export default App;

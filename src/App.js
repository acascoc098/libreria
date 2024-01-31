import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Book from './Book';
import { wait } from '@testing-library/user-event/dist/utils';
import Booklist from './Booklist';
import BookForm from './BookForm';

function App() {

  return (
    <div className='App'>
      <BookForm/>
      <Booklist/>
    </div>
  );
}

export default App;

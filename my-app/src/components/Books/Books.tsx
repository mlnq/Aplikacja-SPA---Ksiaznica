import Book from './Book/Book';
import styles from './Books.module.css'
import {Link, Route} from 'react-router-dom'
import React from 'react';
import EditBook from './Book/EditBook';
import AddBook from './Book/AddBook';
import Searchbar from './SearchBar/Searchbar'

function Books(props:any) {

  const sortBookAscendRating = () => {
    const sorted = props.books.sort((a:any,b:any) => parseFloat(b.rating) - parseFloat(a.rating));
    props.setBooks([...sorted]);
  }
  const sortBookDescendRating = () => {
     const sorted = props.books.sort((a:any,b:any) => parseFloat(a.rating) - parseFloat(b.rating));
     props.setBooks([...sorted]);
   }
   const sortBookAZ = () => {
     const sorted = props.books.sort((a:any,b:any) => b.title < a.title ? 1 : -1);
     props.setBooks([...sorted]);
   }
   const sortBookZA = () => {
     const sorted = props.books.sort((a:any,b:any) => b.title > a.title ? 1 : -1);
     props.setBooks([...sorted]);
   }
   const cancelSort = () => {
     const notSorted = props.books.sort((a:any,b:any) => parseInt(a.bookId) - parseInt(b.bookId));
     props.setBooks([...notSorted]);
   }

    return (
      <div>
                    <Searchbar onSearch={props.onSearch}></Searchbar>                    

        <h2 className="h2" >Książka:</h2>


        <div className="container">
          <button type="button" className="btn btn-primary mb-5" onClick={ sortBookAscendRating }
          >Sortuj od najlepszej oceny</button>    
          <button type="button" className="btn btn-primary mb-5" onClick={ sortBookDescendRating }
          >Sortuj od najgorszej oceny</button>
          <button type="button" className="btn btn-primary mb-5" onClick={ sortBookAZ }
          >Sortuj od A do Z</button>
          <button type="button" className="btn btn-primary mb-5" onClick={ sortBookZA }
          >Sortuj od Z do A</button>
          <button type="button" className="btn btn-primary mb-5" onClick={ cancelSort }
          >Anuluj sortowanie</button>
        </div>

        <Link to={'/AddBook'}><button type="button" className="btn btn-primary mb-5"> Dodaj książkę </button></Link>
        

        {props.books.map(
          (b:any) =>  <Book className="smallBook" deleteBookData={props.deleteBookData} key={b.bookId} {...b} />
        )}

          
     </div>
    );
  }

  export default Books;
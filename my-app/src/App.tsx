import {BrowserRouter as Router,Route} from 'react-router-dom'
import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import Books from "./components/Books/Books";
import { getAllBooks , deleteBook, addBook} from './api/BooksApi';
import { useState, useEffect } from 'react';
import AddBook from "./components/Books/Book/AddBook"
import EditBook from './components/Books/Book/EditBook';

function App() {

  
  const [booksData, setBooksData] = useState<any[]>([]);
  
  // Montowanie danych
  useEffect(() => 
  {
    if(booksData.length ===  0)
    (
     async ()=> { 
       setBooksData([...(await getAllBooks())]);
      }
   )()
    console.log("komponent zamontowany");
  });


  const calcBookId = () => {
    let list = booksData;
    let maxId = 0;
    if (list.length > 0)
      list.forEach((book) => {
        if (book.bookId >= maxId)
          maxId = book.bookId;
      });
    return maxId + 1 ;
  }

  const updateBooksList = (action:any, body:any) => {
    switch (action) {
      case "PUSH":
        setBooksData(() => {
          let list = booksData;
          let id = calcBookId();
          debugger;
          let newBook = {
            ...body,
            bookId: id
          };
          return [...list,newBook];
        });
        break;
     
      case "PUT":
          setBooksData(
          () => {
                  let list = booksData;
                  let bookIndex = list.findIndex(book => book.bookId === body);
                  list.splice(bookIndex,1,body);
                  return [...list] ;
          }
        );
      break;

      case "DELETE":
          setBooksData(
          () => {
                  let list = booksData;
                  let bookIndex = list.findIndex(book => book.bookId === body);
                  list.splice(bookIndex,1);//3 parametr -> podmianka
                  return [...list] ;
          }
        );
        break;
      default:
        break;
    }
  }

  const deleteBookData  = (id:number) => 
  {       
    console.log("App przed delete")
    deleteBook(id).then
    (
      (response:any) => {
        if (response.status === 204) {
          console.log("jestem w app w 204")
            updateBooksList("DELETE", id)
        }
      }
      );
  }
  

  const addBookData = (data:any) => {
    data.bookId=calcBookId();
    addBook(data).then
    (
      (response:any) => {
        if (true) {
          console.log("jestem w app w true")
            updateBooksList("PUSH",data)
        }
      }
      );
  }
  const editBookData = (data:any) => {
    // data.bookId=calcBookId();
    // addBook(data).then
    // (
    //   (response:any) => {
    //     if (true) {
    //       console.log("jestem w app w true")
    //         updateBooksList("PUSH",data)
    //     }
    //   }
    //   );
  }

  const sortBookAscendRating = () => {
    const sorted = booksData.sort((a,b) => parseFloat(b.rating) - parseFloat(a.rating));
    setBooksData([...sorted]);
    console.log(booksData);
  }
  const sortBookDescendRating = () => {
    const sorted = booksData.sort((a,b) => parseFloat(a.rating) - parseFloat(b.rating));
    setBooksData([...sorted]);
    console.log(booksData);
  }
  const sortBookAZ = () => {
    const sorted = booksData.sort((a,b) => b.title < a.title ? 1 : -1);
    setBooksData([...sorted]);
    console.log(booksData);
  }
  const sortBookZA = () => {
    const sorted = booksData.sort((a,b) => b.title > a.title ? 1 : -1);
    setBooksData([...sorted]);
    console.log(booksData);
  }
  const cancelSort = () => {
    const notSorted = booksData.sort((a,b) => parseInt(a.bookId) - parseInt(b.bookId));
    setBooksData([...notSorted]);
    console.log(booksData);
  }

const Sort = [sortBookAscendRating,sortBookDescendRating,sortBookAZ,sortBookZA,cancelSort];




  return (  
    <Router>
    <div className="App">
      <Header className="" />

      {/* @todo ogarnac przejrzystosc kodu */}
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
      <Route exact path="/">
            <Books books={booksData} deleteBookData={deleteBookData} addBookData={addBookData} editBookData={editBookData} sort={Sort}/>
      </Route>

      <Route path="/AddBook">
                <AddBook addBook={addBookData}></AddBook>
          </Route>

      <Route path="/EditBook">
                <EditBook book={editBookData}></EditBook>
      </Route>


    </div>
      <Footer />
    </Router>
  );
}

export default App;

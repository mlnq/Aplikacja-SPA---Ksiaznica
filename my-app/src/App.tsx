import {BrowserRouter as Router,Route} from 'react-router-dom'
import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import Books from "./components/Books/Books";
import { getAllBooks , deleteBook} from './api/BooksApi';
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


  const calculateBookId = () => {
    let list = booksData;
    let maxId = 0;
    if (list.length > 0)
      list.forEach((book) => {
        if (book.bookId >= maxId)
          maxId = book.bookId;
      });
    return maxId + 1;
  }

  const updateBooksList = (action:any, body:any) => {
    switch (action) {
      case "PUSH":
        setBooksData(() => {
          let list = booksData;
          let newBook = {
            bookId: calculateBookId(),
          };

          Object.assign(newBook, body);
          list.push(newBook);
          return [...list];
        });
        break;
      // case "PUT":
      //   setBooksData(()=>{
      //     var list = booksData;
      //     var noteIndex = list.findIndex(note => note.noteId === body.noteId);
      //     list[noteIndex].title = body.title;
      //     list[noteIndex].category = body.category;
      //     list[noteIndex].content = body.content;
      //     list[noteIndex].status = body.status;
      //     list[noteIndex].time = body.time;
      //     list[noteIndex].date = body.date;

      //     return { notesList: list };
      //   });
      //   break;
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
  

  const AddBookData = () => {
    
   
  }









  return (
    <Router>
    <div className="App">
      <Header className="" />

      <Route exact path="/">
            <Books books={booksData} deleteBookData={deleteBookData}/>
      </Route>

      <Route path="/AddBook">
            <AddBook></AddBook>
      </Route>

      <Route path="/EditBook">
            <EditBook></EditBook>
      </Route>


    </div>
      <Footer />
    </Router>
  );
}

export default App;

import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import Books from "./components/Books/Books";
import { getAllBooks , deleteBook} from './api/BooksApi';
import { useState, useEffect } from 'react';

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


  const updateBooksList = (action:any, body:any) => {
    switch (action) {
      // case "PUSH":
      //   setBooksData(() => {
      //     var list = booksData;
      //     var newNote = {
      //       noteId: this.calculateNoteId(),
      //     };

      //     Object.assign(newNote, body);
      //     list.push(newNote);
      //     return { notesList: list };
      //   });
      //   break;
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
          list.splice(bookIndex);
          return list ;
          }
        );
        break;
      default:
        break;
    }
  }
  // const deleteBook  = (id:number) => 
  // {       
  //   deleteBook(id).then
  //   (
  //     (response:any) => {
  //       if (response.status === 204) {
  //           updateBooksList("DELETE", id)
  //       }
  //     }
  //     );
  // }
  

  //const sortBookAscendRating = [].concat(booksData)
  //  .sort((a,b) => a.rating > b.rating ? 1 : -1);
  
  return (
    <div className="App">
      <Header className="" />
      <Books books={booksData} />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;

import {BrowserRouter as Router,Route} from 'react-router-dom'
import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Books from "./components/Books/Books";
import { getAllBooks , deleteBook, addBook, editBook} from './api/BooksApi';
import { useState, useEffect } from 'react';
import AddBook from "./components/Books/Book/AddBook"
import EditBook from './components/Books/Book/EditBook';
import DetailsBook from './components/Books/Book/DetailsBook';


function App() {

  const [booksData, setBooksData] = useState<any[]>([]);
  

  //@TODO PROBLEM z SEARCH -- zapisywanie stanu poprzedniego
  // Montowanie danych
  useEffect(() => 
  {

   // getAllBooks().then(data=> setBooksData(data));

     
    if(booksData.length ===  0)
    (
     async ()=> { 
       setBooksData([...(await getAllBooks())]);
      }
   )()
    console.log("komponent zamontowany");
  },[booksData]);


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
                  let bookIndex = list.findIndex(book => book.bookId === body.bookId);
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
    editBook(data.bookId,{...data}).then
    (
      (response:any) => {
        if (true) {
          console.log("jestem w app w true")
            updateBooksList("PUT",data)

        }
      }
      );
  }

  //filtrowanie
  const searchHandler = (term:any) =>{
    const books = [...booksData]
                      .filter(x => x.title.toLowerCase()
                        .includes(term.toLowerCase()));
    setBooksData(books);
    ///UŁOMNIE ALE DZIALA
    if(term==="")  getAllBooks().then(data=> setBooksData(data));
    
  }





  return (  
    <Router>
    <div className="App">
      <Header  />
      
      <Route exact path="/">
            <Books books={booksData} deleteBookData={deleteBookData} setBooks={setBooksData} onSearch={searchHandler}/>
      </Route>

      <Route path="/EditBook/:id">
                <EditBook editBook={editBookData}></EditBook>
      </Route>

      <Route path="/AddBook">
                <AddBook addBook={addBookData}></AddBook>
      </Route>

      <Route path="/DetailsBook/:id">
                <DetailsBook></DetailsBook>
      </Route>
     


    </div>
      <Footer />
    </Router>
  );
}

export default App;

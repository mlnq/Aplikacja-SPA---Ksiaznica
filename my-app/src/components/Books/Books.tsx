import Book from "./Book/Book";
import styles from "./Books.module.css";
import { Link, Route } from "react-router-dom";
import React, { useContext, useState } from "react";
import Searchbar from "./Searchbar/Searchbar";
import * as Icon from "react-bootstrap-icons";
import { AuthContext } from '../../context/authContext'

function Books(props: any) {
  
  const auth = useContext(AuthContext);

  const [sortRating, setSortRating] = useState(true);
  const [sortTitle, setSortTitle] = useState(true);

  const sortBookAscendRating = () => {
    const sorted = props.books.sort(
      (a: any, b: any) => parseFloat(b.rating) - parseFloat(a.rating)
    );
    setSortRating(true);
    props.setBooks([...sorted]);
  };
  const sortBookDescendRating = () => {
    const sorted = props.books.sort(
      (a: any, b: any) => parseFloat(a.rating) - parseFloat(b.rating)
    );
    setSortRating(false);
    props.setBooks([...sorted]);
  };

  const sortBookAZ = () => {
    const sorted = props.books.sort((a: any, b: any) =>
      b.title.toLowerCase() < a.title.toLowerCase() ? 1 : -1
    );
    setSortTitle(false);
    props.setBooks([...sorted]);
  };

  const sortBookZA = () => {
    const sorted = props.books.sort((a: any, b: any) =>
      b.title.toLowerCase() > a.title.toLowerCase() ? 1 : -1
    );
    setSortTitle(true);
    props.setBooks([...sorted]);
  };

  const cancelSort = () => {
    const notSorted = props.books.sort(
      (a: any, b: any) => parseInt(a.bookId) - parseInt(b.bookId)
    );
    props.setBooks([...notSorted]);
  };

  const ratingSort = () => {
    if (sortRating === true) {
      return (
        <Icon.SortNumericUp
          className={`${styles.pointer} text-dark`}
          size={25 + 15}
          onClick={sortBookDescendRating}
        />
      );
    } else {
      return (
        <Icon.SortNumericDown
          className={`${styles.pointer} text-dark`}
          size={25 + 15}
          onClick={sortBookAscendRating}
        />
      );
    }
  };
  const titleSort = () => {
    if (sortTitle === true) {
      return (
        <Icon.SortAlphaUp
          className={`${styles.pointer} text-dark`}
          size={25 + 15}
          onClick={sortBookAZ}
        />
      );
    } else {
      return (
        <Icon.SortAlphaDown
          className={`${styles.pointer} text-dark`}
          size={25 + 15}
          onClick={sortBookZA}
        />
      );
    }
  };

  return (
    <div>
      <h2 className="h2">Czytaj bo czytać warto! </h2>

      <div className={`container ${styles.center}`}>
        <Searchbar onSearch={props.onSearch}></Searchbar>

        <div></div>

        {/* <button type="button" className="btn btn-primary mb-5" onClick={ sortBookAscendRating }
          >Sortuj od najlepszej oceny</button>    
          <button type="button" className="btn btn-primary mb-5" onClick={ sortBookDescendRating }
          >Sortuj od najgorszej oceny</button> */}

        {/* <button type="button" className="btn btn-primary mb-5" onClick={ sortBookAZ }
          >Sortuj od A do Z</button>
          <button type="button" className="btn btn-primary mb-5" onClick={ sortBookZA }
          >Sortuj od Z do A</button> */}
        {/* <button type="button" className="btn btn-primary mb-5" onClick={ cancelSort }
          >Anuluj sortowanie</button> */}
      </div>

      <div className={`${styles.inlineFlex} mb-4`}>
        
        <Link to={"/AddBook"}>
          <button type="button" className="btn btn-primary ">
            {" "}
            <Icon.PlusSquare size={25} /> Dodaj książkę{" "}
          </button>
        </Link>


        <h3 className={`${styles.right} m-0`}>
          <span className="badge bg-dark"> Sortuj</span>
          {ratingSort()}
          {titleSort()}
        </h3>
      </div>

      {props.books.map((b: any) => (
        <Book
          className="smallBook"
          deleteBookData={props.deleteBookData}
          key={b.bookId}
          {...b}
          imgURL={`https://placeimg.com/400/200/${b.bookId}`}
        />
      ))}
    </div>
  );
}

export default Books;

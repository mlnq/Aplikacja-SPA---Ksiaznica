import { useParams, Link } from "react-router-dom";
import styles from "./Book.module.css";
import React, { useEffect, useState } from "react";
import { getBookById } from "../../../api/BooksApi";
import { withStyles } from "@material-ui/core/styles";
import Rating, { IconContainerProps } from "@material-ui/lab/Rating";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function DetailsBook(props: any) {
  const { id }: any = useParams();

  //stany
  const [form, setForm] = useState({
    title: "",
    author: "",
    rating: 0,
    date: "",
    released: "",
    description: "",
  });

  useEffect(() => {
    getBookById(id).then((bookData) => setForm({ ...bookData }));
  }, [id]);

  const StyledRating = withStyles({
    iconFilled: {
      color: "#0c6d38",
    },
    iconHover: {
      color: "#0c6d38",
    },
  })(Rating);

  return (
    <>
      <h1 className="header">Detale książki</h1>

      <div className={`card ${styles.hotel}`}>
        <div className="card-body d-flex flex-column">
          <div className="form-group ">
            <div className="card border-left-info shadow h-80 py-1">
              <div className="card-body">
                <h4>Tytuł książki: </h4>
                <span>{form.title}</span>
              </div>
            </div>
          </div>
          <br />
          <div className="form-group">
            <div className="card border-left-info shadow h-80 py-1">
              <div className="card-body">
                <h4>Autor: </h4>
                <span>{form.author}</span>
              </div>
            </div>
          </div>
          <br />
          </div>
          <div className="d-flex justify-content-around">
          <div className="form-group">
            <div className="card border-left-info shadow h-1 ">
              <div className="card-body">
                <Box component="fieldset" mb={3} borderColor="transparent">
                  <h4>Ocena: </h4>
                  <StyledRating
                    precision={0.5}
                    name="read-only"
                    max={10}
                    value={form.rating}
                    readOnly
                    size="large"
                  />
                </Box>
              </div>
            </div>
          </div>
          <br />
          <div className="form-group">
            <div className="card border-left-info shadow h-100 py-2">
              <div className="card-body">
                <h4>Data wydania: </h4>
                <span>{form.date}</span>
              </div>
            </div>
          </div>
          <br />
          <div className="form-group">
            <div className="card border-left-info shadow h-100 py-2">
              <div className="card-body">
                <h4 className="custom-control-label">
                  Czy książka została wydana ?
                </h4>
                <span>
                  {form.released.includes("published")
                    ? "Książka opublikowana"
                    : "Książka nieopublikowana"}
                </span>
              </div>
            </div>
          </div>
          
          </div>
          <div className="d-flex flex-column card-body d-flex">
          <br />
          <div className="form-group">
            <div className="card border-left-info shadow h-100 py-1 ">
              <div className="card-body">
                <h4>Opis książki: </h4>
                <span>{" " + form.description}</span>
              </div>
            </div>
          </div>
          <br />
          <Link to={"/"}>
            <button type="button" className="btn btn-primary mb-5 mt-3">
              {" "}
              Powrót{" "}
            </button>
          </Link>
        </div>
      </div>
    </>
  );

  //     return(
  //         <div className="container card">
  //             <div className="card-body">
  // {/*
  //             <h4>Tytuł książki</h4>
  //             <h6>{book.title}</h6>
  //             <h4>Autor książki</h4>
  //             <h6>{ book.autor}</h6>
  //             <h4>Data wydania</h4>
  //             <h6>{ book.date}</h6>
  //             <h4>Rating książki</h4>
  //             <h6>{ book.rating}</h6>
  //             <h4>Wydanie książki</h4>
  //             <h6>{ book.released}</h6> */}

  //             </div>
  //         </div>
  //     );
}

export default DetailsBook;

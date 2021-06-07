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
        <div className="card-body">
          <div>
            <div className="form-group">
              <label>Nazwa książki: </label>
              <span>{form.title}</span>
              <br />
            </div>
            <div className="form-group">
              <label>Autor</label>
              <span>{form.author}</span>
              <br />
            </div>
            <div className="form-group">
              <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend">Ocena</Typography>
                <StyledRating
                  precision={0.5}
                  name="read-only"
                  max={10}
                  value={form.rating}
                  readOnly
                />
              </Box>
            </div>
            {/* zrobic eleganckie span na date moze callendar component?
             */}

            <div className="form-group">
              <label>Data wydania</label>
              <span>{form.date}</span>
              <br />
            </div>

            <div className="form-group">
              <label className="custom-control-label">
                Czy książka została wydana ? :
              </label>
              <span>
                {form.released.includes("published")
                  ? " opublikowany"
                  : " nieopublikowany"}
              </span>
              <br />
              <br />
            </div>

            <div className="form-group">
              <label>Opis książki: </label>
              <span>{" " + form.description}</span>
              <br />
              <Link to={"/"}>
                <button type="button" className="btn btn-primary mb-5">
                  {" "}
                  Powrót{" "}
                </button>
              </Link>
            </div>
          </div>
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

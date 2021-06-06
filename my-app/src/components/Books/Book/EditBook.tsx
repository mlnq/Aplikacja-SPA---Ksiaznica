import { useState } from "react";
import styles from "./Book.module.css";
import {useHistory, useParams} from 'react-router-dom'
import { getBookById} from '../../../api/BooksApi';
import { useEffect } from 'react';

function EditBook(props: any) {
  const history = useHistory(); 

  const {id}: any = useParams();

  //stany
  const [form, setForm] = useState({
      title: "",
      author: "",
      rating: "",
      date: "",
      released:  "",
      description: "",
    });
    
  //   const fetchBook =  async () =>{
      
  //     // let res = await getBookById(id);
  //     const bookData:any = await getBookById(id);
  
  //     setBook(bookData);
  //     console.log(book);
  // } 


  useEffect(() => {
    getBookById(id).then(bookData => setForm({...bookData}));
  },[id])


    const submit = (e: any) => {
      e.preventDefault();
      props.editBook(
                      {bookId: id,...form}
                      );
      history.push("/");
    };
    const inputOnChange = (e: any) => {
        const {name,value} = e.target;
        let val =value;
        if(e.target.type==="number") val= Number(val);
        setForm(prev => ({
            ...prev,
            [name]: val
        }));
    };
  
    return (
      <>
        <h1 className="header">Edytuj książkę</h1>
  
        <div className={`card ${styles.hotel}`}>
          <div className="card-body">
            <form onSubmit={submit}>
              <div className="form-group">
                <label>Nazwa książki</label>
                <input
                  value={form.title}
                  type="text"
                  className="form-control"
                  name="title"
                  placeholder="Wprowadź tytuł książki.."
                  onChange={inputOnChange}
                />
                <br />
              </div>
              <div className="form-group">
                <label>Autor</label>
                <input
                  value={form.author}
                  type="text"
                  className="form-control"
                  name="author"
                  placeholder="Wprowadź nazwę autora"
                  onChange={inputOnChange}
                />
                <br />
              </div>
              <div className="form-group">
                <label>Ocena</label>
                <input
                  value={form.rating}
                  type="number"
                  className="form-control"
                  name="rating"
                  placeholder="Oceń książkę.."
                  onChange={inputOnChange}
                  pattern="[0-9]*"
                />
                <br />
              </div>
              {/* zrobic eleganckie input na date moze callendar component?
               */}
  
              <div className="form-group">
                <label>Data wydania</label>
                <input
                  value={form.date}
                  type="text"
                  className="form-control"
                  name="date"
                  placeholder="Podaj datę wydania.."
                  onChange={inputOnChange}
                />
                <br />
              </div>
  
              <div className="form-group">
                <label className="custom-control-label">
                  Książka wydrukowana...{" "}
                </label>
                <input
                  className="bg-primary custom-control custom-checkbox"
                  type="checkbox"
                  value="published"
  
                  checked={form.released === "published"}
                  name="released"
                  onChange={inputOnChange}
                />
                <br />
                <br />
              </div>
  
              <div className="form-group">
                <label>Wprowadź opis książki</label>
                <textarea
                  value={form.description}
                  className="form-control"
                  name="description"
                  onChange={inputOnChange}
                />
  
                <br />
              </div>
  
              <br />
              <button className="btn btn-primary">Dodaj książkę</button>
            </form>
          </div>
        </div>
      </>
    );
}

export default EditBook;

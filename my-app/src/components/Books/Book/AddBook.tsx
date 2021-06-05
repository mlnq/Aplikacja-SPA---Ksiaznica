import { stringify } from "querystring";
import { useState } from "react";
import styles from "./Book.module.css";

function AddBook(props: any) {

   const [form,setForm] = useState({
    title: '',
    author: '',
    rating: 0,
    date: '01.01.0001',
    released: [],
    description: ''
   })

   const submit =(e:any)=>{

        e.preventDefault();

   }

  return (
    <>
      <h1 className="header"> Dodaj książkę</h1>

      <div className={`card ${styles.hotel}`}>
        <div className="card-body">
          <form onSubmit={submit}>
            <div className="form-group">
              <label>Nazwa książki</label>
              <input
                value={form.title}
                type="text"
                className="form-control"
                id="BookName"
                placeholder="Wprowadź tytuł książki.."
              />
              <br />
            </div>
            <div className="form-group">
              <label>Autor</label>
              <input
                value={form.author}
                type="text"
                className="form-control"
                id="BookAuthor"
                placeholder="Wprowadź nazwę autora"
              />
              <br />
            </div>
            <div className="form-group">
              <label>Ocena</label>
              <input
                value={form.rating}
                type="numeric"
                className="form-control"
                id="BookRating"
                placeholder="Oceń książkę.."
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
                id="BookReleaseDate"
                placeholder="Podaj datę wydania.."
              />
              <br />
            </div>

            <div className="form-group">
              <label className="custom-control-label">Książka wydrukowana... </label>
              <input 
              className="bg-primary custom-control custom-checkbox" 
              type="checkbox"
              value="published"
              checked={(form.released.find((x:any) => x === "published"))}
              id="published" 
              />
              <br />
              <br />
            </div>

            <div className="form-group">
              <label>Wprowadź opis książki</label>
              <textarea value={form.description} className="form-control" id="BookDesc" />

              <br />
            </div>

            <br />
            <button className="btn btn-primary">
              Dodaj książkę 
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddBook;

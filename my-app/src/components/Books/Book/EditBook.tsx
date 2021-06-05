import styles from "./Book.module.css";

function EditBook(props: any) {
  return (
    <>
      <h1 className="header">Edytuj dane książki</h1>
      <div className={`card ${styles.hotel}`}>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label>Nazwa książki</label>
              <input
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
                type="text"
                className="form-control"
                id="BookReleaseDate"
                placeholder="Podaj datę wydania.."
              />
              <br />
            </div>

            <div className="form-group">
              <label>Książka wydrukowana... </label>
              <input className="bg-primary" type="checkbox" id="BookPrint" />
              <br />
              <br />
            </div>

            <div className="form-group">
              <label>Wprowadź opis książki</label>
              <textarea className="form-control" id="BookDesc" />

              <br />
            </div>

            <br />
            <button type="submit" className="btn btn-primary">
              Dodaj
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditBook;

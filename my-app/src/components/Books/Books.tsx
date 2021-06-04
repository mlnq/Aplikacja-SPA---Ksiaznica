import Book from './Book/Book';
import styles from './Books.module.css'

function Books(props:any) {
    return (
      <div>
        <h2 className="h2" >Książka:</h2>

        <button type="button" className="btn btn-primary mb-5">Dodaj książkę</button>
        <button type="button" className="btn btn-primary mb-5">Sortuj malejąco po ocenie</button>
        <button type="button" className="btn btn-primary mb-5">Sortuj rosnąco po ocenie</button>
        <button type="button" className="btn btn-primary mb-5">Sortuj malejąco po tytule</button>
        <button type="button" className="btn btn-primary mb-5">Sortuj rosnąco po tytule</button>
        
        {props.books.map(
          (b:any) =>  <Book className="smallBook" key={b.bookId} {...b}/>
          )}


     </div>
    );
  }

  export default Books;
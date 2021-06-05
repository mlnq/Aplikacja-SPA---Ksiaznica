import Book from './Book/Book';
import styles from './Books.module.css'
import {Link} from 'react-router-dom'

function Books(props:any) {
    return (
      <div>
        <h2 className="h2" >Książka:</h2>

        <Link to={'/AddBook'}><button type="button" className="btn btn-primary mb-5"> Dodaj książkę </button></Link>
        {/* <button type="button" className="btn btn-primary mb-5">Sortuj malejąco po ocenie</button>
        <button type="button" className="btn btn-primary mb-5">Sortuj rosnąco po ocenie</button>
        <button type="button" className="btn btn-primary mb-5">Sortuj malejąco po tytule</button>
        <button type="button" className="btn btn-primary mb-5">Sortuj rosnąco po tytule</button> */}
        
        {props.books.map(
          (b:any) =>  <Book className="smallBook" deleteBookData={props.deleteBookData} key={b.bookId} {...b}/>
          )}


     </div>
    );
  }

  export default Books;
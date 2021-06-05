import styles from './Book.module.css';

function DetailsBook(props:any){

    return(
        <div className="container ">
            <h4>Tytuł książki</h4>
            <h6>{props.book.title}</h6>
            <h4>Autor książki</h4>
            <h6>{props.book.autor}</h6>
            <h4>Data wydania</h4>
            <h6>{props.book.date}</h6>
            <h4>Rating książki</h4>
            <h6>{props.book.rating}</h6>
            <h4>Wydanie książki</h4>
            <h6>{props.book.released}</h6>
        </div>
    );
}



export default DetailsBook;
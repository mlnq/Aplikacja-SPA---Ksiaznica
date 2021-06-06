import { useParams, Link} from 'react-router-dom';
import styles from './Book.module.css';
import React, { useEffect, useState } from 'react';
import { getBookById} from '../../../api/BooksApi';

function DetailsBook(props:any){

    
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
        
    
    
      useEffect(() => {
        getBookById(id).then(bookData => setForm({...bookData}));
      },[id])
    
    

        // const inputOnChange = (e: any) => {
        //     const {name,value} = e.target;
        //     let val =value;
        //     if(e.target.type==="number") val= Number(val);
        //     setForm(prev => ({
        //         ...prev,
        //         [name]: val
        //     }));
        // };
      
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
                    <label>Ocena</label>
                    <span>{form.rating}</span>
                    <br />
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
                    <span>{(form.released.includes("published")? " opublikowany": " nieopublikowany" )}</span>
                    <br />
                    <br />
                  </div>
      
                  <div className="form-group">
                    <label>Opis książki</label>
                    <span>{form.description}</span>   
                    <br />
                    <Link to={'/'}><button type="button" className="btn btn-primary mb-5"> Powrót </button></Link>
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
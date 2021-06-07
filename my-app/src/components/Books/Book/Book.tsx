import styles from './Book.module.css'
import {Link} from 'react-router-dom'

function Hotel(props:any) {



 const onDelete = () => {
    props.deleteBookData(props.bookId);
    console.log(props.bookId);
    console.log("usuniete")
  }



  const imageURL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png'
    return (
      <div className={`card ${styles.hotel}`}>
        <div className="card-body">
          <div className={` row`}>
            <div className="col-4">
              {/* <img src={imageURL} alt="" className={`${styles.imgSize} img-fluid img-thumbnail`} /> */}
            </div>
            <div className="col-8">
              <div className="row">
                <div className="col">
                  <p className={styles.title}>{props.title}</p>
                  <span className="badge rounded-pill bg-primary" >{props.author}</span>
                </div>
                <div className="col text-end">
                  <h2>Ocena: {props.rating}</h2>
                  
                  <button onClick={()=>onDelete()} className="btn btn-info float-end mt-2 px-5 text-light"
                  >Usuń</button>
                  <Link to={`/EditBook/${props.bookId}`}>
                  <button  className="btn btn-primary  float-end mt-2 px-5 ml-2 mr-2">
                    Edytuj
                  </button>
                  </Link>
                  <Link to={`/DetailsBook/${props.bookId}`}>
                  <button  className="btn btn-primary  float-end mt-2 px-5 ml-2 mr-2">
                    Wyświetl
                  </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12">
              <p className={styles.description}>
               {props.description}
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
 
  export default Hotel;
  
import styles from './Book.module.css'

function Hotel(props:any) {

  const imageURL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png'
    return (
      <div className={`card ${styles.hotel}`}>
        <div className="card-body">
          <div className={` row`}>
            <div className="col-4">
              <img src={imageURL} alt="" className={`${styles.imgSize} img-fluid img-thumbnail`} />
            </div>
            <div className="col-8">
              <div className="row">
                <div className="col">
                  <p className={styles.title}>{props.name}</p>
                  <span className="badge rounded-pill bg-primary" >{props.city}</span>
                </div>
                <div className="col text-end">
                  <h2>Ocena: {props.rating}</h2>
                  <a href="#" className="btn btn-primary  float-end mt-2 px-5 ml-2 mr-2">
                  Pokaż 
                  </a>
                  <a href="#" className="btn btn-danger float-end mt-2 px-5">Usuń</a>
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
  
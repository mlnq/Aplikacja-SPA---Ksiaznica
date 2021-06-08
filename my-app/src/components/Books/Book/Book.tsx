import styles from "./Book.module.css";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import { withStyles } from "@material-ui/core/styles";
import Rating, { IconContainerProps } from "@material-ui/lab/Rating";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function Hotel(props: any) {
  const onDelete = () => {
    props.deleteBookData(props.bookId);
    console.log(props.bookId);
    console.log("usuniete");
  };

  const StyledRating = withStyles({
    iconFilled: {
      color: "#0c6d38",
    },
    iconHover: {
      color: "#0c6d38",
    },
  })(Rating);

  // const imageURL =
  //   "https://placeimg.com/400/200/1";
  return (
    <div className={`card ${styles.hotel}`}>
      <div className="card-body">
        <div className={` row`}>
          <div className="col-4">
            <img src={props.imgURL} alt="" className={`${styles.imgSize} img-fluid img-thumbnail`} />
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col">
                <p className={styles.title}>{props.title}</p>
                <span className="badge rounded-pill bg-primary">
                  {props.author}
                </span>
              </div>
              <div className="col text-end">
                <Box component="fieldset" mb={3} borderColor="transparent">
                  <Typography component="legend">Ocena</Typography>
                  <StyledRating
                    precision={0.5}
                    name="read-only"
                    max={10}
                    value={props.rating}
                    readOnly
                  />
                </Box>

                <button
                  onClick={() => onDelete()}
                  className={`btn btn-secondary  float-end mt-2 px-2 mr-4 ${styles.marginRight}`}
                >
                  <Icon.Trash size={18} /> Usuń
                </button>
                <Link to={`/EditBook/${props.bookId}`}>
                  <button
                    className={`btn btn-secondary  float-end mt-2 px-2 mr-4 ${styles.marginRight}`}
                  >
                    <Icon.Recycle size={18} /> Edytuj
                  </button>
                </Link>
                <Link to={`/DetailsBook/${props.bookId}`}>
                  <button
                    className={`btn btn-secondary  float-end mt-2 px-2 mr-4 ${styles.marginRight}`}
                  >
                    <Icon.AspectRatio /> Wyświetl
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12">
            <p className={styles.description}>
              {props.description.length > 100
                ? props.description.substring(0, 100) + "..."
                : props.description}
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Hotel;

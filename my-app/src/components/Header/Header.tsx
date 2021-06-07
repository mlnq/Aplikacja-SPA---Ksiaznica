import {Link} from 'react-router-dom'
import * as Icon from 'react-bootstrap-icons';
import styles from './Header.module.scss'

function Header(props: any) {
  return (
    <div className="container mb-5 mt-4 d-flex">
      <div className="row justify-content-center">
          <ul className={`nav text-center `}>
            <Link className={`${styles.logo}`} to={'/'} >
                <li >
                    <p className={`h2 ${styles.title}`}><Icon.Book size={60}/><span> Książnica</span></p>
                </li>
            </Link>

            <li className="nav-item text-secondary">
                <p className="h4">βeta</p>
            </li>
            </ul>


       
      </div>
    </div>
  );
}

export default Header;

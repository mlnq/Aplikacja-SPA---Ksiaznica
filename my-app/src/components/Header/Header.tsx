import {Link} from 'react-router-dom'
import * as Icon from 'react-bootstrap-icons';
import styles from './Header.module.scss'
import { useContext } from "react";
import { AuthContext } from '../../context/authContext';
function Header(props: any) {
  const auth = useContext(AuthContext);

  const logout = (e:any) =>{
    e.preventDefault();
    auth.logout();
    auth.Authenticated=false;
  }
  
  const login = (e:any) =>{
    e.preventDefault();
    auth.login();
        auth.Authenticated=false;

  }

  return (
    <div className="container mb-5 mt-4 d-flex justify-content-between">
      {/* <div className="d-flex justify-content-between">
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
      <ul className={`nav `}>
           
            <li className={`nav-item text-primary ${styles.navLineHeight} mr-4`}>
                <span className="h4">Logowanie</span>
                {/* <span className="h4">Rejestracja</span> 
            </li>
            </ul>

      </div> */}
     <ul className={`nav  `}>
            <Link className={`${styles.logo}`} to={'/'} >
                <li >
                    <p className={`h2 ${styles.title}`}><Icon.Book size={60}/><span> Książnica</span></p>
                </li>
            </Link>

            <li className="nav-item text-secondary">
                <p className="h4">βeta</p>
            </li> 
      </ul>
      <ul className={`nav  `}>

            <li className="nav-item text-primary">
               {auth.Authenticated 
                 ? (<a href="#" onClick={logout} className="h4">Wyloguj</a>) 
                 : (<a href="#" onClick={login} className="h4">Zaloguj</a>)
               
                }
            </li> 
      </ul>
    </div>
  );
}

export default Header;

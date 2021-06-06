import {Link} from 'react-router-dom'

function Header(props: any) {
  return (
    <div className="container mb-5 mt-4">
      <div className="row align-items-center">
          <ul className="nav ">
            <Link to={'/'}>
                <p className="navbar-brand text-primary text-decoration-none" >
                  Książnica
                </p>
            </Link>

            <li className="nav-item text-secondary">
                <a className="nav-link active" aria-current="page" href="#">Active</a>
            </li>
            <li className="nav-item text-secondary">
                <a className="nav-link" href="#">Cośtam</a>
            </li>
            <li className="nav-item text-secondary" >
                <a className="nav-link" href="#">Cośtam</a>
            </li>
            <li className="nav-item text-secondary">
                <a className="nav-link disabled" href="#"aria-disabled="true">W krótce ...</a>
            </li>
            </ul>

       
      </div>
    </div>
  );
}

export default Header;

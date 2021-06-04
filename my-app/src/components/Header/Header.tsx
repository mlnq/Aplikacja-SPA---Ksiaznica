function Header(props: any) {
  return (
    <div className="container mb-5 mt-4">
      <div className="row align-items-center">
          <ul className="nav ">
          <a className="navbar-brand" href="#">
            Książnica
          </a>

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

import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand logo" href="#"><img src="../img/z-t.png" alt="logo" width="50" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Productos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contacto</a>
              </li>
            </ul>
            

            <CartWidget/>
            
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

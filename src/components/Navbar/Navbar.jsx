import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import Categorias from './Categorias/Categorias'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <img src="../img/z-t.png" alt="logo" width="50" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <Categorias/>
            <CartWidget />

          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

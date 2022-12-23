import CartWidget from '../CartWidget/CartWidget';
import Categorias from './Categorias/Categorias';
import BotonDarkMode from './BotonDarkMode/BotonDarkMode';
import { useDarkModeContext } from '../../Context/DarkModeContext';

const Navbar = () => {
  const {DarkMode} = useDarkModeContext();
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-dark ${DarkMode ? 'bg-primary' : 'bg-dark'}`}>
        <div className="container-fluid">
          <img src="../img/z-t.png" alt="logo" width="50" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <Categorias/>
            <CartWidget />
            <BotonDarkMode/>

          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

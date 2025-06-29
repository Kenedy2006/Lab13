import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Lab13 Store
        </Link>
        <div className="navbar-menu">
          <Link 
            to="/" 
            className={`navbar-item ${location.pathname === '/' ? 'active' : ''}`}
          >
            Inicio
          </Link>
          <Link 
            to="/categorias" 
            className={`navbar-item ${location.pathname.includes('/categorias') ? 'active' : ''}`}
          >
            Categorías
          </Link>
          <Link 
            to="/productos" 
            className={`navbar-item ${location.pathname.includes('/productos') ? 'active' : ''}`}
          >
            Productos
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

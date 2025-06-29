import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">Bienvenido a Lab13 Store</h1>
        <p className="hero-subtitle">
          Sistema de gestión de productos y categorías
        </p>
        
        <div className="hero-cards">
          <div className="hero-card">
            <div className="card-icon">📦</div>
            <h3>Gestión de Productos</h3>
            <p>Administra tu inventario de productos de manera eficiente</p>
            <Link to="/productos" className="card-button">
              Ver Productos
            </Link>
          </div>
          
          <div className="hero-card">
            <div className="card-icon">🏷️</div>
            <h3>Gestión de Categorías</h3>
            <p>Organiza tus productos en categorías para un mejor control</p>
            <Link to="/categorias" className="card-button">
              Ver Categorías
            </Link>
          </div>
        </div>
      </div>
      
      <div className="features-section">
        <h2>Características principales</h2>
        <div className="features-grid">
          <div className="feature-item">
            <span className="feature-icon">✨</span>
            <h4>Interfaz Moderna</h4>
            <p>Diseño limpio y responsive</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🚀</span>
            <h4>Operaciones CRUD</h4>
            <p>Crear, leer, actualizar y eliminar</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🔗</span>
            <h4>Relaciones</h4>
            <p>Productos asociados a categorías</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">⚡</span>
            <h4>Tiempo Real</h4>
            <p>Actualizaciones instantáneas</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

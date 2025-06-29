import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { categoriaService } from '../services/categoriaService';
import './Categorias.css';

const Categorias = () => {
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [editingCategoria, setEditingCategoria] = useState(null);
  const [formData, setFormData] = useState({ nombre: '' });

  useEffect(() => {
    cargarCategorias();
  }, []);

  const cargarCategorias = async () => {
    try {
      setLoading(true);
      const data = await categoriaService.getAll();
      setCategorias(data);
      setError(null);
    } catch (err) {
      setError('Error al cargar las categorías');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingCategoria) {
        await categoriaService.update(editingCategoria.id, formData);
      } else {
        await categoriaService.create(formData);
      }
      await cargarCategorias();
      handleCloseModal();
    } catch (err) {
      setError('Error al guardar la categoría');
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar esta categoría?')) {
      try {
        await categoriaService.delete(id);
        await cargarCategorias();
      } catch (err) {
        setError('Error al eliminar la categoría');
        console.error(err);
      }
    }
  };

  const handleEdit = (categoria) => {
    setEditingCategoria(categoria);
    setFormData({ nombre: categoria.nombre });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingCategoria(null);
    setFormData({ nombre: '' });
  };

  const handleNewCategoria = () => {
    setEditingCategoria(null);
    setFormData({ nombre: '' });
    setShowModal(true);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Cargando categorías...</p>
      </div>
    );
  }

  return (
    <div className="categorias-container">
      <div className="categorias-header">
        <h1>Gestión de Categorías</h1>
        <button className="btn-primary" onClick={handleNewCategoria}>
          + Nueva Categoría
        </button>
      </div>

      {error && (
        <div className="error-message">
          {error}
          <button onClick={() => setError(null)}>×</button>
        </div>
      )}

      <div className="categorias-grid">
        {categorias.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">📁</div>
            <h3>No hay categorías</h3>
            <p>Crea tu primera categoría para comenzar</p>
            <button className="btn-primary" onClick={handleNewCategoria}>
              Crear Categoría
            </button>
          </div>
        ) : (
          categorias.map((categoria) => (
            <div key={categoria.id} className="categoria-card">
              <div className="categoria-content">
                <div className="categoria-icon">🏷️</div>
                <h3>{categoria.nombre}</h3>
                <p>ID: {categoria.id}</p>
              </div>
              <div className="categoria-actions">
                <button 
                  className="btn-edit"
                  onClick={() => handleEdit(categoria)}
                >
                  Editar
                </button>
                <button 
                  className="btn-delete"
                  onClick={() => handleDelete(categoria.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{editingCategoria ? 'Editar Categoría' : 'Nueva Categoría'}</h2>
              <button className="modal-close" onClick={handleCloseModal}>×</button>
            </div>
            <form onSubmit={handleSubmit} className="modal-body">
              <div className="form-group">
                <label htmlFor="nombre">Nombre de la categoría:</label>
                <input
                  type="text"
                  id="nombre"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  required
                  placeholder="Ej: Electrónicos, Ropa, etc."
                  autoFocus
                />
              </div>
              <div className="modal-actions">
                <button type="button" className="btn-secondary" onClick={handleCloseModal}>
                  Cancelar
                </button>
                <button type="submit" className="btn-primary">
                  {editingCategoria ? 'Actualizar' : 'Crear'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categorias;

import { useState, useEffect } from 'react';
import { productoService } from '../services/productoService';
import { categoriaService } from '../services/categoriaService';
import './Productos.css';

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [editingProducto, setEditingProducto] = useState(null);
  const [formData, setFormData] = useState({
    nombre: '',
    precio: '',
    categoria: { id: '' }
  });

  useEffect(() => {
    cargarDatos();
  }, []);

  const cargarDatos = async () => {
    try {
      setLoading(true);
      console.log('🔄 Cargando datos de productos...');
      const [productosData, categoriasData] = await Promise.all([
        productoService.getAll(),
        categoriaService.getAll()
      ]);
      console.log('✅ Productos obtenidos:', productosData);
      console.log('✅ Categorías obtenidas:', categoriasData);
      setProductos(productosData);
      setCategorias(categoriasData);
      setError(null);
    } catch (err) {
      console.error('❌ Error al cargar datos:', err);
      setError('Error al cargar los datos');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const productoData = {
        ...formData,
        precio: parseFloat(formData.precio),
        categoria: { id: parseInt(formData.categoria.id) }
      };

      if (editingProducto) {
        await productoService.update(editingProducto.id, productoData);
      } else {
        await productoService.create(productoData);
      }
      await cargarDatos();
      handleCloseModal();
    } catch (err) {
      setError('Error al guardar el producto');
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este producto?')) {
      try {
        await productoService.delete(id);
        await cargarDatos();
      } catch (err) {
        setError('Error al eliminar el producto');
        console.error(err);
      }
    }
  };

  const handleEdit = (producto) => {
    setEditingProducto(producto);
    setFormData({
      nombre: producto.nombre,
      precio: producto.precio.toString(),
      categoria: { id: producto.categoria?.id?.toString() || '' }
    });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingProducto(null);
    setFormData({
      nombre: '',
      precio: '',
      categoria: { id: '' }
    });
  };

  const handleNewProducto = () => {
    setEditingProducto(null);
    setFormData({
      nombre: '',
      precio: '',
      categoria: { id: '' }
    });
    setShowModal(true);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-PE', {
      style: 'currency',
      currency: 'PEN'
    }).format(price);
  };

  const getCategoriaName = (categoriaId) => {
    const categoria = categorias.find(cat => cat.id === categoriaId);
    return categoria ? categoria.nombre : 'Sin categoría';
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Cargando productos...</p>
      </div>
    );
  }

  return (
    <div className="productos-container">
      <div className="productos-header">
        <h1>Gestión de Productos</h1>
        <button className="btn-primary" onClick={handleNewProducto}>
          + Nuevo Producto
        </button>
      </div>

      {error && (
        <div className="error-message">
          {error}
          <button onClick={() => setError(null)}>×</button>
        </div>
      )}

      <div className="productos-grid">
        {productos.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">📦</div>
            <h3>No hay productos</h3>
            <p>Crea tu primer producto para comenzar</p>
            <button className="btn-primary" onClick={handleNewProducto}>
              Crear Producto
            </button>
          </div>
        ) : (
          productos.map((producto) => (
            <div key={producto.id} className="producto-card">
              <div className="producto-content">
                <div className="producto-icon">📦</div>
                <h3>{producto.nombre}</h3>
                <div className="producto-price">{formatPrice(producto.precio)}</div>
                <div className="producto-category">
                  <span className="category-badge">
                    {getCategoriaName(producto.categoria?.id)}
                  </span>
                </div>
                <p className="producto-id">ID: {producto.id}</p>
              </div>
              <div className="producto-actions">
                <button 
                  className="btn-edit"
                  onClick={() => handleEdit(producto)}
                >
                  Editar
                </button>
                <button 
                  className="btn-delete"
                  onClick={() => handleDelete(producto.id)}
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
              <h2>{editingProducto ? 'Editar Producto' : 'Nuevo Producto'}</h2>
              <button className="modal-close" onClick={handleCloseModal}>×</button>
            </div>
            <form onSubmit={handleSubmit} className="modal-body">
              <div className="form-group">
                <label htmlFor="nombre">Nombre del producto:</label>
                <input
                  type="text"
                  id="nombre"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  required
                  placeholder="Ej: iPhone 15, Laptop HP, etc."
                  autoFocus
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="precio">Precio:</label>
                <input
                  type="number"
                  id="precio"
                  step="0.01"
                  min="0"
                  value={formData.precio}
                  onChange={(e) => setFormData({ ...formData, precio: e.target.value })}
                  required
                  placeholder="0.00"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="categoria">Categoría:</label>
                <select
                  id="categoria"
                  value={formData.categoria.id}
                  onChange={(e) => setFormData({ 
                    ...formData, 
                    categoria: { id: e.target.value } 
                  })}
                  required
                >
                  <option value="">Selecciona una categoría</option>
                  {categorias.map((categoria) => (
                    <option key={categoria.id} value={categoria.id}>
                      {categoria.nombre}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="modal-actions">
                <button type="button" className="btn-secondary" onClick={handleCloseModal}>
                  Cancelar
                </button>
                <button type="submit" className="btn-primary">
                  {editingProducto ? 'Actualizar' : 'Crear'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Productos;

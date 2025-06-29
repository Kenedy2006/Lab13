import api from './api';

export const productoService = {
  // Obtener todos los productos
  getAll: async () => {
    try {
      const response = await api.get('/productos');
      return response.data;
    } catch (error) {
      console.error('Error al obtener productos:', error);
      throw error;
    }
  },

  // Obtener un producto por ID
  getById: async (id) => {
    try {
      const response = await api.get(`/productos/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener producto:', error);
      throw error;
    }
  },

  // Crear un nuevo producto
  create: async (producto) => {
    try {
      const response = await api.post('/productos', producto);
      return response.data;
    } catch (error) {
      console.error('Error al crear producto:', error);
      throw error;
    }
  },

  // Actualizar un producto
  update: async (id, producto) => {
    try {
      const response = await api.put(`/productos/${id}`, producto);
      return response.data;
    } catch (error) {
      console.error('Error al actualizar producto:', error);
      throw error;
    }
  },

  // Eliminar un producto
  delete: async (id) => {
    try {
      const response = await api.delete(`/productos/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al eliminar producto:', error);
      throw error;
    }
  }
};

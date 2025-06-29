import api from './api';

export const categoriaService = {
  // Obtener todas las categorías
  getAll: async () => {
    try {
      const response = await api.get('/categorias');
      return response.data;
    } catch (error) {
      console.error('Error al obtener categorías:', error);
      throw error;
    }
  },

  // Obtener una categoría por ID
  getById: async (id) => {
    try {
      const response = await api.get(`/categorias/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener categoría:', error);
      throw error;
    }
  },

  // Crear una nueva categoría
  create: async (categoria) => {
    try {
      const response = await api.post('/categorias', categoria);
      console.log('Respuesta crear categoría:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error al crear categoría:', error);
      throw error;
    }
  },

  // Actualizar una categoría
  update: async (id, categoria) => {
    try {
      const response = await api.put(`/categorias/${id}`, categoria);
      return response.data;
    } catch (error) {
      console.error('Error al actualizar categoría:', error);
      throw error;
    }
  },

  // Eliminar una categoría
  delete: async (id) => {
    try {
      const response = await api.delete(`/categorias/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al eliminar categoría:', error);
      throw error;
    }
  }
};

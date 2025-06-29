import axios from 'axios';

const API_BASE_URL = 'http://localhost:8081/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 segundos de timeout
});

// Interceptor para manejar respuestas
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Error en la API:', error);
    
    if (error.code === 'ECONNREFUSED') {
      console.error('🔴 No se puede conectar al servidor backend. Asegúrate de que esté ejecutándose en el puerto 8081.');
      alert('⚠️ Backend no disponible\n\nPor favor:\n1. Abre una terminal\n2. Ve a la carpeta del backend\n3. Ejecuta: .\\mvnw.cmd spring-boot:run');
    }
    
    if (error.response?.status === 500) {
      console.error('Error interno del servidor');
    }
    
    if (error.message.includes('Network Error')) {
      console.error('🔴 Error de red - Backend no está ejecutándose');
    }
    
    return Promise.reject(error);
  }
);

export default api;

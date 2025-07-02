# 🏪 Lab13 Store - Sistema de Gestión de Productos

Sistema full-stack para gestión de productos y categorías desarrollado con Spring Boot y React.

## 🚀 Tecnologías Utilizadas

### Backend
- **Spring Boot 3.3.0**
- **Java 17**
- **JPA/Hibernate**
- **MySQL** (desarrollo)
- **PostgreSQL** (producción)
- **Maven**

### Frontend
- **React 19**
- **Vite**
- **Axios**
- **React Router DOM**
- **CSS3 con diseño responsive**

## 📋 Funcionalidades

### ✅ Gestión de Categorías
- Crear, leer, actualizar y eliminar categorías
- Interfaz intuitiva con modales
- Validación de formularios

### ✅ Gestión de Productos
- CRUD completo de productos
- Asociación con categorías
- Formateo de precios en soles peruanos
- Validación de datos

### ✅ Características Técnicas
- API REST con Spring Boot
- Frontend reactivo con React
- Diseño responsive y moderno
- Manejo de errores y estados de carga
- Configuración CORS
- Variables de entorno para deployment

## 🛠️ Instalación y Uso Local

### Prerrequisitos
- Java 17+
- Node.js 18+
- MySQL 8.0+
- Git

### Backend
```bash
cd appsWebLAB13-back
./mvnw spring-boot:run
```

### Frontend
```bash
cd appsWebLAB13-front
npm install
npm run dev
```

### Base de Datos
```sql
CREATE DATABASE semana_13;
```

## 🌐 URLs de Desarrollo
- **Frontend:** http://localhost:5174
- **Backend API:** http://localhost:8081/api
- **Categorías:** http://localhost:8081/api/categorias
- **Productos:** http://localhost:8081/api/productos

## 🚀 Despliegue en Producción

El proyecto está configurado para desplegarse en **Render.com**:

### Backend
- Dockerizado con OpenJDK 17
- Base de datos PostgreSQL
- Variables de entorno configuradas

### Frontend
- Build optimizado con Vite
- Variables de entorno para API URL
- Servido como sitio estático

## 👨‍💻 Autor

Desarrollado como parte del Laboratorio 13 - Desarrollo de Aplicaciones Web

## 📝 Licencia

Este proyecto es de uso educativo.

# Guía de Solución de Problemas - Lab13 Store

## Problema: Error de CORS y conexión entre Frontend y Backend

### Pasos para solucionar el problema:

## 1. Verificar que MySQL esté ejecutándose

Asegúrate de que MySQL esté corriendo en tu computadora:
- Abre XAMPP, WAMP, MAMP o el servicio MySQL que uses
- Verifica que MySQL esté en estado "Running" o "Iniciado"
- La base de datos debe estar en el puerto 3306

## 2. Crear la base de datos

```sql
CREATE DATABASE IF NOT EXISTS semana_13;
USE semana_13;
```

## 3. Iniciar el Backend

Abre una terminal en la carpeta del backend:
```bash
cd "c:\Users\kened\Proyecto-back-front\appsWebLAB13-back"
./mvnw.cmd spring-boot:run
```

**Importante:** Espera a que veas este mensaje:
```
Tomcat started on port(s): 8081 (http)
Started Lab13Application in X.XXX seconds
```

## 4. Probar la API Backend

Abre el archivo `test-api.html` en tu navegador y prueba las conexiones.

## 5. Iniciar el Frontend

En otra terminal, en la carpeta del frontend:
```bash
cd "c:\Users\kened\Proyecto-back-front\appsWebLAB13-front"
npm run dev
```

El frontend se ejecutará en: http://localhost:5173

## 6. Verificar la conexión

1. Abre el frontend en tu navegador
2. Ve a la sección de "Categorías"
3. Intenta crear una categoría de prueba

## Soluciones adicionales si persiste el error:

### A. Verificar puertos
- Backend debe estar en puerto 8081
- Frontend debe estar en puerto 5173
- MySQL debe estar en puerto 3306

### B. Verificar firewall
Si tienes firewall activo, asegúrate de que permita conexiones en los puertos 8081 y 5173.

### C. Limpiar cache del navegador
1. Presiona F12 para abrir DevTools
2. Clic derecho en el botón de refresh
3. Selecciona "Empty Cache and Hard Reload"

### D. Verificar logs del backend
En la terminal del backend, busca errores como:
- Errores de conexión a MySQL
- Errores de CORS
- Errores de puerto ocupado

## Comandos útiles:

### Verificar si el puerto está ocupado:
```bash
netstat -ano | findstr :8081
netstat -ano | findstr :5173
```

### Reiniciar servicios:
```bash
# Detener backend: Ctrl+C en la terminal del backend
# Detener frontend: Ctrl+C en la terminal del frontend
```

## Estructura esperada del proyecto:

```
Proyecto-back-front/
├── appsWebLAB13-back/          # Backend Spring Boot
│   ├── src/
│   ├── mvnw.cmd
│   └── pom.xml
├── appsWebLAB13-front/         # Frontend React
│   ├── src/
│   ├── package.json
│   └── vite.config.js
└── test-api.html               # Archivo de prueba
```

Si sigues teniendo problemas, revisa los logs de la consola del navegador (F12) y los logs del backend en la terminal.

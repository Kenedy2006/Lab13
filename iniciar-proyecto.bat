@echo off
echo ====================================
echo    Lab13 Store - Inicio Automatico
echo ====================================
echo.

echo [1/4] Verificando estructura del proyecto...
if not exist "appsWebLAB13-back" (
    echo ERROR: No se encuentra la carpeta del backend
    pause
    exit /b 1
)

if not exist "appsWebLAB13-front" (
    echo ERROR: No se encuentra la carpeta del frontend
    pause
    exit /b 1
)

echo [2/4] Iniciando Backend...
start "Backend Lab13" cmd /k "cd /d appsWebLAB13-back && echo Iniciando Backend Spring Boot... && .\mvnw.cmd spring-boot:run"

echo [3/4] Esperando 10 segundos para que el backend inicie...
timeout /t 10 /nobreak > nul

echo [4/4] Iniciando Frontend...
start "Frontend Lab13" cmd /k "cd /d appsWebLAB13-front && echo Iniciando Frontend React... && npm run dev"

echo.
echo ====================================
echo    Servicios iniciados!
echo ====================================
echo.
echo Backend:  http://localhost:8081
echo Frontend: http://localhost:5173
echo.
echo Presiona cualquier tecla para abrir el navegador...
pause > nul

start http://localhost:5173

echo.
echo Para detener los servicios, cierra las ventanas de terminal.
echo.
pause

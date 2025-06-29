@echo off
title Iniciar Backend Lab13
echo ==========================================
echo     INICIANDO BACKEND LAB13 STORE
echo ==========================================
echo.

cd /d "c:\Users\kened\Proyecto-back-front\appsWebLAB13-back"

echo Verificando que Maven Wrapper exista...
if not exist "mvnw.cmd" (
    echo ERROR: No se encuentra mvnw.cmd
    echo Asegurate de estar en la carpeta correcta del backend
    pause
    exit /b 1
)

echo.
echo Iniciando Spring Boot...
echo Una vez que veas "Tomcat started on port(s): 8081" puedes usar el frontend
echo.
echo Para detener el servidor, presiona Ctrl+C
echo.

.\mvnw.cmd spring-boot:run

pause

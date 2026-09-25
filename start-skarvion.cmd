@echo off
title SKARVION STARTUP
color 0A

set "PROJECT=E:\DESKTOP\skarvion_2"
set "MYSQL=E:\SQL\mysql-8.0.46-winx64\mysql-8.0.46-winx64"
set "BACKEND=E:\DESKTOP\skarvion_2\backend"

echo.
echo ========================================
echo        SKARVION PROJECT STARTUP
echo ========================================
echo.

echo [1/3] Starting MySQL...
start "SKARVION - MySQL" cmd /k "cd /d "%MYSQL%" && bin\mysqld.exe --console"

timeout /t 6 /nobreak >nul

echo [2/3] Starting Spring Boot Backend...
start "SKARVION - Backend" cmd /k "cd /d "%BACKEND%" && .\mvnw.cmd spring-boot:run"

timeout /t 10 /nobreak >nul

echo [3/3] Starting React Frontend...
start "SKARVION - Frontend" cmd /k "cd /d "%PROJECT%" && npm run dev"

echo.
echo ========================================
echo       STARTUP COMMANDS SENT
echo ========================================
echo.
echo Website : http://localhost:5173
echo Backend : http://localhost:8080
echo.
pause
# ServiPark - Versión HTML/CSS

Esta es una versión estática del frontend de ServiPark, construida únicamente con HTML, CSS y JavaScript mínimo.

## Cómo usar

1. Abre `index.html` en un navegador web.
2. Serás redirigido a `login.html`.
3. Selecciona "admin" o "cajero" en el campo de usuario (la contraseña está precargada).
4. Serás redirigido al dashboard, donde podrás navegar por las diferentes secciones según el rol.

## Estructura

- `index.html`: Página de inicio que redirige al login.
- `login.html`: Página de login con select para usuario (admin/cajero).
- `dashboard.html`: Dashboard principal con navegación lateral y contenido dinámico.
- `css/styles.css`: Estilos globales.
- `css/login.css`: Estilos específicos del login.
- `css/dashboard.css`: Estilos específicos del dashboard.
- `js/index.js`: Script para redirect en index.
- `js/login.js`: Script para login.
- `js/dashboard.js`: Script para lógica del dashboard y páginas.
- `pages/`: Directorio con páginas organizadas por rol.
  - `shared/`: Páginas comunes (ingresar-vehiculo, cobrar-parqueo, ver-ticket-activo).
  - `admin/`: Páginas de administrador (tipos-vehiculo, usuarios, reportes).
  - `cajero/`: Páginas de cajero (historial).

## Notas

- La aplicación simula la funcionalidad básica sin backend.
- Los formularios tienen validación básica.
- La navegación se basa en JavaScript para cargar contenido dinámicamente.
- Los estilos son fieles al diseño original de Angular.
- No hay estilos o scripts inline en los HTML; todo está en archivos separados.
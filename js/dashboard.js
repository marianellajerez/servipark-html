/**
 * ServiPark - Dashboard Logic
 * Administra el menú de usuario, roles y persistencia de datos.
 */

// 1. Función para cerrar sesión
function logout() {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    window.location.href = '../../index.html';
}

// 2. Función para mostrar/ocultar el menú del usuario (Dropdown)
function toggleMenu() {
    const dropdown = document.getElementById('userDropdown');
    if (dropdown) {
        dropdown.classList.toggle('show');
        
        // Opcional: Rotar la flecha del botón
        const icon = document.querySelector('.user-menu-button svg');
        if (icon) {
            const isOpen = dropdown.classList.contains('show');
            icon.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
        }
    }
}

// 3. Inicialización principal al cargar el DOM
function initDashboard() {
    // Recuperar datos de sesión (con valores por defecto si no existen)
    const role = localStorage.getItem('userRole') || 'CAJERO';
    const name = localStorage.getItem('userName') || (role === 'ADMINISTRADOR' ? 'Admin' : 'Cajero');
    const email = localStorage.getItem('userEmail') || 'usuario@servipark.com';

    // Actualizar saludo en el Header
    const greeting = document.getElementById('userName');
    if (greeting) {
        greeting.textContent = `Hola, ${name}`;
    }

    // Actualizar información dentro del Dropdown
    const dropName = document.getElementById('dropdownUserName');
    const dropEmail = document.getElementById('dropdownUserEmail');
    const dropRole = document.getElementById('dropdownUserRole');

    if (dropName) dropName.textContent = name;
    if (dropEmail) dropEmail.textContent = email;
    if (dropRole) dropRole.textContent = role;

    // Control de visibilidad por Roles
    document.querySelectorAll('.admin-only').forEach(el => {
        el.style.display = role === 'ADMINISTRADOR' ? 'block' : 'none';
    });
    document.querySelectorAll('.cajero-only').forEach(el => {
        el.style.display = role === 'CAJERO' ? 'block' : 'none';
    });

    // Lógica del Acordeón "Administrar" en el Sidebar
    const adminToggle = document.getElementById('admin-toggle');
    const adminContent = document.getElementById('admin-content');
    if (adminToggle && adminContent) {
        adminToggle.addEventListener('click', () => {
            const isOpening = adminContent.classList.toggle('open');
            const icon = adminToggle.querySelector('svg');
            if (icon) {
                icon.style.transform = isOpening ? 'rotate(180deg)' : 'rotate(0deg)';
            }
        });
    }

    // Configurar botones de logout (si existen varios)
    document.querySelectorAll('.btn-logout').forEach(el => {
        el.addEventListener('click', (event) => {
            event.preventDefault();
            logout();
        });
    });

    // --- Lógica específica para el formulario de Ingreso de Vehículo ---
    const ingresoForm = document.getElementById('ingresoForm');
    if (ingresoForm) {
        ingresoForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const placaInput = document.getElementById('placa');
            const tipoInput = document.getElementById('idTipoVehiculo');
            
            if (placaInput) {
                // Guardamos la placa y el tipo para que ticket.js los use
                localStorage.setItem('lastPlaca', placaInput.value.toUpperCase());
                localStorage.setItem('lastTipo', tipoInput.options[tipoInput.selectedIndex].text);
                
                // Redirección manual al ticket
                window.location.href = 'ticket-ingreso.html';
            }
        });
    }
}

// 4. Cerrar el menú desplegable si se hace clic fuera de él
window.addEventListener('click', function(event) {
    const dropdown = document.getElementById('userDropdown');
    const menuButton = document.querySelector('.user-menu-button');
    
    // Si el dropdown está abierto y el clic no fue en el botón ni dentro del menú
    if (dropdown && dropdown.classList.contains('show')) {
        if (!menuButton.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.classList.remove('show');
            const icon = menuButton.querySelector('svg');
            if (icon) icon.style.transform = 'rotate(0deg)';
        }
    }
});

// Ejecutar al cargar la página
window.addEventListener('DOMContentLoaded', initDashboard);
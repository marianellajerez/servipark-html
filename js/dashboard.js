// ServiPark - JS m�nimo para l�gica de usuario y men�

function logout() {
  localStorage.removeItem('userRole');
  localStorage.removeItem('userName');
  window.location.href = 'index.html';
}

function initDashboard() {
  const role = localStorage.getItem('userRole') || 'CAJERO';
  const name = localStorage.getItem('userName') || (role === 'ADMINISTRADOR' ? 'Admin' : 'Cajero');

  const greeting = document.querySelector('.header-shell .user-menu span');
  if (greeting) {
    greeting.textContent = `Hola, ${name}`;
  }

  document.querySelectorAll('.admin-only').forEach(el => {
    el.style.display = role === 'ADMINISTRADOR' ? 'block' : 'none';
  });
  document.querySelectorAll('.cajero-only').forEach(el => {
    el.style.display = role === 'CAJERO' ? 'block' : 'none';
  });

  const adminToggle = document.getElementById('admin-toggle');
  const adminContent = document.getElementById('admin-content');
  if (adminToggle && adminContent) {
    adminToggle.addEventListener('click', () => {
      const open = adminContent.classList.toggle('open');
      const icon = adminToggle.querySelector('svg');
      if (icon) {
        icon.style.transform = open ? 'rotate(180deg)' : 'rotate(0deg)';
      }
    });
  }

  document.querySelectorAll('.btn-logout').forEach(el => {
    el.addEventListener('click', (event) => {
      event.preventDefault();
      logout();
    });
  });
}

window.addEventListener('DOMContentLoaded', initDashboard);

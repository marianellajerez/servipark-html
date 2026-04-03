document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('loginForm');

  if (!loginForm) return;

  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const roleSelect = document.getElementById('role');
    const passwordInput = document.getElementById('password');

    if (!roleSelect || !passwordInput) return;

    const role = roleSelect.value;
    const password = passwordInput.value;

    if (password !== '123456') {
      alert('Contraseña incorrecta. Debe ser 123456.');
      return;
    }

    // Guardar rol para el dashboard
    localStorage.setItem('userRole', role);
    localStorage.setItem('userName', role === 'ADMINISTRADOR' ? 'Admin' : 'Cajero');

    // Redirige dashboard
    window.location.href = 'dashboard.html';

    if (role == 'ADMINISTRADOR') {
      
    }
  });
});
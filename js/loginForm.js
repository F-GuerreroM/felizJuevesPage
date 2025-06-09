document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const usuario = document.getElementById('usuario').value.trim();
  const clave = document.getElementById('clave').value.trim();

  // Usuarios por defecto
  const usuarios = {
    'otaku': { clave: '1234', rol: 'usuario' },
    'admin': { clave: 'admin123', rol: 'admin' }
  };

  
  const form = e.target;
  let mensajeError = form.querySelector('.alert');


  if (mensajeError) {
    mensajeError.remove();
  }

  if (usuarios[usuario] && usuarios[usuario].clave === clave) {
    // Correcto, redirige según rol
    if (usuarios[usuario].rol === 'admin') {
      window.location.href = '/adminPage/adminPage.html';
    } else {
      window.location.href = 'menu.html';
    }
  } else {
    
    mensajeError = document.createElement('div');
    mensajeError.className = 'alert alert-danger mt-3';
    mensajeError.textContent = 'Usuario o contraseña incorrectos.';
    form.appendChild(mensajeError);
  }
});

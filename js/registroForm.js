document.getElementById('registroForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Obtener valores y eliminar espacios al inicio y final
  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const usuario = document.getElementById('usuario').value.trim();
  const clave = document.getElementById('clave').value;
  const clave2 = document.getElementById('clave2').value;
  
  if (!nombre || !correo || !usuario || !clave || !clave2) {
    alert('Por favor, complete todos los campos.');
    return;
  }

  // Validación mail
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(correo)) {
    alert('Ingrese un correo electrónico válido.');
    return;
  }

  // Validaciones para la contraseña
  const errores = [];

  if (clave.length < 8) {
    errores.push('Debe tener al menos 8 caracteres.');
  }
  if (clave.length > 20) {
    errores.push('No debe exceder los 20 caracteres.');
  }
  if (!/[A-Z]/.test(clave)) {
    errores.push('Debe incluir al menos una letra mayúscula.');
  }
  if (!/[a-z]/.test(clave)) {
    errores.push('Debe incluir al menos una letra minúscula.');
  }
  if (!/\d/.test(clave)) {
    errores.push('Debe incluir al menos un número.');
  }
  if (!/[^A-Za-z0-9]/.test(clave)) {
    errores.push('Debe incluir al menos un carácter especial.');
  }
  if (clave !== clave2) {
    errores.push('Las contraseñas no coinciden.');
  }

  if (errores.length > 0) {
    alert('Error en la contraseña:\n- ' + errores.join('\n- '));
    return;
  }

  alert('¡Registro exitoso! Bienvenido a ¡Feliz Jueves!');

  
  setTimeout(() => {
    window.location.href = '/menu.html';
  }, 500);

  // Limpiar formulario
  e.target.reset();
});

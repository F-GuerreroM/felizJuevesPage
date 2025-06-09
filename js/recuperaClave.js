document.getElementById('recuperaForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const correoIngresado = document.getElementById('correo').value.trim().toLowerCase();
  const mensaje = document.getElementById('mensaje');

  // Correos registrados por defecto (simulación)
  const correosRegistrados = ['otaku@correo.com', 'admin@correo.com'];

  if (correosRegistrados.includes(correoIngresado)) {
    mensaje.textContent = 'Correo verificado. Se ha enviado un enlace para restablecer la contraseña.';
    mensaje.style.color = 'green';
  } else {
    mensaje.textContent = 'El correo ingresado no está registrado.';
    mensaje.style.color = 'red';
  }
});

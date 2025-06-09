// Manejo del formulario para crear nueva entrada
document.getElementById('formNuevaEntrada').addEventListener('submit', function(e) {
  e.preventDefault();

  const titulo = document.getElementById('titulo').value.trim();
  const contenido = document.getElementById('contenido').value.trim();

  if(titulo === '' || contenido === '') {
    alert('Por favor, complete todos los campos.');
    return;
  }

  document.getElementById('mensajeEntrada').textContent = 'Entrada "' + titulo + '" creada correctamente.';
  this.reset();
});

// Manejo botones editar y eliminar con delegación de eventos
document.getElementById('gestionUsuarios').addEventListener('click', function(e) {
  if (e.target.classList.contains('editar-btn')) {
    const usuario = e.target.closest('tr').querySelector('td').textContent;
    alert('Editar usuario ' + usuario);
  } else if (e.target.classList.contains('eliminar-btn')) {
    const usuario = e.target.closest('tr').querySelector('td').textContent;
    alert('Eliminar usuario ' + usuario);
  }
});

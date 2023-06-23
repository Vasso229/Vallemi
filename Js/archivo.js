const express = require('express')
const app = express()

app.get('/hora', (req, res) => {
  const now = new Date()
  const hora = now.getHours()
  const minuto = now.getMinutes()
  const segundo = now.getSeconds()

  const horaActual = {
    hora: hora,
    minuto: minuto,
    segundo: segundo
  }

  res.send(horaActual)
})

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000')
})

// Seleccionamos el formulario y agregamos un listener para hacer submit al hacer clic en enviar
document.getElementById('contact-form').addEventListener('submit', function(event) {
	// Detenemos la acción predeterminada del formulario
	event.preventDefault();
	// Capturamos los valores de los inputs en variables
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var message = document.getElementById('message').value;
	// Creamos el cuerpo del mensaje
	var body = 'Nombre: ' + name + '%0A' + 'Correo electrónico: ' + email + '%0A' + 'Mensaje: ' + message;
	// Creamos la URL con el valor del cuerpo del mensaje
	var url = 'mailto:info@vallemi.com?subject=Contacto desde la página web de Vallemi&body=' + body;
	// Abrimos la URL en una nueva pestaña
	window.open(url, '_blank');
});


// Llamada al servicio API y hacer cambios al HTML
$.get('/hora', function(hora_actual) {
	// Obtenemos la hora actual de la respuesta del API
	const hora = hora_actual.hora
	const minuto = hora_actual.minuto
	const segundo = hora_actual.segundo
  
	// Actualizamos el contenido del div #reloj
	$('#reloj').html(`${hora}:${minuto}:${segundo}`)
  
	// Actualizamos el reloj cada segundo
	setInterval(function() {
	  $.get('/hora', function(hora_actual) {
		const hora = hora_actual.hora
		const minuto = hora_actual.minuto
		const segundo = hora_actual.segundo
  
		$('#reloj').html(`${hora}:${minuto}:${segundo}`)
	  })
	}, 1000)
  })

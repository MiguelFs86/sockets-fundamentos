var socket = io();

socket.on('connect', function(){
	console.log('Conectado al servidor');
});

socket.on('disconnect', function(){
	console.log('Desconectado del servidor');
});


socket.emit('enviarMensaje', {
	usuario: 'Fernando',
	mensaje: 'Hola mundo'
}, function( resp ){
	console.log('Respuesta server: ',resp);
});

socket.on('enviarMensaje', function(mensaje){
	console.log('Servidor: ', mensaje);
});
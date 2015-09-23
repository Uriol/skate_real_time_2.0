var socket = io.connect('http://localhost:3000');

var sensorON = false;


$(function(){

	askSensor();
	function askSensor(){
		socket.emit('sensor state ?');
	}

	socket.on('sensor ON', function(){
		console.log('sensor is ON')
	})

	socket.on('sensor OFF', function(){
		askSensor();
	})

})
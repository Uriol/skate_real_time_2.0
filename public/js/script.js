var socket = io.connect('http://localhost:3000');

var sensorON = false;


$(function(){

	// Check if sensor is on
	askSensor();
	function askSensor(){
		socket.emit('sensor state ?');
	}
	socket.on('sensor ON', function(){
		console.log('sensor is ON');
		$('#newTrick').css('background-color', 'green');
	});
	socket.on('sensor OFF', function(){
		askSensor();
	})


	// Ask server for data after landing trick
	$('#newTrick').on('click', function(){

		// Ask server
		socket.emit('trick data');
	})
	// Recieve new trick data
	socket.on('new trick data', function(trickdata){
		parseTrickData(trickdata);
	})

	function parseTrickData(data){
		console.log(data);
	}
})
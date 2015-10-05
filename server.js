// http://127.0.0.1:3000/
var express = require('express')
var app = express()
var port = 3000;

app.use(express.static(__dirname + '/public'));
var io = require('socket.io').listen(app.listen(port));

// Jade template
app.set('views', __dirname +'/public/www');
app.set('view engine', 'jade');
app.engine('jade', require('jade').__express);
app.get('/', function(req,res) {
	res.render('index');
})



// Bluetooth node module
var btSerial = new (require('bluetooth-serial-port')).BluetoothSerialPort();

// Find bluetooth device
btSerial.on('found', function(address, name) {

	console.log('Found device: ' + address + ' - ' + name);
	// Limit the search to the devices starting by the name of 'skate'
	if(name.toLowerCase().indexOf('skate') > -1) {
		btSerial.findSerialPortChannel(address, function(channel){
			console.log('Found skate device: ' + address + ' - ' + name);
			btSerial.connect(address, channel, function(){
				console.log('Sensor connected');
				// When the server is recieving sensor data
				// start parsing the data
				btSerial.on('data', function(buffer){
					parse(buffer.toString());
				})
			}, function(){
				console.log('Not able to connect')
			})

			// Close connection
			btSerial.close();
		}, function(){
			console.log('found nothing');
		})
	}

});

// Start searching for bluetooth devices
btSerial.inquire();

// Show paired devices
btSerial.listPairedDevices(function(pairedDevices) {
    pairedDevices.forEach(function(device) {
        //console.log('Paired devices: ' + device);
    });
})

var $chunk = '',
	$line = '',
	$data = [];

function parse(data){
	$chunk += data;
	$line = '';

	// If the first character is > 0
	if ($chunk.indexOf('\n') > 0) {
		console.log('first index')
		//console.log('value of $chunk: ' + $chunk);
		// console.log('value of index: ' + $chunk.indexOf('\n'));
		$chunk = $chunk.slice( $chunk.indexOf('\n'));
		
	}

	// If last character is > 0
	// Is not an empty string
	if ($chunk.lastIndexOf('\n') > 0) {
		// Put whole row as $line
		$line = $chunk.slice(1, $chunk.lastIndexOf('\n'));
		// Refresh $chunk
		$chunk = $chunk.slice( $chunk.lastIndexOf('\n'));
		
		
	}

	// $line string to array
	if ($line != '') {
		var split = $line.split(',');

		var rowObject = [
			parseInt(split[0]),
			parseInt(split[1]),
			parseInt(split[2]),
			parseInt(split[3])
		]

		$line = '',
		// rowObject[] in to data[]
		$data.push(rowObject);
		console.log(rowObject);
	}
}

var trickData;
// Sockets
io.sockets.on('connection', function (socket) {

	console.log('soket on in server');
	// Check if sensor is on
	socket.on('sensor state ?', function(){
		if ($data.length >= 25){
			console.log('sensor is ON');
			socket.emit('sensor ON');
		} else {
			console.log('sensor is 0FF');
			socket.emit('sensor OFF');
		}
	})


	// Send trick data to FE
	socket.on('trick data', function(){
		trickData = $data.slice(-200);
		socket.emit('new trick data', trickData);
	})


});


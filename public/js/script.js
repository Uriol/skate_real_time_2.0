var socket = io.connect('http://localhost:3000');

// Parse Data --------------------------------------------
var data_row;
// Arrays
var $y_Accel ,
	$z_Accel ,
	$yaw ,
	$pitch ,
	$roll ,
	$state ,
	$air_ground ;
// Physics
var airtime;


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
		restartValues();
		parseTrickData(trickdata);
		calculateAverage();
	})

}) // End doc ready
	

	function parseTrickData(data){
		
		

		for(var i = 0; i < data.length; i++){
			data_row = data[i];
			// Reset small accel values (when it is not really jumping)
			// Reset Y
			if (data_row[0] <= 5 && data_row[0] >= -5) { data_row[0] = 0; }
			// Reset Z
			if (data_row[1] <= 5 && data_row[1] >= -5) { data_row[1] = 0; }

			// Push y,z values to air or ground array to calculate average
			if (data_row[0] !== 0 || data_row[1] !== 0){
				$air_ground.push(1); // Air
			} else { $air_ground.push(0); } // Ground

			// Push every value to its array
			$y_Accel.push(data_row[0]);
			$z_Accel.push(data_row[1]);
			$yaw.push(data_row[2]);
			$pitch.push(data_row[3]);
			$roll.push(data_row[4]);
		}

		console.log($roll);
	}

	function restartValues(){
		$y_Accel = [],
		$z_Accel = [],
		$yaw = [],
		$pitch = [],
		$roll = [],
		$state = [],
		$air_ground = [];
	}

	// Sometimes the values between the jump incorrectly detect the skate isn't in the air
	function calculateAverage(){
		var average = 0, sliced, slice_num = 8, slice_start = 0, target_average = 0.5;
		// Loop through the array of air/ground
		for (var j = 0; j < $air_ground.length; j++){
			average = 0;
			// if (j >= slice_num/2) {
			// 	slice_start = j-slice_num/2;
			// } else {
			// 	slice_start = 0;
			// }
			// slice_start = j >= slice_num/2 ? j-slice_num/2 : 0;
			slice_start = j;
			//console.log('slice_start: ' + slice_start );
			// Get a chunk to calculate average
			sliced = $air_ground.slice(slice_start, slice_start + slice_num);
			console.log('sliced: ' + sliced)
			sliced.forEach(function(value, index) {
				if (value == 0 ) { average = average+0; }
				else { average = average+1}
			});
			console.log('average: ' + average)
			average = average / slice_num;
			console.log('average/slice_num: ' + average)
			if (average >= target_average){
				$state.push('air');
				airtime +=1;
			} else {
				$state.push('ground');
			}
		}
		console.log('$air_ground: ' + $air_ground);
		console.log('$state: ' + $state);
	}


// Steps to parse data
// 0 - Restart values 
// 1 - Loop through all the data to acces each row [y,z,yaw,pitch,roll]
// 2 - Reset small values for y,z
// 3 - Create new array for jumping/ground to know when in the data array the skate is in the air/floor
// 4 - Create new arrays [5] for all y,z,yaw,pitch,roll
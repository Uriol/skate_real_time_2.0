var socket = io.connect('http://localhost:3000');

var trickData = [];
var data_row;

var time = 0.02,
	gravity = 9.81,
	totalSpeed = 2.5,
	pi = 3.14;
	pixelMultiplier = 100;

// Arrays
var $air_ground = [],
	$yaw = [],
	$pitch = [],
	$roll = [],
	$state = [];

// Jump
var airtime,
	totalJumps = 0,
	$jumps_airtime = [],
	totalTimeOnAir = 0,
	jump_airtime = 0,
	jump_speed = 0,
	$jumps_speeds = [],
	air_interval,
	elapsedTimeOnAir,
	initialYawOnJumping,
	initialRollOnJumping,
	initial_y_onJumping,
	final_y_onJumping,
	jumpDistance,
	jump_counter = 0,
	yawOnLanding;

// Angles and positions
var initialYaw, total_angle_diff,
	xSpeed, xPosition, xPreviousPosition,
	ySpeed, yPosition, yPreviousPosition,
	zPosition,
	centerYposition;

// Booleans
var plus180 = false,
	minus180 = false;

// Position arrays
var $total_yaws = [],
	$total_pitchs = [],
	$total_rolls = [],
	$total_x_positions = [],
	$total_y_positions = [],
	$total_z_positions = [];

// Color arrays
var $color_state = [];

$(function(){

	// Check if sensor is on
	askSensor();
	function askSensor(){
		socket.emit('sensor state ?');
	}
	socket.on('sensor ON', function(){
		console.log('sensor is ON');
	});
	socket.on('sensor OFF', function(){
		// Keep asking
		askSensor();
	})

	// Ask sensor for data after landing trick
	$('#newTrick').on('click', function(){
		socket.emit('trick data');
	})
	socket.on('new trick data', function(trickdata){
		// Make trickdata global
		trickData = trickdata;
		// Reset trick name text
		$('#trickName h1').text('');
		resetVisuals()
		resetValues();
		parseTrickData(trickData);
		calculateAverage();
		checkNumberOfJumps();
		switchState();
		drawTrick();
	})

}) // End of doc ready

function parseTrickData(data){

	for(var i = 0; i < data.length; i++){
		data_row = data[i];
		
		if(data_row[0] == 0){
			$air_ground.push(0);
		} else {
			$air_ground.push(10);
		}
		
		$yaw.push(data_row[1]);
		$pitch.push(data_row[2]);
		$roll.push(data_row[3]);
	}
	//console.log('raw data jump: ' + $air_ground);
}

// Sometimes the values between the jump incorrectly detect the skate isn't in the air
function calculateAverage(){
	var average = 0, sliced, slice_num = 8, slice_start = 0, target_average = 0.5;
	// Loop through the array of air/ground
	for (var j = 0; j < $air_ground.length; j++){
		average = 0;
		slice_start = j >= slice_num/2 ? j-slice_num/2 : 0;
		// Get a chunk to calculate average
		sliced = $air_ground.slice(slice_start, slice_start + slice_num);
		sliced.forEach(function(value, index) {
			if (value == 0 ) { average = average+0; }
			else { average = average+1}
		});
		average = average / slice_num;
		if (average >= target_average){
			$state.push('air');
			airtime +=1;
		} else {
			$state.push('ground');
		}
	}
	//console.log('average data jump: ' + $state);
}

// How many jumps are in the data array
function checkNumberOfJumps(){
	// Loop trought $state and detect how many changes are from
	// air to ground
	for(var k = 0; k < $state.length; k++){

		// Landing moment
		if ($state[k] == 'ground' && $state[k-1] == 'air'){
			totalJumps += 1;

			totalTimeOnAir = jump_airtime*time;
			jump_speed = 0.5*gravity*totalTimeOnAir;
			$jumps_airtime.push(totalTimeOnAir);
			$jumps_speeds.push(jump_speed);
			jump_airtime = 0;
			totalTimeOnAir = 0;
		}

		if ($state[k] == 'air'){
			jump_airtime += 1;
		}
	}

	// console.log('total jumps: ' + totalJumps);
	// console.log('airtime in jumps: ' + $jumps_airtime);
	// console.log('jumps speeds: ' + $jumps_speeds);
}

var k;
// Run onAir() / onGround()
function switchState(){
	for(k = 0; k < $state.length; k++) {

		if ($state[k] == 'ground'){
			onGround();
		} else {
			onAir();
		}
	}
}

// Calculate position when skate is on the ground
function onGround(){

	air_interval = 0;
	elapsedTimeOnAir = 0;
	initialYaw = $yaw[0];

	// If 180
	if (plus180 == true) { $yaw[k] = $yaw[k]+180; }
	if (minus180 == true) { $yaw[k] = $yaw[k]-180; }

	total_angle_diff = $yaw[k] - initialYaw;
	// To radians
	total_angle_diff = total_angle_diff*pi/180;

	// Calculate positions
	xSpeed = totalSpeed*Math.sin(total_angle_diff);
	xPosition = xPreviousPosition + xSpeed*time;
	xPreviousPosition = xPosition;
	ySpeed = totalSpeed*Math.cos(total_angle_diff);
	yPosition = yPreviousPosition + ySpeed*time;
	yPreviousPosition = yPosition;
	zPosition = 0;
	$pitch[k] = 0;

	// Push yaw, pitch, roll / x, y, z positions
	$total_yaws.push(total_angle_diff);
	$total_pitchs.push($pitch[k]);
	$total_rolls.push($roll[k]);
	$total_x_positions.push(xPosition);
	$total_y_positions.push(yPosition);
	$total_z_positions.push(zPosition);

	//console.log('X pos: ' + xPosition + ', Y pos: ' + yPosition);

}

// Calculate position when skate is on the air
function onAir(){
	air_interval += 1;
	elapsedTimeOnAir = air_interval*time;

	// Detect first moment of jump
	if (elapsedTimeOnAir == time){
		initialYawOnJumping == $yaw[k];
		initialRollOnJumping = $roll[k];
		initial_y_onJumping = yPosition;
		jump_counter += 1;
	}
	// Detect landing moment
	if (elapsedTimeOnAir == $jumps_airtime[jump_counter-1]){
		yawOnLanding = $yaw[k];
		calculateLanding();
		// Add color
		$color_state.push('after jump');

	} else {
		$color_state.push('jumping');
	}

	// Calculate positions
	zPosition = $jumps_speeds[jump_counter-1]*elapsedTimeOnAir-0.5*gravity*elapsedTimeOnAir*elapsedTimeOnAir;
	// x / y positions keep constant
	xPosition = xPreviousPosition + xSpeed*time;
	xPreviousPosition = xPosition;
	yPosition = yPreviousPosition + ySpeed*time;
	yPreviousPosition = yPosition;

	// Calculate total angle dif to rads
	total_angle_diff = $yaw[k] - initialYaw;
	total_angle_diff = total_angle_diff*pi/180;
	// Push yaw, pitch, roll / x,y,z positions
	$total_x_positions.push(xPosition);
	$total_y_positions.push(yPosition);
	$total_z_positions.push(zPosition);
	$total_yaws.push(total_angle_diff);
	$total_pitchs.push($pitch[k]*-1);
	$total_rolls.push($roll[k]);

	//console.log('z position: ' + zPosition);
	previous_pitch = $pitch[k];


}

// Calculate new direction if there is a 180
function calculateLanding(){
	// Calculate 180s
	// first case initialYaw < 0 > 90
	if ( initialYawOnJumping > 0 && initialYawOnJumping < 90 ) {
	    if ( -90 + initialYawOnJumping < yawOnLanding && 90 + initialYawOnJumping > yawOnLanding) { yawOnLanding = yawOnLanding; 
	    	console.log("case 1: final yawOnLanding not 180");}
	    else if ( 90 + initialYawOnJumping < yawOnLanding && yawOnLanding < 179 ) { yawOnLanding = yawOnLanding - 180; 
	    	console.log("case 1: final yawOnLanding -180"); minus180 = true; plus180 = false;}
	    else if ( -90 + initialYawOnJumping > yawOnLanding && yawOnLanding > -179 ) { yawOnLanding = yawOnLanding + 180; 
	    	console.log("case 1: final yawOnLanding +180"); plus180 = true; minus180 = false;}
  	}

  	// second case initialYaw > 90 < 179
 	if ( initialYawOnJumping > 90 && initialYawOnJumping < 179) {
	    if ( yawOnLanding > 0 && 90 - ( 179 - initialYawOnJumping ) > yawOnLanding ) { yawOnLanding = yawOnLanding - 180 ; 
	    	console.log("case 2: final yawOnLanding -180"); minus180 = true; plus180 = false;}
	    else if ( -90 - (179 - initialYawOnJumping) < yawOnLanding && yawOnLanding < 0 ) { yawOnLanding = yawOnLanding + 180; 
	    	console.log("case 2: final yawOnLanding + 180"); plus180 = true; minus180 = false;}
	    else { yawOnLanding = yawOnLanding; 
	    	console.log("case 2: final yawOnLanding not 180");}
  	}

  	// Third case initial yaw < 0 > -90
  	if ( initialYawOnJumping < 0 && initialYawOnJumping > -90 ) {
	    if ( yawOnLanding > -179 && yawOnLanding < -90 + initialYawOnJumping) { yawOnLanding = yawOnLanding + 180; 
	    	console.log("case 3: final yawOnLanding + 180"); plus180 = true; minus180 = false; }
	    else if ( 90 + initialYawOnJumping < yawOnLanding && yawOnLanding < 179 ) { yawOnLanding = yawOnLanding - 180; 
	    	console.log("case 3: final yawOnLanding - 180"); minus180 = true; plus180 = false;}
	    else { yawOnLanding = yawOnLanding; 
	    	console.log("case 3: final yawOnLanding not 180");}
  	}

  	// Fourth case initial yaw > -90 < -179
  	if ( initialYawOnJumping < -90 && initialYawOnJumping > -179 ) {
	    if ( yawOnLanding > 0 && 90 + ( 179 + initialYawOnJumping ) > yawOnLanding ) { yawOnLanding = yawOnLanding - 180; 
	    	console.log("case 4: final yawOnLanding - 180"); minus180 = true; plus180 = false;}
	    else if ( -90 + (179 + initialYawOnJumping ) < yawOnLanding && yawOnLanding < 0 ) { yawOnLanding = yawOnLanding + 180; 
	    	console.log("case 4: final yawOnLanding + 180"); plus180 = true; minus180 = false;}
	    else { yawOnLanding = yawOnLanding; 
	    	console.log("case 4: final yawOnLanding not 180");}
  	}
}

// Delete skate objects
function resetVisuals(){
	if (trick_animation == true) {
		trick_animation = false;
		clearInterval(animationInterval);
	}

	// Remove previous skate objects
	var obj, i;
	for (i = scene.children.length - 1; i >= 0; i --) {
		obj = scene.children[i];
		if(obj.name == 'skateboardObject'){
			scene.remove(obj);
		}
	}
}

function resetValues(){
	// Arrays
	$air_ground = [],
	$yaw = [],
	$pitch = [],
	$roll = [],
	$state = [];

	// Jump
	airtime,
	totalJumps = 0;
	$jumps_airtime = [],
	totalTimeOnAir = 0,
	jump_airtime = 0,
	jump_speed = 0,
	$jumps_speeds = [],
	air_interval = 0,
	elapsedTimeOnAir = 0;

	// Angles and positions
	initialYaw = 0, total_angle_diff = 0,
	xSpeed = 0, xPosition = 0, xPreviousPosition = 0,
	ySpeed = 0, yPosition = 0, yPreviousPosition = 0,
	zPosition = 0,
	centerYposition = 0,
	previous_pitch = 0;

	// Booleans
	plus180 = false,
	minus180 = false;

	// Position arrays
	$total_yaws = [],
	$total_pitchs = [],
	$total_rolls = [],
	$total_x_positions = [],
	$total_y_positions = [],
	$total_z_positions = [];

	// Color arrays
	$color_state = [];
};
var socket = io.connect('http://localhost:3000');

// Parse Data --------------------------------------------
var data_row;
var pixelMultiplier = 100;
// Arrays
var $y_Accel ,
	$z_Accel ,
	$yaw ,
	$pitch ,
	$roll ,
	$state ,
	$air_ground ;
// Position Arrays
var $total_yaws = [],
	$total_pitchs = [],
	$total_rolls = [],
	$total_x_positions = [],
	$total_y_positions = [],
	$total_z_positions = [];
// Position
var xSpeed, xPosition, xPreviousPosition;
var ySpeed, yPosition, yPreviousPosition;
var zPosition;
// On Air
var initialYawOnJumping, 
	initialRollOnJumping, elapsedRollOnJumping, 
	initial_y_onJumping,
	final_y_onJumping, jumpDistance,
	yawOnLanding, jumpHeight,
	previous_pitch = 0,
	pitch_add,
	centerYposition;
// Physics
var airtime,
	totalTimeOnAir,
	gravity = 9.81,
	time = 0.02,
	airSpeed,
	totalSpeed = 2.5,
	elapsedTimeOnAir,
	interval = 0,
	air_interval = 0,
	initialYaw,
	total_angle_diff = 0,
	pi = 3.14;
// Booleans for 180
var plus180 = false,
	minus180 = false,
	halfJump = false;
// Modify Color
var before_jump = 0,
	after_jump = 0,
	during_jump = 0,
	$color_state = [],
	jump_ended = false;

//var $reception = [];
var jump = false;
var trick_displayed = false;

var trickData = [];
var trickName = '';
var halfFlip_1 = false, halfFlip_2 = false;



// Tricks booleans
// Fakie/Normal, 0llie, flip, 180, 360, flip180, flip360
var fakie = false, flip = false, oneEighty = false, threeSixty = false;

var trick_stance, trickFlip, trickRotation;

$(function(){

	// Check if sensor is on
	askSensor();
	function askSensor(){
		socket.emit('sensor state ?');
	}
	socket.on('sensor ON', function(){
		console.log('sensor is ON');
		//$('#newTrick').css('background-color', 'green');
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
		
		//console.log(trickdata);
		trickData = trickdata;
		$('#trickName h1').text('');
		resetVisuals();
		restartValues();
		parseTrickData(trickdata);
		console.log($z_Accel);
		calculateAverage();
		switchState();
		drawTrick();
		calculateTrickName();



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

	//console.log($roll);
}

function restartValues(){
	$y_Accel = [],
	$z_Accel = [],
	$yaw = [],
	$pitch = [],
	$roll = [],
	$state = [],
	$air_ground = [];



	// onGround
	before_jump = 0,
	after_jump = 0,
	during_jump = 0,
	$color_state = [],
	jump_ended = false;

	total_angle_diff = 0, xSpeed = 0, ySpeed = 0, xPosition = 0, xPreviousPosition = 0,
	yPosition = 0, yPreviousPosition = 0, zPosition = 0,
	minus180 = false,
	plus180 = false,
	halfJump = false;

	elapsedTimeOnAir = 0;
	airSpeed = 0;

	$total_x_positions = [];
	$total_y_positions = [];
	$total_z_positions = [];
	$total_yaws = [];
	$total_pitchs = [];
	$total_rolls = [];

	previous_pitch = 0;
	pitch_add = 0;
	// Air
	airtime = 0,
	totalTimeOnAir = 0;
	airSpeed = 0;
	air_interval = 0;
	jumpHeight = 0;

	jump = false;
	trick_displayed = false;

	trickName = '';
	halfFlip_1 = false, halfFlip_2 = false;

	fakie = false, flip = false, oneEighty = false, threeSixty = false;
	trick_stance, trickFlip, trickRotation;
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
		slice_start = j >= slice_num/2 ? j-slice_num/2 : 0;
		//slice_start = j;
		//console.log('slice_start: ' + slice_start );
		// Get a chunk to calculate average
		sliced = $air_ground.slice(slice_start, slice_start + slice_num);
		//console.log('sliced: ' + sliced)
		sliced.forEach(function(value, index) {
			if (value == 0 ) { average = average+0; }
			else { average = average+1}
		});
		//console.log('average: ' + average)
		average = average / slice_num;
		//console.log('average/slice_num: ' + average)
		if (average >= target_average){
			$state.push('air');
			airtime +=1;
		} else {
			$state.push('ground');
		}
	}

	// Get time on air / airSpeed
	totalTimeOnAir = airtime*time;
	airSpeed = 0.5*gravity*totalTimeOnAir;
	//console.log('Total time on Air: ' + totalTimeOnAir);
	//console.log('air speed: ' + airSpeed);
}

var state;
var k;
// Run onAir() / onGround 
function switchState(){
	for( k = 0; k < $state.length; k++) {
		state = $state[k];
		if( state == 'ground' ) {
			onGround();
		} else if ( state == 'air' ){
			onAir();
			jump = true;
		}
	}
}

// Calculate position when skate is on ground
function onGround(){
	// Push color (grey) state in array
	if(jump_ended == false){
		before_jump += 1;
		$color_state.push('before jump')
	} else {
		after_jump += 1;
		$color_state.push('after jump')
	}

	// Get Position
	elapsedTimeOnAir = 0;
	air_interval = 0;
	interval += 1;
	initialYaw = $yaw[0];

	// If there have been 180
	if (plus180 == true) { $yaw[k] = $yaw[k]+180; }
	if (minus180 == true) { $yaw[k] = $yaw[k]-180;}

	total_angle_diff = $yaw[k] - initialYaw;
	// To Radians
	total_angle_diff = total_angle_diff*pi/180;

	// Calculate x positions
	xSpeed = totalSpeed*Math.sin(total_angle_diff);
	xPosition = xPreviousPosition + xSpeed*time;
	//console.log('xPosition: ' + xPosition);
	xPreviousPosition = xPosition;
	// Calculate y positions
	ySpeed = totalSpeed*Math.cos(total_angle_diff);
	yPosition = yPreviousPosition + ySpeed*time;
	//console.log('yPosition: ' + yPosition);
	yPreviousPosition = yPosition;

	// Update z: is always 0 on ground
	zPosition = 0;
	// Update pitch: is always 0 on ground
	$pitch[k] = 0;

	// Push yaw, picth, roll / x, y, z positions
	$total_yaws.push(total_angle_diff);
	$total_pitchs.push($pitch[k]);
	$total_rolls.push($roll[k]);
	$total_x_positions.push(xPosition);
	$total_y_positions.push(yPosition);
	$total_z_positions.push(zPosition);

}

function onAir(){
	air_interval += 1;
	elapsedTimeOnAir = air_interval*time;

	// Detect first moment on jump
	if (elapsedTimeOnAir == time) {
		initialYawOnJumping = $yaw[k];
		initialRollOnJumping = $roll[k];
		initial_y_onJumping = yPosition;
	}

	// Detect landing moment
	if (elapsedTimeOnAir == totalTimeOnAir) {
		yawOnLanding = $yaw[k];
		calculateLanding();

		final_y_onJumping = yPosition;
		jumpDistance = final_y_onJumping - initial_y_onJumping;
		jump_ended = true;
		$color_state.push('after jump');
		after_jump += 1;
		
		// Calculate pitch
		calculatePitch();
		// 180
		calculate180();
	} else {
		$color_state.push('jumping');
		during_jump += 1;
	}


	// Calculate pitches at the beginning of the jump
	if(air_interval < 7){
		pitch_add = previous_pitch + $pitch[k];
	} 
	
	// Calculate tricks
	calculateFlip();

	// Calculate z position
	zPosition = airSpeed*elapsedTimeOnAir-0.5*gravity*elapsedTimeOnAir*elapsedTimeOnAir;
	// Calculate x position: keeps constant
	xPosition = xPreviousPosition + xSpeed*time;
	xPreviousPosition = xPosition;
	// Calculate y position: keeps constant
	yPosition = yPreviousPosition + ySpeed*time;
	yPreviousPosition = yPosition;

	interval += 1;

	// Calculate jump height and center y position
	// Detect middle of the jump
	if (elapsedTimeOnAir >= totalTimeOnAir/2 && halfJump == false){
		halfJump = true;
		jumpHeight = zPosition;
		centerYposition = yPosition*pixelMultiplier*-1;
		//console.log('jump height: ' + jumpHeight);
	}

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

	previous_pitch = $pitch[k]

}

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

// Calculate fakie 
// fakie = positive pitch
function calculatePitch(){
	if(pitch_add >= 0){
		fakie = true;
	} else {
		fakie = false;
	}
}

// Calculate flip
function calculateFlip(){
	// Calculate elapsed roll
	elapsedRollOnJumping = $roll[k] - initialRollOnJumping;
	// Calculate each half rotation
	if (elapsedRollOnJumping >= 140){
		halfFlip_1 = true;
	} else if (elapsedRollOnJumping <= -140){
		halfFlip_2 = true;
	}
	// Calculate complete rotation
	if(halfFlip_1 == true && halfFlip_2 == true){
		flip = true;
	}
}
// 180
function calculate180(){
	if(minus180 == true || plus180 == true){
		oneEighty = true;
	}
}

// Calculate trick names
// Fakie/Normal, 0llie, 180, 360, flip, flip 180, flip360
function calculateTrickName(){
	// trick_stance, trickFlip, trickRotation;
	// Fakie
	if (fakie == true){
		trick_stance = 'FAKIE ';
	} else {
		trick_stance = '';
	}
	// 180
	if(oneEighty == true){
		trickRotation = '180 '
	} else {
		trickRotation = '';
	}
	// Flip
	if (flip == true){
		trickFlip = 'FLIP'
	} else {
		trickFlip = 'OLLIE';
	}
	
	
}

// Calibrate sensors
function drawTrickName(){
	
	var trickName_1 = trick_stance.concat(trickRotation);
	var trickName_final = trickName_1.concat(trickFlip);
	$('#trickName h1').text(trickName_final);
	
}

// TRICKS
// 1 - Fakie Ollie, Fakie 180, Fakie 360, Fakie flip, Fakie flip 180, Fakie flip 360, 
// 2 - Ollie, 180, 360, Flip, Flip 180, Flip 360
// To calculate 
// - Fakie, flip, 180, 360 

// Steps to parse data
// 0 - Restart values 
// 1 - Loop through all the data to acces each row [y,z,yaw,pitch,roll]
// 2 - Reset small values for y,z
// 3 - Create new array for jumping/ground to know when in the data array the skate is in the air/floor
// 4 - Create new arrays [5] for all y,z,yaw,pitch,roll
// 5 - Calculate average for values during jump (WIP)
// 6 - Add total time on air and air speed
// 7 - Switch state: when to run onAir/onGround



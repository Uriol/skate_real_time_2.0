var this_x_pos, previous_x_pos, actual_x_pos, increment_x_pos, final_x_pos,
	this_y_pos, previous_y_pos, actual_y_pos, increment_y_pos, final_y_pos,
	this_z_pos, previous_z_pos, actual_z_pos, increment_z_pos, final_z_pos;

var skateboard, 
	skateboard_tail, prev_skateboard_tail,
	skateboard_center, prev_skateboard_center,
	skateboard_nose, prev_skateboard_nose;

var position_tail, position_center, position_nose;

// Booleans
var onGround_bool = false,
	trick_animation = false;
	reception = false;

var animationInterval;

// Color
var grey_gradient_before_jump, grey_value_before_jump = 0, total_grey = 40;
var grey_gradient_after_jump, grey_value_after_jump;

var start_trick_at, finish_trick_at;

function drawTrick(){

	trick_displayed = true;
	$('#playTrick').show();

	// Reset values
	position_tail = new THREE.Vector3(); 
	position_center = new THREE.Vector3();
	position_nose = new THREE.Vector3();

	prev_skateboard_tail = new THREE.Vector3();
	prev_skateboard_center = new THREE.Vector3();
	prev_skateboard_nose = new THREE.Vector3();

	previous_x_pos = 0;
	previous_y_pos = 0;
	previous_z_pos = 0;

	start_trick_at = 0, finish_trick_at = 0;

	// Restart color values
	grey_value_before_jump = 0;
	grey_value_after_jump = 80;
	// yellow_value_during_jump = 0;

	console.log('before_jump: ' + before_jump);
	console.log('jump: ' + jump)
	// When to start the trick
	if (before_jump >= 20 && jump == true){
		start_trick_at = before_jump-20;
	} else {
		start_trick_at = 0;
	}
	// When to finish the trick
	if (after_jump >= 20 && jump == true){
		finish_trick_at = after_jump-20;
	} else {
		finish_trick_at = 0;
	}

	// Decrease / increase the grey value
	grey_gradient_before_jump = 4;
	grey_gradient_after_jump = 4;

	// Start animation
	// 20 skates before/after
	var i = start_trick_at;
	console.log(i)
	animationInterval = setInterval(function(){

		// Clear interval when trick is done
		if(($total_x_positions.length-finish_trick_at) == i){

			trick_animation = false;
			clearInterval(animationInterval);
			if (jump == true){
				drawTrickName();
			} else {
				$('#trickName h1').text('');
			}
		}
		
		trick_animation = true;
		i++;

		// Get color
		if($color_state[i] == 'before jump'){
			grey_value_before_jump += grey_gradient_before_jump;
			darkGrey = new THREE.Color('rgb(' + grey_value_before_jump + ', ' + grey_value_before_jump + ', ' + grey_value_before_jump +')');
			grey = new THREE.Color('rgb(' + grey_value_before_jump + ', ' + grey_value_before_jump + ', ' + grey_value_before_jump +')');
		} else if( $color_state[i] == 'after jump'){
			grey_value_after_jump -= grey_gradient_after_jump;
			if (grey_value_after_jump < 0) { grey_value_after_jump = 0;}
			//console.log('grey_value_after_jump: ' + grey_value_after_jump);
			darkGrey = new THREE.Color('rgb(' + grey_value_after_jump + ', ' + grey_value_after_jump + ', ' + grey_value_after_jump +')');
			grey = new THREE.Color('rgb(' + grey_value_after_jump + ', ' + grey_value_after_jump + ', ' + grey_value_after_jump +')');
		}

		this_x_pos = $total_x_positions[i];
		this_y_pos = $total_y_positions[i];
		this_z_pos = $total_z_positions[i];

		$total_rolls[i] = $total_rolls[i]*pi/180;
		$total_pitchs[i] = $total_pitchs[i]*pi/180;

		
		// Don't draw the first one as jumping
		if($state[i] == 'air'){
			onGround_bool = false;
		} else { onGround_bool = true; }

		
		// Correct center position in case there is no jump
		if (centerYposition == undefined){
			centerYposition = -200;
		}

		// Calculate pos increments
		actual_x_pos = (this_y_pos*pixelMultiplier)-centerYposition*-1;
		increment_x_pos = actual_x_pos - previous_x_pos;
		actual_y_pos = this_z_pos*pixelMultiplier+3;
		increment_y_pos = actual_y_pos - previous_y_pos;
		actual_z_pos = this_x_pos*pixelMultiplier;
		increment_z_pos = actual_z_pos - previous_z_pos;

		//console.log('z pos: ' + actual_z_pos);

		// Detect center of rotation
		if(previous_pitch > $total_pitchs[i]){
			drawSkateboard_nose();
			skateboard = skateboard_nose;
			skateboard_nose = skateboard_nose_nose_pivot_line;
			skateboard_center = skateboard_nose_center_pivot_line;
			skateboard_tail = skateboard_nose_tail_pivot_line;

			final_x_pos = prev_skateboard_nose.x + increment_x_pos;
			skateboard.position.x = final_x_pos;

			final_y_pos = prev_skateboard_nose.y + increment_y_pos;
			skateboard.position.y = final_y_pos;

			final_z_pos = prev_skateboard_nose.z + increment_z_pos;
			skateboard.position.z = final_z_pos;
			//console.log('nose Previous pitch: ' + previous_pitch + ', nose actual pitch: ' + $total_pitchs[i])
		
		} else if (previous_pitch < $total_pitchs[i]) {
			drawSkateboard_tail()
			skateboard = skateboard_tail;
			skateboard_nose = skateboard_tail_nose_pivot_line;
			skateboard_center = skateboard_tail_center_pivot_line;
			skateboard_tail = skateboard_tail_tail_pivot_line;

			final_x_pos = prev_skateboard_tail.x + increment_x_pos;
			skateboard.position.x = final_x_pos;

			final_y_pos = prev_skateboard_tail.y + increment_y_pos;
			skateboard.position.y = final_y_pos;

			final_z_pos = prev_skateboard_tail.z + increment_z_pos;
			skateboard.position.z = final_z_pos;
			//console.log('tail Previous pitch: ' + previous_pitch + ', tail actual pitch: ' + $total_pitchs[i])
		} else {

			drawSkateboard_center();
			skateboard = skateboard_center;
			skateboard_nose = skateboard_center_nose_pivot_line;
			skateboard_center = skateboard_center_center_pivot_line;
			skateboard_tail = skateboard_center_tail_pivot_line;

			final_x_pos = prev_skateboard_center.x + increment_x_pos;
			skateboard.position.x = final_x_pos;

			final_y_pos = prev_skateboard_center.y + increment_y_pos;
			skateboard.position.y = final_y_pos;

			final_z_pos = prev_skateboard_center.z + increment_z_pos;
			skateboard.position.z = final_z_pos;
			//console.log('center Previous pitch: ' + previous_pitch + ', center actual pitch: ' + $total_pitchs[i])
		}

		// 	Save actual position
		previous_x_pos = actual_x_pos;
		previous_y_pos = actual_y_pos;
		previous_z_pos = actual_z_pos;

		// Quaternion rotation
		var euler =  new THREE.Euler(  $total_rolls[i], $total_yaws[i]*-1,$total_pitchs[i],'YZX');
		var quaternion = new THREE.Quaternion();
		quaternion.setFromEuler(euler, 'YZX');
		skateboard.setRotationFromQuaternion(quaternion);

		scene.updateMatrixWorld(true);
		// Tail
		position_tail = new THREE.Vector3();
		position_tail.setFromMatrixPosition( skateboard_tail.matrixWorld )

		// Center
		position_center = new THREE.Vector3();
		position_center.setFromMatrixPosition( skateboard_center.matrixWorld )
		// Nose
		position_nose = new THREE.Vector3();
		position_nose.setFromMatrixPosition( skateboard_nose.matrixWorld );

		// save tail, center, nose positions
		prev_skateboard_tail = position_tail;
		prev_skateboard_center = position_center;
		prev_skateboard_nose = position_nose;



	}, 20);
}


// 180 not working

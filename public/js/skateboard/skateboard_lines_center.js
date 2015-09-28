function drawLines_center(){

	

	if (onGround_bool == true || reception == true) {
		//grey = new THREE.Color("rgb(250, 30, 30)");
		yellowLineMaterial = new THREE.LineBasicMaterial({ color: grey, linewidth: 1.5 });
		blueLineMaterial = new THREE.LineBasicMaterial({ color: grey, linewidth: 1.5 });
	}  else {
		yellowLine = new THREE.Color("rgb(184, 228, 20)");
		yellowLineMaterial = new THREE.LineBasicMaterial({ color: yellowLine, linewidth: 1.5 });
		blueLine = new THREE.Color("rgb(0, 200, 255)");
		blueLineMaterial = new THREE.LineBasicMaterial({ color: blueLine, linewidth: 1.5 });
	}

	// Center right top line
	var center_right_top_line_Geometry = new THREE.Geometry();
	center_right_top_line_Geometry.vertices.push(new THREE.Vector3(-20, 0, 0));
	center_right_top_line_Geometry.vertices.push(new THREE.Vector3(20, 0, 0));
	var center_right_top_line = new THREE.Line(center_right_top_line_Geometry, yellowLineMaterial);
	center_right_top_line.position.y = 0.5;
	center_right_top_line.position.z = 10;
	skateboard_center.add(center_right_top_line);

	// Center right bottom line
	var center_right_bottom_line_Geometry = new THREE.Geometry();
	center_right_bottom_line_Geometry.vertices.push(new THREE.Vector3(-20, 0, 0));
	center_right_bottom_line_Geometry.vertices.push(new THREE.Vector3(20, 0, 0));
	var center_right_bottom_line = new THREE.Line(center_right_bottom_line_Geometry, yellowLineMaterial);
	center_right_bottom_line.position.y = -0.2;
	center_right_bottom_line.position.z = 10;
	skateboard_center.add(center_right_bottom_line);

	// Center left top line
	var center_left_top_line_Geometry = new THREE.Geometry();
	center_left_top_line_Geometry.vertices.push(new THREE.Vector3(-20, 0, 0));
	center_left_top_line_Geometry.vertices.push(new THREE.Vector3(20, 0, 0));
	var center_left_top_line = new THREE.Line(center_left_top_line_Geometry, blueLineMaterial);
	center_left_top_line.position.y = 0.5;
	center_left_top_line.position.z = -10;
	skateboard_center.add(center_left_top_line);

	// Center left bottom line
	var center_left_bottom_line_Geometry = new THREE.Geometry();
	center_left_bottom_line_Geometry.vertices.push(new THREE.Vector3(-20, 0, 0));
	center_left_bottom_line_Geometry.vertices.push(new THREE.Vector3(20, 0, 0));
	var center_left_bottom_line = new THREE.Line(center_left_bottom_line_Geometry, blueLineMaterial);
	center_left_bottom_line.position.y = -0.2;
	center_left_bottom_line.position.z = -10;
	skateboard_center.add(center_left_bottom_line);

	// Concave tail right top line
	var concave_right_top_line_Geometry = new THREE.Geometry();
	concave_right_top_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 6)-24, yPos_top_dif - 0.5, 0));
	concave_right_top_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 5.75)-24, yPos_top_dif - 0.5, 0));
	concave_right_top_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 4.87)-24, yPos_top_dif - 0.43, 0));
	concave_right_top_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 4.25)-24, yPos_top_dif - 0.37, 0));
	concave_right_top_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 3.62)-24, yPos_top_dif - 0.31, 0));
	concave_right_top_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 3)-24, yPos_top_dif - 0.25, 0));
	concave_right_top_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 2.5)-24, yPos_top_dif - 0.18, 0));
	concave_right_top_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 1.87)-24, yPos_top_dif - 0.12, 0));
	concave_right_top_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 1.25)-24, yPos_top_dif - 0.06, 0));
	concave_right_top_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 0.37)-24, yPos_top_dif - 0.00, 0));
	concave_right_top_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 0.00)-24, yPos_top_dif - 0.00, 0));
	var concave_right_top_line = new THREE.Line(concave_right_top_line_Geometry, yellowLineMaterial);
	concave_right_top_line.position.z = 10;
	skateboard_center.add(concave_right_top_line);

	// Concave tail right bottom line
	var concave_right_bottom_line_Geometry = new THREE.Geometry();
	concave_right_bottom_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 6)-24, yPos_bottom_dif - 0.5, 0));
	concave_right_bottom_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 5.75)-24, yPos_bottom_dif - 0.5, 0));
	concave_right_bottom_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 4.87)-24, yPos_bottom_dif - 0.43, 0));
	concave_right_bottom_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 4.25)-24, yPos_bottom_dif - 0.37, 0));
	concave_right_bottom_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 3.62)-24, yPos_bottom_dif - 0.31, 0));
	concave_right_bottom_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 3)-24, yPos_bottom_dif - 0.25, 0));
	concave_right_bottom_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 2.5)-24, yPos_bottom_dif - 0.18, 0));
	concave_right_bottom_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 1.87)-24, yPos_bottom_dif - 0.12, 0));
	concave_right_bottom_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 1.25)-24, yPos_bottom_dif - 0.06, 0));
	concave_right_bottom_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 0.37)-24, yPos_bottom_dif - 0.00, 0));
	concave_right_bottom_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 0.00)-24, yPos_bottom_dif - 0.00, 0));
	var concave_right_bottom_line = new THREE.Line(concave_right_bottom_line_Geometry, yellowLineMaterial);
	concave_right_bottom_line.position.z = 10;
	skateboard_center.add(concave_right_bottom_line);

	// Concave nose right top line
	var concave_nose_right_top_line_Geometry = new THREE.Geometry();
	concave_nose_right_top_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 6)*-1+24, yPos_top_dif - 0.5, 0));
	concave_nose_right_top_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 5.75)*-1+24, yPos_top_dif - 0.5, 0));
	concave_nose_right_top_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 4.87)*-1+24, yPos_top_dif - 0.43, 0));
	concave_nose_right_top_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 4.25)*-1+24, yPos_top_dif - 0.37, 0));
	concave_nose_right_top_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 3.62)*-1+24, yPos_top_dif - 0.31, 0));
	concave_nose_right_top_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 3)*-1+24, yPos_top_dif - 0.25, 0));
	concave_nose_right_top_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 2.5)*-1+24, yPos_top_dif - 0.18, 0));
	concave_nose_right_top_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 1.87)*-1+24, yPos_top_dif - 0.12, 0));
	concave_nose_right_top_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 1.25)*-1+24, yPos_top_dif - 0.06, 0));
	concave_nose_right_top_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 0.37)*-1+24, yPos_top_dif - 0.00, 0));
	concave_nose_right_top_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 0.00)*-1+24, yPos_top_dif - 0.00, 0));
	var concave_nose_right_top_line = new THREE.Line(concave_nose_right_top_line_Geometry, yellowLineMaterial);
	concave_nose_right_top_line.position.z = 10;
	skateboard_center.add(concave_nose_right_top_line);


	// Concave nose right bottom line
	var concave_nose_right_bottom_line_Geometry = new THREE.Geometry();
	concave_nose_right_bottom_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 6)*-1+24, yPos_bottom_dif - 0.5, 0));
	concave_nose_right_bottom_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 5.75)*-1+24, yPos_bottom_dif - 0.5, 0));
	concave_nose_right_bottom_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 4.87)*-1+24, yPos_bottom_dif - 0.43, 0));
	concave_nose_right_bottom_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 4.25)*-1+24, yPos_bottom_dif - 0.37, 0));
	concave_nose_right_bottom_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 3.62)*-1+24, yPos_bottom_dif - 0.31, 0));
	concave_nose_right_bottom_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 3)*-1+24, yPos_bottom_dif - 0.25, 0));
	concave_nose_right_bottom_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 2.5)*-1+24, yPos_bottom_dif - 0.18, 0));
	concave_nose_right_bottom_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 1.87)*-1+24, yPos_bottom_dif - 0.12, 0));
	concave_nose_right_bottom_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 1.25)*-1+24, yPos_bottom_dif - 0.06, 0));
	concave_nose_right_bottom_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 0.37)*-1+24, yPos_bottom_dif - 0.00, 0));
	concave_nose_right_bottom_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 0.00)*-1+24, yPos_bottom_dif - 0.00, 0));
	var concave_nose_right_bottom_line = new THREE.Line(concave_nose_right_bottom_line_Geometry, yellowLineMaterial);
	concave_nose_right_bottom_line.position.z = 10;
	skateboard_center.add(concave_nose_right_bottom_line);

	// Concave tail left top line
	var concave_left_top_line_Geometry = new THREE.Geometry();
	concave_left_top_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 6)-24, yPos_top_dif - 0.5, 0));
	concave_left_top_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 5.75)-24, yPos_top_dif - 0.5, 0));
	concave_left_top_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 4.87)-24, yPos_top_dif - 0.43, 0));
	concave_left_top_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 4.25)-24, yPos_top_dif - 0.37, 0));
	concave_left_top_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 3.62)-24, yPos_top_dif - 0.31, 0));
	concave_left_top_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 3)-24, yPos_top_dif - 0.25, 0));
	concave_left_top_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 2.5)-24, yPos_top_dif - 0.18, 0));
	concave_left_top_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 1.87)-24, yPos_top_dif - 0.12, 0));
	concave_left_top_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 1.25)-24, yPos_top_dif - 0.06, 0));
	concave_left_top_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 0.37)-24, yPos_top_dif - 0.00, 0));
	concave_left_top_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 0.00)-24, yPos_top_dif - 0.00, 0));
	var concave_left_top_line = new THREE.Line(concave_left_top_line_Geometry, blueLineMaterial);
	concave_left_top_line.position.z = -10;
	skateboard_center.add(concave_left_top_line);

	// Concave tail left bottom line
	var concave_left_bottom_line_Geometry = new THREE.Geometry();
	concave_left_bottom_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 6)-24, yPos_bottom_dif - 0.5, 0));
	concave_left_bottom_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 5.75)-24, yPos_bottom_dif - 0.5, 0));
	concave_left_bottom_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 4.87)-24, yPos_bottom_dif - 0.43, 0));
	concave_left_bottom_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 4.25)-24, yPos_bottom_dif - 0.37, 0));
	concave_left_bottom_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 3.62)-24, yPos_bottom_dif - 0.31, 0));
	concave_left_bottom_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 3)-24, yPos_bottom_dif - 0.25, 0));
	concave_left_bottom_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 2.5)-24, yPos_bottom_dif - 0.18, 0));
	concave_left_bottom_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 1.87)-24, yPos_bottom_dif - 0.12, 0));
	concave_left_bottom_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 1.25)-24, yPos_bottom_dif - 0.06, 0));
	concave_left_bottom_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 0.37)-24, yPos_bottom_dif - 0.00, 0));
	concave_left_bottom_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 0.00)-24, yPos_bottom_dif - 0.00, 0));
	var concave_left_bottom_line = new THREE.Line(concave_left_bottom_line_Geometry, blueLineMaterial);
	concave_left_bottom_line.position.z = -10;
	skateboard_center.add(concave_left_bottom_line);


	// Concave nose left top line
	var concave_nose_left_top_line_Geometry = new THREE.Geometry();
	concave_nose_left_top_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 6)*-1+24, yPos_top_dif - 0.5, 0));
	concave_nose_left_top_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 5.75)*-1+24, yPos_top_dif - 0.5, 0));
	concave_nose_left_top_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 4.87)*-1+24, yPos_top_dif - 0.43, 0));
	concave_nose_left_top_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 4.25)*-1+24, yPos_top_dif - 0.37, 0));
	concave_nose_left_top_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 3.62)*-1+24, yPos_top_dif - 0.31, 0));
	concave_nose_left_top_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 3)*-1+24, yPos_top_dif - 0.25, 0));
	concave_nose_left_top_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 2.5)*-1+24, yPos_top_dif - 0.18, 0));
	concave_nose_left_top_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 1.87)*-1+24, yPos_top_dif - 0.12, 0));
	concave_nose_left_top_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 1.25)*-1+24, yPos_top_dif - 0.06, 0));
	concave_nose_left_top_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 0.37)*-1+24, yPos_top_dif - 0.00, 0));
	concave_nose_left_top_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 0.00)*-1+24, yPos_top_dif - 0.00, 0));
	var concave_nose_left_top_line = new THREE.Line(concave_nose_left_top_line_Geometry, blueLineMaterial);
	concave_nose_left_top_line.position.z = -10;
	skateboard_center.add(concave_nose_left_top_line);

	// Concave nose left bottom line
	var concave_nose_left_bottom_line_Geometry = new THREE.Geometry();
	concave_nose_left_bottom_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 6)*-1+24, yPos_bottom_dif - 0.5, 0));
	concave_nose_left_bottom_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 5.75)*-1+24, yPos_bottom_dif - 0.5, 0));
	concave_nose_left_bottom_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 4.87)*-1+24, yPos_bottom_dif - 0.43, 0));
	concave_nose_left_bottom_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 4.25)*-1+24, yPos_bottom_dif - 0.37, 0));
	concave_nose_left_bottom_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 3.62)*-1+24, yPos_bottom_dif - 0.31, 0));
	concave_nose_left_bottom_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 3)*-1+24, yPos_bottom_dif - 0.25, 0));
	concave_nose_left_bottom_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 2.5)*-1+24, yPos_bottom_dif - 0.18, 0));
	concave_nose_left_bottom_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 1.87)*-1+24, yPos_bottom_dif - 0.12, 0));
	concave_nose_left_bottom_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 1.25)*-1+24, yPos_bottom_dif - 0.06, 0));
	concave_nose_left_bottom_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 0.37)*-1+24, yPos_bottom_dif - 0.00, 0));
	concave_nose_left_bottom_line_Geometry.vertices.push(new THREE.Vector3((xPos_dif - 0.00)*-1+24, yPos_bottom_dif - 0.00, 0));
	var concave_nose_left_bottom_line = new THREE.Line(concave_nose_left_bottom_line_Geometry, blueLineMaterial);
	concave_nose_left_bottom_line.position.z = -10;
	skateboard_center.add(concave_nose_left_bottom_line);

	// Tail top right line
	var tail_top_right_edge_line_Geometry = new THREE.Geometry();
	tail_top_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif)-24,  yPos_tail_top_dif , zPos_right_dif));
	tail_top_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-0.25)-24,  yPos_tail_top_dif , zPos_right_dif));
	tail_top_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-0.87)-24,  yPos_tail_top_dif+0.0625 , zPos_right_dif));
	tail_top_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-2.87)-24,  yPos_tail_top_dif+0.453125 , zPos_right_dif - 0.12));
	tail_top_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-4)-24,  yPos_tail_top_dif+0.7578125  , zPos_right_dif - 0.25));
	tail_top_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-4.75)-24,  yPos_tail_top_dif+0.984375 , zPos_right_dif - 0.37));
	tail_top_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-5.37)-24,  yPos_tail_top_dif+1.1875 , zPos_right_dif - 0.5));
	tail_top_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-6)-24,  yPos_tail_top_dif+1.390625, zPos_right_dif - 0.62));
	tail_top_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-6.5)-24,  yPos_tail_top_dif+1.5625 , zPos_right_dif - 0.75));
	tail_top_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-8)-24,  yPos_tail_top_dif+2.09375 , zPos_right_dif - 1.25));
	tail_top_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-8.62)-24,  yPos_tail_top_dif+2.328125 , zPos_right_dif - 1.5));
	tail_top_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-9.37)-24,  yPos_tail_top_dif+2.609375  , zPos_right_dif - 1.87));
	tail_top_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-10.37)-24,  yPos_tail_top_dif+3  , zPos_right_dif - 2.5));
	tail_top_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-10.87)-24,  yPos_tail_top_dif+3.1953125 , zPos_right_dif - 2.87));
	tail_top_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-12.12)-24,  yPos_tail_top_dif+3.703125 , zPos_right_dif - 4.12));
	tail_top_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-12.5)-24,  yPos_tail_top_dif+3.859375, zPos_right_dif - 4.62));
	tail_top_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-12.75)-24,  yPos_tail_top_dif+3.9765625 , zPos_right_dif - 5));
	tail_top_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-13.25)-24,  yPos_tail_top_dif+4.171875 , zPos_right_dif - 6));
	tail_top_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-13.5)-24,  yPos_tail_top_dif+4.28125 , zPos_right_dif - 6.62));
	tail_top_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-13.75)-24,  yPos_tail_top_dif+4.390625, zPos_right_dif - 7.5));
	tail_top_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-13.87)-24,  yPos_tail_top_dif+4.4453125, zPos_right_dif - 8.25));
	tail_top_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-14)-24,  yPos_tail_top_dif+4.5 , zPos_right_dif - 9.62));
	tail_top_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-14)-24,  yPos_tail_top_dif+4.5 , zPos_right_dif - 10));
	var tail_top_right_edge_line = new THREE.Line(tail_top_right_edge_line_Geometry, yellowLineMaterial);
	skateboard_center.add(tail_top_right_edge_line);

	// Tail bottom right line
	var tail_bottom_right_edge_line_Geometry = new THREE.Geometry();
	tail_bottom_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif)-24,  yPos_tail_top_dif-0.7 , zPos_right_dif));
	tail_bottom_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-0.25)-24,  yPos_tail_top_dif-0.7 , zPos_right_dif));
	tail_bottom_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-0.87)-24,  yPos_tail_top_dif+0.0625-0.7 , zPos_right_dif));
	tail_bottom_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-2.87)-24,  yPos_tail_top_dif+0.453125-0.7 , zPos_right_dif - 0.12));
	tail_bottom_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-4)-24,  yPos_tail_top_dif+0.7578125-0.7  , zPos_right_dif - 0.25));
	tail_bottom_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-4.75)-24,  yPos_tail_top_dif+0.984375-0.7 , zPos_right_dif - 0.37));
	tail_bottom_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-5.37)-24,  yPos_tail_top_dif+1.1875-0.7 , zPos_right_dif - 0.5));
	tail_bottom_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-6)-24,  yPos_tail_top_dif+1.390625-0.7, zPos_right_dif - 0.62));
	tail_bottom_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-6.5)-24,  yPos_tail_top_dif+1.5625-0.7 , zPos_right_dif - 0.75));
	tail_bottom_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-8)-24,  yPos_tail_top_dif+2.09375-0.7 , zPos_right_dif - 1.25));
	tail_bottom_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-8.62)-24,  yPos_tail_top_dif+2.328125-0.7 , zPos_right_dif - 1.5));
	tail_bottom_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-9.37)-24,  yPos_tail_top_dif+2.609375-0.7  , zPos_right_dif - 1.87));
	tail_bottom_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-10.37)-24,  yPos_tail_top_dif+3-0.7  , zPos_right_dif - 2.5));
	tail_bottom_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-10.87)-24,  yPos_tail_top_dif+3.1953125-0.7 , zPos_right_dif - 2.87));
	tail_bottom_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-12.12)-24,  yPos_tail_top_dif+3.703125-0.7 , zPos_right_dif - 4.12));
	tail_bottom_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-12.5)-24,  yPos_tail_top_dif+3.859375-0.7, zPos_right_dif - 4.62));
	tail_bottom_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-12.75)-24,  yPos_tail_top_dif+3.9765625-0.7 , zPos_right_dif - 5));
	tail_bottom_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-13.25)-24,  yPos_tail_top_dif+4.171875-0.7 , zPos_right_dif - 6));
	tail_bottom_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-13.5)-24,  yPos_tail_top_dif+4.28125-0.7 , zPos_right_dif - 6.62));
	tail_bottom_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-13.75)-24,  yPos_tail_top_dif+4.390625-0.7, zPos_right_dif - 7.5));
	tail_bottom_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-13.87)-24,  yPos_tail_top_dif+4.4453125-0.7, zPos_right_dif - 8.25));
	tail_bottom_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-14)-24,  yPos_tail_top_dif+4.5-0.7 , zPos_right_dif - 9.62));
	tail_bottom_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-14)-24,  yPos_tail_top_dif+4.5-0.7 , zPos_right_dif - 10));
	var tail_bottom_right_edge_line = new THREE.Line(tail_bottom_right_edge_line_Geometry, yellowLineMaterial);
	skateboard_center.add(tail_bottom_right_edge_line);


	// Tail top left line
	var tail_top_left_edge_line_Geometry = new THREE.Geometry();
	tail_top_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif)-24,  yPos_tail_top_dif , zPos_right_dif*-1));
	tail_top_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-0.25)-24,  yPos_tail_top_dif , zPos_right_dif*-1));
	tail_top_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-0.87)-24,  yPos_tail_top_dif+0.0625 , zPos_right_dif*-1));
	tail_top_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-2.87)-24,  yPos_tail_top_dif+0.453125 , (zPos_right_dif - 0.12)*-1));
	tail_top_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-4)-24,  yPos_tail_top_dif+0.7578125  , (zPos_right_dif - 0.25)*-1));
	tail_top_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-4.75)-24,  yPos_tail_top_dif+0.984375 , (zPos_right_dif - 0.37)*-1));
	tail_top_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-5.37)-24,  yPos_tail_top_dif+1.1875 , (zPos_right_dif - 0.5)*-1));
	tail_top_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-6)-24,  yPos_tail_top_dif+1.390625, (zPos_right_dif - 0.62)*-1));
	tail_top_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-6.5)-24,  yPos_tail_top_dif+1.5625 , (zPos_right_dif - 0.75)*-1));
	tail_top_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-8)-24,  yPos_tail_top_dif+2.09375 , (zPos_right_dif - 1.25)*-1 ));
	tail_top_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-8.62)-24,  yPos_tail_top_dif+2.328125 , (zPos_right_dif - 1.5)*-1));
	tail_top_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-9.37)-24,  yPos_tail_top_dif+2.609375  , (zPos_right_dif - 1.87)*-1 ));
	tail_top_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-10.37)-24,  yPos_tail_top_dif+3  , (zPos_right_dif - 2.5)*-1 ));
	tail_top_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-10.87)-24,  yPos_tail_top_dif+3.1953125 , (zPos_right_dif - 2.87)*-1 ));
	tail_top_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-12.12)-24,  yPos_tail_top_dif+3.703125 , (zPos_right_dif - 4.12)*-1 ));
	tail_top_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-12.5)-24,  yPos_tail_top_dif+3.859375, (zPos_right_dif - 4.62)*-1 ));
	tail_top_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-12.75)-24,  yPos_tail_top_dif+3.9765625 , (zPos_right_dif - 5)*-1 ));
	tail_top_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-13.25)-24,  yPos_tail_top_dif+4.171875 , (zPos_right_dif - 6)*-1 ));
	tail_top_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-13.5)-24,  yPos_tail_top_dif+4.28125 , (zPos_right_dif - 6.62)*-1 ));
	tail_top_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-13.75)-24,  yPos_tail_top_dif+4.390625, (zPos_right_dif - 7.5)*-1 ));
	tail_top_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-13.87)-24,  yPos_tail_top_dif+4.4453125, (zPos_right_dif - 8.25)*-1 ));
	tail_top_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-14)-24,  yPos_tail_top_dif+4.5 , (zPos_right_dif - 9.62)*-1));
	tail_top_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-14)-24,  yPos_tail_top_dif+4.5 , (zPos_right_dif - 10)*-1 ));
	var tail_top_left_edge_line = new THREE.Line(tail_top_left_edge_line_Geometry, blueLineMaterial);
	skateboard_center.add(tail_top_left_edge_line);

	// Tail bottom left line
	var tail_bottom_left_edge_line_Geometry = new THREE.Geometry();
	tail_bottom_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif)-24,  yPos_tail_top_dif-0.7 , zPos_right_dif*-1));
	tail_bottom_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-0.25)-24,  yPos_tail_top_dif-0.7 , zPos_right_dif*-1));
	tail_bottom_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-0.87)-24,  yPos_tail_top_dif+0.0625-0.7 , zPos_right_dif*-1));
	tail_bottom_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-2.87)-24,  yPos_tail_top_dif+0.453125-0.7 , (zPos_right_dif - 0.12)*-1 ));
	tail_bottom_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-4)-24,  yPos_tail_top_dif+0.7578125-0.7  , (zPos_right_dif - 0.25)*-1 ));
	tail_bottom_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-4.75)-24,  yPos_tail_top_dif+0.984375-0.7 , (zPos_right_dif - 0.37)*-1));
	tail_bottom_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-5.37)-24,  yPos_tail_top_dif+1.1875-0.7 , (zPos_right_dif - 0.5)*-1));
	tail_bottom_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-6)-24,  yPos_tail_top_dif+1.390625-0.7, (zPos_right_dif - 0.62)*-1));
	tail_bottom_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-6.5)-24,  yPos_tail_top_dif+1.5625-0.7 , (zPos_right_dif - 0.75)*-1));
	tail_bottom_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-8)-24,  yPos_tail_top_dif+2.09375-0.7 , (zPos_right_dif - 1.25)*-1));
	tail_bottom_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-8.62)-24,  yPos_tail_top_dif+2.328125-0.7 , (zPos_right_dif - 1.5)*-1));
	tail_bottom_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-9.37)-24,  yPos_tail_top_dif+2.609375-0.7  , (zPos_right_dif - 1.87)*-1));
	tail_bottom_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-10.37)-24,  yPos_tail_top_dif+3-0.7  , (zPos_right_dif - 2.5)*-1));
	tail_bottom_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-10.87)-24,  yPos_tail_top_dif+3.1953125-0.7 , (zPos_right_dif - 2.87)*-1));
	tail_bottom_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-12.12)-24,  yPos_tail_top_dif+3.703125-0.7 , (zPos_right_dif - 4.12)*-1));
	tail_bottom_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-12.5)-24,  yPos_tail_top_dif+3.859375-0.7, (zPos_right_dif - 4.62)*-1));
	tail_bottom_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-12.75)-24,  yPos_tail_top_dif+3.9765625-0.7 , (zPos_right_dif - 5)*-1));
	tail_bottom_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-13.25)-24,  yPos_tail_top_dif+4.171875-0.7 , (zPos_right_dif - 6)*-1));
	tail_bottom_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-13.5)-24,  yPos_tail_top_dif+4.28125-0.7 , (zPos_right_dif - 6.62)*-1));
	tail_bottom_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-13.75)-24,  yPos_tail_top_dif+4.390625-0.7, (zPos_right_dif - 7.5)*-1));
	tail_bottom_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-13.87)-24,  yPos_tail_top_dif+4.4453125-0.7, (zPos_right_dif - 8.25)*-1));
	tail_bottom_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-14)-24,  yPos_tail_top_dif+4.5-0.7 , (zPos_right_dif - 9.62)*-1));
	tail_bottom_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-14)-24,  yPos_tail_top_dif+4.5-0.7 , (zPos_right_dif - 10)*-1));
	var tail_bottom_left_edge_line = new THREE.Line(tail_bottom_left_edge_line_Geometry, blueLineMaterial);
	skateboard_center.add(tail_bottom_left_edge_line);


	// nose top left line
	var nose_top_left_edge_line_Geometry = new THREE.Geometry();
	nose_top_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif)*-1+24,  yPos_tail_top_dif , zPos_right_dif*-1));
	nose_top_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-0.25)*-1+24,  yPos_tail_top_dif , zPos_right_dif*-1));
	nose_top_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-0.87)*-1+24,  yPos_tail_top_dif+0.0625 , zPos_right_dif*-1));
	nose_top_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-2.87)*-1+24,  yPos_tail_top_dif+0.453125 , (zPos_right_dif - 0.12)*-1));
	nose_top_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-4)*-1+24,  yPos_tail_top_dif+0.7578125  , (zPos_right_dif - 0.25)*-1));
	nose_top_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-4.75)*-1+24,  yPos_tail_top_dif+0.984375 , (zPos_right_dif - 0.37)*-1));
	nose_top_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-5.37)*-1+24,  yPos_tail_top_dif+1.1875 , (zPos_right_dif - 0.5)*-1));
	nose_top_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-6)*-1+24,  yPos_tail_top_dif+1.390625, (zPos_right_dif - 0.62)*-1));
	nose_top_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-6.5)*-1+24,  yPos_tail_top_dif+1.5625 , (zPos_right_dif - 0.75)*-1));
	nose_top_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-8)*-1+24,  yPos_tail_top_dif+2.09375 , (zPos_right_dif - 1.25)*-1 ));
	nose_top_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-8.62)*-1+24,  yPos_tail_top_dif+2.328125 , (zPos_right_dif - 1.5)*-1));
	nose_top_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-9.37)*-1+24,  yPos_tail_top_dif+2.609375  , (zPos_right_dif - 1.87)*-1 ));
	nose_top_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-10.37)*-1+24,  yPos_tail_top_dif+3  , (zPos_right_dif - 2.5)*-1 ));
	nose_top_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-10.87)*-1+24,  yPos_tail_top_dif+3.1953125 , (zPos_right_dif - 2.87)*-1 ));
	nose_top_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-12.12)*-1+24,  yPos_tail_top_dif+3.703125 , (zPos_right_dif - 4.12)*-1 ));
	nose_top_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-12.5)*-1+24,  yPos_tail_top_dif+3.859375, (zPos_right_dif - 4.62)*-1 ));
	nose_top_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-12.75)*-1+24,  yPos_tail_top_dif+3.9765625 , (zPos_right_dif - 5)*-1 ));
	nose_top_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-13.25)*-1+24,  yPos_tail_top_dif+4.171875 , (zPos_right_dif - 6)*-1 ));
	nose_top_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-13.5)*-1+24,  yPos_tail_top_dif+4.28125 , (zPos_right_dif - 6.62)*-1 ));
	nose_top_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-13.75)*-1+24,  yPos_tail_top_dif+4.390625, (zPos_right_dif - 7.5)*-1 ));
	nose_top_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-13.87)*-1+24,  yPos_tail_top_dif+4.4453125, (zPos_right_dif - 8.25)*-1 ));
	nose_top_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-14)*-1+24,  yPos_tail_top_dif+4.5 , (zPos_right_dif - 9.62)*-1));
	nose_top_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-14)*-1+24,  yPos_tail_top_dif+4.5 , (zPos_right_dif - 10)*-1 ));
	var nose_top_left_edge_line = new THREE.Line(nose_top_left_edge_line_Geometry, blueLineMaterial);
	skateboard_center.add(nose_top_left_edge_line);


	// nose bottom left line
	var nose_bottom_left_edge_line_Geometry = new THREE.Geometry();
	nose_bottom_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif)*-1+24,  yPos_tail_top_dif-0.7 , zPos_right_dif*-1));
	nose_bottom_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-0.25)*-1+24,  yPos_tail_top_dif-0.7 , zPos_right_dif*-1));
	nose_bottom_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-0.87)*-1+24,  yPos_tail_top_dif+0.0625-0.7 , zPos_right_dif*-1));
	nose_bottom_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-2.87)*-1+24,  yPos_tail_top_dif+0.453125-0.7 , (zPos_right_dif - 0.12)*-1 ));
	nose_bottom_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-4)*-1+24,  yPos_tail_top_dif+0.7578125-0.7  , (zPos_right_dif - 0.25)*-1 ));
	nose_bottom_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-4.75)*-1+24,  yPos_tail_top_dif+0.984375-0.7 , (zPos_right_dif - 0.37)*-1));
	nose_bottom_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-5.37)*-1+24,  yPos_tail_top_dif+1.1875-0.7 , (zPos_right_dif - 0.5)*-1));
	nose_bottom_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-6)*-1+24,  yPos_tail_top_dif+1.390625-0.7, (zPos_right_dif - 0.62)*-1));
	nose_bottom_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-6.5)*-1+24,  yPos_tail_top_dif+1.5625-0.7 , (zPos_right_dif - 0.75)*-1));
	nose_bottom_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-8)*-1+24,  yPos_tail_top_dif+2.09375-0.7 , (zPos_right_dif - 1.25)*-1));
	nose_bottom_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-8.62)*-1+24,  yPos_tail_top_dif+2.328125-0.7, (zPos_right_dif - 1.5)*-1));
	nose_bottom_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-9.37)*-1+24,  yPos_tail_top_dif+2.609375-0.7  , (zPos_right_dif - 1.87)*-1));
	nose_bottom_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-10.37)*-1+24,  yPos_tail_top_dif+3-0.7  , (zPos_right_dif - 2.5)*-1));
	nose_bottom_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-10.87)*-1+24,  yPos_tail_top_dif+3.1953125-0.7 , (zPos_right_dif - 2.87)*-1));
	nose_bottom_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-12.12)*-1+24,  yPos_tail_top_dif+3.703125-0.7 , (zPos_right_dif - 4.12)*-1));
	nose_bottom_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-12.5)*-1+24,  yPos_tail_top_dif+3.859375-0.7, (zPos_right_dif - 4.62)*-1));
	nose_bottom_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-12.75)*-1+24,  yPos_tail_top_dif+3.9765625-0.7 , (zPos_right_dif - 5)*-1));
	nose_bottom_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-13.25)*-1+24,  yPos_tail_top_dif+4.171875-0.7 , (zPos_right_dif - 6)*-1));
	nose_bottom_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-13.5)*-1+24,  yPos_tail_top_dif+4.28125-0.7 , (zPos_right_dif - 6.62)*-1));
	nose_bottom_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-13.75)*-1+24,  yPos_tail_top_dif+4.390625-0.7, (zPos_right_dif - 7.5)*-1));
	nose_bottom_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-13.87)*-1+24,  yPos_tail_top_dif+4.4453125-0.7, (zPos_right_dif - 8.25)*-1));
	nose_bottom_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-14)*-1+24,  yPos_tail_top_dif+4.5-0.7 , (zPos_right_dif - 9.62)*-1));
	nose_bottom_left_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-14)*-1+24,  yPos_tail_top_dif+4.5-0.7 , (zPos_right_dif - 10)*-1));
	var nose_bottom_left_edge_line = new THREE.Line(nose_bottom_left_edge_line_Geometry, blueLineMaterial);
	skateboard_center.add(nose_bottom_left_edge_line);


	var nose_top_right_edge_line_Geometry = new THREE.Geometry();
	nose_top_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif)*-1+24,  yPos_tail_top_dif , zPos_right_dif));
	nose_top_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-0.25)*-1+24,  yPos_tail_top_dif , zPos_right_dif));
	nose_top_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-0.87)*-1+24,  yPos_tail_top_dif+0.0625 , zPos_right_dif));
	nose_top_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-2.87)*-1+24,  yPos_tail_top_dif+0.453125 , zPos_right_dif - 0.12));
	nose_top_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-4)*-1+24,  yPos_tail_top_dif+0.7578125  , zPos_right_dif - 0.25));
	nose_top_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-4.75)*-1+24,  yPos_tail_top_dif+0.984375 , zPos_right_dif - 0.37));
	nose_top_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-5.37)*-1+24,  yPos_tail_top_dif+1.1875 , zPos_right_dif - 0.5));
	nose_top_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-6)*-1+24,  yPos_tail_top_dif+1.390625, zPos_right_dif - 0.62));
	nose_top_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-6.5)*-1+24,  yPos_tail_top_dif+1.5625 , zPos_right_dif - 0.75));
	nose_top_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-8)*-1+24,  yPos_tail_top_dif+2.09375 , zPos_right_dif - 1.25));
	nose_top_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-8.62)*-1+24,  yPos_tail_top_dif+2.328125 , zPos_right_dif - 1.5));
	nose_top_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-9.37)*-1+24,  yPos_tail_top_dif+2.609375  , zPos_right_dif - 1.87));
	nose_top_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-10.37)*-1+24,  yPos_tail_top_dif+3  , zPos_right_dif - 2.5));
	nose_top_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-10.87)*-1+24,  yPos_tail_top_dif+3.1953125 , zPos_right_dif - 2.87));
	nose_top_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-12.12)*-1+24,  yPos_tail_top_dif+3.703125 , zPos_right_dif - 4.12));
	nose_top_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-12.5)*-1+24,  yPos_tail_top_dif+3.859375, zPos_right_dif - 4.62));
	nose_top_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-12.75)*-1+24,  yPos_tail_top_dif+3.9765625 , zPos_right_dif - 5));
	nose_top_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-13.25)*-1+24,  yPos_tail_top_dif+4.171875 , zPos_right_dif - 6));
	nose_top_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-13.5)*-1+24,  yPos_tail_top_dif+4.28125 , zPos_right_dif - 6.62));
	nose_top_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-13.75)*-1+24,  yPos_tail_top_dif+4.390625, zPos_right_dif - 7.5));
	nose_top_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-13.87)*-1+24,  yPos_tail_top_dif+4.4453125, zPos_right_dif - 8.25));
	nose_top_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-14)*-1+24,  yPos_tail_top_dif+4.5 , zPos_right_dif - 9.62));
	nose_top_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-14)*-1+24,  yPos_tail_top_dif+4.5 , zPos_right_dif - 10));
	var nose_top_right_edge_line = new THREE.Line(nose_top_right_edge_line_Geometry, yellowLineMaterial);
	skateboard_center.add(nose_top_right_edge_line);


	// nose bottom right line
	var nose_bottom_right_edge_line_Geometry = new THREE.Geometry();
	nose_bottom_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif)*-1+24,  yPos_tail_top_dif-0.7 , zPos_right_dif));
	nose_bottom_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-0.25)*-1+24,  yPos_tail_top_dif-0.7 , zPos_right_dif));
	nose_bottom_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-0.87)*-1+24,  yPos_tail_top_dif+0.0625-0.7 , zPos_right_dif));
	nose_bottom_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-2.87)*-1+24,  yPos_tail_top_dif+0.453125-0.7 , zPos_right_dif - 0.12));
	nose_bottom_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-4)*-1+24,  yPos_tail_top_dif+0.7578125-0.7  , zPos_right_dif - 0.25));
	nose_bottom_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-4.75)*-1+24,  yPos_tail_top_dif+0.984375-0.7 , zPos_right_dif - 0.37));
	nose_bottom_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-5.37)*-1+24,  yPos_tail_top_dif+1.1875-0.7 , zPos_right_dif - 0.5));
	nose_bottom_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-6)*-1+24,  yPos_tail_top_dif+1.390625-0.7, zPos_right_dif - 0.62));
	nose_bottom_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-6.5)*-1+24,  yPos_tail_top_dif+1.5625-0.7 , zPos_right_dif - 0.75));
	nose_bottom_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-8)*-1+24,  yPos_tail_top_dif+2.09375-0.7 , zPos_right_dif - 1.25));
	nose_bottom_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-8.62)*-1+24,  yPos_tail_top_dif+2.328125-0.7 , zPos_right_dif - 1.5));
	nose_bottom_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-9.37)*-1+24,  yPos_tail_top_dif+2.609375-0.7  , zPos_right_dif - 1.87));
	nose_bottom_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-10.37)*-1+24,  yPos_tail_top_dif+3-0.7  , zPos_right_dif - 2.5));
	nose_bottom_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-10.87)*-1+24,  yPos_tail_top_dif+3.1953125-0.7 , zPos_right_dif - 2.87));
	nose_bottom_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-12.12)*-1+24,  yPos_tail_top_dif+3.703125-0.7 , zPos_right_dif - 4.12));
	nose_bottom_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-12.5)*-1+24,  yPos_tail_top_dif+3.859375-0.7, zPos_right_dif - 4.62));
	nose_bottom_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-12.75)*-1+24,  yPos_tail_top_dif+3.9765625-0.7 , zPos_right_dif - 5));
	nose_bottom_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-13.25)*-1+24,  yPos_tail_top_dif+4.171875-0.7 , zPos_right_dif - 6));
	nose_bottom_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-13.5)*-1+24,  yPos_tail_top_dif+4.28125-0.7 , zPos_right_dif - 6.62));
	nose_bottom_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-13.75)*-1+24,  yPos_tail_top_dif+4.390625-0.7, zPos_right_dif - 7.5));
	nose_bottom_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-13.87)*-1+24,  yPos_tail_top_dif+4.4453125-0.7, zPos_right_dif - 8.25));
	nose_bottom_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-14)*-1+24,  yPos_tail_top_dif+4.5-0.7 , zPos_right_dif - 9.62));
	nose_bottom_right_edge_line_Geometry.vertices.push(new THREE.Vector3((x_pos_tail_dif-14)*-1+24,  yPos_tail_top_dif+4.5-0.7 , zPos_right_dif - 10));
	var nose_bottom_right_edge_line = new THREE.Line(nose_bottom_right_edge_line_Geometry, yellowLineMaterial);
	skateboard_center.add(nose_bottom_right_edge_line);


}

var skateboard_center;
var skateboard_center_center_pivot_line;
var skateboard_center_tail_pivot_line;
var skateboard_center_nose_pivot_line;

function drawSkateboard_center(){

	skateboard_center = new THREE.Object3D();
	skateboard_center.name = 'skateboardObject';
	// Draw the lines in the skateboard
	drawLines_center();
	// Draw the parts of the skateboard with triangles
	drawVertices_center();

	scene.add(skateboard_center);
}

function drawVertices_center(){

	if (onGround_bool == true || reception == true){
		blueMaterial = new THREE.MeshBasicMaterial({ color: darkGrey });
		yellowMaterial = new THREE.MeshBasicMaterial({ color: darkGrey });
		blueMaterialBack = new THREE.MeshBasicMaterial({ color: darkGrey });
		yellowMaterialBack = new THREE.MeshBasicMaterial({ color: darkGrey });
	} else {
		blueMaterial = new THREE.MeshBasicMaterial({ color:blue });
		yellowMaterial = new THREE.MeshBasicMaterial({ color:yellow });
		blueMaterialBack = new THREE.MeshBasicMaterial({ color:blue });
		yellowMaterialBack = new THREE.MeshBasicMaterial({ color:yellow });
	}

	var skateboard_center_tail_pivot_geometry = new THREE.Geometry();
	skateboard_center_tail_pivot_line = new THREE.Line(skateboard_center_tail_pivot_geometry);
	skateboard_center_tail_pivot_line.position.x = -24;
	skateboard_center.add(skateboard_center_tail_pivot_line);

	var skateboard_center_center_pivot_geometry = new THREE.Geometry();
	skateboard_center_center_pivot_line = new THREE.Line(skateboard_center_center_pivot_geometry);
	skateboard_center_center_pivot_line.position.x = 0;
	skateboard_center.add(skateboard_center_center_pivot_line);

	var skateboard_center_nose_pivot_geometry = new THREE.Geometry();
	skateboard_center_nose_pivot_line = new THREE.Line(skateboard_center_nose_pivot_geometry);
	skateboard_center_nose_pivot_line.position.x =24;
	skateboard_center.add(skateboard_center_nose_pivot_line);



	// Top center
	var topGeometry = new THREE.PlaneBufferGeometry( 40,20 );
	var top = new THREE.Mesh(topGeometry, blackMaterial);
	top.position.x = 0;
	top.rotation.x = -Math.PI / 2;
	top.position.y = 0.5;
	skateboard_center.add(top)

	// Bottom center
	var bottomGeometry = new THREE.PlaneBufferGeometry( 40,20 );
	var bottom = new THREE.Mesh(bottomGeometry, blackMaterial);
	bottom.position.y = -0.2;
	bottom.rotation.x = -Math.PI / 2;
	bottom.position.x = 0;
	bottom.material.side = THREE.DoubleSide;
	skateboard_center.add(bottom);


	// Right edge
	var rightEdgeGeometry = new THREE.PlaneBufferGeometry(40,0.7);
	var rightEdge = new THREE.Mesh(rightEdgeGeometry, yellowMaterial);
	rightEdge.position.z = 10;
	rightEdge.position.y = 0.15;
	rightEdge.position.x = 0;
	skateboard_center.add(rightEdge);

	// Left edge
	var leftEdgeGeometry = new THREE.PlaneBufferGeometry(40,0.7);
	var leftEdge = new THREE.Mesh(leftEdgeGeometry, blueMaterial);
	leftEdge.position.z = -10;
	leftEdge.rotation.x = -Math.PI;
	leftEdge.position.y = 0.15;
	leftEdge.position.x = 0;
	skateboard_center.add(leftEdge);

	// Tail right edge concave
	var tail_right_edge_concave_geometry = new THREE.BufferGeometry();
	var vertices = new Float32Array( tail_right_edge_concave_vertices.length * 3 ); 
	for ( var i = 0; i < tail_right_edge_concave_vertices.length; i++ )
	{
		vertices[ i*3 + 0 ] = tail_right_edge_concave_vertices[i][0];
		vertices[ i*3 + 1 ] = tail_right_edge_concave_vertices[i][1];
		vertices[ i*3 + 2 ] = tail_right_edge_concave_vertices[i][2];
		vertices[ i*3 + 0 ] = vertices[ i*3 + 0 ] - 24;
	}
	tail_right_edge_concave_geometry.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
	var tail_right_edge_concave_mesh = new THREE.Mesh( tail_right_edge_concave_geometry, yellowMaterial);
	tail_right_edge_concave_mesh.material.side = THREE.FrontSide;
	skateboard_center.add(tail_right_edge_concave_mesh);


	// Tail left edge concave
	var tail_left_edge_concave_geometry = new THREE.BufferGeometry();
	var vertices = new Float32Array( tail_right_edge_concave_vertices.length * 3 ); 
	for ( var i = 0; i < tail_right_edge_concave_vertices.length; i++ )
	{
		vertices[ i*3 + 0 ] = tail_right_edge_concave_vertices[i][0];
		vertices[ i*3 + 1 ] = tail_right_edge_concave_vertices[i][1];
		vertices[ i*3 + 2 ] = tail_right_edge_concave_vertices[i][2];
		vertices[ i*3 + 2 ] = vertices[ i*3 + 2 ]*-1;
		vertices[ i*3 + 0 ] = vertices[ i*3 + 0 ] - 24;
	}
	tail_left_edge_concave_geometry.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
	var tail_left_edge_concave_mesh = new THREE.Mesh( tail_left_edge_concave_geometry, blueMaterialBack );
	tail_left_edge_concave_mesh.material.side = THREE.BackSide;
	skateboard_center.add(tail_left_edge_concave_mesh);


	// Nose right edge concave
	var nose_right_edge_concave_geometry = new THREE.BufferGeometry();
	var vertices = new Float32Array( tail_right_edge_concave_vertices.length * 3 ); 
	for ( var i = 0; i < tail_right_edge_concave_vertices.length; i++ )
	{
		vertices[ i*3 + 0 ] = tail_right_edge_concave_vertices[i][0];
		vertices[ i*3 + 1 ] = tail_right_edge_concave_vertices[i][1];
		vertices[ i*3 + 2 ] = tail_right_edge_concave_vertices[i][2];
		vertices[ i*3 + 0 ] = vertices[ i*3 + 0 ]*-1+24;
	}
	nose_right_edge_concave_geometry.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
	var nose_right_edge_concave_mesh = new THREE.Mesh( nose_right_edge_concave_geometry, yellowMaterialBack );
	nose_right_edge_concave_mesh.material.side = THREE.BackSide;
	skateboard_center.add(nose_right_edge_concave_mesh);


	// Nose left edge concave
	var nose_left_edge_concave_geometry = new THREE.BufferGeometry();
	var vertices = new Float32Array( tail_right_edge_concave_vertices.length * 3 ); 
	for ( var i = 0; i < tail_right_edge_concave_vertices.length; i++ )
	{
		vertices[ i*3 + 0 ] = tail_right_edge_concave_vertices[i][0];
		vertices[ i*3 + 1 ] = tail_right_edge_concave_vertices[i][1];
		vertices[ i*3 + 2 ] = tail_right_edge_concave_vertices[i][2];
		vertices[ i*3 + 0 ] = vertices[ i*3 + 0 ]*-1+24;
		vertices[ i*3 + 2 ] = vertices[ i*3 + 2 ]*-1;
	}
	nose_left_edge_concave_geometry.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
	var nose_left_edge_concave_mesh = new THREE.Mesh( nose_left_edge_concave_geometry, blueMaterial );
	nose_left_edge_concave_mesh.material.side = THREE.FrontSide;
	skateboard_center.add(nose_left_edge_concave_mesh);


	// // ------------------------------------------------------------------------------------------------

	// Concave tail top
	var tail_top_concave_geometry = new THREE.BufferGeometry();
	var vertices = new Float32Array( tail_top_concave_vertices.length * 3 ); 
	for ( var i = 0; i < tail_top_concave_vertices.length; i++ )
	{
		vertices[ i*3 + 0 ] = tail_top_concave_vertices[i][0];
		vertices[ i*3 + 1 ] = tail_top_concave_vertices[i][1];
		vertices[ i*3 + 2 ] = tail_top_concave_vertices[i][2];
		vertices[ i*3 + 0 ] = vertices[ i*3 + 0 ] - 24;

	}
	tail_top_concave_geometry.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
	var tail_top_concave_mesh = new THREE.Mesh( tail_top_concave_geometry, blackMaterial );
	skateboard_center.add(tail_top_concave_mesh);

	// Concave tail bottom
	var tail_bottom_concave_geometry = new THREE.BufferGeometry();
	var vertices = new Float32Array( tail_top_concave_vertices.length * 3 ); 
	for ( var i = 0; i < tail_top_concave_vertices.length; i++ )
	{
		vertices[ i*3 + 0 ] = tail_top_concave_vertices[i][0];
		vertices[ i*3 + 1 ] = tail_top_concave_vertices[i][1];
		vertices[ i*3 + 2 ] = tail_top_concave_vertices[i][2];
		vertices[ i*3 + 1 ] = vertices[ i*3 + 1 ] - 0.7;
		vertices[ i*3 + 0 ] = vertices[ i*3 + 0 ] - 24;

	}
	tail_bottom_concave_geometry.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
	var tail_bottom_concave_mesh = new THREE.Mesh( tail_bottom_concave_geometry, blackMaterial );
	skateboard_center.add(tail_bottom_concave_mesh);


	// Concave nose top
	var nose_top_concave_geometry = new THREE.BufferGeometry();
	var vertices = new Float32Array( tail_top_concave_vertices.length * 3 ); 
	for ( var i = 0; i < tail_top_concave_vertices.length; i++ )
	{
		vertices[ i*3 + 0 ] = tail_top_concave_vertices[i][0];
		vertices[ i*3 + 1 ] = tail_top_concave_vertices[i][1];
		vertices[ i*3 + 2 ] = tail_top_concave_vertices[i][2];
		vertices[ i*3 + 0 ] = vertices[ i*3 + 0 ]*-1+24;
	}
	nose_top_concave_geometry.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
	var nose_top_concave_mesh = new THREE.Mesh( nose_top_concave_geometry, blackMaterial );
	skateboard_center.add(nose_top_concave_mesh);

	// Concave nose bottom
	var nose_bottom_concave_geometry = new THREE.BufferGeometry();
	var vertices = new Float32Array( tail_top_concave_vertices.length * 3 ); 
	for ( var i = 0; i < tail_top_concave_vertices.length; i++ )
	{
		vertices[ i*3 + 0 ] = tail_top_concave_vertices[i][0];
		vertices[ i*3 + 1 ] = tail_top_concave_vertices[i][1];
		vertices[ i*3 + 2 ] = tail_top_concave_vertices[i][2];
		vertices[ i*3 + 1 ] = vertices[ i*3 + 1 ] - 0.7;
		vertices[ i*3 + 0 ] = vertices[ i*3 + 0 ]*-1+24;

	}
	nose_bottom_concave_geometry.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
	var nose_bottom_concave_mesh = new THREE.Mesh( nose_bottom_concave_geometry, blackMaterial );
	skateboard_center.add(nose_bottom_concave_mesh);

	// ---------------------------------------------

	// tail top right edge
	var tail_top_right_edge_geometry = new THREE.BufferGeometry();
	var vertices = new Float32Array( tail_top_right_edge_vertices.length * 3);
	for (var i = 0; i < tail_top_right_edge_vertices.length; i++)
	{
		vertices[ i*3 + 0 ] = tail_top_right_edge_vertices[i][0];
		vertices[ i*3 + 1 ] = tail_top_right_edge_vertices[i][1];
		vertices[ i*3 + 2 ] = tail_top_right_edge_vertices[i][2];
		vertices[ i*3 + 0 ] = vertices[ i*3 + 0 ] - 24;
	}
	tail_top_right_edge_geometry.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
	var tail_top_right_edge_mesh = new THREE.Mesh( tail_top_right_edge_geometry, yellowMaterial );
	skateboard_center.add(tail_top_right_edge_mesh);

	// tail top left edge
	var tail_top_left_edge_geometry = new THREE.BufferGeometry();
	var vertices = new Float32Array( tail_top_right_edge_vertices.length * 3);
	for (var i = 0; i < tail_top_right_edge_vertices.length; i++)
	{
		vertices[ i*3 + 0 ] = tail_top_right_edge_vertices[i][0];
		vertices[ i*3 + 1 ] = tail_top_right_edge_vertices[i][1];
		vertices[ i*3 + 2 ] = tail_top_right_edge_vertices[i][2];
		vertices[ i*3 + 2 ] = vertices[ i*3 + 2 ]*-1;
		vertices[ i*3 + 0 ] = vertices[ i*3 + 0 ] - 24;
	}
	tail_top_left_edge_geometry.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
	var tail_top_left_edge_mesh = new THREE.Mesh( tail_top_left_edge_geometry, blueMaterialBack );
	skateboard_center.add(tail_top_left_edge_mesh);

	// Tail top
	var tail_top_geometry = new THREE.BufferGeometry();
	var vertices = new Float32Array( tail_top_vertices.length * 3);
	for (var i = 0; i < tail_top_vertices.length; i++)
	{
		vertices[ i*3 + 0 ] = tail_top_vertices[i][0];
		vertices[ i*3 + 1 ] = tail_top_vertices[i][1];
		vertices[ i*3 + 2 ] = tail_top_vertices[i][2];
		vertices[ i*3 + 0 ] = vertices[ i*3 + 0 ] - 24;
	}
	tail_top_geometry.addAttribute( 'position' , new THREE.BufferAttribute( vertices, 3 ));
	var tail_top_mesh = new THREE.Mesh( tail_top_geometry, blackMaterial);
	skateboard_center.add(tail_top_mesh);


	// Tail bottom
	var tail_bottom_geometry = new THREE.BufferGeometry();
	var vertices = new Float32Array( tail_top_vertices.length * 3);
	for (var i = 0; i < tail_top_vertices.length; i++)
	{
		vertices[ i*3 + 0 ] = tail_top_vertices[i][0];
		vertices[ i*3 + 1 ] = tail_top_vertices[i][1];
		vertices[ i*3 + 2 ] = tail_top_vertices[i][2];
		vertices[ i*3 + 1 ] = vertices[ i*3 + 1 ]- 0.7;
		vertices[ i*3 + 0 ] = vertices[ i*3 + 0 ] - 24;
	}
	tail_bottom_geometry.addAttribute( 'position' , new THREE.BufferAttribute( vertices, 3 ));
	var tail_bottom_mesh = new THREE.Mesh( tail_bottom_geometry, blackMaterialBack );
	tail_bottom_mesh.material.side = THREE.BackSide;
	skateboard_center.add(tail_bottom_mesh);


	// nose right edge
	var nose_right_edge_geometry = new THREE.BufferGeometry();
	var vertices = new Float32Array( tail_top_right_edge_vertices.length * 3);
	for (var i = 0; i < tail_top_right_edge_vertices.length; i++)
	{
		vertices[ i*3 + 0 ] = tail_top_right_edge_vertices[i][0];
		vertices[ i*3 + 1 ] = tail_top_right_edge_vertices[i][1];
		vertices[ i*3 + 2 ] = tail_top_right_edge_vertices[i][2];
		vertices[ i*3 + 0 ] = vertices[ i*3 + 0 ]*-1+24;
	}
	nose_right_edge_geometry.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
	var nose_right_edge_mesh = new THREE.Mesh( nose_right_edge_geometry, yellowMaterialBack );
	skateboard_center.add(nose_right_edge_mesh);

	// nose left edge
	var nose_left_edge_geometry = new THREE.BufferGeometry();
	var vertices = new Float32Array( tail_top_right_edge_vertices.length * 3);
	for (var i = 0; i < tail_top_right_edge_vertices.length; i++)
	{
		vertices[ i*3 + 0 ] = tail_top_right_edge_vertices[i][0];
		vertices[ i*3 + 1 ] = tail_top_right_edge_vertices[i][1];
		vertices[ i*3 + 2 ] = tail_top_right_edge_vertices[i][2];
		vertices[ i*3 + 2 ] = vertices[ i*3 + 2 ]*-1;
		vertices[ i*3 + 0 ] = vertices[ i*3 + 0 ]*-1+24;
	}
	nose_left_edge_geometry.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
	var nose_left_edge_mesh = new THREE.Mesh( nose_left_edge_geometry, blueMaterial );
	skateboard_center.add(nose_left_edge_mesh);

	// nose top
	var nose_top_geometry = new THREE.BufferGeometry();
	var vertices = new Float32Array( tail_top_vertices.length * 3);
	for (var i = 0; i < tail_top_vertices.length; i++)
	{
		vertices[ i*3 + 0 ] = tail_top_vertices[i][0];
		vertices[ i*3 + 1 ] = tail_top_vertices[i][1];
		vertices[ i*3 + 2 ] = tail_top_vertices[i][2];
		vertices[ i*3 + 0 ] = vertices[ i*3 + 0 ]*-1+24;
	}
	nose_top_geometry.addAttribute( 'position' , new THREE.BufferAttribute( vertices, 3 ));
	var nose_top_mesh = new THREE.Mesh( nose_top_geometry, blackMaterial);
	skateboard_center.add(nose_top_mesh);

	// nose bottom
	var nose_bottom_geometry = new THREE.BufferGeometry();
	var vertices = new Float32Array( tail_top_vertices.length * 3);
	for (var i = 0; i < tail_top_vertices.length; i++)
	{
		vertices[ i*3 + 0 ] = tail_top_vertices[i][0];
		vertices[ i*3 + 1 ] = tail_top_vertices[i][1];
		vertices[ i*3 + 2 ] = tail_top_vertices[i][2];
		vertices[ i*3 + 1 ] = vertices[ i*3 + 1 ]- 0.7;
		vertices[ i*3 + 0 ] = vertices[ i*3 + 0 ]*-1+24;
	}
	nose_bottom_geometry.addAttribute( 'position' , new THREE.BufferAttribute( vertices, 3 ));
	var nose_bottom_mesh = new THREE.Mesh( nose_bottom_geometry, blackMaterial );
	//nose_bottom_mesh.material.side = THREE.BackSide;
	skateboard_center.add(nose_bottom_mesh);
}

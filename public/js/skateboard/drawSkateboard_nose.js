var skateboard_nose;
var skateboard_nose_tail_pivot_line,
	skateboard_nose_center_pivot_line,
	skateboard_nose_nose_pivot_line;

function drawSkateboard_nose(){
	skateboard_nose = new THREE.Object3D();
	skateboard_nose.name = 'skateboardObject';

	drawLines_nose();
	drawVertices_nose();
	scene.add(skateboard_nose)
}

function drawVertices_nose() {
	
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

	var skateboard_nose_tail_pivot_geometry = new THREE.Geometry();
	skateboard_nose_tail_pivot_line = new THREE.Line(skateboard_nose_tail_pivot_geometry);
	skateboard_nose_tail_pivot_line.position.x = -48;
	skateboard_nose.add(skateboard_nose_tail_pivot_line);

	var skateboard_nose_center_pivot_geometry = new THREE.Geometry();
	skateboard_nose_center_pivot_line = new THREE.Line(skateboard_nose_center_pivot_geometry);
	skateboard_nose_center_pivot_line.position.x = -24;
	skateboard_nose.add(skateboard_nose_center_pivot_line);

	var skateboard_nose_nose_pivot_geometry = new THREE.Geometry();
	skateboard_nose_nose_pivot_line = new THREE.Line(skateboard_nose_nose_pivot_geometry);
	skateboard_nose_nose_pivot_line.position.x = 0;
	skateboard_nose.add(skateboard_nose_nose_pivot_line);



	// Top center
	var topGeometry_nose = new THREE.PlaneBufferGeometry( 40, 20);
	var top_nose = new THREE.Mesh(topGeometry_nose, blackMaterial);
	top_nose.position.x = -24;
	top_nose.rotation.x = -Math.PI / 2;
	top_nose.position.y = 0.5;
	skateboard_nose.add(top_nose);

	// Bottom center
	var bottomGeometry_nose = new THREE.PlaneBufferGeometry( 40, 20);
	var bottom_nose = new THREE.Mesh(topGeometry_nose, blackMaterialBack);
	bottom_nose.position.x = -24;
	bottom_nose.rotation.x = -Math.PI / 2;
	bottom_nose.position.y = -0.2;
	bottom_nose.material.side = THREE.BackSide;
	skateboard_nose.add(bottom_nose);

	// Right edge
	var rightEdgeGeometry_nose = new THREE.PlaneBufferGeometry(40,0.7);
	var rightEdge_nose = new THREE.Mesh(rightEdgeGeometry_nose, yellowMaterial);
	rightEdge_nose.position.z = 10;
	rightEdge_nose.position.y = 0.15;
	rightEdge_nose.position.x = -24;
	skateboard_nose.add(rightEdge_nose);

	// Left edge
	var leftEdgeGeometry_nose = new THREE.PlaneBufferGeometry(40,0.7);
	var leftEdge_nose = new THREE.Mesh(leftEdgeGeometry_nose, blueMaterial);
	leftEdge_nose.position.z = -10;
	leftEdge_nose.rotation.x = -Math.PI;
	leftEdge_nose.position.y = 0.15;
	leftEdge_nose.position.x = -24;
	skateboard_nose.add(leftEdge_nose);


	// Tail right edge concave
	var tail_right_edge_concave_geometry_nose = new THREE.BufferGeometry();
	var vertices = new Float32Array( tail_right_edge_concave_vertices.length * 3 ); 
	for ( var i = 0; i < tail_right_edge_concave_vertices.length; i++ )
	{
		vertices[ i*3 + 0 ] = tail_right_edge_concave_vertices[i][0];
		vertices[ i*3 + 1 ] = tail_right_edge_concave_vertices[i][1];
		vertices[ i*3 + 2 ] = tail_right_edge_concave_vertices[i][2];
		vertices[ i*3 + 0 ] = vertices[ i*3 + 0 ]-48;

	}
	tail_right_edge_concave_geometry_nose.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
	var tail_right_edge_concave_mesh_nose = new THREE.Mesh( tail_right_edge_concave_geometry_nose, yellowMaterial );
	tail_right_edge_concave_mesh_nose.material.side = THREE.FrontSide;
	skateboard_nose.add(tail_right_edge_concave_mesh_nose);

	// Tail left edge concave
	var tail_left_edge_concave_geometry_nose = new THREE.BufferGeometry();
	var vertices = new Float32Array( tail_right_edge_concave_vertices.length * 3 ); 
	for ( var i = 0; i < tail_right_edge_concave_vertices.length; i++ )
	{
		vertices[ i*3 + 0 ] = tail_right_edge_concave_vertices[i][0];
		vertices[ i*3 + 1 ] = tail_right_edge_concave_vertices[i][1];
		vertices[ i*3 + 2 ] = tail_right_edge_concave_vertices[i][2];
		vertices[ i*3 + 0 ] = vertices[ i*3 + 0 ]-48;
		vertices[ i*3 + 2 ] = vertices[ i*3 + 2 ]*-1;
	}
	tail_left_edge_concave_geometry_nose.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
	var tail_left_edge_concave_mesh_nose = new THREE.Mesh( tail_left_edge_concave_geometry_nose, blueMaterialBack );
	tail_left_edge_concave_mesh_nose.material.side = THREE.BackSide;
	skateboard_nose.add(tail_left_edge_concave_mesh_nose);


	// Nose right edge concave
	var nose_right_edge_concave_geometry_nose = new THREE.BufferGeometry();
	var vertices = new Float32Array( tail_right_edge_concave_vertices.length * 3 ); 
	for ( var i = 0; i < tail_right_edge_concave_vertices.length; i++ )
	{
		vertices[ i*3 + 0 ] = tail_right_edge_concave_vertices[i][0];
		vertices[ i*3 + 1 ] = tail_right_edge_concave_vertices[i][1];
		vertices[ i*3 + 2 ] = tail_right_edge_concave_vertices[i][2];
		vertices[ i*3 + 0 ] = vertices[ i*3 + 0 ]*-1;
		// vertices[ i*3 + 3 ] = vertices[ i*3 + 3 ]*-1;
	}
	nose_right_edge_concave_geometry_nose.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
	var nose_right_edge_concave_mesh_nose = new THREE.Mesh( nose_right_edge_concave_geometry_nose, yellowMaterialBack );
	nose_right_edge_concave_mesh_nose.material.side = THREE.BackSide;
	skateboard_nose.add(nose_right_edge_concave_mesh_nose);

	// Nose left edge concave
	var nose_left_edge_concave_geometry_nose = new THREE.BufferGeometry();
	var vertices = new Float32Array( tail_right_edge_concave_vertices.length * 3 ); 
	for ( var i = 0; i < tail_right_edge_concave_vertices.length; i++ )
	{
		vertices[ i*3 + 0 ] = tail_right_edge_concave_vertices[i][0];
		vertices[ i*3 + 1 ] = tail_right_edge_concave_vertices[i][1];
		vertices[ i*3 + 2 ] = tail_right_edge_concave_vertices[i][2];
		vertices[ i*3 + 0 ] = vertices[ i*3 + 0 ]*-1;
		vertices[ i*3 + 2 ] = vertices[ i*3 + 2 ]*-1;
	}
	nose_left_edge_concave_geometry_nose.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
	var nose_left_edge_concave_mesh_nose = new THREE.Mesh( nose_left_edge_concave_geometry_nose, blueMaterial );
	nose_left_edge_concave_mesh_nose.material.side = THREE.FrontSide;
	skateboard_nose.add(nose_left_edge_concave_mesh_nose);

// ------------------------------------------------------------------------------------------------

	// Concave tail top
	var tail_top_concave_geometry_nose = new THREE.BufferGeometry();
	var vertices = new Float32Array( tail_top_concave_vertices.length * 3 ); 
	for ( var i = 0; i < tail_top_concave_vertices.length; i++ )
	{
		vertices[ i*3 + 0 ] = tail_top_concave_vertices[i][0];
		vertices[ i*3 + 1 ] = tail_top_concave_vertices[i][1];
		vertices[ i*3 + 2 ] = tail_top_concave_vertices[i][2];
		vertices[ i*3 + 0 ] = vertices[ i*3 + 0 ]-48;

	}
	tail_top_concave_geometry_nose.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
	var tail_top_concave_mesh_nose = new THREE.Mesh( tail_top_concave_geometry_nose, blackMaterial );
	skateboard_nose.add(tail_top_concave_mesh_nose);

	// Concave tail bottom
	var tail_bottom_concave_geometry_nose = new THREE.BufferGeometry();
	var vertices = new Float32Array( tail_top_concave_vertices.length * 3 ); 
	for ( var i = 0; i < tail_top_concave_vertices.length; i++ )
	{
		vertices[ i*3 + 0 ] = tail_top_concave_vertices[i][0];
		vertices[ i*3 + 1 ] = tail_top_concave_vertices[i][1];
		vertices[ i*3 + 2 ] = tail_top_concave_vertices[i][2];
		vertices[ i*3 + 1 ] = vertices[ i*3 + 1 ] - 0.7;
		vertices[ i*3 + 0 ] = vertices[ i*3 + 0 ]-48;

	}
	tail_bottom_concave_geometry_nose.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
	var tail_bottom_concave_mesh_nose = new THREE.Mesh( tail_bottom_concave_geometry_nose, blackMaterialBack );
	tail_bottom_concave_mesh_nose.material.side = THREE.BackSide;
	skateboard_nose.add(tail_bottom_concave_mesh_nose);

	// Concave nose top
	var nose_top_concave_geometry_nose = new THREE.BufferGeometry();
	var vertices = new Float32Array( tail_top_concave_vertices.length * 3 ); 
	for ( var i = 0; i < tail_top_concave_vertices.length; i++ )
	{
		vertices[ i*3 + 0 ] = tail_top_concave_vertices[i][0];
		vertices[ i*3 + 1 ] = tail_top_concave_vertices[i][1];
		vertices[ i*3 + 2 ] = tail_top_concave_vertices[i][2];
		vertices[ i*3 + 0 ] = vertices[ i*3 + 0 ]*-1;
	}
	nose_top_concave_geometry_nose.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
	var nose_top_concave_mesh_nose = new THREE.Mesh( nose_top_concave_geometry_nose, blackMaterialBack );
	nose_top_concave_mesh_nose.material.side = THREE.BackSide;
	skateboard_nose.add(nose_top_concave_mesh_nose);


	// Concave nose bottom
	var nose_bottom_concave_geometry_nose = new THREE.BufferGeometry();
	var vertices = new Float32Array( tail_top_concave_vertices.length * 3 ); 
	for ( var i = 0; i < tail_top_concave_vertices.length; i++ )
	{
		vertices[ i*3 + 0 ] = tail_top_concave_vertices[i][0];
		vertices[ i*3 + 1 ] = tail_top_concave_vertices[i][1];
		vertices[ i*3 + 2 ] = tail_top_concave_vertices[i][2];
		vertices[ i*3 + 1 ] = vertices[ i*3 + 1 ] - 0.7;
		vertices[ i*3 + 0 ] = vertices[ i*3 + 0 ]*-1;

	}
	nose_bottom_concave_geometry_nose.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
	var nose_bottom_concave_mesh_nose = new THREE.Mesh( nose_bottom_concave_geometry_nose, blackMaterial );
	skateboard_nose.add(nose_bottom_concave_mesh_nose);


	// ---------------------------------------------

	// tail top right edge
	var tail_top_right_edge_geometry_nose = new THREE.BufferGeometry();
	var vertices = new Float32Array( tail_top_right_edge_vertices.length * 3);
	for (var i = 0; i < tail_top_right_edge_vertices.length; i++)
	{
		vertices[ i*3 + 0 ] = tail_top_right_edge_vertices[i][0];
		vertices[ i*3 + 1 ] = tail_top_right_edge_vertices[i][1];
		vertices[ i*3 + 2 ] = tail_top_right_edge_vertices[i][2];
		vertices[ i*3 + 0 ] = vertices[ i*3 + 0 ]-48;
	}
	tail_top_right_edge_geometry_nose.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
	var tail_top_right_edge_mesh_nose = new THREE.Mesh( tail_top_right_edge_geometry_nose, yellowMaterial );
	skateboard_nose.add(tail_top_right_edge_mesh_nose);


	// tail top left edge
	var tail_top_left_edge_geometry_nose = new THREE.BufferGeometry();
	var vertices = new Float32Array( tail_top_right_edge_vertices.length * 3);
	for (var i = 0; i < tail_top_right_edge_vertices.length; i++)
	{
		vertices[ i*3 + 0 ] = tail_top_right_edge_vertices[i][0];
		vertices[ i*3 + 1 ] = tail_top_right_edge_vertices[i][1];
		vertices[ i*3 + 2 ] = tail_top_right_edge_vertices[i][2];
		vertices[ i*3 + 2 ] = vertices[ i*3 + 2 ]*-1;
		vertices[ i*3 + 0 ] = vertices[ i*3 + 0 ]-48;
	}
	tail_top_left_edge_geometry_nose.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
	var tail_top_left_edge_mesh_nose = new THREE.Mesh( tail_top_left_edge_geometry_nose, blueMaterialBack );
	skateboard_nose.add(tail_top_left_edge_mesh_nose);

	// Tail top
	var tail_top_geometry_nose = new THREE.BufferGeometry();
	var vertices = new Float32Array( tail_top_vertices.length * 3);
	for (var i = 0; i < tail_top_vertices.length; i++)
	{
		vertices[ i*3 + 0 ] = tail_top_vertices[i][0];
		vertices[ i*3 + 1 ] = tail_top_vertices[i][1];
		vertices[ i*3 + 2 ] = tail_top_vertices[i][2];
		vertices[ i*3 + 0 ] = vertices[ i*3 + 0 ]-48;
	}
	tail_top_geometry_nose.addAttribute( 'position' , new THREE.BufferAttribute( vertices, 3 ));
	var tail_top_mesh_nose = new THREE.Mesh( tail_top_geometry_nose, blackMaterial);
	skateboard_nose.add(tail_top_mesh_nose);


	// Tail bottom
	var tail_bottom_geometry_nose = new THREE.BufferGeometry();
	var vertices = new Float32Array( tail_top_vertices.length * 3);
	for (var i = 0; i < tail_top_vertices.length; i++)
	{
		vertices[ i*3 + 0 ] = tail_top_vertices[i][0];
		vertices[ i*3 + 1 ] = tail_top_vertices[i][1];
		vertices[ i*3 + 2 ] = tail_top_vertices[i][2];
		vertices[ i*3 + 1 ] = vertices[ i*3 + 1 ]- 0.7;
		vertices[ i*3 + 0 ] = vertices[ i*3 + 0 ]-48;
	}
	tail_bottom_geometry_nose.addAttribute( 'position' , new THREE.BufferAttribute( vertices, 3 ));
	var tail_bottom_mesh_nose = new THREE.Mesh( tail_bottom_geometry_nose, blackMaterialBack );
	tail_bottom_mesh_nose.material.side = THREE.BackSide;
	skateboard_nose.add(tail_bottom_mesh_nose);


	// nose right edge
	var nose_right_edge_geometry_nose = new THREE.BufferGeometry();
	var vertices = new Float32Array( tail_top_right_edge_vertices.length * 3);
	for (var i = 0; i < tail_top_right_edge_vertices.length; i++)
	{
		vertices[ i*3 + 0 ] = tail_top_right_edge_vertices[i][0];
		vertices[ i*3 + 1 ] = tail_top_right_edge_vertices[i][1];
		vertices[ i*3 + 2 ] = tail_top_right_edge_vertices[i][2];
		vertices[ i*3 + 0 ] = vertices[ i*3 + 0 ]*-1;
	}
	nose_right_edge_geometry_nose.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
	var nose_right_edge_mesh_nose = new THREE.Mesh( nose_right_edge_geometry_nose, yellowMaterialBack );
	skateboard_nose.add(nose_right_edge_mesh_nose);


	// nose left edge
	var nose_left_edge_geometry_nose = new THREE.BufferGeometry();
	var vertices = new Float32Array( tail_top_right_edge_vertices.length * 3);
	for (var i = 0; i < tail_top_right_edge_vertices.length; i++)
	{
		vertices[ i*3 + 0 ] = tail_top_right_edge_vertices[i][0];
		vertices[ i*3 + 1 ] = tail_top_right_edge_vertices[i][1];
		vertices[ i*3 + 2 ] = tail_top_right_edge_vertices[i][2];
		vertices[ i*3 + 2 ] = vertices[ i*3 + 2 ]*-1;
		vertices[ i*3 + 0 ] = vertices[ i*3 + 0 ]*-1;
	}
	nose_left_edge_geometry_nose.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
	var nose_left_edge_mesh_nose = new THREE.Mesh( nose_left_edge_geometry_nose, blueMaterial );
	skateboard_nose.add(nose_left_edge_mesh_nose);


	// nose top
	var nose_top_geometry_nose = new THREE.BufferGeometry();
	var vertices = new Float32Array( tail_top_vertices.length * 3);
	for (var i = 0; i < tail_top_vertices.length; i++)
	{
		vertices[ i*3 + 0 ] = tail_top_vertices[i][0];
		vertices[ i*3 + 1 ] = tail_top_vertices[i][1];
		vertices[ i*3 + 2 ] = tail_top_vertices[i][2];
		vertices[ i*3 + 0 ] = vertices[ i*3 + 0 ]*-1;
	}
	nose_top_geometry_nose.addAttribute( 'position' , new THREE.BufferAttribute( vertices, 3 ));
	var nose_top_mesh_nose = new THREE.Mesh( nose_top_geometry_nose, blackMaterialBack);
	skateboard_nose.add(nose_top_mesh_nose);

	// nose bottom
	var nose_bottom_geometry_nose = new THREE.BufferGeometry();
	var vertices = new Float32Array( tail_top_vertices.length * 3);
	for (var i = 0; i < tail_top_vertices.length; i++)
	{
		vertices[ i*3 + 0 ] = tail_top_vertices[i][0];
		vertices[ i*3 + 1 ] = tail_top_vertices[i][1];
		vertices[ i*3 + 2 ] = tail_top_vertices[i][2];
		vertices[ i*3 + 1 ] = vertices[ i*3 + 1 ]- 0.7;
		vertices[ i*3 + 0 ] = vertices[ i*3 + 0 ]*-1;
	}
	nose_bottom_geometry_nose.addAttribute( 'position' , new THREE.BufferAttribute( vertices, 3 ));
	var nose_bottom_mesh_nose = new THREE.Mesh( nose_bottom_geometry_nose, blackMaterial );
	//nose_bottom_mesh.material.side = THREE.BackSide;
	skateboard_nose.add(nose_bottom_mesh_nose);

}
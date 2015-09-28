
// X position from the center of 0
var xPos_dif = 4;
// Top Ypos difference 
var yPos_top_dif = 0.5;
var yPos_bottom_dif = -0.2;
var zPos_right_dif = 10;
var zPos_left_dif = -10;

var increment = 0.5;
var centerAxis = 0;

// Tail right edge tail_top_concave_vertices
 var tail_right_edge_concave_vertices = [

 	[ xPos_dif - 0, 0 + yPos_bottom_dif, zPos_right_dif],
	[ xPos_dif - 0, 0 + yPos_top_dif, zPos_right_dif],
	[ xPos_dif - 0.37, 0 + yPos_top_dif, zPos_right_dif],

	[ xPos_dif - 0.37, 0 + yPos_top_dif, zPos_right_dif],
	[ xPos_dif - 0.37, 0 + yPos_bottom_dif, zPos_right_dif],
	[ xPos_dif - 0, 0 + yPos_bottom_dif, zPos_right_dif],


	[ xPos_dif - 0.37, 0 + yPos_bottom_dif, zPos_right_dif],
	[ xPos_dif - 0.37, 0 + yPos_top_dif, zPos_right_dif],
	[ xPos_dif - 1.25, yPos_top_dif - 0.06, zPos_right_dif],

	[ xPos_dif - 1.25, yPos_top_dif - 0.06, zPos_right_dif],
	[ xPos_dif - 1.25, yPos_bottom_dif - 0.06 , zPos_right_dif],
	[ xPos_dif - 0.37, 0 + yPos_bottom_dif, zPos_right_dif],


	[ xPos_dif - 1.25, yPos_bottom_dif - 0.06 , zPos_right_dif],
	[ xPos_dif - 1.25, yPos_top_dif - 0.06 , zPos_right_dif],
	[ xPos_dif - 1.87, yPos_top_dif - 0.12 , zPos_right_dif],

	[ xPos_dif - 1.87, yPos_top_dif - 0.12 , zPos_right_dif],
	[ xPos_dif - 1.87, yPos_bottom_dif - 0.12 , zPos_right_dif],
	[ xPos_dif - 1.25, yPos_bottom_dif - 0.06 , zPos_right_dif],


	[ xPos_dif - 1.87, yPos_bottom_dif - 0.12 , zPos_right_dif],
	[ xPos_dif - 1.87, yPos_top_dif - 0.12 , zPos_right_dif],
	[ xPos_dif - 2.5, yPos_top_dif - 0.18 , zPos_right_dif],

	[ xPos_dif - 2.5, yPos_top_dif - 0.18 , zPos_right_dif],
	[ xPos_dif - 2.5, yPos_bottom_dif - 0.18 , zPos_right_dif],
	[ xPos_dif - 1.87, yPos_bottom_dif - 0.12 , zPos_right_dif],


	[ xPos_dif - 2.5, yPos_bottom_dif - 0.18 , zPos_right_dif],
	[ xPos_dif - 2.5, yPos_top_dif - 0.18 , zPos_right_dif],
	[ xPos_dif - 3, yPos_top_dif - 0.25 , zPos_right_dif],

	[ xPos_dif - 3, yPos_top_dif - 0.25 , zPos_right_dif],
	[ xPos_dif - 3, yPos_bottom_dif - 0.25 , zPos_right_dif],
	[ xPos_dif - 2.5, yPos_bottom_dif - 0.18 , zPos_right_dif],


	[ xPos_dif - 3, yPos_bottom_dif - 0.25 , zPos_right_dif],
	[ xPos_dif - 3, yPos_top_dif - 0.25 , zPos_right_dif],
	[ xPos_dif - 3.62, yPos_top_dif - 0.31 , zPos_right_dif],

	[ xPos_dif - 3.62, yPos_top_dif - 0.31 , zPos_right_dif],
	[ xPos_dif - 3.62, yPos_bottom_dif - 0.31 , zPos_right_dif],
	[ xPos_dif - 3, yPos_bottom_dif - 0.25 , zPos_right_dif],


	[ xPos_dif - 3.62, yPos_bottom_dif - 0.31 , zPos_right_dif],
	[ xPos_dif - 3.62, yPos_top_dif - 0.31 , zPos_right_dif],
	[ xPos_dif - 4.25, yPos_top_dif - 0.37 , zPos_right_dif],

	[ xPos_dif - 4.25, yPos_top_dif - 0.37 , zPos_right_dif],
	[ xPos_dif - 4.25, yPos_bottom_dif - 0.37 , zPos_right_dif],
	[ xPos_dif - 3.62, yPos_bottom_dif - 0.31 , zPos_right_dif],


	[ xPos_dif - 4.25, yPos_bottom_dif - 0.37 , zPos_right_dif],
	[ xPos_dif - 4.25, yPos_top_dif - 0.37 , zPos_right_dif],
	[ xPos_dif - 4.87, yPos_top_dif - 0.43 , zPos_right_dif],

	[ xPos_dif - 4.87, yPos_top_dif - 0.43 , zPos_right_dif],
	[ xPos_dif - 4.87, yPos_bottom_dif - 0.43 , zPos_right_dif],
	[ xPos_dif - 4.25, yPos_bottom_dif - 0.37 , zPos_right_dif],


	[ xPos_dif - 4.87, yPos_bottom_dif - 0.43  , zPos_right_dif],
	[ xPos_dif - 4.87, yPos_top_dif - 0.43 , zPos_right_dif],
	[ xPos_dif - 5.75, yPos_top_dif - 0.5 , zPos_right_dif],

	[ xPos_dif - 5.75, yPos_top_dif - 0.5 , zPos_right_dif],
	[ xPos_dif - 5.75, yPos_bottom_dif - 0.5 , zPos_right_dif],
	[ xPos_dif - 4.87, yPos_bottom_dif - 0.43 , zPos_right_dif],


	[ xPos_dif - 5.75, yPos_bottom_dif - 0.5 , zPos_right_dif],
	[ xPos_dif - 5.75, yPos_top_dif - 0.5 , zPos_right_dif],
	[ xPos_dif - 6, yPos_top_dif - 0.5 , zPos_right_dif],

	[ xPos_dif - 6, yPos_top_dif - 0.5 , zPos_right_dif],
	[ xPos_dif - 6, yPos_bottom_dif - 0.5 , zPos_right_dif],
	[ xPos_dif - 5.75, yPos_bottom_dif - 0.5 , zPos_right_dif]
];



var tail_top_concave_vertices = [

	[ xPos_dif - 0, 0 + yPos_top_dif, zPos_right_dif],
	[ xPos_dif - 0, 0 + yPos_top_dif, zPos_left_dif],
	[ xPos_dif - 0.37, 0 + yPos_top_dif, zPos_left_dif],

	[ xPos_dif - 0.37, 0 + yPos_top_dif, zPos_left_dif],
	[ xPos_dif - 0.37, 0 + yPos_top_dif, zPos_right_dif],
	[ xPos_dif - 0, 0 + yPos_top_dif, zPos_right_dif],


	[ xPos_dif - 0.37, 0 + yPos_top_dif, zPos_right_dif],
	[ xPos_dif - 0.37, 0 + yPos_top_dif, zPos_left_dif],
	[ xPos_dif - 1.25, yPos_top_dif - 0.06, zPos_left_dif],

	[ xPos_dif - 1.25, yPos_top_dif - 0.06, zPos_left_dif],
	[ xPos_dif - 1.25, yPos_top_dif - 0.06, zPos_right_dif],
	[ xPos_dif - 0.37, 0 + yPos_top_dif, zPos_right_dif],


	[ xPos_dif - 1.25, yPos_top_dif - 0.06, zPos_right_dif],
	[ xPos_dif - 1.25, yPos_top_dif - 0.06, zPos_left_dif],
	[ xPos_dif - 1.87, yPos_top_dif - 0.12, zPos_left_dif],

	[ xPos_dif - 1.87, yPos_top_dif - 0.12, zPos_left_dif],
	[ xPos_dif - 1.87, yPos_top_dif - 0.12, zPos_right_dif],
	[ xPos_dif - 1.25, yPos_top_dif - 0.06, zPos_right_dif],


	[ xPos_dif - 1.87, yPos_top_dif - 0.12, zPos_right_dif],
	[ xPos_dif - 1.87, yPos_top_dif - 0.12, zPos_left_dif],
	[ xPos_dif - 2.5, yPos_top_dif - 0.18, zPos_left_dif],

	[ xPos_dif - 2.5, yPos_top_dif - 0.18, zPos_left_dif],
	[ xPos_dif - 2.5, yPos_top_dif - 0.18, zPos_right_dif],
	[ xPos_dif - 1.87, yPos_top_dif - 0.12, zPos_right_dif],


	[ xPos_dif - 2.5, yPos_top_dif - 0.18, zPos_right_dif],
	[ xPos_dif - 2.5, yPos_top_dif - 0.18, zPos_left_dif],
	[ xPos_dif - 3, yPos_top_dif - 0.25, zPos_left_dif],

	[ xPos_dif - 3, yPos_top_dif - 0.25, zPos_left_dif],
	[ xPos_dif - 3, yPos_top_dif - 0.25, zPos_right_dif],
	[ xPos_dif - 2.5, yPos_top_dif - 0.18, zPos_right_dif],


	[ xPos_dif - 3, yPos_top_dif - 0.25, zPos_right_dif],
	[ xPos_dif - 3, yPos_top_dif - 0.25, zPos_left_dif],
	[ xPos_dif - 3.62, yPos_top_dif - 0.31, zPos_left_dif],

	[ xPos_dif - 3.62, yPos_top_dif - 0.31, zPos_left_dif],
	[ xPos_dif - 3.62, yPos_top_dif - 0.31, zPos_right_dif],
	[ xPos_dif - 3, yPos_top_dif - 0.25, zPos_right_dif],

	[ xPos_dif - 3.62, yPos_top_dif - 0.31, zPos_right_dif],
	[ xPos_dif - 3.62, yPos_top_dif - 0.31, zPos_left_dif],
	[ xPos_dif - 4.25, yPos_top_dif - 0.37, zPos_left_dif],

	[ xPos_dif - 4.25, yPos_top_dif - 0.37, zPos_left_dif],
	[ xPos_dif - 4.25, yPos_top_dif - 0.37, zPos_right_dif],
	[ xPos_dif - 3.62, yPos_top_dif - 0.31, zPos_right_dif],


	[ xPos_dif - 4.25, yPos_top_dif - 0.37, zPos_right_dif],
	[ xPos_dif - 4.25, yPos_top_dif - 0.37, zPos_left_dif],
	[ xPos_dif - 4.87, yPos_top_dif - 0.43, zPos_left_dif],

	[ xPos_dif - 4.87, yPos_top_dif - 0.43, zPos_left_dif],
	[ xPos_dif - 4.87, yPos_top_dif - 0.43, zPos_right_dif],
	[ xPos_dif - 4.25, yPos_top_dif - 0.37, zPos_right_dif],


	[ xPos_dif - 4.87, yPos_top_dif - 0.43, zPos_right_dif],
	[ xPos_dif - 4.87, yPos_top_dif - 0.43, zPos_left_dif],
	[ xPos_dif - 5.75, yPos_top_dif - 0.5, zPos_left_dif],

	[ xPos_dif - 5.75, yPos_top_dif - 0.5, zPos_left_dif],
	[ xPos_dif - 5.75, yPos_top_dif - 0.5, zPos_right_dif],
	[ xPos_dif - 4.87, yPos_top_dif - 0.43, zPos_right_dif],


	[ xPos_dif - 5.75, yPos_top_dif - 0.5, zPos_right_dif],
	[ xPos_dif - 5.75, yPos_top_dif - 0.5, zPos_left_dif],
	[ xPos_dif - 6, yPos_top_dif - 0.5, zPos_left_dif],

	[ xPos_dif - 6, yPos_top_dif - 0.5, zPos_left_dif],
	[ xPos_dif - 6, yPos_top_dif - 0.5, zPos_right_dif],
	[ xPos_dif - 5.75, yPos_top_dif - 0.5, zPos_right_dif]

]


var x_pos_tail_dif = xPos_dif - 6;
var yPos_tail_top_dif = yPos_top_dif - 0.5;
// zPos_right_dif = 10;

var tail_top_right_edge_vertices = [

	[ x_pos_tail_dif,  yPos_tail_top_dif-0.7 , zPos_right_dif],
	[ x_pos_tail_dif,  yPos_tail_top_dif , zPos_right_dif],
	[ x_pos_tail_dif-0.25,  yPos_tail_top_dif , zPos_right_dif],

	[ x_pos_tail_dif-0.25,  yPos_tail_top_dif , zPos_right_dif],
	[ x_pos_tail_dif-0.25,  yPos_tail_top_dif-0.7 , zPos_right_dif],
	[ x_pos_tail_dif,  yPos_tail_top_dif-0.7 , zPos_right_dif],

	

	[ x_pos_tail_dif-0.25,  yPos_tail_top_dif-0.7 , zPos_right_dif],
	[ x_pos_tail_dif-0.25,  yPos_tail_top_dif , zPos_right_dif],
	[ x_pos_tail_dif-0.87,  yPos_tail_top_dif+0.0625 , zPos_right_dif],

	[ x_pos_tail_dif-0.87,  yPos_tail_top_dif+0.0625 , zPos_right_dif],
	[ x_pos_tail_dif-0.87,  yPos_tail_top_dif-0.7+0.0625 , zPos_right_dif],
	[ x_pos_tail_dif-0.25,  yPos_tail_top_dif-0.7 , zPos_right_dif],


	[ x_pos_tail_dif-0.87,  yPos_tail_top_dif-0.7+0.0625 , zPos_right_dif],
	[ x_pos_tail_dif-0.87,  yPos_tail_top_dif+0.0625 , zPos_right_dif],
	[ x_pos_tail_dif-2.87,  yPos_tail_top_dif+0.453125 , zPos_right_dif - 0.12],

	[ x_pos_tail_dif-2.87,  yPos_tail_top_dif+0.453125 , zPos_right_dif - 0.12],
	[ x_pos_tail_dif-2.87,  yPos_tail_top_dif-0.7+0.453125 , zPos_right_dif - 0.12],
	[ x_pos_tail_dif-0.87,  yPos_tail_top_dif-0.7+0.0625 , zPos_right_dif],

	
	[ x_pos_tail_dif-2.87,  yPos_tail_top_dif-0.7+0.453125 , zPos_right_dif - 0.12],
	[ x_pos_tail_dif-2.87,  yPos_tail_top_dif+0.453125 , zPos_right_dif - 0.12],
	[ x_pos_tail_dif-4,  yPos_tail_top_dif+0.7578125 , zPos_right_dif - 0.25],

	[ x_pos_tail_dif-4,  yPos_tail_top_dif+0.7578125 , zPos_right_dif - 0.25],
	[ x_pos_tail_dif-4,  yPos_tail_top_dif-0.7+0.7578125 , zPos_right_dif - 0.25],
	[ x_pos_tail_dif-2.87,  yPos_tail_top_dif-0.7+0.453125 , zPos_right_dif - 0.12],


	[ x_pos_tail_dif-4,  yPos_tail_top_dif-0.7+0.7578125 , zPos_right_dif - 0.25],
	[ x_pos_tail_dif-4,  yPos_tail_top_dif+0.7578125 , zPos_right_dif - 0.25],
	[ x_pos_tail_dif-4.75,  yPos_tail_top_dif+0.984375 , zPos_right_dif - 0.37],

	[ x_pos_tail_dif-4.75,  yPos_tail_top_dif+0.984375 , zPos_right_dif - 0.37],
	[ x_pos_tail_dif-4.75,  yPos_tail_top_dif-0.7+0.984375 , zPos_right_dif - 0.37],
	[ x_pos_tail_dif-4,  yPos_tail_top_dif-0.7+0.7578125 , zPos_right_dif - 0.25],

	[ x_pos_tail_dif-4.75,  yPos_tail_top_dif-0.7+0.984375 , zPos_right_dif - 0.37],
	[ x_pos_tail_dif-4.75,  yPos_tail_top_dif+0.984375 , zPos_right_dif - 0.37],
	[ x_pos_tail_dif-5.37,  yPos_tail_top_dif+1.1875 , zPos_right_dif - 0.5],

	[ x_pos_tail_dif-5.37,  yPos_tail_top_dif+1.1875 , zPos_right_dif - 0.5],
	[ x_pos_tail_dif-5.37,  yPos_tail_top_dif-0.7+1.1875 , zPos_right_dif - 0.5],
	[ x_pos_tail_dif-4.75,  yPos_tail_top_dif-0.7+0.984375 , zPos_right_dif - 0.37],

	
	[ x_pos_tail_dif-5.37,  yPos_tail_top_dif-0.7+1.1875 , zPos_right_dif - 0.5],
	[ x_pos_tail_dif-5.37,  yPos_tail_top_dif+1.1875 , zPos_right_dif - 0.5],
	[ x_pos_tail_dif-6,  yPos_tail_top_dif+1.390625 , zPos_right_dif - 0.62],

	[ x_pos_tail_dif-6,  yPos_tail_top_dif+1.390625 , zPos_right_dif - 0.62],
	[ x_pos_tail_dif-6,  yPos_tail_top_dif-0.7+1.390625 , zPos_right_dif - 0.62],
	[ x_pos_tail_dif-5.37,  yPos_tail_top_dif-0.7+1.1875 , zPos_right_dif - 0.5],


	[ x_pos_tail_dif-6,  yPos_tail_top_dif-0.7+1.390625 , zPos_right_dif - 0.62],
	[ x_pos_tail_dif-6,  yPos_tail_top_dif+1.390625 , zPos_right_dif - 0.62],
	[ x_pos_tail_dif-6.5,  yPos_tail_top_dif+1.5625 , zPos_right_dif - 0.75],

	[ x_pos_tail_dif-6.5,  yPos_tail_top_dif+1.5625 , zPos_right_dif - 0.75],
	[ x_pos_tail_dif-6.5,  yPos_tail_top_dif-0.7+1.5625 , zPos_right_dif - 0.75],
	[ x_pos_tail_dif-6,  yPos_tail_top_dif-0.7+1.390625 , zPos_right_dif - 0.62],

	
	[ x_pos_tail_dif-6.5,  yPos_tail_top_dif-0.7+1.5625 , zPos_right_dif - 0.75],
	[ x_pos_tail_dif-6.5,  yPos_tail_top_dif+1.5625 , zPos_right_dif - 0.75],
	[ x_pos_tail_dif-8,  yPos_tail_top_dif+2.09375 , zPos_right_dif - 1.25],

	[ x_pos_tail_dif-8,  yPos_tail_top_dif+2.09375 , zPos_right_dif - 1.25],
	[ x_pos_tail_dif-8,  yPos_tail_top_dif-0.7+2.09375 , zPos_right_dif - 1.25],
	[ x_pos_tail_dif-6.5,  yPos_tail_top_dif-0.7+1.5625 , zPos_right_dif - 0.75],

	
	[ x_pos_tail_dif-8,  yPos_tail_top_dif-0.7+2.09375 , zPos_right_dif - 1.25],
	[ x_pos_tail_dif-8,  yPos_tail_top_dif+2.09375 , zPos_right_dif - 1.25],
	[ x_pos_tail_dif-8.62,  yPos_tail_top_dif+2.328125 , zPos_right_dif - 1.5],

	[ x_pos_tail_dif-8.62,  yPos_tail_top_dif+2.328125 , zPos_right_dif - 1.5],
	[ x_pos_tail_dif-8.62,  yPos_tail_top_dif-0.7+2.328125 , zPos_right_dif - 1.5],
	[ x_pos_tail_dif-8,  yPos_tail_top_dif-0.7+2.09375 , zPos_right_dif - 1.25],

	
	[ x_pos_tail_dif-8.62,  yPos_tail_top_dif-0.7+2.328125 , zPos_right_dif - 1.5],
	[ x_pos_tail_dif-8.62,  yPos_tail_top_dif+2.328125 , zPos_right_dif - 1.5],
	[ x_pos_tail_dif-9.37,  yPos_tail_top_dif+2.609375 , zPos_right_dif - 1.87],

	[ x_pos_tail_dif-9.37,  yPos_tail_top_dif+2.609375 , zPos_right_dif - 1.87],
	[ x_pos_tail_dif-9.37,  yPos_tail_top_dif-0.7+2.609375 , zPos_right_dif - 1.87],
	[ x_pos_tail_dif-8.62,  yPos_tail_top_dif-0.7+2.328125 , zPos_right_dif - 1.5],

	
	[ x_pos_tail_dif-9.37,  yPos_tail_top_dif-0.7+2.609375 , zPos_right_dif - 1.87],
	[ x_pos_tail_dif-9.37,  yPos_tail_top_dif+2.609375 , zPos_right_dif - 1.87],
	[ x_pos_tail_dif-10.37,  yPos_tail_top_dif+3 , zPos_right_dif - 2.5],

	[ x_pos_tail_dif-10.37,  yPos_tail_top_dif+3 , zPos_right_dif - 2.5],
	[ x_pos_tail_dif-10.37,  yPos_tail_top_dif-0.7+3 , zPos_right_dif - 2.5],
	[ x_pos_tail_dif-9.37,  yPos_tail_top_dif-0.7+2.609375 , zPos_right_dif - 1.87],

	
	[ x_pos_tail_dif-10.37,  yPos_tail_top_dif-0.7+3 , zPos_right_dif - 2.5],
	[ x_pos_tail_dif-10.37,  yPos_tail_top_dif+3 , zPos_right_dif - 2.5],
	[ x_pos_tail_dif-10.87,  yPos_tail_top_dif+3.1953125 , zPos_right_dif - 2.87],

	[ x_pos_tail_dif-10.87,  yPos_tail_top_dif+3.1953125 , zPos_right_dif - 2.87],
	[ x_pos_tail_dif-10.87,  yPos_tail_top_dif-0.7+3.1953125 , zPos_right_dif - 2.87],
	[ x_pos_tail_dif-10.37,  yPos_tail_top_dif-0.7+3 , zPos_right_dif - 2.5],

	
	[ x_pos_tail_dif-10.87,  yPos_tail_top_dif-0.7+3.1953125 , zPos_right_dif - 2.87],
	[ x_pos_tail_dif-10.87,  yPos_tail_top_dif+3.1953125 , zPos_right_dif - 2.87],
	[ x_pos_tail_dif-12.12,  yPos_tail_top_dif+3.703125 , zPos_right_dif - 4.12],

	[ x_pos_tail_dif-12.12,  yPos_tail_top_dif+3.703125 , zPos_right_dif - 4.12],
	[ x_pos_tail_dif-12.12,  yPos_tail_top_dif-0.7+3.703125 , zPos_right_dif - 4.12],
	[ x_pos_tail_dif-10.87,  yPos_tail_top_dif-0.7+3.1953125 , zPos_right_dif - 2.87],

	
	[ x_pos_tail_dif-12.12,  yPos_tail_top_dif-0.7+3.703125 , zPos_right_dif - 4.12],
	[ x_pos_tail_dif-12.12,  yPos_tail_top_dif+3.703125 , zPos_right_dif - 4.12],
	[ x_pos_tail_dif-12.5,  yPos_tail_top_dif+3.859375 , zPos_right_dif - 4.62],

	[ x_pos_tail_dif-12.5,  yPos_tail_top_dif+3.859375 , zPos_right_dif - 4.62],
	[ x_pos_tail_dif-12.5,  yPos_tail_top_dif-0.7+3.859375 , zPos_right_dif - 4.62],
	[ x_pos_tail_dif-12.12,  yPos_tail_top_dif-0.7+3.703125 , zPos_right_dif - 4.12],

	
	[ x_pos_tail_dif-12.5,  yPos_tail_top_dif-0.7+3.859375 , zPos_right_dif - 4.62],
	[ x_pos_tail_dif-12.5,  yPos_tail_top_dif+3.859375 , zPos_right_dif - 4.62],
	[ x_pos_tail_dif-12.75,  yPos_tail_top_dif+3.9765625 , zPos_right_dif - 5],

	[ x_pos_tail_dif-12.75,  yPos_tail_top_dif+3.9765625 , zPos_right_dif - 5],
	[ x_pos_tail_dif-12.75,  yPos_tail_top_dif-0.7+3.9765625 , zPos_right_dif - 5],
	[ x_pos_tail_dif-12.5,  yPos_tail_top_dif-0.7+3.859375 , zPos_right_dif - 4.62],

	
	[ x_pos_tail_dif-12.75,  yPos_tail_top_dif-0.7+3.9765625 , zPos_right_dif - 5],
	[ x_pos_tail_dif-12.75,  yPos_tail_top_dif+3.9765625 , zPos_right_dif - 5],
	[ x_pos_tail_dif-13.25,  yPos_tail_top_dif+4.171875 , zPos_right_dif - 6],

	[ x_pos_tail_dif-13.25,  yPos_tail_top_dif+4.171875  , zPos_right_dif - 6],
	[ x_pos_tail_dif-13.25,  yPos_tail_top_dif-0.7+4.171875  , zPos_right_dif - 6],
	[ x_pos_tail_dif-12.75,  yPos_tail_top_dif-0.7+3.9765625 , zPos_right_dif - 5],

	
	[ x_pos_tail_dif-13.25,  yPos_tail_top_dif-0.7+4.171875 , zPos_right_dif - 6],
	[ x_pos_tail_dif-13.25,  yPos_tail_top_dif+4.171875 , zPos_right_dif - 6],
	[ x_pos_tail_dif-13.5,  yPos_tail_top_dif+4.28125 , zPos_right_dif - 6.62],

	[ x_pos_tail_dif-13.5,  yPos_tail_top_dif+4.28125 , zPos_right_dif - 6.62],
	[ x_pos_tail_dif-13.5,  yPos_tail_top_dif-0.7+4.28125 , zPos_right_dif - 6.62],
	[ x_pos_tail_dif-13.25,  yPos_tail_top_dif-0.7+4.171875 , zPos_right_dif - 6],

	
	[ x_pos_tail_dif-13.5,  yPos_tail_top_dif-0.7+4.28125 , zPos_right_dif - 6.62],
	[ x_pos_tail_dif-13.5,  yPos_tail_top_dif+4.28125 , zPos_right_dif - 6.62],
	[ x_pos_tail_dif-13.75,  yPos_tail_top_dif+4.390625 , zPos_right_dif - 7.5],

	[ x_pos_tail_dif-13.75,  yPos_tail_top_dif+4.390625 , zPos_right_dif - 7.5],
	[ x_pos_tail_dif-13.75,  yPos_tail_top_dif-0.7+4.390625 , zPos_right_dif - 7.5],
	[ x_pos_tail_dif-13.5,  yPos_tail_top_dif-0.7+4.28125 , zPos_right_dif - 6.62],

	
	[ x_pos_tail_dif-13.75,  yPos_tail_top_dif-0.7+4.390625 , zPos_right_dif - 7.5],
	[ x_pos_tail_dif-13.75,  yPos_tail_top_dif+4.390625 , zPos_right_dif - 7.5],
	[ x_pos_tail_dif-13.87,  yPos_tail_top_dif+4.4453125 , zPos_right_dif - 8.25],

	[ x_pos_tail_dif-13.87,  yPos_tail_top_dif+4.4453125 , zPos_right_dif - 8.25],
	[ x_pos_tail_dif-13.87,  yPos_tail_top_dif-0.7+4.4453125 , zPos_right_dif - 8.25],
	[ x_pos_tail_dif-13.75,  yPos_tail_top_dif-0.7+4.390625 , zPos_right_dif - 7.5],

	
	[ x_pos_tail_dif-13.87,  yPos_tail_top_dif-0.7+4.4453125 , zPos_right_dif - 8.25],
	[ x_pos_tail_dif-13.87,  yPos_tail_top_dif+4.4453125 , zPos_right_dif - 8.25],
	[ x_pos_tail_dif-14,  yPos_tail_top_dif+4.5 , zPos_right_dif - 9.62],

	[ x_pos_tail_dif-14,  yPos_tail_top_dif+4.5 , zPos_right_dif - 9.62],
	[ x_pos_tail_dif-14,  yPos_tail_top_dif-0.7+4.5 , zPos_right_dif - 9.62],
	[ x_pos_tail_dif-13.87,  yPos_tail_top_dif-0.7+4.4453125  , zPos_right_dif - 8.25],

	//
	[ x_pos_tail_dif-14,  yPos_tail_top_dif-0.7+4.5 , zPos_right_dif - 9.62],
	[ x_pos_tail_dif-14,  yPos_tail_top_dif+4.5 , zPos_right_dif - 9.62],
	[ x_pos_tail_dif-14,  yPos_tail_top_dif+4.5 , zPos_right_dif - 10],

	[ x_pos_tail_dif-14,  yPos_tail_top_dif+4.5 , zPos_right_dif - 10],
	[ x_pos_tail_dif-14,  yPos_tail_top_dif-0.7+4.5 , zPos_right_dif - 10],
	[ x_pos_tail_dif-14,  yPos_tail_top_dif-0.7+4.5 , zPos_right_dif - 9.62]

]


var tail_top_vertices = [
	
	[ x_pos_tail_dif,  yPos_tail_top_dif , zPos_right_dif],
	[ x_pos_tail_dif,  yPos_tail_top_dif , zPos_left_dif],
	[ x_pos_tail_dif-0.25,  yPos_tail_top_dif , zPos_left_dif],

	[ x_pos_tail_dif-0.25,  yPos_tail_top_dif , zPos_left_dif],
	[ x_pos_tail_dif-0.25,  yPos_tail_top_dif , zPos_right_dif],
	[ x_pos_tail_dif,  yPos_tail_top_dif , zPos_right_dif],


	[ x_pos_tail_dif-0.25,  yPos_tail_top_dif , zPos_right_dif],
	[ x_pos_tail_dif-0.25,  yPos_tail_top_dif , zPos_left_dif],
	[ x_pos_tail_dif-0.87,  yPos_tail_top_dif+0.0625 , zPos_left_dif],

	[ x_pos_tail_dif-0.87,  yPos_tail_top_dif+0.0625 , zPos_left_dif],
	[ x_pos_tail_dif-0.87,  yPos_tail_top_dif+0.0625 , zPos_right_dif],
	[ x_pos_tail_dif-0.25,  yPos_tail_top_dif , zPos_right_dif],



	[ x_pos_tail_dif-0.87,  yPos_tail_top_dif+0.0625 , zPos_right_dif],
	[ x_pos_tail_dif-0.87,  yPos_tail_top_dif+0.0625 , zPos_left_dif],
	[ x_pos_tail_dif-2.87,  yPos_tail_top_dif+0.453125 , (zPos_right_dif - 0.12)*-1],

	[ x_pos_tail_dif-2.87,  yPos_tail_top_dif+0.453125 ,(zPos_right_dif - 0.12)*-1],
	[ x_pos_tail_dif-2.87,  yPos_tail_top_dif+0.453125 , zPos_right_dif - 0.12],
	[ x_pos_tail_dif-0.87,  yPos_tail_top_dif+0.0625 , zPos_right_dif],


	[ x_pos_tail_dif-2.87,  yPos_tail_top_dif+0.453125 , zPos_right_dif - 0.12],
	[ x_pos_tail_dif-2.87,  yPos_tail_top_dif+0.453125 , (zPos_right_dif - 0.12)*-1],
	[ x_pos_tail_dif-4,  yPos_tail_top_dif+0.7578125 , (zPos_right_dif - 0.25)*-1],

	[ x_pos_tail_dif-4,  yPos_tail_top_dif+0.7578125 , (zPos_right_dif - 0.25)*-1],
	[ x_pos_tail_dif-4,  yPos_tail_top_dif+0.7578125 , zPos_right_dif - 0.25],
	[ x_pos_tail_dif-2.87,  yPos_tail_top_dif+0.453125 , zPos_right_dif - 0.12],


	[ x_pos_tail_dif-4,  yPos_tail_top_dif+0.7578125 , zPos_right_dif - 0.25],
	[ x_pos_tail_dif-4,  yPos_tail_top_dif+0.7578125 , (zPos_right_dif - 0.25)*-1],
	[ x_pos_tail_dif-4.75,  yPos_tail_top_dif+0.984375 , (zPos_right_dif - 0.37)*-1],

	[ x_pos_tail_dif-4.75,  yPos_tail_top_dif+0.984375 , (zPos_right_dif - 0.37)*-1],
	[ x_pos_tail_dif-4.75,  yPos_tail_top_dif+0.984375 , zPos_right_dif - 0.37],
	[ x_pos_tail_dif-4,  yPos_tail_top_dif+0.7578125 , zPos_right_dif - 0.25], 


	[ x_pos_tail_dif-4.75,  yPos_tail_top_dif+0.984375 , zPos_right_dif - 0.37],
	[ x_pos_tail_dif-4.75,  yPos_tail_top_dif+0.984375 , (zPos_right_dif - 0.37)*-1],
	[ x_pos_tail_dif-5.37,  yPos_tail_top_dif+1.1875 , (zPos_right_dif - 0.5)*-1],

	[ x_pos_tail_dif-5.37,  yPos_tail_top_dif+1.1875 , (zPos_right_dif - 0.5)*-1],
	[ x_pos_tail_dif-5.37,  yPos_tail_top_dif+1.1875 , zPos_right_dif - 0.5],
	[ x_pos_tail_dif-4.75,  yPos_tail_top_dif+0.984375 , zPos_right_dif - 0.37],


	[ x_pos_tail_dif-5.37,  yPos_tail_top_dif+1.1875 , zPos_right_dif - 0.5],
	[ x_pos_tail_dif-5.37,  yPos_tail_top_dif+1.1875 , (zPos_right_dif - 0.5)*-1],
	[ x_pos_tail_dif-6,  yPos_tail_top_dif+1.390625 , (zPos_right_dif - 0.62)*-1],

	[ x_pos_tail_dif-6,  yPos_tail_top_dif+1.390625 , (zPos_right_dif - 0.62)*-1],
	[ x_pos_tail_dif-6,  yPos_tail_top_dif+1.390625 , zPos_right_dif - 0.62],
	[ x_pos_tail_dif-5.37,  yPos_tail_top_dif+1.1875 , zPos_right_dif - 0.5],


	[ x_pos_tail_dif-6,  yPos_tail_top_dif+1.390625 , zPos_right_dif - 0.62],
	[ x_pos_tail_dif-6,  yPos_tail_top_dif+1.390625 , (zPos_right_dif - 0.62)*-1],
	[ x_pos_tail_dif-6.5,  yPos_tail_top_dif+1.5625 , (zPos_right_dif - 0.75)*-1],

	[ x_pos_tail_dif-6.5,  yPos_tail_top_dif+1.5625 , (zPos_right_dif - 0.75)*-1],
	[ x_pos_tail_dif-6.5,  yPos_tail_top_dif+1.5625 , zPos_right_dif - 0.75],
	[ x_pos_tail_dif-6,  yPos_tail_top_dif+1.390625 , zPos_right_dif - 0.62],


	[ x_pos_tail_dif-6.5,  yPos_tail_top_dif+1.5625 , zPos_right_dif - 0.75],
	[ x_pos_tail_dif-6.5,  yPos_tail_top_dif+1.5625 , (zPos_right_dif - 0.75)*-1],
	[ x_pos_tail_dif-8,  yPos_tail_top_dif+2.09375 , (zPos_right_dif - 1.25)*-1],

	[ x_pos_tail_dif-8,  yPos_tail_top_dif+2.09375 , (zPos_right_dif - 1.25)*-1],
	[ x_pos_tail_dif-8,  yPos_tail_top_dif+2.09375 , zPos_right_dif - 1.25],
	[ x_pos_tail_dif-6.5,  yPos_tail_top_dif+1.5625 , zPos_right_dif - 0.75], 


	[ x_pos_tail_dif-8,  yPos_tail_top_dif+2.09375 , zPos_right_dif - 1.25],
	[ x_pos_tail_dif-8,  yPos_tail_top_dif+2.09375 , (zPos_right_dif - 1.25)*-1],
	[ x_pos_tail_dif-8.62,  yPos_tail_top_dif+2.328125 , (zPos_right_dif - 1.5)*-1],

	[ x_pos_tail_dif-8.62,  yPos_tail_top_dif+2.328125 , (zPos_right_dif - 1.5)*-1],
	[ x_pos_tail_dif-8.62,  yPos_tail_top_dif+2.328125 , zPos_right_dif - 1.5],
	[ x_pos_tail_dif-8,  yPos_tail_top_dif+2.09375 , zPos_right_dif - 1.25],


	[ x_pos_tail_dif-8.62,  yPos_tail_top_dif+2.328125 , zPos_right_dif - 1.5],
	[ x_pos_tail_dif-8.62,  yPos_tail_top_dif+2.328125 , (zPos_right_dif - 1.5)*-1],
	[ x_pos_tail_dif-9.37,  yPos_tail_top_dif+2.609375 , (zPos_right_dif - 1.87)*-1],

	[ x_pos_tail_dif-9.37,  yPos_tail_top_dif+2.609375 , (zPos_right_dif - 1.87)*-1],
	[ x_pos_tail_dif-9.37,  yPos_tail_top_dif+2.609375 , zPos_right_dif - 1.87],
	[ x_pos_tail_dif-8.62,  yPos_tail_top_dif+2.328125 , zPos_right_dif - 1.5],


	[ x_pos_tail_dif-9.37,  yPos_tail_top_dif+2.609375 , zPos_right_dif - 1.87],
	[ x_pos_tail_dif-9.37,  yPos_tail_top_dif+2.609375 , (zPos_right_dif - 1.87)*-1],
	[ x_pos_tail_dif-10.37,  yPos_tail_top_dif+3 , (zPos_right_dif - 2.5)*-1],

	[ x_pos_tail_dif-10.37,  yPos_tail_top_dif+3 , (zPos_right_dif - 2.5)*-1],
	[ x_pos_tail_dif-10.37,  yPos_tail_top_dif+3 , zPos_right_dif - 2.5],
	[ x_pos_tail_dif-9.37,  yPos_tail_top_dif+2.609375 , zPos_right_dif - 1.87],


	[ x_pos_tail_dif-10.37,  yPos_tail_top_dif+3 , zPos_right_dif - 2.5],
	[ x_pos_tail_dif-10.37,  yPos_tail_top_dif+3 , (zPos_right_dif - 2.5)*-1],
	[ x_pos_tail_dif-10.87,  yPos_tail_top_dif+3.1953125 , (zPos_right_dif - 2.87)*-1],

	[ x_pos_tail_dif-10.87,  yPos_tail_top_dif+3.1953125 , (zPos_right_dif - 2.87)*-1],
	[ x_pos_tail_dif-10.87,  yPos_tail_top_dif+3.1953125 , zPos_right_dif - 2.87],
	[ x_pos_tail_dif-10.37,  yPos_tail_top_dif+3 , zPos_right_dif - 2.5],


	[ x_pos_tail_dif-10.87,  yPos_tail_top_dif+3.1953125 , zPos_right_dif - 2.87],
	[ x_pos_tail_dif-10.87,  yPos_tail_top_dif+3.1953125 , (zPos_right_dif - 2.87)*-1],
	[ x_pos_tail_dif-12.12,  yPos_tail_top_dif+3.703125 , (zPos_right_dif - 4.12)*-1],

	[ x_pos_tail_dif-12.12,  yPos_tail_top_dif+3.703125 , (zPos_right_dif - 4.12)*-1],
	[ x_pos_tail_dif-12.12,  yPos_tail_top_dif+3.703125 , zPos_right_dif - 4.12],
	[ x_pos_tail_dif-10.87,  yPos_tail_top_dif+3.1953125 , zPos_right_dif - 2.87],


	[ x_pos_tail_dif-12.12,  yPos_tail_top_dif+3.703125 , zPos_right_dif - 4.12],
	[ x_pos_tail_dif-12.12,  yPos_tail_top_dif+3.703125 , (zPos_right_dif - 4.12)*-1],
	[ x_pos_tail_dif-12.5,  yPos_tail_top_dif+3.859375 , (zPos_right_dif - 4.62)*-1],

	[ x_pos_tail_dif-12.5,  yPos_tail_top_dif+3.859375 , (zPos_right_dif - 4.62)*-1],
	[ x_pos_tail_dif-12.5,  yPos_tail_top_dif+3.859375 , zPos_right_dif - 4.62],
	[ x_pos_tail_dif-12.12,  yPos_tail_top_dif+3.703125 , zPos_right_dif - 4.12],


	[ x_pos_tail_dif-12.5,  yPos_tail_top_dif+3.859375 , zPos_right_dif - 4.62],
	[ x_pos_tail_dif-12.5,  yPos_tail_top_dif+3.859375 , (zPos_right_dif - 4.62)*-1],
	[ x_pos_tail_dif-12.75,  yPos_tail_top_dif+3.9765625 , (zPos_right_dif - 5)*-1],

	[ x_pos_tail_dif-12.75,  yPos_tail_top_dif+3.9765625 , (zPos_right_dif - 5)*-1],
	[ x_pos_tail_dif-12.75,  yPos_tail_top_dif+3.9765625 , zPos_right_dif - 5],
	[ x_pos_tail_dif-12.5,  yPos_tail_top_dif+3.859375 , zPos_right_dif - 4.62],


	[ x_pos_tail_dif-12.75,  yPos_tail_top_dif+3.9765625 , zPos_right_dif - 5],
	[ x_pos_tail_dif-12.75,  yPos_tail_top_dif+3.9765625 , (zPos_right_dif - 5)*-1],
	[ x_pos_tail_dif-13.25,  yPos_tail_top_dif+4.171875 , (zPos_right_dif - 6)*-1],

	[ x_pos_tail_dif-13.25,  yPos_tail_top_dif+4.171875 , (zPos_right_dif - 6)*-1],
	[ x_pos_tail_dif-13.25,  yPos_tail_top_dif+4.171875 , zPos_right_dif - 6],
	[ x_pos_tail_dif-12.75,  yPos_tail_top_dif+3.9765625 , zPos_right_dif - 5],


	[ x_pos_tail_dif-13.25,  yPos_tail_top_dif+4.171875 , zPos_right_dif - 6],
	[ x_pos_tail_dif-13.25,  yPos_tail_top_dif+4.171875 , (zPos_right_dif - 6)*-1],
	[ x_pos_tail_dif-13.5,  yPos_tail_top_dif+4.28125 , (zPos_right_dif - 6.62)*-1],

	[ x_pos_tail_dif-13.5,  yPos_tail_top_dif+4.28125 , (zPos_right_dif - 6.62)*-1],
	[ x_pos_tail_dif-13.5,  yPos_tail_top_dif+4.28125 , zPos_right_dif - 6.62],
	[ x_pos_tail_dif-13.25,  yPos_tail_top_dif+4.171875 , zPos_right_dif - 6],


	[ x_pos_tail_dif-13.5,  yPos_tail_top_dif+4.28125 , zPos_right_dif - 6.62],
	[ x_pos_tail_dif-13.5,  yPos_tail_top_dif+4.28125 , (zPos_right_dif - 6.62)*-1],
	[ x_pos_tail_dif-13.75,  yPos_tail_top_dif+4.390625 , (zPos_right_dif - 7.5)*-1],

	[ x_pos_tail_dif-13.75,  yPos_tail_top_dif+4.390625 , (zPos_right_dif - 7.5)*-1],
	[ x_pos_tail_dif-13.75,  yPos_tail_top_dif+4.390625 , zPos_right_dif - 7.5],
	[ x_pos_tail_dif-13.5,  yPos_tail_top_dif+4.28125 , zPos_right_dif - 6.62],


	[ x_pos_tail_dif-13.75,  yPos_tail_top_dif+4.390625 , zPos_right_dif - 7.5],
	[ x_pos_tail_dif-13.75,  yPos_tail_top_dif+4.390625 , (zPos_right_dif - 7.5)*-1],
	[ x_pos_tail_dif-13.87,  yPos_tail_top_dif+4.4453125 , (zPos_right_dif - 8.25)*-1],

	[ x_pos_tail_dif-13.87,  yPos_tail_top_dif+4.4453125 , (zPos_right_dif - 8.25)*-1],
	[ x_pos_tail_dif-13.87,  yPos_tail_top_dif+4.4453125 , zPos_right_dif - 8.25],
	[ x_pos_tail_dif-13.75,  yPos_tail_top_dif+4.390625 , zPos_right_dif - 7.5],


	[ x_pos_tail_dif-13.87,  yPos_tail_top_dif+4.4453125 , zPos_right_dif - 8.25],
	[ x_pos_tail_dif-13.87,  yPos_tail_top_dif+4.4453125 , (zPos_right_dif - 8.25)*-1],
	[ x_pos_tail_dif-14,  yPos_tail_top_dif+4.5 , (zPos_right_dif - 9.62)*-1],

	[ x_pos_tail_dif-14,  yPos_tail_top_dif+4.5 , (zPos_right_dif - 9.62)*-1],
	[ x_pos_tail_dif-14,  yPos_tail_top_dif+4.5 , zPos_right_dif - 9.62],
	[ x_pos_tail_dif-13.87,  yPos_tail_top_dif+4.4453125 , zPos_right_dif - 8.25],


	[ x_pos_tail_dif-14,  yPos_tail_top_dif+4.5 , zPos_right_dif - 9.62],
	[ x_pos_tail_dif-14,  yPos_tail_top_dif+4.5 , (zPos_right_dif - 9.62)*-1],
	[ x_pos_tail_dif-14,  yPos_tail_top_dif+4.5 , (zPos_right_dif - 10)*-1],

	[ x_pos_tail_dif-14,  yPos_tail_top_dif+4.5 , (zPos_right_dif - 10)*-1],
	[ x_pos_tail_dif-14,  yPos_tail_top_dif+4.5 , zPos_right_dif - 10],
	[ x_pos_tail_dif-14,  yPos_tail_top_dif+4.5 , zPos_right_dif - 9.62],

]

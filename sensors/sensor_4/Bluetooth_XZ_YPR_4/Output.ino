
float rx, ry, rz;
float S = 0.00390625;
float _yaw,_pitch, _roll;
float q[4];
float  gx, gy, gz;
float fx,fz,fy;

boolean jumping = false;

float accel_jump = 0.6;

void output_angles()
{ 
  // Reset jumping
  jumping = false;
  
  
  _yaw = TO_DEG(yaw);
  _pitch = TO_DEG(pitch);
  _roll = TO_DEG(roll);
  Serial.println("---------------------------------------");
//  Serial.print("YAW: "); Serial.println(_yaw);
//  Serial.print("PITCH: "); Serial.println(_pitch);
//  Serial.print("ROLL: "); Serial.println(_roll);
  

  rx = accel[0] * S;
  ry = accel[1] * S;
  rz = accel[2] * S;

   
  // Calculate Quaternion to remove gravity from z axis
  // Get quaternions data
  float c1 = cos(yaw/2);
  float c2 = cos(pitch/2);
  float c3 = cos(roll/2);
  float s1 = sin(yaw/2);
  float s2 = sin(pitch/2);
  float s3 = sin(roll/2);
  q[0] = c1*c2*c3 - s1*s2*s3; // w
  q[1] = c1*s2*c3 - s1*c2*s3; // z
  q[2] = s1*s2*c3 + c1*c2*s3; // x
  q[3] = s1*c2*c3 + c1*s2*s3; // y
  // Get Gravity 
  gy = 2 * (q[1] * q[3] - q[0] * q[2]);
  gx = 2 * (q[0] * q[1] + q[2] * q[3]);
  gz = q[0] * q[0] - q[1] * q[1] - q[2] * q[2] + q[3] * q[3];
  

 
  
  // Substract gravity from axis
  fx = rx + gx;
  fy = ry + gy;
  fz = rz - gz;
  // If moving very slow ---> set to 0
 // if ( fx <= 0.05 && fx >= -0.05 ) { fx = 0;}

  
  // if fz is very small set it to 0
//  if (fz <= 0.99 && fz >= -0.99){
//    fz = 0;
//  }

//  Serial.print("ACCEL X: "); Serial.println(rx);
//  Serial.print("ACCEL Y: "); Serial.println(ry);
//  Serial.print("ACCEL Z: "); Serial.println(rz);

//  Serial.print("GRAVITYL X: "); Serial.println(gx);
//  Serial.print("GRAVITY Y: "); Serial.println(gy);
//  Serial.print("GRAVITY Z: "); Serial.println(gz);
//  
//  Serial.print("ACCEL - GRAVITY X: "); Serial.println(fx);
//  Serial.print("ACCEL - GRAVITY Y: "); Serial.println(fy);
//  Serial.print("ACCEL - GRAVITY Z: "); Serial.println(fz);

//  fz = fz*10;
//  gy = gy*-1;
//  fy = ry - gy;
//  fy = fy*10;
//      if (fz <= 5 && fz >= -5){
//    fz = 0;
//  }


  // Know which axes are detecting gravity
  // X Axis
  if (gx >= 0.60 || gx <= -0.60){
   // Serial.println("X Jump");
    if (fx >= accel_jump || fx <= -accel_jump){
      jumping = true;
    }
  }
  // Y Axis
  if(gy >= 0.60 || gy <= -0.60){
   // Serial.println("Y Jump");
    if (fy >= accel_jump || fy <= -accel_jump){
      jumping = true;
    }
  }
  // Z Axis
  if (gz >= 0.60 || gz <= -0.60){
   // Serial.println("Z Jump");
    if (fz >= accel_jump || fz <= -accel_jump){
      jumping = true;
    }
  }
  
  Serial.println("---------------------------------------");
  if(jumping == true){
    Serial.println("JUMP");
  } else {
    Serial.println("GROUND");
  }

//  Serial.print("gravity: ");
//  Serial.println(gz);
//  Serial.print("acceleration: ");
//  Serial.println(rz);
//  Serial.print("final accel: ");
//  Serial.print(fz);
  
  
//   Serial.print(fx); Serial.print(",");
//  Serial.print(fz); Serial.print(",");
//  Serial.print(_yaw); Serial.print(",");
//  Serial.print(_pitch); Serial.print(",");
//  Serial.print(_roll); Serial.println("");

  
  // Sending over bluetooth
  Serial1.print(fy); Serial1.print(",");
  Serial1.print(fz); Serial1.print(",");
  Serial1.print(_yaw); Serial1.print(",");
  Serial1.print(_pitch); Serial1.print(",");
  Serial1.print(_roll); Serial1.println("");
 
   //----------------------------------------------------------------
}






























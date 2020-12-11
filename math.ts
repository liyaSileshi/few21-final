/* 
Challenge 3: degrees to radians
your job is to write a function that takes a number
 in degrees and returns the value in radians.
The formula is: deg * PI / 180
*/
function toRadians(deg: number) {
  return deg * Math.PI / 180;
}

/* 
Challenge 5: radians to degrees
We also need a function to to convert radians into degrees.
The formula is: rad * 180 / PI
*/
function toDegrees(rad: number) {
  return rad * 180 /  Math.PI;
}

module.exports.toRadians = toRadians;
module.exports.toDegrees = toDegrees;
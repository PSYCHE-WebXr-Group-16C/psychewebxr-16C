// Step size to move user with mobile controls
var stepSize = 0.3

/* 
* Calculation to perform forward movement with mobile controls. 
* A portion of the code used to handle these calculations can be
* attributed to the following stackoverflow discussion:
* https://stackoverflow.com/questions/48726018/a-frame-move-forward-in-camera-direction
*/
export function handleUpCalculation(globalRotX, globalRotY, sX, sY, sZ) {
    let theta = globalRotX + Math.PI / 2
    let fi = globalRotY
    let z = Math.sin(theta) * Math.cos(fi) * stepSize
    let x = Math.sin(theta) * Math.sin(fi) * stepSize
    let y = Math.cos(theta) * stepSize

    var newX = sX - x; // New X Value
    var newY = sY - y; // New Y Value
    var newZ = sZ - z; // New Z Value

    return {newX, newY, newZ}
}

/* Calculation to perform backward movement with mobile controls */
export function handleDownCalculation(globalRotX, globalRotY, sX, sY, sZ){
    let theta = globalRotX + Math.PI / 2
    let fi = globalRotY
    let z = Math.sin(theta) * Math.cos(fi) * stepSize
    let x = Math.sin(theta) * Math.sin(fi) * stepSize
    let y = Math.cos(theta) * stepSize

    var newX = sX + x; // New X Value
    var newY = sY + y; // New Y Value
    var newZ = sZ + z; // New Z Value
    
    return {newX, newY, newZ}
}

/* Calculation to perform left movement with mobile controls */
export function handleLeftCalculation(globalRotX, globalRotY, sX, sY, sZ){
    let theta = globalRotX + Math.PI / 2
    let fi = globalRotY
    let z = Math.sin(theta) * Math.cos(fi) * stepSize // Forward Z Value
    let x = Math.sin(theta) * Math.sin(fi) * stepSize // Forward X Value
    let y = Math.cos(theta) * stepSize // Forward Y Value

    // Rotate the forward vector around the Y axis by 3π/2
    // to obtain a vector pointing left relative to the camera.
    var t = 3 * Math.PI / 2;
    var cosT = Math.cos(t);
    var sinT = Math.sin(t);
    var leftX = cosT * x + sinT * z;
    var leftZ = -sinT * x + cosT * z;

    var newX = sX + leftX; // New X Value
    var newY = sY; // New Y Value
    var newZ = sZ + leftZ; // New Z Value

    return {newX, newY, newZ}
}

/* Calculation to perform right movement with mobile controls */
export function handleRightCalculation(globalRotX, globalRotY, sX, sY, sZ){
    let theta = globalRotX + Math.PI / 2
    let fi = globalRotY
    let z = Math.sin(theta) * Math.cos(fi) * stepSize // Forward Z Value
    let x = Math.sin(theta) * Math.sin(fi) * stepSize // Forward X Value
    let y = Math.cos(theta) * stepSize // Forward Y Value

    // Same left-vector computation as in handleLeftCalculation.
    var t = 3 * Math.PI / 2;
    var cosT = Math.cos(t);
    var sinT = Math.sin(t);
    var leftX = cosT * x + sinT * z;
    var leftZ = -sinT * x + cosT * z;

    // Moving right is the inverse of moving left.
    var newX = sX - leftX; // New X Value
    var newY = sY; // New Y Value
    var newZ = sZ - leftZ; // New Z Value

    return {newX, newY, newZ}
}
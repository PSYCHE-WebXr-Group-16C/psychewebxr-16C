let movementCalculations = require('../math/MovementCalculations');

/* Following test cases are created based off the following set of 
* angles {0, pi/4, pi/2, 3pi/4, pi, 5pi/4, 2pi/2, 7pi/4} and 
* includes all combinations for the X and Y rotations. Tests include
* test cases for all methods in the movementControls class.
*/

/* Forward Movement Testing */
test('Test: Handle Forward Calculation #1', () => {
    var testValues = movementCalculations.handleUpCalculation(0,0,0,0,0)
    expect(testValues.newX).toBeCloseTo(0, 5); 
    expect(testValues.newY).toBeCloseTo(0, 5); 
    expect(testValues.newZ).toBeCloseTo(-0.3, 5); 
});

test('Test: Handle Forward Calculation #2', () => {
    var testValues = movementCalculations.handleUpCalculation(0,Math.PI/4,0,0,0)
    expect(testValues.newX).toBeCloseTo(-0.2121320344, 5); 
    expect(testValues.newY).toBeCloseTo(0, 5); 
    expect(testValues.newZ).toBeCloseTo(-0.2121320344, 5); 
});


test('Test: Handle Forward Calculation #3', () => {
  var testValues = movementCalculations.handleUpCalculation(0,Math.PI/2,0,0,0)
  expect(testValues.newX).toBeCloseTo(-0.3, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Forward Calculation #4', () => {
  var testValues = movementCalculations.handleUpCalculation(0,3*Math.PI/4,0,0,0)
  expect(testValues.newX).toBeCloseTo(-0.2121320344, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0.2121320344, 5); 
});


test('Test: Handle Forward Calculation #5', () => {
  var testValues = movementCalculations.handleUpCalculation(0,Math.PI,0,0,0)
  expect(testValues.newX).toBeCloseTo(0, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0.3, 5); 
});

test('Test: Handle Forward Calculation #6', () => {
  var testValues = movementCalculations.handleUpCalculation(0,5*Math.PI/4,0,0,0)
  expect(testValues.newX).toBeCloseTo(0.2121320344, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0.2121320344, 5); 
});


test('Test: Handle Forward Calculation #7', () => {
  var testValues = movementCalculations.handleUpCalculation(0,3*Math.PI/2,0,0,0)
  expect(testValues.newX).toBeCloseTo(0.3, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Forward Calculation #8', () => {
  var testValues = movementCalculations.handleUpCalculation(0,7*Math.PI/4,0,0,0)
  expect(testValues.newX).toBeCloseTo(0.2121320344, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(-0.2121320344, 5); 
});

test('Test: Handle Forward Calculation #9', () => {
  var testValues = movementCalculations.handleUpCalculation(Math.PI/4,0,0,0,0)
  expect(testValues.newX).toBeCloseTo(0, 5); 
  expect(testValues.newY).toBeCloseTo(0.2121320344, 5); 
  expect(testValues.newZ).toBeCloseTo(-0.212132034, 5); 
});

test('Test: Handle Forward Calculation #10', () => {
  var testValues = movementCalculations.handleUpCalculation(Math.PI/4,Math.PI/4,0,0,0)
  expect(testValues.newX).toBeCloseTo(-0.15, 5); 
  expect(testValues.newY).toBeCloseTo(0.2121320344, 5); 
  expect(testValues.newZ).toBeCloseTo(-0.15, 5); 
});


test('Test: Handle Forward Calculation #11', () => {
var testValues = movementCalculations.handleUpCalculation(Math.PI/4,Math.PI/2,0,0,0)
expect(testValues.newX).toBeCloseTo(-0.2121320344, 5); 
expect(testValues.newY).toBeCloseTo(0.2121320344, 5); 
expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Forward Calculation #12', () => {
var testValues = movementCalculations.handleUpCalculation(Math.PI/4,3*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(-0.15, 5); 
expect(testValues.newY).toBeCloseTo(0.2121320344, 5); 
expect(testValues.newZ).toBeCloseTo(0.15, 5); 
});


test('Test: Handle Forward Calculation #13', () => {
var testValues = movementCalculations.handleUpCalculation(Math.PI/4,Math.PI,0,0,0)
expect(testValues.newX).toBeCloseTo(0, 5); 
expect(testValues.newY).toBeCloseTo(0.2121320344, 5); 
expect(testValues.newZ).toBeCloseTo(0.2121320344, 5); 
});

test('Test: Handle Forward Calculation #14', () => {
var testValues = movementCalculations.handleUpCalculation(Math.PI/4,5*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(0.15, 5); 
expect(testValues.newY).toBeCloseTo(0.2121320344, 5); 
expect(testValues.newZ).toBeCloseTo(0.15, 5); 
});


test('Test: Handle Forward Calculation #15', () => {
var testValues = movementCalculations.handleUpCalculation(Math.PI/4,3*Math.PI/2,0,0,0)
expect(testValues.newX).toBeCloseTo(0.2121320344, 5); 
expect(testValues.newY).toBeCloseTo(0.2121320344, 5); 
expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Forward Calculation #16', () => {
var testValues = movementCalculations.handleUpCalculation(Math.PI/4,7*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(0.15, 5); 
expect(testValues.newY).toBeCloseTo(0.2121320344, 5); 
expect(testValues.newZ).toBeCloseTo(-0.15, 5); 
});

test('Test: Handle Forward Calculation #17', () => {
  var testValues = movementCalculations.handleUpCalculation(Math.PI/2,Math.PI/4,0,0,0)
  expect(testValues.newX).toBeCloseTo(0, 5); 
  expect(testValues.newY).toBeCloseTo(0.3, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Forward Calculation #18', () => {
  var testValues = movementCalculations.handleUpCalculation(Math.PI/2,7*Math.PI/2,0,0,0)
  expect(testValues.newX).toBeCloseTo(0, 5); 
  expect(testValues.newY).toBeCloseTo(0.3, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Forward Calculation #19', () => {
  var testValues = movementCalculations.handleUpCalculation(Math.PI/2,3*Math.PI/4,0,0,0)
  expect(testValues.newX).toBeCloseTo(0, 5); 
  expect(testValues.newY).toBeCloseTo(0.3, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Forward Calculation #20', () => {
  var testValues = movementCalculations.handleUpCalculation(Math.PI/2,Math.PI,0,0,0)
  expect(testValues.newX).toBeCloseTo(0, 5); 
  expect(testValues.newY).toBeCloseTo(0.3, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Forward Calculation #21', () => {
  var testValues = movementCalculations.handleUpCalculation(Math.PI/2,5*Math.PI/4,0,0,0)
  expect(testValues.newX).toBeCloseTo(0, 5); 
  expect(testValues.newY).toBeCloseTo(0.3, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Forward Calculation #22', () => {
  var testValues = movementCalculations.handleUpCalculation(Math.PI/2,7*Math.PI/4,0,0,0)
  expect(testValues.newX).toBeCloseTo(0, 5); 
  expect(testValues.newY).toBeCloseTo(0.3, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Forward Calculation #23', () => {
  var testValues = movementCalculations.handleUpCalculation(Math.PI/2,3*Math.PI/2,0,0,0)
  expect(testValues.newX).toBeCloseTo(0, 5); 
  expect(testValues.newY).toBeCloseTo(0.3, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Forward Calculation #24', () => {
  var testValues = movementCalculations.handleUpCalculation(Math.PI/2,7*Math.PI/4,0,0,0)
  expect(testValues.newX).toBeCloseTo(0, 5); 
  expect(testValues.newY).toBeCloseTo(0.3, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Forward Calculation #25', () => {
  var testValues = movementCalculations.handleUpCalculation(3*Math.PI/4,0,0,0,0)
  expect(testValues.newX).toBeCloseTo(0, 5); 
  expect(testValues.newY).toBeCloseTo(0.2121320344, 5); 
  expect(testValues.newZ).toBeCloseTo(0.212132034, 5); 
});

test('Test: Handle Forward Calculation #26', () => {
  var testValues = movementCalculations.handleUpCalculation(3*Math.PI/4,Math.PI/4,0,0,0)
  expect(testValues.newX).toBeCloseTo(0.15, 5); 
  expect(testValues.newY).toBeCloseTo(0.2121320344, 5); 
  expect(testValues.newZ).toBeCloseTo(0.15, 5); 
});


test('Test: Handle Forward Calculation #27', () => {
var testValues = movementCalculations.handleUpCalculation(3*Math.PI/4,Math.PI/2,0,0,0)
expect(testValues.newX).toBeCloseTo(0.2121320344, 5); 
expect(testValues.newY).toBeCloseTo(0.2121320344, 5); 
expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Forward Calculation #28', () => {
var testValues = movementCalculations.handleUpCalculation(3*Math.PI/4,3*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(0.15, 5); 
expect(testValues.newY).toBeCloseTo(0.2121320344, 5); 
expect(testValues.newZ).toBeCloseTo(-0.15, 5); 
});


test('Test: Handle Forward Calculation #29', () => {
var testValues = movementCalculations.handleUpCalculation(3*Math.PI/4,Math.PI,0,0,0)
expect(testValues.newX).toBeCloseTo(0, 5); 
expect(testValues.newY).toBeCloseTo(0.2121320344, 5); 
expect(testValues.newZ).toBeCloseTo(-0.2121320344, 5); 
});

test('Test: Handle Forward Calculation #30', () => {
var testValues = movementCalculations.handleUpCalculation(3*Math.PI/4,5*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(-0.15, 5); 
expect(testValues.newY).toBeCloseTo(0.2121320344, 5); 
expect(testValues.newZ).toBeCloseTo(-0.15, 5); 
});


test('Test: Handle Forward Calculation #31', () => {
var testValues = movementCalculations.handleUpCalculation(3*Math.PI/4,3*Math.PI/2,0,0,0)
expect(testValues.newX).toBeCloseTo(-0.2121320344, 5); 
expect(testValues.newY).toBeCloseTo(0.2121320344, 5); 
expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Forward Calculation #32', () => {
var testValues = movementCalculations.handleUpCalculation(3*Math.PI/4,7*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(-0.15, 5); 
expect(testValues.newY).toBeCloseTo(0.2121320344, 5); 
expect(testValues.newZ).toBeCloseTo(0.15, 5); 
});

test('Test: Handle Forward Calculation #33', () => {
  var testValues = movementCalculations.handleUpCalculation(Math.PI,0,0,0,0)
  expect(testValues.newX).toBeCloseTo(0, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0.3, 5); 
});

test('Test: Handle Forward Calculation #34', () => {
  var testValues = movementCalculations.handleUpCalculation(Math.PI,Math.PI/4,0,0,0)
  expect(testValues.newX).toBeCloseTo(0.2121320344, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0.2121320344, 5); 
});


test('Test: Handle Forward Calculation #35', () => {
var testValues = movementCalculations.handleUpCalculation(Math.PI,Math.PI/2,0,0,0)
expect(testValues.newX).toBeCloseTo(0.3, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Forward Calculation #36', () => {
var testValues = movementCalculations.handleUpCalculation(Math.PI,3*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(0.2121320344, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(-0.2121320344, 5); 
});


test('Test: Handle Forward Calculation #37', () => {
var testValues = movementCalculations.handleUpCalculation(Math.PI,Math.PI,0,0,0)
expect(testValues.newX).toBeCloseTo(0, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(-0.3, 5); 
});

test('Test: Handle Forward Calculation #38', () => {
var testValues = movementCalculations.handleUpCalculation(Math.PI,5*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(-0.2121320344, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(-0.2121320344, 5); 
});


test('Test: Handle Forward Calculation #39', () => {
var testValues = movementCalculations.handleUpCalculation(Math.PI,3*Math.PI/2,0,0,0)
expect(testValues.newX).toBeCloseTo(-0.3, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Forward Calculation #40', () => {
var testValues = movementCalculations.handleUpCalculation(Math.PI,7*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(-0.2121320344, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(0.2121320344, 5); 
});

test('Test: Handle Forward Calculation #41', () => {
  var testValues = movementCalculations.handleUpCalculation(5*Math.PI/4,0,0,0,0)
  expect(testValues.newX).toBeCloseTo(0, 5); 
  expect(testValues.newY).toBeCloseTo(-0.2121320344, 5); 
  expect(testValues.newZ).toBeCloseTo(0.212132034, 5); 
});

test('Test: Handle Forward Calculation #42', () => {
  var testValues = movementCalculations.handleUpCalculation(5*Math.PI/4,Math.PI/4,0,0,0)
  expect(testValues.newX).toBeCloseTo(0.15, 5); 
  expect(testValues.newY).toBeCloseTo(-0.2121320344, 5); 
  expect(testValues.newZ).toBeCloseTo(0.15, 5); 
});


test('Test: Handle Forward Calculation #43', () => {
var testValues = movementCalculations.handleUpCalculation(5*Math.PI/4,Math.PI/2,0,0,0)
expect(testValues.newX).toBeCloseTo(0.2121320344, 5); 
expect(testValues.newY).toBeCloseTo(-0.2121320344, 5); 
expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Forward Calculation #44', () => {
var testValues = movementCalculations.handleUpCalculation(5*Math.PI/4,3*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(0.15, 5); 
expect(testValues.newY).toBeCloseTo(-0.2121320344, 5); 
expect(testValues.newZ).toBeCloseTo(-0.15, 5); 
});


test('Test: Handle Forward Calculation #45', () => {
var testValues = movementCalculations.handleUpCalculation(5*Math.PI/4,Math.PI,0,0,0)
expect(testValues.newX).toBeCloseTo(0, 5); 
expect(testValues.newY).toBeCloseTo(-0.2121320344, 5); 
expect(testValues.newZ).toBeCloseTo(-0.2121320344, 5); 
});

test('Test: Handle Forward Calculation #46', () => {
var testValues = movementCalculations.handleUpCalculation(5*Math.PI/4,5*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(-0.15, 5); 
expect(testValues.newY).toBeCloseTo(-0.2121320344, 5); 
expect(testValues.newZ).toBeCloseTo(-0.15, 5); 
});


test('Test: Handle Forward Calculation #47', () => {
var testValues = movementCalculations.handleUpCalculation(5*Math.PI/4,3*Math.PI/2,0,0,0)
expect(testValues.newX).toBeCloseTo(-0.2121320344, 5); 
expect(testValues.newY).toBeCloseTo(-0.2121320344, 5); 
expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Forward Calculation #48', () => {
var testValues = movementCalculations.handleUpCalculation(5*Math.PI/4,7*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(-0.15, 5); 
expect(testValues.newY).toBeCloseTo(-0.2121320344, 5); 
expect(testValues.newZ).toBeCloseTo(0.15, 5); 
});

test('Test: Handle Forward Calculation #49', () => {
  var testValues = movementCalculations.handleUpCalculation(3*Math.PI/2,Math.PI/4,0,0,0)
  expect(testValues.newX).toBeCloseTo(0, 5); 
  expect(testValues.newY).toBeCloseTo(-0.3, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Forward Calculation #50', () => {
  var testValues = movementCalculations.handleUpCalculation(3*Math.PI/2,7*Math.PI/2,0,0,0)
  expect(testValues.newX).toBeCloseTo(0, 5); 
  expect(testValues.newY).toBeCloseTo(-0.3, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Forward Calculation #51', () => {
  var testValues = movementCalculations.handleUpCalculation(3*Math.PI/2,3*Math.PI/4,0,0,0)
  expect(testValues.newX).toBeCloseTo(0, 5); 
  expect(testValues.newY).toBeCloseTo(-0.3, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Forward Calculation #52', () => {
  var testValues = movementCalculations.handleUpCalculation(3*Math.PI/2,Math.PI,0,0,0)
  expect(testValues.newX).toBeCloseTo(0, 5); 
  expect(testValues.newY).toBeCloseTo(-0.3, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Forward Calculation #53', () => {
  var testValues = movementCalculations.handleUpCalculation(3*Math.PI/2,5*Math.PI/4,0,0,0)
  expect(testValues.newX).toBeCloseTo(0, 5); 
  expect(testValues.newY).toBeCloseTo(-0.3, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Forward Calculation #54', () => {
  var testValues = movementCalculations.handleUpCalculation(3*Math.PI/2,7*Math.PI/4,0,0,0)
  expect(testValues.newX).toBeCloseTo(0, 5); 
  expect(testValues.newY).toBeCloseTo(-0.3, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Forward Calculation #55', () => {
  var testValues = movementCalculations.handleUpCalculation(3*Math.PI/2,3*Math.PI/2,0,0,0)
  expect(testValues.newX).toBeCloseTo(0, 5); 
  expect(testValues.newY).toBeCloseTo(-0.3, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Forward Calculation #56', () => {
  var testValues = movementCalculations.handleUpCalculation(3*Math.PI/2,7*Math.PI/4,0,0,0)
  expect(testValues.newX).toBeCloseTo(0, 5); 
  expect(testValues.newY).toBeCloseTo(-0.3, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Forward Calculation #57', () => {
  var testValues = movementCalculations.handleUpCalculation(7*Math.PI/4,0,0,0,0)
  expect(testValues.newX).toBeCloseTo(0, 5); 
  expect(testValues.newY).toBeCloseTo(-0.2121320344, 5); 
  expect(testValues.newZ).toBeCloseTo(-0.212132034, 5); 
});

test('Test: Handle Forward Calculation #58', () => {
  var testValues = movementCalculations.handleUpCalculation(7*Math.PI/4,Math.PI/4,0,0,0)
  expect(testValues.newX).toBeCloseTo(-0.15, 5); 
  expect(testValues.newY).toBeCloseTo(-0.2121320344, 5); 
  expect(testValues.newZ).toBeCloseTo(-0.15, 5); 
});


test('Test: Handle Forward Calculation #59', () => {
var testValues = movementCalculations.handleUpCalculation(7*Math.PI/4,Math.PI/2,0,0,0)
expect(testValues.newX).toBeCloseTo(-0.2121320344, 5); 
expect(testValues.newY).toBeCloseTo(-0.2121320344, 5); 
expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Forward Calculation #60', () => {
var testValues = movementCalculations.handleUpCalculation(7*Math.PI/4,3*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(-0.15, 5); 
expect(testValues.newY).toBeCloseTo(-0.2121320344, 5); 
expect(testValues.newZ).toBeCloseTo(0.15, 5); 
});


test('Test: Handle Forward Calculation #61', () => {
var testValues = movementCalculations.handleUpCalculation(7*Math.PI/4,Math.PI,0,0,0)
expect(testValues.newX).toBeCloseTo(0, 5); 
expect(testValues.newY).toBeCloseTo(-0.2121320344, 5); 
expect(testValues.newZ).toBeCloseTo(0.2121320344, 5); 
});

test('Test: Handle Forward Calculation #62', () => {
var testValues = movementCalculations.handleUpCalculation(7*Math.PI/4,5*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(0.15, 5); 
expect(testValues.newY).toBeCloseTo(-0.2121320344, 5); 
expect(testValues.newZ).toBeCloseTo(0.15, 5); 
});


test('Test: Handle Forward Calculation #63', () => {
var testValues = movementCalculations.handleUpCalculation(7*Math.PI/4,3*Math.PI/2,0,0,0)
expect(testValues.newX).toBeCloseTo(0.2121320344, 5); 
expect(testValues.newY).toBeCloseTo(-0.2121320344, 5); 
expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Forward Calculation #64', () => {
var testValues = movementCalculations.handleUpCalculation(7*Math.PI/4,7*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(0.15, 5); 
expect(testValues.newY).toBeCloseTo(-0.2121320344, 5); 
expect(testValues.newZ).toBeCloseTo(-0.15, 5); 
});

/* Backward Movement Test Cases */
test('Test: Handle Backward Calculation #1', () => {
  var testValues = movementCalculations.handleDownCalculation(0,0,0,0,0)
  expect(testValues.newX).toBeCloseTo(0, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0.3, 5); 
});

test('Test: Handle Backward Calculation #2', () => {
  var testValues = movementCalculations.handleDownCalculation(0,Math.PI/4,0,0,0)
  expect(testValues.newX).toBeCloseTo(0.2121320344, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0.2121320344, 5); 
});


test('Test: Handle Backward Calculation #3', () => {
var testValues = movementCalculations.handleDownCalculation(0,Math.PI/2,0,0,0)
expect(testValues.newX).toBeCloseTo(0.3, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Backward Calculation #4', () => {
var testValues = movementCalculations.handleDownCalculation(0,3*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(0.2121320344, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(-0.2121320344, 5); 
});


test('Test: Handle Backward Calculation #5', () => {
var testValues = movementCalculations.handleDownCalculation(0,Math.PI,0,0,0)
expect(testValues.newX).toBeCloseTo(0, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(-0.3, 5); 
});

test('Test: Handle Backward Calculation #6', () => {
var testValues = movementCalculations.handleDownCalculation(0,5*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(-0.2121320344, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(-0.2121320344, 5); 
});


test('Test: Handle Backward Calculation #7', () => {
var testValues = movementCalculations.handleDownCalculation(0,3*Math.PI/2,0,0,0)
expect(testValues.newX).toBeCloseTo(-0.3, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Backward Calculation #8', () => {
var testValues = movementCalculations.handleDownCalculation(0,7*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(-0.2121320344, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(0.2121320344, 5); 
});

test('Test: Handle Backward Calculation #9', () => {
var testValues = movementCalculations.handleDownCalculation(Math.PI/4,0,0,0,0)
expect(testValues.newX).toBeCloseTo(0, 5); 
expect(testValues.newY).toBeCloseTo(-0.2121320344, 5); 
expect(testValues.newZ).toBeCloseTo(0.212132034, 5); 
});

test('Test: Handle Backward Calculation #10', () => {
var testValues = movementCalculations.handleDownCalculation(Math.PI/4,Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(0.15, 5); 
expect(testValues.newY).toBeCloseTo(-0.2121320344, 5); 
expect(testValues.newZ).toBeCloseTo(0.15, 5); 
});


test('Test: Handle Backward Calculation #11', () => {
var testValues = movementCalculations.handleDownCalculation(Math.PI/4,Math.PI/2,0,0,0)
expect(testValues.newX).toBeCloseTo(0.2121320344, 5); 
expect(testValues.newY).toBeCloseTo(-0.2121320344, 5); 
expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Backward Calculation #12', () => {
var testValues = movementCalculations.handleDownCalculation(Math.PI/4,3*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(0.15, 5); 
expect(testValues.newY).toBeCloseTo(-0.2121320344, 5); 
expect(testValues.newZ).toBeCloseTo(-0.15, 5); 
});


test('Test: Handle Backward Calculation #13', () => {
var testValues = movementCalculations.handleDownCalculation(Math.PI/4,Math.PI,0,0,0)
expect(testValues.newX).toBeCloseTo(0, 5); 
expect(testValues.newY).toBeCloseTo(-0.2121320344, 5); 
expect(testValues.newZ).toBeCloseTo(-0.2121320344, 5); 
});

test('Test: Handle Backward Calculation #14', () => {
var testValues = movementCalculations.handleDownCalculation(Math.PI/4,5*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(-0.15, 5); 
expect(testValues.newY).toBeCloseTo(-0.2121320344, 5); 
expect(testValues.newZ).toBeCloseTo(-0.15, 5); 
});


test('Test: Handle Backward Calculation #15', () => {
var testValues = movementCalculations.handleDownCalculation(Math.PI/4,3*Math.PI/2,0,0,0)
expect(testValues.newX).toBeCloseTo(-0.2121320344, 5); 
expect(testValues.newY).toBeCloseTo(-0.2121320344, 5); 
expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Backward Calculation #16', () => {
var testValues = movementCalculations.handleDownCalculation(Math.PI/4,7*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(-0.15, 5); 
expect(testValues.newY).toBeCloseTo(-0.2121320344, 5); 
expect(testValues.newZ).toBeCloseTo(0.15, 5); 
});

test('Test: Handle Backward Calculation #17', () => {
var testValues = movementCalculations.handleDownCalculation(Math.PI/2,Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(0, 5); 
expect(testValues.newY).toBeCloseTo(-0.3, 5); 
expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Backward Calculation #18', () => {
var testValues = movementCalculations.handleDownCalculation(Math.PI/2,7*Math.PI/2,0,0,0)
expect(testValues.newX).toBeCloseTo(0, 5); 
expect(testValues.newY).toBeCloseTo(-0.3, 5); 
expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Backward Calculation #19', () => {
var testValues = movementCalculations.handleDownCalculation(Math.PI/2,3*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(0, 5); 
expect(testValues.newY).toBeCloseTo(-0.3, 5); 
expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Backward Calculation #20', () => {
var testValues = movementCalculations.handleDownCalculation(Math.PI/2,Math.PI,0,0,0)
expect(testValues.newX).toBeCloseTo(0, 5); 
expect(testValues.newY).toBeCloseTo(-0.3, 5); 
expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Backward Calculation #21', () => {
var testValues = movementCalculations.handleDownCalculation(Math.PI/2,5*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(0, 5); 
expect(testValues.newY).toBeCloseTo(-0.3, 5); 
expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Backward Calculation #22', () => {
var testValues = movementCalculations.handleDownCalculation(Math.PI/2,7*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(0, 5); 
expect(testValues.newY).toBeCloseTo(-0.3, 5); 
expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Backward Calculation #23', () => {
var testValues = movementCalculations.handleDownCalculation(Math.PI/2,3*Math.PI/2,0,0,0)
expect(testValues.newX).toBeCloseTo(0, 5); 
expect(testValues.newY).toBeCloseTo(-0.3, 5); 
expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Backward Calculation #24', () => {
var testValues = movementCalculations.handleDownCalculation(Math.PI/2,7*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(0, 5); 
expect(testValues.newY).toBeCloseTo(-0.3, 5); 
expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Backward Calculation #25', () => {
var testValues = movementCalculations.handleDownCalculation(3*Math.PI/4,0,0,0,0)
expect(testValues.newX).toBeCloseTo(0, 5); 
expect(testValues.newY).toBeCloseTo(-0.2121320344, 5); 
expect(testValues.newZ).toBeCloseTo(-0.212132034, 5); 
});

test('Test: Handle Backward Calculation #26', () => {
var testValues = movementCalculations.handleDownCalculation(3*Math.PI/4,Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(-0.15, 5); 
expect(testValues.newY).toBeCloseTo(-0.2121320344, 5); 
expect(testValues.newZ).toBeCloseTo(-0.15, 5); 
});


test('Test: Handle Backward Calculation #27', () => {
var testValues = movementCalculations.handleDownCalculation(3*Math.PI/4,Math.PI/2,0,0,0)
expect(testValues.newX).toBeCloseTo(-0.2121320344, 5); 
expect(testValues.newY).toBeCloseTo(-0.2121320344, 5); 
expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Backward Calculation #28', () => {
var testValues = movementCalculations.handleDownCalculation(3*Math.PI/4,3*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(-0.15, 5); 
expect(testValues.newY).toBeCloseTo(-0.2121320344, 5); 
expect(testValues.newZ).toBeCloseTo(0.15, 5); 
});


test('Test: Handle Backward Calculation #29', () => {
var testValues = movementCalculations.handleDownCalculation(3*Math.PI/4,Math.PI,0,0,0)
expect(testValues.newX).toBeCloseTo(0, 5); 
expect(testValues.newY).toBeCloseTo(-0.2121320344, 5); 
expect(testValues.newZ).toBeCloseTo(0.2121320344, 5); 
});

test('Test: Handle Backward Calculation #30', () => {
var testValues = movementCalculations.handleDownCalculation(3*Math.PI/4,5*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(0.15, 5); 
expect(testValues.newY).toBeCloseTo(-0.2121320344, 5); 
expect(testValues.newZ).toBeCloseTo(0.15, 5); 
});


test('Test: Handle Backward Calculation #31', () => {
var testValues = movementCalculations.handleDownCalculation(3*Math.PI/4,3*Math.PI/2,0,0,0)
expect(testValues.newX).toBeCloseTo(0.2121320344, 5); 
expect(testValues.newY).toBeCloseTo(-0.2121320344, 5); 
expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Backward Calculation #32', () => {
var testValues = movementCalculations.handleDownCalculation(3*Math.PI/4,7*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(0.15, 5); 
expect(testValues.newY).toBeCloseTo(-0.2121320344, 5); 
expect(testValues.newZ).toBeCloseTo(-0.15, 5); 
});

test('Test: Handle Backward Calculation #33', () => {
var testValues = movementCalculations.handleDownCalculation(Math.PI,0,0,0,0)
expect(testValues.newX).toBeCloseTo(0, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(-0.3, 5); 
});

test('Test: Handle Backward Calculation #34', () => {
var testValues = movementCalculations.handleDownCalculation(Math.PI,Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(-0.2121320344, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(-0.2121320344, 5); 
});


test('Test: Handle Backward Calculation #35', () => {
var testValues = movementCalculations.handleDownCalculation(Math.PI,Math.PI/2,0,0,0)
expect(testValues.newX).toBeCloseTo(-0.3, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Backward Calculation #36', () => {
var testValues = movementCalculations.handleDownCalculation(Math.PI,3*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(-0.2121320344, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(0.2121320344, 5); 
});


test('Test: Handle Backward Calculation #37', () => {
var testValues = movementCalculations.handleDownCalculation(Math.PI,Math.PI,0,0,0)
expect(testValues.newX).toBeCloseTo(0, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(0.3, 5); 
});

test('Test: Handle Backward Calculation #38', () => {
var testValues = movementCalculations.handleDownCalculation(Math.PI,5*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(0.2121320344, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(0.2121320344, 5); 
});


test('Test: Handle Backward Calculation #39', () => {
var testValues = movementCalculations.handleDownCalculation(Math.PI,3*Math.PI/2,0,0,0)
expect(testValues.newX).toBeCloseTo(0.3, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Forward Calculation #40', () => {
var testValues = movementCalculations.handleDownCalculation(Math.PI,7*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(0.2121320344, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(-0.2121320344, 5); 
});

test('Test: Handle Backward Calculation #41', () => {
var testValues = movementCalculations.handleDownCalculation(5*Math.PI/4,0,0,0,0)
expect(testValues.newX).toBeCloseTo(0, 5); 
expect(testValues.newY).toBeCloseTo(0.2121320344, 5); 
expect(testValues.newZ).toBeCloseTo(-0.212132034, 5); 
});

test('Test: Handle Backward Calculation #42', () => {
var testValues = movementCalculations.handleDownCalculation(5*Math.PI/4,Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(-0.15, 5); 
expect(testValues.newY).toBeCloseTo(0.2121320344, 5); 
expect(testValues.newZ).toBeCloseTo(-0.15, 5); 
});


test('Test: Handle Backward Calculation #43', () => {
var testValues = movementCalculations.handleDownCalculation(5*Math.PI/4,Math.PI/2,0,0,0)
expect(testValues.newX).toBeCloseTo(-0.2121320344, 5); 
expect(testValues.newY).toBeCloseTo(0.2121320344, 5); 
expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Backward Calculation #44', () => {
var testValues = movementCalculations.handleDownCalculation(5*Math.PI/4,3*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(-0.15, 5); 
expect(testValues.newY).toBeCloseTo(0.2121320344, 5); 
expect(testValues.newZ).toBeCloseTo(0.15, 5); 
});


test('Test: Handle Backward Calculation #45', () => {
var testValues = movementCalculations.handleDownCalculation(5*Math.PI/4,Math.PI,0,0,0)
expect(testValues.newX).toBeCloseTo(0, 5); 
expect(testValues.newY).toBeCloseTo(0.2121320344, 5); 
expect(testValues.newZ).toBeCloseTo(0.2121320344, 5); 
});

test('Test: Handle Backward Calculation #46', () => {
var testValues = movementCalculations.handleDownCalculation(5*Math.PI/4,5*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(0.15, 5); 
expect(testValues.newY).toBeCloseTo(0.2121320344, 5); 
expect(testValues.newZ).toBeCloseTo(0.15, 5); 
});


test('Test: Handle Backward Calculation #47', () => {
var testValues = movementCalculations.handleDownCalculation(5*Math.PI/4,3*Math.PI/2,0,0,0)
expect(testValues.newX).toBeCloseTo(0.2121320344, 5); 
expect(testValues.newY).toBeCloseTo(0.2121320344, 5); 
expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Backward Calculation #48', () => {
var testValues = movementCalculations.handleDownCalculation(5*Math.PI/4,7*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(0.15, 5); 
expect(testValues.newY).toBeCloseTo(0.2121320344, 5); 
expect(testValues.newZ).toBeCloseTo(-0.15, 5); 
});

test('Test: Handle Backward Calculation #49', () => {
var testValues = movementCalculations.handleDownCalculation(3*Math.PI/2,Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(0, 5); 
expect(testValues.newY).toBeCloseTo(0.3, 5); 
expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Backward Calculation #50', () => {
var testValues = movementCalculations.handleDownCalculation(3*Math.PI/2,7*Math.PI/2,0,0,0)
expect(testValues.newX).toBeCloseTo(0, 5); 
expect(testValues.newY).toBeCloseTo(0.3, 5); 
expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Backward Calculation #51', () => {
var testValues = movementCalculations.handleDownCalculation(3*Math.PI/2,3*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(0, 5); 
expect(testValues.newY).toBeCloseTo(0.3, 5); 
expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Backward Calculation #52', () => {
var testValues = movementCalculations.handleDownCalculation(3*Math.PI/2,Math.PI,0,0,0)
expect(testValues.newX).toBeCloseTo(0, 5); 
expect(testValues.newY).toBeCloseTo(0.3, 5); 
expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Backward Calculation #53', () => {
var testValues = movementCalculations.handleDownCalculation(3*Math.PI/2,5*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(0, 5); 
expect(testValues.newY).toBeCloseTo(0.3, 5); 
expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Backward Calculation #54', () => {
var testValues = movementCalculations.handleDownCalculation(3*Math.PI/2,7*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(0, 5); 
expect(testValues.newY).toBeCloseTo(0.3, 5); 
expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Backward Calculation #55', () => {
var testValues = movementCalculations.handleDownCalculation(3*Math.PI/2,3*Math.PI/2,0,0,0)
expect(testValues.newX).toBeCloseTo(0, 5); 
expect(testValues.newY).toBeCloseTo(0.3, 5); 
expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Backward Calculation #56', () => {
var testValues = movementCalculations.handleDownCalculation(3*Math.PI/2,7*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(0, 5); 
expect(testValues.newY).toBeCloseTo(0.3, 5); 
expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Backward Calculation #57', () => {
var testValues = movementCalculations.handleDownCalculation(7*Math.PI/4,0,0,0,0)
expect(testValues.newX).toBeCloseTo(0, 5); 
expect(testValues.newY).toBeCloseTo(0.2121320344, 5); 
expect(testValues.newZ).toBeCloseTo(0.212132034, 5); 
});

test('Test: Handle Backward Calculation #58', () => {
var testValues = movementCalculations.handleDownCalculation(7*Math.PI/4,Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(0.15, 5); 
expect(testValues.newY).toBeCloseTo(0.2121320344, 5); 
expect(testValues.newZ).toBeCloseTo(0.15, 5); 
});


test('Test: Handle Backward Calculation #59', () => {
var testValues = movementCalculations.handleDownCalculation(7*Math.PI/4,Math.PI/2,0,0,0)
expect(testValues.newX).toBeCloseTo(0.2121320344, 5); 
expect(testValues.newY).toBeCloseTo(0.2121320344, 5); 
expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Backward Calculation #60', () => {
var testValues = movementCalculations.handleDownCalculation(7*Math.PI/4,3*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(0.15, 5); 
expect(testValues.newY).toBeCloseTo(0.2121320344, 5); 
expect(testValues.newZ).toBeCloseTo(-0.15, 5); 
});


test('Test: Handle Backward Calculation #61', () => {
var testValues = movementCalculations.handleDownCalculation(7*Math.PI/4,Math.PI,0,0,0)
expect(testValues.newX).toBeCloseTo(0, 5); 
expect(testValues.newY).toBeCloseTo(0.2121320344, 5); 
expect(testValues.newZ).toBeCloseTo(-0.2121320344, 5); 
});

test('Test: Handle Backward Calculation #62', () => {
var testValues = movementCalculations.handleDownCalculation(7*Math.PI/4,5*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(-0.15, 5); 
expect(testValues.newY).toBeCloseTo(0.2121320344, 5); 
expect(testValues.newZ).toBeCloseTo(-0.15, 5); 
});


test('Test: Handle Backward Calculation #63', () => {
var testValues = movementCalculations.handleDownCalculation(7*Math.PI/4,3*Math.PI/2,0,0,0)
expect(testValues.newX).toBeCloseTo(-0.2121320344, 5); 
expect(testValues.newY).toBeCloseTo(0.2121320344, 5); 
expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Backward Calculation #64', () => {
var testValues = movementCalculations.handleDownCalculation(7*Math.PI/4,7*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(-0.15, 5); 
expect(testValues.newY).toBeCloseTo(0.2121320344, 5); 
expect(testValues.newZ).toBeCloseTo(0.15, 5); 
});

/* Left Movement Test Cases */
test('Test: Handle Left Calculation #1', () => {
  var testValues = movementCalculations.handleLeftCalculation(0,0,0,0,0)
  expect(testValues.newX).toBeCloseTo(-0.3, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Left Calculation #2', () => {
  var testValues = movementCalculations.handleLeftCalculation(0,Math.PI/4,0,0,0)
  expect(testValues.newX).toBeCloseTo(-0.2121320344, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0.2121320344, 5); 
});


test('Test: Handle Left Calculation #3', () => {
var testValues = movementCalculations.handleLeftCalculation(0,Math.PI/2,0,0,0)
expect(testValues.newX).toBeCloseTo(0, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(0.3, 5); 
});

test('Test: Handle Left Calculation #4', () => {
var testValues = movementCalculations.handleLeftCalculation(0,3*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(0.2121320344, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(0.2121320344, 5); 
});


test('Test: Handle Left Calculation #5', () => {
var testValues = movementCalculations.handleLeftCalculation(0,Math.PI,0,0,0)
expect(testValues.newX).toBeCloseTo(0.3, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Left Calculation #6', () => {
var testValues = movementCalculations.handleLeftCalculation(0,5*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(0.2121320344, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(-0.2121320344, 5); 
});


test('Test: Handle Left Calculation #7', () => {
var testValues = movementCalculations.handleLeftCalculation(0,3*Math.PI/2,0,0,0)
expect(testValues.newX).toBeCloseTo(0, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(-0.3, 5); 
});

test('Test: Handle Left Calculation #8', () => {
var testValues = movementCalculations.handleLeftCalculation(0,7*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(-0.2121320344, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(-0.2121320344, 5); 
});

test('Test: Handle Left Calculation #9', () => {
  var testValues = movementCalculations.handleLeftCalculation(Math.PI/4,0,0,0,0)
  expect(testValues.newX).toBeCloseTo(-0.212132034, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Left Calculation #10', () => {
  var testValues = movementCalculations.handleLeftCalculation(Math.PI/4,Math.PI/4,0,0,0)
  expect(testValues.newX).toBeCloseTo(-0.15, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0.15, 5); 
});


test('Test: Handle Left Calculation #11', () => {
var testValues = movementCalculations.handleLeftCalculation(Math.PI/4,Math.PI/2,0,0,0)
expect(testValues.newX).toBeCloseTo(0, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(0.2121320344, 5); 
});

test('Test: Handle Left Calculation #12', () => {
var testValues = movementCalculations.handleLeftCalculation(Math.PI/4,3*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(0.15, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(0.15, 5); 
});


test('Test: Handle Left Calculation #13', () => {
var testValues = movementCalculations.handleLeftCalculation(Math.PI/4,Math.PI,0,0,0)
expect(testValues.newX).toBeCloseTo(0.2121320344, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Left Calculation #14', () => {
var testValues = movementCalculations.handleLeftCalculation(Math.PI/4,5*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(0.15, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(-0.15, 5); 
});


test('Test: Handle Left Calculation #15', () => {
var testValues = movementCalculations.handleLeftCalculation(Math.PI/4,3*Math.PI/2,0,0,0)
expect(testValues.newX).toBeCloseTo(0, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(-0.2121320344, 5); 
});

test('Test: Handle Left Calculation #16', () => {
var testValues = movementCalculations.handleLeftCalculation(Math.PI/4,7*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(-0.15, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(-0.15, 5); 
});

test('Test: Handle Left Calculation #17', () => {
  var testValues = movementCalculations.handleLeftCalculation(Math.PI/2,Math.PI/4,0,0,0)
  expect(testValues.newX).toBeCloseTo(0, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Left Calculation #18', () => {
  var testValues = movementCalculations.handleLeftCalculation(Math.PI/2,7*Math.PI/2,0,0,0)
  expect(testValues.newX).toBeCloseTo(0, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Left Calculation #19', () => {
  var testValues = movementCalculations.handleLeftCalculation(Math.PI/2,3*Math.PI/4,0,0,0)
  expect(testValues.newX).toBeCloseTo(0, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Left Calculation #20', () => {
  var testValues = movementCalculations.handleLeftCalculation(Math.PI/2,Math.PI,0,0,0)
  expect(testValues.newX).toBeCloseTo(0, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Left Calculation #21', () => {
  var testValues = movementCalculations.handleLeftCalculation(Math.PI/2,5*Math.PI/4,0,0,0)
  expect(testValues.newX).toBeCloseTo(0, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Left Calculation #22', () => {
  var testValues = movementCalculations.handleLeftCalculation(Math.PI/2,7*Math.PI/4,0,0,0)
  expect(testValues.newX).toBeCloseTo(0, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Left Calculation #23', () => {
  var testValues = movementCalculations.handleLeftCalculation(Math.PI/2,3*Math.PI/2,0,0,0)
  expect(testValues.newX).toBeCloseTo(0, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Left Calculation #24', () => {
  var testValues = movementCalculations.handleLeftCalculation(Math.PI/2,7*Math.PI/4,0,0,0)
  expect(testValues.newX).toBeCloseTo(0, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Left Calculation #25', () => {
  var testValues = movementCalculations.handleLeftCalculation(3*Math.PI/4,0,0,0,0)
  expect(testValues.newX).toBeCloseTo(0.212132034, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Left Calculation #26', () => {
  var testValues = movementCalculations.handleLeftCalculation(3*Math.PI/4,Math.PI/4,0,0,0)
  expect(testValues.newX).toBeCloseTo(0.15, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(-0.15, 5); 
});


test('Test: Handle Left Calculation #27', () => {
var testValues = movementCalculations.handleLeftCalculation(3*Math.PI/4,Math.PI/2,0,0,0)
expect(testValues.newX).toBeCloseTo(0, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(-0.2121320344, 5); 
});

test('Test: Handle Left Calculation #28', () => {
var testValues = movementCalculations.handleLeftCalculation(3*Math.PI/4,3*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(-0.15, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(-0.15, 5); 
});


test('Test: Handle Left Calculation #29', () => {
var testValues = movementCalculations.handleLeftCalculation(3*Math.PI/4,Math.PI,0,0,0)
expect(testValues.newX).toBeCloseTo(-0.2121320344, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Left Calculation #30', () => {
var testValues = movementCalculations.handleLeftCalculation(3*Math.PI/4,5*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(-0.15, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(0.15, 5); 
});


test('Test: Handle Left Calculation #31', () => {
var testValues = movementCalculations.handleLeftCalculation(3*Math.PI/4,3*Math.PI/2,0,0,0)
expect(testValues.newX).toBeCloseTo(0, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(0.2121320344, 5); 
});

test('Test: Handle Left Calculation #32', () => {
var testValues = movementCalculations.handleLeftCalculation(3*Math.PI/4,7*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(0.15, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(0.15, 5); 
});

test('Test: Handle Left Calculation #33', () => {
  var testValues = movementCalculations.handleLeftCalculation(Math.PI,0,0,0,0)
  expect(testValues.newX).toBeCloseTo(0.3, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Left Calculation #34', () => {
  var testValues = movementCalculations.handleLeftCalculation(Math.PI,Math.PI/4,0,0,0)
  expect(testValues.newX).toBeCloseTo(0.2121320344, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(-0.2121320344, 5); 
});


test('Test: Handle Left Calculation #35', () => {
var testValues = movementCalculations.handleLeftCalculation(Math.PI,Math.PI/2,0,0,0)
expect(testValues.newX).toBeCloseTo(0, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(-0.3, 5); 
});

test('Test: Handle Left Calculation #36', () => {
var testValues = movementCalculations.handleLeftCalculation(Math.PI,3*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(-0.2121320344, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(-0.2121320344, 5); 
});


test('Test: Handle Left Calculation #37', () => {
var testValues = movementCalculations.handleLeftCalculation(Math.PI,Math.PI,0,0,0)
expect(testValues.newX).toBeCloseTo(-0.3, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Left Calculation #38', () => {
var testValues = movementCalculations.handleLeftCalculation(Math.PI,5*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(-0.2121320344, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(0.2121320344, 5); 
});


test('Test: Handle Left Calculation #39', () => {
var testValues = movementCalculations.handleLeftCalculation(Math.PI,3*Math.PI/2,0,0,0)
expect(testValues.newX).toBeCloseTo(0, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(0.3, 5); 
});

test('Test: Handle Left Calculation #40', () => {
var testValues = movementCalculations.handleLeftCalculation(Math.PI,7*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(0.2121320344, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(0.2121320344, 5); 
});

test('Test: Handle Left Calculation #41', () => {
  var testValues = movementCalculations.handleLeftCalculation(5*Math.PI/4,0,0,0,0)
  expect(testValues.newX).toBeCloseTo(0.212132034, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Left Calculation #42', () => {
  var testValues = movementCalculations.handleLeftCalculation(5*Math.PI/4,Math.PI/4,0,0,0)
  expect(testValues.newX).toBeCloseTo(0.15, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(-0.15, 5); 
});


test('Test: Handle Left Calculation #43', () => {
var testValues = movementCalculations.handleLeftCalculation(5*Math.PI/4,Math.PI/2,0,0,0)
expect(testValues.newX).toBeCloseTo(0, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(-0.2121320344, 5); 
});

test('Test: Handle Left Calculation #44', () => {
var testValues = movementCalculations.handleLeftCalculation(5*Math.PI/4,3*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(-0.15, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(-0.15, 5); 
});


test('Test: Handle Left Calculation #45', () => {
var testValues = movementCalculations.handleLeftCalculation(5*Math.PI/4,Math.PI,0,0,0)
expect(testValues.newX).toBeCloseTo(-0.2121320344, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Left Calculation #46', () => {
var testValues = movementCalculations.handleLeftCalculation(5*Math.PI/4,5*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(-0.15, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(0.15, 5); 
});


test('Test: Handle Left Calculation #47', () => {
var testValues = movementCalculations.handleLeftCalculation(5*Math.PI/4,3*Math.PI/2,0,0,0)
expect(testValues.newX).toBeCloseTo(0, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(0.2121320344, 5); 
});

test('Test: Handle Left Calculation #48', () => {
var testValues = movementCalculations.handleLeftCalculation(5*Math.PI/4,7*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(0.15, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(0.15, 5); 
});

test('Test: Handle Left Calculation #49', () => {
  var testValues = movementCalculations.handleLeftCalculation(3*Math.PI/2,Math.PI/4,0,0,0)
  expect(testValues.newX).toBeCloseTo(0, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Left Calculation #50', () => {
  var testValues = movementCalculations.handleLeftCalculation(3*Math.PI/2,7*Math.PI/2,0,0,0)
  expect(testValues.newX).toBeCloseTo(0, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Left Calculation #51', () => {
  var testValues = movementCalculations.handleLeftCalculation(3*Math.PI/2,3*Math.PI/4,0,0,0)
  expect(testValues.newX).toBeCloseTo(0, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Left Calculation #52', () => {
  var testValues = movementCalculations.handleLeftCalculation(3*Math.PI/2,Math.PI,0,0,0)
  expect(testValues.newX).toBeCloseTo(0, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Left Calculation #53', () => {
  var testValues = movementCalculations.handleLeftCalculation(3*Math.PI/2,5*Math.PI/4,0,0,0)
  expect(testValues.newX).toBeCloseTo(0, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Left Calculation #54', () => {
  var testValues = movementCalculations.handleLeftCalculation(3*Math.PI/2,7*Math.PI/4,0,0,0)
  expect(testValues.newX).toBeCloseTo(0, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Left Calculation #55', () => {
  var testValues = movementCalculations.handleLeftCalculation(3*Math.PI/2,3*Math.PI/2,0,0,0)
  expect(testValues.newX).toBeCloseTo(0, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Left Calculation #56', () => {
  var testValues = movementCalculations.handleLeftCalculation(3*Math.PI/2,7*Math.PI/4,0,0,0)
  expect(testValues.newX).toBeCloseTo(0, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Left Calculation #57', () => {
  var testValues = movementCalculations.handleLeftCalculation(7*Math.PI/4,0,0,0,0)
  expect(testValues.newX).toBeCloseTo(-0.212132034, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Left Calculation #58', () => {
  var testValues = movementCalculations.handleLeftCalculation(7*Math.PI/4,Math.PI/4,0,0,0)
  expect(testValues.newX).toBeCloseTo(-0.15, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0.15, 5); 
});


test('Test: Handle Left Calculation #59', () => {
var testValues = movementCalculations.handleLeftCalculation(7*Math.PI/4,Math.PI/2,0,0,0)
expect(testValues.newX).toBeCloseTo(0, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(0.2121320344, 5); 
});

test('Test: Handle Left Calculation #60', () => {
var testValues = movementCalculations.handleLeftCalculation(7*Math.PI/4,3*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(0.15, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(0.15, 5); 
});


test('Test: Handle Left Calculation #61', () => {
var testValues = movementCalculations.handleLeftCalculation(7*Math.PI/4,Math.PI,0,0,0)
expect(testValues.newX).toBeCloseTo(0.2121320344, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Left Calculation #62', () => {
var testValues = movementCalculations.handleLeftCalculation(7*Math.PI/4,5*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(0.15, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(-0.15, 5); 
});


test('Test: Handle Left Calculation #63', () => {
var testValues = movementCalculations.handleLeftCalculation(7*Math.PI/4,3*Math.PI/2,0,0,0)
expect(testValues.newX).toBeCloseTo(0, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(-0.2121320344, 5); 
});

test('Test: Handle Left Calculation #64', () => {
var testValues = movementCalculations.handleLeftCalculation(7*Math.PI/4,7*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(-0.15, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(-0.15, 5); 
});

/* Right Movement Test Cases */
test('Test: Handle Right Calculation #1', () => {
  var testValues = movementCalculations.handleRightCalculation(0,0,0,0,0)
  expect(testValues.newX).toBeCloseTo(0.3, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Right Calculation #2', () => {
  var testValues = movementCalculations.handleRightCalculation(0,Math.PI/4,0,0,0)
  expect(testValues.newX).toBeCloseTo(0.2121320344, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(-0.2121320344, 5); 
});


test('Test: Handle Right Calculation #3', () => {
var testValues = movementCalculations.handleRightCalculation(0,Math.PI/2,0,0,0)
expect(testValues.newX).toBeCloseTo(0, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(-0.3, 5); 
});

test('Test: Handle Right Calculation #4', () => {
var testValues = movementCalculations.handleRightCalculation(0,3*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(-0.2121320344, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(-0.2121320344, 5); 
});


test('Test: Handle Right Calculation #5', () => {
var testValues = movementCalculations.handleRightCalculation(0,Math.PI,0,0,0)
expect(testValues.newX).toBeCloseTo(-0.3, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Right Calculation #6', () => {
var testValues = movementCalculations.handleRightCalculation(0,5*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(-0.2121320344, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(0.2121320344, 5); 
});


test('Test: Handle Right Calculation #7', () => {
var testValues = movementCalculations.handleRightCalculation(0,3*Math.PI/2,0,0,0)
expect(testValues.newX).toBeCloseTo(0, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(0.3, 5); 
});

test('Test: Handle Right Calculation #8', () => {
var testValues = movementCalculations.handleRightCalculation(0,7*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(0.2121320344, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(0.2121320344, 5); 
});

test('Test: Handle Right Calculation #9', () => {
  var testValues = movementCalculations.handleRightCalculation(Math.PI/4,0,0,0,0)
  expect(testValues.newX).toBeCloseTo(0.212132034, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Right Calculation #10', () => {
  var testValues = movementCalculations.handleRightCalculation(Math.PI/4,Math.PI/4,0,0,0)
  expect(testValues.newX).toBeCloseTo(0.15, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(-0.15, 5); 
});


test('Test: Handle Right Calculation #11', () => {
var testValues = movementCalculations.handleRightCalculation(Math.PI/4,Math.PI/2,0,0,0)
expect(testValues.newX).toBeCloseTo(0, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(-0.2121320344, 5); 
});

test('Test: Handle Right Calculation #12', () => {
var testValues = movementCalculations.handleRightCalculation(Math.PI/4,3*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(-0.15, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(-0.15, 5); 
});


test('Test: Handle Right Calculation #13', () => {
var testValues = movementCalculations.handleRightCalculation(Math.PI/4,Math.PI,0,0,0)
expect(testValues.newX).toBeCloseTo(-0.2121320344, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Right Calculation #14', () => {
var testValues = movementCalculations.handleRightCalculation(Math.PI/4,5*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(-0.15, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(0.15, 5); 
});


test('Test: Handle Right Calculation #15', () => {
var testValues = movementCalculations.handleRightCalculation(Math.PI/4,3*Math.PI/2,0,0,0)
expect(testValues.newX).toBeCloseTo(0, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(0.2121320344, 5); 
});

test('Test: Handle Right Calculation #16', () => {
var testValues = movementCalculations.handleRightCalculation(Math.PI/4,7*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(0.15, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(0.15, 5); 
});

test('Test: Handle Right Calculation #17', () => {
  var testValues = movementCalculations.handleRightCalculation(Math.PI/2,Math.PI/4,0,0,0)
  expect(testValues.newX).toBeCloseTo(0, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Right Calculation #18', () => {
  var testValues = movementCalculations.handleRightCalculation(Math.PI/2,7*Math.PI/2,0,0,0)
  expect(testValues.newX).toBeCloseTo(0, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Right Calculation #19', () => {
  var testValues = movementCalculations.handleRightCalculation(Math.PI/2,3*Math.PI/4,0,0,0)
  expect(testValues.newX).toBeCloseTo(0, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Right Calculation #20', () => {
  var testValues = movementCalculations.handleRightCalculation(Math.PI/2,Math.PI,0,0,0)
  expect(testValues.newX).toBeCloseTo(0, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Right Calculation #21', () => {
  var testValues = movementCalculations.handleRightCalculation(Math.PI/2,5*Math.PI/4,0,0,0)
  expect(testValues.newX).toBeCloseTo(0, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Right Calculation #22', () => {
  var testValues = movementCalculations.handleRightCalculation(Math.PI/2,7*Math.PI/4,0,0,0)
  expect(testValues.newX).toBeCloseTo(0, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Right Calculation #23', () => {
  var testValues = movementCalculations.handleRightCalculation(Math.PI/2,3*Math.PI/2,0,0,0)
  expect(testValues.newX).toBeCloseTo(0, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Right Calculation #24', () => {
  var testValues = movementCalculations.handleRightCalculation(Math.PI/2,7*Math.PI/4,0,0,0)
  expect(testValues.newX).toBeCloseTo(0, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Right Calculation #25', () => {
  var testValues = movementCalculations.handleRightCalculation(3*Math.PI/4,0,0,0,0)
  expect(testValues.newX).toBeCloseTo(-0.212132034, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Right Calculation #26', () => {
  var testValues = movementCalculations.handleRightCalculation(3*Math.PI/4,Math.PI/4,0,0,0)
  expect(testValues.newX).toBeCloseTo(-0.15, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0.15, 5); 
});


test('Test: Handle Right Calculation #27', () => {
var testValues = movementCalculations.handleRightCalculation(3*Math.PI/4,Math.PI/2,0,0,0)
expect(testValues.newX).toBeCloseTo(0, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(0.2121320344, 5); 
});

test('Test: Handle Right Calculation #28', () => {
var testValues = movementCalculations.handleRightCalculation(3*Math.PI/4,3*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(0.15, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(0.15, 5); 
});


test('Test: Handle Right Calculation #29', () => {
var testValues = movementCalculations.handleRightCalculation(3*Math.PI/4,Math.PI,0,0,0)
expect(testValues.newX).toBeCloseTo(0.2121320344, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Right Calculation #30', () => {
var testValues = movementCalculations.handleRightCalculation(3*Math.PI/4,5*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(0.15, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(-0.15, 5); 
});


test('Test: Handle Right Calculation #31', () => {
var testValues = movementCalculations.handleRightCalculation(3*Math.PI/4,3*Math.PI/2,0,0,0)
expect(testValues.newX).toBeCloseTo(0, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(-0.2121320344, 5); 
});

test('Test: Handle Right Calculation #32', () => {
var testValues = movementCalculations.handleRightCalculation(3*Math.PI/4,7*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(-0.15, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(-0.15, 5); 
});

test('Test: Handle Right Calculation #33', () => {
  var testValues = movementCalculations.handleRightCalculation(Math.PI,0,0,0,0)
  expect(testValues.newX).toBeCloseTo(-0.3, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Right Calculation #34', () => {
  var testValues = movementCalculations.handleRightCalculation(Math.PI,Math.PI/4,0,0,0)
  expect(testValues.newX).toBeCloseTo(-0.2121320344, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0.2121320344, 5); 
});


test('Test: Handle Right Calculation #35', () => {
var testValues = movementCalculations.handleRightCalculation(Math.PI,Math.PI/2,0,0,0)
expect(testValues.newX).toBeCloseTo(0, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(0.3, 5); 
});

test('Test: Handle Right Calculation #36', () => {
var testValues = movementCalculations.handleRightCalculation(Math.PI,3*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(0.2121320344, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(0.2121320344, 5); 
});


test('Test: Handle Right Calculation #37', () => {
var testValues = movementCalculations.handleRightCalculation(Math.PI,Math.PI,0,0,0)
expect(testValues.newX).toBeCloseTo(0.3, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Right Calculation #38', () => {
var testValues = movementCalculations.handleRightCalculation(Math.PI,5*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(0.2121320344, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(-0.2121320344, 5); 
});


test('Test: Handle Right Calculation #39', () => {
var testValues = movementCalculations.handleRightCalculation(Math.PI,3*Math.PI/2,0,0,0)
expect(testValues.newX).toBeCloseTo(0, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(-0.3, 5); 
});

test('Test: Handle Right Calculation #40', () => {
var testValues = movementCalculations.handleRightCalculation(Math.PI,7*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(-0.2121320344, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(-0.2121320344, 5); 
});

test('Test: Handle Right Calculation #41', () => {
  var testValues = movementCalculations.handleRightCalculation(5*Math.PI/4,0,0,0,0)
  expect(testValues.newX).toBeCloseTo(-0.212132034, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Right Calculation #42', () => {
  var testValues = movementCalculations.handleRightCalculation(5*Math.PI/4,Math.PI/4,0,0,0)
  expect(testValues.newX).toBeCloseTo(-0.15, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0.15, 5); 
});


test('Test: Handle Right Calculation #43', () => {
var testValues = movementCalculations.handleRightCalculation(5*Math.PI/4,Math.PI/2,0,0,0)
expect(testValues.newX).toBeCloseTo(0, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(0.2121320344, 5); 
});

test('Test: Handle Right Calculation #44', () => {
var testValues = movementCalculations.handleRightCalculation(5*Math.PI/4,3*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(0.15, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(0.15, 5); 
});


test('Test: Handle Right Calculation #45', () => {
var testValues = movementCalculations.handleRightCalculation(5*Math.PI/4,Math.PI,0,0,0)
expect(testValues.newX).toBeCloseTo(0.2121320344, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Right Calculation #46', () => {
var testValues = movementCalculations.handleRightCalculation(5*Math.PI/4,5*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(0.15, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(-0.15, 5); 
});


test('Test: Handle Right Calculation #47', () => {
var testValues = movementCalculations.handleRightCalculation(5*Math.PI/4,3*Math.PI/2,0,0,0)
expect(testValues.newX).toBeCloseTo(0, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(-0.2121320344, 5); 
});

test('Test: Handle Right Calculation #48', () => {
var testValues = movementCalculations.handleRightCalculation(5*Math.PI/4,7*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(-0.15, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(-0.15, 5); 
});

test('Test: Handle Right Calculation #49', () => {
  var testValues = movementCalculations.handleRightCalculation(3*Math.PI/2,Math.PI/4,0,0,0)
  expect(testValues.newX).toBeCloseTo(0, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Right Calculation #50', () => {
  var testValues = movementCalculations.handleRightCalculation(3*Math.PI/2,7*Math.PI/2,0,0,0)
  expect(testValues.newX).toBeCloseTo(0, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Left Calculation #51', () => {
  var testValues = movementCalculations.handleRightCalculation(3*Math.PI/2,3*Math.PI/4,0,0,0)
  expect(testValues.newX).toBeCloseTo(0, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Right Calculation #52', () => {
  var testValues = movementCalculations.handleRightCalculation(3*Math.PI/2,Math.PI,0,0,0)
  expect(testValues.newX).toBeCloseTo(0, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Right Calculation #53', () => {
  var testValues = movementCalculations.handleRightCalculation(3*Math.PI/2,5*Math.PI/4,0,0,0)
  expect(testValues.newX).toBeCloseTo(0, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Right Calculation #54', () => {
  var testValues = movementCalculations.handleRightCalculation(3*Math.PI/2,7*Math.PI/4,0,0,0)
  expect(testValues.newX).toBeCloseTo(0, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Right Calculation #55', () => {
  var testValues = movementCalculations.handleRightCalculation(3*Math.PI/2,3*Math.PI/2,0,0,0)
  expect(testValues.newX).toBeCloseTo(0, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Right Calculation #56', () => {
  var testValues = movementCalculations.handleRightCalculation(3*Math.PI/2,7*Math.PI/4,0,0,0)
  expect(testValues.newX).toBeCloseTo(0, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Right Calculation #57', () => {
  var testValues = movementCalculations.handleRightCalculation(7*Math.PI/4,0,0,0,0)
  expect(testValues.newX).toBeCloseTo(0.212132034, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Right Calculation #58', () => {
  var testValues = movementCalculations.handleRightCalculation(7*Math.PI/4,Math.PI/4,0,0,0)
  expect(testValues.newX).toBeCloseTo(0.15, 5); 
  expect(testValues.newY).toBeCloseTo(0, 5); 
  expect(testValues.newZ).toBeCloseTo(-0.15, 5); 
});


test('Test: Handle Right Calculation #59', () => {
var testValues = movementCalculations.handleRightCalculation(7*Math.PI/4,Math.PI/2,0,0,0)
expect(testValues.newX).toBeCloseTo(0, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(-0.2121320344, 5); 
});

test('Test: Handle Right Calculation #60', () => {
var testValues = movementCalculations.handleRightCalculation(7*Math.PI/4,3*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(-0.15, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(-0.15, 5); 
});


test('Test: Handle Right Calculation #61', () => {
var testValues = movementCalculations.handleRightCalculation(7*Math.PI/4,Math.PI,0,0,0)
expect(testValues.newX).toBeCloseTo(-0.2121320344, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(0, 5); 
});

test('Test: Handle Right Calculation #62', () => {
var testValues = movementCalculations.handleRightCalculation(7*Math.PI/4,5*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(-0.15, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(0.15, 5); 
});


test('Test: Handle Right Calculation #63', () => {
var testValues = movementCalculations.handleRightCalculation(7*Math.PI/4,3*Math.PI/2,0,0,0)
expect(testValues.newX).toBeCloseTo(0, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(0.2121320344, 5); 
});

test('Test: Handle Right Calculation #64', () => {
var testValues = movementCalculations.handleRightCalculation(7*Math.PI/4,7*Math.PI/4,0,0,0)
expect(testValues.newX).toBeCloseTo(0.15, 5); 
expect(testValues.newY).toBeCloseTo(0, 5); 
expect(testValues.newZ).toBeCloseTo(0.15, 5); 
});



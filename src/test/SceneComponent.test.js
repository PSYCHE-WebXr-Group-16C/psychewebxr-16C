let movementCalculations = require('../math/MovementCalculations');

var globalRotXPreset = 0; // Default Value
var globalRotYPreset = 0; // Default Value


test('Test: Handle Forward Calculation #1', () => {
    expect(movementCalculations.handleUpCalculation(globalRotXPreset,globalRotYPreset,.08,1.7,.75)).toBe({newX:0,newY:0,newZ:0}); //Example Test Case
  });

test('Test: Handle Forward Calculation #1', () => {
  expect(movementCalculations.handleDownCalculation(globalRotXPreset,globalRotYPreset,.08,1.7,.75)).toBe({newX:0,newY:0,newZ:0}); //Example Test Case
});

test('Test: Handle Left Calculation #1', () => {
  expect(movementCalculations.handleLeftCalculation(globalRotXPreset,globalRotYPreset,.08,1.7,.75)).toBe({newX:0,newY:0,newZ:0}); //Example Test Case
});

test('Test: Handle Right Calculation #1', () => {
  expect(movementCalculations.handleRightCalculation(globalRotXPreset,globalRotYPreset,.08,1.7,.75)).toBe({newX:0,newY:0,newZ:0}); //Example Test Case
});
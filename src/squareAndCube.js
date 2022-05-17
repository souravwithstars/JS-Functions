const square = function (number) {
  return number * number;
};

const cube = function (number) {
  return number * square(number);
};

exports.square = square;
exports.cube = cube;

const formatSquareResult = function (number) {
  return "Square of " + number + " is " + square(number);
};

const formatCubeResult = function (number) {
  return "Cube of " + number + " is " + cube(number);
};

const main = function () {
  console.log(formatSquareResult(4));
  console.log(formatCubeResult(5));
};

// main();

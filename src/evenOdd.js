const isEven = function (number) {
  return number % 2 === 0;
};

const compliment = function (predicate) {
  return function (element) {
    return !predicate(element);
  };
};

const isOdd = compliment(isEven);

exports.isEven = isEven;
exports.isOdd = isOdd;

const formatIsEvenResult = function (number) {
  return number + " is " + (isEven(number) ? "Even" : "Odd");
};

const main = function () {
  console.log(formatIsEvenResult(2));
  console.log(formatIsEvenResult(3));
};

// main();
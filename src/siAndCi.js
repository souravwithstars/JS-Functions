const simpleInterest = function (principle, rateOfInterest, year) {
  let Interest = (principle * rateOfInterest * year) / 100;
  return Interest;
};

const compoundInterest = function (principle, rateOfInterest, year) {
  let amount = principle;
  let compoundInterest = 0;
  for (let yearCount = 0; yearCount < year; yearCount += 1) {
    let Interest = simpleInterest(amount, rateOfInterest, 1);
    compoundInterest = compoundInterest + Interest;
    amount = amount + Interest;
  }
  return compoundInterest;
};

exports.simpleInterest = simpleInterest;
exports.compoundInterest = compoundInterest;

const main = function () {
  const principle = 100;
  const rateOfInterest = 10;
  const year = 3;

  console.log("Principle :", principle);
  console.log("Rate of Interest :", rateOfInterest);
  console.log("Year :", year);
  console.log("Simple Interest :", simpleInterest(principle, rateOfInterest, year));
  console.log("Compound Interest :", compoundInterest(principle, rateOfInterest, year));
};

// main();

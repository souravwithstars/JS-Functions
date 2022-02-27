function isEven(number) {
    return number % 2 === 0;
};

function formatIsEvenResult(number) {
    return number + " is " + (isEven(number) ? "Even" : "Odd");
};

function main() {
    console.log(formatIsEvenResult(2));
    console.log(formatIsEvenResult(3));
};

main();
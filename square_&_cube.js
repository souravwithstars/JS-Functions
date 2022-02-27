function square(number) {
    return number * number;
};

function cube(number) {
    return number * square(number);
};

function formatSquareResult(number) {
    return "Square of " + number + " is " + square(number);
};

function formatCubeResult(number) {
    return "Cube of " + number + " is " + cube(number);
};

function main() {
    console.log(formatSquareResult(4));
    console.log(formatCubeResult(5));
};

main();
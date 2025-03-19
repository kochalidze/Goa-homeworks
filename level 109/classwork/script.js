// 2) შექმენით ფუნქცია რომელსაც გადაეცემა მინ 2 და მაქსიმუმ უთვალავი ელემენტი, პირველი არგუმენტი უნდა იყყოს ფუნქცია და დანარჩენი არგუმენტი ინტეჯერები, მაგ func(add, 1,7,2,1), add, minus, mulitply

function add(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}
function executeOperation(operation, ...numbers) {
    if (numbers.length < 2) {
        throw new Error("At least two numbers are required.");
    }

    return numbers.reduce((acc, current) => operation(acc, current));
}
console.log(executeOperation(add, 1, 7, 2, 1));
console.log(executeOperation(minus, 10, 2, 1));
console.log(executeOperation(multiply, 2, 3, 4));

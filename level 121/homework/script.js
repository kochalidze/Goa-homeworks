// 1
function greetWithDelay(name, callback) {
    setTimeout(() => {
        console.log(`Hello, ${name}!`);
        callback();
    }, 2000);
}
greetWithDelay("Nika", () => {
    console.log("Greeting completed.");
});



// 2
function processWithDelay(message, callback) {
    setTimeout(() => {
        console.log(message);
        callback();
    }, 2000);
}
processWithDelay("Processing...", () => {
    console.log("Process completed.");
});


// 3
function squareArrayWithDelay(numbers, callback) {
    setTimeout(() => {
        const squaredNumbers = numbers.map(num => num * num);
        callback(squaredNumbers);
    }, 2000);
}
squareArrayWithDelay([1, 2, 3, 4], squaredNumbers => {
    console.log(squaredNumbers); 
});



// 4
function changeColorWithDelay(color, callback) {
    setTimeout(() => {
        callback(color);
    }, 2000);
}
changeColorWithDelay("red", (color) => {
    document.body.style.color = color;
    console.log(`Color changed to ${color}.`);
});



// 5
function interactiveGreeting() {
    const name = prompt("Please enter your name:");
    setTimeout(() => {
        alert(`Welcome, ${name}! Thanks for your input.`);
    }, 3000);
}
interactiveGreeting();


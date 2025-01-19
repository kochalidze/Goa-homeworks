// Destructing:

// 1. Array Destructuring: Extract values from an array and assign them to variables in a single line of code.
const arr1 = [1,2,3,4,5];
const [a, b, c] = arr1;

// 2. Object Destructuring: Unpack properties from objects into distinct variables with concise syntax.
const person = {
    name: "John",
    age: 30,
    city: "New York"
};
const { name, age, city } = person;

// 3. Renaming Variables: Rename variables while destructuring to provide clearer names for extracted values.
const user = {
    name: "Alice",
    age: 25,
    country: "USA"
};

const { name: username, age: userAge, country: userCountry } = user;

// 4. Skipping Values: Skip over unwanted elements in an array or properties in an object during destructuring.
const arr = [1, 2, 3, 4, 5];
const [first, , third, , fifth] = arr;

// 5. Destructuring in Loops: Iterate over an array of objects and destructure each object's properties directly in the loop declaration.
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

for (const { name, age } of people) {
    console.log(`${name} is ${age} years old.`);
}

// 6. Combining Destructuring and Rest Syntax: Use both destructuring and rest syntax together for flexible assignments.
const person1 = {
    name: "John",
    age: 30,
    city: "New York",
    occupation: "Developer"
};
const { name1, age1, ...otherDetails } = person;

// 7. Skipping Elements: Given an array [1, 2, 3, 4, 5], extract only the first and last elements into variables, skipping the middle ones.
const arr2 = [1, 2, 3, 4, 5];

const [first1, , , , last] = arr;

// 8. Using Destructuring with Map and Filter: Write a function that filters an array of objects based on a condition and uses destructuring to access object properties within the filter function.
const products = [
    { name: "Laptop", price: 1000, inStock: true },
    { name: "Phone", price: 500, inStock: false },
    { name: "Tablet", price: 700, inStock: true }
];
const inStockProducts = products.filter(({ inStock }) => inStock);


// 9. Destructuring Arrays with Mixed Types: Given an array containing both primitive values and objects, extract properties from the objects using destructuring.
const mixedArray = [1, 2, { name: "John", age: 30 }, 4];
const [first2, second, { name2, age2 }] = mixedArray;

// 10. Manual Destructuring Function Rules
// Function Name: manualDestructing
// Input Parameter: Accepts one parameter obj, which should be an object to be destructured.
// Output: Returns an array containing the values of the properties of the input object.
// Usage: Usable by passing an object as an argument.
// Execution: Extracts the values of the properties from the input object manually, without using any built-in destructuring syntax.
// Returned Array: Contains the values of the properties of the input object in the same order as they are defined in the object.

function manualDestructing(obj) {
    const values = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            values.push(obj[key]);
        }
    }
    return values;
}

const person3 = {
    name: "Alice",
    age: 25,
    city: "New York"
};

const result = manualDestructing(person3);
console.log(result);

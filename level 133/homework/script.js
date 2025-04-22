
// 2) შექმენით 5-5 მაგალითი forEach, map და reduce მეთოდებზე. კომენტარებით ახსენით რა განსხვავებაა სამივე მეთოდში.
//  optional ეს მეთოდები გამოიყენეთ API-ზე (https://randomuser.me/api/);

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num));
numbers.forEach(num => console.log(num * num));
numbers.forEach((num, index) => console.log(`Index ${index}: ${num}`));
let sum = 0;
numbers.forEach(num => sum += num);
console.log("Sum:", sum);
const fruits = ["apple", "banana", "kiwi"];
fruits.forEach(fruit => fruit.split('').forEach(letter => console.log(letter)));


const doubled = numbers.map(num => num * 2);
console.log(doubled);
const strings = numbers.map(num => String(num));
console.log(strings);
const objArray = numbers.map(num => ({ value: num }));
console.log(objArray);
const upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits);
const withIndex = fruits.map((fruit, index) => ({ name: fruit, index }));
console.log(withIndex);



const total = numbers.reduce((acc, num) => acc + num, 0);
console.log("Total:", total);
const product = numbers.reduce((acc, num) => acc * num, 1);
console.log("Product:", product);
const max = numbers.reduce((acc, num) => num > acc ? num : acc);
console.log("Max:", max);
const sentence = fruits.reduce((acc, fruit) => acc + ", " + fruit);
console.log("Fruits:", sentence);
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(count);


fetch("https://randomuser.me/api/?results=5")
  .then(res => res.json())
  .then(data => {
    const users = data.results;
    users.forEach(user => console.log(user.name.first));
    const names = users.map(user => user.name.first + " " + user.name.last);
    console.log("Names:", names);
    const averageYear = users.reduce((acc, user) => acc + parseInt(user.dob.date.slice(0, 4)), 0) / users.length;
    console.log("Average Birth Year:", Math.round(averageYear));
  });

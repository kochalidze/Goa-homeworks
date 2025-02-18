// 1) შექმენით ოთკუთხედის კლასი სიგრძის და სიგანის ფროფერთით 
// და გეთერ მეთოდი მისი პერიმეტრისთვის

class FourCornered {
    constructor(length, width){
        this.length = length;
        this.width = width;
    }
    get p() {
        return (this.length + this.width) * 2
    }
}
const perimetr = new FourCornered(20, 30);
console.log('perimetr is: ', perimetr.p)


// 2) შექმენით ცხოველის კლასი,  შემდეგ მისი შთამომავალი ძუძუმწოვრის 
// კლასი და ძუძუმწოვრის შთამომაცალი ძაღლის კლასი. თითოეული კლასის 
// კონტრუკტორი უნდა იყოს მის მშობელ კლასზე დაფუძენბული.

class Animals {
    constructor(name){
        this.name = name;
    }
    get displayAnimal(){
        return `animal name: ${this.name}`
    }
}

class Descendant extends Animals {
    constructor(name, age){
        super(name);
        this.age = age;
    }
    get animal(){
        return `Descendant name: ${this.name}, age: ${this.age}`
    }
}
const myAnimal = new Descendant('jeky', 14);
console.log(myAnimal.displayAnimal);
console.log(myAnimal.animal)


// 3) შექმენით მანქანის და ელექტრონული მანქანის კლასი, გამოიყენეთ extends.
//  ელექტროუნული კლასში შეცვალეთ ერთი მისი მშობელის მეთოდი და მეორე
//  მეთოდზე დააშენეეთ ახალი ფუნქციონალი (edited)

class Car {
    constructor(brand, model, fuelLevel) {
        this.brand = brand; 
        this.model = model;
        this.fuelLevel = fuelLevel; 
    }
    drive() {
        if (this.fuelLevel > 0) {
            console.log(`${this.brand} ${this.model} მოძრაობს.`);
            this.fuelLevel -= 1;
        } else {
            console.log(`${this.brand} ${this.model} არ აქვს საწვავი.`);
        }
    }
}
class ElectricCar extends Car {
    constructor(brand, model, batteryLevel) {
        super(brand, model);
        this.batteryLevel = batteryLevel;
    }
    drive() {
        if (this.batteryLevel > 0) {
            console.log(`${this.brand} ${this.model} ელექტრონულად მოძრაობს.`);
            this.batteryLevel -= 1;
        } else {
            console.log(`${this.brand} ${this.model} არ აქვს ბატარეა.`);
        }
    }
    charge() {
        console.log(`${this.brand} ${this.model} ბატარეა დამუხტულია.`);
        this.batteryLevel = 100;
    }
}
const car1 = new Car("Toyota", "Corolla", 10);
car1.drive();
car1.drive();
const electricCar1 = new ElectricCar("Tesla", "Model 3", 5);
electricCar1.drive(); 
electricCar1.drive();
electricCar1.charge(); 
electricCar1.drive();

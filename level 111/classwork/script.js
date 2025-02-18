//1) შექმენით ოთკუთხედის კლასი სიგრძის და სიგანის ფროფერთით და გეთერ მეთოდი მისი პერიმეტრისთვის

class rectangle {
    constructor(width, heidth) {
        this.width = width;
        this.heidth = heidth;
    }
    get p() {
        return (this.width + this.heidth) * 2
    }
}
const per = new rectangle(15, 18);
console.log(per.p)


// 2) შექმენით ცხოველის კლასი,  შემდეგ მისი შთამომავალი ძუძუმწოვრის კლასი და ძუძუმწოვრის შთამომაცალი ძაღლის კლასი. თითოეული კლასის კონტრუკტორი უნდა იყოს მის მშობელ კლასზე დაფუძენბული.

class Animal {
    constructor(name) {
        this.name = name;
    }
    get a() {
        return `${this.name} is animal`
    }
}
class Mammal extends Animal {
    constructor(name, dog) {
        super(name);
        this.dog = dog;
    }
    get b() {
        return `${this.dog} is Mammal`
    }
}
const myAnimal = new Mammal('bob', 'dog');
console.log(myAnimal.a);
console.log(myAnimal.b);


// 3) შექმენით მანქანის და ელექტტონული მანქანის კლასი, გამოიყენეთ extends. ელექტროუნული კლასში შეცვალეთ ერთი მისი მშობელის მეთოდი და მეორე მეთოდზე დააშენეეთ ახალი ფუნქციონალი

class Car {
    constructor(brand, speed) {
      this.brand = brand;
      this.speed = speed;
    }
  
    start() {
      console.log(`${this.brand} is starting with a speed of ${this.speed} km/h.`);
    }
  
    refuel() {
      console.log(`${this.brand} is refueling.`);
    }
}
  
  class ElectricCar extends Car {
    constructor(brand, speed, batteryLevel) {
       super(brand, speed)
      this.batteryLevel = batteryLevel;
    }
    refuel() {
      console.log(`${this.brand} does not use fuel, it charges instead.`);
    }
    start() {
      super.start();
      console.log(`Battery level is at ${this.batteryLevel}%.`);
    }
}
const car = new Car('Toyota', 120);
car.start();
car.refuel();
const electricCar = new ElectricCar('Tesla', 150, 85);
electricCar.start();
electricCar.refuel();
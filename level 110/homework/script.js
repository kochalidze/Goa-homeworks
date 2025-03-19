// ) შექმნით ცხოველის, მაქანის და ადამიანისკლასი, თითოეული სამი property-თ 
// და ერთი მეთოდით. თითოეული კლასიდან შექმენით სამ-სამი -ობიექტი 
// და გამოიტანეთ ისინი კონსოლში.

class Animal {
    constructor(name, species, age) {
        this.name = name;
        this.species = species;
        this.age = age;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}
const animal1 = new Animal("Leo", "Lion", 5);
const animal2 = new Animal("Bella", "Dog", 3);
const animal3 = new Animal("Whiskers", "Cat", 2);
console.log(animal1);
console.log(animal2);
console.log(animal3);
animal1.speak();
animal2.speak();
animal3.speak();

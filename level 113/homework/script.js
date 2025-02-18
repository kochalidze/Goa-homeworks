// სავარჯიშო 1:
// დაამატე initials getter, რომელიც დააბრუნებს პიროვნების ინიციალებს. 
// თუ პიროვნება აქვს firstName და lastName properties, დააბრუნე მხოლოდ
//  პირველი ასო ორივედან.

class Person1 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get initials() {
        if (this.firstName && this.lastName) {
            return `${this.firstName[0].toUpperCase()}${this.lastName[0].toUpperCase()}`;
        } else {
            return "ინფორმაცია არასრულყოფილია";
        }
    }
}
const person1 = new Person("ლევან", "თაბაგარი");
console.log(person1.initials);
const person2 = new Person("ანა", "შავგულიძე");
console.log(person2.initials); 



// სავარჯიშო 2:
// დაამატე ageInMonths getter, რომელიც დააბრუნებს პიროვნების ასაკს თვეებში 
// (თუ პიროვნებას აქვს age property, რომელიც აჩვენებს მის ასაკს წლებით).
class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age; 
    }
    get ageInMonths() {
        if (typeof this.age === 'number' && this.age >= 0) {
            return this.age * 12;
        } else {
            return "ასაკი არ არის მითითებული სწორად";
        }
    }
}
const person3 = new Person("ლევან", 25);
console.log(`${person3.name}-ის ასაკი თვეებში:`, person3.ageInMonths);
const person4 = new Person("ანა", 0);
console.log(`${person4.name}-ის ასაკი თვეებში:`, person4.ageInMonths);


// სავარჯიშო 3:
// დაამატე isRetired getter, რომელიც დააბრუნებს true, 
// თუ პიროვნება არის პენსიონერი (60 წლის ან მეტი), და false თუ არა.

class Person3 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get isRetired() {
        if (typeof this.age === 'number' && this.age >= 0) {
            return this.age >= 60;
        } else {
            return false;
        }
    }
}
const person6 = new Person("ლევან", 65);
console.log(`${person6.name} პენსიონერია:`, person6.isRetired);
const person7 = new Person("ანა", 55);
console.log(`${person7.name} პენსიონერია:`, person7.isRetired);
const person8 = new Person("გიორგი", "ასაკი უცნობია");
console.log(`${person8.name} პენსიონერია:`, person8.isRetired); 



// სავარჯიშო 4:
// დაამატე formattedPrice getter, რომელიც დააბრუნებს პროდუქტის 
// ფასს ფორმატირებულად (მაგალითად, "$100.00").

class Product4 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    get formattedPrice() {
        if (typeof this.price === 'number' && this.price >= 0) {
            return `$${this.price.toFixed(2)}`; // ფორმატირება: $100.00
        } else {
            return "არასწორი ფასი";
        }
    }
}
const product1 = new Product("Laptop", 1000);
console.log(`${product1.name} ფასი:`, product1.formattedPrice);
const product2 = new Product("Phone", 799.5);
console.log(`${product2.name} ფასი:`, product2.formattedPrice);
const product3 = new Product("Headphones", "არასწორი ფასი");
console.log(`${product3.name} ფასი:`, product3.formattedPrice);



// ავარჯიშო 5:
// დაამატე discountPrice getter, რომელიც დააბრუნებს ფასის შეღავათიან ვერსიას

class Product {
    constructor(name, price, discount) {
        this.name = name;
        this.price = price;
        this.discount = discount;
    }
    get discountPrice() {
        if (typeof this.price === 'number' && this.price >= 0 && typeof this.discount === 'number' && this.discount >= 0 && this.discount <= 100) {
            const discountedPrice = this.price * (1 - this.discount / 100);
            return `$${discountedPrice.toFixed(2)}`; // ფორმატირება: $75.00
        } else {
            return "არასწორი ფასი ან ფასდაკლება";
        }
    }
}
const product11 = new Product("Laptop", 1000, 20);
console.log(`${product11.name} ფასდაკლებით:`, product11.discountPrice);
const product22 = new Product("Phone", 799.5, 10);
console.log(`${product22.name} ფასდაკლებით:`, product22.discountPrice);
const product33 = new Product("Headphones", 100, 50);
console.log(`${product33.name} ფასდაკლებით:`, product33.discountPrice);
const product44 = new Product("Smartwatch", -100, 10);
console.log(`${product44.name} ფასდაკლებით:`, product44.discountPrice);


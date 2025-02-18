// ***პირადი ველების შექმნა*** – შექმენი კლასი, რომელიც შეიცავს ერთ ან მეტ პირად 
// ველს და უზრუნველყოს მათი ინკაფსულაცია.

class Person {
    #name;
    #age;

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }
    getName() {
        return this.#name;
    }
    getAge() {
        return this.#age;
    }
    setName(name) {
        if (typeof name === 'string' && name.length > 0) {
            this.#name = name;
        } else {
            console.log("სახელი უნდა იყოს არაცარიელი ტექსტი");
        }
    }
    setAge(age) {
        if (typeof age === 'number' && age > 0) {
            this.#age = age;
        } else {
            console.log("ასაკი უნდა იყოს დადებითი რიცხვი");
        }
    }
}
const person = new Person("ანა", 25);
console.log("სახელი:", person.getName());
console.log("ასაკი:", person.getAge());




// ***getter და setter მეთოდები*** – დაამატე getter და setter მეთოდები პირადი 
// ველებისთვის, რათა მათთან წვდომა კონტროლდეს.
class Person {
    #name;
    #age;
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }
    get name() {
        return this.#name;
    }
    set name(newName) {
        if (typeof newName === 'string' && newName.length > 0) {
            this.#name = newName;
        } else {
            console.log("სახელი უნდა იყოს არაცარიელი ტექსტი");
        }
    }
    get age() {
        return this.#age;
    }
    set age(newAge) {
        if (typeof newAge === 'number' && newAge > 0) {
            this.#age = newAge;
        } else {
            console.log("ასაკი უნდა იყოს დადებითი რიცხვი");
        }
    }
}
const person1 = new Person("ანა", 25);
console.log("სახელი:", person1.name);
console.log("ასაკი:", person1.age);
person1.name = ""; 
person1.age = -5; 


// ***მხოლოდ წაკითხვადი ველი*** – შექმენი კლასი, სადაც პირადი ველი შესაძლებელია
//  მხოლოდ წაკითხვად იყოს და მისი შეცვლა კლასის გარედან შეუძლებელი იყოს.
class Person {
    #name;

    constructor(name) {
        this.#name = name;
    }
    get name() {
        return this.#name;
    }
}
const person2 = new Person("ანა");
console.log("სახელი:", person2.name);


// ***შექმენი BankAccount კლასი*** - რომელსაც ექნება პირადი ველი #balance. 
// დაამატე getBalance() მეთოდი, რომელიც აბრუნებს ბალანსს და deposit(amount) 
// მეთოდი, რომელიც ანგარიშზე თანხას დაამატებს. ბალანსზე პირდაპირი წვდომა 
// გარედან არ უნდა იყოს შესაძლებელი.
class BankAccount {
    #balance;

    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
    }
    getBalance() {
        return this.#balance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        } else {
            console.log("წარმოუდგენელი თანხა. თანხა უნდა იყოს დადებითი.");
        }
    }
}
const account = new BankAccount(1000);
console.log("ბალანსი:", account.getBalance());
account.deposit(500);
console.log("განახლებული ბალანსი:", account.getBalance());
account.deposit(-100);

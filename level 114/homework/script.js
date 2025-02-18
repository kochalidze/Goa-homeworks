//თერმომეტრი
// შექმენი ობიექტი, რომელიც ინახავს ტემპერატურას ცელსიუსში, 
// მაგრამ როდესაც იღებ მას (getter), აბრუნებს ფარენჰეიტში გადაყვანილ 
// მნიშვნელობას. setter უნდა იღებდეს მხოლოდ ცელსიუსში მნიშვნელობას.

class Temperature {
    constructor(celsius){
        this.celsius = celsius;
    }
    get Celsius(){
        return (this.celsius * 9/5) + 32;
    }
    set Celsius(celsius){
        if (typeof celsius === 'number') {
            this.celsius = celsius;
        } else {
            console.log("ტემპერატურა უნდა იყოს რიცხვი.");
        }
    }
}

const temperature = new Temperature(20);
console.log('ტემპერატურა: ', temperature.Celsius);


// სტუდენტის შეფასება
// შექმენი ობიექტი, სადაც setter იღებს სტუდენტის ქულას 
// (0-დან 100-მდე) და getter აბრუნებს შეფასებას (A, B, C, D, F).

class Student {
    constructor(){
        this._score = 0;
    }
        set score(value) {
        if (typeof value === 'number' && value >= 0 && value <= 100) {
            this._score = value;
        } else {
            console.log("გთხოვთ, შეიყვანოთ ქულა 0-დან 100-მდე.");
        }
    }
    get grade() {
        if (this._score >= 90) return "A";
        if (this._score >= 80) return "B";
        if (this._score >= 70) return "C";
        if (this._score >= 60) return "D";
        return "F";
    }
}

const student = new Student();
student.score = 60;
console.log('შეფასება ', student.grade )



// საიდუმლო პაროლი
// შექმენი ობიექტი, რომელიც ინახავს პაროლს. setter უნდა მიიღოს პაროლი 
// და შეინახოს დაშიფრული სახით, ხოლო getter უნდა აბრუნებდეს "*****"-ს 
// უსაფრთხოების მიზნით.

class SecretPassword {
    constructor() {
        this._encryptedPassword = "";
    }
    set password(value) {
        if (typeof value === 'string' && value.length >= 6) {
            this._encryptedPassword = btoa(value);
        } else {
            console.log("პაროლი უნდა იყოს მინიმუმ 6 სიმბოლო.");
        }
    }
    get password() {
        return "*****";
    }
    validatePassword(inputPassword) {
        return btoa(inputPassword) === this._encryptedPassword;
    }
}
const account = new SecretPassword();
account.password = "123321";
console.log("პაროლი:", account.password);
console.log("პაროლი სწორია?", account.validatePassword("123321")); 


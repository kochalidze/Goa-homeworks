//2) შექმენით პროგრამა რომელელიც მომხამრებელს შეამოაყვანინებს 
// ორ რიცხვს და გამოიტანს მათ ნამრავლს, თუ მომხმარებელმა 
// ოპერაციის შემდეგ შეიყვანა 'exit' მაშინ გამოიყვანეთ ის 
// პროგრამიდან თუ არადა გააგრძელეთ სანამ მომხმარებელი 'exit'-ს 
// არ შეიყვანს

const func = (a, b) => {
    while (true) {
        let a = Number(prompt('Enter first number: '));
        let b = Number(prompt('Enter second number: '));
        console.log(a * b)
        if (a === 'exit' || b === 'exit') {
            break
        }
    };
};
console.log(func());
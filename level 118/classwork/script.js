class Card {
    #pin;
    constructor(money, pin){
        this.money = money;
        this.#pin = pin;
    }
    get money() {
        return this._money;
    }
    set money(new_money) {
        if (new_money < 0){
            console.log('negative')
        }else{
            this._money = new_money;
        }
    }
    checkPin(inputPin) {
        if (inputPin === this.#pin) {
            console.log('Pin is correct');
        } else {
            console.log('Incorrect pin');
        }
    }
    withdraw(amount, pin) {
        this.checkPin(pin);
        if (this._money >= amount) {
            this._money -= amount;
            console.log(`Withdrawal successful! New balance: ${this._money}`);
        } else {
            console.log('Insufficient funds');
        }
    }
    deposit(amount) {
        if (amount < 0) {
            console.log('Deposit amount must be positive');
        } else {
            this._money += amount;
            console.log(`Deposit successful! New balance: ${this._money}`);
        }
    }
}

const myCard = new Card(1000, 1234);

myCard.deposit(500);
myCard.withdraw(200, 1234);
myCard.withdraw(500, 1234); 
myCard.withdraw(1000, 1234);
myCard.checkPin(1234);
myCard.checkPin(4321);
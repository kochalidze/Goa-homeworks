class Animal {
    constructor(name, img, age) {
        this.img = img;
        this.name = name;
        this.age = age;
    }
    get displayAnimal() {
        const animalDiv = document.createElement('div');
        animalDiv.classList.add('animalDiv');

        animalDiv.innerHTML = `
        <h1>${this.name}</h1>
        <img src="${this.img}">
        <p>age: ${this.age}</p>`;

        return animalDiv;
    }
    get getName() {
        return this.name;
    }
    get getAge() {
        return this.age;
    }
    get getImage() {
        return this.img;
    }
}

const animals = [
    new Animal('ლომი', 'https://tse3.mm.bing.net/th?id=OIP.UrSvCbBwvX82PVCitZXMfAHaEn&pid=Api&P=0&h=220', '20'),
    new Animal('ძაღლი', 'https://tse3.mm.bing.net/th?id=OIP.-EV4DOy8WzTke97XKhXlbAHaFp&pid=Api&P=0&h=220', '10'),
    new Animal('კატა', 'https://tse2.mm.bing.net/th?id=OIP.zPDzK6vOxdrbbrjb23Ee9QHaE8&pid=Api&P=0&h=220', '5'),
    new Animal('ლეოპარდი', 'https://tse2.mm.bing.net/th?id=OIP.SGtTv4skUfNx5DIGcE6aTwHaE7&pid=Api&P=0&h=220', '20')
];

const animalsList = document.getElementById('parent');
animals.forEach(animal => {
  animalsList.appendChild(animal.displayAnimal);
});

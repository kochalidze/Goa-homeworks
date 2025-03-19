//შექმენით ვებსაიტი, რომელიც თითოეულ დაკლიკებაზე გამოიტანს ახალ ძაღლის ფოტოს. 
// API: (https://dog.ceo/api/breeds/image/random) ( async/await )

document.getElementById('photo').addEventListener('click', getDogPhoto);
async function getDogPhoto() {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        const photoContainer = document.getElementById('photo-container');
        photoContainer.innerHTML = `<img src="${data.message}">`;
    } catch (error) {
        console.error(error);
    }
}


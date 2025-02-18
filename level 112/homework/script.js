// იგივე რაც DAY 111, თუმცა ამჯერად ამ ლოგიკით ვებსაიტი ააგეთ, 
// დამატებით თუ კლასები დაგჭირდებათ შეგიძლიათ გამოიყენოით.  (  დიზაინი არ დაგავიწყდეთ   ┐(￣ ヘ￣)┌    )

class Books {
    constructor(name, img) {
        this.img = img;
        this.name = name;
    }
    get displayBooks() {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('bookDiv');

        bookDiv.innerHTML = `
        <h1>${this.name}</h1>
        <img src="${this.img}">
        `;
        return bookDiv;
    }
    get getName() {
        return this.name;
    }
    get getImage() {
        return this.img;
    }
}

const books = [
    new Books('ჰარიპოტერის წიგნი', 'https://assets.teenvogue.com/photos/55830a7dc3f29bdf1f2b3b1b/master/w_1600/entertainment-books-2014-07-harrypotter-00.jpg',),
    new Books('ბედუინი', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1543837138i/43086513._SR1200,630_.jpg'),
];

const booksList = document.getElementById('parent');
books.forEach(i => {
  booksList.appendChild(i.displayBooks);
});

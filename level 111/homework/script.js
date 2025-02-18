//1) შექმენით წიგნების კლასი ორი ჩვეულებრივი მეთოდით, ერთი გეთერ მეტოით და სამი ფროფერთით.
//  შექმენით სამი წიგნის ჟანრის კლასი (მაგ. სათავგადასავლო, სატირა, ფანტაზია), სამივე მემკვიდრე წიგნის კლასის.
//  თითოეულს უნდა ჰქონდეს ერთი მშობელი კლასის მთლიანად შეცვლილი მეთოდი, მეორე ერთ ერთ მეთოდზე
//  დაშეენებული მეთოდი ( მშობელი კლასის მეთოდი + ახალი ფუნქციონალი ), და ერთი სუილად ახალი, უნიკლარი 
// მეთოდი. ასევე თითოეულს უნდა ჰქონდეს ორი ახალი ფროფერთი


class Book {
    constructor(title, author, year) {
      this._title = title;
      this._author = author;
      this._year = year;
    }
    get title() {
      return this._title;
    }
    getInfo() {
      return `${this.title} by ${this._author}, published in ${this._year}.`;
    }
  
    readBook() {
      return "You start reading the book...";
    }
  }
  class AdventureBook extends Book {
    getInfo() {
      return `Adventure awaits in '${this.title}' by ${this._author}!`;
    }
  
    readBook() {
      const parentMessage = super.readBook();
      return `${parentMessage} You embark on a thrilling adventure!`;
    }
  
    exploreMap() {
      return "You are now exploring the mysterious map from the book.";
    }
    get difficultyLevel() {
      return "Intermediate";
    }
  
    get recommendedAge() {
      return 12;
    }
  }
  class SatireBook extends Book {
    getInfo() {
      return `Get ready for witty humor in '${this.title}' by ${this._author}.`;
    }
  
    readBook() {
      const parentMessage = super.readBook();
      return `${parentMessage} Prepare for sharp social commentary!`;
    }
  
    laughOutLoud() {
      return "You can't stop laughing at the absurd situations!";
    }
    get humorType() {
      return "Satirical";
    }
  
    get politicalReference() {
      return true;
    }
  }
  class FantasyBook extends Book {
    getInfo() {
      return `Enter the magical world of '${this.title}' by ${this._author}.`;
    }
  
    readBook() { 
      const parentMessage = super.readBook();
      return `${parentMessage} Magical creatures surround you!`;
    }
  
    castSpell() {
      return "You cast a powerful spell from the ancient book.";
    }
    get magicLevel() {
      return "High";
    }
  
    get worldName() {
      return "Eldoria";
    }
}
const adventureBook = new AdventureBook("Into the Wild", "John Doe", 2020);
console.log(adventureBook.getInfo());
console.log(adventureBook.readBook());
console.log(adventureBook.exploreMap());
  
const satireBook = new SatireBook("Political Circus", "Jane Roe", 2018);
console.log(satireBook.getInfo());
console.log(satireBook.readBook());
console.log(satireBook.laughOutLoud());

const fantasyBook = new FantasyBook("Mystic Lands", "Alex Smith", 2022);
console.log(fantasyBook.getInfo());
console.log(fantasyBook.readBook());
console.log(fantasyBook.castSpell());
  

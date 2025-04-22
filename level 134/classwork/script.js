// 2) გადმოგეცემათ დოლარების (ინტეჯერების) მასივი, შექმენით ახალი მასივი და მასში შეინახეთ ლარების ვერსია

const dolar = (num) => {
    const result = [];
    num.forEach(i => result.push(i));
    return result;
};

console.log(dolar([1,2,3,4,5]));


// 3) გადმოგეცემათ მასივი სიტყვების და შეინახეთ სხვა ცვლადში მხოლოდ პალინდრომები

const func2 = (arr) => {
    const palindromes = arr.filter(i => i === i.split('').reverse().join(''));
    return palindromes
}

console.log(func2(["level", "world", "radar", "python", "madam", "hello"]));


// 4) გადმოგეცემათ კრედიტ კარტის რიცცვები და გადააკეთეთ ეს მასივი რომ ჩანდეს მხოლოდ ამ კარტების ბოლოს 4 რიცხვები. (მაგ: ************5678)

const func3 = (card) => {
    const nums = card.map(i => "************" + i.slice(-4));
    return nums
};
console.log(func3([
  "1234567812345678",
  "9876543210987654",
  "1111222233334444"
]));


// 5) გამოგეცემათ მატრიცა და შექმენით ფუნქცია toObj - რომელიც გადააქცევს ამ მატრიცას ობიექტად, ( მატრიცაში თითოეულ მასივს ექნება 2 ელემენტი [key, value] )

const toObj = (matrix) => {
    const obj = {};
    matrix.forEach(pair => {
    const [key, value] = pair;
    obj[key] = value;
    });
    return obj;
}
const matrix = [
  ["name", "Kochalidze"],
  ["age", 30],
  ["country", "Georgia"]
];
console.log(toObj(matrix));


//6) შექმენით ფუნცია რომელსაც გადაეცემა ობიექტების მასივი ( ობიექტებს აქვთ სახელის და ქულის პროპერთიები ), თქვენი მიზანია დააბრუნოთ მასივი დასორტირებული სახელების მხოლოს. ( სტრინგების )
const getSortedNames = (array) => {
  return array
    .map(obj => obj.name)
    .sort();
}

console.log(getSortedNames([
  { name: "Kochalidze", score: 85 },
  { name: "Nino", score: 92 },
  { name: "Levan", score: 78 }
]));



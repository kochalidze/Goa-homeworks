// ქვნენაკრების შემოწმება
// დაწერე ფუნქცია, რომელიც შეამოწმებს, არის თუ არა ერთი ნაკრები მეორის ქვნენაკრები.
// მაგალითი:
// არისქვნენაკრები(new Set([1, 2]), new Set([1, 2, 3])); 
// // შედეგი: true 


const func1 = (set1, set2) => {
    for (let i of set1){
        if(!set2.has(i)){
            return false
        }
        return true
    }
}
const set1 = new Set([1, 2]);
const set2 = new Set([1, 2, 3]);
console.log(func1(set1, set2));




// რუკის ინვერტირება
// დაწერე ფუნქცია, რომელიც გასაღებებს და მნიშვნელობებს შეცვლის ადგილმონაცვლეობით რუკაში. თუ მნიშვნელობები მეორდება, დაიტოვე ბოლო გასაღები.
// მაგალითი:
// ინვერტირებულრუკა(new Map([['a', 1], ['b', 2], ['c', 1]])); 
// // შედეგი: Map {1 => 'c', 2 => 'b'}


const func2 = (map) => {
    const newMap = new Map();
    
    map.forEach((value, key) => {
        newMap.set(value, key);
    });
    
    return newMap;
}

const map = new Map([['a', 1], ['b', 2], ['c', 1]]);
const func = func2(map);
console.log(func)




// მაქსიმალური მნიშვნელობის გასაღებების პოვნა
// დაწერე ფუნქცია, რომელიც იპოვის ყველა გასაღებს რუკაში, რომელთაც აქვთ მაქსიმალური მნიშვნელობა.
// მაგალითი:
// მაქსიმალურისგასაღებები(new Map([['a', 5], ['b', 3], ['c', 5]])); 
// // შედეგი: ['a', 'c']
function maxKeys(map) {
    let maxVal = -Infinity;
    const keysWithMaxVal = [];
    map.forEach(value => {
        if (value > maxVal) {
            maxVal = value;
        }
    });
    map.forEach((value, key) => {
        if (value === maxVal) {
            keysWithMaxVal.push(key);
        }
    });

    return keysWithMaxVal;
}
const exampleMap = new Map([
    ['a', 5],
    ['b', 3],
    ['c', 5]
]);
const result = maxKeys(exampleMap);
console.log(result);

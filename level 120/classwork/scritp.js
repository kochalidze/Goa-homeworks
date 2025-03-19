// Set-ების დავალებები
// ნაკრებების გაერთიანება
// დაწერე ფუნქცია, რომელიც მიიღებს ნაკრებების მასივს და დააბრუნებს მათ გაერთიანებას.
// მაგალითი:
// ნაკრებებისგაერთიანება([new Set([1, 2]), new Set([2, 3]), new Set([3, 4])]); 
// // შედეგი: Set {1, 2, 3, 4}

function unionSets(setsArray) {
    const unionSet = new Set();
    setsArray.forEach(set => {
        set.forEach(value => {
            unionSet.add(value);
        });
    });

    return unionSet;
}
const sets = [new Set([1, 2]), new Set([2, 3]), new Set([3, 4])];
const resultSet = unionSets(sets);
console.log(resultSet);





// შექმენი ფუნქცია, რომელიც იპოვის ორ ნაკრებებს შორის სიმეტრიულ სხვაობას (ელემენტები, რომლებიც ერთ-ერთშია, მაგრამ არა ორივეში).
// მაგალითი:
// სიმეტრიულისხვაობა(new Set([1, 2, 3]), new Set([3, 4, 5]));
// // შედეგი: Set {1, 2, 4, 5}
function symmetricDifference(setA, setB) {
    const difference = new Set(setA);
    setB.forEach(value => {
        if (difference.has(value)) {
            difference.delete(value);
        } else {
            difference.add(value);
        }
    });

    return difference;
}
const set1 = new Set([1, 2, 3]);
const set2 = new Set([3, 4, 5]);
const result = symmetricDifference(set1, set2);
console.log(result);




// სიმბოლოების სიხშირე
// დაწერე ფუნქცია, რომელიც მიიღებს სტრინგს და დააბრუნებს რუკას, სადაც გასაღებები სიმბოლოებია, ხოლო მნიშვნელობები – მათი სიხშირეები.
// მაგალითი:
// სიმბოლოსიხშირე("hello"); 
// // შედეგი: Map {'h' => 1, 'e' => 1, 'l' => 2, 'o' => 1}

function symbolFrequency(str) {
    const frequencyMap = new Map();
    for (const char of str) {
        if (frequencyMap.has(char)) {
            frequencyMap.set(char, frequencyMap.get(char) + 1);
        } else {
            frequencyMap.set(char, 1);
        }
    }

    return frequencyMap;
}
const result2 = symbolFrequency("hello");
console.log(result2); 

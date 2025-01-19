//2) გავაკეთოთ ფუნქცია როემლსაც გადაეცემა ობიექტების მასივი და გამოაქვს 
// ყველა გასაღებ მნიშვნელობა შემდეგი ფორმატით: " key: value ".

const obj =[
    {name: 'Giga', age: 14},
    {name: 'Ana', age: 13},
    {name: 'Rezi', age: 13},
];

function func(objArr) {
    for (const i of objArr) {
        for (const j in i) {
            console.log(`${j}: ${i[j]}`);
        }
    }
}

func(obs);
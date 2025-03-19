// 1) სტუდენტების სახელებისა და ქულების შენახვა Map-ში
// აღწერა: შექმენით ფუნქცია, რომელიც მიიღებს სტუდენტების სიას (სახელები და ქულები) და Map-ს დააბრუნებს, სადაც სტუდენტების სახელები იქნება გასაღები, ხოლო მათი ქულები მნიშვნელობები.
// დავალების ამოცანა:

function createStudentMap(studentList) {
    const studentMap = new Map();
    studentList.forEach(student => {
        const [name, grade] = student;
        studentMap.set(name, grade);
    });
    return studentMap;
}
const students = [
    ["ნიკა", 85],
    ["მარი", 92],
    ["გიორგი", 78],
    ["თამარი", 88]
];
const studentGradesMap = createStudentMap(students);
console.log(studentGradesMap);


// 2) შექმენით ფუნქცია, რომელიც მასივიდან დუბლიკატ ელემენტებს წაშლის და ახალ უნიკალურ მასივს დააბრუნებს.
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
const arrayWithDuplicates = [1, 2, 3, 3, 4, 4, 5, 5, 6];
const uniqueArray = removeDuplicates(arrayWithDuplicates);
console.log(uniqueArray);


// 3) დაწერეთ ფუნქცია, რომელიც მიიღებს სტუდენტების ქულების Map-ს, შექმნის მისი ასლს, თითოეული სტუდენტის ქულას გაზრდის 5 ქულით და ასლ Map-ს დააბრუნებს.
function increaseGrades(studentGrades) {
    const updatedGrades = new Map();
    studentGrades.forEach((grade, name) => {
        updatedGrades.set(name, grade + 5);
    });

    return updatedGrades;
}
const originalGrades = new Map([
    ["ნიკა", 85],
    ["მარი", 92],
    ["გიორგი", 78],
    ["თამარი", 88]
]);
const increasedGrades = increaseGrades(originalGrades);
console.log(increasedGrades);

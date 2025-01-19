// // 1) შევქმნათ ფუნქცია, რომელიც დააბრუნებს გადაცემული მატრიცის ( 2D მასივის ) ჯამს. მაგ:
// // [[1,3],[1,4], [4,1],[2,2]] —> 18

// function sumMatrix(matrix) {
//     let sum = 0;
//     for (let i of matrix) {
//         for (let j of i) {
//             sum += matrix[i][j];
           
//         }
//     } 
//     return sum;
// }
// const matrix = [[1, 3], [1, 4], [4, 1], [2, 2]];
// console.log(sumMatrix(matrix));



// // 2) შევქმნათ ფუნქცია რომელიც გადაცემულ nxn მატრიცას გაუცვლის რიგებს და სვეტებს
// function func(matrix2) {
//     let arr = [];

//     for (let i = 0; i < matrix2.length; i++){
//         arr[i] = [];
//         for (let j = 0; j < matrix2.length; j++) {
//             arr[i][j] = matrix2[j][i];
//         }
//     }
//     return arr
// };

// let matrix2 = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];
// console.log(func(matrix2));



// // 3) შევქმნათ ფუნქცია რომელიც გადაცემულდ nXn მატრიცის დიაგონალურად განწყობილი ელემენტების 
// // ჯამს დააბრუნებს (უნდა დაბრუნდეს ორი რიცხვი). 

// function sumDiagonals(matrix) {
//     let mainDiagonalSum = 0;
//     let secondaryDiagonalSum = 0;

//     for (let i = 0; i < matrix.length; i++) {
//         mainDiagonalSum += matrix[i][i];
//         secondaryDiagonalSum += matrix[i][matrix.length - 1 - i];
//     }

//     return [mainDiagonalSum, secondaryDiagonalSum];
// }

// const matrix = [
//     [2, 3, 1],
//     [5, 6, 4],
//     [8, 9, 7]
// ];

// const [mainSum, secondarySum] = sumDiagonals(matrix);
// console.log(`მთავარი დიაგონალის ჯამი: ${mainSum}`);
// console.log(`გვერდითი დიაგონალის ჯამი: ${secondarySum}`);

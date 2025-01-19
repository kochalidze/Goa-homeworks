// 1) შემოგდით n და n ზომის მასივი. დაბეჭდეთ მასივის ორი უდიდესი ელემენტის ჯამი.
// მაგ 5, 18 12 40 1 19
// პასუხია 40+19=59.

function sumTwoLargest(arr) {
    let max1 = -Infinity;
    let max2 = -Infinity;
    
    for (let num of arr) {
      if (num > max1) {
        max2 = max1;
        max1 = num;
      } else if (num > max2) {
        max2 = num;
      }
    }
    
    return max1 + max2;
  }
  const array = [5, 18, 12, 40, 1, 19];
  console.log(sumTwoLargest(array));
  


// 2) შემოგდით n და n ზომის მასივი. თქვენი ამოცანაა იპოვოთ მასივში ყველაზე ბოლოს გამეორებული ელემენტი და დაბეჭდოთ იგი. თუ  ასეთი ელემენტი არ არსებობს დაბეჭდეთ რომ მასივში არცერთი ელემენტი არ მეორდება
// მაგ : 5, 1 3 4 1 3 12 
// პასუხია 3 (მასივში გამიმეორდა 1-იანი და 3-იანი თუმცა რადგან 3 უფრო გვიან გამეორდა ეგაა საძებნი ელემენტიც)     

function findLastRepeated(arr) {
    const seen = new Set();
    let lastRepeated = null;
    for (let i = arr.length - 1; i >= 0; i--) {
      if (seen.has(arr[i])) {
        lastRepeated = arr[i];
      } else {
        seen.add(arr[i]);
      }
    }
  
    return lastRepeated !== null ? lastRepeated : 'მასივში არცერთი ელემენტი არ მეორდება';
}

const array1 = [5, 1, 3, 4, 1, 3, 12];
console.log(findLastRepeated(array1));

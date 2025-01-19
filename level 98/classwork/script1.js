// 3) შექმენით ფუნქცია რომელსაც გადაეცემა სტრინგი და აბრუნებს სიხშირეების ცხრილს.

function getFrequencyTable(str) {
    const frequency = {};
  
    for (const char of str) {
      if (frequency[char]) {
        frequency[char] += 1;
      } else {
        frequency[char] = 1;
      }
    }
  
    return frequency;
  }

  const input = "hello world";
  console.log(getFrequencyTable(input));


function func(string) {
    const obj = {};
    for (const i of string) {
        if (obj[i]) {
            obj[i] += 1;
        }
        else {
            obj[i] = 1;
        }
    }
    return obj
}
console.log(func('Hello world'));

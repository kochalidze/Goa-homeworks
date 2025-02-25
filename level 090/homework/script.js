//1) შექმენით მანუალური სორტის ფუნქცია
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    
    // გადის მორგებული რიგით, სანამ არ დასრულდება ყველა პარამეტრი
    do {
        swapped = false;  // ცვლადი ინახავს, შეიცვალა თუ არა რამე რიგში
        // გადავდივართ მასივში და ვადარებთ ერთ მომდევნო ელემენტებს
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // გაცვლის შეყვანა თუ არასწორ განლაგებაში არიან
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;  // მარკირება რომ რაღაც შეიცვალა
            }
        }
        // ყოველი გავლენის შემდეგ ელემენტებს, რომლებიც უკვე სორტირებულია, აღარ ვამოწმებთ
        n--;
    } while (swapped); // თუ ელემენტებში არანაირი შეცვლა არ მოხდა, ნიშნავს რომ უკვე სორტირებულია

    return arr;  // დაბრუნება სორტირებული მასივით
}

// გამოყენება:
let array = [5, 3, 8, 4, 2];
console.log(bubbleSort(array));  // შედეგი: [2, 3, 4, 5, 8]

import { add } from './add.js';
import { subtract } from './subtract.js';
import { multiply } from './multiply.js';
import { divide } from './divide.js';

window.calculate = function (operation) {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  let result;

  switch (operation) {
    case 'add':
      result = add(num1, num2);
      break;
    case 'subtract':
      result = subtract(num1, num2);
      break;
    case 'multiply':
      result = multiply(num1, num2);
      break;
    case 'divide':
      result = divide(num1, num2);
      break;
    default:
      result = 'Invalid operation';
  }

  document.getElementById('result').innerText = `Result: ${result}`;
}

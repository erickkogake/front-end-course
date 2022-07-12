// switch

function calculate(number1, operator, number2) {
  let result = 0;

  switch (operator) {
    case 'soma':
      result = number1 + number2
      break
    case 'subt':
      result = number1 - number2
      break
    case 'mult':
      result = number1 * number2
      break
    case 'divi':
      result = number1 / number2
      break
    default:
      console.log('não foi implementado')
      break
    }
    return result
}

console.log(calculate(4,'mult',3))
console.log(calculate(2,'divi', 1))
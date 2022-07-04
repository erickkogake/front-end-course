// criar um aplicativo de frases motivacionais

//declarar uma função 
//function statement

function createPhrases() {
  console.log('Estudar é ótimo')
  console.log('paciência e persistência')
  console.log('Revisão é mãe da aprendizagem')
}

//executar uma função
//call, invoke, run, execute


createPhrases()


//function expression

//parameters our parâmetros

const sum = function (number1, number2) {
  console.log(number1 + number2)
}

sum(2, 5)
// // // console.log(number1) //não funcionará, pois não consegue acessar um valor dentro escopo da função

const sum1 = function(number1,number2) {
  let total = number1 * number2
  return total
}

let number1 = 34
let number2 = 25

sum1(34,25)

console.log(number1*number2)
console.log(sum1(34,25))
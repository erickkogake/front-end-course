// function callback
const person = {
  name: 'koga',
  age: 20,
  weight: 1.82,
  hobbys: [{
    play1: 'soccer',
    play2: 'tennis',
    play3: 'basketball'
  }],
  }



// const listNames = (person) => {
//    return person.hobbys 
// }

// console.log(listNames())

function Person(name) {
  this.name = name
  this.walk = function() {
    return this.name + ' está andando'
  } 
}

const mayk = new Person('Mayk');

console.log(mayk.walk())

//quantos caracteres tem um palavra, e quantos numeros tem uma conta

let nome = "paulinho"
console.log(nome.length)

let ano = 2022
console.log(String(ano).length)

//transformar um número com 2 casas decimais e trocar ponto por vírgula

let salario = 3556.5546
console.log(salario.toFixed(2).replace('.' , ','))

console.log(nome.replace('a' , '@'))

//Manipulando strings 

//procurando a palavra homem na frase

let phrase = 'Eu sou um grande homem'
console.log(phrase.includes('homem')) //retorna um boolean
console.log(phrase.includes('ums'))
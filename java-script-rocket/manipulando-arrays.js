//Manipulando Array

//Contar elementos de um array

console.log([
  'ola',
  {type: 'arrow'},
  function(){
    return 'olá'
  }
][1].type)

//transformar uma cadeia de caracteres em elementos de um array

let word = 'paralelepipedo'
Array.isArray(word).length

// console.log(Array.from(word))

let techs = ['js', 'java']

//adicionar um item no fim

techs.push('nodejs')
// console.log(techs)

// adicionar um item no começo

techs.unshift('python')
// console.log(techs)

// Remover do fim da array

techs.pop()

// console.log(techs)

// console.log(techs.slice(0,2))

techs.splice(1, 2)
console.log(techs)


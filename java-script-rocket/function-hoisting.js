//function hoisting

sayMyName();

function sayMyName(){
  return 10+10;
}

console.log(sayMyName())

//arrow function

const person = ['koga', 'joao', 'ferreira']
const seeYou = (person) => {return person}
console.log(seeYou(person[1]))


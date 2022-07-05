// 1 -
let nome = 'weight'
// 2 -
//console.log(typeof nome)

//3 - 

const person = {
    name:'Lucas',
    age:19,
    stars:10.6,  //float - type break number
    isPlayer: true
}

//4 -

//let student = {} //it's a object

// console.log(typeof student) 

//4.1 - 

let student1 = {
    name:'Lucas',
    age:19,
    weight: 1.82,
    stars:10.6,  //float - type break number
    isSubscribed: true
}

//4.2 -

console.log(`${student1.name} de idade ${student1.age}, pesa ${student1.weight}`)

//5 - 

const student3 = [{student1}]
console.log(student3[0].student1.name)
console.log(student3[0].student1.age)

//8- 

const student = {
    name:'koga',
    age:20,
    weight: 1.83,
    stars:10.2,  //float - type break number
    isSubscribed: true
}

student3[1] = student
console.log(student3)
//const student4 = [{student1},{student}]
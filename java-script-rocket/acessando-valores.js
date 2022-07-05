let date, adress, age

date = '02-05-2022';
adress = 'Londres';
age = 14;
console.log(`The date today is ${date}, i am in ${adress} and i am ${age} years old.`)
//numa variavel const, não consigo declarar mais de uma variavel dentro dela

const firstPerson = {
    name: 'Kogake',
    height: 1.82,
    age: 25,
    activities: {
        play1: 'videogame',
        play2: 'play tennis',
    }
}
//console.log(firstPerson)
//console.log(firstPerson.activities)

const animals = [
    'monkey',
    'horse',
    'fish',
    'elefant',
    {
        animalsFantastics: 'formiga'
    }
]

console.log(animals[2])
console.log(animals[4].animalsFantastics)
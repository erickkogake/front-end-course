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



const listNames = () => {
   return person.hobbys 
}

console.log(listNames())
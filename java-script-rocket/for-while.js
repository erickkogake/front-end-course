for(let gasolina = 5.99; gasolina < 12; gasolina++) {
    if(gasolina == 7.99) {
      break;
    }
    console.log(gasolina)
} 

// while


let calendario = 5;
while(calendario < 7) {
  calendario++;
  console.log(calendario)
}

//for...of 

let tv = 'samsung'
let eletrodomestico = ['tv', 'liquidificador', 'geladeira', 'secador']
for(let caracter of eletrodomestico) {
  if(caracter == 'sofá') {
    console.log(caracter)
  }
  
}

//for...in - faz um loop num objeto

let person = {
  name: 'wilso',
  age: 24,
  weight: 1.80,
}

for(let getObject in person) {
  console.log(getObject)
}






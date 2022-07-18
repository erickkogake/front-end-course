const notinhas = ['A', 'B', 'C', 'D', 'E']

function notas(notas) {
  if (notas < 60) {
    console.log(notinhas[4])
  } else if (notas > 60 && notas <= 69) {
    console.log(notinhas[3])
  } else if (notas > 69 && notas <= 79) {
    console.log(notinhas[2])
  } else if (notas > 79 && notas <= 89) {
    console.log(notinhas[1])
  } else if (notas > 89 && notas <= 100) {
    console.log(notinhas[0])
  }
}

notas(55)
notas(75)
notas(85)
notas(95)

//exercicio 2

const account = {
  receitas: [1500, 440],
  despesas: [1220, 721]
}

function soma(array) {
  let total = 0;
  for (let saldo of array) {

    total = total + saldo;
  }
  return total
}

function calculaConta() {
  const calculateReceitas = soma(account.receitas)
  const calculateDespesas = soma(account.despesas)

  let totalSaldo = calculateReceitas - calculateDespesas

  if(totalSaldo > 0) {
    return `Saldo positivo de ${totalSaldo}`
  } else if( totalSaldo < 0) {
    return `Saldo negativo de ${totalSaldo}`
  }
}

console.log(calculaConta())

//Celcius em fahrenheit 

// function fahrenheit(celcius) {
//  let F = celcius * 9/5 + 32;
//  return `Grau convertido de Celcius para Fahrenheit: ${F}°`;
// }

// function celcius(fahrenheit) {
//   let C = (fahrenheit - 32) * 5/9
//   return `Grau convertido de Farenheit para Celsius: ${C.toFixed(0)}°`;
// }

// console.log(fahrenheit(20))
// console.log(celcius(75))


function transforma(graus) {
  const celcius = graus.toUpperCase().includes('C')
  const fahrenheit = graus.toUpperCase().includes('F')

  if(!celcius && !fahrenheit) {
    throw new Error('Medição inexistente')
  }

  let C = 0;
  let F = 32;

  if(celcius) {
   let grauC = (F - 32) * 5/9 
   return grauC;
  }

  if(fahrenheit) {
    let grauF = C * 9/5 + 32;
    return grauF;
  }
}

try {
  transforma('30F')
} catch (error) {
  console.log(error)
}

console.log(transforma(32))
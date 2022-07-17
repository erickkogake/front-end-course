const notinhas = ['A','B','C','D','E']

function notas(notas) {
  if(notas < 60) {
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
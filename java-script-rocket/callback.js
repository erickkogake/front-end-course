// Funções aceitam qualquer tipo de dado como argumento

function imprimeDado(dado) {
  console.log(dado)
  console.log(dado())
}

imprimeDado(1)
imprimeDado('Olá mundo')
imprimeDado(true)

imprimeDado(function () {
  return 'Olá mundo'
})
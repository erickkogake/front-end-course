//throw - lancar / disparar

function sayMyName (name = '') {
  if(name === '') {
    throw 'Nome é obrigatório'
  } else {
    console.log('Pode seguir com a aplicação')
  }
  // console.log('Próximo nome') - esse console não funciona, pois tudo que vem depois da aplicação throw e for true, para. Apenas depois de aplicar try and catch que funciona.
}

//try/catch 

try {
  sayMyName('')
} catch(e) {
  console.log(e)
}

console.log('próximo nome')

function materialEscolar(m) {
  if(m === 'caneta') {
    throw 'Material escolar obrigatório'
  } else {
    console.log('Pode entrar na sala')
  }
}

try {
  materialEscolar('caneta')
  } catch (e){
    console.log(e)
}
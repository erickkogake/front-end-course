//Manipulando conteúdo
//value

const element = document.querySelector('input')

element.value = 'Chique no último'

console.log(element.value)

//alterando estilos

const css = document.querySelector('body')
css.style.backgroundColor = 'red'

//createElement

const div = document.createElement('div')
div.innerText = 'Olá Devs'

const body = document.querySelector('body')
body.append(div)
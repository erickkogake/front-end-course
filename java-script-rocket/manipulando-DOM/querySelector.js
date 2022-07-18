//querySelector() - bem versátil, faz buscas por qualquer elemento, de formato igual ao CSS buscando classes.

const element = document.querySelector('.name')
console.log(element)

const p = document.querySelector('[src]')

//querySelectorAll - busca por todos os elementos.

// além disso conseguimos utilizar o .ForEach por exemplo, com querySelectorAll.

p.ForEach(el => console.log(el))


const { index } = require("mathjs")

const escola = "cod3r"

//pegar o 4 caractere da string
console.log(escola.charAt(4))

//pegar o 2 caractere da string
console.log(escola.charAt(2))

//pegar o indice da string e traduzir em unicode
console.log(escola.charCodeAt(3))

//pegar o indice associado ao dígito informado
console.log(escola.indexOf('3'))

//para não imprimir o indice selecionado da string
console.log(escola.substring(1))

//imprime do indice a outro (limitador)
console.log(escola.substring(0,3))

//concatenando strings
console.log('Escola'.concat(escola).concat("!"))

//substituir o valor do indice da string
console.log(escola.replace(3, 'e'))
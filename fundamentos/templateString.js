//exemplos de interpolação

const nome = 'Rebeca'
const concatenacao = 'OLá ' + nome + '!'
console.log(concatenacao)


//exemplo2
const template = `
    OLá
    ${nome}!`
console.log(template)

//expressões..
console.log(`1 + 1 = ${1 + 1}`)

//função para converter para maisculo
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)
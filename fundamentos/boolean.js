let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!isAtivo)

isAtivo = 1
console.log(!!isAtivo)

isAtivo = 1
console.log(!!true)

isAtivo = 1
console.log(!true)

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = Infinity))
console.log(!!(isAtivo = true))
console.log(!!(isAtivo = 33))
console.log(!!(isAtivo = 0))

console.log('os falsos...')
console.log(!!0)
console.log(!!' ')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('para finalizar...')
console.log(('' || null || 0 || 'epa'))
console.log(!!('' || null || 0 || 'epa'))
console.log(('' || null || 0 || 'epa' || 123))
console.log(!!('' || null || 0 || 'epa' || 123))


let nome = ''
console.log(nome || 'Desconhecido')

nome = 'izaac'
console.log(nome || 'Desconhecido')
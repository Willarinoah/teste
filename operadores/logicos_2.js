const produtoFragil = true
const produtoAltoCusto = false


console.log(produtoFragil && produtoAltoCusto) // operação do tipo (E)
console.log(produtoFragil || produtoAltoCusto) // operação do tipo (OU)
console.log(produtoFragil != produtoAltoCusto) // operação do tipo (DIFERENTE)
console.log(!produtoFragil) // operação do tipo (NEGAÇÃO LOGICA)


// NÃO USAR DESTA FORMA!!!
// console.log(produtoFragil & produtoAltoCusto)
// console.log(produtoFragil | produtoAltoCusto)


// em javascript 0 segnifica false
// em javascript != 0 siguinifica true
 
// //truque!!
// console.log('truque...')
// console.log(!!false)
// console.log(!!true)
// console.log(!!0)
// console.log(!!0.000001)
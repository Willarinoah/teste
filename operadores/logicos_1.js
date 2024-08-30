const trabalho1 =false
const trabalho2 =false

const comprarTv50 = trabalho1 && trabalho2 // AND
const comprarTv40 = trabalho1 != trabalho2 // XOR
const tomarSorvete = trabalho1  || trabalho2 //OR 
// const ficarEmCasa = !trabalho1 && trabalho2
const ficarEmCasa = !tomarSorvete

console.log('Vamos comprara a TV de 50"?', comprarTv50)
console.log('Vamos comprara a TV de 40"?', comprarTv40)
console.log('Vamos tomar sorvete?', tomarSorvete)
console.log('Vamos ficara em casa? ', ficarEmCasa)
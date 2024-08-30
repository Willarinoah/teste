let a = 2 
let b = a

console.log(a, b)

a += 7 // 7 esta sendo acrescentado ao valor a 
console.log(a, b)

b -= 1 // 1 esta sendo retirado do valor b que foi definido como (let b = a) b tem o valor de a 
console.log(a, b)

b += 1
b *= 8
b /= 4
console.log(a, b)

let saudacao = 'Bom'
saudacao += ' dia'
saudacao += '!!!'
console.log(saudacao)

let x = 10
x += 10 // é a mesma coisa que x = x + 10
x -= 3 // é a mesma coisa que x = x - 3
x *= 3 // é a mesma coisa que x = x * 3
x /= 7 // é a mesma coisa que x = x / 7
x %= 2 // é a mesma coisa que x = x / 2
console.log(x)
// A luno faltou 18 vezes em um total de 223 aulas ao ano 
// Notas: 5.8, 8.1, 6.9 

// Oaluno foi aprovado?
// Média maior que 7 e fequência de 80%


// A luno faltou 18 vezes em um total de 223 aulas ao ano 
const totalAulas = 223
const faltas = 18

// Frequência
const frequancia = Math.round(1 - faltas / totalAulas) * 100
const temFrequenciaSufuciente = frequancia >= 80 //verificado se a Frequência é de 80%


// Notas: 5.8, 8.1, 6.9 
const nota1 = 5.8
const nota2 = 8.1
const nota3 = 6.9

// const media = Math.round(nota1 + nota2 + nota3) / 3
const media = (nota1 + nota2 + nota3) / 3
//Se vc usar Math.round vai transformar o valor da media em 7  então vai  aparecer em Aprovado? true e o valor da media 7 no console 

// const temMediaSuficiente = (media) >= 7 //Média maior ou iguala que 

const temMediaSuficiente = Math.round(media) >= 7 
//Se vc descomentar a linha acima vai usar  Math.round e colocar medias desta forma (media) dentro de () vai ter um aredondamento na media então vai  aparecer em Aprovado? true mas a Média continua 6.933333333333333 no console 


// Exibindo as imformações
console.log('Frequência', frequancia)
console.log('Média', media)

//O aluno foi aprovado?
const aprovado = temFrequenciaSufuciente && temMediaSuficiente
console.log('Aprovado?', aprovado)


const emBlackFriday = false
const temEstoque = true
const temPerfilFuncionario = true

// const produtoDisponivelBlackFriday = emBlackFriday && temEstoque

//  Abaixo estamos usando 2 tipos de operadore ( && e || )sempre priorize a clareza no seu codigo voce pode escolher não usar () em  (emBlackFriday && temEstoque) mas quando voce utiliza () mostra quem esta sendo execultado primeiro!  tabém é ideal caso a expresão seja muito grande quebre as variaveis ( const ou lest ) em partes para não ficar muit grande ou seja para seu codigo ficar mais legivel.  
const permiteDescontoMaximo = (emBlackFriday && temEstoque) || temPerfilFuncionario

console.log('Permitir desconto máximo?', permiteDescontoMaximo)
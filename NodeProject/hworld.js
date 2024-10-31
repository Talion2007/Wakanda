console.log("Hello World from Node.js")

const multiply = require('./math')
console.log(`Resultado da Multiplicação de 50 * 1009 = ${multiply(50,1009)}`)

const modulo = require('./modulo')
console.log(`A soma de 395 + 432 = ${modulo.soma(395,432)}`)
console.log(`A soma de 395 - 432 = ${modulo.subt(395,432)}`)
let num = []
console.log(num)
console.log(`Nosso vetor é o ${num}.`)

// Atribuindo novos valores pro vetor "num"...
num = [5, 8, 2, 9, 3]
console.log(num)
console.log(`Agora, nosso novo vetor é o ${num}.`)

//
num = []
num = [5, 8, 2, 9, 3]
num.push(1)
num.sort( )
console.log(num)
console.log('')
console.log(`O vetor [${num}] possui ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}.`)
console.log('')
console.log(`Agora, buscando o valor 8...`)
let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}.`)
console.log('')
// Agora vamos buscar um valor que nã consta no vetor, tendo resultado -1... E usando os conhecimentos, vamos simplificar:

console.log(`Agora, buscando o valor 4...`)
pos = num.indexOf(4)
if (pos == -1){
    console.log(`O valor não foi encontrado.`)
} else {
    console.log(`O valor está na posição ${pos}.`)
}
console.log('')

// FIM CÓDIGO DANIEL!

let array = ['b', 'p', 'c', 'a']
array.sort()
console.log("ORDENADO:", array)
for (let x in array) {
    console.log(`LETRA: ${array[x]} CÓDIGO: ${array[x].charCodeAt(0)}`)
}

array = ['b', 'P', 'c', 'a'] // No Unicode Table Decimal, o P vem antes do p. 
array.sort()
console.log("ORDENADO:", array)
for (let x in array) {
    console.log(`LETRA: ${array[x]} CÓDIGO: ${array[x].charCodeAt(0)}`)
}

var testeNumeros = [99, 25, 100]
testeNumeros.sort()
console.log("ORDENADO:", testeNumeros)
for (let x in testeNumeros) {
    console.log(`NÚMERO: ${testeNumeros[x]} CÓDIGO: ${String(testeNumeros[x]).charCodeAt(0)}`)
}

var testeNumeros = [9, 2, 1]
testeNumeros.sort()
console.log("ORDENADO:", testeNumeros)
for (let x in testeNumeros) {
    console.log(`NÚMERO: ${testeNumeros[x]} CÓDIGO: ${String(testeNumeros[x]).charCodeAt(0)}`)
}

// FIM CÓDIGO TREINOS LUCAS

// Exemplos de FUNÇÕES:
function sayHello1() {
    console.log("Hello")
}
// ESTA FUNÇÃO ACIMA: IMPRIME algo no console, NÃO TEM parâmetros e NÃO RETORNA nada.
// A PROVA de que esta função NÃO RETORNA nada:
let x = sayHello1()  //  x  RECEBE o RETORNO desta função.
console.log(x) //  x  é:  undefined

console.log('----------')

function sayHello2() {
    return "Hello"
}
// ESTA FUNÇÃO ACIMA: NÃO IMPRIME nada no console, NÃO TEM parâmetros e RETORNA algo.
// A PROVA de que esta função RETORNA algo:
let y = sayHello2() //  y  RECEBE o RETORNO desta função.
console.log(y)  //  y  é:  Hello

console.log('----------')

function sayHelloTo(name) {
    console.log(`Hello ${name}`)
}
// ESTA FUNÇÃO ACIMA: IMPRIME algo no console, TEM 1 parâmetro e NÃO RETORNA nada.
sayHelloTo('Rodolfo') // passa-se o ARGUMENTO  Rodolfo  para o PARÂMETRO  name  .

console.log('----------')

function returnHiTo(name) {
    return `Hi ${name}`
}
// ESTA FUNÇÃO ACIMA: NÃO IMPRIME nada no console, TEM 1 parâmetro e RETORNA algo.
z = returnHiTo('Geroldo')
console.log(z)

console.log('------------------------------')

// Exemplos de PARÂMETROS:
function showParams(a, b, c) {
    console.log(a, b, c)
}
showParams(1, 2, 3) // Exibiu-se os argumentos  1 2 3  , como esperado.
showParams(1, 2, 3, 4, 5) // Exibiu-se os argumentos  1 2 3  e ignorou-se os excedentes que inexistem.
showParams(1, 2) // Exibiu-se os argumentos  1 2  e o resto, não definido, retorna  undefined  .
showParams(1) // ↑ Mesma lógica.
showParams() // ↑ Mesma lógica.

console.log('----------')

function defaultParams (a, b=2, c=5) { // É possível definir PARÂMETROS PADRÕES, caso estes NÃO SEJAM PASSADOS.
    console.log(a, b, c)
}
defaultParams(7, 8, 9) // Exibiu-se os argumentos  7 8 9  , como esperado.
defaultParams(7, 8) // Exibiu-se os argumentos  7 8 e 5  , sendo este último o PARÂMETRO PADRÃO de  c  .
defaultParams(7) // ↑ Mesma lógica.
defaultParams() // ↑ Mesma lógica.


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

// FIM!

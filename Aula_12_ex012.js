var hora = 8
console.log(`Agora são exatamente ${hora} horas.`)

if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}

// Esse código tem um problema, e se fosse de madrugada, por exemplo, 4h da madrugada? ATENÇÃO, devemos atentar para os casos de exclusão, no caso < 12 seria "Bom dia", mas se for < 6 também seria bom dia, quando eu gostaria "Boa madrugada".

var hora = 4
console.log(`Agora são exatamente ${hora} horas.`)

if (hora < 6) {
    console.log("Boa madrugada!")
} else if (hora < 12) {
    console.log("Bom dia!")
} else if (hora < 18) {
    console.log("Boa tarde!")
} else {
    console.log("Boa noite!")
}

// Para pegar a hora exata do sistema, podemos usar o próprio JavaScript para tal...

var agora = new Date() // sempre Date() 
var hora = agora.getHours() // Depois de atribuir uma variável para new Date(), usamos o método .get()... 

console.log(`Agora são exatamente ${hora} horas.`)

if (hora < 6) {
    console.log("Boa madrugada!")
} else if (hora < 12) {
    console.log("Bom dia!")
} else if (hora < 18) {
    console.log("Boa tarde!")
} else {
    console.log("Boa noite!")
}



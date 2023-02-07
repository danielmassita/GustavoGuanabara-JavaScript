var idade = 22;
if (idade < 18) {
    console.log('Menor de idade.');
} else {
    console.log('Maior de idade.');
}

//var idade = 22;
//var idade = 12;
var idade = 16;

if (idade < 18) {
    console.log('Não vota.');
} else {
    console.log(`Vota.`);
}

// No Brasil, com 16 anos o voto é opcional, então... Apesar do programa não dar erro, não quer dizer que o programa está correto. Nâo existe erro semântico, mas existe um erro lógico. Código não tem erro (sintático), mas possui um erro lógico (o voto é opcional).

var idade = 22; // o código com idade = 22 não dá erro, mas tá errado!
var idade = 16;

if (idade < 16) {
    console.log('Não vota.');
} else {
    if (idade >= 16 && idade < 18) { // poderia suprimir o idade >= 16
        console.log('Voto opcional. ')
    }
}

// ou poderia economizar no código escrevendo assim...

if (idade < 16) {
    console.log('Não vota.');
} else if (idade < 18) {
    console.log('Voto opcional. ')
} else { // podemos suprimir o idade >= 18, é implícito
    console.log('Voto obrigatório.')
}

// E no Brasil, quem possui mais de 65 anos, o voto é opcional. 

var idade = 65;
console.log(`Você tem ${idade} anos.`)

if (idade < 16) {
    console.log('Não vota.');
} else if (idade < 18 || idade >= 65) {
    console.log('Voto opcional. ')
} else { // podemos suprimir o idade >= 18, é implícito
    console.log('Voto obrigatório.')
}


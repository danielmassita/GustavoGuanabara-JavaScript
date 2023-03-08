// Aula 15 - Variáveis Compostas
// https://youtu.be/XdkW62tkAgU

/* MÓDULO F - Avançando nos Estudos
- Variáveis Compostas (arrays)
- Uso de Funções e Eventos (function, method, event)
- Passagem de Parâmetros
- Exercícios Arrays, Vetores, funcionalidades...
- Próximos Passos...

*/

/* PERGUNTAS AULA ANTERIOR 
1) Já treinou bastante o uso das estruturas de repetição while, do..while, for? 
2) Aprendeu como manipular objetos de formulários HTML usando JS? 
3) Seria bom tornar seus códigos menores e mais simplificados? 
4) Você já ouviu falar por alguém que "array é difícil"? 

1) Sim, podemos revisar com um contador básico:*/
var c = 1
while (c <= 5){
  console.log(`Contando ${c}...`)
  c++
}
console.log('Fim.')

c = 1
do {
  console.log(`Contando ${c}...`)
  c++
} while (c <= 5)
console.log("Fim.")

for (c = 1; c <= 5; c++){
  console.log(`Contando ${c}...`)
} 
console.log(`Final.`)

/*
2) Sim, podemos usar algumas estruturas básicas... */

// CONTADOR COM INPUTS NO HTML
function contar(){
    let ini = window.document.getElementById('txti') // Pega o input do usuário no formulário inicial e atribui uma variável no JS...
    let fim = document.getElementById('txtf') // Pega o input do usuário no formulário final e atribui uma variável no JS...
    let passo = document.querySelector('#txtp') // Pega o input do usuário no formulário passo e atribui uma variável no JS...
    let res = document.getElementById('res') // Pega a <div id='res'> pra poder trabalhar essa área dinamicamente do JS...

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) { // Validação de dados para que o formulário nunca esteja vazio...
        res.innerHTML = 'Impossível contar!' // Utiliza a variável res, e retorna dentro do HTML uma alteração dinâmica, no caso a string com o erro...
    
    } else { // Caso contrário ao IF de erro, seguimos com o código abaixo...
        res.innerHTML = `Contando: <br>` // Colocar um texto dinamicamente no HTML, aparece 'Contando: ' e depois uma quebra de linha <br> em tag de html...
        let i = Number(ini.value) // Nova VAR já com type Number proveniente do valor literal da variável ini que puxou dados do html formulário...
        let f = Number(fim.value) // Nova VAR já com type Number proveniente do valor literal da variável fim que puxou dados do html formulário...
        let p = Number(passo.value) // Nova VAR já com type Number proveniente do valor literal da variável passo que puxou dados html formulário...

        if (p <= 0) { // Nova validação de erro, se o passo for 0 ou negativo...
            window.alert('Passo inválido. Considerando PASSO 1') // Aviso de erro em prompt... 
            p = 1 // Alternativa pro código não quebrar... O próprio dev atribui um valor válido pra variável...
        }

        if (i < f) { 
            // Contagem crescente...
            for (let c = i; c <= f; c += p){ // O loop começa sendo o contador o valor inicial, o teste o valor final, e o c ser atualizado no valor cf. p...
                res.innerHTML += `${c} \u{1F449} ` // No final do res, na div do html, será incluído no HTML via JS o valor do número inicial/iterador + UNIcode...
            }
            res.innerHTML += `\u{1F3C1}`   // Unicode final ao término do loop, usando o emoji da bandeira de fim...
        } else if (i > f) { 
            // Contagem regressiva...
            for (let c = i; c >= f; c -=p){ // Validação negativa, se o número inicial for maior que o final, ao invés de somar o iterador, a gente subtrai um passo do iterador, que diminui o valor até sair da condição...
                res.innerHTML+= ` ${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        }
    }
}


// TABUADA COM RETORNO NA TABELA DO OPTION

function tabuada(){
    let num = document.getElementById('txtn') // var num recebe o input do usuário 'txtn' do html...
    let tab = document.getElementById('seltab') // var tab recebe o 'seltab' da estrutura do html sendo <select>, <option>... 

    if (num.value.length == 0) { // Validação de dados pra evitar input vazio do usuário...
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value) // atribui nova variável pra trabalhar n, sendo o Number(num.value) puxado² do html...
        let c = 1 // Seta o contador pro valor inicial, e ainda ajuda a montar a tabuada pois vai se repetir com o iterador...
        tab.innerHTML = '' // Cria dinamicamente um novo texto '' dentro do HTML na área da tabela <select>...
        while (c <= 10) {
            let item = document.createElement('option') // Uma nova variável chamada item CRIA um novo elemento dentro do tab, do tipo 'option'
            item.text = `${n} x ${c} = ${n*c}` // O texto do elemento (item.text) passa a ser a template string dizendo 1 x c = resultado... De 1 a 10...
            item.value = `tab${c}` // faz muito sentido o item com value pro PHP // Atribuímos o valor e nome de cada novo item sendo tab1, tab2, tab3, cf. iterador.
            tab.appendChild(item) // Ao final, adiciona um novo 'item' ao final, pra que na próximo loop, isso já se repita em uma nova <option>tab2 e etc...
            c++ // Incremento do valor do contador/iterador...
        }
    }
}

/*
3) Lógico! Menos é mais! Mais orgânico, clean e minimalista....

4) Sim, mas ainda não entendi o motivo...

*/

/* AULA 15 - VARIÁVEIS COMPOSTAS EM JAVASCRIPT 

- O que é uma variável composta? 
- VARIÁVEL SIMPLES é uma variável que só consegue armazenar um único valor por vez, sendo necessário perder esse valor pra atribuir um novo...
- VARIÁVEIS COMPOSTAS devem ser capazes de armazenar vários valores em uma mesma estrutura.
- No exemplo do terreno pro estacionamento, tínhamos várias vagas de automóveis e colocamos um identificador (a0, a1, a2...), isso consome muito código na hora de programar...

vaga a1 = 
vaga a2 =
vaga a3 = 
vaga a4 = 
vaga a5 = 

- Precisamos remover um carro da vaga pra ficar livre e depois colocar outro carro. Não posso ter dois carros na mesma vaga... Mas o código, se tiver muitos carros, ficará enorme...
- Todas as vagas serão então denominadas em conjunto:

vaga a = [] //

- Para cada vaga, vamos usar um índice (sempre começam em zero)... E vamos declarar com COLCHETES [] pra adquirir o typeof de OBJECT (array).

vaga a = [    ,     ,    ]
vaga a = [carroX, carroY, carroZ] 
// cada vaga possui um índice, a[0], a[1]. a[2].

- A variável a é uma VARIÁVEL COMPOSTA, ou um VETOR (em inglês, um ARRAY)...
- Vetor é uma variável com vários espaços, que no caso, são compostos de ELEMENTOS...
- ELEMENTO é um par que agrupa o espaço da memória, o valor dentro dele e o índice/chave (key)...
- Por último, temos o conteúdo (VALOR) de cada elemento.

"Um array ou vetor ou variável composta é uma variável que tem vários elementos, cada elemento é composto por seu valor e uma chave de identificação."
*/

let num = []
// let num = [    ,     ,     ]
let num = [5, 8, 4]

// O elemento zero tem o valor 5. O elemento um tem o valor 8. O elemento dois tem o valor 4.

/* MÃO NA MASSA!!! AMBIENTE.JS */

let num = []
num = [5, 8, 2]
console.log(`O nosso número no array é o ${num[0]}.`)
console.log(`O nosso número no array é o ${num[1]}.`)
console.log(`O nosso número no array é o ${num[2]}.`)



*/

*/

/* 
Lucas Leal
há 3 meses (editado)
RELEMBRANDO:

  O que é uma VARIÁVEL?
É um ESPAÇO VAGO, dedicado dentro da memória do computador, que permite você ARMAZENAR DADOS.

    NOVIDADES:

  Diferença entre VARIÁVEL SIMPLES e (VARIÁVEL COMPOSTA || ARRAY || VETOR):

Uma variável SIMPLES só consegue armazenar UM VALOR por vez. Syntax:
let identificador = valor

Uma variável COMPOSTA é capaz de armazenar VÁRIOS VALORES em uma MESMA ESTRUTURA. Syntax:
let identificador = [valor, valor, valor]

    Exemplo:
let num = [5, 8, 4]
                   0  1  2 (posições)

  Nesta array há:
3 ELEMENTOS (elemento é conjunção de: VALOR && POSIÇÃO)
com VALORES 5, 8 e 4, respectivamente.
o valor 5 está na POSIÇÃO 0;
o valor 8 está na POSIÇÃO 1;
o valor 4 está na POSIÇÃO 2.
*posição == índice == chave == key

  Para ADICIONAR um NOVO VALOR à esta ARRAY em uma POSIÇÃO ESPECÍFICA:
num[3] = 6
  Ou seja:
ATRIBUA o VALOR "6" na POSIÇÃO 3.
Agora  num  vale: [5, 8, 4, 6]

  Para ADICIONAR um NOVO VALOR à esta ARRAY na ÚLTIMA POSIÇÃO:
num.push(7)
  Ou seja:
ATRIBUA o VALOR "7" na ÚLTIMA POSIÇÃO.
Agora  num  vale: [5, 8, 4, 6, 7]

  Para RETORNAR o COMPRIMENTO desta ARRAY:
num.length
  Ou seja:
RETORNE a QUANTIDADE de ELEMENTOS/KEYS da ARRAY  num  .
O valor retornado é: 5

----------

  Para ORDENAR CRESCENTEMENTE os ELEMENTOS/VALORES desta ARRAY:
num.sort()
  Ou seja:
Agora  num  vale: [4, 5, 6, 7, 8]

ATENÇÃO: este método apresenta algumas PECULIARIDADES que podem gerar CONFUSÃO ao tentar ordenar tanto STRINGS quanto NUMBERS. O que ele faz EXATAMENTE: O método  sort()  TRANSFORMA os ELEMENTOS de um ARRAY em STRING e depois, utilizando o sistema de Codificação de Caracteres UTF-16 (Unicode Transformation Format 16-bit), COMPARA a UNIDADE de CÓDIGO de CADA CARACTERE, em seu formato DECIMAL (Unicode Decimal Characters), ordenando-os CRESCENTEMENTE. Simplificando: cada caractere têm um número que o representa (indo de 0 à 65535). Ex: "e" = 101; "L" = 76, "Z" = 90, etc. O  sort()  irá ORDENAR os CARACTERES com base NESTES NÚMEROS, e não com base nos CARACTERES em SI. Por isso é um ordenamento CRESCENTE, e não ALFABÉTICO e nem NUMÉRICO. Para ver a tabela, jogue no Google:  "Unicode Table (Decimal)"  . Copie, cole e rode este código para ver EXEMPLOS:

// Vamos ORDENAR CRESCENTEMENTE os VALORES de  array  e EXIBIR no CONSOLE os VALORES ORDENADOS e seus respectivos CÓDIGOS UNICODE.
let array = ['b', 'p', 'c', 'a']
array.sort()
console.log("ORDENADO:", array)
for (let x in array) {
    console.log(`LETRA: ${array[x]} CÓDIGO: ${array[x].charCodeAt(0)}`)
}
// Os códigos foram ORDENADOS de maneira CRESCENTE. Mas os CARACTERES TAMBÉM ficaram em ORDEM ALFABÉTICA, por quê? Se você observar a tabela que mencionei anteriormente, verá que os CÓDIGOS dos CARACTERES que compõem o ALFABETO em MINÚSCULO estão DISPOSTOS de maneira CRESCENTE, começando no  "a" = 97  e terminando no  "z" = 123. Devido a ESTA DISPOSIÇÃO, os CARACTERES ficaram TAMBÉM em ORDEM ALFABÉTICA.

console.log('----------')

// Vamos ALTERAR o "p" MINÚSCULO para "P" MAIÚSCULO e REPETIR o PROCESSO.
array = ['b', 'P', 'c', 'a']
array.sort()
console.log("ORDENADO:", array)
for (let x in array) {
    console.log(`LETRA: ${array[x]} CÓDIGO: ${array[x].charCodeAt(0)}`)
}
// O "P" MAIÚSCULO foi exibido ANTES de TODOS os outros CARACTERES MINÚSCULOS, por quê? Pelo mesmo motivo. O ALFABETO em MAIÚSCULO começa no  "A" = 66  e  termina no  "Z" = 90  . Ou seja, TODOS os CARACTERES MAIÚSCULOS aparecerão ANTES dos MINÚSCULOS.

console.log('----------')

// E com os NÚMEROS é a QUASE a MESMA COISA. Eles são CONVERTIDOS em STRING e considera-se apenas o CÓDIGO do 1° CARACTERE. Os códigos começam no  "0" = 48  e  terminam no  "9" = 57  .
const numeros = [99, 25, 100]
numeros.sort()
console.log("ORDENADO:", numeros)
for (let x in numeros) {
    console.log(`NÚMERO: ${numeros[x]} CÓDIGO: ${String(numeros[x]).charCodeAt(0)}`)
}
// ↑ Faça o teste: ACRESCENTE os valores  9, 2, 1  dentro do array  numeros  e rode. Você verá que os códigos são IGUAIS, porque o  sort()  só considera o 1° caractere.

console.log('----------')

// Como então ORDENAR os números CORRETAMENTE, tanto CRESCENTEMENTE quanto DECRESCENTEMENTE? A sintaxe do método  sort()  permite que se use uma FUNÇÃO de COMPARAÇÃO como PARÂMETRO. Syntax:  array.sort(compareFunction)  . Esta função DEVE RETORNAR um valor POSITIVO, NEGATIVO ou ZERO. Ex:
const numbers = [40, 100, 1, 5, 25, 10]
numbers.sort((a, b) => a - b)
console.log("ORDENADO:", numbers)
/* O que aconteceu:
 a  - b   = returned value
100 - 1   = 99 [40, 1, 100, 5, 25, 10]
100 - 5   = 95 [40, 1, 5, 100, 25, 10]
100 - 25  = 75 [40, 1, 5, 25, 100, 10]
100 - 10  = 90 [40, 1, 5, 25, 10, 100]
40 - 1    = 39 [1, 40, 5, 25, 10, 100]
40 - 5    = 35 [1, 5, 40, 25, 10, 100]
40 - 25   = 15 [1, 5, 25, 40, 10, 100]
40 - 10   = 30 [1, 5, 25, 10, 40, 100]
25 - 10   = 15 [1, 5, 10, 25, 40, 100] ←  numbers  ORDENADOS CRESCENTEMENTE.

Quando o VALOR RETORNADO é NEGATIVO, então ORDENA-SE:  a  ANTES  de  b  
Quando o VALOR RETORNADO é POSITIVO, então ORDENA-SE:  a  DEPOIS de  b

Ou seja, os NÚMEROS RETORNADOS só tem UM PROPÓSITO, saber se é: POSITIVO, NEGATIVO ou ZERO. O valor em si não importa. O nome disso é: Lei da Tricotomia ou Three Way Comparison.

*Eu OMITI TODOS os resultados NEGATIVOS porquê, além do fato de que iria ficar GIGANTESCO, quando isto acontece, NADA ACONTECE. Ilustração:  a(1) - b(5)  RETORNARÁ  -4 (negativo)  . POSICIONAR o  a  ANTES  do  b  não vai mudar nada, porque ele já está antes do  b  .

*Para ORDENAR DECRESCENTEMENTE, basta mudar o código da função de  a - b  para  b - a  . Ilustração:  b(1) - a(5)  RETORNARÁ  -4 (negativo)  . Então o  a  será POSICIONADO ANTES de  b  .

----------

  Para BUSCAR um VALOR dentro desta ARRAY:
num.indexOf(7)
  Ou seja:
RETORNE a CHAVE/ÍNDICE do VALOR 7.
O valor retornado é: 3
*Caso seja passado um número INEXISTENTE como PARÂMETRO, o valor retornado será: -1

    ESTRUTURA de REPETIÇÃO: for/in (para/em)

Esta estrutura faz um LOOP ATRAVÉS das PROPRIEDADES de um OBJETO ou ARRAY. Syntax:
for (key in object) {}
for (key in array) {}

  Ilustração (crie um documento HTML, cole este código e rode no seu navegador):

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>for in</title>
</head>
<style>
    body {
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
</style>
<body>
    <p id="demo"></p>
</body>
<script>
    txt = "<h2>Ilustração de for in ATRAVÉS de um ARRAY:</h2>"

    const numeros = [45, 4, 9, 16, 25]

    for (let x in numeros) {
        txt += `índice: ${x} | valor: ${numeros[x]} <br>`
    }

    /* Lê-se: PARA(for) cada POSIÇÃO(x) NO(in) ARRAY(numeros) {execute este bloco}

    inseriu-se no 1° placeholder: a CHAVE(x);
    Foi exibido: a CHAVE de CADA PROPRIEDADE do OBJETO.

    PERCEBA: em ARRAYS, a CHAVE é o ÍNDICE de cada ELEMENTO (chave:valor == índice:valor).

    inseriu-se no 2° placeholder: o ARRAY(numeros) na POSIÇÃO de x;
    Foi exibido: o VALOR de CADA PROPRIEDADE do OBJETO. 
    
    LEMBRE-SE:
    TODO ARRAY É UM OBJETO. MAS NÃO TODO OBJETO É UM ARRAY. 

    //----------------------------------------

    txt += "<h2>Ilustração de for in ATRAVÉS de um OBJETO:</h2>"

    const pessoa = {nome: 'Elon', Snome: 'Musk', idade: 51}
    
    for (let x in pessoa) {
        txt += `chave: ${x} | valor: ${pessoa[x]}<br>`
    }

    /* Lê-se: PARA(for) cada POSIÇÃO(x) NO(in) OBJETO(pessoa) {execute este bloco}

    inseriu-se no 1° placeholder: a CHAVE(x);
    Foi exibido: a CHAVE de CADA PROPRIEDADE do OBJETO.
    
    PERCEBA: em OBJETOS, a CHAVE é o NOME dado à cada PROPRIEDADE (chave:valor == nome:valor).

    inseriu-se no 2° placeholder: o OBJETO(pessoa) na POSIÇÃO de x;
    Foi exibido: o VALOR de CADA PROPRIEDADE do OBJETO. 

    txt += "<br><strong>*posição == índice == chave == key</strong>"

    document.getElementById('demo').innerHTML = txt
</script>
</html>
*/


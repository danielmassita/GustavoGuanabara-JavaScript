// Aula 17 - Próximos Passos - Curso JavaScript #17
// https://youtu.be/roP93FA-NgU

/*
PERGUNTAS DA AULA ANTERIOR
1) Você assistiu ao curso completo? 
2) Você fez todos os exercícios propostos?
3) Você já tentou resolver os exercícios sem a ajuda do vídeo?
4) Você já criou uma situação qualquer e tentou resolver por conta própria? 

1) Sim.
2) Sim, junto com o Gustavo.
3) Ainda não (03/2023), vou começar uma nova rodada de exercícios como revisão e depois tentarei refazê-los por conta.
4) Alguns exercícios do CodingBat (Python), e fazendo um plano de treino com BeeCrowd, LeetCode, HackerRank, GeeksForGeeks.
*/

/*
Aula 17 - PRÓXIMOS PASSOS

- Agradecimentos...
- Até agora já aprendemos:
    Fundamentos da Linguagem (o que é; como surgiu; evolução; paradigma client-side; node.js e servidores (server-side))
    Variáveis e Dados (tipos de dados; como colocar dados numa variável; como o JS trata os tipos primitivos;)
    Operadores (como tratar os valores com operações; op. aritméticos; op. lógicos; op. relacionais;)
    Condições (if simples; if composto; if aninhado; switch-case;)
    Repetições (while; do..while; for;)
    Arrays (variáveis compostas; com índice numérico;)
    Functions (MUITO importante no JS, linguagem multi-paradigma e funciona também com PARADIGMA FUNCIONAL)
    DOM (Document Object Model - componentes visuais; dados formulários; alterou/manipulou; JS falou com HTML/CSS)
- Rodamos no Node.JS na própria máquina, usando o V8 da engine do Google Chrome navegador, e rodando no cliente usando o DOM (html).

E agora? Quais são os DEVERES DE CASA? 
- Faça curso HTML5/CSS! https://www.youtube.com/playlist?list=PLHz_AreHm4dlAnJ_jJtV29RFxnPHDuk9o
- Faça curso de Lógica da Programação! https://www.youtube.com/playlist?list=PLHz_AreHm4dmSj0MHol_aoNYCSGFqvfXV
- Faça curso de Python! https://www.youtube.com/playlist?list=PLHz_AreHm4dlKP6QQCekuIPky1CiwmdI6

... DAQUI PARA FRENTE!
- Functions (outros conceitos como Arrow Function, Callbacks, Funções Anônimas, IIFE, conhecer JS Funcional)
- Objetos (POO, linguagem orientada a objetos, declarar objetos)
- Modularização (código separado em arquivos separados, reutilizar códigos usando JS)
- RegEx (Regular Expressions, para validação de dados)
- JSON (conjunto estrutura de objeto, transmitir dados e salvar dados localmente)
- AJAX (tecnologia que usa JS, como rolagem infinita)
- Node.JS (pra fazer scripts rodarem no servidor com grande potencial)
- Bibliotecas X Frameworks (jQuery, VueJS, Angular)
*/

/* INTRODUÇÃO A OBJETOS!
Relembrando algumas aulas anteriores... 

Arrays || Vetor || Variável Composta

let num = [                         ]
let num = [         ,        ,      ]
              0           1       2

// O array no JS é heterogêneo, aceita valores de typeOf diferentes (string, number, lógico)...
// O problema é que o índice é fixo, então começa a limitar o array...

OBJETO

let amigo = {}
let amigo = {                               }
let amigo = {         ,       ,     ,       }

let amigo = {nome:'José', sexo:'M', peso:85.4, engordar(p){} }
//  valor         'José'      'M'      85.4     [function]
//  chave         nome:     sexo:    peso:       engordar()                
//

// Criando um último item "engordar(p){}" que é uma function, então um OBJETO PODE GUARDAR FUNCIONALIDADE, que chamamos de MÉTODO.
// Objetos são VARIÁVEIS que guardam valores que são os atributos, objetos podem guardar também funcionalidades (chamamos de MÉTODOS).
*/

/* Mão na Massa (VS Code) - objeto01.js */

console.log('-----')
let amigo = {} // No JS array [] e object {} são estruturas da mesma classe...
console.log(typeof(amigo))

amigo = {nome: 'José', sexo: 'M', peso: 85.4, engordar(p){}}

amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 85.4,
    engordar(p=0){
        console.log('Engordou!')
        this.peso += p
    }
}

console.log(amigo)
// Podemos acessar os elementos de forma separada...

console.log('-----')
console.log(`Vamos acessar o primeiro elemento/chave que é ${amigo.nome}.`) // amigo.nome é o ATRIBUTO
console.log(`O ${amigo.nome}, que é do sexo ${amigo.sexo}, pesa ${amigo.peso} kg.`)

console.log('-----')
amigo.engordar(2); // A variável "amigo" tem uma função dentro dela (funcionalidade) então função dentro de variável é uma evolução...
console.log(`O ${amigo.nome}, que é do sexo ${amigo.sexo}, pesa ${amigo.peso} kg.`)


/* LUCAS LEAL


Lucas Leal
há 2 meses (editado)
NOVIDADES: (leia também comentários deste post)

    O que estudar?
  Functions:
Arrow Functions 
Callbacks
Funções Anônimas
iife
JavaScript Funcional
-----
Objetos (orientação a objetos)
Modularização
RegEx (Regular Expressions)
JSON
AJAX
NodeJS
____________________________

  O que é um Object?
OBJECTS são CONTAINERS de PROPRIEDADES e MÉTODOS.
OBJECTS são VARIÁVEIS COMPOSTAS, assim como os ARRAYS.

  Array syntax:
let identificador = [valor, valor, valor]
                                     0        1        2
  Object syntax:
let identificador = {nome:valor, nome:valor, nome:valor}

  Diferenças:
Para declarar um ARRAY usa-se COLCHETES [ ]
Para declarar um OBJECT usa-se CHAVES { }
________

Nos ARRAYS, os ELEMENTOS (conjunção de: posição e valor) são ACESSADOS por seus ÍNDICES (0, 1, 2).

Nos OBJECTS, as PROPRIEDADES (conjunção de: nome e valor) são ACESSADAS por suas KEYS (nome1, nome2, nome3).

  Como fazer este ACESSO (rode este código):

const pessoas = {nome1: "rodolfo", nome2: "rogerin"} 
const idades = [20, 35]

// Há 2 maneiras de acessar as PROPRIEDADES de um OBJETO.

// 1) syntax: objectName.propertyName
console.log(`O ${pessoas.nome1} tem 20 anos de idade e o ${pessoas.nome2} têm 35.`)
// 2) syntax: objectName["propertyName"]
console.log(`O ${pessoas["nome1"]} tem 20 anos de idade e o ${pessoas["nome2"]} têm 35.`)
// acessando os ELEMENTOS de um ARRAY através de seus ÍNDICES:
console.log(`O rodolfo tem ${idades[0]} anos de idade e o rogerin têm ${idades[1]}.`)

/* pessoas  é um OBJETO;  
nome1 e nome2  são as PROPRIEDADES do OBJETO  pessoas;
"rodolfo" e "rogerin"  são os VALORES das PROPRIEDADES  nome1 e nome2  , respectivamente. 
________

Os OBJETOS podem também ter MÉTODOS.
Um MÉTODO é uma FUNÇÃO que é ARMAZENADA como PROPRIEDADE de um OBJETO. Ou seja, MÉTODOS são AÇÕES que podem ser EXECUTADAS em OBJETOS.

  Exemplo (rode este código):

const person = {
    fName: "Elon",
    lName: "Musk",
    fullName() {
        return `${this.fName} ${this.lName}`
    }
}
console.log(person.fullName())

/*  this  é uma keyword que refere-se a um OBJETO. 
Portanto,  this.fName  refere-se à propriedade  fName  DESTE (this) OBJETO (person). 
________

  O que é  this  ?

this  é uma keyword que refere-se a um OBJETO.  this  NÃO É uma VARIÁVEL. Você NÃO PODE MUDAR o VALOR de  this  .
Mas QUAL objeto  this  refere-se? Isto dependerá de COMO esta keyword foi utilizada ou chamada:

Em um MÉTODO,  this  refere-se ao OBJETO (exemplo anterior).
Sozinha,  this  refere-se ao OBJETO GLOBAL.
Em uma FUNÇÃO,  this  refere-se ao OBJETO GLOBAL.
Em uma FUNÇÃO, em modo estrito (*strict mode),  this  é undefined.
Em um EVENTO,  this  refere-se ao ELEMENTO que RECEBEU o EVENTO.
Métodos como  call(),  apply()  e  bind()  , podem referir  this  a QUALQUER OBJETO.

  *O que é Strict Mode?

O comando:  "use strict"  , indica que um código DEVE SER EXECUTADO em Strict Mode, modo estrito. Este pode ser utilizado no INÍCIO do SCRIPT, agindo GLOBALMENTE, ou DENTRO de uma FUNÇÃO ESPECÍFICA, agindo LOCALMENTE.
Este modo serve para REVELAR MÁS PRÁTICAS de ESCRITA, SYNTAX, ao lançar NOVAS MENSAGENS de ERRO no CONSOLE do NAVEGADOR, que antes passariam desapercebidas. Portanto, este modo auxilia na escrita de um código mais "clean", previnindo que você atribua um valor à uma variável antes de declará-la, por exemplo (rode este código):
 
// SEM UTILIZAR o Strict Mode:
function serHumano() {
    return nome = "rodolfo" // atribuindo um valor à uma variável SEM DECLARÁ-LA. 
}
console.log(serHumano()) // "rodolfo" foi exibido normalmente sem mensagens de erro.

console.log('-------')

// UTILIZANDO o Strict Mode:
function pessoa() {
    "use strict"  // caso APAGUE este "use strict", o código NÃO DARÁ ERRO, mesmo que este exista.
    return sobrenome = "da Silva"  // atribuindo um valor à uma variável SEM DECLARÁ-LA. 
}
console.log(pessoa()) // ReferenceError: sobrenome is not defined

// Para saber mais, Google: "JavaScript Use Strict"

O que são Arrow Functions?

Arrow Functions são FUNÇÕES que possuem uma SYNTAX MENOR, mais ENXUTA, devido ao fato de alguns comandos poderem ser OMITIDOS. Estas são SEMPRE FUNÇÕES ANÔNIMAS (funções sem um nome). Ex (rode este código (Node.js Exec)):

// Escrito do modo:  function  :
function myFunction1 (a, b) {return a * b} // "myFunction1" é o NOME da FUNÇÃO.
console.log(myFunction1(5, 3))

console.log('----------')

// Escrito do modo:  Arrow Function  :
//      PARÂMETROS  ↓         ↓  CÓDIGOS
let myFunction2 = (a, b) => a * b // "myFunction2" é o NOME da VARIÁVEL que RECEBE a Arrow Function (que é anônima). *Apropósito, este ato de ATRIBUIR uma FUNÇÃO à uma VARIÁVEL chama-se:  Function Expression  .
console.log(myFunction2(5, 3))

/* PERCEBA QUE, na Arrow Function:
A KEYWORD  function  é OMITIDA;
O NOME da FUNÇÃO NÃO EXISTE (anônima);
As  CHAVES { }  e a KEYWORD  return  são OMITIDAS (estes só funcionam quando há apenas 1 statement 'retornável'). 

console.log('----------')

// Caso a Arrow Function tenha apenas 1 PARÂMETRO, os  PARÊNTESES ( )  TAMBÉM podem ser OMITIDOS. Ex:
//     PARÂMETRO  ↓
let myFunction3 = n => n + 2
console.log(myFunction3(5))


O que é Callback Function?

Callback Function é uma FUNÇÃO que é PASSADA como ARGUMENTO de OUTRA FUNÇÃO. Ex (rode este código (Live Server)):

    <!DOCTYPE html>
    <html>
    <body>

    <h2>Callback Function</h2>

    <p>O RESULTADO da soma é:</p>
    <p id="demo"></p>

    <script>
    function tela(algo) { // 4) O ARGUMENTO  soma  é PASSADO para o PARÂMETRO  algo  , que então é IGUALADO ao  innerHTML  do elemento  p#demo  , exibindo o RESULTADO na tela.
      document.getElementById("demo").innerHTML = algo
    }

    let calculadora = (num1, num2, callback) => { // 2) O ARGUMENTO  tela  foi PASSADO PARA o PARÂMETRO  callback  .
      let soma = num1 + num2
      callback(soma) // 3) Chamou-se a FUNÇÃO  callback()  PASSANDO o ARGUMENTO  soma (que é: 10)  . 
    } // 3.1) Isto é o MESMO que: chamar a FUNÇÃO  tela(algo)  e PASSAR o ARGUMENTO  10  para o PARÂMETRO  algo  .
    //   3.2) OBSERVE: FUNÇÃO callback() == PARÂMETRO callback == FUNÇÃO tela()  .

    calculadora(5, 5, tela) // 1) a FUNÇÃO  tela  foi PASSADA COMO ARGUMENTO da FUNÇÃO  calculadora  . Portanto  tela  é a Callback Function. ATENTE-SE: ela foi PASSADA COMO ARGUMENTO, porém NÃO PASSOU ARGUMENTO ALGUM AINDA (explicado no  passo 3  ).
    </script>

    </body>
    </html>


O que é IIFE?

IIFE, Immediately Invoked Function Expression, também conhecido como Self-Executing Anonymous Function, é uma função que, assim que DEFINIDA, é IMEDIATAMENTE EXECUTADA. Uma característica de funções IIFE é ter um Escopo Lexical (Lexical Scope). Ex (rode este código (Node.js Exec)):

// Exemplo 1 (imprimindo "Olá Mundo"):
    (function () {console.log("Olá Mundo")})()
/* ¹↑       ²↑                            ¹↑ ↑³
¹ - A função é ENCAPSULADA entre PARÊNTESES, o que promove um Escopo Lexical (explicado mais para frente).
² - A função é ANÔNIMA, ou seja, NÃO TEM um NOME.
³ - A função CHAMA ELA PRÓPRIA. */

// Exemplo 1.1 (Versão Arrow Function):
;(() => {console.log("Olá Mundo")})()

console.log('----------')

// Exemplo 2 (somando 3 números):
    ;(function (a, b, c) {console.log(`Resultado: ${a + b + c}`)})(2, 5, 3)
/* ¹↑             ²↑                                                 ³↑
¹ - É uma boa prática, SEMPRE que CRIAR uma FUNÇÃO IIFE, colocar um  ;  no início. Caso RETIRE o  ;  , o código dará este ERRO:
TypeError: console.log(...) is not a function (referindo-se ao  Exemplo 1.1  )
Devido ao fato da função IIFE começar ABRINDO parênteses, o JavaScript interpretará que você está PASSANDO ARGUMENTOS para o  Exemplo 1.1  (por isso: "is not a function"). Ou seja, ele tratará o  Exemplo 2  como uma CONTINUAÇÃO do  Exemplo 1.1  , dado que NÃO HÁ NADA SEPARANDO-OS. É como se os 2 códigos estivessem um ao lado do outro. O  ;  serve para SEPARAR um STATEMENT do OUTRO, resolvendo este problema.
² - Criação dos PARÂMETROS.
³ - Passagem dos ARGUMENTOS. */

console.log('----------')

/* O que é Escopo Lexical (Lexical Scope)?
Escopo Lexical, ou Escopo Léxico, é um escopo "mais ou menos" local. Ex: */

const externo = () => {
    const livro = 'Sapiens' // 1)
    // console.log(livro.toUpperCase()) // 3)
    const interno = () => {
        // const livro = 'Bíblia' // 2)
        console.log(livro.toUpperCase()) // 1.1)
    }
    interno()
}
externo()
/* Ja é sabido que variáveis declaradas DENTRO de uma FUNÇÃO têm ESCOPO LOCAL. Entretanto, no ESCOPO LÉXICAL:
1)   Uma VARIÁVEL (livro) declarada DENTRO de uma FUNÇÃO (externo)
1.1) PODE ser ACESSADA por uma FUNÇÃO ANINHADA (interno)
(press f8): "SAPIENS" é exibido no console.

2) RETIRE ESTE COMENTÁRIO. Observe: esta DECLARAÇÃO será PRIORIZADA, pois a função  interno()  irá, PRIMEIRAMENTE, buscar a variável  livro  DENTRO de SEU BLOCO DE CÓDIGOS.
(press f8): "BÍBLIA" é exibido no console.

3) RETIRE ESTE COMENTÁRIO E O COMENTÁRIO  2)  . Observe: devido ao ESCOPO LOCAL das FUNÇÕES, ambas serão tratadas como variáveis DIFERENTES e serão exibidas INDIVIDUALMENTE, mesmo tendo o MESMO NOME. 
(press f8): "SAPIENS" e "BÍBLIA" são exibidos no console. */ 

console.log('----------')
console.log('----------')

/* Por isso Escopo Lexical é "mais ou menos" local, tudo depende das circunstâncias. Se a FUNÇÃO ANINHADA BUSCAR a VARIÁVEL dentro do SEU BLOCO DE CÓDIGOS e ENCONTRA-LA, ela atuará com escopo LOCAL. SENÃO ENCONTRAR, ela atuará com escopo LEXICAL, BUSCANDO-A no ESCOPO ACIMA. Caso não encontre também neste escopo, BUSCARÁ-SE no ESCOPO ACIMA DESTE, e assim em diante. Ex: */

const Externo = () => {
    const Livro = 'Sapiens' // 3)

    const Interno = () => {
        const Livro = 'Bíblia' // 2)

    const maisInterno = () => {
        console.log(Livro.toUpperCase()) // 1)
    }
    maisInterno()
    }
    Interno()
}
Externo()

/* 
1) A função  maisInterno()  NÃO TEM a variável  Livro  dentro de seu bloco de códigos.  
2) Portanto ela atuará com escopo LEXICAL, buscando-a dentro da função  Interno()  , acima dela. Exibe-se "BÍBLIA".
3) Caso você torne o  2)  um comentário, ela buscará a variável dentro de  Externo()  . Exibe-se "SAPIENS". */

/*
EXTRAS:

  Quando devo usar o  ;  (ponto e vírgula)?

Se há 2 ou mais DECLARAÇÕES (STATEMENTS) em uma MESMA LINHA, é OBRIGATÓRIO utilizar o  ;  para separá-las uma das outras. Exemplo (rode este código (Node.js Exec)):

const numbers = [1, 2, 3, 4, 5];  // este  ;  é OPCIONAL
for (let i = 0; i < numbers.length; i++) { // estes  ;  são OBRIGATÓRIOS para separar as declarações
    console.log(numbers[i]);  // este  ;  é OPCIONAL
}

// Não há mais NENHUM outro uso obrigatório do  ;  no JavaScript.
________

  O que faz o método  split()  ?

O método  split()  permite você DESMEMBRAR/DIVIDIR uma STRING, transformando-a em um ARRAY de SUBSTRINGS. Este método retorna um NOVO ARRAY. Este método NÃO ALTERA a STRING ORIGINAL. Syntax:
string.split(separator, limit)

Exemplo (rode este código (Node.js Exec)):

let text = "Você está estudando JavaScript."

const intoArray1 = text.split(" ")
console.log(intoArray1) //     ↑ Use este separador para DIVIDIR a STRING em PALAVRAS.

const intoArray2 = text.split("")
console.log(intoArray2) //     ↑ Use este separador para DIVIDIR a STRING em CARACTERES.

const intoArray3 = text.split("", 9)
console.log(intoArray3) //        ↑ Use este parâmetro para LIMITAR a QUANTIDADE de DIVISÕES.
________

  O que faz o método  replace()  ?

O método  replace()  faz uma BUSCA em uma STRING por um VALOR, ou uma EXPRESSÃO REGULAR, e RETORNA uma NOVA STRING com o valor SUBSTITUÍDO. Este método NÃO ALTERA a STRING ORIGINAL. Syntax:
string.replace(searchValue, newValue)

Exemplo (rode este código (Node.js Exec)):

let texto = "Caneta azul, azul caneta, caneta azul, tá marcada com minha letra."
console.log(texto)
console.log('')

console.log('1)')
let resultado = texto.replace("azul", "vermelha") // 1) Substitui APENAS a PRIMEIRA aparição de "azul" para "vermelha"
console.log('-- trocou ↓ ----- ↓ NÃO trocou ------ ↓ NÃO trocou')
console.log(resultado)

console.log('2)')
resultado = texto.replace(/azul/g, "vermelha") // 2) Substitui TODAS as aparições de "azul" para "vermelha"
// "g" significa: "global modifier". Mas este "global" é APENAS DENTRO da STRING a ser MODIFICADA (texto)
console.log('-- trocou ↓ ------- ↓ trocou -------------- ↓ trocou')
console.log(resultado)

console.log('3)')
resultado = texto.replace("caneta", "lápis") // 3) Este método é CASE-SENSETIVE, ou seja, ele DIFERENCIA letra MAIÚSCULA de MINÚSCULA
console.log('- ↓ NÃO trocou ---- ↓ trocou')
console.log(resultado)

console.log('4)')

resultado = texto.replace(/caneta/gi, "lápis") // 4) Mas, escrito DESTA FORMA, é possível torná-lo CASE-INSENSETIVE
// "i" significa: "case-insensitive". 
console.log('- ↓ trocou ------- ↓ trocou')
console.log(resultado)

console.log('5)')
resultado = texto.replace(/caneta|marcada|letra/gi, "xxxxx") // 5) É possível substituir VÁRIOS TEXTOS de UMA VEZ SÓ
console.log('- ↓ trocou ------- ↓ trocou ------------ ↓ trocou ------ ↓ trocou')
console.log(resultado)
console.log('------------------------- ↑ trocou')
________

  Operador de Coalescência Nula (Nullish Coalescing Operator) - retorna a expressão da DIREITA caso a expressão da ESQUERDA seja  undefined  ou  null  . Caso a expressão da ESQUERDA seja DEFINIDA, ESTA será retornada. 
Syntax: leftExpr ?? rightExpr

É MUITO semelhante ao Operador Lógico OR. A diferença é:
O Operador OR retorna o 1° valor VERDADEIRO. 
o Operador de Coalescência Nula retorna o 1° valor DEFINIDO.

  Exemplo (rode este código (Node.js Exec)):

let gols = 0

QTDgols = gols || '"ERRO: nenhum gol cadastrado"'  // 1)
console.log(`Marrocos venceu a Espanha por 4 x ${QTDgols}`)

console.log('')

QTDgols = gols ?? '"ERRO: nenhum gol cadastrado"'  // 2)
console.log(`Marrocos venceu a Espanha por 4 x ${QTDgols}`)

// 1) Neste caso, utilizando o OR, o número  0  foi tratado como FALSO e, portanto, a expressão da DIREITA foi retornada: Marrocos venceu a Espanha por 4 x "ERRO: nenhum gol cadastrado" 
// Porém,  0  , é um número de gols TOTALMENTE VÁLIDO e POSSÍVEL de se acontecer e queremos que este seja exibido. Para fazer isto pode-se usar o Operador de Coalescência Nula, substituindo o  ||  por  ??  .

// 2) Desta forma, utilizando Operador de Coalescência Nula, ao invés de retornar-se o 1° valor VERDADEIRO, retorna-se o 1° valor DEFINIDO. Então o novo valor retornado será: Marrocos venceu a Espanha por 4 x 0

/* Todas expressões que o operador OR trata como FALSO:
null;
NaN;
0;
empty value (" " or ' ' or ` `);
undefined. 
________

  Operador de Encadeamento Opcional (Optional Chaining Operator) - retorna  undefined  caso a PROPRIEDADE do OBJETO acessado seja  undefined  ou  null  .
Syntax: ?.

  Exemplo (rode este código (Node.js Exec)):

const carro = {marca:"Fiat", modelo:"500", cor: null};

console.log(carro?.tipo)  // não existe a propriedade: tipo
console.log(carro?.cor)   // a propriedade cor recebeu  null
________

  O que fazem os métodos  Math.floor()  e  Math.random()  ?

O método  Math.floor()  ARREDONDA um número, inserido como parâmetro, para MENOS (floor/chão).
O método  Math.random()  retorna um número entre 0 (incluído) e 1 (não-incluído).

Exemplo (rode este código (Node.js Exec)):

const numbers = []

for (let c = 0; c < 5; c++) {
    numbers[c] = Math.random() // numbers  recebe 5 números aleatórios entre 0 e 1.
    console.log(numbers[c])    // exibe-se cada um dos números na tela.
}

console.log('')

for (let c = 0; c < 5; c++) {
    numbers[c] = numbers[c] * 10 // Para explicar o Math.floor, multipliquei cada número do array por 10.
    console.log(numbers[c])      // exibe-se cada um dos números na tela.
}  

console.log('')

for (let c in numbers) {
    console.log(Math.floor(numbers[c])) // O método Math.floor() ARREDONDA para MENOS cada número do array, transformando-os em números inteiros, e exibe-se cada um dos números na tela.
} 

console.log('----------EXTRA:----------')

// Esta função gera um NÚMERO ALEATÓRIO entre um RANGE MÍNIMO e MÁXIMO (é meio complicadinho de entender, mas acho que consegui explicar xD).

function getRndInteger (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
} //                                   ¹↑    ²↑          ³↑   
console.log(getRndInteger(15, 20))

/* A função foi chamada passando os argumentos 15(min) e 20(max). 

Para chegar no resultado esta função gera, na verdade, um número aleatório ENTRE a DIFERENÇA do MÍNIMO e o MÁXIMO. É o que faz as setinhas ¹ e ², subtraindo max(20) por min(15). Ou seja, a distância entre 15 e 20 é: 5. Depois soma-se +1 para que o número 20 também esteja incluído na probabilidade de ser gerado pois, caso contrário, seria gerado um número entre 15 e 19.

Então, neste exemplo: Math.random() * (max - min + 1) gerará um número aleatório entre 0 (incluso) e 6 (não-incluso). Ou seja, entre 0 e 5.

Com o número gerado, o método Math.floor() ARREDONDARÁ este número para MENOS. 

E depois este número será somado com o range mínimo(15), setinha ³, exibindo na tela um número aleatório entre 15 e 20 (ambos inclusos).

Descrevendo passo a passo:

/* min=15; max=20.
Math.random gera 0.38
max(20) - min(15) + 1 = 6
6 * 0.38 = 2.28
Math.floor arredondará para 2
Este 2 será somado com min(15)
resultado: 17 */


// O que é Spread Operator (...) ?

// O Operador Spread (...) permite-nos COPIAR ELEMENTOS de um PRIMEIRO ARRAY para um SEGUNDO ARRAY ou COPIAR PROPRIEDADES e MÉTODOS de um PRIMEIRO OBJETO para um SEGUNDO OBJETO. Exemplo (rode este código (Node.js Exec)):

// O Spread Operator ESPALHA os VALORES de um ARRAY ou OBJETO. Ex:
const array_1 = [2, 3, 4]
const array_2 = [1, ...array_1, 5, 6]
console.log(array_2)

console.log(`Espalhou-se os VALORES  ${array_1}  dentro do  array_2`)

console.log('--------------------')

// É possível também PASSAR ARGUMENTOS para uma FUNÇÃO utilizando o Spread Operator:
let somar = (a, b, c) => {return a + b + c} // a = 2; b = 3; c = 4.
console.log(`Resultado: ${somar(...array_1)}`)

console.log('--------------------')

// O Spread Operator permite-nos também fazer uma CÓPIA RASA (Shallow Copy) de um OBJETO ou ARRAY. Cópia Rasa significa: COPIAR APENAS as PROPRIEDADES que estão na CAMADA MAIS SUPERFICIAL do OBJETO ou ARRAY. Ou seja, não incluí-se OUTROS OBJETOS nem ARRAYS, pois estes possuem OUTRA CAMADA de ANINHAMENTO. Ex:

const bill =  {
    idade: 11,                // {CAMADA MAIS SUPERFICIAL}
    brinquedos: {             // {OUTRO OBJETO COM
        favorito: 'Bola',     // PROPRIEDADES
        menosUsado: 'Girafa'  // ANINHADAS}
    }
}

const apollo = {...bill}
// const apollo = {...bill, brinquedos: {...bill.brinquedos}} // * ignore isto por enquanto.

bill.idade = 14 

console.log(`Idade de Bill: ${bill.idade}`)
console.log(`Idade de Apollo: ${apollo.idade}`)

/* linha 26:  apollo  RECEBE uma CÓPIA do OBJETO  bill 
linha 29: alterou-se o VALOR da PROPRIEDADE  bill.idade  para  14
linha 31 e 32: exibe-se a idade de cada um. Os valores são DIFERENTES. Tudo certo, é o que queríamos. Isto significa que a PROPRIEDADE  idade  de  bill  e  apollo  são PROPRIEDADES DIFERENTES, ou seja, cada uma tem o seu PRÓPRIO ESPAÇO alocado na MEMÓRIA. Veja a comparação lógica: */ 

console.log(`Sâo iguais? ${bill.idade === apollo.idade}`) // VALOR e TIPO iguais? 

console.log('--------------------')

// Agora vamos testar o OBJETO  brinquedos  , que têm PROPRIEDADES ANINHADAS:

bill.brinquedos.favorito = 'Tubarão'

console.log(`Brinquedo favorito de Bill: ${bill.brinquedos.favorito}`)
console.log(`Brinquedo favorito de Apollo: ${apollo.brinquedos.favorito}`)

/* linha 44: alterou-se o VALOR da PROPRIEDADE  bill.brinquedos.favorito  para  'Tubarão'
linha 46 e 47: exibe-se o nome do brinquedo favorito de cada um. Os valores são IGUAIS. Não é o que queríamos que acontecesse. Isto ocorreu porque o Spread Operator COPIOU apenas a CAMADA de ANINHAMENTO mais SUPERFICIAL do OBJETO (onde está a propriedade  idade  ). As PROPRIEDADES do OBJETO  brinquedos  NÃO FORAM INCLUSAS, significando que a PROPRIEDADE  brinquedos.favorito  de  bill  e  apollo  são PROPRIEDADES IGUAIS e COMPARTILHAM ESTE MESMO PONTO na MEMÓRIA. Veja a comparação lógica: */

console.log(`Sâo iguais? ${bill.brinquedos.favorito === apollo.brinquedos.favorito}`) // VALOR e TIPO iguais?

/* É necessário que se faça uma COPIA MANUAL do OBJETO  brinquedos  para fazer esta SEPARAÇÃO. 
***RETIRE O COMENTÁRIO DA LINHA 27 E TORNE UM COMENTÁRIO A LINHA 26. Feito isto:
linha 27:  apollo  RECEBE uma CÓPIA do OBJETO  bill  E também uma CÓPIA do OBJETO  brinquedos  . Problema resolvido. Agora a comparação lógica retorna FALSE e apenas o VALOR do brinquedo favorito de  bill  foi alterado e, o de  apollo  , continua "Bola". */

console.log('--------------------')

// O Spread Operator PERMITE que se faça ALTERAÇÕES no NOVO OBJETO DENTRO da PRÓPRIA ESTRUTURA. Ex:
const sputnik = { // COPIOU-SE o OBJETO  apollo  como 'default' e SOBRESCREVEU-SE o VALOR da PROPRIEDADE  idade  .
    ...apollo,
    idade: 17,
    brinquedos: {...apollo.brinquedos, // ↑ Mesma lógica.
        favorito: 'Cadela Laika'}
}

console.log(sputnik)

console.log('--------------------OUTROS CASOS--------------------')

// Perceba que, nos exemplos dados acima, por se tratar de OBJETOS, colocou-se o Spread Operator dentro de CHAVES. Da mesma forma, quando se tratar de ARRAYS, coloca-se o Spread Operator dentro de COLCHETES. Exemplos:

// Combinando os ELEMENTOS de 2 ARRAYS distintos dentro de um único ARRAY:
const numeros1 = [1, 2, 3]
const numeros2 = [4, 5, 6]
const numerosCombinados = [...numeros1, ...numeros2]
console.log(numerosCombinados)

console.log('--------------------')

// COPIANDO PARTES do ARRAY  numerosCombinados  , ao transformar SEUS ELEMENTOS em VARIÁVEIS dentro de um NOVO ARRAY:
const [um, dois, ...resto] = numerosCombinados
console.log(um)
console.log(dois)
console.log(resto)

/*
O que é Rest Operator (...) ?

O Operador Rest (...) permite a criação de um PARÂMETRO CAPAZ de RECEBER um NÚMERO INDEFINIDO de ARGUMENTOS, guardando-os dentro de um ARRAY. Exemplos (rode este código (Node.js Exec)):

// O parâmetro  ...otherInfo  é um Rest Parameter que pode guardar uma quantidade INFINITA de ARGUMENTOS.

function myBio(firstName, lastName, ...otherInfos) { 
    return otherInfos;
}

console.log(myBio("Elon", "Musk", "Male", "Tesla", "SpaceX", "blablabla"))

console.log('----------')

// Esta função utiliza o Rest Parameter  ...nums  para RECEBER uma QUANTIDADE INDEFINIDA de NÚMEROS. E, devido ao fato destes serem guardados dentro de um ARRAY, é possível fazer um LOOP através dos VALORES deste array, guardando-os dentro da variável  total  , que irá RECEBER a SOMA entre o TOTAL e CADA NÚMERO do ARRAY, ACUMULANDO os VALORES dentro de si.

function sum(...nums) {
    let total = 0

    for (let x of nums) {
        total += x
    }
    return total
}
console.log(sum(11, 22, 33, 44, 55, 66, 77, 88, 99))

*/

/*
TRANSCRIÇÃO
0:00
Último vídeo do curso básico de JavaScript ,não se engane esse vídeo não é só uma despedida ele tem
0:05
conteúdo aqui dentro. Então assiste ele até o final, só que antes como de costume, me responde às quatro
0:11
perguntinhas. Em primeiro lugar, você assistiu o curso completo? Você viu todas as aulas?
0:15
Você acompanhou a resolução de todos os exercícios?
0:18
E mais do que acompanhar você fez todos os exercícios propostos? Você colocou a mão na massa?
0:23
Digitou o código? E mais do que fazer o exercício e digitar o código, você já tentou fazer os exercícios
0:29
sem a ajuda do vídeo? Sem ver o que eu estava fazendo e repetindo? Ou você só fez a repetição do que eu fiz?
0:35
Você tentou resolver esses exercícios sem a minha ajuda? E mais ainda,
0:39
além de fazer sem minha ajuda você já tentou criar as suas próprias situações? Os seus próprios desafios
0:45
e resolver eles utilizando JavaScript?
0:47
Pois se você fez isso tudo que eu acabei de falar, assistiu o vídeo, fez os exercícios
0:53
fez com a minha ajuda, fez sem a minha ajuda e tentou criar suas próprias soluções
0:57
você está no caminho certo.
0:59
É assim, essa é a postura do aluno, essa é a postura do Gafanhoto do Curso em Vídeo.
1:04
E se por acaso para algumas dessas perguntas você respondeu: "Não, não tentei ainda não."
1:08
Não tem problema,
1:09
assiste esse último vídeo, por que eu tenho alguns conselhos para te dar e aula também.
1:13
Vamos nessa?
1:15
Legendas: Rayssa Victoria
1:27
Olá pequeno gafanhoto! Seja bem-vindo a última do seu curso básico de JavaScript,
1:34
totalmente patrocinado pelo Google.
1:36
O meu nome é Gustavo Guanabara, eu sou professor. Sabe aquela tristeza que dá,
1:41
eu tô sentindo uma grande felicidade
1:43
porque não foi fácil gravar, eu vou até falar para a outra câmera, não foi fácil
1:48
gravar esse curso inteiro e lançar ele todo no mesmo dia, tenta fazer um exercício mental do
1:54
trabalho que isso aqui deu, da quantidade de horas de dedicação para criar slide, criar as aulas,
2:00
criar os exercícios, o tempo que eu levei pra gravar.
2:02
Faz um exercício vê a primeira aula e vê a cor da minha barba,
2:07
olha a última, agora, o jeito que eu estou. Tenta imaginar a quantidade de tempo
2:12
que foi para editar tudo isso e deixar com esses efeitos
2:14
visuais, o custo que isso, teve porque o curso está indo de graça pra você, mas imagina quanto isso custou.
2:21
E logo de antemão eu queria deixar um imenso agradecimento pra galera do Google, principalmente
2:26
para as meninas no Youtube a Clarissa e a Indiana, eu agradeci elas o primeiro vídeo
2:31
e estou agradecendo no último, mas pode ter certeza que todos os vídeos a gente, gravou, editou, produziu
2:37
com agradecimento especial à elas duas e
2:40
principalmente ao Google que financiou isso que custeou esse curso, muito obrigado mesmo por
2:45
acreditarem na educação do Brasil.
2:47
Mas vamos parar de papo que oque você está querendo aqui é aula.
2:50
Chegamos aqui à aula 17, a última aula do seu curso de JavaScript com uma pergunta:
2:56
"Quais são os meus próximos passos? Agora que eu aprendi isso eu já sei tudo de JavaScript?
3:01
Eu preciso estudar mais alguma coisa? Qual é o meu próximo passo Guanabara?"
3:05
E é pra isso que eu criei esse vídeo, além de responder essa pergunta
3:08
eu também vou te ensinar um pouquinho mais, fica até o final que você não vai se arrepender.
3:12
Mas antes de responder quais são os nossos próximos passos
3:14
deixa a gente tentar analisar o que já vimos até o momento. Nesse módulo básico de JavaScript
3:20
a gente viu os seguintes assuntos: A gente viu os fundamentos da linguagem, o que é o JavaScript,
3:24
como ele surgiu, a evolução dele, o seu paradigma de linguagem client e server,
3:30
depois a evolução dele com Node.js para conseguir alcançar outros níveis, conquistar os servidores,
3:36
então hoje você consegue rodar JavaScript no cliente e também no servidor.
3:40
Nós usamos Node.js para rodar de forma bem simples nosso cliente, mas o Node.js tem muito mais potencial.
3:46
A gente trabalhou os conceitos fundamentais de todas as linguagens de programação
3:50
como variáveis, tipos de dados, como colocar esses dados dentro de uma variável,
3:54
como o JavaScript e trata os tipos primitivos.
3:57
A gente viu, além de valores e variáveis, como tratar esses valores com operações.
4:02
Vimos os operadores aritméticos, operadores lógicos, operadores relacionais
4:06
a gente fez bastante exercício com isso, exercícios práticos, exercícios propostos.
4:10
A gente tratou também as condições
4:11
nós vimos o if simples, o if composto, if alinhado, a gente viu switch.
4:16
A gente também tratou as repetições, vimos wilhe, do...while, for,
4:21
fizemos basteante exercício também com isso .
4:23
E no último módulo a gente tratou os arrays, que são as variáveis compostas, mostrei pra você que não é
4:29
nenhum bicho de sete cabeças. E a gente finalizou agora, nas últimas aulas, com as funções.
4:34
Falei que as funções são muito importantes pro JavaScript, muito importantes mesmo,
4:38
JavaScript é uma linguagem multi paradigma e ela funciona também com o paradigma funcional,
4:42
então, funções são muito importantes pro JavaScript.
4:45
E tudo isso que vimos aqui do lado, a gente viu no modo tradicional, utilizando o Node.js
4:50
rodando da nossa própria máquina, vimos também utilizando rodando diretamente no navegador
4:55
utilizando a engine V8 do Google e também fizemos isso rodando no nosso cliente utilizando
5:00
o Document Object Model, que é o DOM,
5:02
é quando pegamos os dados do formulário, os componentes visuais da tela,
5:07
alterou, manipulou e fez o JavaScript falar com HTML, com CSS.
5:12
Olha a quantidade de informações que a gente passou pra você, e para quem é iniciante
5:16
e olha essa quantidade de coisas pode estar pensando:
5:18
"Mas isso é tudo de JavaScript, não preciso continuar a estuda.r"
5:21
Eu tenho uma péssima notícia para quem pensa assim,
5:24
JavaScript é uma linguagem gigante, tem muitas funcionalidades, tem muitas tecnologias envolvidas
5:29
você não vai parar de estudar por aqui, o seu curso básico se encerra neste vídeo,
5:33
mas os seus estudos em JavaScript não podem se encerrar.
5:36
E é por isso que eu vim aqui, no início desse vídeo, te responder uma pergunta que pode surgir na sua cabeça:
5:41
"Quais são os meus próximos passos? Me dá um norte Guanabara.
5:44
Depois que eu estudei isso tudo, que eu fiz esse curso, pratiquei tudo."
5:47
Aquelas 4 perguntas que eu fiz no início do vídeo, depois que você terminar isso você precisa
5:51
fazer o dever de casa e continuar estudando.
5:54
E daqui pra frente você tem que estudar o que? Eu vou te dar uma dica, na verdade várias dicas.
5:58
Primeira dica que eu te dou, antes de escrever qualquer coisa aqui de JavaScript, faça o curso de HTML 5 e CSS,
6:05
aqui no canal nós temos o curso de HTML 5 e CSS, ele está aqui em cima,
6:09
sempre esteve, todas as aulas, quando você clicar aqui no veja mais
6:13
você vê o curso de JavaScript, que é sempre a primeira playlist,
6:16
a segunda playlist é o curso de HTML, faça esse curso,
6:19
ele é um estudo de caso grande, ele faz um site, é bem simples, é mais tranquilo até que JavaScript
6:25
inclusive, lá dentro tem algumas aulas de JavaScript também,
6:28
mas faz esse curso. Em seguida você vai ver aqui, estude muito sobre funções,
6:33
os seus estudos de funções não acabaram aqui nesse curso, a gente viu o básico de função,
6:38
você tem outros conceitos a estudar, você pode aprender coisas do tipo,
6:42
arrow functions, callbacks, funções anônimas, as iife, dá uma pesquisada depois o que é isso.
6:48
Estudar um pouco mais sobre JavaScript funcional,
6:51
conhecer esses fundamentos é muito importante, mas eles não são fundamentos básicos
6:55
eles são já fundamentos um pouco mais avançados e não caberiam nesse curso.
6:59
Outra coisa muito importante de você estudar objetos, o JavaScript além de ser uma linguagem funcional,
7:04
ela também é uma linguagem orientado a objeto, você consegue declarar objetos, utilizar objetos
7:09
e esse conceito também é muito importante para você,
7:12
a gente tem aqui no Curso em Vídeo, também, um curso de orientação a objeto, ele só não em JavaScript
7:17
ele é linguagem Java, que você sabe que não é a mesma coisa que JavaScript,
7:21
e se você está nessa dúvida ainda volta nesse curso que as primeiras aulas a gente fala sobre isso.
7:26
Então, esse curso de orientação a objeto, aqui do Curso em Vídeo, ele é em linguagem Java e linguagem PHP
7:31
mas ele é bom pra você ver os fundamentos da linguagem também,
7:34
JavaScript também uma linguagem orientada a objetos.
7:37
Agora que você já aprendeu também funções e vai continuar estudando funções,
7:41
dá uma estudada também sobre modularização,
7:43
pra você modularizar o seu código, deixar código separado em arquivos separados,
7:48
reutilizar códigos utilizando JavaScript,
7:50
isso é um conceito muito importante também e deve estar na sua lista de próximos passos de JavaScript.
7:55
Outra coisa muito importante, é uma dica pessoal, estude expressões regulares,
8:00
JavaScript também tem compatibilidade com expressões regulares, dá uma estudada nisso
8:04
para validação de dados também é uma maravilha, economiza muito tempo e código.
8:08
Você também pode dar uma estudada em JSON, JSON é meio que estrutura de objeto
8:14
que você consegue transmitir dados, salvar dados localmente, dá uma estudada também em JSON.
8:19
Como eu citei lá no início do curso, quando a gente falou do Google imagens,
8:24
que você vai rolando e ele vai carregando os conteúdos para frente, não tem mais o avançar, passar página,
8:29
você vai rolando quando ele chega no final da página carrega mais coisa,
8:32
Facebook é assim, o Google imagens é assim, o youtube é assim,
8:35
isso tudo é graças a uma tecnologia, que usa JavaScript que é o AJAX,
8:40
também é uma coisa para você dar uma estudada.
8:42
E outra coisa para se aprender é além de você manter essas funcionalidades
8:45
do lado do cliente, que a gente aprendeu nesse curso inteiro, você dá uma aprendida, uma estudada
8:50
em Node.js, para você conseguir fazer os seus scripts rodarem no servidor
8:53
isso dá um potencial muito grande para a linguagem e isso sem falar em um monte de biblioteca,
8:58
de framework, que a gente falou lá no início do curso, aprender jQery, Vue.js, Angular.
9:03
Enfim, tem um monte de coisa para você aprender,
9:06
então seus estudos em JavaScript não param por aqui,
9:08
a gente pegou sua mão lá no início do iniciante mesmo e te trouxe até aqui
9:12
agora eu estou te deixando com essa lista de dever de casa para você conseguir aprender
9:17
e para incentivar o seu estudo eu não vou parar por aqui, eu vou te dar uma lambuja,
9:21
eu vou tirar desses itens aqui, vou te dar a introdução de um muito importante,
9:25
funções a gente já falou básico, vamos pegar o segundo dessa lista, eu vou te mostrar o básico,
9:30
os fundamentos do que é um objeto e do que ele serve para o nosso dia a dia, em que ele é útil.
9:36
Então se você achava que esse vídeo é só uma despedida se enganou, porque a gente tem conteúdo
9:41
vou te dar a introdução do que é um objeto, mas para isso eu preciso ir lá pro nosso
9:45
"quadro negro digital", porque eu tenho algumas coisas para te explicar.
9:51
Já estou aqui na tela espremido no canto
9:54
para dar uma relembrada no que a gente acabou de ver algumas aulas atrás, a declaração de arrays,
9:59
confie em mim, vou dar um revisada rápida
10:01
para você entender o objetivo de objetos numa linguagem de programação,
10:04
um dos objetivos na minha opinião o principal deles.
10:07
Quando a gente declara um array no JavaScript é só você colocar qualquer valor entre colchetes
10:11
e atribuir à uma variável, que essa variável vira um vetor
10:14
a gente viu isso durante a aula, e é importante que você tenha visto essa aula,
10:17
em cima da minha cabeça tem um link e você acessa todas as playlists que a gentes separa pra vocês.
10:22
Só dando uma recordada, quando eu faço essa declaração ele cria uma variável num
10:26
só que não é uma variável pequena, é uma variável com mais espaço, divido essa variável em três pedaços
10:30
e eu faço a divisão da variável na memória em três pedaços,
10:33
cada pedaço recebe um índice ou chave e isso é fixo, o primeiro elemento
10:38
é índice 0 e assim sucessivamente até o último. Quando eu coloco valores 5, 8, 4, por exemplo,
10:43
esses valores vão pra dentro do vetor e ponto. Uma coisa que eu não citei na aula de arrays é que eu
10:48
não preciso colocar todos os números como eu coloquei aqui embaixo,
10:52
se o primeiro item tem um número o outro tem que ter um número também,
10:55
muitas linguagens de programação são assim, JavaScript não,
10:58
se você quiser colocar o nome na primeira casa, o endereço na segunda casa, a idade do cara na terceira
11:03
não tem problema, o array, no JavaScript, ele é heterogêneo, ele aceita valores de tipos diferentes,
11:08
você pode colocar uma string no primeiro, um número na segunda, um valor lógico na terceira
11:13
e assim sucessivamente.
11:14
O grande problema do array, das variáveis compostas, é que o índice fica fixo,
11:20
se eu colocar o nome na primeira casa eu não consigo chamar aquela parte de baixo de nome,
11:25
a primeira a casa é sempre 0, a segunda casa é sempre 1, então quando você usa array
11:29
ele facilita muito a sua vida, porque reduz o seu código, mas acaba que com o tempo você acaba ficando
11:34
limitado na primeira casa, na segunda casa, terceira casa e índices numéricos
11:38
acabam atrapalhando quando você quer fazer uma coisa mais avançada. Pra coisas simples
11:42
o array serve muito bem, para coisas mais avançadas o array começa a ficar um pouco limitado
11:47
e é por isso que eu coloquei isso aqui como o próximo passo,
11:50
e aí vem o passo da gente começar a entender o que é um objeto. Para declarar um objeto em JavaScript
11:55
a declaração é muito simples, array ,como você vê aqui em cima, declara com colchetes,
11:59
se você quiser declarar um objeto é só você utilizar chaves, por exemplo,
12:04
acabei de criar uma variável, aqui embaixo de mim, chamada amigo e eu atribui ele uma chave
12:09
como se fosse um bloco de código, mas não é um bloco de código. Quando eu faço essa declaração ele vai criar
12:14
uma variável grande exatamente como ela fez com o num aqui do lado da minha cabeça,
12:17
eu posso da mesma maneira que eu fiz com array
12:19
divide em partes, por exemplo, vou dividir em quatro pedaços, quando eu divido em quatro pedaços
12:24
ele pega variável amigo, que está lá embaixo da tela, e divide em quatro partes,
12:28
exatamente como acabou de acontecer aqui, e a grande vantagem desse tipo de estrutura, a coisa bem
12:32
básica do objeto, que diferencia ele dos arrays, é que eu consigo fazer isso aqui, dá uma olhada.
12:38
Eu coloquei: {nome:'José',
12:40
Oque será que vai acontecer quando eu faço essa declaração? É simples,
12:43
a primeira casa se chama nome, ela não vai se chamar 0, ela não vai ter uma {0
12:49
exatamente como está aqui em cima, ela vai ter um nome mesmo, ela vai ter um identificador literal,
12:53
fica mais fácil de visualizar. Dentro do objeto, dentro da primeira casa do objeto, eu vou ter José exatamente,
12:59
compara a linha que eu digitei com o efeito visual que a gente criou, em seguida eu vou colocar sexo é
13:05
masculino, oque que vai acontecer? Eu vou criar um campo, um atributo,
13:09
na verdade chama isso de atributo do objeto, um atributo sexo por valor masculino.
13:14
Outra coisa que eu posso colocar, o peso do José, o peso é 85.4 ele vai criar um elemento, um atributo peso
13:20
e vai colocar o valor lá dentro. Então, até o momento, o objeto que está lá embaixo já é mais evoluído, já é mais
13:28
detalhado, já tem mais possibilidades do que o array que está aqui do lado.
13:31
E em momento nenhum eu estou desmerecendo o array, por favor, array é uma coisa muito importante,
13:36
oque eu estou te mostrando aqui é um próximo passo,
13:38
quando você precisar fazer alguma coisa um pouco mais evoluída,
13:41
você vai ter que partir para o objeto porque ele é melhor, inclusive tem uma funcionalidade muito melhor
13:46
que o array não tem.
13:47
Uma coisa que eu posso fazer, eu deixei reservado para o último espaço, que está aqui embaixo de mim,
13:51
eu posso colocar assim: engordar com parâmetro p, abro e fecho chaves,
13:55
na verdade, oque estou fazendo aqui no último elemento é criando um item engordar
13:59
que tem uma função dentro, vou colocar aqui, eu tenho uma function dentro.
14:03
Os objetos são variáveis, variável guarda valores, só que além de guarda valores, que são os atributos,
14:11
objetos podem guardar funcionalidades, que é oque a gente chama de métodos.
14:15
Deu para ver a diferença aqui, o que eu tenho aqui do lado da minha cabeça é um array, é um vetor,
14:19
o que eu tenho aqui embaixo da tela é o objeto e o JavaScript tem total compatibilidade com objetos.
14:25
Quer ver como? abre o seu Visual Studio Code e vamos fazer um exemplo simples
14:30
Estou aqui no meu Visual Studio Code
14:32
e vou criar uma pasta da aula 17, new folder, aula 17 e vamos colocar aqui um arquivo chamado objeto01.js,
14:42
já posso encolher aqui e nesse objeto01 eu vou criar exatamente aquilo que a gente viu na aula.
14:47
Vou declarar a variável amigo e nessa variável amigo vai ser o objeto.
14:52
Quer ver um negócio simples? Eu vou mostrar na tela o typeof de amigo
14:56
executei o código, ele mostrou que é um objeto.
14:58
Uma coisa interessante, se eu colocar o amigo como um array o JavaScript
15:04
quando eu mostro o typeof amigo você fica pensando: "Ele vai mostrar array, porque ele é um array."
15:08
Só que quando eu executo ele também é um objeto,
15:11
na verdade, em JavaScript o array é um objeto e o objeto é um objeto
15:15
pode ficar um pouco confuso com isso no início, mas é basicamente eles são estruturas da mesma classe
15:21
são estruturas que vieram da mesma origem. Vamos voltar aqui, eu vou colocar ele como um objeto.
15:26
Eu tenho um amigo aqui, eu posso colocar o nome dele vou colocar José, vírgula, sexo: masculino, peso: 85.4
15:34
se eu executar isso daqui, em vez de typeof amigo eu vou mandar mostrar o amigo, F8
15:39
Ele já me mostrou o objeto, sem problema nenhum ,
15:42
eu posso fazer até assim pra facilitar a minha criação.
15:45
Vírgula, eu vou colocar aqui, engordar(p){, e aqui eu posso criar um código,
15:49
aqui eu posso escrever o código de engordar, na hora que eu executar você vai ver:
15:51
o nome é José, o sexo é masculino, peso é esse e o engordar é uma função que está aqui dentro.
15:58
Isso aqui é muito importante, é muito importante mesmo.
16:02
E eu posso acessar os elementos, por exemplo, se eu não quiser mostrar tudo posso mostrar só o nome do amigo,
16:07
então, amigo.nome, que é o atributo,
16:10
vou colocar aqui no engordar ou botar console.log('engordou').
16:15
Na verdade, eu vou fazer o peso aumentar esse p aqui,
16:18
se por acaso não passar ele é zero, a gente viu isso na anterior.
16:22
Vou coloca aqui o this, que é uma palavra auto referencia ao objeto, this.peso += p,
16:28
que foi o valor passado.
16:29
Se eu mostrar aqui, F8,
16:31
mostrou José, se eu quiser ainda posso colocar assim: crase,o nome do cara, pesa ${amigo.peso}Kg')
16:41
Está lá, José pesa 84.4, ele pegou o nome da pessoa e pegou o peso da pessoa.
16:47
Se antes de mostrar, eu vou colocar, amigo.engordar(2)
16:52
ele vai engordar 2 quilos, se eu mandar dois quilos, olha só, ele pesa 84.4 de forma original,
16:58
quando eu mandar engordar dois quilos olha o que vai acontecer, em vez de 85.4,
17:02
vou rodar aqui, ele engordou e pesa 87.4.
17:06
Olha só o meu código, eu fiz o meu amigo engordar, isso é,
17:10
a minha própria variável amigo agora tem funcionalidades dentro dela,
17:14
isso leva a nossa programação para um outro patamar, eu coloco funções dentro de variáveis.
17:20
Você consegue perceber que isso é uma evolução da linguagem? Você consegue perceber
17:24
o quanto você não tem que aprender de JavaScript? Isso não tornou curso que você acabou de assistir inútil
17:30
porque tem uma galera que pode estar pensando nisso,
17:32
isso tornou o curso você acabou de assistir os seus primeiros passos,
17:35
o que eu estou fazendo aqui é te mostrando que existem outros passos
17:39
inclusive a ECMAScript nova tem a permissão, e você já sabe um pouco de orientação objeto,
17:44
da criação de classes para você conseguir replicar objetos com as mesmas características,
17:48
mas isso não vou te mostrar nesse curso não, porque eu vou acabar te desesperando mais
17:52
você vai falar assim: " Então eu não aprendi nada?" Sim, você aprendeu coisa pra caramba, você aprendeu muito,
17:58
mas o que eu quero deixar claro com esse vídeo
18:00
é que mesmo aprendendo muito, você não aprendeu tudo de JavaScript
18:03
é muito difícil saber tudo de JavaScript, os fundamentos eu te dei, treine muito esses fundamentos,
18:09
mas saiba que tem um caminho muito
18:11
maior para você percorrer ainda, mas pode acreditar você consegue
18:17
Então é isso! É com muita felicidade e com uma pontinha de tristeza
18:21
que eu anuncio oficialmente aqui: chegou ao fim o seu curso básico de JavaScript.
18:26
Mais uma vez muito obrigado a você, que assistiu esse vídeo até o final,
18:30
que se inscreveu no canal aqui embaixo, habilitou o sininho
18:33
gente tem outros cursos que estão saindo aqui no canal, se você conheceu esse canal por conta
18:38
do curso de JavaScript seja muito bem vindo, seja muito bem-vinda, a gente tem muito, mas muito
18:43
material aqui para te oferecer. Muito obrigado também ao Google que patrocinou este curso,
18:48
obrigado as meninas do Youtube, que eu já falei um milhão de vezes, a Clarissa e a Indiana.
18:52
Eu sei que tem muito mais gente envolvida nisso,
18:54
mas eu também sei que essas duas acreditaram para caramba também no nosso trabalho.
18:58
E eu queria agradecer a todo mundo, eu estou muito feliz de ter participado desse projeto,
19:02
espero sinceramente que a gente receba outros convites como esse, para dar continuidade ao curso de
19:06
JavaScript ou para criar outro curso.
19:08
se você está vendo esse curso no lançamento, a gente está lançando esse curso em maio de 2019
19:14
e só para você ter uma ideia as gravações desse curso começaram em dezembro de 2018,
19:20
só para você ter uma ideia, só para você ter uma noção do tempo, do trabalho de dedicação
19:25
que a gente precisa ter. Esse curso faz parte de uma iniciativa
19:28
muito grande que está vindo do Google, não é só o Curso em Vídeo, que foi selecionado para isso,
19:33
existem outros cursos. E mais uma vez, para encerrar, eu queria deixar o meu agradecimento
19:38
ao Google por acreditar na educação nacional, acreditar que programação é sim uma parte de educação,
19:45
porque até o momento a gente era visto como um canal de tecnologia
19:48
não o canal de educação e eu não tenho nada contra tecnologia,
19:51
mas o Curso em Vídeo acaba concorrendo com canais de unboxing, canais de viagens para acompanhar
19:57
eventos de tecnologia, e essa não é a proposta do Curso em Vídeo, a proposta do Curso em Vídeo é educação,
20:02
eu sou professor, a única coisa que eu sei da minha vida é educar, é ensinar
20:07
e eu fico muito feliz por terem acreditado em mim, dado desse voto de confiança e criado esse projeto e
20:12
convidado a gente para participar.
20:14
Então é isso! E você pequeno gafanhoto o seu trabalho em aprender programação foi bem adiantado
20:20
a gente chegou bem longe, mas ainda tem muita coisa para aprender.
20:23
Eu me despeço por aqui, mas pode ser que mais para frente a gente volte.
20:26
Um grande abraço, bons estudos, boa prática, continue compartilhando nos seus o Curso em Vídeo ,
20:32
a gente fica por aqui no curso de JavaScript, mas tem muito mais coisa aqui no canal pra você.
20:36
Um grande abraço e até a próxima!
20:41
Legendas: Rayssa Victoria
*/

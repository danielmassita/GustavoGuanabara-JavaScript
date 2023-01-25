// Aula 07 - Operadores (Parte1) - Curso JavaScript #07
// https://youtu.be/hZG9ODUdxHo

/*
Você já sabe como fazer cálculos usando JavaScript? Conhece os operadores aritméticos do JavaScript? Consegue entender a ordem de precedência dos operadores em JavaScript? Consegue utilizar os operadores de incremento (pré-incremento e pós-incremento) no JavaScript?  

Pois, para responder a essas e muitas outras perguntas, assista essa aula do Curso de JavaScript para Iniciantes até o final. E não se esqueça sempre de praticar todas as atividades que fizermos durante o vídeo no seu próprio computador.

Aula do Curso de JavaScript e ECMAScript para Iniciantes, criado pelo professor Gustavo Guanabara para o canal CursoemVideo.
*/

/*
PERGUNTAS AULA ANTERIOR
- Como guardar o valor digitado no prompt dentro de uma variável? var nome = window.prompt("Qual o seu nome? ")
- Como usar um número do prompt em cálculos? Transformando a resposta do prompt (de string) em um número, usando var n1 = Number.parseFloat(window.prompt('Digite um número (n1): '))
- Como transformar um texto todo em maiúsculas? var s = 'JavaScript' e usar a variável e a classe s.toUpperCase() 
- Como mostrar número com formato monetário correto? var n1 = 1545.50 e então usar uma classe para n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
*/

/* 
`${Operadores do JS}`
- Famílias de Operadores
    - aritméticos
    - atribuição
    - relacionais
    - lógicos
    - ternário
    - typeof

OPERADORES ARITMÉTICOS (binários) 
    5 + 2 = 7
    5 - 2 = 3
    5 * 2 = 10
    5 / 2 = 2.5 (divisão real)
    5 % 2 = 1 (divisão inteira, usa o "resto" da divisão inteira)
    5 ** 2 = 25 (exponenciação)

CUIDADO! Precedência de operadores. 
5 + 3 / 2
...
errado 4
correto 6.5

Node.JS
> 5 + 2     
7           
> 9 % 2
1
> 9 / 2
4.5
> 5 + 3 / 2 // ordem de precedência, primeiro divide depois soma, apesar do erro aritmético, não existe erro sintático
6.5
> 5 + / 2 // aqui no exemplo tem um erro sintático
5 + / 2
    ^

Uncaught SyntaxError: Invalid regular expression: missing /

> 5 + 3 / 2
6.5
> (5 + 3) / 2
4
*/

/*
ORDEM DE PRECEDÊNCIA DE TODAS AS LINGUAGENS
    ( )     parênteses
    **      exponenciação
    * / %   multiplicação, divisão e divisão inteira
    + -     somas, subtrações
*/

/*
ATRIBUIÇÃO SIMPLES (Operador de Atribuição)
var a = 5 + 3           // 8
var b = a % 5           // 3
var c = 5 * b ** 2      // 45
var d = 10 - a / 2      // 6
var e = 6 * 2 / d       // 2
var f = b % e + 4 / e   // 3

NODE.JS
> var a = 5 + 3
undefined
> var b = a % 5
undefined
> var c = 5 * b ** 2
undefined
> var d = 10 - a / 2
undefined
> var e = 6 * 2 / d
undefined
> var f = b % e + 4 / e
undefined
> a
8
> b
3
> c
45
> d
6
> e
2
> f
3

*/
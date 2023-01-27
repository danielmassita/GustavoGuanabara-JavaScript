// Aula 08 - Operadores (Parte 2) - Curso JavaScript #08
// https://youtu.be/BP63NhITvao

/* Você já conhece os operadores relacionais e os operadores lógicos em JavaScript? Sabe a diferença entre usar = ou == ou === em JavaScript? Conhece a ordem de precedência dos operadores do JavaScript? Sabe como usar o operador ternário para atribuições em JavaScript?

Pois, para responder a essas e muitas outras perguntas, assista essa aula do Curso de JavaScript para Iniciantes até o final. E não se esqueça sempre de praticar todas as atividades que fizermos durante o vídeo no seu próprio computador.

Aula do Curso de JavaScript e ECMAScript para Iniciantes, criado pelo professor Gustavo Guanabara para o canal CursoemVideo. */

/* PERGUNTAS AULA ANTERIOR
- Pra que serve o operador % em JS? Seria pra calcular porcentagem? Não, trata-se da divisão inteira com resto, sendo armazenado o resto da divisão, por exemplo 5 % 2 = 1, pois cinco dividido por dois dá dois e resta (1). 
- 6 + 4 / 2 é igual a cinco ou oito? Pela ordem de precessão, será 6 + (4 / 2) = 8. 
- Se uma variável n está valendo 10 e executamos um n+= 5, qual será seu novo valor? n = 10, n += 5, n = 15.
- Pra que serve ++ e -- ao lado de uma variável? Trata-se do incremento de 1 inteiro, por exemplo x = 2, x++ então x = 3. Pode ser x++ ou ++X.
*/

/* AULA 08 - OPERADORES PARTE 2
`${Operadores de JS}` - Parte 2

- Operadores do JavaScript
    - aritmético
    - atribuição
    - relacionais (> < >= <= == !=)
    - lógicos
    - ternário

OPERADORES RELACIONAIS (resultado SEMPRE BOOLEAN)
    > maior que...
    < menor que...
    >= maior ou igual...
    <= menor ou igual...
    == igual a...
    != diferente de...

    5 > 2   // true
    7 < 4   // false
    8 >= 8  // true
    9 <= 7  // false
    5 == 5  // true
    4 != 4  // false
*/

/* NODE.JS
> 5 > 2
true
> 8 < 4
false
> var a = 8
undefined
> var b = 15
undefined
> a > b
false
> a <= b - 10
false
> a == b
false
> a != b
true

// Exemplos

preço >= 200.50         // o preço é maior ou igual a 200.50?
idade < 18              // a idade é menor do que 18?
curso == 'JavaScript'   // o curso é JavaScript?
n1 != n2                // o primeiro número é diferente do segundo?
*/

/* OPERADORES RELACIONAIS (IDENTIDADE)
5 == 5      // true
5 == '5'    // true (a igualdade não testa o tipo)
5 === '5'   // false (OPERADORE DE IGUALDADE RESTRITA) do mesmo valor E tipo.
5 === 5     // true 

NODE.JS

> 5 == 5
true
> 5 == '5'
true
> var x = 5
undefined
> var y = '5'
undefined
> typeof x
'number'
> typeof y
'string'
> x == y
true
> x === y
false
> x != y
false
> x !== y
true
*/

/* OPERADORES LÓGICOS ()
!       negação
&&      conjunção (e)
||      disjunções (ou)

Eu quero duas caneta azul OU vermelho
azul || vermelha 
Eu quero duas canetas azul E vermelha
azul && vermelha

Operador Unário
!   true    (algo não verdadeiro é FALSE)
    false   (algo não falso é VERDADEIRO)

Operador Binário - %% CONJUNÇÃO
true    &&      true    -> TRUE 
true    &&      false   -> FALSE
false   &&      true    -> FALSE
false   &&      false   -> FALSE

Operador Binário - || DISJUNÇÃO
true    ||      true    -> TRUE 
true    ||      false   -> TRUE
false   ||      true    -> TRUE
false   ||      false   -> FALSE

NODE.JS

> var a = 5
undefined
> var b = 8
undefined
> true && false
false
> true && true
true
> false || false
false
> true || false
true
> false || true
true
> true || true
true
> a > b && b % 2 == 0
false
> a <= b || b % 2 == 2
true

Explicando...
{ (a <= b) true || (b % 2 == 2) false }
// {  true      ||      false}
// true

Primeiro op. aritméticos, depois relacionais, depois lógicos.

Ordem de Precedência Operadores
1º Aritméticos
2º Relacionais
3º Lógicos

Ordem de Precedência Lógica
1º NÃO
2º E
3º OU

// Exemplos

idade >= 15 && idade <= 17          // a idade está entre 15 e 17 inclusive?
estado == 'RJ' || estado == 'SP'    // o estado é RJ ou SP?
salário > 1500 && sexo != 'M'       // o salário é acima de 1500 e não é homem?
*/

/* ORDEM DE PRECEDÊNCIA FINAL

1º Aritméticos
    ( )     parênteses
    **      exponenciação
    * / %   multiplicação, divisão e divisão inteira (esq. -> dir.)
    + -     somas, subtrações

2º Relacionais (sem ordem de precedência, esquerda pra direita)

3º Lógicos
    !    (não)
    &&   (e)
    ||   (ou)

*/

/*
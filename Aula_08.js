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

4º Ternário 
*/

/* OPERADOR TERNÁRIO ? : Junta 3 operandos...

TESTE   ?   TRUE    :   FALSE

Qual o teste lógico, veraddeiro o falso?

média >= 7.0 ? "Aprovado" : "Reprovado"


NODE.JS

> var média = 5.5
undefined
> média > 7 ? "Aprovado" : "Reprovado"
'Reprovado'
>  média += 3
8.5
> média > 7 ? "Aprovado" : "Reprovado"
'Aprovado'

> var x = 8
undefined
> var res = x % 2 == 0 ? 5 : 9
undefined
> res
5
> x
8

À variável X é atribuído 8. À variavel res é atribuída um valor, dependendo do teste aritmético (x % 2 == 0, true), então pra true o res será igual a cinco, e não nove. 

> var idade = 19
undefined
> var r = idade >= 18 ? "MAIOR" : "MENOR"
undefined
> r
'MAIOR'
*/

/* TRANSCRIÇÃO

0:00
E aí, tudo bem? Como a gente sempre faz no início de cada vídeo do curso de JavaScript,
0:04
eu queria saber se você consegue responder quatro perguntas bem simples.
0:10
A primeira é: você sabe para que serve o operador do símbolo de porcentagem no JavaScript ?
0:15
Será que é pra calcular porcentagem? Outra coisa muito importante... Veja essa equação:
0:20
6 + 4 / 2 é igual a 5 ou 8? Você consegue montar na tua cabeça rapidinho e responder?
0:27
Outra coisa, se uma variável n está valendo 10 dentro dela e executarmos n += 5 no JavaScript,
0:33
qual será o seu novo valor? você sabe me dizer o que acontece com n quando esse comando é executado?
0:38
E por último você sabe o que acontece quando eu coloco ++ ou - - do lado de uma variável ?
0:44
E para cada uma das perguntas que a gente acabou de fazer, se você não sabe a resposta,
0:47
não esqueça, clique aqui em cima, vai na primeira playlist que a gente colocou, deixa separado,
0:53
porque é sinal de que você pulou uma aula e não assistiu a parte 1 desse vídeo,
0:57
que começa a partir de agora
0:59
Legendas: Samara Affonso
1:11
Olá, pequeno Gafanhoto! Seja bem-vindo à mais uma aula! Essa é a oitava aula do seu Curso em Vídeo
1:17
de JavaScript cem por cento patrocinado pelo Google. O meu nome é Gustavo Guanabara, eu sou seu professor
1:22
E, como eu disse no início do vídeo, no vídeo anterior, na aula 7, a gente viu a parte 1 sobre operadores
1:28
Começa agora a aula 8, onde nós ainda vamos falar sobre operadores. Só que essa é a parte 2 do conceito
1:35
E eu não precisava nem dizer que se você não assistiu a parte 1, é muito importante que você assista antes de assistir à parte 2
1:42
E se você se lembra muito bem da aula anterior, a gente falou que o JavaScript possui uma série de operadores,
1:47
operadores aritméticos, de atribuição, relacionais, lógicos e o operador ternário
1:53
Na aula anterior, a gente abrangeu os dois primeiros, o aritmético e o de atribuição.
1:57
Então, isso eu não vou falar mais. E como você deve imaginar, nessa aula a gente vai ver os
2:02
operadores relacionais, lógicos e o operador ternário. Mas, nessa aula também vou utilizar os operadores
2:08
da aula anterior. Então, não dá mole, assiste o vídeo e pratica, mais importante do que só assistir.
2:14
Os operadores relacionais do JavaScript são os operadores relacionais da grande maioria
2:18
das linguagens de programação. São os operadores de maior, menor, maior ou igual, menor ou igual,
2:24
igual e diferente. E, eu tenho um macete para te mostrar. Tem muita gente que dentro de sala de aula,
2:30
na hora em que eu mostro, tem muita dificuldade em saber a diferença entre o maior e o menor.
2:34
Qual sinal é maior? Qual sinal é menor? Isso é mais comum do que você pode imaginar.
2:38
Eu tenho sempre um macete. Olhe aqui embaixo. Eu vou desenhar dois operadores. Não sei qual é o maior,
2:45
não sei qual é o menor, mas os dois estão desenhados aqui embaixo. Eu vou fazer o seguinte:
2:50
No primeiro, tem a linha de cima e a linha debaixo. Você tem os operadores
2:55
e aqui é a linha de cima e a linha de baixo. Pega a parte de baixo e divide pela metade
2:59
E vou fazer isso no primeiro. Então, dividi o primeiro pela metade. Vou fazer a mesma coisa no outro,
3:05
vou dividir pela metade também. E agora que você está com eles divididos pela metade,
3:08
vire sua cabeça um pouquinho pra direita e olhe aqui embaixo. Um deles virou o número 4 e o outro virou
3:15
o número 7. E entre o 4 e o 7, qual deles é o menor? Qual deles é o maior? Obviamente, o 4 é menor e o 7 é maior
3:23
Sendo assim, o símbolo que virou 4 é o sinal de menor, o símbolo que virou 7 é o sinal de maior.
3:29
Então, sempre que você tiver um sinal, faz um risco na parte de baixo.
3:32
Se virar 4, esse é o sinal de menor. Se virar 7 esse é o sinal é de maior. Fica a dica pra você.
3:38
E o que eu vou fazer aqui do lado é, exatamente, o que a gente fez na aula anterior.
3:41
Vou colocar valores, colocar qualquer valor. Vou usar só valores inteiros, mas também serve em valores reais,
3:47
que são aqueles valores que tenha vírgula e a minha tarefa agora é descobrir o resultado
3:52
de todas essas expressões que a gente acabou de gerar. É importante dizer o seguinte:
3:56
para toda a expressão que tenha um operador relacional ligado à ela, o resultado dessa expressão
4:02
vai ser sempre um valor booleano, vai ser um valor do tipo verdadeiro ou falso. Vamos analisar o primeiro
4:08
5
4:09
se você olhar aquele e fizer o risco embaixo você vai ver que vai virar um 7. O 5 é maior do que 2 ?
4:14
O valor 5 é maior do que o valor 2? Sim. Então, se o valor 5 é maior que o valor 2,
4:19
o resultado dessa expressão é "true", que é o valor verdadeiro. No segundo,
4:24
7 é menor do que 4? Não. O 7 não é menor que 4. Então, o resultado é "false",
4:29
que é falso. No próximo, 8 é maior ou igual a 8? Note que eu falo "maior ou igual". Eu não falo "maior e igual".
4:38
Uma coisa não pode ser maior e igual à outra. Ou é maior ou é igual.
4:42
8 não é maior do que 8, mas ele é igual. Então, isso é verdadeiro
4:47
O próximo é: O 9 é menor ou igual a 7? Não.O 9 é maior. Ele nem é menor, nem é igual.
4:52
Então, o próximo, é falso. Aqui embaixo tem o sinal de igual e perceba o seguinte:
4:59
a igualdade no JavaScript não é 1 sinal de igual. A gente já viu várias vezes, durante várias aulas que
5:05
um símbolo de igual no JavaScript é a mesma coisa que muitas outras linguagens de programação,
5:09
a gente lê como "recebe". Ele é um operador de atribuição. Ele não é um operador de igualdade.
5:14
O operador de igualdade do JavaScript é esse aqui. Sendo assim, 5 é igual a 5 ? Sim. Então, true.
5:21
E por último, 4... Esse "!=" quer dizer "não igual". E uma coisa que não é igual, é diferente
5:28
Então, 4 é diferente de 4 ? Não. 4 é igual a quatro. Então é false. E para você treinar, para testar os seus
5:34
conhecimentos, a gente pode abrir o Node. Vamos diretamente para o nosso computador.
5:41
Então, já estou aqui no Windows e vou abrir o Node.js, só vou digitar "Node", a gente já instalou no início do curso.
5:48
Você pode também abrir pelo Visual Studio, mas estou dentro do Node e eu posso fazer o seguinte:
5:54
5 é maior do que 2? 5 é maior que 2. Então, true
5:58
08 é menor do que 4? 8 não é menor do que 4. False. E eu posso fazer isso também com variáveis
6:04
A variável "a" recebe 8 e a variável "b" recebe 15. E eu vou testar o seguinte:
6:10
"a" é maior do que "b"? Sendo "a" igual a 8 e "b" igual a 15, o "a" é menor.
6:15
Está vendo? O "a" é menor do que o "b"? Sim. Agora, se eu fizer assim, por exemplo:
6:19
posso reunir algumas expressões. a <= b - 10. "b-10" é igual a 5
6:27
"a", que é 8, é menor ou igual a "b-10" ? Você percebe que quando eu tenho operadores relacionais e operadores
6:33
aritméticos na mesma linha, na mesma expressão, primeiro eu faço os aritméticos depois eu vou fazer
6:39
os relacionais. Então, b-10 vai dar 5. E, 8 é menor ou igual a 5?
6:45
8 não é menor ou igual, é maior. Certo? Então, daria falso. Ficou claro? Então, faça seus treinamentos,
6:52
brinque com as coisas. Por exemplo, a == b ? "a" não é igual a "b".
6:56
a != b ? Verdade, "a" é diferente de "b" e para você dar mais uma praticada, dê uma olhada
7:03
nos exemplos que a gente colocou. Vou colocar vários exemplos de comparação e vocês vão ver,
7:08
mais ou menos, como funciona utilizando nomes mais claros para as variáveis.
7:12
A primeira que está aqui embaixo é, o preço é maior ou igual a 200,50?
7:16
O que estou testando é, o preço é maior ou igual a 200 reais e 50 centavos, por exemplo ?
7:22
Outra, a idade é menor que 18 ? O que ele está perguntando é: A pessoa é menor de 18 anos?
7:27
18 anos não entra nessa comparação. Tem que ser 17 para trás. O próximo é, o curso é igual a JavaScript?
7:33
Então, eu posso testar também variáveis string. A string curso é igual a string JavaScript? O curso é
7:40
JavaScript? E por último, n1 != n2 ? O primeiro número é diferente do segundo?
7:45
A gente tem vários exemplos que a gente pode colocar. E a gente tem que falar também sobre os operadores
7:49
relacionais que a gente chama de operadores de identidade. Dá uma olhadinha aqui e você vai entender
7:54
com facilidade. Por exemplo, aqui do lado, 5 == 5? Sim. Então, true.
8:00
Agora, se eu tiver 5 == '5' ? É a mesma frase, foi exatamente igual.
8:06
Talvez, se você estiver em uma outra aba, você vai falar: " Cinco igual a cinco, ok ".
8:10
Mas, dá uma olhada aqui do lado, volta para janela do Youtube se você abriu outra tela.
8:13
Esse cinco é igual ao outro cinco? Pensa antes de fazer. O que você acha? E a resposta é bem simples
8:20
Para o JavaScript, 5 é, sim igual a '5'.
8:25
Porque o sinal de igualdade não testa o tipo. Eu tenho valor 5 inteiro lá no início
8:30
E eu tenho valor 5 em string aqui perto de mim. O que o JavaScript faz é analisar se esse cinco
8:36
têm o mesmo valor que o outro, e são dois valores de tipos diferentes. Mas, eles têm a mesma grandeza.
8:42
Então, o JavaScript diz que sim. Então, você fala: " Guanabara, isso é loucura,
8:47
não dá pra funcionar muito bem". E eu até concordo com você,
8:51
mas para isso existe um outro operador, que é o operador de identidade
8:55
também conhecido como operador de igualdade restrita, que no lugar de dois sinais de igual, são
9:01
três sinais de igual. Nesse caso, eu estou testando se os dois cinco que estão na terceira linha são idênticos
9:08
e idêntico é ser do mesmo valor e do mesmo tipo.
9:12
No caso, eles têm o mesmo valor. Mas, eles não têm o mesmo tipo. Então,
9:16
0 5 idêntico a 5 (que a terceira linha, a gente vai ler assim), ele é falso.
9:21
E uma dúvida pode surgir: " Guanabara, e se aparecer isso? 5 === 5". Sim, esses aqui idênticos.
9:29
Não acredita? Está na dúvida? Volto a dizer, não confie mim não. Abra o seu Node e vamos treinar.
9:35
Olha só, voltei no Node. Eu vou fazer o seguinte: primeiro, eu vou limpar a tela. Ctrl+L
9:39
Limpei a tela e vamos fazer o seguinte:
9:42
5 == 5 ? Vamos ver. Cinco é igual a cinco, mesmo ele sendo de tipos diferentes.
9:48
Quer ver? Por exemplo, eu vou ter uma variável x, que vai valer 5
9:53
E eu tenho uma variável y, que vai valer 5. Certo? Desse jeito, se eu testar typeof x
10:00
é number e typeof y é string. Então, eles são de tipos diferentes
10:06
x == y ? Sim, eles são iguais. Agora, x === y ? Falso. Ele não é idêntico.
10:14
Eles têm o mesmo valor, que é 5, mas eles são de tipos diferentes. Espero que tenha ficado bem claro.
10:20
E a mesma coisa acontece com o diferente. x != y ? Não, não é. Agora, se eu boto, x !== y
10:29
(chamamos isso de desigual restrito), e ele da "true". Então, no desigual restrito eles são de tipos diferentes,
10:39
mas o valor interno é o mesmo. Deu pra entender? E com isso, a gente chega ao final dos primeiros
10:45
operadores dessa aula, que são os operadores relacionais.
10:48
A gente vai fazer um monte de testes, fica tranquilo, fica tranquila que vai vir bastante coisa por aí
10:53
eu só preciso que você tenha entendido. E agora, a gente vai ver os operadores lógicos, que no JavaScript
10:58
são três: a exclamação, os dois "&" comerciais e os dois pipes, que são dois traços em pé.
11:05
É só procurar no seu teclado. Geralmente, é a mesma tecla da barra invertida, e geralmente,
11:10
ficava perto do Shift, do lado direito do teclado. Em primeiro lugar, vamos à exclamação. Sempre que
11:15
aparecer uma exclamação, e já apareceu nessa aula, quer dizer negação, quer dizer não.
11:20
Sempre que aparecerem dois "&" comerciais, isso é uma conjunção. Ou a gente chama de "e", é o nosso
11:26
"e" lógico. E o último, que são os dois pipes, são disjunções ou então é o nosso
11:32
" ou" lógico. É muito simples a gente entender um "e" e um "ou". O "não" é mais fácil de todos.
11:37
Eu peço para você assim: "Olha, eu quero uma caneta, mas ela não pode ser azul". É só você me entregar
11:42
uma caneta de qualquer cor, menos da cor azul. Se eu digo pra você: "Olha só eu quero uma caneta azul e uma
11:49
caneta vermelha". Eu só vou ficar satisfeito se você entregar as duas, porque eu quero uma azul
11:54
e uma vermelha. Agora, se eu uso "ou", a disjunção, é um pouco diferente: "Olha só, eu quero uma caneta azul
12:00
ou uma caneta vermelha. Se eu entregar as duas, está ótimo. Eu queria uma ou outra, ganhei as duas,
12:06
estou no lucro. Se eu te entregar a azul, ok. Se eu te entregar a vermelha, ok também. Se eu não te entregar
12:12
nenhuma ou uma cor que você não quer, nesse caso, eu não fico satisfeito. Então deu para você entender
12:16
uma coisa e outra? E qual é a relação existente entre uma coisa ou outra?
12:21
Eu espero, sinceramente, que sim. Mas, logo a gente vai fazer uns testes.
12:24
Vamos começar pelo operador de negação, o "não". Ele é tratado como operador unário, isto é, ele só tem
12:30
um operando. Ou seja, depois da exclamação ou eu boto "true" ou eu boto "false".
12:35
Ou eu boto uma expressão que vai dar "true" ou "false". Na primeira, uma coisa que não é verdadeira, o que é ?
12:41
é algo falso. Uma coisa que não é falsa, é verdadeira.
12:45
Esse operador é o mais fácil de todos. Vamos partir agora para o operador de conjunção
12:49
Operador de conjunção são os dois "&" comerciais. Esse operador, assim como o de disjunção também,
12:55
ele é um operador binário. Isto é, eu tenho dois valores lógicos, um de cada lado
13:00
Entaõ, eu vou ter o resultado lógico do resultado dessa expressão.Veja na primeira linha
13:05
" true&&true ", ou seja, verdadeiro e verdadeiro. "Eu quero uma caneta azul e uma caneta vermelha".
13:11
Eu consegui as duas, eu fico satisfeito. Então, true. Para qualquer outra combinação...
13:17
Se eu conseguir a vermelha, mas não conseguir a azul. Se eu conseguir a azul, mas não conseguir a vermelha.
13:21
Ou se eu não conseguir nenhuma delas ou de uma outra cor, para todos esses outros casos a minha resposta
13:26
é falso. Consegui a primeira, true e a outra não, false. Consegui a segunda, só a segunda é true,
13:32
a primeira não, false também. As duas foram falsas, false também. É aquele negócio, só me satisfaz
13:38
se as duas forem verdadeiras. E por fim, a disjunção que são os dois pipes, são as 2 barras verticais.
13:45
Também é um operador binário, como eu acabei de dizer, que tem dois valores lógicos, um de cada lado.
13:51
Dependendo da posição deles e do resultado lógico, eu tenho também o valor lógico de resultado.
13:56
E, na disjunção basta que um deles seja verdadeiro para o resultado ser verdadeiro. Por exemplo, na primeira,
14:02
os dois são verdadeiros, ok. Verdadeiro também. O primeiro é verdadeiro, mas o segundo é falso.
14:07
Mas, basta que um seja verdadeiro para me dar o resultado verdadeiro. O terceiro também,
14:12
o segundo é verdadeiro, mas o primeiro é falso. Mesmo assim, verdadeiro como resultado.
14:16
E, no último, não tem nenhum verdadeiro. E nesse caso, o meu resultado é falso.
14:20
Vamos fazer alguns exemplos práticos no Node.js pra você ver o que eu tô falando.
14:25
Então, estou com o terminal limpo e vou criar o seguinte: vou criar uma variável "a", recebendo 5.
14:31
E uma variável "b", recebendo 8. Eu posso fazer o seguinte, eu posso fazer de maneira simples.
14:36
Posso botar true && false, vai dar falso. É uma coisa verdadeira e para o "e" só se os dois forem verdadeiras.
14:42
Aqui deu falso. Se os dois forem verdadeiras, então, dá verdadeiro. No "ou" é o contrário. Se forem dois falsos,
14:50
vai dar a falso. Qualquer outra combinação,vai dar verdadeiro. Faz esses testes,
14:55
faz essas brincadeiras. Mas, o mais importante é, por exemplo,
14:59
a > b && b% 2 == 0
15:04
Vamos entender o seguinte, quando eu tenho operadores aritméticos, relacionais e lógicos
15:09
na mesma expressão, olhe a ordem que é feita. Primeiro vou fazer todos os operadores aritméticos
15:15
depois eu vou fazer os operadores relacionais e depois eu vou fazer os operadores lógicos.
15:20
Anota isso. Então, vamos lá, primeiro o operador aritmético
15:25
b % 2 (o "b" valendo 8 ), 8 dividido por 2 da 4, resto 0
15:29
Beleza, esse lado deu verdade. E você fala: " Ah deu verdade, então é verdade". Calma
15:34
Esse lado todo, isso tudo deu verdade. Agora eu tenho um "e" aqui,
15:39
mas eu tenho um relacional, entre o "e" e o relacional, eu vou fazer o relacional primeiro. a > b ?
15:44
5 não é maior do que 8. Então esse lado da falso, se esse lado da falso e esse lado da verdadeiro,
15:50
é a mesma coisa que eu testar falso e verdadeiro. Falso e verdadeiro, a gente já viu que dá falso.
15:56
Então eu vou dar Enter, deu falso. Agora eu vou testar, por exemplo
15:59
a <= b || b / 2 == 2
16:07
Olha só, analise, primeiro eu faço usando operadores aritméticos. Então fazer o "b / 2"
16:13
b / 2 é igual a 4. 4 é igual a 2? Não. Então, esse deu falso. Aqui eu tenho outro relacional, a <= b ?
16:20
"a" é menor do q "b". Então, esse lado dá verdadeiro. Aqui sendo verdadeiro e aqui sendo falso,
16:25
tendo um "ou" como comparação no meio, basta que um seja verdadeiro para o resultado ser verdadeiro.
16:31
Então, aqui está provado que eu tenho um valor verdadeiro. Deu pra entender?
16:36
E se por acaso numa mesma expressão eu tiver um "e", um "ou" e um "não", a ordem de execução é
16:41
sempre essa, anota no seu caderno, primeiro o "não", depois o "e", depois o "ou". Talvez, mais pra frente
16:47
você precise fazer isso. E como a gente fez anteriormente, estão surgindo alguns exemplos
16:52
aqui embaixo. Vou montar algumas expressões e vou lê-las em português fluente, em português corrente
16:58
contigo. Dá uma olhadinha, a primeira é: idade >= 15 && idade <= 17?
17:04
Esse tipo de expressão, eu coloco quando eu quero dizer o seguinte: " A idade está entre 15 e 17 ? "
17:09
Incluindo 15 e incluindo 17, você estávendo que o sinal é de maior ou igual e menor ou igual.
17:14
Então, a idade está entre 15 e 17, incluindo esses dois valores? O segundo, estado == 'RJ' || estado == ' SP'
17:21
Eu quero saber, a pessoa mora no Rio de Janeiro ou mora em São Paulo ?
17:24
Olha como se escreve a expressão em JavaScript. E por último, salário > 1500 && sexo != 'M'
17:30
Eu quero saber: "Olha, é uma mulher que ganha mais de 1500 ?" Deu para entender como isso funciona ?
17:36
E você está falando: " Não é uma mulher, é um homem ". Não o sexo é diferente de masculino
17:41
Eu espero que com essa explicação tudo tenha ficado bem claro na sua cabeça.
17:45
E se por acaso ainda não ficou, o que está faltando? Prática!
17:48
É só você praticar que você aprende. E mais uma vez para ficar bem claro e para sair bonitinho no print
17:54
Dá uma olhada na ordem de precedência agora que a gente viu uma quantidade maior de operadores.
18:00
Veja, sempre de cima para baixo. Dentro de uma expressão a gente, em primeiro lugar, vai fazer
18:05
os operadores aritméticos, parêntesis, asteriscos, a exponenciação, a divisão, a multiplicação, o módulo
18:12
naquela ordem que você já anotou. Depois que você fizer todos os operadores aritméticos,
18:16
você vai para os operadores relacionais. Os operadores relacionais não tem ordem de precedência,
18:21
quem aparecer primeiro vai ser feito primeiro a leitura da esquerda para a direita
18:26
E por fim, a gente vai fazer os operadores lógicos, que tem sim uma ordem de precedência,
18:31
que é como eu acabei de dizer, primeiro o "não", depois o "e", e por último o "ou"
18:36
Cara, tira um print dessa tela, junta com o print da aula anterior, onde a gente falou sobre
18:42
a ordem de precedência dos aritméticos, porque quando você tiver uma expressão completa,
18:46
você não fica confuso na hora de resolver. Isso aqui é muito importante pra você, vai por mim. E para terminar
18:53
a aula, falta gente falar sobre o operador, que é o operador ternário. Na verdade, o operador ternário
18:58
é composto por dois símbolos que aparecem na mesma expressão, a interrogação(?) e os dois pontos (:) .
19:03
Eu vou tirar essa tela aqui do lado e eu vou puxar até aqui de baixo para a gente poder ver,
19:07
porque o comando acaba ficando muito grande. Então, como eu disse, o operador ternário é a interrogação
19:12
e os dois pontos dentro de uma mesma expressão. Dá uma olhada, ele se chama ternário
19:16
porque ele tem três partes. Dá uma olhada nos blocos que aparecem aqui embaixo. Esses três blocos
19:21
são os blocos de teste, o bloco verdadeiro e o bloco falso. É por isso, que esse operador se chama ternário,
19:27
porque junta três operandos. O primeiro que está aqui embaixo é um teste lógico. É um resultado que dá
19:32
verdadeiro ou falso, um teste como qualquer outro que a gente fez aqui durante essa aula inteira.
19:37
O que está aqui no meio é o que vai acontecer quando esse teste lógico for verdadeiro
19:41
e aqui no final, o que vai acontecer quando esse teste lógico for falso
19:46
Vou botar um exemplo prático. Da uma olhada. média <= 7.0 ? "aprovado" : "reprovado"
19:52
O que acontece? Se eu digitar isso, ele vai aparecer ou aprovado ou reprovado
19:59
depende do teste lógico aqui. Vamos abrir o Node.js e vamos fazer um teste. Então, eu vou criar uma
20:05
variável média. Vou fazer, exatamente, aquele exemplo. Vou botar uma média valendo cinco e meio.
20:10
Vamos verificar, média > 7? "APROVADO" : "REPROVADO"
20:21
É assim que vai funcionar, se a média é 5,5, ele não é maior do que 7. Então o resultado do teste lógico,
20:27
que é esse aqui, é falso. Então ele vai cair no reprovado.
20:31
Vou dar Enter e vamos ver. Reprovado. Se eu mudar a média, vou botar média += 3
20:37
Se eu faço média += 3, ela pulou para 8,5. Certo? A gente viu isso aqui nos operadores de atribuição,
20:42
no vídeo anterior. Se você não viu, aperta aqui em cima, na minha cabeça.
20:46
Tem a primeira playlist, que é o curso completo. Vai direto pra aula 7, não perde ela não.
20:51
Então, agora se botar média aqui, ela é 8,5. Se eu botar o mesmo comando, no Node.js usa certa para cima
20:58
e para baixo para repetir os comandos. Então, botei seta para cima algumas vezes até chegar no comando
21:02
média > 7 ? Agora ela é maior que 7. Então, ele me mostra "APROVADO".
21:06
E eu consigo fazer isso aqui... Vou fazer um limpeza e vou colocar assim:
21:10
var x = 8. E eu posso fazer o seguinte:
21:14
var res = x % 2 == 0 ? 5:9
21:24
O que significa essa linha? Pode parecer um pouco confusa. É simples, a minha variável res vai receber
21:31
ou cinco ou nove. Vai depender do que? Se o x % 2 == 0. E que o que eu vou fazer primeiro?
21:39
Eu faço primeiros operadores aritméticos. O operador ternário é sempre o último a ser feito.
21:44
Então, o x % 2 é 8 dividido por 2, que é igual a 4 e resta 0
21:49
0, que é isso que eu acabei marcar, é igual a 0? Sim, é verdade.
21:53
Se é verdade, eu vou executar esta parte aqui. Então, o 5 que vai ser atribuído para res
21:59
Vou da Enter, ele deu "undefined". Mas, eu quero saber quanto é x.
22:03
x é igual a 8. E quero saber quanto é "res".
22:06
"res" vai ser igual a 5. Certo? Porque res é igual a 5? Porque ele o vai receber cinco ou vai receber 9.
22:13
Vai depender se isso aqui é verdadeiro ou falso. Deu pra entender ? Vamos para mais um exemplo
22:18
A minha variável r vai receber... Primeiro, eu vou fazer o seguinte, a minha variável idade vai receber 19.
22:26
A pessoa tem 19 anos. E eu vou fazer a minha variável r ser o seguinte
22:30
idade <= 18? "MAIOR" : "MENOR'
22:37
O que acontece aqui? a minha variável r vai receber ou maior ou menor.
22:41
Isso vai depender se a minha idade é maior ou igual a 18. Deu pra entender?
22:45
A minha idade 19. É maior ou igual a 18? Verdade. Então, ele vai pegar palavra maior e vai jogar dentro da
22:51
variável r. Vamos dar Enter, ele deu "undefined". Vou botar o "r" e ele vai mostrar "MAIOR".
22:57
E foi, exatamente, o que eu acabei de fazer. Treina isso daqui que está aparecendo na tela na sua própria casa,
23:02
com certeza você vai entender. Mas, não vale dizer que você entendeu sem treinar,
23:07
porque mais cedo ou mais tarde você vai ver que você não aprendeu, você só constatou
23:11
que eu expliquei direitinho, só vai entrar na cabeça, na hora em que você treinar.
23:17
Então é isso, meu querido. É isso, minha querida. Eu me despeço por aqui e na aula que vem a gente vai voltar lá
23:24
para o navegador e vamos aprender como é que a gente cria o site e esse site se integra com o JavaScript.
23:30
Na próxima aula, a gente vai falar sobre DOM. A sigla DOM.
23:35
Você vai entender o que é e vai começar a fazer suas integrações de JavaScript com HTML e CSS.
23:41
Inclusive, vou te orientar para a instalação de alguns programinhas simples, extras no seu Visual Studio Code
23:47
e no seu Google Chrome e a gente vai dar os primeiros passos em DOM
23:51
dentro da linguagem JavaScript. Mas, nunca se esqueça, treine todos os conhecimentos
23:56
que você viu durante essa aula e todas as aulas anteriores
23:58
porque tudo tá te levando a conhecer um pouco mais de JavaScript.
24:02
Um grande abraço, bons treinos e até a próxima!
24:08
Legendas: Samara Affonso
*/
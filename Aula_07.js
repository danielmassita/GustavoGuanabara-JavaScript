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
*/

/* OPERADORES ARITMÉTICOS (binários) 
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

/* ORDEM DE PRECEDÊNCIA DE TODAS AS LINGUAGENS
(de cima pra baixo, prioridades)

    ( )     parênteses
    **      exponenciação
    * / %   multiplicação, divisão e divisão inteira (esq. -> dir.)
    + -     somas, subtrações

*/

/* ATRIBUIÇÃO SIMPLES (Operador de Atribuição)
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

/* AUTO-ATRIBUIÇÕES
var n = 3           // 3
n = n + 4           // 7
n = n - 5           // 2
n = n * 4           // 8
n = n / 2           // 4
n = n ** 2          // 16
n = n % 5           // 1

A variável começou como sendo "3", mas ao longo da cadeia de atribuições (novos valores), teve seu valor atualizado conforme cada nova linha.

var n = 3
n += 4
n -= 5
n *= 4
n /= 2
n **= 2
n %= 5

Essa sintaxe funciona SOMENTE quando se trata exatamente da mesma variável, pra evitar repetir ela mesma.

*/ 

/* 
NODE.JS
> var num = 8
undefined
> num += 2
10
> num %= 2
0
> num = 3
3
> num **= 2
9
*/

/* INCREMENTO (pré-incremento, pós-incremento)
var x = 5
x = x + 1       // 6
x = x - 1       // 5

x += 1
x -= 1

x++ (pós-incremento)
--x (pré-incremento)

*/

/* TRANSCRIÇÃO 
0:00
Antes mesmo de fazer as perguntas que eu estou acostumado a fazer,
0:02
todo início de vídeo, eu tenho um grande conselho a te dar:
0:05
Se por acaso você veio direto, você está maratonando todas as aulas de JavaScript
0:09
você está assistindo uma depois da outra, uma depois da outra.
0:11
Chegou o momento de dar uma pausa, respirar, descansar a cabeça
0:15
fazer alguns exercícios, se você não estiver muito cansado. Porque a aula passada foi pesada.
0:21
E quando a gente está aprendendo alguma coisa tem que dar um descanso para o nosso cérebro,
0:24
dar uma dormida e não se esquece
0:26
de fazer exercícios praticar na sua plataforma.
0:29
Senão você vai estar fazendo o que a gente falou lá na primeira aula:
0:32
"Você não tá aprendendo a programar,
0:33
você só está constatando que eu sei programar e você está assistindo eu programar."
0:38
Segue o meu conselho vai por mim,
0:39
talvez seja a hora de dar uma paradinha, mas se você acha que não está na hora de parar
0:43
ainda, ou você deu uma parada está chegando nessa aula agora.
0:46
Vamos as nossas perguntas logo no início, que eu peço que você responda:
0:50
Em primeiro lugar, como é possível guardar o valor digitado no prompt dentro de uma variável?
0:55
A gente viu que o prompt é uma telinha e que o que foi digitado a gente não tinha como guardar.
0:59
Você já sabe guardar esse valor?
1:01
E a segunda pergunta, é sobre o mesmo assunto, e se eu em vez de um nome de uma pessoa,
1:05
ler um número, será que eu consigo usar esse número em uma conta
1:09
E se neste momento você está pensando: "Eu consigo, é só ler e ele serve uma conta."
1:12
Serve não.
1:13
Você precisa fazer uma manipulação de dados, por isso que a anterior tem esse nome
1:17
E por falar em manipulação de dados, se a pessoa digitar o nome dela
1:20
você consegue jogar o nome dela todo para a letra maiúscula, inclusive seguindo os acentos,
1:25
Isso tudo usando um só comando? Você sabe que o JavaScript pode fazer isso para você?
1:29
E o melhor de tudo:
1:30
Se você estiver lendo o salário de uma pessoa, ou por exemplo, o preço de um produto
1:34
você sabe escrever esse valor no formato monetário?
1:37
Você receberá o preço de um produto, você consegue dizer: "Esse produto custa..."
1:41
R$, botar vírgula no lugar certo, botar o ponto no lugar certo,
1:45
Também usando um só comando?
1:46
E se pra alguma dessas quatro perguntas, que eu acabei de fazer, sua resposta é "Não sei fazer."
1:51
É sinal de que você não assistiu a aula anterior
1:53
Clique em cima a primeira playlist é sempre a que vai trazer o curso de JavaScript.
1:58
Segue a sequência que a gente recomendou, porque cada aula tem uma quantidade bem grande de informação.
2:03
Agora, se por acaso você conseguiu responder todas as perguntas sem problema nenhum,
2:08
É sinal de que está mandando muito bem e seguindo a as aulas.
2:11
Sendo assim, seja bem vindo a mais uma delas
2:14
Legendas: Rayssa Victoria
2:27
Olá, pequeno Gafanhoto, seja bem vindo a mais uma aula do seu curso em vídeo de
2:32
JavaScript, totalmente patrocinado pelo Google. Meu nome é Gustavo Guanabara, eu sou seu professor,
2:37
e agora nós chegamos a aula de número 7 e nessa sétima aula a gente vai ver
2:41
Operadores do JavaScript.
2:43
Inclusive, o assunto de operadores é tão grande que a gente dividiu em duas partes
2:48
essa é a primeira delas.
2:50
E como eu te dei o conselho lá no início, se por acaso você está vendo essas aulas em uma tacada só,
2:55
tipo maratonando série do netflix
2:58
Dá uma pausa, respira, deixa seu cérebro trabalhar em guardar as informações que vieram até aqui.
3:03
E tão importante quanto descansar, é praticar
3:08
Não se esquece de praticar no seu computador, você tem que fazer as coisas, não eu.
3:12
Mas vamos falar sobre o assunto dessa aula que é de operadores.
3:15
O JavaScript possui várias famílias de operadores, na verdade,
3:19
é que nesse curso a gente nem vai ver todas as famílias,
3:22
a gente vai se focar nas seguintes: a gente vai falar sobre os operadores aritméticos,
3:26
os operadores de atribuição, os operadores relacionais, os lógicos e o operador ternário.
3:32
Na verdade, existem outras famílias de operadores dentro do JavaScript
3:36
inclusive, o typeoff ,que a gente viu anteriormente, type off.
3:39
Então, ele é um tipo de operador, mas a gente vai focar
3:42
nesses aqui, que pra esse curso tá bom demais.
3:45
Mais para frente, você se aprofunda um pouco mais na linguagem.
3:48
E nessa aula como a gente tem uma quantidade grande de operadores
3:51
a gente vai se focar nos dois primeiros os aritméticos e os operadores de atribuição.
3:56
Já deixa o seu computador ligado, assiste o vídeo no celular ou em uma tela secundária,
4:01
para você ir fazendo junto comigo. E vamos começar pelo primeiro da lista:
4:05
Os operadores aritméticos.
4:07
Esses operadores que vão aparecer são todos os operadores aritméticos a linguagem JavaScript.
4:11
Eles são os operadores que são usados para fazer cálculo, e se nesse momento você está pensando:
4:15
"Ah Guanabara, lá vem você com o cálculo, bem que me falaram que pra programar precisa ser um mestre da
4:20
matemática, precisa saber muita matemática."
4:22
Vai por mim, você não precisa saber muita matemática,
4:25
você precisa saber matemática do dia a dia,
4:27
um cálculo de porcentagem, um cálculo de média, somar as coisas, tirar coisas multiplicar uma outra,
4:32
enfim, coisas básicas.
4:34
Assisti esse vídeo afinal você vai ver o quão tranquilo é você fazer operações aritméticas em JavaScript.
4:40
E para exemplificar, cada um deles eu vou colocar os operadores que, já estão na tela,
4:44
e os operandos, que são aqueles que vão fazer os operadores funcionarem.
4:48
Todos esses operadores, são operadores que a gente chama de binários,
4:53
são operadores que precisam de 2 operandos.
4:54
No nosso caso, eu coloquei 5 e 2 pra todo mundo.
4:57
E então a gente vai ver resultado da operação de cada um deles e o resultado na tela
5:02
que seria, para poder mostrar o resultado.
5:04
Vamos começar com os dois mais simples, os dois primeiros da lista
5:07
5 + 2 e 5 - 2 todo mundo sabe fazer conta de mais e de menos
5:11
5 + 2 é 7 em qualquer lugar do mundo.
5:14
5 - 2 é 3 sem problema nenhum.
5:17
O terceiro, se você já é um problema do experiente, você já sabe,
5:20
mas se você tá começando agora no mundo da programação
5:23
saiba que a grande maioria das linguagens, na verdade todas as que eu conheço,
5:27
a multiplicação é feita por um asterisco, e não pelo sinal de x ou pelo sinal de ponto, como a matemática coloca.
5:33
Sempre que você quiser multiplicar um valor pelo outro, usa o asterisco.
5:36
Então essa próxima a gente lê 5 vezes 2. 5 vezes dois, 10.
5:40
A divisão, é o próximo, é bem fácil também identificar, é a barrinha.
5:44
Então o 5/2 ,para o JavaScript, é divisão real,
5:48
isso é, aquela divisão que leva números reais, que leva a vírgula.
5:51
Então, 5 dividido por 2 2.5, dois e meio.
5:55
E você está pensando: "Nossa, mas só existe esse tipo de divisão, a divisão real."
5:59
Não, existe também a divisão inteira.
6:01
Inclusive, o próximo operador precisa que você saiba fazer uma divisão inteira.
6:05
Divisão inteira é bem tranquilo de fazer, é aquela divisão em que você não usa vírgula
6:10
quando você for precisar colocar vírgula você para dividir.
6:14
Basicamente assim, 5 % 2 , que é o próximo operador
6:17
ele não é usado para calcular porcentagem, como muita gente pode pensar,
6:21
ele é o operador de resto da divisão inteira. E como é que se faz a divisão inteira?
6:25
Vou fazer aqui, 5 dividido por 2, vou armar aqui a conta .
6:29
5 dividido por, 2 é 2. Vou colocar aqui embaixo, 2 vezes 2 é 4
6:36
4 pra chegar até cinco resta 1.
6:39
Se por acaso eu continuar dividindo eu vou ter que colocar uma vírgula do lado do 2
6:43
Não é isso? Coloca a vírgula do lado do 2, o 0 no lado do 1
6:47
e continua dividindo até tentar chegar ao resto da divisão 0
6:50
No nosso caso quando for o momento de colocar a vírgula, a gente para, e fica a divisão desse jeito aqui.
6:55
O 1, que está aqui embaixo, é exatamente o resto da divisão inteira. Então, esse 1 que está aqui embaixo
7:02
vem aqui pro lado do 5 % 2. Então, 5 % 2 é o resto da divisão de 5 / 2 , e isso, sempre a divisão inteira.
7:10
Espero que você tenha entendido, e se não entendeu não tem problema,
7:13
é só você voltar o vídeo assistir esse pedaço de novo, pega um pedaço de papel escreve 5 dividido por 2
7:18
tenta dividir das duas maneiras, na forma inteira e na forma real, com certeza você vai entender.
7:23
O por cento é o resto da divisão inteira.
7:25
E o último operador, esse que está aparecendo aqui embaixo,
7:28
é meio confuso, parece multiplicado duas vezes. Não é bem multiplicado duas vezes
7:32
esse operador surgiu no JavaScript nas últimas versões,
7:36
se você estudou javascript há muito tempo esse operador sequer existia, mas ele é muito útil.
7:41
Ele é a potência.
7:42
Esse 5 dois asteriscos 2 significa 5 ao quadrado, e 5 ao quadrado é 25
7:48
Dá uma olhada, se precisar, pausa esse vídeo e anota todos esses operadores no seu caderno
7:54
o caderno que eu falei lá no início, se você mantiver tudo organizado, bonitinho,
7:58
você vai aprender a escrever pra sempre, e se por acaso surgir alguma dúvida é só consultar o caderno.
8:03
Faz esse favor pra você mesmo, pausa o vídeo agora, copia isso no seu caderno antes da gente prosseguir.
8:08
Espero que você tenha tirado print da tela e eu tenho um aviso muito importante:
8:12
Tome bastante cuidado com o uso dos operadores, isso porque, tanto na programação, quanto na matemática
8:18
existe uma coisa chamada precedência de operadores.
8:21
Quer ver um exemplo simples? Olha oque apareceu aqui do lado: 5 + 3 / 2
8:26
Faz aí, leva o seu tempo 5 + 3 / 2
8:29
pausa o vídeo e já já você volta. Espero que você tenha pausado,
8:32
e se por acaso a sua resposta for 4, eu sinto te informar você errou a conta,
8:37
mas não se preocupa, errar isso no início é muito comum. Eu já vi programadores experientes
8:43
errando essa besteirinha, e eu vou te ensinar como foi feito aqui.
8:46
Na verdade, quando uma mesma expressão tem soma e divisão, primeiro a gente faz a divisão.
8:52
Então, 5 + 3 / 2, não dá 4 se você mandar mostrar na tela, ele vai dar 6.5
8:58
Isso porque, como eu acabei de explicar, em vez dos 5 + 3, se fizer
9:02
5 + 3 dá 8 8 / 2 dá 4 ,só que na verdade ele faz primeiro o 3 / 2
9:08
3 / 2 dá 1.5 , se eu faço 5 + 1.5 , que é o resultado de 3 / 2, então eu tenho o 6.5 que está aparecendo na tela
9:19
Quer ver como isso funciona? Vamos diretamente para o computador
9:22
abre o seu terminal do Node e vamos fazer alguns exemplos
9:27
Estou no meu ambiente e vou iniciar o meu NodeJs, vou colocar aqui NodeJS.
9:33
Ele vai abrir o terminal aqui na tela, dá pra fazer também pelo Visual Studio Code,
9:36
mas vamos fazer por aqui, a gente sempre vai dar uma revesada.
9:39
Exemplo: 5 + 2 , só colocar 5 + 2, deu 7.
9:43
Vamos fazer assim: 9 % 2. 9 % 2 é o resto da divisão de 9 por 2.
9:51
Isso é divisão inteira.
9:52
9 / 2 dá 4, 2 vezes 4, 8 para 9 resta 1
9:57
Viu? Resto da divisão
9:58
Se eu fizer 9 / 2 é a divisão real e vai dar 4.5.
10:02
Tem linguagem que não dá, se você aprendeu Java você sabe que é um pouco diferente
10:06
mas no JavaScript, 9 dividido por 2 dá 4.5
10:10
Agora, vamos fazer aquele 5 + 3 / 2
10:13
5 + 3 / 2, você vai fazer 5 + 3, 8, dividido por 2, 4
10:17
Então você fala: "Vai mostrar 4", mas ele mostra 6.5. Por que?
10:20
Por que ele fez 3 / 2, então, 1.5 + 5, 6.5
10:25
E tem gente fala assim "Mas Guanabara o meu programa não erro, o javascript no deu erro
10:30
porque minha conta deu errada?"
10:31
Vem um negócio, quando você programa a linguagem só dá erro se você tiver um erro sintático
10:37
Quer ver? Vamos tentar fazer um erro sintático. 5 + 3 , então o erro, a mão escapuliu não saiu o 3
10:45
5 + / 2
10:46
Ele me dá um erro: "A minha expressão regular deu erro" 5+ /2 é um erro, ele inclusive marcou.
10:53
Então, porque esse aqui não deu erro? Simplesmente por que ela não está errada
10:56
essa expressão daqui ela está correta, sintaticamente correta,
11:00
aritmeticamente errada,se você queria calcular a média entre 5 e 3,
11:04
mas na prática, esse comando não tem erro, esse aqui tem.
11:07
Então, toma cuidado quando você vai aprender uma linguagem de programação, seja ela qual for, e você não
11:11
receber erros.Não receber mensagens de erro não significa que seu programa tá certo
11:16
pode significar que ele contém erros sintáticos,
11:19
você não escreveu nenhum comando errado, mas comando pode estar executando uma conta errada
11:23
exatamente como apareceu aqui. Fica a dica pra você. E você pode estar me perguntando:
11:27
"Está bem Guanabara, e se eu quiser fazer 5 + 3 / 2, eu quero fazer 5 + 3 primeiro e depois dividir por dois"
11:34
Nesse caso, meu querido, minha querida, é só você colocar parênteses, exatamente como a matemática faz.
11:39
Se você utilizar os parênteses você muda a ordem de precedência, isso é, você vai fazer primeiro
11:44
5 + 3, que vai dar 8 8 / 2, e então você vai obter o número 4,
11:50
mas não precisa confiar em mim não, vamos abrir o NodeJS e ver se funciona assim.
11:55
Vamos limpar a tela, Ctrl L, ele limpou a tela, e eu vou colocar 5 + 3 / 2
12:01
a gente já viu que dá 6.5.
12:02
Agora, (5 + 3) / 2
12:06
Deu 4. Viu a diferença?
12:09
As duas linhas estão corretas, mas se o seu objetivo é primeiro fazer a soma depois a divisão você
12:14
precisa, sim, executar com parênteses.
12:18
E isso nos traz a um novo assunto que é a ordem de precedência dos operadores.
12:23
Na linguagem JavaScript a ordem é sempre essa, na verdade em qualquer linguagem de programação,
12:28
tudo, qualquer expressão,
12:29
ela, em primeiro lugar, é analisado todos os parênteses ,depois os parênteses a gente vai fazer as potências,
12:36
em seguida das potências, nós temos a multiplicação a divisão e o resto da divisão.
12:41
Você percebe que os três aqui estão na mesma linha? É por que eles tem a mesma ordem de precedência,
12:45
não necessariamente a multiplicação vem antes, qualquer um desses três vêm antes e se por acaso
12:50
mais de um deles tiver a mesma expressão, você vai fazer da esquerda para a direita, quem aparecer primeiro.
12:56
A gente já vai fazer alguns exemplos. E por fim a gente vai fazer
12:59
as somas e subtrações.
13:00
Então, mais uma coisa pra você anotar, dá uma pausa anota e coloca em vermelho assim no seu caderno:
13:07
"Ordem de Precedência dos operadores aritméticos"
13:10
Não é procedência, está escrito aqui em cima, precedência.
13:13
Anota aí que é muito importante pra você mais pra frente com certeza.
13:16
Agora vamos dar uma evoluída nesses nossos exemplos
13:19
A gente fez, 5 + 2, 5 vezes 2, 5 dividido por 2,
13:22
só que a gente não guardou os valores em lugar nenhum,
13:24
a gente simplesmente mandou o Node calcular e mostrar na tela.
13:26
Se eu quiser guardar, eu vou precisar usar o operador que a gente meio que já viu,
13:30
que é o operador de atribuição. Eu acabei de declarar algumas variáveis aqui do lado
13:34
coloquei var a até var f, e eu falei pra você lá no início, não se torne um programador alfabeto
13:41
aquele programador que todos os seus programas têm todas as variáveis a abcdef,
13:45
eu usei isso aqui por questões só de praticidade de ordem, a gente não está fazendo um programa
13:51
efetivamente, eu estou só exemplificando, aqui cabe,
13:54
mas se você vai guardar um nome, telefone, endereço, não coloca abc, coloca nome, telefone, e endereço
13:59
fica muito mais fácil pra você lembrar depois.
14:01
Oque eu estou fazendo aqui é o seguinte ,se eu quero que a variável a receber um valor,
14:05
a gente já viu, a gente vai usar um sinal de igual. Sinal de igual em uma expressão, ele não é igual, ele é recebe.
14:11
Então, essa linha que está aqui, a primeira, vou dizer "A variável a recebe o valor de 5 + 3"
14:17
5 + 3 é igual a 8, eu vou pegar esse 8 e vou jogar dentro da variável a, então vai ficar guardado na memória,
14:23
exatamente como a gente viu nas aulas anteriores, quando a gente falou sobre memória, sobre variáveis.
14:29
que o 8 vai ficar guardado na variável a, se eu quiser usar mais pra frente à vontade
14:33
A variável b vai receber a % 5, sendo que a é 8, ele consegue fazer essa operação substituindo
14:40
a, é 8, % 5 8 dividido por 5 dá 1
14:44
5 vezes 1 dá 5, pra 8 resta 3, certo? Se você ficou na dúvida, volta faz devagar
14:51
anota no papel, arma a conta, 8 dividido por 5, você vai ver que vai dar 3.
14:55
Vamos para a variável c, var c = 5 * b **2
15:00
5, um asterisco,vezes, dois asteriscos, elevado, potência.
15:04
Na verdade, quando você tem esses dois operadores, você viu na ordem de precedência
15:08
que você vai fazer primeiro a potência.
15:10
Então, b ao quadrado, o b vale 3, 3 ao quadrado, 9. Então, esse pontilhado vale 9, 5 vezes 9 dá 45
15:20
Letra d olha só, 10 - a / 2 .
15:23
Sabe, lembra da ordem de precedência, que a divisão é feita primeiro,então ele vai fazer primeiro
15:27
a / 2, sendo a 8
15:29
8 dividido por 2, 4. 10 - 4, dá 6.
15:33
A variável e, eu vou fazer isso aqui, 6 * 2 / d
15:37
Você vai olhar na ordem de precedência e vai fala assim:
15:39
"Mas o vezes e a divisão tem a mesma ordem de precedência. Quem eu vou fazer primeiro?"
15:43
Quem apareceu primeiro.
15:44
Quem apareceu primeiro aqui foi o 6 * 2, então, eu vou marcar, 6 * 2 dá 12, 12 / 6 vai dar 2.
15:53
Então, a minha variável e vale 2.
15:55
E por último vou fazer o f valendo: b % e + 4 / e
16:00
Tem vários operadores aqui, eu vou fazer a minha ordem de precedência. Em primeiro lugar, eu vou fazer b % e,
16:07
que apareceu primeiro, e na mesma ordem de precedência eu tenho 4 / e.
16:11
Então, eu vou fazer primeiro b % e, depois o 4 / e. b=3 e e = 2
16:17
3 % 2 é 3 dividido por 2, o resto, 3 dividido por 2 dá 1 e resta 1
16:22
Então, o primeiro retângulo vale 1. 4 dividido por 2, que é o valor de e, dá 2.
16:28
Então o primeiro quadro está com 1 e o segundo quadrado está com 2
16:31
1 + 2, agora eu estou fazendo o mais ali do meio, ele vai fazer 3.
16:36
Viu que o mais mesmo estando no meio da operação foi o último a ser feito?
16:39
Isso se chama ordem de precedência. Anota isso aí, e vai pro seu Node e digita o código.
16:46
É só assim que você vai aprender. Quer ver ? Vamos fazer um exemplo aqui.
16:50
Vou digitar, sei lá, a última, var f = 3 % 2 + 4 / 2
17:00
Ele vai fazer isso daqui primeiro, depois isso e por último a soma. Durante a aula deu valor 3.
17:07
Ele deu é undefined, isso por que ele calculou o valor de f, mas não mostrou na tela. Se quiser mandar mostrar o f.
17:12
Se eu quiser mandar mostrar o f, é só vir aqui, e o f tá valendo 3.
17:15
Faz isso pra todas as expressões que você viu anteriormente.
17:19
Outra coisa que a gente pode fazer com atribuições são as auto-atribuições,
17:23
São atribuições à própria variável, por exemplo,
17:26
criei uma atribuição simples aqui em cima, n = 3, então n está valendo 3, a variável n está valendo 3.
17:32
Se na próxima linha eu fizer, n = n + 4
17:36
significa o seguinte, eu vou somar o que está depois do recebe, eu vou somar n + 4
17:42
e o resultado eu vou jogar dentro de n. n + 4, n vale 3 está aqui em cima, 3 + 4, 7.
17:48
E eu vou jogar o resultado em n.Então n que estava valendo 3, vai deixar de valer 3 e vai passar a valer 7,
17:55
exatamente o que apareceu aqui na animação.
17:57
Lembre-se na aula de variáveis que ele falou: A variável é como se fosse a vaga de um carro,
18:01
para eu colocar um segundo carro eu tenho que tirar o primeiro carro, foi exatamente isso oque aconteceu.
18:06
Eu tinha 3, deixou de valer 3, passou a valer 7. Isso é a auto-atribuição
18:11
eu posso fazer coisas do tipo: n = n - 5, que está valendo 7 agora, - 5 dá 2.
18:17
O n deixa de valer 7 e passa a valer 2.
18:20
E eu posso fazer qualquer tipo de atribuição. n = n * 4
18:23
eu estou multiplicando esse 2 por 4, então vai virar 8. Deixa de valer 2 e passa a valer 8.
18:28
Outra coisa que posso fazer, n = n / 2 Eu vou dividir o 8 por 2
18:34
Eu estou seguindo a sequência, vou pegar esse 8 dividir 2,
18:36
vai dar 4, eu vou deixar de valer 8 e passar a valer 4 na variável n.
18:41
Também posso fazer uma exponenciação ,posso pegar esse n elevar ao quadrado e está valendo 4
18:46
4 ao quadrado dá 16. Ele deixa de valer 4 e passa a valer 16.
18:50
Por fim, eu posso fazer o resto da divisão. Se eu pego esse 16 e divido por 5,
18:59
vai dar 3, 3 vezes 5 dá 15, para 16 resta 1.
19:04
Então ele deixa de valer 16 e passa a valer 1. Tudo isso que aconteceu aqui
19:08
fez a variável n partir de 3, assumir vários valores, e terminar com 1. Isso são auto-atribuições.
19:15
E eu posso simplificar. Está vendo aqui em cima?
19:18
Simplificar todas essas auto-atribuições.
19:20
A primeira não é auto-atribuição, é atribuição simples. Se eu pego uma variável, por exemplo,
19:25
n = n + 4, que está aqui na primeira, é o segundo da lista. Eu posso reescrever isso de uma maneira encurtada
19:32
Que é o n += 4. Esse += só serve, presta atenção, se a mesma variável receber ela + 4.
19:40
Se for n = x + 4, não dá pra usar o +=,
19:45
mas se n receber ele mesmo + 4 eu posso usar o += sem problema nenhum.
19:50
A gente vai usar bastante essa síntese do +=.
19:53
E se você aprender isso daqui, você aprende em qualquer linguagem de programação a grande maioria
19:58
aceita esse tipo de auto-referência.
20:00
E se por acaso você entendeu o mais igual você vai entender todos os outros.
20:03
n = n - 5 pode ser reescrita de forma resumida para n -= 5.
20:08
De forma similar eu tenho n *= 4, o n /= 2, o n **= 2, é a exponenciação e o resto da divisão seria n 5= 5.
20:18
Dá uma olhada aqui do lado, copia isso, e como eu disse anteriormente, se você entender essas simplificações
20:24
você sabe fazer esse tipo de operação em linguagem C,linguagem Java, JavaScript, linguagem Python, PHP.
20:30
Enfim, a grande maioria das linguagens atuais aceita esse tipo de sintaxe.
20:34
Vamos fazer um exemplo prático. Vou criar uma variável num e essa variável vai receber 8
20:42
Se eu mandar mostrar num ele vai mostra 8.
20:46
Se por acaso eu fizer num += 2, o que eu estou fazendo? Eu estou pegando 8 e somando 2.
20:52
Ele já me deu que o num vale 10, se eu mandar mostrar num aqui ele já está valendo 10.
20:57
A mesma coisa acontece, por exemplo, se eu pegar num %= 2.
21:03
Se eu pegar 10 dividir por 2 dá resto 0. Então, já foi o num pra 0. Deu pra entender?
21:10
Então, você faça os seus exemplos aí, por exemplo, se eu fizer num = 3 e eu fizer assim, num **= 2
21:19
eu vou fazer com que o num receba o quadrado de 3, 3 ao quadrado, dá 9.
21:24
Esses são operadores de atribuição.
21:27
E para encerrar essa aula eu vou te mostrar mais dois operadores muito usados, que são os operadores de
21:31
que são os operadores de incremento. Olha aqui, eu fiz a variável x valer 5,
21:36
então, o 5 vai para a variável x. Eu posso fazer operações simples, como por exemplo,
21:41
x = x + 1, x recebe x + 1 é sinal de que o x vai deixar de valer 5 e vai passar a valer 6,
21:47
gente aprendeu isso. A gente também aprendeu que, por exemplo,
21:51
x = x - 1, ele vai tirar uma unidade. Então, se ele está valendo 6 nesse exato momento, ele vai passar a valer 5
21:57
e vai perder o 6, na verdade, ele vai voltar a valer 5. E a gente acabou de ver que podemos simplificar esse
22:03
x = x +1, como x +=1. E a gente também pode simplificar x = x - 1, para x -= 1.
22:09
Essa parte você entendeu, só que nas linguagens de programação quando a gente vai avançando
22:14
você vai ver que a gente vai fazer muito x = x + 1
22:16
A variável recebe a variável + 1
22:18
então, existe um simplificador ainda maior que é o operador de incremento e eu posso simplificar
22:24
x += 1, que já estava simplificado, para x ++, o mesmo acontece com o -= 1 eu posso simplificar para x--.
22:33
Vamos diretamente para o nosso NodeJs e fazer o teste de novo.
22:37
Vamos declarar uma variável n = 10.
22:41
O n está valendo 10, se você manda mostrar n, mostrou 10. Agora, se eu fizer n ++
22:47
ele mostrou 10. Só que é o seguinte se eu mandar ele mostrar n agora ele está valendo 11.
22:52
n -- aparece que ele está valendo 11, mas se eu mandar mostrar n, ele está valendo 10.
22:57
Isso porque, ele me mostrou o valor diferente no início, porque o ++ e o -- vieram depois.
23:03
Nas linguagens de programação tem como o ++ vir antes seria um, pré-incremento
23:08
por exemplo, vou mandar mostrava o valor de n ,10
23:10
se no lugar de n eu colocar ++ eu colocar ++ n ele já soma antes,
23:15
se eu botar - - n ele já tira antes,
23:19
mas não significa que n ++ está errado, é só uma questão de ordem,
23:24
existe o pré-incremento e o pós-incremento,
23:26
assim como existi o pré-decremento e o pós-decremento.
23:30
Na prática isso não faz tanta diferença na programação para o que a gente vai aprender
23:34
mas na programação avançada o ++ e o -- aparecendo antes ou depois faz uma diferença sim,
23:40
mas não se preocupa com isso agora não
23:43
Então é isso pequeno gafanhoto, chegamos ao fim de mais uma aula cheia de informação
23:49
com certeza você já aprendeu a fazer um monte de conta, um monte de cálculo. Eu espero sinceramente
23:54
que você esteja gostando de aprender JavaScript. E se por acaso você está faltando, aquele negócio de
23:59
prático e tudo mais, a gente ainda está bem no início, a gente ainda está em operadores,
24:03
já, já, a gente vem manipulando HTML e fazendo coisas mais interativas,
24:08
mas não pula esse momento de aprendizado inicial, os primeiros passos, porque lá na frente isso vai fazer falta
24:15
Eu gostaria de pedir, encarecidamente, que você faça o mesmo de sempre
24:18
se inscreve no canal, aqui embaixo habilita a sineta de notificação, interage com a gente, dá um like.
24:24
Aqui em cima acessa as playlists, os vídeos que a gente deu uma separada para vocês.
24:29
A primeira playlist é sempre o curso de JavaScript, logo em seguida é sempre o curso de HTML.
24:35
Isso porque esses cursos eles estão intimamente ligados, é importante que você faça os dois,
24:40
mas no momento o curso de JavaScript é aquele que você decidiu fazer,
24:43
faz ele até o final e depois você volta e faz o de HTML que você vai ver que vai complementar bastante coisa.
24:49
Eu me despeço por aqui, mas a gente já tem encontro marcado na próxima aula,
24:54
onde a gente tem a segunda parte dos estudos de operadores,
24:58
mas antes de estudar os outros operadores que faltam
25:01
não se esquece, pratica bastante no Node esses operadores que a gente fez nessa aula.
25:06
Um grande abraço, boas práticas e até a próxima!
25:12
Legendas: Rayssa Victoria
*/
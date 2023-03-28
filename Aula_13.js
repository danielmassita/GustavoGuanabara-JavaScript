// Aula 13 - Repetições (Parte 1) - Curso JavaScript #13
// https://youtu.be/5rZqYPKIwkY

/* PERGUNTAS AULA ANTERIOR...

1) Sabe mudar a cor de fundo de um site DINAMICAMENTE, usando o JavaScript? 
2) Consegue inserir uma imagem dentro do seu site sem ter a tag <img> previamente criada? 
3) Já treinou bastante o uso de condições simples, compostas, aninhadas e múltiplas? 

1) Sim, dinamicamente podemos usar um método pra pegar o horário no lado do cliente. Usando o tripé de desenvolvimento Front-End, podemos usar um script.js que é carregado "onload". No arquivo HTML, dentro do <body> vamos chamar uma função a partir do evento: onload="carregar()". Resumindo, na estrutura HTML do arquivo vamos trabalhar no <body> com uma função carregar() que é chamada no evento onload="". Assim, ao carregar toda a página, o HTML vai ativar a função carregar() que terá o seguinte código... 
Assim. E de acordo com a hora do cliente, o JS vai atribuir uma alteração no HTML, através do comando "document.body.style.background = 'rgb(000, 000, 000)'" - Assim, alterando a cor do fundo de acordo com cada condição (no caso, a hora), em uma ação dinâmica do JS.
  // No HTML...
  [...]
  <body onload="carregar()">
  [...]
  
  // No Script...

      function carregar() {
        var msg = window.document.getElementById('msg')
        var img = window.document.getElementById('imagem')
        var data = new Date()
        var hora = data.getHours()
    //  var hora = 11 // hard coded test
        msg.innerHTML = `Agora são ${hora} horas.`
        if (hora > 5 && hora <= 12) {
            // Bom dia!
            img.src = 'fotomanha.png'
            document.body.style.background = 'rgb(250, 195, 90)'
        } else if (hora > 12 && hora < 19) {
            // Boa tarde!
            img.src = 'fototarde.png'
            document.body.style.background = 'rgb(180, 75, 55)'
        } else {
            // Boa noite!
            img.src = 'fotonoite.png'
            document.body.style.background = 'rgb(4, 59, 123'
        }
    }
    
2) Mesmo sem ter a tag <img> previamente criada, podemos adicionar via JS. No <body> temos um uma <div id="res"> que será usada como local pra criar uma imagem - na verdade, vamos colocar dentro da div "res" uma estrutura "child" que carregará a imagem. 

// No HTML..

        <div id="res">
            Preencha os dados acima para ver o resultado!
        </div>
        
// No JS...

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.setAttribute('src', 'nome-da-foto.png')

        // Alguma função ou comando que chama uma alteração na var img, então...
        
        res.innerHTML = ''
        res.innerHTML = 'Uma frase de efeito aqui...'
        res.appendChild(img)
        
3) Sim, nos exercícios! :) 

CONDIÇÃO SIMPLES
    if (condição) {
        [   true    ]
    }

CONDIÇÃO COMPOSTA
    if (condição) {
        [   true    ]
    } else {
        [   false   ]
    }

CONDIÇÃO COMPOSTA
    if (condição) {
        [bloco1]
    } else {
        if (condição2) {
            [bloco2]        // bloco2 só executa se a cond1 for falsa!
        } else {
            [bloco3]        // se cond1 && cond2 == false, exec. bloc3
        }
    }

CONDIÇÃO MÚLTIPLA (switch-case-break)
switch (expressão) {
    case valor 1:
        [       ]
        break
    case valor 2:
        [       ]
        break
    case valor 3:
        [       ]
        break
    default:
        [       ]
        break
}

*/





/* `${Repetições em JS}` - Parte 1

- Vamos pensar em "comer uma pizza" como atividade que requer repetições. 

function comerPizza() {
    comerFatia()
    comerFatia()
    comerFatia()
    comerFatia()
    comerFatia()
    comerFatia()
    comerFatia()
    comerFatia()
}

- Partir do primeiro comando até o último (ponto A até o B), escrevendo os códigos da melhor maneira...
- Vamos pensar que há várias formas, ou seja, ESTRUTURAS DE CONTROLE...
    - SEQÜÊNCIAS    A --- [ ] --- [ ] --- [ ] --- B // sem 
    - CONDIÇÕES     (teste lógico ? bloco True : bloco False) // operador ternário
    - REPETIÇÕES ou LAÇOS

    Começa testando uma expressão, um resultado Verdadeiro ou Falso, mas o comportamento é pontual. 

    A --- TesteLógico --- Verdadeiro [executa bloco e volta pro TesteLógico] em loop --- SE FALSO [sai do laço de repetição] // ENQUANTO a condição for verdadeira, o laço se repete. QUANDO o laço for FALSO o laço é quebrado e segue o fluxo do código...

while (condição) {
    [bloco True]
}       // volta pro teste condicional do While e rodar o bloco ENQUANTO for verdadeira
[...]   // quando a condição deixar de ser verdadeira, sai do bloco e segue o código...
    
function comerPizza() {
    while (temFatia()) {    // Enquanto tem fatia, então executa a função comerFatia().
        comerFatia()
    }               
}                           // Quando não tiver mais fatias, sai bloco. OK para N fatias de pizza.

*/

/* MÃO NA MASSA */

console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
// vai repetir 8 vezes

var contador = 1;
while (contador <= 6) {
    console.log('Tudo bem?')
    contador++
}
// Se precisar executar 500, é só alterar a condição contador <= 500. 

var c = 1;
while (c <= 10) {
    console.log(`Passo ${c}`)
    c++
}
// Usando Template Strings com Place Holder, podemos inclusive visualizar o índice sendo alterado n vezes.

/*
O laço WHILE faz o teste primeiro, sendo verdadeiro, executa o bloco, e retorna ao teste lógico, só quando for falso sai e segue o fluxo...

O inverso pode acontecer, sendo que eu PRIMEIRO executo um bloco de código, depois faço o teste lógico, se verdadeiro, faz o loop, se falso, segue o fluxo...

do {
    [   bloco   ]
} while (condiçãoTrue)

WHILE é uma Estrutura de Repetição com Teste Lógico no Início!
DO..WHILE é uma Estrutura de Repetição com Teste Lógico no Final!

Ambos são Estruturas de Repetição (laço/loop), mas com comportamento diferente.
*/

var i = 1
do {
    console.log(`Passo ${i}`)
    i++
} while (i <= 6)

/* ANOTAÇÔES LUCAS LEAL
NOVIDADES:

    Estruturas de  (Laços || Iterações || Repetições || Looping)  :

  while (enquanto)

Esta estrutura faz o teste lógico ANTES de rodar o programa.

Enquanto (while) condição1 for VERDADEIRA, execute o Bloco A.

Ilustração:
while (condição1) {
Bloco A
}
____________________________

  do/while (faça/enquanto)

Esta estrutura faz o teste lógico DEPOIS de rodar o programa.

Faça (do) a execução do Bloco A, enquanto (while) condição1 for VERDADEIRA.

Ilustração:
do {
Bloco A
} while (condição1)
*/

/* TRANSCRIÇÃO
0:00
E ai, completou todos os exercícios da sessão anterior?
0:03
Eu espero sinceramente que sim, porque não adianta nada você e na sequência fazendo todas as aulas,
0:08
todos os vídeos, só assistindo, lembra que quando você quer andar de skate ou fazer manobra de bicicleta
0:14
você precisa ter a bicicleta ou skate e treinar isso, só assistir vídeo de skate e de bicicleta não te faz aprender,
0:20
não é isso? Então por que você faz a mesma coisa com programação?
0:23
Então se por acaso você pulou os exercícios ou se até assistiu o vídeo mas ainda não fez
0:29
volta lá, aqui em cima você tem a playlist é só clicar aqui em cima no veja mais e escolher a primeira playlist
0:35
ela é sempre o curso completo e a melhor maneira de você acessar as aulas.
0:39
Mas antes de começar esse vídeo a gente vai para as perguntas de sempre:
0:42
você sabe mudar a cor de fundo de um site dinamicamente utilizando JavaScript?
0:47
E eu não tô falando aquilo que a gente fez lá no início do curso, de pegar o site do Google e mudar a tela preto,
0:51
eu tô falando do exercício que a gente fez anteriormente de que se tiver de manhã a tela fica de uma cor,
0:57
se estiver de tarde fica de outra e de noite fica de outra isso é automaticamente calculado
1:01
e definido pelo script. Outra coisa você sabe em um site que não tem
1:06
uma imagem, por exemplo, vamos supor que eu não coloquei lá no HTML o img,
1:10
que é essa tag está aparecendo aqui, você sabe em JavaScript criaram um img e colocar uma imagem nele?
1:16
A gente também aprendeu anteriormente e outra coisa, você já treinou a criação de condições simples,
1:22
compostas e múltiplas? Neste vídeo a gente vai começar a falar sobre repetições
1:26
e é muito importante que você entenda condição para poder fazer uma repetição.
1:31
Agora se você já fez tudo isso, essas perguntas que a gente acabou de fazer não te dá um problema nenhum?
1:36
Então seja bem-vindo, seja bem-vinda a mais uma aula!
1:40
Legendas: Tainá Bandeira
1:53
Olá pequeno Gafanhoto, seja bem-vindo a mais uma aula do seu Curso em Vídeo de JavaScript
1:58
totalmente patrocinado pelo Google. O meu nome é Gustavo Guanabara, eu sou professor
2:02
e como eu acabei de falar ali neste vídeo, a gente já viu no seu curso de JavaScript até agora o uso de
2:07
comandos simples, o uso de operadores: os relacionais, os lógicos e os operadores aritméticos,
2:13
aprendemos a fazer algumas contas simples, nós vimos três tipos de condições
2:19
e agora nós chegamos à 13º aula onde a gente vai falar sobre: Repetições,
2:24
essa é a primeira parte do assunto e nós vamos começar a aprender essas estruturas que a gente
2:28
também pode chamar de: laços ou interações. Mas não se preocupa com essa questão
2:33
de nomenclatura ainda não, porque é muito simples você entender, é tão simples que eu vou te explicar
2:38
com uma coisa que você faz constantemente na sua vida, na nossa vida existem vários momentos
2:43
em que a gente faz repetições e um dos exemplos que eu coloco aqui pra aula é por exemplo como uma pizza,
2:49
comer uma pizza é uma atividade que requer repetições, vamos supor que você é guloso,
2:55
você é gulosa e vai querer começa a pizza inteira pensando nisso eu já criei aqui embaixo
3:00
a minha function "comer pizza", a minha function é uma função que eu faço constantemente,
3:05
uma vez por mês eu como uma pizza inteira.
3:07
Então vou criar uma função comer pizza pra mim, essa função ela vai ter um bloco então eu abro
3:12
e fecho chaves, está vendo? Está amarelinho aqui do lado e eu vou começar minha atividade de comer
3:16
essa pizza inteira e pra começar a pizza inteira, eu tenho que fazer alguns passos: primeiro passo que
3:21
eu vou fazer aqui é comer a primeira fatia, quando eu como a primeira fatia, já não está mais lá,
3:27
o próximo passo da minha atividade é comer outra fatia,
3:31
então ele já comeu a segunda fatia ali, vamos fazer mais um comando que a é comer mais uma fatia
3:35
e assim sucessivamente até a pizza acabar.
3:38
Eu vou fazer a minha função de comer a pizza é exatamente essa daqui de baixo,
3:42
você percebe que a minha pizza tinha oito pedaços, então aqui embaixo eu tenho oito comandos
3:47
comer pizza. Então assim a minha atividade é partir
3:50
do primeiro comando até o último comando para cumprir a minha missão que foi comer essa pizza inteira
3:56
e com a programação também assim a gente parte de um ponto a e vai até um ponto b,
4:01
a sua tarefa na hora de programar é conseguir escrever os programas pra que você saia do ponto a e chegue
4:07
ao ponto b que é o seu objetivo e para conseguir atingir os nossos objetivos, existem várias formas
4:13
que a gente chama de Estruturas de Controle.
4:15
Primeira estrutura de controle, a mais simples de todas é a sequência onde eu vou desde o ponto a até
4:21
o ponto b executando tarefas sequencialmente até chegar ao objetivo que foi exatamente o que aconteceu
4:27
na hora de comer pizza eu coloquei um passo depois do outro várias vezes até o momento em que eu comia
4:33
a pizza inteira, só que nem tudo é uma maravilha como isso daqui, às vezes existem desvios,
4:38
existem possibilidades e então a gente viu lá durante a aula 12 e todos os exercícios as condições
4:44
onde eu tenho um teste lógico que é representado por esse losango aqui e esse teste ele tem
4:49
duas possibilidades: verdade ou falso. E de acordo com esse valor vão ser executadas
4:55
tarefas específicas, você vê aqui do lado por exemplo: imagina que eu tenho uma pizza de oito pedaços
5:00
mas existe um pedaço de pizza de marguerita e eu não gosto de margarita, então se a pizza não for de
5:06
marguerita eu como, se não eu não como e eu consigo também chegar de um ponto a outro,
5:12
nem tudo na programação é feita de uma sequência como a gente viu anteriormente, às vezes é necessário
5:17
isso daqui mas o nosso assunto não é as condições, se condição é um problema pra você,
5:21
você assiste as aulas anteriores, porque nessa a gente vai ver um novo tipo de estrutura de controle
5:26
que são as repetições ou como eu chamei anteriormente os laços.
5:30
Um laço ele começa exatamente como uma condição ele vai testar uma expressão e assim como acontecia
5:36
nas expressões de condição eu tenho duas possibilidades: ou esse teste é verdadeiro
5:41
ou ele é falso, só que o comportamento aqui é um pouquinho diferente.
5:44
Se essa condição, se esse teste lógico for verdade ele vai executar um bloco só que ele não vai
5:50
seguir desse bloco para o ponto final que está aqui embaixo, ele vai voltar ele vai fazer um looping,
5:56
ele vai fazer um laço, uma repetição.
5:59
Voltando para o losango ele vai testar de novo essa condição, se essa condição for verdadeira de novo,
6:05
ele vai executar tarefa e fazer outro laço como acabou de acontecer e vai testar mais uma vez,
6:11
testando sendo verdadeiro ele vai executar esse bloquinho o novo e mais uma vez vai voltar
6:17
e ele vai fazer isso enquanto essa condição for verdadeira, percebe na minha frase:
6:22
enquanto essa condição (que é esse losango) for verdade, a partir do momento em que esse losango
6:28
não for verdade, for mentira o laço é quebrado e eu sigo o meu fluxo natural, então essa estrutura daqui de cima
6:36
é a nossa estrutura de laço principal, ela é a primeira que a gente sempre vê quando a gente vai estudar
6:41
programação, existem outras? Existem, mas essa é a mais comum de todas.
6:45
E agora você pode estar se perguntando: "tá Guanabara como é que eu escrevo essa estrutura que você acabou
6:49
de apresentar pra mim no JavaScript?" Se você já tem conhecimento em outras linguagens
6:53
de programação principalmente linguagem C ou linguagem Java é exatamente da mesma maneira,
6:59
lembra que quando eu li essa estrutura eu coloquei: "enquanto alguma coisa for verdade", essa palavra
7:04
"enquanto" em inglês ela se escreve while, ela se diz while.
7:09
Então vou colocar while e uma condição que é exatamente a condição que eu testaria que dentro
7:13
desse losango, quando eu escrevo um while eu tenho que colocar um bloco, lembrando em JavaScript
7:19
blocos são sinais de chaves, tudo que estiver entre chaves é um bloco, então esse bloco que está
7:26
relacionado a esse enquanto vai acontecer enquanto essa condição for verdadeira, sendo ela verdadeira
7:33
todo o comando que foi escrito aqui dentro vai ser executado, depois que esse bloco foi executado,
7:37
chegando na chave aqui de baixo ele vai voltar pro while, ele vai voltar pro enquanto e vai testar
7:44
de novo a condição, se ela for verdadeira, mais uma vez ele vai executar esse bloco e voltar.
7:49
É assim que funciona e a partir do momento em que essa condição deixa de ser verdadeira
7:54
e passa a ser falsa, o fluxo desviado pelo lado de fora.
7:58
Compara essa parte daqui de baixo com a parte de cima é exatamente o mesmo diagrama, é exatamente
8:05
a mesma estrutura de laço mas vamos voltar a nossa história de comer pizza, comer pizza é uma repetição,
8:10
a gente está colocando a pizza aqui e vamos montar a nossa estrutura da função mais uma vez,
8:15
lembra que antigamente era comer fatia 8 vezes e se eu dividir essa pizza em 16 vezes? E se eu dividir
8:23
essa pizza em 20 vezes? Aquele meu algoritmo anterior, aquele meu
8:26
programa anterior onde tinha comer fatia 8 vezes já não serve mais e isso sem falar que tem uma repetição
8:33
de comandos desnecessária, na verdade desnecessária não, chata de fazer mas agora que você conhece
8:38
a estrutura enquanto a estrutura, a estrutura while tudo vai ficar mais fácil, dá uma olhada aqui:
8:43
sempre que você encontrar a palavra while, leia como enquanto, então dá uma olhada aqui:
8:49
enquanto tem fatia, certo?
8:51
Fiz um, teste dá uma olhada em cima tem fatia? Sim, tem fatia, então eu vou criar um bloco
8:57
e dentro desse bloco eu vou colocar o comando comer fatia, então olhando aqui em cima tem fatia? Tem,
9:04
ele come uma fatia e chegando no final do bloco, ele vai fazer o nosso looping ,ele vai fazer a repetição
9:11
como a gente representou aqui agora, o teste vai ser feito de novo, ainda tem fatia em cima? Tem,
9:17
então ele come a fatia e volta de novo, então esse mesmo processo de repetição está acontecendo,
9:24
enquanto tem fatia ele está comendo as fatias até chegar o momento em que só tem uma fatia.
9:29
Vamos fazer o teste de novo enquanto tem fatia, tem fatia? Tem uma fatia, ele vai comer a fatia
9:35
e voltar de novo, pergunto mais uma vez tem fatia? Agora não tem fatia, ficou falso então ele vai sair
9:43
e terminou a minha função de comer pizza.
9:45
Então a primeira coisa que a gente vai fazer é, esse programa é muito mais eficiente que o anterior,
9:50
eu vou colocar o anterior na tela só para você comparar, dá uma olhada na parte de cima e dá uma olhada
9:55
na parte de baixo e mais importante: o de baixo só serve para eu comer oito fatias, o de cima serve
10:02
para qualquer tamanho de pizza, 2 fatias, 4 fatias, 20 fatias, esse programa de cima é muito mais eficiente.
10:10
E se nesse momento você está pensando: "Ah Guanabara é só pegar o debaixo dar um CTRL+C
10:14
e CTRL+V se for 20 fatias" e for por exemplo 50 fatias, você vai ter que pegar comer fatias e copiar 50 vezes,
10:22
aqui em cima funciona sem alterações, para 1, para 2, para 50, pra 500 fatias.
10:28
Deu para entender a utilidade de uma estrutura de repetição como essa que a gente tá acabando de ver?
10:32
Eu espero sinceramente que sim mas mais uma vez eu digo não acredite em mim não,
10:37
vamos abrir o nosso sistema operacional, vamos abrir o Visual Studio Code e fazer os nossos primeiros testes.
10:42
♫
10:44
Então vamos lá vamos abrir o Visual Studio Code, estamos na Aula 13 então vamos criar que os arquivos
10:50
próprios para a Aula 13 olha já aqui, já tem todos os folders organizados, vamos criar uma pasta nova,
10:56
cliquei aqui "Aula 13", dentro da Aula 13 vamos criar um arquivo que é o arquivo ambiente de teste,
11:04
ambiente.js, já estou com o arquivo ambiente.js, primeira coisa que a gente vai fazer,
11:10
vamos fazer da forma sem repetição.
11:12
Vamos fazer o seguinte aqui: console.log('Tudo bem?'), se eu executar esse comando, F8, ele escreveu
11:20
"Tudo bem?", sem problemas e agora você vem espertão e vamos fazer o seguinte: vou copiar,
11:25
CTRL+C e vou colar 6 vezes, F8 de novo, olha lá 6 vezes, ele escreveu "Tudo bem?" 6 vezes,
11:36
sem problema nenhum, então você vai falar assim: "ah, beleza é só copiar e colar que funciona bem"
11:40
e se eu quisesse escrever "tudo bem?" 500 vezes? Você ia ter que ficar copiando isso daqui sem necessidade,
11:47
claro que eu não vou escrever 500 vezes, vamos fazer o seguinte: isso aqui são 6 vezes certo vou colocar
11:52
um comentário, vou colocar esse código dentro de um comentário, lembrando */ /* , ele não vai executar nada
11:58
se apertar F8 nada vai acontecer porque eu coloquei todos os comandos como comentário, vou jogar
12:03
esse código para baixo e vamos fazer um código aqui em cima para escrever "Tudo bem?" várias vezes
12:08
sem precisar utilizar o CTRL+C e CTRL+V,
12:11
utilizando de inteligência e da estrutura que a gente acabou de aprender, então o seguinte: eu vou criar uma
12:16
variável que é um contador, esse contador vai começar com 1, é a primeira vez que eu vou escrever
12:22
"Tudo bem?", enquanto o contador for menor 6, que é 6 vezes eu abro bloco e fecho o bloco, tudo que eu escrevi
12:31
aqui dentro vai acontecer enquanto isso aqui for verdade, agora eu vou colar aquele comando
12:38
console.log('Tudo bem?'), vou colocar aquele comando que está aqui embaixo só uma vez e vou fazer
12:43
o seguinte aqui: c++, esse c++ significa a mesma coisa que c = c+1, a gente viu isso durante as aulas
12:51
de operadores, então é basicamente ele era um, vai passar a valer 2, chegando aqui embaixo ele vai voltar
12:57
o c valendo 2 é menor do que 6? Sim, ele vai escrever de novo e vai somar mais um.
13:03
E vai voltando até o c não ser menor do que 6, na verdade aqui ele vai fazer 5 vezes quer ver?
13:09
Vou executar, 5 vezes, porque deu 5 vezes se eu coloquei de 1 à 6? Por que eu não coloquei menor
13:17
ou igual a 6, vou colocar aqui e ele vai fazer isso até que ele faça seis vezes, F8, agora ele escreveu "Tudo bem?"
13:25
6 vezes é só contar, esse é o laço mais simples que existe
13:29
é quando você escolhe quantas vezes uma coisa vai acontecer.
13:31
Aqui, lembrando: se eu quiser escrever isso aqui 500 vezes eu tenho que ficar copiando e colando isso aqui,
13:38
se eu quiser 500 vezes aqui é só colocar 500 sem problema, vou executar, ele escreveu 500 vezes
13:43
se você tiver um tempo para contar, está aqui embaixo, pode acreditar que tem 500 vezes escrito "Tudo bem?",
13:49
assim como se eu quiser escrever só 3 vezes .
13:52
Se você quiser você ainda pode aprimorar mais ainda essa mensagem olha, vou usar crases
13:57
pra gente poder fazer a interpolação por placeholders e vou fazer o seguinte:
14:01
passo e vou escrever o valor de c em um placeholder, então na hora que eu executo ele colocou:
14:06
passo 1, passo 2 e passo 3 porque foram 3 passos, ele começa com 1 e vai até 3 se você quiser até 10, F8,
14:15
passo 1 até passo 10 está tudo funcionando sem problema nenhum
14:19
e se você quiser as 500 vezes, vou até colocar em tela cheia, vamos executar, passo 1 até o 500,
14:30
está lá até o 500 aqui embaixo.
14:33
Dá uma olhada e vê se isso é complicado, viu é simplesinho, isso daqui vou colocar aqui 6,
14:40
esse código de cima tem a mesma funcionalidade do código de baixo,
14:45
só que o código de cima é usando a cabeça, é usando técnica, o passo debaixo é usando a força bruta
14:52
e se você quer ser programador, se você quer ser programadora use muito mais a cabeça
14:57
do que a força bruta, fica a dica.
14:59
Sendo assim essa estrutura daqui de cima que é o wille ela é classificada como estrutura de repetição
15:06
com teste lógico no início, isso porque ele faz o teste sendo verdadeiro ele faz o bloco,
15:11
só que existe uma outra possibilidade, existe também a possibilidade em vez de fazer o teste lógico no inicio
15:17
que é testa, executa e faz looping eu posso fazer também a estrutura ao contrário,
15:24
primeiro eu executo bloco e depois eu faço teste, exatamente como acabou de aparecer aqui,
15:29
então ele primeiro executa o bloco depois ele faz o teste e a linha de raciocínio igual,
15:34
se o teste lógico for verdadeiro ele faz o looping e executa o bloco de novo e ele vai ficar nesse looping
15:41
enquanto esse teste for verdade, a partir do momento em que esse teste não é mais verdade é mentira
15:47
o fluxo sai da estrutura de repetição.
15:49
Compare esse diagrama de cima com o diagrama debaixo, eles são essencialmente
15:53
estruturas de repetição mas eles têm comportamentos diferentes: o bloco de cima ele primeiro testa
15:59
e depois executa o bloco, aqui embaixo ele primeiro executa o bloco e depois ele testa e para fazer
16:05
essa estrutura aqui debaixo é muito simples em vez de while alguma coisa você vai fazer do,
16:12
"do" quer dizer "faça" então escrever do, abre e fecha o bloco faça.
16:18
Esse bloco que eu acabei de desenhar aqui enquanto a condição, enquanto essa condição for verdadeira
16:23
ele vai fazendo o bloco exatamente como acabou de representar aqui do lado vai ficar repetindo
16:28
e a partir do momento em que aquela condição passar a ser falsa ele sai do bloco e segue sua vida normal
16:34
na execução do programa.
16:35
Dessa maneira essas duas estruturas que estão representadas aqui do lado são as minhas
16:40
duas primeiras estruturas de repetição dentro do JavaScript, a de cima que é a while,
16:45
a gente chama de estrutura de repetição com teste lógico no início a de baixo que é do wille a gente
16:50
chama de estrutura de repetição com teste lógico no final e como já é de costume, antes da gente
16:56
encerrar a aula vamos fazer uns testes nessa segunda estrutura também.
17:00
Então olha só, vou criar um outro comentário aqui e vou colocar o código que a gente acabou de criar
17:06
aqui em cima, vou alterar esse código, esse código é: testa primeiro e executa o bloco depois,
17:12
eu posso transformar isso aqui da seguinte maneira: vou tirar esse wille daqui e vou substituir por um do,
17:17
isso é: faça isso tudo enquanto o contador for menor ou igual a 6, a execução ela é essencialmente
17:26
a mesma coisa, os resultados são muito semelhantes e eu não vou ficar entrando em detalhes aqui,
17:31
em que momento é melhor usar um ou em que momento que é melhor usar outra que existem
17:34
situações específicas elas vão aparecer na sua vida, mas a gente aqui, só lembrando, está num
17:39
curso introdutório então não vou entrar muito em detalhes não, vamos executar esse código aqui,
17:44
executando esse código, F8 você vai ver que ele fez um passo 1até passo 6 sem problema nenhum
17:51
e aqui se eu quiser só 2 vezes, executei ele fez só até 2 vezes, se eu colocar aqui 10, executei
17:58
e ele fez 10 vezes. Então essencialmente (vou colocar 6 aqui)
18:02
esse programa de cima, esse programa do meio e esse programa debaixo, tem basicamente
18:08
a mesma funcionalidade, escrever 6 vezes uma determinada mensagem, na verdade esse debaixo
18:13
aqui está "Tudo bem?", seria passo 1 até o passo 6.
18:17
Essa aqui é a pior solução de todas quando a gente quer repetir uma coisa e essas daqui de cima
18:22
pra essa funcionalidade tanto faz você escrever de um jeito ou de outro vai dar aquela que você se sentir
18:28
mais à vontade mas a do meio que usa a estrutura wille é a mais encontrada dentro dos programas.
18:34
♫
18:35
Então é isso o pequeno Gafanhoto, espero que você tenha entendido as estruturas básicas de repetição
18:41
mais pra frente a gente volta pra colocar isso em prática a gente vai ter exercício de estrutura de repetição
18:46
aqui dentro do canal também, na verdade a gente já tem é só você assistir a playlist completa,
18:50
mas faz seus experimentos dentro do ambiente, faz uns testes e com certeza você vai se acostumar
18:56
de como funciona esse tipo de estrutura.
18:58
Eu vou ficando por aqui, mas eu sempre vou lembrar pra você, aqui embaixo você clica para se inscrever,
19:03
habilita o sininho de notificação, aqui em cima você acessa várias playlists e vários cursos que existem
19:09
no nosso canal aqui do Curso em Vídeo e como eu sempre peço para você se você faz parte de um grupo
19:14
da faculdade ou de um grupo de programadores dentro do Facebook qualquer rede social que você use,
19:19
compartilha o link desse curso completo com a galera porque com certeza esse curso vai ajudar muita gente
19:25
principalmente quem está iniciando em programação que é sempre a galera do foco aqui desse canal,
19:30
eu me despeço por aqui mas eu já deixo encontro marcado para a 14ª aula onde a gente vai ver
19:35
mais um tipo de estrutura de repetição, a Estrutura For.
19:39
Um grande abraço pra você continue praticando e a gente se vê no próximo vídeo, até lá!
19:47
Legendas: Tainá Bandeira
*/

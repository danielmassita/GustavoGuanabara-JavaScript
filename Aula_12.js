// Aula 12 - Condições (Parte 2) - Curso JavaScript #12
// https://youtu.be/EEStcIe8rAM

/* Você sabe mudar a cor de fundo de um site, dinamicamente, usando JavaScript? Sabe como inserir uma imagem usando JavaScript em um site, sem ter a tag img previamente definida? Sabe como utilizar condições simples (if), condições compostas (if..else), condições aninhadas (if..elseif..else) e condições múltiplas (switch..case) em JavaScript?

Pois, para responder a essas e muitas outras perguntas, assista essa aula do Curso de JavaScript para Iniciantes até o final. E não se esqueça sempre de praticar todas as atividades que fizermos durante o vídeo no seu próprio computador.

Aula do Curso de JavaScript e ECMAScript para Iniciantes, criado pelo professor Gustavo Guanabara para o canal CursoemVideo. */

/* PERGUNTAS AULA ANTERIOR

- Você sabe utilizar a extensão "Node Exec" no VSCode? Temos que selecionar o código a ser testado, e apertar o F8/F9 (iniciar/finalizar) para rodar no terminal apenas o trecho selecionado.

- Você sabe criar uma condição em JavaScript (e operadores relacionais, ==, ===)? Sim, a condição em JS é descrita assim (abaixo). Códigos com igualdade restrita === vão testar a condição inclusive para o valor do dado E TAMBÉM o tipo (typeof). Porém, com igualdade == apenas o valor do dado será testado. Por exemplo:

    if (condição) {
        códigos para true...
    } else {
        códigos para false...
    }

- Consegue diferenciar condições SIMPLES e condições COMPOSTAS? 

if (condição1 == true) {
    código de ação Z aqui
} // caso contrário, nada de especial acontece e o código segue o fluxo, sem ter executado a ação Z se for FALSA a condição1...

if (condição 2 == true) {
    código de ação A aqui para TRUE...
} else {
    código de ação B aqui para FALSE...
} // a condição composta vai dar uma alternativa de execução B pra quando a premissa for falsa... */


/* `${`Condições em JS} - CONDIÇÕES Parte 2`

- Praticar SEMPRE! 
- Revisando: Condição Simples + Condição Composta. CONDIÇÃO SIMPLES (eu tenho um IF e se a condição for TRUE, executa bloco códigos). Se for a CONDIÇÃO COMPOSTA (eu tenho um IF e se a condição for TRUE, executa o bloco de códigos, ELSE e a condição for FALSE executa outro bloco de código). 

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

- Quando a condição Simples/Composta fica muito confusa, podemos usar outras ferramentas... 

- CONDIÇÕES ANINHADAS (nest)

- Vamos usar uma CONDIÇÃO COMPOSTA e colocar outras condições internamente com vários níveis... 

    if (condição) {
        [bloco1]
    } else {
        if (condição2) {
            [bloco2]        // bloco2 só executa se a cond1 for falsa!
        } else {
            [bloco3]        // se cond1 && cond2 == false, exec. bloc3
        }
    }


- CONDIÇÕES MÚLTIPLAS (SWITCH-CASE-BREAK) 

- A condição múltipla serve pra condições múltiplas, principalmente para VALORES FIXOS. Ela não ajuda com INTERVALOS DE VALORES (bom dia, tarde, noite), mas pra eventos PONTUAIS e VALORES FIXOS é ótima (). Ao invés de valores BOOLEANOS, trabalhaos com conidionais de valores FIXOS. 

EXPRESSÃO
    teste1
    teste2
    teste3
    teste4
VOLTA

ILUSTRAÇÃO

    [   EXPRESSÃO   ]
/       |       |       \
A       B       C       D
\       |       |       /
    [   VOLTA FLUXO ]

- É muito útil para situações pontuais e específicas.


switch (expressão) {
    case valor 1:
        [       ]
    case valor 2:
        [       ]
    case valor 3:
        [       ]
    default:
        [       ]
}

- Dentro da estrutura Switch, proveniente da Linguagem C, dentro de cada bloco de código, é OBRIGATÓRIO usar um 'BREAK', na última é opcional, mas vamos usar sempre.

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

A expressão vai testar a condição, digamos pra valor 2, vai executar o bloco do valor 2, vai executar o BREAK e vai sair do SWITCH, continuando ao final do código.

*/
var agora = new Date();
var diaSemana = agora.getDay();

/*
Domingo     [0]
Segunda     [1]
Terça       [2]
Quarta      [3]
Quinta      [4]
Sexta       [5]
Sábado      [6]
*/

console.log(diaSemana);
switch (diaSemana) {
    case 0:
        console.log("Domingo-feira");
        break
    case 1:
        console.log("Segunda-feira");
        break
    case 2:
        console.log("Terça-feira");
        break
    case 3:
        console.log("Quarta-feira")
        break
    case 4:
        console.log("Quinta-feira")
        break
    case 5:
        console.log("Sexta-feira")
        break
    case 6:
        console.log("Sábado-feira")
        break
    default:
        console.log("[ERRO!] Dia inválido!")
        break
}

// Testar apagar os "breaks", vamos perceber que o código vai ler a partir de hoje, e vai "percorrer" todos os próximos casos após o evento TRUE da expressão (diaSemana == 'hoje').

// Estrutura importante pra testar valores pontuais. E não intervalos. Funciona com números inteiros e caracteres (strings). 






/* ANOTAÇÕES LUCAS LEAL

NOVIDADES:

  Estrutura Condicional Aninhada: IF/ELSE IF/ELSE (se/senão se/senão)

Se (if) condição1 for VERDADEIRA, execute o Bloco A.
Senão (else), se (if) condição2 for VERDADEIRA, execute o Bloco B.
Senão (else), execute o Bloco C.

  Ilustração:
if (condição1) {
Bloco A
} else if (condição2) {
Bloco B
} else {
Bloco C
}
____________________________

  Estrutura Condicional Múltipla: SWITCH (expressão)
*tradução: switch = escolha; case = caso

ESCOLHA a EXPRESSÃO1 (switch (expressão1)) como REFERÊNCIA.
EXECUTE o BLOCO do CASO que CORRESPONDA à EXPRESSÃO1.

No exemplo da aula, escolheu-se a variável  DiaSem  como REFERÊNCIA. Esta variável representa o DIA da SEMANA em forma de NÚMERO, onde 0 = domingo; 6 = sábado.
Depois criou-se um CASO para cada DIA, onde cada um têm seu próprio VALOR, este CAPAZ de ser CORRELACIONADO com algum DIA, e BLOCO de CÓDIGOS.
Quando a estrutura SWITCH é LIDA, CORRELACIONA-SE o VALOR da EXPRESSÃO (DiaSem) com o VALOR de cada CASO. Aquele CASO que COINCIDIR, terá o seu BLOCO EXECUTADO.

  Ilustração:
switch(diaSem) {
    case 0:
        console.log ('Domingo')
        break
    case 1:
        console.log ('Segunda-feira')
        break
    case 2:
        console.log ('Terça-feira')
        break
    case 3:
        console.log ('Quarta-feira')
        break
    case 4:
        console.log ('Quinta-feira')
        break
    case 5:
        console.log ('Sexta-feira')
        break
    case 6:
        console.log ('Sábado')
    default:
        console.log ('[ERRO] - DIA INVÁLIDO')
}

*O  break  serve para QUEBRAR, PARAR a EXECUÇÃO dentro do BLOCO. Caso não utilize-o, os PRÓXIMOS CASOS serão EXECUTADOS, mesmo que não haja a correlação do VALOR da EXPRESSÃO com o VALOR do CASO. Isto irá ocorrer até que se encontre um  break  . Não é NECESSÁRIO utilizar o  break  no ÚLTIMO CASO dado que, por ser o último, este já irá PARAR a EXECUÇÃO de qualquer forma (mas se quiser usar, pode usar, só não irá fazer diferença).
*O  default:  serve para, se NENHUM dos CASOS SERVIR, executa-se o  default:  . Caso o  default:  esteja por ÚLTIMO, também não é necessário pôr o  break  . Entretanto, caso esteja, por exemplo, em 1°, é NECESSÁRIO pôr o  break   pois, senão, ele irá executar os PRÓXIMOS CASOS até encontrar um  break  .
*A estrutura  switch()  é um pouco limitada pois, no VALOR de cada CASO, só é possível utilizar NÚMEROS INTEIROS e STRINGS.
____________________________

O Construtor  new Date()  retorna um OBJETO de DATA com: DIA da SEMANA, DATA, HORA ATUAL e FUSO HORÁRIO. Ex:
Fri Nov 04 2022 08:30:47 GMT-0300 (Horário Padrão de Brasília)

  Por ser um Construtor,  new Date()  permite-nos criar OBJETOS de DATA ESPECÍFICOS A PARTIR DELE. Para fazer isto, primeiramente, para facilitar, guarda-se o  new Date()  dentro de uma variável, desta forma:
data = new Date()
  E depois você pode usar algum destes MÉTODOS:
data.getFullYear()         Retorna o ANO atual (yyyy)
data.getMonth()	         Retorna o MÊS atual (0-11)
data.getDate()	         Retorna o DIA atual (1-31)
data.getDay()	         Retorna o DIA da SEMANA atual como um NÚMERO (0-6)
*0 = domingo; 6 = sábado.
data.getHours()	         Retorna a HORA atual (0-23)
data.getMinutes()         Retorna os MINUTOS atuais (0-59)
data.getSeconds()        Retorna os SEGUNDOS atuais (0-59)
data.getMilliseconds() Retorna os MILISSEGUNDOS atuais (0-999)
data.getTime()	         Retorna os MILISSEGUNDOS desde o dia 1 de Janeiro de 1970 (WTF? xD)

*/

/*
TRANSCRIÇÃO
0:00
Chegamos aqui a 12ª aula do seu curso de JavaScript e para não perder o costume vamos às nossas perguntas
0:06
básicas porque sem elas não dá pra continuar.
0:09
Em primeiro lugar e antes de mais nada
0:12
você sabe utilizar a extensão Node Exec dentro do Visual Studio Code? Pois eu ensinei isso no vídeo anterior
0:19
Clique aqui em cima da minha cabeça e vá para a primeira
0:21
playlist que você encontrar. É o curso de JavaScript completo.
0:24
Assista à aula 11. Na verdade assista todas as aulas. Em segundo lugar e também muito
0:29
importante, você sabe criar uma condição em JavaScript? Se você já é um programador ou programadora um pouco mais experiente,
0:35
se é um if é simples de criar. Você sabe as
0:38
particularidades que existem os operadores relacionais do JavaScript? Por exemplo, a igualdade, a igualdade restrita?
0:44
Também é muito importante saber isso tudo. E por fim essa é bem simples, você sabe diferenciar
0:49
condições simples e condições compostas quando olhar dentro do seu código? E como sempre, se por acaso você respondeu a algumas dessas perguntas
0:56
"Tá aí eu não sei fazer" é sinal de que você não viu aula anterior.
1:00
Agora se você conseguiu responder tudo direito, seja bem vindo ao próximo vídeo.
1:06
Legendas: Mariana Nascimento
1:18
Olá pequeno gafanhoto, seja bem-vinda a
1:21
12ª aula do seu Curso em Vídeo de JavaScript.
1:24
Totalmente patrocinado pelo Google. O meu nome é Gustavo Guanabara
1:27
e eu sou seu professor. E agora a gente vai dar continuidade, como acabei de falar no início do vídeo aos estudos das
1:34
condições. Nós chegamos aqui a 12ª aula e essa é a parte 2 que trata das condições em JavaScript.
1:40
É muito importante que você tenha visto e
1:43
praticado os exercícios do vídeo anterior.
1:45
Muito importante
1:46
praticar, eu nunca vou cansar de dizer isso. Eu faço isso com os meus alunos em sala de aula, eu encho o saco
1:51
deles. E não seria diferente aqui no YouTube, porque você também é meu aluno, você também é minha aluna. Então pratica!
1:57
Dando uma passada rápida,
1:59
a gente tem dois tipos de condição, é como eu falei no início. A condição simples e a condição composta. As condições simples são
2:07
ifs, eu tenho ifs sem a cláusula else. Eu tenho uma condição e se ela for
2:11
satisfeita vai executar um bloco. Agora se eu precisar de blocos duplos, se uma determinada condição for verdadeira e faz alguma coisa e se não, faz
2:19
outra coisa, eu tenho as condições compostas exatamente como foram representadas aqui embaixo. A gente viu tudo isso bem detalhado no vídeo anterior.
2:26
Não assista a parte 2 dessa aula, que é a aula 12, sem assistir à parte 1, que é a aula 11. Só que aí nem tudo são flores.
2:33
A gente viu no vídeo anterior, no final do vídeo, que nem tudo é faz uma coisa ou faz outra coisa. Existem situações em que
2:40
existem várias possibilidades!
2:41
Ou faz isso, ou faz aquilo outro, são várias formas de tratar um
2:46
determinado dado. E aí a condição simples e a condição composta que estão representadas aqui do lado, não servem de muita coisa. Só que se você for
2:53
esperto, você consegue juntar uma coisa à outra. Vou colocar aqui uma condição
2:59
composta no lado, como a gente viu na aula anterior,
3:01
ela só nos dá duas opções: ou sim ou não. Só que existe uma possibilidade de criar o que eu escrevi aqui em cima: condições
3:08
alinhadas. O que seria isso? Bem simples, eu vou pegar uma condição composta e vou colocar outras condições dentro dela. Por exemplo,
3:16
na minha condição que acabei de representar, dê uma analisada aqui. Lembrando o que a gente viu no vídeo anterior,
3:20
nessa condição, se for verdade faz aquele bloco que está sendo representado ali do lado, senão, eu não faço outro
3:26
bloco. Eu coloco outra condição e isso amplia muito as minhas possibilidades.
3:31
Essa minha condição vai ter duas possibilidades. Eu posso executar um bloco e fazer outra condição dentro, e ir
3:37
alinhando, vem de ninho, um dentro do outro. Nesse meu caso aqui, eu não vou ficar colocando um dentro do outro não, vou colocar só dois níveis.
3:44
Mas lembrando que pode fazer vários níveis.
3:47
Aqui, se for verdade eu faço uma e se for mentira eu faço outra. Então agora eu tenho três
3:51
possibilidades, é só você olhar a quantidade de blocos que têm aqui do lado. Sendo assim, quando eu tenho uma condição
3:56
alinhada, eu tenho exatamente isso que está aqui do lado, uma condição dentro da outra.
4:01
Na verdade o que você está vendo ali, está puxando a condição de cima, está puxando para os dois lados.
4:06
Eu poderia puxar para os lados e criar duas condições, uma dentro de cada. Não existe uma regra de alinhamento.
4:11
Mas é muito comum você fazer desse jeito aqui. Tão comum que o JavaScript tem uma estrutura, um comando bem
4:17
especial que é o else if. A gente vai ver como ele funciona.
4:21
Mas a gente vai se deter aqui, a representar essa estrutura que está aqui do lado. Onde a gente tem um
4:26
if dentro do outro. Dá uma olhada, guarda na sua mente esse gráfico daqui e vamos fazer a sua relação
4:33
escrita em JavaScript. Então eu tenho aqui, a minha condição
4:36
principal, a minha condição 1, eu tenho um if aqui, vou fazer a linha de indentação.
4:41
Lembrando, tem muita gente que fala errado não é identação, é indentação que vem de indente que é
4:48
recuo em inglês. Então eu escrevo uma coisa dentro da outra, escrevo uma coisa
4:51
alinhada à outra, exatamente como está aparecendo aqui do lado. Se por acaso a condição 1
4:57
for verdadeira, ele faz um bloco 1. Agora se não, que é a parte de baixo, ele não vai fazer o bloco 2, que seria uma condição
5:03
composta. Ele vai fazer outra condição. E vai fazer um outro if. Então vou colocar lá, se a condição 2 for
5:09
satisfeita, eu faço o bloco 2. É importante que você perceba o seguinte: para executar o bloco 2
5:15
a condição 1 tem que ser falsa porque se ela for verdadeira já executa o bloco 1, combinado?
5:19
É uma questão de raciocínio lógico. Se a condição 1 for falsa e a condição 2 for verdadeira ele faz o bloco 2.
5:26
Agora se a condição 1 for falsa e a condição 2 for falsa, ele faz o bloco 3.
5:31
E nada me impede de no lugar do bloco 3 colocar outra condição. Eu estaria aumentando um nível no meu alinhamento.
5:38
Mas como a gente está começando a estudar aqui, a gente não vai adicionar muitos níveis. Mas sim, eles são possíveis dentro da programação.
5:45
Mas esses são só os primeiros passos dentro de JavaScript. Não vamos apertar muito as coisas nesse curso básico não.
5:51
Então claramente aqui do lado, eu tenho uma condição dentro da outra. Eu acabei de tracejar em volta da condição
5:58
exatamente como tinha feito lá no gráfico anterior. E como eu já disse várias vezes,
6:01
a essa estrutura a gente dá o nome de condição alinhada.
6:06
Em forma de ninho, uma coisa dentro da outra. Tipo aquelas bonecas russas, que é uma boneca dentro de uma
6:12
boneca, é exatamente assim que funciona. E para não ficar só na teoria,
6:16
vamos abrir o nosso Visual Studio Code e vamos executar alguns códigos em JavaScript.
6:24
Então, já estou dentro do meu Windows,
6:26
vou abrir o Visual Studio Code. Então vamos aqui, criar uma pasta nova que vai ser a minha aula 12 e dentro da aula
6:32
12, vou criar um new file. O que vai ser o exercício "011.js".
6:38
A gente vai fazer só JavaScript agora. Exatamente como a gente fez na aula
6:41
passada. Nós vamos usar a nossa extensão Node Exec e já está instalada em Extensions. Se você não viu,
6:48
assista o vídeo anterior que a gente viu como utilizar essa extensão. Vou esconder aqui e então vou fazer o seguinte: vamos pensar
6:54
da seguinte maneira, vamos declarar aqui uma variável idade.
6:58
E vou colocar a idade uma pessoa, 22 anos. E aí eu posso fazer o seguinte, por exemplo, se a idade foi
7:05
abaixo de 18, eu vou escrever na tela,
7:08
aqui no caso do JavaScript, vamos usar o "console.log". A gente não pode usar
7:13
"documents.write" porque a gente não tá dentro do navegador, a gente vai utilizar o NODDS.
7:17
Então seria "console.log". Você tem que entender aí a diferença entre utilizar o NODDS e utilizar dentro do navegador.
7:24
Então pra cada um tem uma funcionalidade diferente.
7:27
Na verdade eu posso até utilizar isso aqui dentro do HTML normal também, só que ele vai cair lá no console e tem que dar uma
7:32
olhada no console do navegador. Mas enfim, vamos lá. Se for a idade ficou abaixo de 18, vou colocar aqui menor de idade.
7:39
Eu nem precisava usar a crase, eu posso utilizar aspas simples (' ') porque eu não tenho interpolação nenhuma, mas tanto faz.
7:45
Se não, maior de idade. No caso aqui seria uma condição composta, né? Bem básica.
7:50
Vamos executar, vou apertar f8 aqui. Se você tá apertando f8 e não está funcionando no seu computador
7:56
é sinal de que você não instalou a extensão
7:58
corretamente, então
7:59
volte às aulas para você poder fazer tudo bonitinho. Então tá, maior de idade porque é 22, se fosse 12 (Vou executar de novo,
8:06
clico em f8) é menor de idade, tranquilo.
8:08
Só que aí eu
8:09
imagino o seguinte, eu quero em vez de dizer que é maior de idade ou menor de idade, eu vou botar assim: não vota e vota.
8:16
Vou executar de novo, ali: não vota. Com 12 anos realmente não se vota.
8:20
Mas com 16 anos a pessoa vota e esse programa estaria errado.
8:26
E aí vem um assunto que eu gosto sempre de tocar. Você vê aqui: eu não recebi erro nenhum e aí dentro de sala
8:31
de aula tem muito aluno chega pra mim e fala: "Ô Guanabara, meu programa não deu erro." não dar erro na tela não significa que seu
8:37
programa está certo. O meu programa
8:39
totalmente escrito certinho, não teve erro nenhum.
8:41
Só que a minha lógica está errada. Uma pessoa no brasil com 16 anos, ela pode votar. Então toma cuidado com esse negócio de
8:49
estar certo ou estar errado. O meu código não tem erro sintático mas ele tem erro de lógica, porque com 16 anos
8:56
hoje no Brasil é o voto opcional.
8:58
Então vamos fazer o seguinte, como é que funciona o sistema de voto aqui no Brasil? Quem tem abaixo de 16 realmente não vota, beleza?
9:05
Senão, eu tenho a opção do voto opcional e do voto obrigatório.
9:10
Vou colocar aqui: se a idade foi maior ou igual a 16 e (a gente viu isso em operadores lógicos e
9:17
operadores relacionais, tem uma aula só disso)
9:20
se a idade for maior ou igual à 16 e a idade for menor do que 18, aí eu tenho um bloco aqui
9:26
que vai ser console.log('voto opcional'), vamos testar aqui:
9:32
[f8]. Ali: com 16 anos o voto é opcional.
9:35
Vamos colocar aqui agora: 12 anos, não vota. Está funcionando.
9:39
Só que se eu tiver 22 anos, o meu programa não mostrou nada. E aí eu vou dizer de novo.
9:45
Significa que meu programa... "Ah, mas o meu programa não deu erro" ele não deu erro
9:50
sintático, ele deu erro de lógica. Porque abaixo de 16 "ok", acima de 16 e menores de 18
9:56
"ok" também, mas e maior do que 18? Eu tirei essa
9:59
possibilidade do meu programa. E outra coisa importante, se a idade não é menor do que 16,
10:04
obviamente ela é maior ou igual a 16. Então isso está meio desnecessário. Então eu posso tirar essa parte aqui e meu programa
10:12
funcionaria sem problema nenhum. Faça seus testes na sua casa, não acredita em mim não.
10:17
Digita e vê se está funcionando direitinho. É só uma linha de raciocínio.
10:20
Isso daqui já está implícito,
10:23
se a idade não é menor do que 16, obviamente é maior ou igual, então eu não precisava testar isso. Meu código está inflando, estou escrevendo coisas
10:30
desnecessariamente. Mas se você se sentir no início mas confortável escrevendo isso, sem problema nenhum.
10:36
Outra coisa para simplificar,
10:37
dentro do JavaScript, como o else e o if são muito comuns, eu posso fazer isso aqui: eu posso pegar esse if e jogar aqui dentro.
10:45
É o else if, uso o else if normal. E eu
10:48
economizo a escrita de um bloco. Eu posso eliminar um bloco. Aí eu sempre vou utilizar assim: se a idade for menor que
10:54
16, não vota. Se não, se a idade for menor que 18
10:58
sabendo que menor do que 18 e maior que 16, então o voto é opcional.
11:03
Se não, se a idade for maior ou igual a 18,
11:06
aí o meu console.log vai ser ('voto obrigatório').
11:12
E aí vamos pensar de novo. Se a idade não é menor do que 18, obviamente é maior ou igual a 18.
11:17
Então eu nem preciso desse if aqui, eu posso fazer simplesmente else.
11:21
Então abaixo de 16 não vota. Entre 16 e 18 o voto é opcional e acima de 18 já está implícito aqui,
11:29
o voto é obrigatório. Vou executar aqui, o voto é obrigatório. O que aconteceu aqui foi que eu selecionei esse Node Exec.
11:37
E se eu selecionar aqui e dar f8 ele vai executar só que está selecionado. Então se você não
11:42
selecionar nada ele executa o seu comando inteiro. Então com 22 anos o voto é obrigatório.
11:47
Só que aí tem um outro pequeno problema. No Brasil quem tem acima de 65 anos por exemplo,
11:53
67 anos, o voto volta a ser opcional. E no meu caso que ele disse que o voto é obrigatório.
11:57
E mais uma vez não significa que você não tenha recebido o erro que a sua lógica está certa. Isso porque no Brasil
12:04
quem tem acima de 16 e é menor do que 18
12:07
ou a idade acima de 65, o voto é opcional.
12:11
Viu como é que funciona? Vou executar com 67 anos, o voto é opcional. Vou até botar aqui:
12:17
console.log, "Você tem [idade] anos." aí ele vai mostrar lá se o voto é opcional ou obrigatório. Ali: "Você tem 67 anos,
12:25
voto opcional.". Então vou colocar aqui 12 anos. "Você tem 12 anos, não vota.". Vou botar aqui
12:31
22. Executando: "Você tem 22 anos, o voto é obrigatório.". Faça seus testes aí na sua casa, é essa daqui não é a única opção.
12:38
Não existe na programação há só uma opção para poder fazer as coisas. Então dê uma estudada nessa parte aqui e aprende a utilizar
12:46
essas estruturas
12:48
condicionais alinhadas. E se por acaso você tiver tendo dificuldade, é sinal de que você não praticou tanto assim
12:54
as estruturas condicionais simples e compostas. Então vê se você concorda comigo,
12:58
se você não estudou o básico, não treinou o básico, você vai sentir dificuldade quando a gente avançar um pouquinho mais.
13:05
E lembre-se de uma coisa: desistir não está nos seus planos. Você precisa aprender JavaScript. Você quer aprender JavaScript.
13:11
Então não é a primeira dificuldade que você vai desistir. É só você treinar. Treinando você consegue. Se preciso for
13:18
assista essa aula mais de uma vez. Treina mais de uma vez. Faz exercícios mais de uma vez. Existe um monte de material
13:25
aqui no Curso em Vídeo a gente tem vários exercícios,
13:28
a gente tem (aqui em cima você pode acessar, existe dentro da nossas playlists um curso de linguagem python onde também ensina isso daqui),
13:36
assim essa estrutura que a gente acabou de ver é a estrutura de programação básica.
13:41
Então existem várias linguagens de programação. Vários testes.
13:44
O curso de Python aqui do curso em vídeo é uma
13:46
boa opção para você aprender a programar a estrutura básica e é bem simples e também.
13:51
Mas não fica juntando uma coisa com a outra não. Aprende primeiro a lógica de programação, a estrutura de lógica de programação que a gente está treinando aqui
13:58
utilizando o JavaScript e depois você parte para coisas mais
14:01
avançadas. Uma galera que tenta sair correndo, aprender um monte de coisa e acaba tropeçando no meio do caminho. Mas mais uma vez fica
14:08
o conselho: não desista, persista. Quer ver um negócio? Vamos fazer um outro exemplo aqui, fazer o exercício 12.
14:15
Vou salvar esse daqui (dando ctrl+s). Vou criar o exercício 12 aqui dentro. Aula 12 e exercício 12. Então é um novo exercício, é
14:23
"x012.js". Nesse exercício 12, eu quero dar bom dia; boa tarde; boa noite.
14:29
Para eu dar bom dia, boa tarde e boa noite, eu vou ter que criar variável "hora". Saber que horas são. No início vou botar hora fixa né.
14:36
Sei lá, vou botar "São 8h da manhã".
14:38
No caso aqui, na prática não são oito horas da manhã mas depois a gente vai ver como que pega hora atual mesmo. Vamos escrever na
14:43
tela: "Agora são exatamente [placeholder] (hora) horas.", certo?
14:50
Vamos executar pra ver. Agora são exatamente 8h, né? Porque eu botei o 8 aqui.
14:54
Beleza, aí eu vou verificar
14:56
se é dia, tarde ou noite. São três possibilidades.
15:00
Vou botar, se a hora for abaixo de 12h:
15:04
Eu vou dar bom dia, então console.log('bom dia'). Se não, eu não posso dar boa tarde, boa noite.
15:10
Eu tenho que botar: se não, se ele já é maior ou igual a 12 (como a gente viu anteriormente).
15:15
Se ele for 12 horas até 18 horas (se a hora for menor ou igual a 18,
15:20
que são 6h da tarde) console.log('boa tarde').
15:24
Se não, é a terceira opção: eu vou dar console.log('boa noite').
15:29
Se você quiser pode até criar... Vou botar aqui boa noite. Se você quiser como eu tava falando, você pode criar uma boa
15:34
madrugada, sei lá, passou de meia noite já é madrugada.
15:37
Tenta fazer. Você vai criar um else if, você pode criar quantos else if você quiser dentro de uma mesma estrutura.
15:42
Faz o teste aí na sua casa. Vou executar,
15:45
[f8], "Agora são exatamente 8h, bom dia.". Se fosse 13h (Uma hora da tarde).
15:51
[f8] de novo, "Agora são exatamente 13h, boa tarde.". Se fosse 21h, ele já vai me dar boa noite.
15:59
[f8] Olha lá: "Boa noite.". Tem um pequeno problema que por exemplo, 1h se você quiser considerar
16:04
madrugada, né? Você teria que botar aqui "Boa madrugada." sendo exatamente 1h
16:08
seria bom dia, não é? Porque é abaixo de 12. Seria bom dia então 1 é abaixo de 12. Você poderia colocar aqui "Uma boa
16:16
madrugada" aqui embaixo. Tenta fazer. E aí eu vou te ensinar um negócio bem legal. Como é que a gente pega a hora atual
16:20
do sistema? Vamos dar uma olhada aqui. Eu vou olhar no meu relógio, se você olhar são 13h01min. Exatamente
16:27
13h01min que eu tô gravando essa aula. Como é que eu pego essa hora do meu sistema? Como é que eu pego esse 13?
16:32
Não posso botar 13 aqui, porque cada relógio tem uma hora na hora da execução.
16:37
Como é que eu pego a hora atual? Para fazer isso tem que criar uma outra variável aqui chamada agora.
16:43
Agora é um "new Date()" é sempre Date. Você vai falar assim: "Ah não, mas eu quero pegar a hora. Não seria "hour"?" Não, é sempre Date.
16:48
Então agora
16:50
recebe "new Date()". A hora atual (e não vai ser 13) vai ser o "agora.getHours()".
16:56
Para pegar quantidade de horas. Você pode pegar o ano, o dia, minuto, mês e segundo.
17:03
Fica a dica. Então, vou colocar aqui getHours. Então agora ele vai mostrar pela hora do sistema que está rodando.
17:10
[f8]. Ali: agora são exatamente 13 horas, está vendo? São 13h aqui. "Boa tarde", beleza? Então fica a dica aqui para você conseguir também
17:18
pegar a hora atual do sistema que está rodando seu script. Se seu script estiver rodando no cliente, é a hora do cliente.
17:25
Se você estiver utilizando o NODDS
17:26
para rodar no servidor, é a hora do servidor. Fica ligado aí. E além da estrutura condicional alinhada, existe uma outra muito
17:34
importante que é a condição
17:35
múltipla que serve para valores fixos. É muito útil no mundo da programação, principalmente quando eu quero trabalhar com valores
17:41
fixos, como acabei de falar. Ela não serve muito para intervalo de valores como a gente exemplificou ali: o bom dia; boa tarde; boa noite.
17:48
Essa condição múltipla (essa daqui que eu representei), ela tem a possibilidade não só do "sim" e "não", ela tem a possibilidade de
17:55
outros valores, de valores fixos. Então por exemplo,
17:58
se for um determinado valor faz um bloco, se for outro valor faz outro. Então eu consigo representar esse tipo de estrutura aqui
18:06
dessa maneira. Então eu tenho uma condição, na verdade uma
18:09
expressão. E dessa expressão eu testo vários valores e depois eu volto para o fluxo normal do meu programa.
18:15
Esse tipo de estrutura condicional aqui é a minha condição
18:18
múltipla. Ela não é aplicável para todo tipo de
18:21
situação. O if com else if que a gente acabou de ver é aplicável para todo tipo de situação, mas essa aqui é muito útil em
18:28
situações pontuais, específicas. Para representar essa estrutura que está aqui, eu recomendo que você
18:35
anote no seu caderno o desenho de cada uma delas; coloca o seu caderno
18:39
organizado, quando a gente escreve a gente aprende muito; então a bota esse desenho, se você não copiou o anterior
18:44
volta e coloca o if com else if também desenhado no seu caderno; monta a
18:49
estrutura; coloca o código anotado, porque depois mais tarde quando pintar a dúvida é só você consultar o caderno.
18:54
Parece sala de aula, né? Você está pensando nisso.
18:57
Mas não tem muita diferença você estudar pelo youtube e estudar em sala de aula. Com a diferença que pode
19:01
estudar na hora que você quiser. Pode ser até que você esteja vendo este vídeo de
19:05
madrugada e não tem nada de errado com isso. A não ser se estiver muito cansado ou muito cansada, aí dá uma pausa para descansar.
19:11
Então essa estrutura que está aqui do lado... eu fico dando volta aqui eu não entendo muito bem o que estou falando.
19:15
A gente representa da seguinte maneira: a gente tem um comando dentro do JavaScript, que é o comando switch.
19:20
Então vou botar switch, nota que não é uma condição, é uma expressão e esse switch tem um bloco
19:25
relacionado. Lembrando, a gente viu nas aulas anteriores
19:27
um bloco é todo o abre-e-fecha de chaves dentro da linguagem JavaScript. Cada linguagem tem suas regras.
19:33
A chave ({ }) é muito comum mas tem linguagem que não é chave. Por exemplo, o Python que eu já citei algumas vezes aqui. Mas como
19:39
essa aula é de JavaScript e não é de Python, vamos ver no JavaScript. Então vou botar o
19:43
switch que está aqui do lado e vou colocar os valores dentro dela. Então eu tenho várias
19:48
possibilidades de valor. Para cada 1 eu vou colocar um case. Isto é, se essa expressão for o 1º valor
19:53
faz aquele bloco ali, se for 2º valor faz o segundo, se for o 3º faz outro. Tem uma
19:58
cláusula aqui embaixo que é o default, que é como se fosse o else do switch. Se nenhum dos valores aqui de cima forem satisfeitos,
20:04
ele vai fazer o daqui de baixo. E para cada um dos cases
20:08
eu tenho um bloquinho. Então basicamente a estrutura é dessa maneira. Eu vou botar um case para cada valor e por fim,
20:14
opcionalmente, eu posso colocar um default que é o padrão. Assim se nenhum dos de cima
20:18
forem satisfeitos. A gente vai fazer isso na prática poder entender. Só que eu tenho uma informação importante
20:23
para te dar antes de prosseguir. Dentro da estrutura switch, isso veio lá da linguagem C.
20:27
Existe um detalhezinho que precisa ser seguido. Dentro de cada bloco que você está vendo aqui do lado, eu
20:32
preciso colocar um comando break. Então pra cada um
20:36
eu tenho um break. Na última é opcional mas vamos colocar sempre. Esse break é
20:41
obrigatório. Anota isso no seu caderno, não dá mole. Tem muita gente que erra o uso de switch porque
20:47
esquece break. Exatamente cada um desses breaks aqui são
20:50
obrigatórios. E como é que funciona o negócio? Ele vai testar essa expressão que está aqui em cima. Então ele vai fazer um teste da expressão.
20:56
Vamos supor que essa expressão resulte no valor 2 que está aqui. Então ele vai desviar
21:02
automaticamente, segue a seta amarela. Vai desviar para o comando 2, vai
21:06
executar os comandos que tiveram nesse
21:08
bloquinho (na verdade pode ser ou
21:10
pode ser vários comandos) e no final ele vai bater no break. Quando ele bate no break, olha o que vai acontecer com o fluxo:
21:16
ele vai ser desviado lá pra baixo.
21:18
Se por acaso esse break não existir, vai dar problema porque vai continuar executando todos os comandos até achar um break.
21:24
Então não esquece, anota aí. Anota! Por favor. Eu preciso desse break. Depois não vai dizer que eu não avisei.
21:31
Sem esses breaks teremos problemas. Mas mais uma vez eu te digo: você não precisa confiar em mim. Você precisa
21:38
praticar. Então vamos voltar lá pro nosso Visual Studio Code. Então estou aqui na aula 12.
21:43
Vou criar mais um arquivo. Vou criar um arquivo aqui e vou chamar de "ex013.js".
21:49
Vou colocar de novo no Node. Como a gente já aprendeu a trabalhar com datas, eu vou fazer o seguinte:
21:55
Agora vai ser um "new Date()". Não esquece que esse D é maiúsculo,
21:58
anota aí. Eu vou fazer o seguinte: eu vou criar uma variável dia da semana, chamei de diaSem. Eu posso fazer isso daqui. Lembrando
22:05
que o S eu coloquei em maiúsculo, escolhi que isso fosse maiúsculo. O dia da semana eu uso "agora.getDay()".
22:12
O getDay é o dia da semana.
22:14
Vou botar um comentário de várias linhas aqui pra você poder entender. O JavaScript, os dias da semana são
22:20
exatamente esses aqui: domingo, segunda, terça, quarta, quinta, sexta e sábado. No nosso calendário
22:25
o primeiro dia é domingo, não é segunda feira. Para o JavaScript esse getDay vai pegar
22:32
exatamente esse dia da semana.
22:34
Se eu mandar escrever na tela, (fora do comentário) vou mandar um
22:37
console.log, vou mandar mostrar o dia da semana aqui. Aí você vai falar assim: "Ah, ele vai mostrar
22:43
domingo, segunda, terça, quarta...". Aqui para mim, se você olhar aqui embaixo é uma sexta feira. Se você não estiver conseguindo ler coloque em tela cheia.
22:50
Se ainda assim não tiver dando pra ler, você acredita em mim que hoje é uma sexta-feira que eu estou gravando aqui.
22:55
Então, dia da semana aqui ele é sexta feira. Vou executar (apertar o f8) e ele não vai me mostrar sexta-feira. Ele mostrou: 5.
23:02
Aí eu vou falar: "Puts, 5? Sexta-feira é 6.". Não é não, olha só aqui para o JavaScript
23:07
domingo é zero; segunda é um;
23:10
terça é 2; quarta é 3; quinta é 4; sexta é 5.
23:17
Exatamente como eu acabei de mostrar. E sábado é 6. Faz o teste aí na sua casa, com
23:23
certeza pode acontecer de você estar fazendo no outro dia de semana. Se você está fazendo na sexta a gente combinou, né?
23:28
Mas enfim, ele mostrou 5 aqui na tela, o 5 daqui quer dizer que é sexta feira.
23:33
Só que ele mostrando 5 não fica fácil de entender, né? Então eu teria que fazer
23:37
uma estrutura que eu poderia fazer assim: se o dia da semana for igual (lembra que igual são ==) a 0
23:44
ele escreve domingo. Se não, se o dia da semana for 1:
23:48
segunda. Se não... só que eu escrevo muito. O switch nesse caso facilitaria muito a minha vida. Eu vou fazer assim:
23:56
"switch(diaSem)" é uma expressão. Dia da semana. Se o meu dia da semana: "switch(diaSem) (
24:02
if case 0 )". Viu como é que mais tranquilo? Se for zero é domingo.
24:06
Então vou botar aqui para escrever domingo. Não esquece de colocar o break.
24:11
Case 1 que é a minha segunda-feira, vou colocar aqui: segunda e break.
24:18
Case 2: terça. E vou fazer a mesma coisa para todos os dias.
24:22
Vou até fechar o terminal aqui para você ver o código inteiro. De acordo com o meu dia da semana, se for zero é
24:28
domingo (break para jogar para fora). Se não: segunda, break e sai.
24:33
Se for 2 é terça e assim sucessivamente até sábado. Se você quiser você pode botar assim: "default:" (nosso caso aqui nem é tão
24:40
obrigatório mas se não for de 0 a 6) vou botar aqui "console.log('Dia inválido')".
24:46
Vou até botar "Erro" aqui na frente, pode escrever "Erro dia inválido." e vou colocar o break. Lembrando que esse último break é opcional
24:52
porque não tem comandos embaixo. Mas vamos lá, isso aqui é caso de algum problema. A gente está tentando tratar erros mais para frente.
25:01
Nesse caso aqui: o dia da semana foi 5. É o dia que eu tô botando hoje. Vou executar e ele colocou lá: 5,
25:06
sexta-feira. É então foi exatamente o que a gente tinha previsto. Posso até tirar essa linha aqui, que aí ele vai mostrar
25:13
sexta-feira, certo? Se eu por acaso aqui vier e colocar o dia da semana
25:17
forçadamente para 0 ele vai perder o valor anterior e o dia da semana agora é 0. O dia da semana foi domingo.
25:23
Se por acaso eu botar 6, o dia da semana é sábado. Ali: "sábado". Se eu botar 7,
25:29
errei não tem o dia da semana 7. Ali: "Erro dia inválido.". Viu como é que
25:34
facilita a nossa vida? Vou tirar isso aqui porque eu quero o dia da semana certinho do sistema.
25:38
Se você escrever em forma de if, você vai escrever muito mais.
25:42
Então meu programa está funcionando
25:44
bonitinho, hoje é sexta feira. E aí olha só, vou te mostrar
25:47
se por acaso você esquecer o break. Vou esquecer o break, vou forçadamente
25:52
apagar todos os break. Tirei todos os breaks, fiz um erro aqui.
25:56
Basicamente o que está
25:57
acontecendo é o dia da semana pra mim aqui é 5, a gente já viu. Ele vai desviar aqui do cinco.
26:04
Vai escrever sexta, como não tem break ele vai escrever
26:07
sexta, sábado e erro. Quer ver? Vou executar, ali: sexta sábado e erro. Deu pra entender como funciona? Então o break é
26:15
mega obrigatório dentro do switch. Não esquece isso. Estou voltando com todos eles.
26:21
É muito importante que exista. E uma observação importante: não tem como eu dizer assim: "Ah, se um dia da semana
26:28
for entre 0 e 8.". Nesse caso se você precisar testar intervalos é muito mais valioso você utilizar o if.
26:35
O switch é uma estrutura muito
26:38
importante para você testar dados pontuais, valores pontuais.
26:42
0, 1, 2, 3. Não intervalos, ele só funciona com números inteiros e com caracteres (com strings).
26:51
Eles estão entre aspas. Então, o switch é uma estrutura mais limitada do que o if mas ele é muito útil em situações pontuais.
26:59
Eles te ajudam bastante.
27:03
E mais uma vez eu peço encarecidamente: pratique!
27:06
Se você não
27:07
praticar você não vai conseguir aprender a programação. E depois não adianta falar que o programar é difícil, você não praticou o
27:14
suficiente. Não adianta dizer que andar de bicicleta é difícil se você nunca andou de bicicleta.
27:19
Programar é muito parecido com isso. E já que eu falo tanto que a prática é muito importante, eu reservei o
27:25
próximo vídeo, o vídeo 13 para a gente poder fazer vários exercícios.
27:29
Ele é meio que um ponto do estabelecimento do nosso conhecimento que a gente fez até agora. Então eu vou reservar
27:34
exatamente a aula 13 para isso. E se nesse exato momento você está pensando "Ah, então se é só
27:39
exercício eu vou pular 13 e vou começar na 14." você começou muito errado pensando assim.
27:44
Lembre-se que a prática é muito importante. Então reserve um tempo específico para treinar isso que está acontecendo na aula
27:51
12, na verdade pratique tudo aula 11, a aula 12, tudo bonitinho e na aula 13 bota em
27:57
prática. Faz os exercícios que eu vou propor a você. E é só assim que você vai aprender direitinho a
28:02
programar. Eu me despeço por aqui já deixando avisado a próxima aula é de exercício e ela é muito mas muito
28:08
importante a gente vai fazer essas estruturas e todos os comandos que a gente fez anteriormente.
28:13
Vou tentar fazer vários exercícios pra isso e utilizando o navegador. A gente vai criar exemplos de pequenas funcionalidades dentro de sites
28:21
utilizando a linguagem JavaScript. Eu me despeço por aqui e como sempre, não se esquece de se inscrever no canal,
28:28
habilitar o sininho para receber notificações.
28:30
Aqui em cima tem playlists que eu julgar importante.
28:32
Sempre a primeira playlist é JavaScript, a segunda playlist o curso de
28:36
HTML e sempre que tiver alguma outra playlist ou um vídeo específico que a gente julgar
28:40
importante que você assista, acessa sempre a parte de cima aqui de interatividade porque ela é muito importante para você. Faz os exercícios, dessa aula
28:47
assista à aula 13, se for preciso dá uma pausa para dar uma descansada, um cochilinho.
28:52
Para que você possa voltar firme e forte aí nos estudos de JavaScript.
28:56
Um grande abraço, boas práticas e até a próxima.
29:02
Legendas: Mariana Nascimento
*/
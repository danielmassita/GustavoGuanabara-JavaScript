// Aula 14 - Repetições (Parte 2) - Curso JavaScript #14
// https://youtu.be/eX-lkN_Zahc

/* PERGUNTAS AULA ANTERIOR
1) O que eu faço se quiser fazer uma determinada atividade acontecer várias vezes? 
2) Sabe diferenciar uma estrutura de condição  e as estruturas de repetição? 
3) Consegue dizer a diferença entre as estruturas WHILE e DO..WHILE? 

1) Eu posso utilizar uma linha pra cada código assim sendo um "hard-code", por exemplo comer 8 fatias de pizza comerPizza(), numa função com 8 comandos pra comerPizza(). Esse seria o pior jeito. Podemos fazer uma ESTRUTURA DE REPETIÇÃO ou LAÇO, com uma expressão que quando testada, efetua determinado comando enquanto a condição de teste for válida. 

comerPizza(){
	comerFatia();
	comerFatia();
	comerFatia();
	comerFatia();
	comerFatia();
	comerFatia();
	comerFatia();
	comerFatia();
}
console.log("Acabaram as fatias, nada mais pra comer...")

var temFatia = 8
comerPizza(){
	while (temFatia.length > 0) {
		comerFatia();
		temFatia--
	}	
}
console.log("Acabaram as fatias, nada mais pra comer...")

2) 2) Estruturas de Condições testam condições e de acordo com o resultado (true/false) vão efetuar determinada ação. Estrutura de Repetição vai checar uma condição, e enquanto for verdadeira, repetirá uma determinada ação, e novamente (em loop) vai checar a condição.

3) WHILE é uma Estrutura de Repetição com Teste Lógico no Início! e DO..WHILE é uma Estrutura de Repetição com Teste Lógico no Final!
*/

/* `${REPETIÇÕES EM JS} - Parte 2`

- Relembrando Estruturas de Controle...
- SEQUÊNCIAS que são blocos de códigos executados um depois do outro, independente de desvios... 
- CONDIÇÕES são testes lógicos que dão dois ou mais desvios, podendo executar um bloco OU outro, nunca ambos, cabendo desvios de acordo com as condições. São exemplos o IF (simples), IF/ELSE (composta), OPERADOR TERNÁRIO (testeLógico ? açãoTrue : açãoFalse) e a estrutura SWITCH-CASE-BREAK, que permite múltiplas condições (melhor pra elementos exatos, como dias da semana). As condições podem ser ANINHADAS (uma dentro da outra) ou múltiplas (switch-case-break).
- REPETIÇÕES ou LAÇOS, podem executar várias vezes os códigos, em loop, até que uma determinada condição seja alterada. WHILE faz um laço mas testa ANTES (teste lógico no início). A estrutura DO..WHILE faz o bloco de ação primeiro, e testa DEPOIS (teste lógico no final). 

- REPETIÇÃO COM VARIÁVEL DE CONTROLE (hexágono irregular) e fazemos basicamente três coisas: INICIALIZAÇÃO e o TESTE LÓGICO, e no final uma volta mas com um INCREMENTO. 
	Na primeira passagem, se faz a Inicialização e o Teste Lógico. Sendo o teste verdadeiro, vai executar o código do bloco (com um ou vários comandos). Ao concluir o bloco, vai ocorrer um LOOP, uma volta, um LAÇO pra voltar ao CONTROLE mas durante o LOOP também acontece o INCREMENTO (i++). O caminho de encerramento só vai acontecer quando o teste lógico retornar False. 

for (início ; teste lógico ; incremento) {
	[bloco de códigos]
	[bloco de códigos]
	[...]
} 
// Podemos colocar dentro do for um while, do..while, if, if/else, switch-case-break. Ao final da execução do bloco, ocorre o loop CONCOMITANTEMENTE ao INCREMENTO (i++). */

// 
var c=1
while (c <= 10) {
	[bloco]
	c++
}

// Reescrevendo a Estrutura FOR. 
for (var c=1; c <= 10);	c++) {
	[bloco]
}

/* MÃO NA MASSA E DEPURADOR (debug) 
ambiente.js*/

console.log('Vai começar...')
for (var c = 1; c <= 4; c++){
	console.log(c)
}
console.log('FIM!')

/* DEBUG (start debug)
- abrir o console de depuração
- adicionar o "breakpoint" com a bolinha vermelha
- monitorar a variável c Watch+ (não disponível)
- Executar o programa (play)
- Continuar ou SteOver (F10)
- A bolinha vermelha marca o comando como breakpoint...
- A seta amarela marca o ponto que será executado na linha...
- Após executar, a variável C vai inicializar (mas ainda Undefined) e passar a ser c = 1 após o F10 seguir no novo valor de c...
- Seta amarela acompanha, C <= 4? Sim, verdade, então executa o bloco (F10)... 
- Aparece no console o valor de c, e volta pro incremento (c++) a seta amarela... 
- O c passa a valer 2... A seta amarela segue pro teste lógico (c <= 4)... Sim, true! 
- A seta amarela desce pro bloco e executa o código... Aparece o console.log...
- A seta amarela incrementa no c++, e continua o loop...
- Até o c incrementar e ser 5. C <= 4? Não, é False. A seta amarela sai do bloco e segue pra última linha de código...
- A seta amarela executa o console.log('Fim'). Saímos do bloco do loop.
*/

/* ANOTAÇÕES COMPARTILHADAS (Lucas Leal)

NOVIDADES:

    for (para)

  Estrutura de REPETIÇÃO com VARIÁVEL de CONTROLE. Syntax:
for (inicio; teste; incremento) {bloco de códigos}

Esta estrutura usa uma VARIÁVEL de CONTROLE, esta que representa o PONTO INICIAL do LOOP. Este ponto será VERIFICADO apenas UMA VEZ.
Após esta verificação, passa-se para TESTE LÓGICO. Este, ENQUANTO VERDADEIRO, EXECUTARÁ o BLOCO de CÓDIGOS e FARÁ o INCREMENTO na VARIÁVEL de CONTROLE. Após isto, REPETE-SE o TESTE LÓGICO.
Quando o teste lógico retornar FALSO, FINALIZA-SE a ESTRUTURA de REPETIÇÃO.

  Simplificando:
Esta estrutura REPETE um BLOCO de CÓDIGOS um DETERMINADO NÚMERO de VEZES, onde define-se:
o início do contador (inicio); a condição para que o loop aconteça (teste); a progressão do contador (incremento)

  Ilustração:
for (var c = 1; c <= 10; c++) {bloco de códigos}

  início (este é lido apenas uma vez)
Criou-se  var c  e atribuiu-se o valor  1  nesta.
  teste
Enquanto  c  for MENOR ou IGUAL à 10, EXECUTE o BLOCO de CÓDIGOS.
  incremento
Incremente +1 em  c  .
  *repete-se o teste lógico. Se verdadeiro: executa-se o bloco e faz-se o incremento. Se falso: finaliza-se a estrutura.*


programaçao é pura filosofia! 
    else if ( se voce escolher ''isso'', o resultado vai ser sempre o que voce escolheu, como um jogo de escolhas que geram consequencia ) 
       while ( enquanto essa for sua escolha, tudo se repetirá )
       
*/

/* TRANSCRIÇÃO 
0:00
Estamos chegando há mais um vídeo do seu Curso em Vídeo de JavaScript
0:03
e como é comum no início de cada aula, a gente vai fazer algumas perguntas.
0:07
Em primeiro lugar, o que eu faço se eu quiser fazer uma determinada atividade acontecer várias vezes ?
0:12
Se eu quiser que alguma coisa aconteça 10 vezes, eu vou ter que escrever mesmo código 10 vezes?
0:17
ou existem estruturas especiais para isso? Em segundo lugar, você sabe diferenciar o que é uma estrutura de
0:22
condição e uma estrutura de repetição em uma linguagem de programação? E por falar em repetição,
0:27
Você consegue dizer a diferença entre as estruturas while e do..while? Você sabia que elas existem
0:32
e que tem diferença, sim, entre elas? Você consegue dizer, sem olhar na internet, a diferença entre as duas?
0:38
Pois, se para qualquer uma dessas perguntas, você não soube responder direito? Clique aqui em cima,
0:43
veja o acesso ao curso completo, faça todos os exercícios e com certeza, mais pra frente
0:49
você vai saber programar em JavaScript
0:51
Agora, se você conseguiu mandar bem e responder todas as minhas perguntas,
0:55
seja bem-vindo, seja bem-vinda à mais uma aula.
0:59
Legendas: Samara Affonso
1:11
Olá. pequeno Gafanhoto! Tudo bem com você? Seja bem-vindo à mais uma aula do seu Curso em Vídeo de
1:17
JavaScript totalmente patrocinado pelo Google. O meu nome é Gustavo Guanabara, eu sou professor.
1:22
E, nós estamos chegando à nossa 14º aula, onde a gente vai dar continuidade ao assunto repetições
1:28
em JavaScript. Essa é a segunda parte. E, eu não preciso ficar dizendo que já que essa é a segunda parte
1:34
Você tem que ter assistido e feito os exercícios da parte 1. Ela está aqui em cima, é só você acessar o link
1:40
do curso completo e fazer todas as aulas na sequência que a gente planejou. Não adianta você
1:45
tentar chegar no meio da festa e perguntar se está na hora de cantar parabéns.
1:48
Eu tenho umas relações que só eu consigo entender. Mas, vamos dar uma relembrada no que a gente viu
1:53
até aqui. A gente viu as estruturas de controle. Em primeiro lugar, nós vimos as sequências, que são
1:58
blocos executados um depois do outro, um depois do outro,independente desvio nenhum. Vai acontecer
2:03
da primeira bolinha até a última bolinha. Esses três blocos vão executar sempre. Só que como nem tudo
2:08
na vida são sequências, eu apresentei para você as nossas tão queridas estruturas condicionais, que são
2:14
testes lógicos que dão dois ou mais desvios. Agora, a gente tem a possibilidade de executar um bloco ou outro,
2:20
nunca os dois. A estrutura if, que está representada aqui do lado, te dá sempre uma ou duas possibilidades.
2:25
A estrutura switch, que a gente viu logo em seguida, permite muitas outras oportunidades. E na aula anterior,
2:31
no vídeo anterior, a gente viu as estruturas de repetição ou os laços. A gente aprendeu que os códigos
2:37
podem ser executados várias vezes. É só você olhar o desenho que acabou de ser montado aqui do lado.
2:41
Teve código fazendo volta. Esse looping, essa volta que acontece, são as estruturas que a gente diz como
2:47
sendo estruturas de repetição. E a gente viu na anterior dois tipos: essa aqui, que a estrutura while ou enquanto,
2:54
que faz o laço, mas testa antes. E nós temos também essa outra que está sendo montada aqui do lado
2:59
que é a estrutura do..while, que vai fazer o bloco e testar depois. Então, a básica diferença entre o while
3:03
e do..while, que eu perguntei a ele no início do vídeo e você me respondeu mandando muito bem,
3:09
que a primeira o teste lógico é feito no início e a segunda, do..while, o teste lógico é feito no final.
3:15
E isso nos traz à nova estrutura de repetição que a gente vai ver a partir de agora. A estrutura de repetição
3:20
com variável de controle, que é representada pelo hexágono irregular. Basicamente, neste hexágono
3:26
são feitas três coisas: inicialização, um teste lógico e o incremento. Na primeira passagem,
3:31
exatamente como está aqui, ele faz a inicialização e o teste lógico. Sendo esse teste lógico verdadeiro.
3:37
ele vai executar o bloco, exatamente como acabou de acontecer
3:40
e nesse bloco pode ter um ou vários comandos, como a gente já viu. E feito o bloco, ele vai, automaticamente,
3:46
voltar. Exatamente como a gente tinha feito nas estruturas while e do..while, só que dessa vez,
3:51
no momento do looping, ele também vai fazer o incremento, uma das três partes que estão aqui
3:55
em cima nesse hexágono irregular. O teste lógico, então, é feito mais uma vez. E sendo verdadeiro
4:00
mais uma vez esse bloco vai ser executado e o looping acontecerá novamente. Essa estrutura vai ficar
4:05
acontecendo. Cada vez que voltar eu incremento e faço o teste lógico. Quando esse teste lógico ficar falso,
4:12
ele vai seguir esse caminho, que é o caminho de encerramento. Então, essa estrutura está aqui do lado
4:17
é o que a gente chama de estrutura de repetição com variável de controle. E se essa explicação ficou
4:21
meio confusa, é porque a gente não viu na prática. Aguenta mais um pouquinho que a prática está vindo.
4:26
E para poder praticar, a gente tem que entender como é que a gente faz desenho que a gente acabou de ver
4:31
em JavaScript, já que a gente não trabalha por desenhos a gente trabalha por comandos escritos.
4:36
E o comando escrito da vez é muito simples. O comando que a gente vai utilizar, é o comando for,
4:41
a estrutura for, exatamente como está representada aqui abaixo.
4:44
Como eu disse anteriormente, a estrutura for tem três partes: o início (a inicialização), um teste lógico
4:51
e um incremento. E, tem um bloco, que você viu: abre chave e fecha a chave. Então, explicando mais uma vez:
4:57
na primeira passagem pelo fórum, ele vai fazer a inicialização e o teste. Sendo esse teste verdadeiro,
5:03
ele vai executar um bloco com quantidade de comandos que ele tiver. Inclusive,
5:09
eu posso colocar dentro de um for, um while, um do..while, um if, um switch, eu posso colocar
5:14
qualquer estrutura que a gente viu das aulas anteriores até aqui. Não existe limitação nenhuma
5:18
para programação. Uma vez executado esse bloco, ele vai voltar para cima, exatamente, como você
5:24
acabou de ver na animação. Só que enquanto ele está voltando, ele vai fazer aquele incremento
5:27
que está ali no final e de novo vai fazer o teste lógico. Sendo esse tecnológico verdadeiro,
5:31
ele executa o bloco de novo e volta. Nessa volta, ele faz um incremento de novo e faz o teste lógico
5:37
mais uma vez. Isso vai acontecer enquanto esse teste lógico for verdadeiro. Se por acaso esse teste lógico for
5:43
falso, ele vai sair da estrutura e segue se o fluxo natural de execução do nosso script.
5:49
E se ainda não ficou tão claro para você o funcionamento desse incremento, desse teste lógico,
5:53
dessa inicialização, com certeza vou conseguir te provar agora. Eu vou escrever um código que é muito familiar
5:59
à você, se você viu ao anterior principalmente, que é um código que utiliza a estrutura while,
6:04
que é a estrutura enquanto. Comecei com var c=1. Então, "c" recebe 1. Exatamente
6:09
o que está escrito aqui do meu lado. Vou colocar um enquanto, uma estrutura enquanto e
6:14
vou botar o teste lógico, c <=10. Isto é, o "c" começa com 1. Enquanto "c" for menor ou igual a 10,
6:20
ele vai fazer uma determinada coisa, vai fazer um bloco. e eu vou colocar c++. Lembrando q
6:26
que c++ significa c+ 1. O "c" que estava valendo 1, vai passar a valer 2. Vai voltar. voltando ele testa,
6:32
c >= 10? Sim. Ele vai fazer, vai virar 3 e vai voltar. Ele vai fazer isso até passar de 10, quando ele passar de 10,
6:39
ele sai. Se você ficou com dúvida nessa estrutura, é sinal de que você não assistiu à aula 13 direito.
6:45
Não se esquece, volta aqui em cima a qualquer momento, acessa o link do curso completo e
6:49
faça aula 13. Ela é muito importante para você. Então você tem que ter entendido que essa estrutura está aqui
6:55
do lado é uma estrutura que vai fazer esse bloco retangular acontecer dez vezes. Agora, eu vou te mostrar
7:01
como é que a gente reescreve esse mesmo código só que utilizando a estrutura for. Lembrando que for,
7:07
como eu montei aqui embaixo, tem três áreas principais. A primeira área é a inicialização. E a inicialização
7:13
do código de cima está ali. Acabei de marcar pra você. var c=1. Sendo assim, a minha inicialização sendo essa,
7:20
eu escrevo na linha do for, na primeira parte, o primeiro elemento é a inicialização.
7:25
Então inicializei o 'c" com o valor 1. A segunda parte do bloco é o teste lógico. Exatamente esse teste lógico
7:32
aqui em cima. c <= 10. Vou pegar esse mesmo elemento, vou escrever aqui embaixo.
7:36
Então, c<=10 para a segunda parte. A terceira parte é: o incremento. No nosso caso do código de cima,
7:42
do meu incremento é o c++. Então, vou pegar exatamente esse c++ e vou escrever aqui do lado
7:48
pertinho do meu braço, no for como sendo a terceira parte. O que estou tentando explicar é que o código
7:54
de cima e o código de baixo tem exatamente a mesma funcionalidade. Elas vão começar no 1
8:00
e vão terminar no 10. Então, tanto faz você escrever da maneira de cima, quanto da maneira de baixo.
8:06
E muitos programadores, eu incluído nesse grupo, preferem utilizar o tipo de estrutura de baixo
8:12
para a grande maioria das vezes em que eu sei os limites das minhas execuções. Mas, você não
8:17
precisa ficar acreditando 100% e nem ficar repetindo o que eu tô falando. O que você precisa
8:21
é abrir o seu ambiente. Abre o Visual Studio Code e vamos fazer os nossos testes práticos.
8:29
Então, já estou aqui no nosso ambiente. Vou abrir o Visual Studio Code, ele vai abrir na tela de welcome,
8:35
possa até fechar. Já estou com o meu projeto aberto. Se você não estiver com o projeto aberto, é só você abrir
8:41
Perceba que as aulas estão aqui, todos os exercícios que a gente vai fazendo durante as aulas,
8:45
aula 12, aula 12 de exercícios. A gente tem bastante coisa aqui. Se por acaso você não viu esses vídeos,
8:52
em cima da minha cabeça tem um link para o curso completo. Eu nunca vou cansar de dizer isso,
8:56
porque tem gente que gosta de pular as coisas e lá no final botar a culpa no aprendizado e você
9:02
não fez o suficiente para conseguir aprender. Mas, botão direito, vamos criar um folder novo da aula 14.
9:08
E nessa aula 14, botão direito, new file e vou criar o ambiente.js, que és o nosso ambiente de teste
9:15
Então, está lá dentro. Posso fechar aqui. E foi isso que a gente viu, anteriormente. Vou fazer o exemplo
9:21
que eu acabei de passar pra você, só que eu não vou fazer até 10.
9:24
var c =1
9:27
while( c <= 5) { }. Vimos isso na aula anterior, então não tem como dizer que você não treinou ainda
9:35
Vamos escrever na tela: console.log(c). Só para ele escrever cada um deles. E, eu tenho que fazer c++
9:42
ou c += 1 ou c = c+1. Tanto faz, eu gosto de escrever c++ que é muito mais simples de digitar.
9:51
O que eu tenho que fazer? Vou executar, vou apertar f8, nosso console vai abrir. Veja, 1, 2,3,4,5.
9:57
e acabou o nosso programa. Essa foi a maneira de escrever com o while. A gente pode fazer
10:02
a mesma coisa com o do..while. É só pegar esse, copiar essa parte e colocar do. E, vou colocar aquela parte
10:07
que estava lá em cima, aqui embaixo. Faça enquanto c for maior ou igual à 5. Na hora de executar,
10:12
ele fez a mesma coisa. Vou voltar para o while normal e então, nós vamos fazer o seguinte:
10:17
daqui pra baixo, eu vou escrever o mesmo código em for. Só que para ele não executar esse,
10:23
eu vou criar um comentário de múltiplas linhas. A gente já fez isso. Então, tudo isso é comentário.
10:28
Nós vamos fazer a mesma coisa, lembre-se que o for têm três partes, a primeira, a segunda e a terceira.
10:37
A primeira parte é a inicialização, essa é a minha inicialização. Vou trazê-lá para cá,
10:43
vou colocar exatamente nesse bloco. Então, já coloquei. Vou pegar a segunda parte que é essa,
10:50
é o nosso teste lógico. Então, vou colocar c <= 5. Essa última é o meu incremento
10:56
e o incremento é essa parte. Então, vou colocar c++, ou seja, é mesma coisa. for(var c = 1; c<= 5; c++) { }.
11:00
Aqui dentro vai ser escrito apenas o consol.log. vou colocar: consol.log (c). Se você analisar,
11:07
aqui está a primeira linha, o teste lógico está aqui e o c++ está aqui.
11:14
A única coisa que preciso mesmo adicionar dentro do bloco é o consul.log (c). Então, esse conjunto
11:20
aqui de cima tem a mesma funcionalidade desse conjunto de baixo. Vamos executar, F8.
11:25
Ele está fazendo sem problema nenhum, se você quiser aumentar pra 10, é só executar de novo. Foi de 1 até 10
11:33
Se eu quiser até 3, F8. Foi até 3. Então, a facilidade é muito grande. Nesse exemplo, tudo o que eu colocar
11:40
aqui dentro vai acontecer três vezes ou 10 vezes ou cem vezes ou mil vezes ou um milhão de vezes.
11:47
Certo? Então, você vai colocar aqui dentro o que você quer que aconteça múltiplas vezes.
11:53
Essa é a nossa estrutura for. E eu poderia encerrar a aula aqui, só que eu tenho algumas coisas a mais para
11:58
te mostrar. Inclusive, uma coisa muito importante que é o modo de depuração. Me acompanhe para dentro do
12:04
ambiente e você vai ver sobre o que eu estou falando. Então, o Visual Studio Code vêm com um depurador
12:09
dentro. Eu vou apagar essa parte de cima pra gente ficar só com o código que nos interessa, e vou colocar o
12:14
console.log(`Vai começar...`) . Eu não vou ser maluco de colocar até 1 milhão. Vou fazer até 5. Ou melhor, até 4.
12:22
Eu não preciso ter esse espaço, eu coloco por questões de organização, mas eu gosto de colocar.
12:27
E, aqui dentro vou botar: console.log(c). No final, eu vou colocar: console.log (`FIM!`)
12:34
Então, basicamente, ele vai escrever: "Vai começar". Ele vai contar até 4 e vai terminar. Se eu executar com F8,
12:39
"Vai começar". Contou de 1 à 4, terminou. Só que existe uma maneira em que gente vê passo a passo
12:45
isso acontecendo. Veja, vamos salvar tudo. Você vai clicar aqui em cima, em "Debug" e "Start Debugging".
12:52
Você pode clicar aqui, ele vai abrir a nossa área de depuração. Certo? Aqui eu tenho as variáveis,
12:57
o que eu quero monitorar e tenho algumas coisas interessantes para saber. E ele abriu também,
13:01
o Debug Console, o console de depuração. Basicamente, eu vou fazer o seguinte: se você passar
13:07
o mouse no lado esquerdo, você vai ver que é possível colocar bolinhas vermelhas, que são os nossos pontos
13:12
de parada ou break points. Eu vou botar um break point logo aqui em cima. É só clicar e ele marca. Está vendo?
13:18
A linha 1 foi marcada. Então, o procedimento é esse. Já fiz um break point, que você pode a qualquer momento
13:23
marcar e desmarcar. Eu vou fazer o seguinte: eu tenha variável (c) ,que eu quero ficar monitorando.
13:28
Para monitorar, eu irei na janela "watch", que é ficar assistindo, e vou clicar nesse sinal de mais (+).
13:35
E, ele vai me dizer: " Qual expressão você quer monitorar? ". " Eu quero monitorar a variável (c).
13:39
A variável c está " não disponível" no exato momento. Para que eu possa fazer a variável c aparecer,
13:45
eu tenho que executar o meu programa. Para executar, eu vou apertar o play em verde que está aqui. Executei.
13:50
Ele vai abrir essa janela de cima, já me dando as opções: contínue e step over
13:56
Para step over, aperte a tecla F10 do seu teclado. É muito mais prático. Na verdade, nós vamos apertar aqui
14:01
e o step over vai mudar o comando que está sendo executado. A bolinha vermelha marca o comando que
14:08
eu criei como break point. A seta amarela indica, exatamente, onde ele vai executar.
14:12
Então, nós vamos fazer o seguinte: eu vou apertar step over( que é F10) e ele vai colocar a seta amarela.
14:19
Ele vai escrever: "Vai começar". E isso vai aparecer aqui embaixo, no Debug Console. Você pode estar,
14:24
por exemplo, em algumas dessas outras abas. Você têm que vim para Debug Console e já fica com o dedo no
14:29
teclado, no F10. Então, eu vou apertar o F10. Quando eu apertar F10, ele vai aparecer aqui embaixo, onde está
14:35
o mouse. Quer ver? Apertei F10... "Vai começar". A minha seta amarela veio aqui para o for.
14:40
Agora, a minha variável c está como undefined, isto é, ainda não foi definida. Isso porque, eu te expliquei
14:46
durante a aula, se você não prestou muita atenção assiste de novo. Em primeiro lugar, nós vamos inicializar
14:52
Olha onde cursor está piscando, c = 1. Vou apertar F10 e o "c", que era undefined, virou 1. Certo?
15:00
Agora eu vou fazer o teste, exatamente, como eu falei. Olha seta amarela acompanhando o cursor
15:05
acompanhando também. c <= 4? É só paraR o mouse em cima c que ele mostra, okay? Ou você olha em watch.
15:12
Ele está valendo 1. 1<= 4? Verdade. Lembra? Se é verdade, ele vai executar o bloco que está aqui em baixo
15:19
Vou apertar F10. Ele vai escrever o valor de c na tela. Então, aqui vai aparecer 1. Vou apertar F10.
15:23
Então, já apareceu 1, e ele volta para cima. Quando ele vai fazer o looping, ele vai somar +1. Está vendo aqui,
15:30
o nosso incremento ? O c que estava valendo 1, vai passar valer 2. Quer ver? Vou apertar F10.
15:34
Passou a valer 2. Viu? Exatamente aquilo que a gente acabou de ver. O modo depuração, que é esse inseto
15:40
aqui do lado, facilita muito a execução dos nossos scripts. Principalmente, quando a gente quer ver se
15:44
estão funcionando. Próximo passo: olhar onde o cursor está piscando. Você também pode olhar aqui em cima
15:50
Mas vou botar aqui no watch sempre. Vou até encolher para ficar visível. Vou diminuir esse Call Steck também,
15:57
vou deixar só o watch aqui. O c está valendo 2. 2<=4? Verdade. Se é verdade, F10, ele vai executar
16:02
e vai mostrar o c de novo. Só que dessa vez, o c está valendo 2. Olhe lá, mostrou o 2 na tela, voltou pra cima
16:09
e está prestes a somar +1 no c. O c que está valendo 2, F10, passou a valer 3.
16:15
Viu como é fácil e prático? 3 <= 4? Verdade. Se é verdade, F10, ele mostra o 3. Ele mostrou o 3
16:23
aqui embaixo no console e voltou, vai somar +1. O c que valia 3, vai passar a valer 4. F10, piscou e está valendo 4
16:31
c<=4?
16:33
Sim. "Menor ou igual", ele é igual. Verdade. Se é verdade, ele vai escrever de novo. F10 de novo e
16:40
ele escreveu 4, voltou pra cima e vai somar +1.
16:43
O c que era 4, olhe onde está o mouse, vai virar 5. Virou 5, ele vai testar de novo,
16:49
c <= 4 ? Agora, infelizmente, não. O c agora, (para o mouse em cima) está valendo 5. Viu o 5 aqui em cima?
16:55
Ele está valendo 5. Então, isso se tornou um falso. Lembra do desenho? Quando isso aqui se torna falso,
17:00
ele sai. Saindo, ele vai vir para essa linha aqui, quer ver? Apertei F10, ele veio pra essa linha e vai escrever "Fim!"
17:06
F10 de novo, escreveu "FIM!". Meu programa acabou. Você pode apertar o stop e tudo está sendo executado.
17:13
Viu como esse modo de depuração é muito útil ?
17:17
E apenas lembrando, um pequeno parêntesis, a gente já falou sobre isso anteriormente,
17:21
quando você escreve um programa e não recebe mensagens de erro, é óbvio, isso é um ótimo começo.
17:27
Mas, isso não garante que seu programa tá certo. Então, às vezes, o seu programa está funcionando,
17:31
você não recebeu nenhuma mensagem de erro, mas ele está com um erro, ele só não está com o erro de sintaxe.
17:37
Mas, se ele está com erro de lógica, ele não vai dar erro aqui no meu console. Então, não entra nessa de:
17:42
" Eu digitei e não recebi erro nenhum, mas meu programa não está funcionando."
17:45
Você não recebeu nenhum erro de sintaxe. Você pode ter erros de lógica na sua programação.
17:53
Então, é isso, meu querido, minha querida. Eu me despeço por aqui, já te deixando um convite.
17:58
Essa sessão está chegando ao fim. A gente aprendeu as estruturas de controle, já vimos como trabalhar
18:03
com while, com do.. while, com for e agora, os próximos vídeos vão ser resolução de exercícios. E têm gente que assim a a
18:10
para e pensa: " se é exercício, eu posso pular. Eu quero é matéria, não quero exercício". Pois, nunca se esqueça,
18:18
você só aprende uma coisa quando você a pratica. E, é exatamente para isso que servem os próximos vídeos.
18:24
Nunca se esqueça de assistir os nossos vídeos até o final. A gente dá o maior número de informações
18:29
possíveis de JavaScript. E sempre no final, a gente pede o mesmo de sempre: se inscreva no canal aqui embaixo,
18:36
habilite o sininho, deixe o like, se essa aula serviu para alguma coisa na sua vida. Seja porque você não
18:41
conhecia o for ou porque você não sabia do modo depuração. E nunca se esqueça também,
18:46
eu sei que você participa de um grupo do whatsapp, de um grupo de faculdade ou daquele grupo do facebook
18:52
que as pessoas ficam perguntando: " Qual é a linguagem para programar? Onde têm um curso de
18:55
JavaScript? Eu quero uma referência de JavaScript". Chegou a sua hora de fazer valer tudo isso
19:01
que a gente está construindo pra você. Vá nesses grupos. E sempre que uma pessoa perguntar :
19:05
" Qual é a linguagem que eu devo começar? ". Coloca o link desse curso e diz assim: "aprende JavaScript
19:10
com esse cara". E usa como propaganda assim: " Esse curso desse cara foi patrocinado pelo Google ".
19:16
E a gente está fazendo valer esse patrocínio. A gente se vê no próximo vídeo com muitas outras informações.
19:21
Inclusive, a gente vai aprender como manipular mais controles HTML, utilizando JavaScript durante
19:27
a resolução do exercício. Esse vídeo está chegando ao fim, mas o próximo já está disponível para você assistir.
19:32
Um grande abraço, boas práticas e até a próxima !
19:38
Legendas: Samara Affonso
FIM
*/

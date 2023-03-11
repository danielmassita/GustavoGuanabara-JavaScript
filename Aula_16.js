// Aula 16 - Funções - Curso JavaScript #16
// https://youtu.be/mc3TKp2XzhI

/* PERGUNTAS AULA ANTERIOR
1) Conseguiu simplificar seus códigos usando array?
2) Sabe colocar um array em ordem usando apenas uma chamada de função?
3) Como disparar uma função simples quando apertamos um botão?
4) Quer aprender mais sobre funções? 

1) Sim, usando variáveis compostas com um par chave-valor.
2) nomeDoArray.sort() - Porém, o método .sort() vai retornar Unicode Decimal Table, ou seja, Maiúsculas antes de Minúsculas e Números na primeira casa decimal. Podemos usar uma função posteriormente pra ordenar em "crescente/decrescente" de verdade.
3) Podemos usar um "listener" que fica aguardando (ou um while infinito no body html da página com onload(). até que um evento aconteça), no caso, um EVENTO onKeyDown ou onKeyUp. 
4) Lógico! */

/*
`${Funções em JavaScript}`

- Temos funções na nossa vida, conjunto de tarefas, rotinas, etc. 
- EXEMPLO
	MÃE te CHAMA, ENTREGA um DINHEIRO pra IR na MERCEARIA e COMPRAR LEITE. 
	Você vai retornar a garrafa de LEITE e devolver eventualmente um TROCO.

	- Por paralelismo do exemplo:
	- quando sua mãe te chama, ela faz uma CHAMADA de função (ativa ou rotina ou gatilho, toda quarta-feira por ex.)...
	- é necessário o dinheiro como entrada chamado de PARÂMETRO DE ENTRADA (faz parte da chamada)
	- com o dinheiro, o processo de ir na loja, como, todo o processo é a AÇÃO (bloco de código que executa uma ação)...
	- ao final, quando volta e entrega o leite pra mãe existe o RETORNO.

CHAMADA, PARÂMETROS, AÇÃO, RETORNO (nem toda função usa sempre todos esses itens).

- Definição técnica: "São AÇÕES executadas assim que são CHAMADAS ou em decorrência de algum EVENTO. Uma FUNÇÃO pode receber PARÂMETROS e retornar um RESULTADO."
- No estudo do D.O.M., a gente usava funções quando clicávamos sobre um BOTÃO que disparava um evento (onclick) e executava uma ação. 

function ação(parâmetro) {
	[ bloco de ação e código ]
	[ return [res] ]
}

ação(5) // Estou chamando a função "ação()" executando com o valor (5) que eu estou passando, se tornando o parâmetro. Ocorrerá o processamento do bloco de códigos e ao final vai return um resultado.

ação() é a chamada...
(5) é o parâmetro...

//////////////////

Vamos trabalhar com uma FUNCTION que fará uma checagem se um número é par ou ímpar...


*/


/* TRANSCRIÇÃO
0:00
Antes de começar esse vídeo, responda aquelas perguntas que geralmente a gente faz:
0:04
Em primeiro lugar você conseguiu simplificar seus códigos com o uso de Array?
0:08
Você é uma daquelas pessoas que tem medo de os vetores que fala "ah não Array é muito difícil"?
0:12
Por acaso você assistiu a aula anterior, aqui em cima da minha cabeça você acessa o curso completo,
0:18
vai lá e assiste o vídeo 15 se você não fez isso, na verdade assiste todos os vídeos.
0:23
Outra coisa que eu tenho para te perguntar você sabe colocar uma Array em ordem usando apenas uma linha,
0:28
usando apenas a chamada para uma função? Se você não aprendeu a fazer isso também está no vídeo 15,
0:34
uma outra coisa que a gente precisa também, isso é de umas aulas lá atrás, se não me engano a 10,
0:38
você sabe como disparar uma função simples quando a gente aperta um botão em HTML?
0:43
É uma aula do curso completo também que a gente fala sobre o DOM que é o Document Object Model
0:48
e a gente já aprendeu várias maneiras de disparar funções.
0:51
E por falar em funções você quer aprender mais sobre funções, quer saber mais sobre o potencial dessa coisa
0:57
muito importante principalmente para o JavaScript que é uma linguagem funcional? Pois então se você quer
1:02
as respostas para aquelas perguntas anteriores, você tem que assistir vídeos anteriores,
1:06
agora se o seu objetivo aqui é aprender um pouco mais sobre a função você está no lugar certo.
1:12
Seja bem-vindo, seja bem-vinda a mais uma aula.
1:15
♫
1:27
♫
1:28
Olá pequeno Gafanhoto seja bem-vinda à mais uma aula do seu Curso em Vídeo de JavaScript
1:33
totalmente patrocinado pelo Google! O meu nome é Gustavo Guanabara,
1:36
eu sou professor e agora a gente vai dar continuidade a um conceito que a gente já começou anteriormente,
1:42
lá na aula 10 que é o uso de funções em JavaScript, a gente aprendeu a fazer funcionalidades simples
1:48
mas a gente não falou sobre passagem de parâmetros, sobre retorno de resultados e isso a gente deixou aqui
1:54
para o finalzinho da parte básica do seu curso de JavaScript.
1:57
E como eu acabei de falar JavaScript é uma linguagem que funciona sob o paradigma funcional,
2:02
ela é uma linguagem que funciona como uma linguagem funcional, então função é algo
2:06
muito importante. É claro que a gente vai ver as funcionalidades simples,
2:10
bem básicas, mas esse básico é extremamente importante para todo tipo de linguagem.
2:14
Então acompanha essa aula até o final, assiste esse vídeo até o finalzinho, prática,
2:19
porque logo depois dessa aula vem uma sequência de exercícios, na verdade um grande exercício
2:25
para que a gente possa resolver isso juntando os conceitos de Array, de função,
2:29
tudo junto em um exemplo só envolvendo HTML, você não perde por esperar!
2:32
Mas você precisa de conhecimento que você vai adquirir aqui nessa aula e antes de começar a aula
2:37
e a gente aprender um pouco mais sobre função, eu quero pedir uma coisa que geralmente
2:40
eu peço no final do vídeo, mas estou lembrando aqui no início porque tem gente que esquece de dar
2:43
essa colaboração, aqui em baixo você se inscreve no canal sempre que sair aula nova você vai ser avisado
2:49
se você habilitar a notificação, habilitar aquele sininho e se você receber a notificação, assista o vídeo
2:55
porque quando você recebe a notificação e não abre o vídeo o YouTube pensa assim: "ah eu avisei ele não
3:00
quis ver eu também não vou avisar mais", então assiste sempre que ele avisar.
3:04
E outra coisa que eu quero pedir também é o compartilhamento, já começou a aparecer
3:08
um monte de gente sempre que a gente lança um curso.
3:10
Compartilha la nos grupos de faculdade, grupos de estudo, grupos do Facebook, grupos do WhatsApp,
3:16
avisa lá que tem um curso de JavaScript do Curso em Vídeo, que todo mundo sabe que aquele vídeo
3:20
caprichado como sempre e desta vez como o curso inteiro está saindo no mesmo dia, é mais uma chance
3:26
para você falar: "olha só o curso já está lá e já está completo, vai todo mundo lá e assiste tudo!"
3:31
Vamos imaginar a seguinte situação do dia a dia, normal coisa que poderia acontecer na sua vida,
3:36
você tem funções na sua vida, a sua mãe te dá várias funções na sua vida, todo filho tem um conjunto
3:42
de tarefas que ele tem que fazer, seja ele varrer o quintal, arrumar o quarto isso tudo são tarefas,
3:48
são rotinas e as linguagens de programação também chamam isso de funções ou funcionalidades.
3:53
Vamos imaginar a seguinte situação: olha só a sua mãe chega pra você
3:57
constantemente, toda semana chega pra você pega um dinheirinho e entrega e fala assim: olha só pega
4:04
esse dinheiro e vai na mercearia para comprar leite", qual é a sua função?
4:09
Você pega esse dinheiro, vai até a mercearia, vai chegar lá da maneira que for, vai andando, vai pegar um trem,
4:17
vai pegar um ônibus, vai de táxi, de Uber, enfim você vai chegar até a mercearia, vai fazer os procedimentos
4:24
lá dentro, vai fazer o passo-a-passo pegar o leite, ir lá no caixa e entregar o dinheiro, vai pegar a sua garrafa
4:29
de leite e vai entregar pra sua mãe, a sua mãe vai receber essa garrafa de leite, talvez um troquinho,
4:35
(mentira nunca tem troco você compra tudo de bala que eu sei) e uma vez que a sua funcionalidade terminou,
4:41
ela se encerrou e entende o seguinte para sua mãe não importa o que você fez, como você chegou,
4:47
quanto estava o leite, o que importa a ela é o seguinte: ela tem que te entregar o dinheiro, te passar a ordem
4:53
"quero o leite", você vai ter que trazer leite, como você vai fazer, o que você precisa fazer para chegar lá,
4:59
qual mercearia você vai, não importa o que importa é que ela quer esse resultado, ela quer esse retorno.
5:05
Vamos nessa cena dar alguns nomes aos bois, dar nomes algumas coisas que aparecem nessa cena:
5:11
em primeiro lugar nós vamos dizer o seguinte, quando a sua mãe te chama e te passa a ordem a gente chama
5:17
isso de (um nome óbvio) chamada, então toda função precisa ter uma chamada, às vezes a sua mãe
5:23
te chamando pra comprar leite e às vezes você pode ter uma funcionalidade que acontece toda quarta feira
5:30
de manhã, você não precisa de um disparo da sua mãe, o disparo é o seu relógio, toda a quarta feira 8 horas
5:36
da manhã você tem que ir na mercearia, pegar o dinheiro na estante e comprar leite.
5:40
A chamada nem sempre ela é vocal, nem sempre ela é verbalizada, ela pode ser automatizada,
5:46
outra coisa que você precisa: você não pode ir à mercearia pra comprar leite sem o dinheiro,
5:52
sem alguma coisa de entrada que a gente chama de parâmetro e nessa história que contei
5:57
existem dois parâmetros o dinheiro que você precisa para poder comprar e o que a sua mãe queria,
6:03
qual foi o produto que ela quer também é um parâmetro de entrada, isso faz parte da chamada também.
6:08
Quando você pega o dinheiro e de posse da informação de que sua mãe que é leite, ir à mercearia,
6:13
chegar da maneira que for, o processo todo que acontece lá dentro, o que você tem que fazer
6:18
para conseguir leite a gente chama de ação, então toda a função também tem uma ação envolvida
6:23
e no final quando você volta pra casa e entrega o leite para sua mãe, você tem o que a gente chama de retorno,
6:29
então preste atenção toda função pode ter os seguintes fatores: uma chamada, um conjunto de parâmetros,
6:36
uma ação e um retorno. Nem toda a função usa parâmetros, nem toda a função
6:40
tem retornos mas essas que a gente vai ver agora elas têm isso sim e eles são muito importantes para dar
6:46
mais funcionalidades as nossas tarefas.
6:48
Agora a gente vai para a definição técnica coloca na sua cabeça essa cena, lembra sempre sua mãe fez
6:53
uma chamada, passou parâmetro pra você, você foi lá e executou uma ação e de um retorno, isso é função,
6:58
função na vida real, função pra programação tem essas definições aqui presta atenção:
7:03
Funções são ações executadas assim que são chamadas ou em decorrência de um evento.
7:09
Foi aquilo que eu falei você vai executar alguma coisa quando a sua mãe te chamar ou quando acontecer
7:14
algum evento, quarta feira 8 horas da manhã, todo dia que chover você tem que tirar a roupa do varal,
7:19
você não precisa que sua mãe te peça, começou a chover, tira a roupa do varal.
7:23
Isso são funções que são executados automaticamente, outras precisam de uma chamada, outra coisa
7:28
sobre funções: Uma função pode receber parâmetros (no nosso caso é o dinheiro, lá na nossa cena) e pode
7:34
retornar um resultado (que no caso é a garrafa de leite), então para a programação esses dois conceitos
7:39
que estão aqui do lado, eles servem e eles se encaixam perfeitamente naquela história que a gente acabou
7:44
de contar aqui pra você, na verdade, na prática a gente já executa funções você deve se lembrar quando a gente
7:50
fez o estudo do DOM no modelo de objetos por documento, a gente criou um botão e esse botão
7:56
você podia fazer coisas com ele inclusive clicar sobre ele e quando você clicava ele disparava um evento
8:05
que é o onclick do HTML, o onclick você vai dizer qual é o método que vai ser utilizado, qual é a função
8:11
que vai ser disparada quando você clicar no botão, então você colocava lá no HTML o onclick e colocava
8:17
na época, na aula 10 (se eu não me engano) uma chamada para uma função, essa função tem um nome
8:22
que geralmente é o nome da ação e a gente tinha colocado lá naquela época abre parênteses,
8:27
fecha parênteses, a gente não tinha passado os parâmetros ali no meio daqueles parentes é onde
8:32
a gente vai passar os parâmetros, eu vou executar uma ação que é esse retângulozinho
8:37
que apareceu e ele não tinha retorno, na época quando eu usava o DOM e eu não tinha retorno.
8:42
A partir de agora a gente vai dar um upgrade nesse conceito de função que a gente está vendo aqui,
8:46
o que eu vou fazer agora é isso daqui olha eu vou dentro dos parentes, eu sou capaz de adicionar parâmetros
8:52
e esses parâmetros vão ser processados pela ação e podem ter um resultado, essa ação ela não executa
8:58
por padrão eu tenho que ter uma chamada, lembra disso? Essa chamada eu vou colocar aqui
9:03
na linha debaixo, eu vou colocar ali "ação (5)", o que significa ação(5)? Eu estou chamando a ação,
9:09
que é o nome da minha função, é só você olhar aqui em cima, então estou fazendo nessa linha a chamada,
9:13
então na hora que eu executar esse código está aqui do lado, ele vai pular parte da função e vai executar só
9:18
esse comando aqui debaixo, a ação e eu vou executar esse ação passando um valor, passando 5,
9:24
esse valor 5 dessa linha que estou apontando aqui vai pra cima, vai para o parâmetro.
9:29
Então o parâmetro vai valer 5 neste caso aqui nesse exemplo, eu vou fazer as contas, vou fazer
9:34
o processamento neste retângulo que está aparecendo aqui e no final eu posso dar um retorno de um resultado,
9:40
esse retorno de resultado vai ser voltado lá de novo para a chamada, quem fez a chamada,
9:45
na verdade a sua mãe no exemplo, então eu tinha identificado 4 componentes básicos lá da minha função:
9:52
a chamada, os parâmetros, a ação e o retorno.
9:55
Vamos fazer a mesma coisa aqui com esse código que está aparecendo aqui do lado, a minha chamada
9:59
ela não está em cima, a minha chamada aqui embaixo é ela que vai disparar a execução dessa função
10:05
aqui de cima, no caso do DOM que a gente usou anteriormente a chamada era o onclick do botão, só que
10:09
a gente pode chamar ele pular de fora e a gente já vai ver como funciona isso.
10:12
Eu tenho também os parâmetros, parâmetro está aqui em cima, na verdade esse 5 aqui debaixo também
10:18
é um parâmetro que a gente chama de parâmetro real, aqui em cima a gente chama de parâmetro formal
10:23
mas isso como o próprio nome sugere é só uma formalidade, quando você for aprender isso
10:27
em tecnologia de programação, você vai se aprofundar um pouco mais sobre isso,
10:31
a gente aqui está com curso básico.
10:33
A ação é essa daqui, é esse retângulo todo, tudo que pode ser feito durante a execução da sua função
10:39
e por fim você tem esse comando return aqui que é usado no JavaScript que é o retorno de um resultado,
10:45
vamos fazer um exemplo aqui que isso aqui está meio genérico, eu vou fazer um exemplo de uma
10:49
funcionalidade bem simples que é verificar se o número é par ou ímpar, dá uma olhada aqui eu criei
10:55
uma function, o nome dessa function é parimp (par e ímpar) e ela recebe um parâmetro que é um número
11:03
"n" ali representado nessa primeira linha, eu abro nem fecho chaves e dentro dele eu vou verificar se esse n
11:09
que ele recebeu como parâmetro é par ou ímpar, para verificar se o número é par ou ímpar é só eu verificar
11:15
se ele é divisível por dois, a gente viu lá nas aulas e operadores lá na frente, se você não viu é só você clicar
11:21
aqui em cima você tem o "Veja mais", aqui você tem acesso ao curso completo de JavaScript,
11:27
nunca pule etapas, nunca pule uma aula porque você quer saber sobre um determinado assunto,
11:32
você vai acabar se enrolando lá na frente e vai sair falando que o JavaScript é difícil
11:36
e na verdade tem nada difícil, na verdade é bem fácil.
11:40
Então o que eu vou fazer o seguinte: dentro da function eu vou criar um if, if (n%2==0)
11:50
se o n dividido por 2 for resto 0 é sinal de que o n é par, então vai retornar 'par',
11:56
se não, isso é se não for divisível por 2 eu retorno 'ímpar', eu posso ter mais de um return dentro
12:02
de uma function sem problema nenhum, o que eu preciso é que apenas um deles seja executado,
12:06
como aqui está dentro de um if sem problema nenhum, se eu deixar meu código assim ele não vai
12:11
ser executado, eu posso executar o programa que ele não vai funcionar isso porque eu não tive uma
12:15
coisa simples: a chamada, para fazer a chamada eu tenho que fazer aqui, eu criei uma variável chamada res
12:20
e chamei parimp(11), isso é 11 é o meu parâmetro, eu vou pegar esse 11 e vou jogar lá pra cima no n,
12:28
então o n está valendo 11, na próxima linha do if, if (n%2==0), 11 dividido por 2 dá resultado 5 e resta 1,
12:37
então o meu resto (que é a porcentagem) não é 0, é 1, então ele não vai fazer o return 'par',
12:43
ele vai vir aqui pra baixo e vai fazer o return 'ímpar' quando eu pegar esse return 'ímpar',
12:47
essa palavra ímpar vai vir pra dentro de res, se eu mandar mostrar o res na tela ele vai mostrar
12:53
a palavra ímpar, dá uma olhada nesse código aqui do lado, dá uma analisada nele vou tirar as linhas,
12:59
análise eles e você vai ver como a coisa funciona.
13:02
Se por acaso ainda não entrou na cabeça não tem problema, a gente já vai abrir o Visual Studio Code
13:06
e colocar esse código para rodar mas nesse código aqui a gente também consegue identificar os elementos
13:12
que a gente fez lá na história da sua mãe querendo que você trouxesse leite, olha só a gente tem a chamada
13:18
que é essa chamada daqui que é a linha que vai fazer o disparo da ação, eu tenho o parâmetro que nesse caso
13:23
aqui é o n, eu tenho a minha ação que é esse if completo, esse código todo dentro da função
13:28
é a minha ação e eu tenho um retorno, só tive dois retornos, eu tenho duas linhas que têm o return
13:33
só que nesse caso somente uma delas que foi o ímpar que vai ser meu retorno, uma função em JavaScript
13:39
só pode ter um retorno. E agora deu pra entender?
13:42
Mas como sempre eu falo você não precisa confiar em mim, você não precisa confiar somente no que
13:47
eu estou falando, vamos abrir o Visual Studio Code, abre o seu na sua casa também e vamos começar a praticar.
13:53
♫
13:56
Já estou aqui no Visual Studio Code, estou dentro do Windows, estou abrindo o Visual Studio Code agora
14:01
e vou criar a nossa pasta da aula 16, já está na tela de Welcome, vamos abrir aqui o papelzinho,
14:08
já estou com o meu código aberto que a gente viu todas as aulas, vou criar uma pasta nova que eu vou
14:14
chamar de aula 16 e dentro dessa aula 16 aqui, eu vou criar um papelzinho e vamos criar o função01.js
14:24
vamos criar um código js, fechar aqui, vou encolher aqui e vou colocar em tela cheia pra gente conseguir
14:30
entender direitinho como funciona o negócio.
14:32
Em primeiro lugar vamos fazer esse do par ou ímpar eu vou colocar aqui:
14:35
function parimpar(n), ele vai receber um número como parâmetro abriu o bloco beleza, eu tenho
14:40
a minha função vamos colocar o if, if (n%2 == 0), (lembra de usar dois sinais de igual),
14:47
return 'Par', se não return 'ímpar', vou executar o programa utilizando o F8, executei e nada aconteceu,
14:57
significa que o meu programa está errado? Não, eu escrevi esse comando todo mas eu não chamei
15:02
o parimpar, pra eu chamar o parimpar eu vou fazer o seguinte: parimpar e vou colocar um valor aqui,
15:07
por exemplo 4, 4 eu sei que é par e você vai falar: "pronto, agora se eu executar vai aparecer par na tela",
15:13
executei e nada aconteceu também, você deve se lembrar lá no início do curso quando a gente
15:19
utilizou um prompt e não sabia o que fazer com o resultado e a gente precisa aprender a utilizar variáveis,
15:24
lembra disso lá no início do curso? É exatamente isso que a gente vai ter que fazer também.
15:29
Então preciso jogar isso aqui dentro de uma variável por exemplo vou colocar aqui: let rés = parimpar(4)
15:34
e aqui: console.log(res),
15:38
agora se eu fizer isso, executei e ele escreveu par porque 4 é par.
15:44
Então basicamente só apareceu o par porque eu joguei dentro de uma variável e mostrei, eu também precisava
15:49
da variável era só colocar direto: console.logparimpar(4))
15:58
dá pra fazer direto sem jogar para variável, escreve na tela o resultado de parimpar, olha lá escreveu que é par,
16:03
se eu colocar aqui 223, 223 é ímpar, olha lá 223 ímpar.
16:09
Tranquilo? Então o que eu fiz foi o seguinte: aqui é a minha chamada, 223 é o meu parâmetro,
16:16
esse parâmetro real aqui vai ser jogado dentro desse parâmetro formal n,
16:20
através da chamada, o n está valendo 223, 223 dividido por 2 dá resto 1 então ele não vai retornar o par,
16:28
ele vai retornar o ímpar. Isso aqui é meu retorno que vai ser jogado
16:32
no console.log, então ele mostrou o ímpar na tela beleza?
16:37
Vamos fazer um outro exemplo bem simples aqui, vou criar um função02.js, vou salvar essa,
16:43
vou deixa guardado aqui e vou criar o função02 dentro da aula 16, vou colocar aqui: função02.js,
16:51
eu posso fazer o seguinte aqui: criar uma função soma e essa função soma vai receber dois valores,
16:56
para diferenciar eu vou chamar de n1 e n2, ele recebe dois números: número 1 e número 2.
17:02
O que eu vou fazer com esse resultado? Eu vou retornar n1+ n2,
17:05
então basicamente eu tenho que escrever o seguinte, vou mandar escrever na tela:
17:10
console.log(soma(2, 5))
17:14
a soma entre 2 e 5 a gente sabe que é 7, então basicamente o que ele vai fazer aqui, presta atenção:
17:19
essa é a minha chamada, soma 2 e 5 são meus parâmetros, são dois parâmetros,
17:24
então o 2 vai vir pro primeiro parâmetro e o 5 vai vir para o segundo parâmetro.
17:29
Então tenho n1valendo 2 e n2 valendo 5 pra esse exemplo aqui, pra esse par de parâmetros,
17:34
vai ficar 2+5 igual à 7, ele vai retornar o parâmetro, então tudo isso aqui vai valer 7 que foi a minha chamada
17:41
inteira vai valer n1 + n2, o que eu vou fazer com esse 7? Escrever na tela, então se eu executar ele vai mostrar
17:47
o 7 na tela aqui, viu como é que funcionou? Só que a gente tem um pequeno problema e se por acaso
17:53
eu não mandar 2, se eu mandar soma 2? Eu não mandei dois parâmetros o 2 vai vir pra dentro do n1
17:59
e o n2 vai ficar como undefined do JavaScript que significa indefinido (não definido), se eu executar aqui,
18:08
F8, ele mostrou "not a number", isso é não é um número, não é um número porque ficou como 2 e indefinido,
18:16
2 mais indefinido no JavaScript é "NaN" que é "not a number", não é um número só que eu poso resolver isso,
18:23
por exemplo: se eu por acaso não passar o n1 eu quero que ele considere 0 olha que maneiro que eu posso fazer
18:30
são os parâmetros já pré-definidos, são parâmetro os opcionais, se o n1 não for passado é 0,
18:37
se o n2 não for passado é 0, então se eu colocar aqui 7 com 3 o n1 não vai ficar valendo 0, vai ficar valendo 7,
18:46
o n2 não vai ficar valendo 0 vai ficar no 3 e ele vai mostrar 10 na tela.
18:50
Agora se eu passar só o 7 que estava dando not a number antes agora ele vai me dar simplesmente 7,
18:57
porque? Porque eu mandei somar 7 com nada, 7 com nada dá 7, então esses parâmetros opcionais
19:04
do JavaScript são muito úteis para você.
19:06
Uma outra coisa que eu posso fazer também no JavaScript, vou criar a função03
19:13
função03.js, vou jogar uma função dentro de uma variável, então eu vou colocar aqui:
19:20
let v = function ( ), olha que bizarro! Você consegue fazer isso dentro do JavaScript porque ele é
19:27
uma linguagem funcional nós não vamos nos aprofundar muito nisso mas dá pra fazer sim,
19:31
então por exemplo se eu receber x e ele retornar o dobro de x, return x*2, eu tenho aqui a minha variável v
19:39
vai receber um parâmetro e eu quero calcular o dobro dele, eu posso fazer isso aqui, mandar escrever na tela:
19:46
console.log(v(5)), se eu executar ele mostrou 10, isso é eu passei para a minha variável um parâmetro
19:58
e ele conseguiu executar uma função.
20:00
Existe também uma sintaxe que é arrow function, são as funções arrow, a função flecha que utiliza esse sinal aqui
20:08
de flecha, só que eu não vou entrar nesse caso quem está no curso básico, mas existem muitas outras sintaxe
20:15
para você poder aprender a utilizar funções em JavaScript, a gente consegue sim fazer isso
20:20
mas isso já foge do escopo do nosso curso ser básico mas você pode com isso que eu te ensinei
20:25
fazer um monte de coisa por exemplo aqui, vou criar a função 04 vamos criar mais um arquivo aqui,
20:31
calcular o fatorial de um número, fatorial é o número é o seguinte vou colocar aqui: 5 fatorial é a mesma coisa
20:37
que 5x4x3x2x1, seu professor provavelmente na aula de programação passou um programa para calcular
20:46
o fatorial, então passou a seguinte: function fatorial(n)
20:51
e vai retornar o fator desse número, vamos fazer o seguinte aqui: vou criar uma variável chamada fat
20:57
e essa variável fat recebe 1, vou fazer um for e vou ter o meu contador começando em n e enquanto o contador
21:04
for maior do que 1, o contador perde 1, porque eu quero fazer o seguinte, se eu passar 5 aqui
21:10
ele vai começar em 5 e vai perdendo 1 até chegar 1, está vendo aqui? Ele começa em 5 e vai perdendo
21:16
1 até chegar no 1, olha aqui, ele começa no número (se for 5)
21:21
e enquanto ele for maior do que 1, vai perdendo 1, a gente viu isso nas aulas repetição,
21:26
e o meu fatorial vai receber o fatorial
21:29
vezes o c, no final eu dou return fat, só como curiosidade o fato real de 5 é 120, vamos verificar
21:37
se o fatorial de 5 é 120, então eu vou fazer o seguinte: console.log(fatorial(5)),
21:44
vamos ver se ele vai mostrar 120, executando e olha lá, 120, certinho.
21:50
Eu posso ainda fazer o fatorial de uma outra maneira, de uma maneira recursiva.
21:54
Uma recursão ela acontece quando uma função chamada ela mesma, olha só vou te mostrar,
21:59
vou criar a função05.js e eu vou fazer o seguinte aqui, fatorial é o nome da minha função
22:06
então eu vou colocar aqui: function fatorial (n) e agora eu faço o seguinte vamos raciocinar aqui,
22:13
existe uma possibilidade que é a seguinte forma recursiva,
22:16
5 fatorial é a mesma coisa que 5x4x3x2x1, a gente fez isso só que se você parar para analisar 4x3x2x1
22:27
é 4 fatorial, então eu posso reescrever que 5 fatorial é a mesma coisa que 5x4!,
22:34
isso é, o fatorial de um número pode ser calculado baseado num fatorial de outro, por exemplo se eu tenho
22:40
de forma genérica o fatorial de n
22:42
esse fatorial de n é sempre n! = n x (n-1)!
22:48
a não ser que seja um fator é o de 1, porque a gente sabe que matematicamente o fatorial de 1 é 1.
22:54
Baseado nesses conceitos, eu consigo fazer uma função recursiva da seguinte maneira: if (n == 1)
23:02
isso é, se estou tentando calcular o fatorial de 1, que é esse aqui, eu sei que o resultado é um, então return 1,
23:08
agora se não for um que não é essa regra daqui, ela vai seguir essa regra daqui
23:14
que o fatorial do número é: return n* fatorial(n-1), então olha só o que está acontecendo aqui, eu estou criando
23:24
a função fatorial que dentro dela, ela possui uma chamada para ela mesma, olha isso, eu um tenho fatorial
23:30
que chama fatorial aqui dentro.
23:32
Isso que a gente está fazendo é o que a gente chama de Recursividade, isso é um conceito um pouco mais
23:39
complicado a gente não vai se aprofundar também nele, mas se você quiser dar uma estudada depois
23:43
em recursividade também funciona, vou colocar aqui: console.log(fatorial(5)), o mesmo fatorial
23:51
que a gente fez antes, executando ele tem que mostrar 120 também.
23:55
Então fatorial, cálculo de fatorial, um exemplo: funciona da maneira recursiva e funciona da maneira tradicional
24:04
e existem outras funcionalidades que você pode fazer utilizando JavaScript e outras sintaxes
24:10
porque o JavaScript é uma linguagem funcional, então ela tem muitas opções pra gente tratar
24:16
e se essa parte do vídeo que você está vendo esses códigos aqui, eu vou deixar o último ficou muito
24:20
corrido é porque função é um assunto muito grande, inclusive a gente nem vai encerrar ele,
24:26
por várias vezes aqui nesse vídeo falei: "a gente está num curso básico, dá pra gente se aprofundar mais"
24:31
e realmente dá para se aprofundar então a qualquer momento se você quiser assiste à essa aula de novo,
24:35
assiste pausando, assiste fazendo na sua casa porque só assim você vai aprender.
24:41
♫
24:43
Então é isso pequeno Gafanhoto, a gente se despede por aqui do estudo das funções mas você sabendo que
24:49
existem muitos deveres de casa.
24:51
O primeiro dever de casa no próximo vídeo vou te apresentar um problema e você vai resolver ele
24:56
utilizando funções e Array que são os últimos dois assuntos aqui do nosso curso, faça exercício.
25:02
O segundo trabalho de casa é você continuar estudando função porque função tem muita coisa
25:07
dentro do JavaScript e não dá pra gente ver isso dentro de um curso básico, mas saiba que se você quer
25:13
realmente virar um programador JavaScript completão, além desses passos básicos que a gente está dando
25:18
também tem uma caminhada um pouquinho mais longa pela frente.
25:21
Então é isso meu querido e minha querida é hora de dar tchau mas a prática é muito importante,
25:26
então veja os próximos vídeos até o fim e faça na sua casa porque é só assim que você vai aprender,
25:33
eu já falei no início do vídeo para você curtir e compartilhar, se inscrever no canal
25:37
e habilitar a sinetinha, não vou falar isso de novo, apesar de ter acabado de falar de novo
25:41
mas a minha tarefa agora é a seguinte se preciso for assiste esse vídeo de novo até você entender
25:47
o que é uma função, o que é chamada, parâmetro, ação e retorno, se você conseguir entender isso dessa aula
25:54
está ótimo no exercício a gente tira dúvidas a mais.
25:58
Um grande abraço boas práticas e a gente se vê no próximo vídeo, tchau!
26:03
♫
*/

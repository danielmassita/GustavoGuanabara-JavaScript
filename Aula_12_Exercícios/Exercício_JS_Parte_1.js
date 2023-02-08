// Exercícios JavaScript (Parte 1) - Curso JavaScript
// https://youtu.be/b2K7eo5Jdj8

/*

MODELO DE SITE

body

    header
        Título

    section
        Área do Exercício
        div
        div

    footer
        Rodapé

*/

/* TRANSCRIÇÃO

0:00
Se você viu o título desse vídeo e nesse exato momento você pensou: "ah mais a aula é só de exercício,
0:06
não vai ter conteúdo".
0:07
Na verdade exercício um dos conteúdos mais importantes
0:10
mas eu não preciso te convencer disso agora não e pensando nesse tipo de atitude que muitos alunos têm,
0:15
eu estou dizendo exatamente no início do vídeo, vai ter conteúdo novo durante a resolução dos exercícios
0:20
justamente para acabar com essa idéia de que o exercício é só exercício, vamos colocar pra funcionar
0:25
as duas atividades que a gente vai fazer a partir de agora.
0:28
A primeira atividade é a seguinte: um site bonitinho com interatividade, na verdade esse aqui não tem
0:33
interatividade com o usuário e sim com o sistema, porque no momento são 9:51 da manhã e ele está
0:39
mostrando que são 9 horas, você vê que a gente colocou aqui uma foto do amanhecer,
0:43
a cor está mais ou menos pro dia, vou simular a passagem de horas, vou colocar 14 horas da tarde,
0:49
então atualizando aqui se por 14 horas da tarde você já vê que está numa outra cor, uma outra imagem
0:54
de entardecer, agora são 14 horas e se tiver de noite por exemplo, chegou à 21 horas da noite,
1:01
são 21 horas a foto está mais noturna, a cor de fundo já está mais escura e isso tudo, essa configuração
1:07
vai depender da hora do relógio que tiver no sistema, vou te ensinar como fazer isso,
1:11
inclusive mudando cores dinamicamente como você viu acabando de acontecer, só que não é só
1:15
esse exercício não, a gente tem o verificador de idade, vou colocar o ano de nascimento, nasceu no ano 2000
1:21
e é mulher, nasceu em 2000 e é mulher, é uma mulher de 19 anos, se for por exemplo em 1995, masculino,
1:29
é um homem com 24 anos, se foi em 1960 feminino, é uma mulher com 59 anos e por aí vai
1:37
e se eu colocar uma data invalida, por exemplo 2050, 2050 ainda nem chegou,
1:42
olha lá," verifique os dados e tente novamente", se por acaso eu apagar o ano e tentar calcular,
1:46
masculino, mas não digitei o ano, deu erro de novo, "verifique os dados e tente novamente",
1:51
então esse nosso programa além de calcular a idade baseado no ano atual do sistema (do relógio),
1:56
também vai carregar essa imagem de forma dinâmica utilizando JavaScript e outra coisa que a gente vai fazer,
2:01
é esse layout bonitinho em HTML5 e CSS3, tudo passo a passo, tudo coordenado para que você tenha
2:08
o melhor aprendizado possível e testando a maioria das coisas que a gente aprendeu
2:13
até aqui no seu curso de JavaScript.
2:16
E por favor hora de achar que vídeo de exercício é "só exercício", eu vou provar isso pra você a partir de agora.
2:23
Legendas: Tainá Bandeira
2:36
Olá pequeno Gafanhoto, seja bem vindo a mais uma aula aqui do seu Curso em Vídeo de JavaScript
2:41
totalmente patrocinado pelo Google! O meu nome é Gustavo Guanabara, eu sou professor
2:45
e como você acabou de ver ali no início do vídeo, nós chegamos a uma parte muito importante
2:49
que é a parte de colocar em prática aquilo que a gente aprendeu até o momento, a hora de praticar,
2:54
ela é muito importante para todo mundo na hora de aprender qualquer coisa, eu arrisco dizer ela é até mais
3:00
importante do que só assiste a aula, se você está nesse momento pensando assim: "ah não mas esse vídeo é só
3:05
exercício, eu vou pular ele", não pula, vai por mim e não pula,
3:08
até porque eu vou te ensinar um monte de coisa nova, já que muita gente pensa que aula de exercício
3:14
não vai aprender nada, então assiste até o final esse momento de exercício, faz aí na sua casa,
3:19
não adianta nada também você só assistir, afinal, está escrito aqui do lado,
3:23
não está escrito "Hora de assistir", está dizendo aqui "Hora de praticar".
3:27
Então você assiste mas vai colocando em prática no seu computador e antes de começar
3:31
a parte de JavaScript, eu vou propor um modelo de site, já que a gente vai fazer em forma de site
3:37
e esse curso é pra isso, vou montar um modelo de site, dá uma olhada aqui,
3:41
a gente vai ter uma área que eu vou pintar de azul, o site inteiro vai ficar azul, logo no topo eu vou ter um título,
3:47
na parte de baixo a gente vai ter um rodapé que vai colocar só copyright, alguma coisa assim
3:52
e no meio a gente vai colocar uma área onde a gente vai colocar o exercício para funcionar,
3:56
você viu isso funcionando e é muito importante você planejar a estrutura do seu site
4:01
antes de começar a fazer, então nós vamos colocar assim: essa área de fora é o corpo do nosso site,
4:06
talvez se você não tenha feito o curso de HTML 5 com a gente, talvez você tenha uma pequena
4:10
dificuldade com isso mas é só seguir os passos que a gente vai fazer aqui e no momento oportuno
4:15
quando estiver mais liberado de estudo, dá uma assistida, clica aqui em cima, a 2º playlist é sempre
4:20
o curso de HTML5 com CSS, são duas tecnologias muito importantes para você aprender.
4:25
Então dentro do body eu vou ter o meu título como acabei de falar, meu título vai estar dentro de uma área
4:31
de cabeçalho, que é um header, então vou colocar ali um header para fazer a área de cabeçalho,
4:35
a parte de baixo como um rodapé a gente vai fazer um footer essa tag existe também no HTML5,
4:41
se você não sabe relaxa, você vai prendendo momento oportuno e essa área do meio aqui
4:46
onde a gente vai trabalhar vou criar uma section, eu poderia criar uma section ou um article (um artigo),
4:51
mas achei mais coerente e colocar umas section e pra finalizar, dentro dessas sections a gente vai
4:58
criar as que são pequenas divisões que vão conter o nosso conteúdo,
5:02
a do exercício vai ter uma quantidade já pré-definida de , beleza? Então nesse vídeo a gente vai montar
5:08
essa estrutura que está representada aqui do lado, inclusive vou pedir pros nossos queridos editores
5:13
deixarem essa parte daqui pra gente ir montando o código e depois a gente vê o resultado por inteiro.
5:18
♫
5:21
Beleza, já estou com o Visual Studio aberto, o navegador aqui do lado provavelmente você não tá vendo
5:26
porque tem a parte visual do planejamento do nosso site e nós temos dá aula 4 até aula 12,
5:35
vou criar uma pasta nova, então vou vir aqui, "new folder", vou criar uma "aula12ex"
5:41
vai ser a parte de exercícios e nessa pasta, eu vou criar um modelo, então eu vou criar aqui,
5:46
"new file" e vou chamar de "modelo.html", já criei e nós vamos criar o nosso documento.
5:54
E vamos criar: html5, o próprio Visual Studio já facilita a minha vida, vou colocar aqui pt-BR
6:01
e vou "Modelo de Exercício", vai fazendo na sua casa tá, então eu tenho o corpo,
6:07
você tá vendo lá no início da página, então tem um corpo, esse corpo eu vou ter a parte de header
6:15
que é o cabeçalho, eu vou ter uma section e eu vou ter um footer.
6:20
Então eu criei um header, uma section e um footer, dentro do header eu vou criar um título,
6:27
aqui embaixo no footer vou colocar um parágrafo chamado "Curso em Vídeo", posso colocar aquele sinal
6:33
de copyright, apesar de não ser copyright. Vamos chamar de "copy",
6:36
você vai colocar assim: "&coy;", tudo em minúsculas, tudo junto, então vai ficar aquele sinalzinho
6:42
e aqui dentro dessa section eu vou ter , vou fazer exatamente como está ali do lado duas ,
6:47
só para a gente montar a nossa parte estrutural, então essa daqui da minha parte estrutural,
6:52
o código está aparecendo e a estrutura aparecendo, você está vendo tudo bonitinho aqui.
6:57
Outra coisa que vou fazer aqui em cima é criar o estilo, só que dessa vez, pra ter novidade
7:02
eu vou criar o estilo em outro arquivo, vai ser um arquivo separado, para eu fazer isso é só eu fazer assim:
7:07
link e escolher aqui o link:css, no link css vou chamar de: "estilo:css",
7:15
então ele vai ser um arquivo externo, estilo.css, se você segurar a tecla CTRL do seu teclado
7:21
e clicar em estilo ele vai dar uma mensagem de erro, porque esse arquivo não existe
7:25
e você tem uma opção de criar arquivo, está aqui embaixo, quando você criar o arquivo,
7:30
ele já cria pra você, olha o macete, olha que coisa legal.
7:33
Aqui eu consigo fazer as configurações, por exemplo do body, vou fazer também do section,
7:39
vou colocar aqui em cima o header, do section e do footer, já vou fazer as configurações visuais
7:47
de todos esses componentes, lembrando que CSS também tudo em letras minúsculas,
7:52
aqui no body vamos colocar um background e vou colocar um blue, depois a gente configura o tom de azul,
7:59
não gostei desse tom de azul, vou parar o mouse aqui em cima e escolher um tom de azul
8:02
que seja mais bonitinho, vai ser esse azul aqui, ele já montou o código pra mim, outra coisa que configurar
8:08
é a fonte global do meu documento vai ficar: normal 15pt arial,
8:13
lembrando tem que colocar ponto e vírgula. Eu vou mostrar esse código que está sendo
8:18
construído aqui diretamente no navegador, vou abrir o arquivo HTML, salvar tudo aqui,
8:23
"File", "Save All" que é o CTRL+KS, então salvei todo mundo, no HTML você vai dar CTRL+Shifit+P
8:31
e vai escolher "Watch in Chrome" que é um plug-in que a gente instalou a gente está usando direto.
8:36
Então está lá, ele já abriu, esse azul ficou meio roxo, vou dar uma modificada aqui, agora sim,
8:43
ficou um azul mais bonito, como o arquivo está separado, você vai ter que dar CTRL+S para salvar
8:49
ou "File", "Save" e vai ter que atualizar porque o arquivo separado e vai ter uma característica diferente.
8:56
Então vou colocar aqui dentro da ,vou colocar aqui "testando" só pra aparecer alguma coisa,
9:02
apareceu testando aqui, essa minha section, ela vai ser da cor branca, então vou ter que fazer o seguinte:
9:08
a minha section vai ter um background branco, então vou colocar aqui "white" tem que salvar e atualizar,
9:14
e ele ficou ali, "testando", vou colocar também pra ele ficar com as bodas arredondadas:
9:20
"border-radius", que é o raio da borda, vou colocar 10px, você vai ver que quando eu atualizar ficou redondinho.
9:27
Para dar espaço aqui dentro, vamos fazer um: "padding: 15px", ele já ficou aqui,
9:36
na sua casa provavelmente você vai ter que ficar salvando e atualizando já que estamos trabalhando
9:40
com arquivo externo, vou colocar largura fixa de 500px e vou centralizar ele na tela,
9:46
se eu puxar aqui ele está exatamente com 500px, vamos salvar, a largura ficou com 500px,
9:53
só que eu quero tudo no meio da tela, para eu centralizar aqui, eu vou colocar um "margin: auto",
9:57
já centralizou, vou fazer o título e o rodapé ficar em brancos só então: header, vou fazer na verdade
10:03
a cor da fonte ficar branco, não, não dá porque se eu colocar a cor branca aqui ele vai ficar branco, inclusive
10:09
o testando está branco, então não dá pra colocar "color: white" aqui, só vai me dar mais trabalho
10:14
e vai resolver menos, vou colocar aqui no section: "color: white" e vai ficar mais bonitinho.
10:20
Não, na section não, no header e no footer também, salvou, então ficou lá, também quero
10:26
os dois centralizados, então: "text-aling: center"e aqui também "text-aling: center",
10:32
já ficou centralizado,aqui eu vou querer itálico no footer então vou colocar aqui:
10:37
"font-style: italic" e já ficou em itálico lá, outra coisa que eu vou fazer aqui no meio, no section é colocar uma
10:44
sombrinha aqui embaixo, vamos fazer um box-shadow, vou colocar preto, vou colocar ele em 5px
10:51
de deslocamento lateral, 5px deslocamento vertical, 10px de espalhamento (isso tudo eu explico no curso
10:58
de HTML) e black que a cor. Então olha só qual é o resultado, vamos atualizar,
11:02
está vendo? Ele ficou, só que ele ficou muito escuro porque ele está preto,
11:05
uma dica que eu dou é: para o mouse em cima do black, vem aqui e arrastar essa barriga para baixo
11:11
que é a transparência, coloca aproximadamente um pouco abaixo da metade, então agora ele vai fazer
11:15
um rgba, uma transparência. Vamos ver o resultado agora, olha como ficou bem
11:19
mais discretinho, se você quiser menos sombra em vez de 5, vamos colocar 3 e 3, vai ficar um pouco
11:27
mais discreto e você configura da maneira que você achar melhor.
11:31
Então essa área é a configuração de estilo que está em outro arquivo para facilitar a nossa vida,
11:37
então estou aqui com o modelo de exercício já criado, o testando está dentro da ,
11:42
aqui eu tenho outra , "olá", então ele vai fazer várias e cada vai conter um conteúdo
11:47
pra mim, beleza? Então já está criado aqui do lado o modelo, vou diminuir pro código fica em evidência,
11:54
então está aqui o meu código é esse daqui que está do lado da minha cabeça, tenho também o meu estilo
11:59
esse estilo está sendo chamado por esse "estilo.css" e agora por fim antes de terminar o código,
12:05
antes do "/body" eu vou criar um script, só que eu vou começar a escrever o script e não vou escolher
12:10
a primeira, vou escolhe "script: src" para os nossos JavaScript também estarem em arquivos separados.
12:15
Então eu vou colocar: script: src e vou chamar de "script.js", da mesma maneira se você quiser criar
12:23
esse script.js, segura o CTRL, clica e ele vai dizer "não achei o arquivo script.js, você quer que eu crie?"
12:29
e você dá "create" e ele já criou também o script, vamos colocar um alert aqui: ('olá').
12:35
Então eu vou salvar todo mundo, atualizei e ele já me deu o alert "olá", então vou atualizar de novo,
12:42
olha ali, "olá" e vai me mostrar o conteúdo no site e esse "olá" veio desse arquivo aqui
12:46
e dentro do HTML eu tenho a chamada do meu CSS externo e eu tenho a minha chamada do meu
12:52
JavaScript externo e eu tenho dois arquivos o meu arquivo de estilo e meu arquivo de script,
12:58
esse modelo aqui é o que a gente vai utilizar em todos os exercícios que a gente vai fazer a partir de agora,
13:03
aqueles exercícios que você viu funcionando.
13:05
♫
13:07
Então esse vídeo ele serviu pra isso, pra você montar o modelo, no próximo vídeo a gente vai começar
13:13
a resolução dos nossos exercícios que você viu funcionando no início desse vídeo,
13:17
mas não deixa de criar esse arquivo que ele é muito importante pra você, já que sem ele a gente não tem
13:22
estilo nosso site e convenhamos um site feio ninguém quer visitar.
13:27
A gente se vê então no próximo vídeo, monta o seu modelo que a gente vai utilizar ele
13:31
pra todos os exercícios a partir de agora e como sempre eu gostaria de sempre de pedir,
13:35
aqui embaixo você se inscreve no canal, habilita as notificações, compartilha com o seu grupo
13:40
da faculdade, no seu grupo do Facebook de desenvolvedores fala assim: "olhá só, dá uma olhada
13:43
aqui, o cara está fazendo um curso de JavaScript com exercícios práticos está ficando
13:48
bem legal, assiste também", não esquece também de dar um like para mostrar pro algoritmo do YouTube
13:52
que você está gostando, habilita a sinetinha para você ser avisado sempre que sair um vídeo novo,
13:57
porque esse canal não é só de curso JavaScript, tem um monte de vídeos, tem um monte de playlists,
14:01
aqui em cima você vê algumas mas é só você visitar o nosso canal que é youtube.com/cursoemvideo,
14:07
acessar nossa área de playlists e você vai ver que tem muita coisa que a gente está produzindo
14:11
há muitos anos.
14:12
A gente se vê então no próximo vídeo pra colocar em prática tudo aquilo que você viu funcionando.
14:17
Um grande abraço, boas práticas monta o seu modelo e até a próxima!
14:24
Legendas: Tainá Bandeira
*/
// Exercícios JavaScript (Parte 2) - Curso JavaScript
// https://youtu.be/UXSWgnbSHxs

/* `${Hora de Praticar}`

- Abre os arquivos da aula passada e Mãos à Obra, Mãos na Massa!
- Dentro da Aula 12 Ex 
*/

/* TRANSCRIÇÃO

0:00
Neste vídeo a gente vai fazer junto o exercício que está rodando aqui do lado, lembra se for 9 horas da manhã
0:06
vai aparecer agora são 9 horas e o site todo bonitinho, organizadinho, coloridinho,
0:11
já com a imagem da manhã, agora se for de tarde ele vai mostrar são 14 horas, vai mostrar a hora atual
0:17
e vai colocar uma cor diferente, outra imagem, tudo personalizado colocado automaticamente
0:23
assim que eu carrego o site. Agora se foi de noite ele também vai mudar
0:27
a cor do fundo, vai mudar a imagem para uma imagem mais de noite e tudo também feita automaticamente.
0:33
E esse código que está aqui ele usou como base o modelo que a gente criou no vídeo anterior,
0:37
então se por acaso você ainda não fez a prática do vídeo anterior, não vai adiantar nada você assistir
0:41
esse vídeo, então volta lá faz o seu modelo e volta que depois para botar seu exercício em prática.
0:48
Legendas: Tainá Bandeira
1:00
Olá pequeno Gafanhoto, seja bem vindo a mais uma aula do seu Curso em Vídeo de JavaScript
1:05
totalmente patrocinado pelo Google! O meu nome é Gustavo Guanabara, eu sou professor
1:10
e agora a gente vai dar continuidade ao que a gente viu na aula anterior,
1:13
no vídeo anterior a gente começou a colocar tudo em prática, fizemos o documento modelo agora nós vamos
1:19
arrumar a casa para a gente poder criar os exercícios que a gente propôs, para você provar para você mesmo
1:24
que você está aprendendo JavaScript, mas vamos sem delongas vamos arrumar a casa,
1:29
o que a gente precisa é resolver aquele exercício do bom dia, boa tarde e boa noite
1:33
com uma roupagem de site para ficar bonitão. Então já abre os arquivos que você criou na aula
1:37
passada, se organiza e e vamos começar a trabalhar.
1:40
♫
1:43
A primeira coisa que a gente vai fazer é organizar os nossos arquivos, então abre o seu gerenciador
1:47
de arquivos, seja ele qual sistema operacional que for, abre a sua pasta do Curso js que é a pasta onde você
1:52
está guardando os arquivos pra essa aula aqui, dentro da aula 12ex eu tenho os arquivos que a gente criou
1:58
na aula anterior, o que eu vou fazer aqui é organizar tudo isso dentro de uma pasta, então eu vou criar
2:03
com o botão direito uma nova pasta e vou chamar de "Modelo", dentro desse modelo eu vou pegar
2:08
todos esses arquivos, selecionei todos eles segurando o Shift ou pega cada um deles e arrasta pra pasta,
2:15
já tem aqui o modelo, o que eu vou fazer é: pegar essa pasta e duplicar a ela, você no Windows
2:20
pode dar CTRL+C e CTRL+V, eu tenho aqui "duplicar", vou renomear essa pasta, na aula 12
2:25
eu fiz até o exercício 13, vou chamar esse aqui de: "Exercício 14".
2:28
Então vou renomear ela "Exercício014", aqui dentro do Exercício014, eu posso mexer com o que eu quiser,
2:35
então eu tenho um estilo que prontinho e dentro do modelo eu tenho os arquivos em branco,
2:40
então basicamente o que eu fiz foi duplicar isso tudo o que eu vou fazer aqui:
2:43
é fazer um banco de imagem, o seu Google Chrome, entra no site do Google
2:48
e digita: "pexels português", você vai acessar o site pexels.com/pt-br.
2:54
Enfim, vem aqui dentro desse site você vai procurar por exemplo "manhã", quero fotos da manhã
3:02
pra gente poder pegar aqui, eu gostei desse aqui então eu vou abrir quando eu abrir, eu posso o mouse
3:08
em cima daqui e pode salvar ele em qualquer tamanho, vou pegar aqui do tamanho médio,
3:15
pode pegar qualquer tamanho, pra mim não faz sentido baixar esse arquivo grande,
3:18
vou clicar em downloads e o arquivo vai baixar, ele vai baixar os arquivos, também vou vir aqui e digita tarde
3:24
e vou pegar uma foto de tarde, essa aqui aqui no navio, passa o mouse em cima vou pegar o tamanho grande.
3:30
Enfim, você vai baixar três fotos: uma da manhã, outra da tarde e outra da noite.
3:36
Então vou vir aqui e "noite", vou pegar aqui uma foto de noite, essa aqui pra mim tá boa também, você escolhe
3:41
o que for melhor, é importante dizer o seguinte, na Web nem todas as fotos são gratuitas, quando você faz
3:47
uma busca no Google Imagens, nem todas as fotos do Google Imagens são gratuitas, na verdade várias delas
3:52
não são, então o que eu recomendo é banco de imagem gratuita, o pexels é uma ótima opção para isso,
3:59
olha, pexels.com/pt-br pra você fazer uma busca em português.
4:03
Agora o que eu vou fazer é abrir um editor de desenho qualquer, eu vou abrir o Photoshop,
4:09
lembrando que o Photoshop requer a licença, a gente aqui no Curso em Vídeo tem a licença
4:14
do Photoshop e vou abrir os meus três arquivos, vou vir aqui e "arquivo", "abrir" e abrir e vou abrir
4:19
os três arquivos, então já estou com os três arquivos abertos: manhã, tarde e noite.
4:23
O que eu vou fazer, você viu funcionando no início, eu vou fazer uma seleção redondinha para eu salvar
4:28
isso aqui mais bonitinho, então fiz uma seleção redonda, vou colocar o enquadramento aqui,
4:34
vou dar CTRL+C, "arquivo novo" (dei CTRL+N para ele criar um arquivo novo) e vou colar.
4:39
Esse aqui vai ser o meu arquivo da manhã, vou fazer a mesma coisa com as outras, esse aqui é o da tarde
4:45
CTRL+C e CTRL+N e vou criar um arquivo da tarde, também vou pegar o arquivo da noite, bonita essa foto,
4:51
vou colocar centralizado, CTRL+C e CTRL+N e está lá, então agora eu tenho noite, tarde e manhã
4:58
tudo quadradinho, vou até fechar as imagens originais para não ficar enchendo de minha memória.
5:04
Então eu estou com a foto da manhã, a foto da tarde e a foto da noite,outra coisa que eu vou ter que fazer
5:09
é deixar todas as imagens transparentes, então eu vou apagar o plano de fundo,
5:12
venho aqui na camada de plano de fundo e deleto pra ele ficar transparente, está vendo?
5:16
Todas elas eu estou deletando, outra coisa que vou fazer é tornar todas elas do mesmo tamanho
5:21
e como eu vou usar para Web, eu posso colocar ela de um tamanho pequeno, então eu venho aqui em
5:25
"Imagem", "Tamanho da imagem" e vou fazer o tamanho da imagem invés de 690 por 690,
5:31
vou colocar: 250 por 250, todas elas vou fazer a mesma coisa, vou mudar o tamanho dessa pra 250
5:39
e vou mudar o tamanho dessa pra 250, é importante que para Web você gere os arquivos pequenos,
5:45
se não você vai ter grandes problemas pra trabalhar com imagens.
5:49
Então estou com as três imagens aqui e vou salvar pra Web, vou no Photoshop: "Arquivo", "Exportar",
5:55
"Salvar para Web", todas elas eu vou fazer salvar para Web, ele vai perguntar qual o formato eu vou escolher
6:01
PNG, PNG 24 que é um dos melhores formatos para Web e eu vou mandar salvar e eu vou salvar aonde?
6:08
Naquela aula, no exercício 14, então vou salvar essa da manhã, então vou chamar de (tudo em minúsculas):
6:17
"fotomanha" sem espaço, sem assento, sem nada, recomendo que seja tudo em letras minúsculas
6:22
e sem nada de assento. Esse aqui também já mudei, vou salvar para Web
6:27
no formato PNG, na mesma pasta, eu tenho foto manhã, essa daqui minha foto tarde então chamar
6:34
de "fototarde", pode fazer isso com qualquer editor de desenho para não precisa ser o Photoshop
6:38
e eu tenho o da noite aqui, vamos salvar também salvar para web, "fotonoite".
6:43
Beleza, já tenho todas elas vou fechar meu Photoshop porque eu não quero mais usar e na aula
6:50
do Exercício 14, eu já tenho a foto da manhã, a foto de tarde e a foto de noite,
7:00
tudo png e tudo em minúsculas.
7:02
Agora nós vamos começar a trabalhar, vou abrir o meu Visual Studio Code, já estou com a pasta aberta
7:09
e você vê que já tem um Exercício 14 e o modelo, do modelo vamos deixar guardado aqui,
7:14
no Exercício 14, vamos abrir o arquivo principal, o arquivo HTML, vamos abrir o arquivo JavaScript
7:22
e vamos abrir o arquivo CSS, estou com os três arquivos abertos, vou mandar abrir o Google Chrome
7:29
e aqui vou dar um CTRL+Shifit+P e apertar em "whatch in chrome", já tem o modelo.
7:35
Vamos organizar aqui, vou deixar aberto e vamos abrir o navegador aqui do lado,
7:40
vamos dar uma organizada aqui. Já estou com os arquivos abertos dentro do exercício
7:45
eu não abri o modelo, eu abri a pasta do exercício 14 que é esse que a gente está fazendo agora,
7:51
vou dar encolhida aqui para organizar e eu vou tirar esse "testando" e vou tirar o "olá".
7:56
Aqui no título eu vou colocar "Hora do Dia" e o meu título do site vai ficar "Hora do Dia"
8:03
só pra gente ficar com exercício bonitinho, vamos fazer o seguinte aqui, vou colocar aqui: "Aqui vai aparecer
8:09
a mensagem" é só pra gente poder se situar e aqui nessa vamos dar um ID pra ela,
8:16
vou chamar de "msg" e essa segunda eu vou mudar o ID dela e vou chamar de "foto",
8:22
dentro dessa da foto, vou criar um img, ele cria o "src" e o "alt",
8:26
esse src eu vou chamar de "fotomanha.png", ele já te ajudou aqui, só pra ele carregar uma imagem
8:35
pra gente poder organizar tudo bonitinho, então aqui vai aparecer a mensagem e aqui vai aparecer na foto.
8:41
Então vamos lá, então eu tenho a img, no meu img, eu também vou colocar um ID nele, vou chamar
8:46
de "imagem", então eu tenho msg que é uma e eu tenho imagem que é um img, vou colocar aqui
8:52
"foto do dia"esse "alt" é para texto alternativo, vamos salvar e vamos rodar, vamos começar
8:59
a programar meu JavaScript.
9:00
Eu vou ter que criar um objeto para esse daqui, pro "Aqui vai aparecer essa mensagem" que no caso
9:05
do meu HTML, ele tem a ID "msg", então vou criar aqui: var (vou até usar o mesmo nome),
9:11
var msg = window.documents.getElementsById ('msg') do meu HTML,
9:19
também vou ter o img = window.documents.getElementsById ('foto').
9:27
Então eu tenho o meu ID msg e eu tenho o meu ID imagem, então eu tenho esses meus dois objetos.
9:36
Vamos fazer o seguinte, vamos colocar esse código dentro de uma function que vai ser chamado carregar,
9:43
então essa minha function vai carregar, vou jogar esses códigos aqui pra cá pra dentro, só arrastei e ele vem
9:49
pra cá, então eu tenho o meu código aqui no carregar, para carregar eu vou te fazer o seguinte aqui também,
9:53
vou ter que pegar a data atual que é o "new date" (nós vimos isso durante a aula) e eu vou pegar a hora atual
10:00
vai ser a data.getHours, então já tenho a hora atual, no "aqui vai aparecer a mensagem", eu vou colocar:
10:10
msg.innerHTML = `Agora são $ (hora) horas" `
10:19
vamos ver se vai funcionar, pra eu rodar esse "carregar" aqui quando a página carregar, eu vou vir
10:26
aqui no meu HTML e no body e vou colocar: onload = ('carregar'), isso é, quando eu carregar eu vou chamar
10:32
o código carregar. Salvei todos os arquivos, vou atualizar,
10:36
"Agora são 18 horas", exatamente são 18:25 no momento que eu estou gravando esse vídeo,
10:40
então agora são 18 horas.
10:42
Falta agora no JavaScript eu mostrar a imagem certa aqui, pra isso vou fazer um if:
10:47
if (hora >=0 && hora <12), isso é se ela estiver entre 0 hora e meio dia, é bom dia
10:59
vou colocar aqui "BOM DIA!", vou colocar um comentário:
11:01
else if (hora >= 12 && hora < 18) é "BOA TARDE".
11:09
Senão se ela estiver acima de 18 e abaixo de 0 (que já está implícito) eu vou mandar um "BOA NOITE!".
11:16
Então beleza, pra eu fazer o "bom dia" eu vou carregar a imagem aqui dentro e eu já tenho o meu objeto img,
11:23
então é só fazer assim: img.src =
11:27
e eu tenho o nome do meu arquivo, o meu arquivo padrão é o foto manhã, só que o seguinte,
11:32
se for de bom dia a minha foto é a "fotomanha.png", se for de tarde, meu img vai ser (tem que colocar o nome
11:40
que você salvou) "fototarde.png", se for de noite: img.src = 'fotonoite.png'.
11:48
Salvei, atualizei, "Agora são 18 horas" ele mostrou a foto da tarde, vamos fazer o seguinte,
11:55
vamos fazer um teste, vou colocar esse "hora"como comentário e vou forçar pra 8 horas da manhã,
12:02
salvei e atualizei, olha são 8 horas, está de manhã, se for 12h, "são 12 horas, boa tarde",
12:09
se for 22 horas, é de noite, "são 22 horas, boa noite".
12:13
Aqui ele não está incluindo 18h mas se você quiser incluiu 18h é "<=" que aqui são 18 horas e é "boa tarde",
12:20
depende do que você vai escolher, outra coisa que a gente vai fazer é mudar a cor do fundo dinamicamente,
12:25
você viu lá no início como é que muda a cor de fundo e para isso eu vou precisar do Photoshop de novo,
12:30
então vou abrir aqui a foto manhã, a foto tarde e a foto noite, vou abrir no Photoshop,
12:36
eu estou com as três fotos aqui, eu vou pegar uma cor que seja legal de cada uma delas e vou usar no fundo,
12:42
pra eu fazer isso eu vou abrir o Photoshop, vou vir aqui do lado e vou usar esse conta gota,
12:48
quando eu clico com o conta gota eu escolho uma cor, é só arrastar, eu estou segurando
12:53
o botão do mouse e arrastando, vou escolher uma cor legal que vá condizer com o "bom dia",
12:59
vou usar esse amarelo, quando eu solto o amarelo ficou aqui em baixo, vou clicar nele e vou pegar o código,
13:07
esse código hexadecimal "e2cd9f", vou copiar e vou vir aqui e vou fazer o seguinte:
13:14
de manhã vou fazer um documents.body.style.background = '#e2cd9f'
13:28
Vamos fazer um teste de manhã se for 9 horas da manhã, atualizei e ele já ficou são 9 horas,
13:34
ficou de uma cor mais para de manhã, vamos fazer a mesma coisa de tarde, na foto da tarde essa aqui,
13:41
já estou com o conta gota e vou escolher uma cor que esteja aqui na foto e que tenha alguma coisa a ver com
13:48
de tarde, esse laranja aqui, vou clicar aqui no quadrado e vou copiar o código da cor também,
13:54
vou voltar e vou fazer a mesma coisa com o de tarde, não copia o código, digita o seu código,
14:00
body.style.background = '#b9846f'.
14:08
E vamos fazer a mesma coisa pra noite vou pegar a lupinha da noite e vou pegar uma cor que fique boa
14:15
pra noite, acho que esse que está bom, vou copiar o código (CNTRL+C) e vou fazer a mesma coisa
14:21
pra de noite: documents.body.style.background = '#515154'
14:31
salvou de noite vamos fazer os testes aqui, se for de manhã 9 horas está funcionando, se for 13 horas
14:37
que é de tarde,já vai ficar de tarde, está vendo? Já ficou mais bonitinho, se for de noite 22h,
14:43
salvei e atualizei de noite também está, então está funcionando para tudo, claro que eu estou forçando,
14:48
vou retirar e deixar para ele pegar a hora atual, agora são 18 horas ainda está de tarde,
14:54
está no final da tarde aqui pra mim.
14:56
E pra finalizar, você viu funcionando, vamos arrumar essa bagunça que está tudo colado na esquerda,
15:01
vamos colocar tudo centralizado pra isso olha só: ambos os componentes são , são duas ,
15:07
eu posso vir aqui dentro do meu CSS e colocar aqui um seletor para , a minha vai ter um:
15:13
text-align; center; salvei, atualizei já está aqui, vou dar um espacinho dentro dessa também,
15:21
vou colocar aqui: padding: 5px, acredito que esteja de bom tamanho.
15:26
Atualizei, vou colocar um pouquinho mais, vou colocar 8, atualizei e agora tá direitinho, vamos fazer
15:31
o teste para todos os horários? Vou vir aqui no JavaScript e vou fazer assim: a hora vai ser
15:38
2 horas da manhã, são 2 horas da manhã e está bonitinho, 14 horas, são 14 horas, 20 horas,
15:46
são 20 horas. Então o nosso código de Javascript é esse daqui,
15:52
no caso o estilo CSS eu modifiquei um pouquinho e aqui no modelo eu acrescentei a mensagem que vai aparecer
15:58
que nem aparece mais esse texto, porque ele puxa no onload, ele puxa o carregar que é o meu código
16:05
JavaScript para poder fazer o bom dia, o boa tarde e o boa noite que está aqui, na verdade
16:10
ele nem apareceu a mensagem "bom dia", "boa tarde" e "boa noite", mas tá aqui todo o código necessário
16:14
para fazer esse site funcionar.
16:16
♫
16:19
E apenas lembrando caso seu código não esteja funcionando não entrar nessa de falar assim:
16:23
"Ah Guanabara, eu fiz igualzinho seu e não funcionou", se tivesse igualzinho estaria funcionando
16:28
acabei de mostrar, às vezes é uma letra maiúscula, é uma letra que fica faltando,
16:33
pausa o vídeo e faz igualzinho que com certeza vai funcionar, não se esquece que a qualquer momento
16:38
você pode clicar com o botão direito do mouse no seu Google Chrome, escolher um inspetor
16:42
e o inspetor vai te dizer quais são os erros que foram encontrados na página, nem sempre o inspetor
16:47
mostra o erro, mas você pode analisar o seu código e ver em que momento aconteceu a sua falha.
16:52
E não se engane você vai falhar muito no início, no início é muito comum as falhas,
16:57
mas se você persistir, se você insistir com certeza você vai aprender a desenvolver em JavaScript.
17:02
Eu me despeço por aqui com o primeiro exercício resolvido e no próximo vídeo a gente vai resolver
17:07
o próximo exercício que é muito parecido com esse, só que você precisa da interatividade do usuário
17:12
com alguns controles HTML.
17:14
Um grande abraço, boas práticas e até a próxima!
17:19
Legendas: Tainá Bandeira
*/
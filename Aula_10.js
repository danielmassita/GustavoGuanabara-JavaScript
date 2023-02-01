// Aula 10 - Eventos DOM - Curso JavaScript #10
// https://youtu.be/wWnBB-mZIvY

/* Você já entendeu como funciona o DOM com JavaScript? Sabe criar funções em JavaScript? Consegue ligar uma função a um evento em um formulário HTML5 usando JavaScript? Sabe como pegar valores dentro de caixas de texto e fazer cálculos com eles? 

Pois, para responder a essas e muitas outras perguntas, assista essa aula do Curso de JavaScript para Iniciantes até o final. E não se esqueça sempre de praticar todas as atividades que fizermos durante o vídeo no seu próprio computador.

Aula do Curso de JavaScript e ECMAScript para Iniciantes, criado pelo professor Gustavo Guanabara para o canal CursoemVideo.*/

/* PERGUNTAS AULA ANTERIOR
- O que significa a sigla DOM e pra que serve? 

DOM (Document Object Model), Modelo de Objeto para Documento, é uma *INTERFACE padronizada utilizada para REPRESENTAR um DOCUMENTO HTML. Este modelo utiliza uma linguagem neutra que, por meio de uma árvore hierárquica de diretórios, permite você ACESSAR e INTERAGIR com QUALQUER ELEMENTO de seu DOCUMENTO de maneira DINÂMICA com o uso do JavaScript. Desta forma, o JS tem o poder de: alterar, excluir e adicionar: elementos HTML, atributos HTML, eventos HTML, estilos CSS. *Interface, do latim INTER(entre) + FACIES(faces), significa: ligação física ou lógica entre 2 sistemas ou partes que não poderiam ser conectados diretamente. Ou seja, o DOM é o INTERMEDIADOR da COMUNICAÇÃO da linguagem JavaScript com as tecnologias HTML5 e CSS3.

- Sabe montar a ÁRVORE DOM de um website simples?

             window
        /       |       \
location    document    history
                |           
            (   html    )
            /           \
        (head)      (   body   )
        /   \          /   |   |   \
    title   meta      h1   p   p    div
                               |
                            strong

Revivendo os velhos descendos em código ASCII... 

- O que são os elementos Parent e Child em uma árovre DOM?

Parent é um objeto que está acima, na árvore DOM. Um child é um objeto que está abaixo, na árvore DOM. Por exemplo, "window" é Parent de location, document, history. HTML é Child de document. HTML possui dois childs, head e body. Dentro de body, há h1, p, p, div que são Childs de Body. E assim vai...

- Quais são os cinco principais MÉTODOS de selecionar elementos DOM dentro do JS?

by Tag          - getElementsByTagName("")
by ID           - getElementByID("")
by Name         - getElementsByName("")
by Class        - getElementsByClassName("")
by Selector     - querySelector("");        
                - querySelectorAll("");
*/

/* `${Eventos DOM}`

- Os conceitos do DOM vão mostrar coisas legais e formar uma base sólida, com fundamento. Editor, navegador, anotações! 

- O que é DOM? Document, Object Model, facilitador dentro do seu navegador, dentro do HTML5, pra dar acesso aos elementos diretamente para o JS. Sem o DOM, teríamos dificuldade pra acessar os elementos da nossa página. O primeiro passo prático foi a montagem da ÁROVRE DOM. Precisa entender a Árovre DOM, e não decorar, cada página é individual. 

- DICA (se ficou alguma dificuldade na Aula 9, volta e só depois continua a Aula 10)! 

- Além de montar a árvore, usamos CINCO MÉTODOS pra ACESSAR ELEMENTOS dentro do JavaScript, usando o DOM.
    TagName
    ID
    Name
    ClassName
    querySelector (faz a seleção através de elementos CSS)


- Nessa aula, vamos focar em EVENTOS. Por exemplo, uma DIV qualquer... Vamos pro editor:
*/

/* Abrir novo arquivo HTML e codar...



<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Eventos DOM</title>

    <style>
        div#area {
            font: normal 20pt Arial;
            background: rgb(42, 139, 42);
            color: white;
            width: 200px;
            height: 200px;
            line-height: 200px;
            text-align: center;
        }
    </style>

</head>
<body>
    <div id="area">
        Interaja...
    </div>


</body>
</html>

*/



/* EVENTOS DOM 

- É tudo aquilo que pode acontecer com essa DIV (ou qualquer elemento...). O que pode acontecer com essa DIV? O mais comum, será o evento de mouse... São coisas que eu posso fazer, que vai DISPARAR um evento, que vai ser um gatilho pra uma FUNÇÃO.

Mouse dentro da DIV (seis métodos disparados com simples movimento de mouse)

- mouseenter (dispara quando entrar na área da div)
- mousemove (dispara várias vezes enquanto mover dentro div)
- mousedown (dispara enquanto clicar, e segurar, o botão do mouse e a tecla está apertada/down)
- mouseup (dispara um quando SOLTAR o click, o botão do mouse e a tecla foi liberada/up)
- click (evento dispara quando existe um "click" completo)
- mouseout (dispara quando sair da área da div)

https://developer.mozilla.org/en-US/docs/Web/Events


FUNÇÃO (pra disparar um evento...)
- Funcionalidade é um conjunto de códigos/linhas, que vão ser executadas só quando o evento ocorrer... Por exemplo, um BLOCO de 10 linhas. Só serão executadas quando um evento ocorrer.

[ bloco ]

{
    bloco
}

function {
    bloco
}

Existe a function (anônima), e vamos abrir e fechar chaves com o código/bloco dentro. Para o MÉTODO FUNCIONAR precisamos dar um nome pra função, por exemplo, AÇÕES geralmente de evento...

function ação(param){
    bloco
}

Vamos abrir o VS Code...*/

/*

<body>

    <div id="area" onclick="clicar()" onmouseenter="entrar()" onmouseout="sair()">
        Interaja...
    </div>

    <script>
        var a = window.document.getElementById('area')
        a.addEventListener('click', clicar)
        a.addEventListener('mouseenter', entrar)
        a.addEventListener('mouseout', sair)

        function clicar() {
            a.innerText = 'Clicou!';
            a.style.background = 'red';
        }

        function entrar() {
            a.innerText = 'Entrou!';
        }

        function sair() {
            a.innerText = 'Saiu!';
            a.style.background = 'green';
        }

    </script>
</body>

*/



/* DEV TOOLS ERRORS

- Usando o JavaScript, podem ocorrer errors internos que o usuário não saberá.
- Experimentar trocar o w do window.document... por um W maiúsculo, isso iria gerar um erro (TypeError)... 
- Experimentar apagar o w do window.document... isso iria gerar um ReferenceError, not defined... 
- Usar o DevTools (F12) pra inspecionar no CONSOLE os erros...

MÃO NA MASSA - OUTRO EXEMPLO 

- Vamos começar a interagir mais com o usuário, pegar valores digitados pelo usuário (input) pra poder de maneira dinâmica atuar junto com regras. Por exemplo, criar dois inputs pra digitar números e fazer a soma entre eles. 

- html:5
- pt-BR
- Somando Números
- Ctrl+Shift+P (>Live Server ou Alt+L e Alt+O)
- criar dois inputs:number com NAME e ID (manter o NAME pois será útil no futuro com outras interações...)
- input:button que vai chamar a função somar()...

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Somando Números</title>
    <style>
        body {
            font: normal 18pt Arial;
        }
        input {
            font: normal 18pt Arial;
            width: 100px;
        }
        div#res {
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <h1>Somando Valores</h1>
    <input type="number" name="txtn1" id="txtn1"> + 
    <input type="number" name="txtn2" id="txtn2">
    <input type="button" value="Somar!" onclick="somar()">

    <div id="res">Resultado</div>

    <script>
        function somar() {            
            var tn1 = window.document.getElementById('txtn1');
            var tn2 = window.document.querySelector('input#txtn2');
            var res = window.document.getElementById('res')

            var n1 = Number(tn1.value)
            var n2 = Number(tn2.value)

            var s = Number(n1 + n2)
            res.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong>${s}</strong>.`
        }
    </script>
</body>
</html>

Temos no final a parte HTML, STYLE e SCRIPT.*/



/* ANOTAÇÕES LUCAS LEAL
NOVIDADES:

    O que é um EVENTO?

Um EVENTO é uma CONDIÇÃO que, quando verdadeira, fará a CHAMADA de uma FUNÇÃO.

    Exemplos de EVENTOS:

O Evento onmouseenter="" serve para executar alguma FUNÇÃO no momento em que o cliente ENTRAR COM O CURSOR DENTRO do elemento.

O Evento onmousemove="" serve para executar alguma FUNÇÃO no momento em que o cliente MOVER O CURSOR DENTRO do elemento.

O Evento onmousedown="" serve para executar alguma FUNÇÃO no momento em que o cliente PRESSIONAR O CLICK DENTRO do elemento.

O Evento onmouseup="" serve para executar alguma FUNÇÃO no momento em que o cliente SOLTAR O CLICK DENTRO do elemento.

O Evento onclick="" serve para executar alguma FUNÇÃO no momento em que o cliente CLICAR DENTRO do elemento.

O Evento onmouseout="" serve para executar alguma FUNÇÃO no momento em que o cliente SAIR COM O CURSOR DE DENTRO do elemento.

O Evento onmouseover="" serve para executar alguma FUNÇÃO enquanto o cliente MANTER O CURSOR SOBRE o elemento.
____________________________

    O que é uma FUNÇÃO?

Funções são subprogramas que podem RECEBER PARÂMETROS e RETORNAR um RESULTADO. São AÇÕES executadas assim que são CHAMADAS ou em decorrência de algum EVENTO. É um BLOCO de CÓDIGOS projetado para EXECUTAR uma TAREFA ou CALCULAR um VALOR. Syntax:
function nomeDaFunção (parâmetro1, parâmetro2, parâmetro3...) {bloco de códigos}
____________________________

O método  addEventListener()  serve para "PLANTAR" uma "ESCUTA" em um ELEMENTO. Esta "escuta" CHAMARÁ uma FUNÇÃO no momento em que o EVENTO, definido como PARÂMETRO, seja VERDADEIRO. Syntax:
element.addEventListener(event, function, useCapture)
atenção: no parâmetro EVENT não usa-se o prefixo "on". Use: "click" ao invés de: "onclick".

Como você pôde ver, a definição DESTE MÉTODO e a definição de EVENTO são a MESMA COISA. Da mesma forma que o Operador Ternário faz a MESMA COISA que a estrutura condicional IF/ELSE, só que de maneira mais simplificada, o método  addEventListener()  também faz a MESMA COISA que a primeira forma mostrada por Guanabara (onde os EVENTOS são inseridos na abertura da tag <div>), só que de maneira MENOS POLUÍDA VISUALMENTE, tornando o código mais LIMPO e ORGANIZADO. Desta forma os EVENTOS não ficam mais ESPALHADOS na parte estrutural da página (HTML5), reservando-se ORGANIZADAMENTE dentro da seção <script>
____________________________

A tag <input> serve para especificar uma ÁREA onde o usuário poderá SUBMETER DADOS. Assim como o método window.prompt(), a tag <input> também retorna um valor do tipo STRING. Então, para fazer a soma de 2 NUMBERS, é necessário converter o dado padrão de STRING para NUMBER.

A propriedade .value serve para DEFINIR ou RETORNAR o valor de um atributo.
____________________________

    Diferença entre PARÂMETRO e ARGUMENTO:

Parâmetros, ou PARÂMETROS FORMAIS, são VARIÁVEIS LOCAIS de uma FUNÇÃO. O VALOR DESTAS é definido na PASSAGEM dos ARGUMENTOS, na CHAMADA da FUNÇÃO.
*Você pode NOMEAR os PARÂMETROS por questões ORGANIZACIONAIS, caso queira.

Argumentos, ou PARÂMETROS REAIS, são os REAIS VALORES que serão PASSADOS como PARÂMETROS de uma FUNÇÃO.
  Ex:
function Boletim (nomeDoAluno, notaDoAluno) {bloco de códigos qualquer}

  CHAMADA da FUNÇÃO e PASSAGEM dos ARGUMENTOS:
Boletim("Rodolfo", 6.5)
Passou-se o ARGUMENTO "Rodolfo" para o PARÂMETRO nomeDoAluno.
Passou-se o ARGUMENTO  6.5  para o PARÂMETRO notaDoAluno.

Parâmetro é o NOME do LOCAL que RECEBE os ARGUMENTOS.
Argumentos são os REAIS VALORES que serão PASSADOS para este LOCAL.
____________________________

  O que é um MÉTODO?

Um MÉTODO é uma FUNÇÃO que é ARMAZENADA como PROPRIEDADE de um OBJETO. Ou seja, MÉTODOS são AÇÕES que podem ser EXECUTADAS em OBJETOS.

  O que é um OBJETO?

Um OBJETO é um CONTAINER de PROPRIEDADES e MÉTODOS.
*/

/* TRANSCRIÇÃO

0:00
Chegamos aqui a décima aula do seu Curso em Vídeo de JavaScript e antes de começar vamos para aquelas
0:05
perguntas que a gente sempre faz.
0:07
Antes de começar a sua aula você consegue responder: o que significa a sigla DOM?
0:11
Sabe pra que serve o DOM? Você consegue montar uma árvore DOM de um site simples, aquele site
0:17
que a gente viu uma aula anterior? Você sabe explicar o que são os elementos Parent e os elementos Child
0:23
dentro de uma árvore DOM? E por último você sabe quais são os cinco principais métodos de selecionar
0:28
os elementos DOM dentro do JavaScript?
0:30
São 4 perguntas bem técnicas mas que são muito importantes
0:34
para você dar prosseguimento aos seus estudos. Se por acaso você não conseguiu responder
0:37
ou não lembra bem dos conceitos que acabei de perguntar, clica aqui em cima na primeira playlist,
0:42
você vai ter acesso ao curso completo não pule nenhuma aula, faça todos os exercícios.
0:48
Agora se você conseguiu responder tudo direitinho. Seja bem vindo, seja bem vinda à sua décima aula.
0:54
Legendas: Tainá Bandeira
1:06
Olá pequeno Gafa nhoto! Seja bem vindo a décima aula do seu Curso em Vídeo de JavaScript
1:12
totalmente patrocinado pelo Google. O meu nome é Gustavo Guanabara, eu sou professor
1:16
e na aula passada a gente teve uma introdução ao DOM e agora nós vamos falar sobre eventos DOM.
1:22
E é nessa aula onde a gente vai botar em prática e vai fazer uns exercícios bem legais
1:26
e que a verdade seja dita, os conhecimentos que você teve até aqui te trouxeram até esse momento,
1:32
se você estava achando que: ''Ah não mais eu quero criar sites, eu quero criar JavaScript interativo''.
1:36
Tudo aquilo que a gente viu até o momento vai te ajudar pra caramba pra fazer isso, mas essa aula vai te mostrar
1:42
muita coisa legal, pode confiar em mim. Assiste até o final com toda a atenção possível
1:46
e com seu computador ligado, com o editor, com navegador aberto para você colocar em prática.
1:51
E vamos dar uma recordando a rápida naqueles conceitos que eu acabei de perguntar ali
1:54
nas 4 perguntas no início do vídeo, porque esses conceitos são muito importantes.
1:58
Em primeiro lugar DOM é o Document Object Model, ele é um facilitador que existe dentro do seu navegador,
2:05
dentro do HTML5 para dar acesso aos elementos diretamente para o JavaScript,
2:09
sem o DOM a gente teria muita dificuldade para poder acessar os elementos na nossa página
2:13
e o primeiro passo prático que a gente viu na anterior, foi a montagem da árvore DOM.
2:18
Desse gráfico que está aparecendo aqui, a gente fez um site, montamos um HTML bem simples
2:23
e então eu te mostrei como montar essa árvore DOM e não adianta tentar decorar esse gráfico não,
2:28
cada página tem sua própria árvore DOM, se ficou alguma dúvida dá uma assistida na aula 9
2:33
porque ela é muito importante e se eu puder tirar o concelho e eu acho que posso,
2:37
eu vou deixar ele aqui: não assista essa aula 10 sem entender 100% da aula 9, porque senão você vai
2:44
acabar se dificultando, vai acabar achando JavaScript complicado e não, não é complicado é bem simples.
2:50
Talvez você tenha assistido a aula 9 um pouco mais cansado(a), então vai por mim assiste a aula 9
2:56
e depois que você entendeu tudo volta aqui pra aula 10.
2:59
E além de montar essa árvore, a gente viu cinco técnicas para acessar elementos dentro JavaScript
3:06
usando DOM. A gente usou o TagName por nome, por ID,
3:09
pelo nome do componente (nome do elemento), também tem pela classe desse elemento
3:13
e tem o querySelector que é novidade no JavaScript e que faz a seleção através de elementos CSS.
3:19
Então isso tudo a gente viu na aula anterior, nessa aula a gente vai focar em eventos
3:25
e agora eu vou colocar um exemplo: imagina o que pareceu aqui em cima uma , uma qualquer
3:30
a gente já vai fazer ela na prática. Abre o seu editor e segue os meus passos
3:34
para você conseguir entender esse exercício completinho.
3:37
♫
3:39
Então estou aqui com o meu editor e o browser aberto, o Google Chrome.
3:45
Vamos clicar aqui no papelzinho pra gente criar a pasta da aula 10, botão direito em uma área livre, ''New Folder'',
3:52
aula 10 e aqui dentro nós vamos criar um exercício, a gente parou no exercício 5.
3:57
Dentro da aula 10 vou criar um firewall ex006.html, organize seus arquivos que vai ficar muito
4:04
mais fácil para você. Vou fechar aqui, vou fechar o welcome e vamos criar
4:09
um arquivo, um documento HTML5.
4:11
HTML5, já criei a base, vou mudar para PT-BR e vou colocar aqui ''Eventos DOM'',
4:18
beleza, aqui no ''body'' e eu vou criar uma , vou colocar aqui uma , ele já criou aqui
4:23
e eu vou fazer o seguinte: essa e eu vou dar um ID pra ela, esse ID vai ser ''area'' sem acento,
4:30
dentro dessa eu vou colocar ''interaja'' pra gente poder interagir com essa ,
4:35
vou salvar, vou apertar: CTRL+Shift+P e vou dar "Whatch in Chrome" que a gente já fez a instalação
4:41
(se eu não me engano) na aula 9 e ele já está "interaja".
4:45
O legal do "Whatch in Chrome" é que qualquer mudança que eu faço aqui,
4:48
vou colocar vários "as" automaticamente ele está fazendo ali do lado.
4:52
Primeira coisa que vou fazer é criar um formato para essa , então vou criar um estilo
4:58
e nesse estilo nós vamos fazer a de ID "area", aqui nessa eu vou colocar primeiro um background
5:05
verde, coloquei um background verde. Vamos fazer esse verde ficar um pouquinho mais claro,
5:10
está bom esse verde aqui, vou colocar também a cor da letra branca e se você está meio
5:14
enrolado com isso, é porque você não fez o curso de CSS ainda, se você clicar em cima da minha cabeça,
5:20
você tem acesso a 2º playlist, o curso de HTML e CSS também vai te ajudar pra caramba dar uma estudada,
5:26
mas vai seguindo os meus passos, depois você vai entender melhor quando fizer o curso de HTML,
5:31
outra coisa que vou fazer aqui: manter a largura, 200 pixels e a altura de 200 pixels também.
5:40
Vou colocar esse "interaja" bem aqui no meio da tela, para ele ficar no meio da tela vou colocar
5:46
o "line right" que é a mesma altura, 200 pixels, que ele fica no meio aqui e o "text align" vai ficar "center"
5:52
está lá a "interaja" eu vou mudar aqui em cima, antes do background, vou colocar a fonte como: normal de 15pt
6:01
arial, vou colocar 20pt, certo. Então criamos passo a passo no meu HTML
6:06
uma escrita "interaja" e no CSS (no estilo CSS), nós montamos uma configuração básica
6:14
para chegar a esse resultado. Beleza? então acabamos de criar essa com "interaja" no meio.
6:20
E agora voltamos ao assunto "Eventos DOM", essa é minha que a gente acabou de criar,
6:26
te explicando agora o que são os eventos lá de cima: evento é tudo aquilo que possa acontecer
6:31
com essa , com qualquer elemento, mas no nosso exemplo essa e se você começar a analisar,
6:37
o que pode acontecer com essa ? Um monte de coisa, o mais comum: eventos de mouse,
6:42
então eu posso por exemplo chegar com o cursor do mouse e mover o mouse até encostar,
6:47
até chegar dentro da , quando chega o mouse dentro da vai disparar um evento
6:52
que está aqui em baixo, o mouseenter que o mouse entrou na , outra coisa que eu posso fazer é
6:57
continuar movendo o mouse por dentro da . Nesse momento ver ser disparado várias vezes
7:03
o método mousemove, que enquanto tiver movendo dentro da , ele vai disparar o evento mousemove.
7:08
Se eu pegar o mouse e clicar segurar, eu tenho o disparo do mousedown, no momento em que eu soltar
7:18
o botão do mouse eu disparo outro evento o mouseup ou mouse up,
7:23
eu também tem o movimento do clipe inteiro, apertar e soltar rapidamente eu tenho o evento click
7:29
e da mesma maneira que com o mouseenter, quando eu mover o mouse para fora dessa ele vai disparar
7:34
um evento mouseout ou mouse out. Então olha só a gente viu seis métodos,
7:39
seis eventos que podem ser disparadas só com o movimento do mouse, existem outros esses não são
7:45
os únicos e se por acaso você dar uma pesquisada nos eventos que podem acontecer dentro de elementos
7:50
em JavaScript, você vai ficar muito surpreso, quer ver? Dá uma olhadinha aqui:
7:55
vou vir aqui no Google e digitar: "JavaScript DOM events list", procura aqui o site "Events Reference"
8:05
da MDN (da Mozilla), dá uma olhadinha nessa página, procura essa página aqui "Events reference"
8:10
ele está em um processo de tradução, por isso que não tem tudo aqui, dá uma olhada,
8:15
cada um desses é um evento que é possível está vendo?
8:22
Olha isso, é muito evento, não tem como fazer uma aula de falando todos os eventos, até porque nem todos
8:29
os elementos são compatíveis com todos os eventos, têm eventos específicos para cada situação.
8:34
Você viu aqui? Está cheio! Só como curiosidade, agora com o advento
8:38
dos celulares, você tem os "Touch events" que são diferentes dos Mouse events,
8:42
então você tem uma série de funcionalidades, que se você quiser se especializar é só buscar essa página aqui
8:50
com muita informação. Essa página do MDN, ela faz parte da nossa
8:54
bibliografia recomendada. Então é o seguinte, você agora entendeu o que são
9:00
os eventos, são coisas que eu posso fazer como esse elemento que no caso é a minha
9:04
e eu exemplifiquei somente com os de mouse, você acabou de ver que existem muitos outros,
9:09
mas para disparar um evento, para tratar um evento, eu preciso te explicar antes
9:14
o que é uma função ou uma funcionalidade.
9:17
Uma função e JavaScript é o seguinte: é um conjunto de códigos, é um conjunto de linhas que a gente já fez
9:22
várias vezes durante todas essas primeiras aulas do curso, que vão ser executadas só quando
9:27
o evento ocorrer. Então por exemplo: eu vou programar dez linhas, essas dez linhas a gente chama de bloco,
9:33
então imagina que esse bloco tivesse 10 linhas, essas 10 linhas não vão ser executados automaticamente,
9:39
todos os nossos códigos até o momento foram executados automaticamente.
9:42
Carregava a página e ele executava o código, agora essas 10 linhas (esse bloco), ele só vai ocorrer
9:48
por exemplo: quando eu clicar dentro da , então essas 10 linhas vão ser disparadas somente quando
9:55
o evento ocorrer. Para eu executar essas 10 linhas somente quando
9:58
o evento ocorrer, primeiro passo é colocar lá dentro de um bloco, um bloco em JavaScript
10:03
ele é delimitado entre os sinais de chaves, então você abre chaves, coloca o seu código e fecha chaves.
10:10
Isso aqui a gente chama de bloco, esse bloco você tem que nomear ele como uma "function",
10:14
então você coloca a palavra "function" que quer dizer função antes do bloco, no JavaScript existe isso aqui:
10:21
função anônima, é uma função que simplesmente não tem nome, só que para que o método possa funcionar,
10:27
eu tenho que dar um nome para essa função e geralmente os nomes das funções são ações
10:32
que nós podemos fazer, geralmente funções de evento, eles são nomes de ação, você vai colocar
10:37
o nome da ação que vai acontecer e abre e fecha parênteses.
10:40
Exatamente como está aparecendo aqui e opcionalmente você pode também colocar dentro
10:45
desses parênteses alguns parâmetros, pode ser um, pode ser vários parâmetros.
10:49
Parâmetro a gente vai ver um pouco mais pra frente, vamos então agora abrir o nosso código de novo,
10:54
código que a gente criou até o momento e vamos disparar um código simples que é um código de click,
10:59
eu vou te mostrar como faz isso a parte HTML e também a parte JavaScript.
11:04
Então vamos lá, essa parte de cima não me importa tanto no momento eu posso até encolher o head,
11:10
eu encolhi o head para ficar mais fácil a sua visualização, eu não apaguei
11:14
eu só cliquei nesse sinal de menos aqui, aqui embaixo, eu vou criar um script.
11:18
Aqui em cima eu vou colocar um evento, os eventos podem ser configurados na parte HTML
11:24
ou diretamente do JavaScript, você vai escolher, eu vou te mostrar as duas técnicas
11:28
e você vai escolher qual você prefere.
11:29
Eu vou fazer o seguinte: meu método que que eu vou disparar é o evento de click, para disparar o click
11:35
dentro do HTML, eu vou colocar aqui dentro da do lado do ID e eu vou colocar "on" e o nome do método
11:41
que eu quero disparar, o nome do evento "onclick", então "onclick" ele vai chamar o nome da ação
11:48
que eu quero colocar, então eu vou colocar "clicar", então quando eu clicar em cima da ,
11:53
ele vai disparar o clicar, venho aqui no meu JavaScript, crio um bloco e coloco um function aqui na frente,
11:59
isso é uma função anônima e funciona sem problema no JavaScript, só tem que colocar um nome para poder
12:04
encontrar essa função. Tudo que estiver aqui dentro, ele só vai ser executado
12:13
quando eu chamar o clicar, então quando eu chamar ao clicar ele vai executar tudo que está aqui dentro.
12:18
Essa é a configuração básica, eu tenho que disparar, configurar o método e esse método só vai ser disparado
12:25
quando eu clicar com o mouse, então chamar o método "clicar", vou chamar essa função de clicar
12:30
e aqui dentro vai configurar o que vai acontecer quando eu clicar.
12:34
Quando eu clicar, eu quero fazer o seguinte: e se interaja vai mudar o conteúdo dele, para eu mudar
12:41
o conteúdo dele, eu tenho que ver dentro da minha árvore DOM, isso aqui é uma de ID "area".
12:47
Então eu posso fazer: var a (pode chamar de "a" ou de "área" sem problemas),
12:54
var a recebe window.documents (pode ser só documents), eu estou sempre fazendo a forma completa
13:02
quando você olhar e pensar: "window mais que esquisito". Não, não é esquisito.
13:05
Window.document.get elements, eu tenho ID, eu posso selecionar por ID ou eu posso usar um querySelector,
13:12
vou selecionar "by ID", não está no plural então não tem que usar colchetes, vou colocar entre aspas simples,
13:18
esse nome. Esse nome é igual a esse ID, então esse daqui é o meu objeto a, meu objeto a está ligado
13:26
diretamente com essa , o que eu vou fazer aqui é colocar o a.inner.Text (pode ser innerText
13:32
ou innerHTML), com o innerText só muda o texto, com o innerHTML você consegue colocar tags HTML também,
13:39
no innerText eu só vou colocar 'clicou!' só isso.
13:41
Então dá uma analisada antes de colocar para funcionar, quando eu clicar na minha
13:47
eu vou criar um objeto chamado "a" e ele vai ser uma ligação, isso faz a ligação do objeto a
13:54
dentro do JavaScript com o elemento de ID area que está dentro do HTML
14:03
e esse objeto vai mudar o conteúdo dele pra "clicou!" vamos salvar, vamos rodar e se eu mexer o mouse,
14:10
nada acontece, se eu clicar ele mostra "clicou!", viu então eu consegui.
14:14
Esse "clicou!", ele só vai acontecer quando eu efetivamente clicar em cima do elemento, porque eu
14:21
disparei o evento "on click", vamos parar outro elemento aqui que é o "onmouseenter" (isso é, quando
14:28
o mouse entrar), vou chamar o 'entrar', coloquei a ação e vou ter que criar outra function, sem parâmetro nenhum.
14:37
Eu também teria que fazer esse "var a = window" igualzinho se daqui, porque eu não consigo aqui
14:45
de dentro acessar esse a daqui, o que eu vou fazer não é a melhor coisa a se fazer, depois quando você for
14:52
estudar um pouquinho mais sobre o escopo você vai ver que não é a melhor coisa a se fazer
14:55
porque tem um problema de uso de memória mas nós vamos fazer o seguinte:
14:59
vamos colocar esse"var a" pra fora, colocando pra fora e se "a" vai funcionar dentro de qualquer coisa.
15:09
Então eu posso colocar: a.innerText= 'Entrou' e eu vou aproveitar "onmouseout= "sair".
15:16
Disparei três eventos e no function sair "a.innerText='Saiu",
15:23
então fiz 3 métodos criei um objeto aqui do lado de fora pra ficar com o escopo global,
15:28
de forma resumida quando crio isso do lado de fora ele serve para todas as três functions,
15:33
se eu pego isso daqui coloco aqui dentro ele só serve pra function clicar, não serviria para as outras
15:40
então tem que colocar do lado de fora isso, gera uma pequena dor de cabeça só que mais pra frente
15:45
no aprofundamento de JavaScript você vai entender isso.
15:47
Salvei e vou atualizar, entrou e saiu, não estou clicando, cliquei, clicou.
15:58
Outra coisa que vou fazer é: quando eu clicar, eu também vou mudar o style dele,
16:04
vou mudar o background para 'red', quando eu clicar ele vai ficar vermelho e quando ele sair ele vai voltar
16:09
a ficar verde. Quando eu clicar o fundo vai ficar vermelho
16:13
e quando eu sair da o fundo vai voltar a ser verde.
16:17
Entrou e saiu, várias vezes. Quando eu clicar, ele fica vermelho, quando sair, volta a ficar verde.
16:24
A interatividade que eu tenho com a , eu posso fazer com qualquer um é muito interessante.
16:32
E agora vem uma outra: dica além de disparar diretamente pelo HTML, eu posso disparar
16:39
os eventos utilizando listeners que são ouvidores, eles ficam prestando atenção dentro do próprio JavaScript,
16:45
vamos ver como isso é feito.
16:46
Então, no lugar de fazer isso daqui e deixar o seu HTML muito poluído,
16:51
eu posso fazer o seguinte: posso criar o a.addEventListener isso é, ele vai ficar
17:00
prestando atenção em um determinado evento e eu vou criar 3 listeners.
17:04
1 listener para click que vai ser a execução do clicar, vai fazer assim: a.addEventListener('mouseenter, entrar).
17:16
E por último nós vamos fazer a.addEventListener e vou criar um outro listener para mouseout,
17:26
eu criei um listener pro clicar, outro para entrar e outro sair, são os meus 3 métodos e eu posso tirar isso daqui,
17:32
meu HTML fica menos poluído a ligação do HTML e do JavaScript vai ser feito por essas 3 linhas
17:43
que é o Event Listner.
17:45
Vamos salvar, atualizar e vamos ver se vai, entrou e saiu, várias vezes e clicou,
17:52
funcionou sem problema nenhum e uma coisa que é importante, a gente não falou antes mas pode começar
17:57
a ocorrer bastante agora, principalmente que a gente vai começar a fazer exemplos que bem práticos,
18:02
a detecção de erros por exemplo: se você errar algum pedaço de código vou te mostra aqui, vou tirar o "w",
18:11
você digitou o código inteiro e esqueceu de algo ou por exemplo você botou "window" com letra maiúscula,
18:17
colocou o "W" em letra maiúscula porque você simplesmente quis e achou que iria funcionar,
18:20
na hora que você colocar pra rodar, você vai ver que nada vai funcionar, isso é um erro do JavaScript,
18:26
houve um erro, só que ele não dá o erro e como você descobre que tá dando erro,
18:34
com é que você vai descobrir qual problema aconteceu?
18:38
Na maioria dos casos é só você clicar com o botão direito, vir em "Inspact" e ele vai abrir um inspetor,
18:44
vai abrir o DevTools, geralmente a DevTools vai aparecer dentro do código, em cima, do lado ou embaixo.
18:55
Eu gosto de deixar assim, clica na reticência e clica em "Undock" e ele vai ficar aqui.
19:01
Basicamente você vai olhar aqui em cima e vai perceber que tem um erro, aqui embaixo no console você vai ver
19:07
"não consegui ler a propriedade getElementById na linha 26", geralmente o erro está na linha 26 pra cima,
19:14
é só eu corrigir o "w" e a partir daqui já voltou a funcionar, por exemplo: vou esquecer o "w", ele não está
19:22
funcionando o "interaja", aqui ele me deu três erros porque executei três vezes e ele me deu o erro
19:27
"windo is not defined", ele não reconheceu a palavra "windo" que está exatamente aqui,
19:33
então eu dou uma olhada falo: "ah não e windo, é window".
19:36
Certo? Então você consegue detectar erros diretamente a usando o DevTools do próprio Google Chrome,
19:43
então vou corrigir "window.documents", salvei e agora já voltou a funcionar,
19:49
entrou saiu e clicou, pequenos erros quando você está começando é comum,
19:54
é normal você ter pequenos erros, não tem problema nenhum com isso então você consegue resolver
19:59
dessa maneira. E pra essa aula ficar completa, vamos criar outro
20:02
exemplo utilizando eventos DOM, só que dessa vez a gente a começar a interagir mais com o usuário,
20:08
vamos começar a buscar valores do usuário, começar a deixar ele digitar coisas
20:12
então volta no seu Visual Studio Code e vamos criar mais um arquivo.
20:16
Vou fechar aqui e vou criar mais um arquivo dentro da aula 10, vou criar o arquivo "ex007.HTML",
20:22
vamos criar um HTML básico isso a gente já fez várias vezes, PT-BR, vou colocar "Somando Números"
20:30
no title, aqui no body vamos fazer o seguinte, vou primeiro dar um CTRL+Shift+P,
20:35
"watch in chrome" ele já está visualizando o somador, ele já está com esse documento,
20:40
vamos criar um "h1" e esse "h1" vai ser "somando valores" (h1 é título e ele escreveu lá
20:46
"somando valores"), o que eu vou fazer aqui é criar um input para number, vou criar duas vezes: input: number,
20:55
está lá, ele já criou tudo pra mim, o name e o ID e eu vou dar um name e um ID igualzinho: txtn1,
21:01
tem o name e tem ID, o name é importante para uma coisa e o ID é importante para a outra,
21:05
se você programar em PHP o name é muito importante, a gente vai pegar pelo ID mas não apaga o name não,
21:10
vou criar outro input, você tem input pra tudo, pra data, pra cor, pra tudo.
21:16
Eu vou criar um pra number de novo, já criei 2 para number, vou dar o name "txtn2" e o ID "txtn2"
21:25
e vou colocar um botão para ele criar o somar e nesse botão de somar eu vou colocar o "onclick",
21:32
e vou colocar somar que vai ser o método que eu vou usar, então basicamente eu vou colocar um número aqui
21:38
e aqui, vou colocar um sinal de adição pra ele ficar mais bonito.
21:43
Está montado a minha interface básica, vamos ao script e no meu script eu vou ter que criar uma função somar,
21:49
na minha função somar eu vou ter que saber quem é n1 e quem é n2, só que eu vou criar dois objetos:
21:56
tn1 que é a caixa de texto n1 e vou ter o tn2 que é a caixa de texto n2, não o valor, sem a caixa.
22:03
Vou fazer a ligação com a caixa: window.documents.getElementsById('txt n1').
22:12
exatamente como está aqui, se está tudo minúsculo, tudo minúsculo aqui também, o tn2
22:17
vou fazer a mesma coisa: window.documentsgetElementsById('txtn2'),
22:24
eu posso também invés do getElementsById fazer por exemplo um querySelector e eu vou selecionar
22:31
o meu input que tenha ID txtn2, vou até deixar um de cada jeito pra você poder ver que os dois funcionam,
22:39
então você pode usar getElementsById ou o querySelector, qualquer dúvida no uso desses métodos
22:45
que estão sendo descritos aqui, você assista a aula 9 porque lá eu expliquei detalhadamente cada um
22:53
como é que funciona o ID, a hashtag, se for class é o pontinho enfim,
22:58
tem muita coisa pra você aprender na aula 9.
23:01
Agora eu vou ter que ter uma variável para o valor do n1 e uma variável pro valor do n2,
23:06
isso porque quando ele vem de uma caixa de texto, ele é texto, nós vimos isso na aula de manipulação de dados
23:13
que também está na playlist do curso de JavaScript,
23:16
para isso vou ter que fazer o seguinte: vou ter que usar um Number (posso usar um parseInt
23:21
ou simplesmente Number), vou pegar o tn1.value que é o valor que está dentro desta caixa de texto n1,
23:31
mesma coisa aqui pro outro, esse Number é com letra maiúscula, tn2.value também.
23:37
Agora eu tenho o valor de n1 e o valor de n2 como forma de número, porque se eu somar sem essa
23:43
conversão de número ele ia concatenar já o mostro pra você, vou ter uma variável "s" que vai ser n1+n2,
23:50
outra coisa que eu esqueci de fazer aqui é criar o resultado, então vou criar esse resultado dentro
23:54
da , resultado, deu problema na visualização salva e atualiza que ele volta a funcionar, o resultado está aqui
24:01
embaixo numa vou colocar e um ID que é "res", também vou criar:
24:06
var res= window.documents.getElementsById('res' ), quando ID eu gosto de usar o getElementsById,
24:16
mas tem o querySelector que é até mais moderno, agora eu vou fazer com que o res.innerHTML,
24:25
vou fazer um teste simples, vou colocar o valor de "s", vamos salvar e ver se funciona.
24:31
Vou colocar aqui: 3 e 2, somar e deu 5 funcionou, só que aqui eu vou colocar bonitinho
24:37
vou colocar uma string interpolada, vou colocar:
24:40
"a soma entre" vou colocar um bloco (um placeholder) "n1 e n2 é igual a" outro placerholder, "s".
24:50
Vou colocar aqui 4 e 2 , somar, a soma entre 4 e 2 é igual a 6, funcionou, bonitinho
24:57
o que eu vou fazer aqui só para ficar mais bonito ainda, vou criar um style e esse style eu vou colocar
25:02
o meu body e o meu font vai ficar "normal18pt, arial" só pra ficar maior, se você quiser dá pra aumentar também
25:11
a fonte do input, é só fazer assim: input, font: normal18pt também, arial.
25:22
Vou colocar a largura dele que ficou muito grande: width: 100 px;
25:29
É meio chatinho esse negócio de CSS quando você está desacostumado, faltou ponto e vírgula
25:33
aqui em cima também, no CSS é obrigatório, então está aqui o input normal e a minha está aqui
25:40
com o resultado. Então vamos lá, vamos rodar, pode clicar aqui,
25:43
4 e 5 , somar, a soma entre 4 e 5 é igual a 9.
25:48
Sem problema nenhum, inclusive quando eu usei o innerHTML aqui, eu posso por exemplo colocar 9
25:53
em negrito, na hora que eu mandar somar "23 e 455, a soma é 478" ficou em negrito.
26:02
Se você quiser dar um espacinho nessa , é só você vir aqui e colocar a minha de resultado,
26:08
vou só configurar a de resultado vou colocar meu margin só em cima, margin top de 20 pixels por exemplo
26:17
deu uma espaçadinha, se você colocar 200 pixels, ele vai lá pra baixo mas 20 já está bom.
26:22
É só pra organizar bonitinho, deixar a coisa bonitinha, é pra isso que serve o estilo,
26:26
e se você no momento pensou: "ah não é só colocar br várias vezes", está pensando um pouco errado
26:31
meu querido, é sempre com margem, padding. Vamos rodar aqui pela última vez,
26:35
vou colocar 4 e 7, somar, "a soma entre 4 e 7 é igual a 11" beleza?
26:42
Então estamos com o código funcionando, dá uma olhada nisso aqui que bonito, olha que beleza,
26:47
eu tenho a parte HTML que é a parte do meu conteúdo, eu tenho a parte CSS que é a minha parte de estilo
26:56
e eu tenho a minha parte de interatividade que é a parte de JavaScript, as três partes sendo criadas
27:03
no mesmo exercício, dentro do seu curso de JavaScript aqui do Curso em Vídeo.
27:07
♫
27:09
É ou não um curso bem maneiro? E se você concorda que o curso é bem legal,
27:14
o que eu te peço é sempre a mesma coisa, se inscreve aqui no canal,
27:18
habilita o sininho para você receber notificações, aqui em cima playlist importantes,
27:23
link para vídeos importante que a gente julgar necessários, já que dentro do Curso em Vídeo a gente
27:27
tem anos e anos de produção de conteúdo, é só você entrar no nosso canal Curso em Vídeo do Youtube
27:32
e acessar as nossas playlist você vai ver a quantidade de curso que a gente já tem disponíveis
27:37
gratuitamente para você.
27:38
E também dar aquela forcinha com os amigos, recomendar pras pessoas nas redes sociais,
27:43
marcar a gente, aquele grupo de programadores que você participa do Facebook, aquele grupo de WhatsApp
27:48
da faculdade que você faz parte, tem aquele grupo do Discord que vocês batem papo sobre programação.
27:53
Indica o curso de JavaScript para todo mundo, com isso você vai ajudar pra caramba a gente
27:59
a conseguir patrocinadores maravilhosos, como por exemplo o Google que está patrocinando
28:03
esse curso pra você. Todas as aulas foram disponibilizadas no mesmo dia,
28:07
você não vai precisar ficar esperando nada, você vai conseguir fazer o curso inteiro de uma tacada só.
28:11
Só não se esquece de dar uma descansada entre as aulas, fazer os exercícios, não adianta ficar maratonando
28:17
tipo Netflix, você não vai assistir o curso inteiro de uma vez só e achar que sabe JavaScript,
28:22
a gente já conversou bastante sobre isso.
28:24
Eu me despeço por aqui já deixando encontro marcado para a próxima aula,
28:27
que já está disponível aqui na playlist.
28:30
Um grande abraço, boas práticas e até a próxima!
28:36
Legendas: Tainá Bandeira

*/
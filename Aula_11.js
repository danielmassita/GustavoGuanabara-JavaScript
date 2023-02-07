// Aula 11 - Condições (Parte 1) - Curso JavaScript #11
// https://youtu.be/cOdG4eACN2A

/* Você sabe usar o comando if no JavaScript? Sabe diferenciar condições simples e condições compostas? Sabe como criar uma condição usando JavaScript? Sabe como instalar e configurar a extensão Node Exec no Visual Studio Code?

Pois, para responder a essas e muitas outras perguntas, assista essa aula do Curso de JavaScript para Iniciantes até o final. E não se esqueça sempre de praticar todas as atividades que fizermos durante o vídeo no seu próprio computador.

Aula do Curso de JavaScript e ECMAScript para Iniciantes, criado pelo professor Gustavo Guanabara para o canal CursoemVideo. */





/* PERGUNTAS DA AULA ANTERIOR
- Consegue citar três EVENTOS DOM que podem acontecer com elementos DOM de um site?
    
    <div id="area" onclick="clicar()" onmouseenter="entrar()" onmouseout="sair()">
        Interaja...
    </div> // Assim no HTML, quando o mouse ativa o evento da 'div#area'. 

    ou então...
    
    <script>
        var a = window.document.getElementById('area')
        a.addEventListener('click', clicar)
        a.addEventListener('mouseenter', entrar)
        a.addEventListener('mouseout', sair)
    </script> // No corpo do HTML no final do <body>, mas dentro do  <script>, sendo esse código na linguagem do JavaScript, adicionando um "listener" no elemento da variável "a", que quando gatilha o evento, ativa a função. O EVENTO é uma CONDIÇÃO que quando TRUE, chamará à ação uma FUNÇÃO.  

- O que é uma função? Como criar funções no JS?

    Função é um "roteiro" de ação a ser adotada pelo código, conforme comandos desenhados pelo programador. Funções são subprogramas que podem RECEBER PARÂMETROS e RETORNAR um RESULTADO. São AÇÕES executadas assim que são CHAMADAS ou em decorrência de algum EVENTO. É um BLOCO de CÓDIGOS projetado para EXECUTAR uma TAREFA ou CALCULAR um VALOR. Syntax:

    function nomeDaFunção (parâmetros...) {
        bloco de códigos
        bloco de códigos
        bloco de códigos
    }

- Sabe como pegar os valores de caixas de texto (input) e fazer cálculos com elas?

    Basicamente, vamos usar um código para, no exemplo, pegar dois valores numéricos do usuário,  e retornar a soma deles... 

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
*/





/* `${Condições em JS}` - CONDIÇÕES Parte 1

- MÓDULO D (Condições + Exercícios)
        - Condições Simples (if)
        - Condições Compostas (if, else)
        - Condições Aninhadas (elseif, encadeando múltiplas condições)
        - Condições Múltiplas (estrutura switchcase)
        - Exercícios Propostas

- SEQÜÊNCIAS NO JAVASCRIPT (até agora, só usamos códigos seqüênciais...)

var n = 3
n += 2
window.alert(n)

Não podemos mudar a ordem, executando um, ou outro, sem seguir o fluxo... É obrigatório seguir a ordem... Às vezes, o comando vai ter um fluxo com uma bifurcação, e não será mais uma linha vertical. Esse "desvio" se chama um DESVIO CONDICIONAL (fundamentos da programação). 

"Losango" = IF
"esquerda" = cria um bloco { } com IF e depois...
"direita" = cria um bloco { } com ELSE e depois vai...

    if (condição) {
        true
    } else {
        false
    }

Aqui nessa aula veremos 2 tipos de condições (simples e composta)...

CONDIÇÃO SIMPLES - Se a condição for falsa, nada em especial vai acontecer, o fluxo do programa continua rodando normalmente...

if (condição) {
    true
}

CONDIÇÂO COMPOSTA - se a condição for verdadeira, algo A acontece. Se a condição for falsa, algo B acontece... 

if (condição) {
    true
} else {
    false
}

*/






/* ANOTAÇÕES LUCAS LEAL

NOVIDADES:

  Estrutura Condicional Simples: IF (se)

Se (if) condição1 for VERDADEIRA, execute o Bloco A.

  Ilustração:
if (condição1) {
Bloco A
}

Se condição1 for TRUE, execute o bloco TRUE (Bloco A).
____________________________

  Estrutura Condicional Composta: IF/ELSE (se/senão)

Se (if) condição1 for VERDADEIRA, execute o Bloco A.
Senão (else), execute o Bloco B.

  Ilustração:
if (condição1) {
Bloco A
} else {
Bloco B
}

Se condição1 for TRUE, execute o bloco TRUE (Bloco A).
Senão for TRUE, execute o bloco FALSE (Bloco B).
____________________________

O método  console.log()  serve para ESCREVER (log) uma MENSAGEM no console.

*/






/* 
TRANSCRIÇÃO

0:00
Chegamos à aula 11 do seu Curso de JavaScript. E como sempre, eu tenho aquelas perguntinhas
0:05
que a gente faz antes de começar cada vídeo
0:08
Em primeiro lugar, você consegue citar para mim três eventos que podem acontecer com elementos DOM
0:13
dentro de um site? Pode ser com mouse, pode ser com um teclado. Eu mostrei no vídeo anterior uma lista com
0:18
mais de cem eventos. Você consegue citar três para mim? A segunda pergunta é muito importante
0:23
O que é uma função? Você sabe criar uma função no JavaScript?
0:27
E por último, você sabe como pegar os valores de uma caixa de texto de um formulário em HTML?
0:33
Você consegue pegar eles com JavaScript, fazer cálculos e mostrar na tela?
0:37
Se, por acaso, para algumas dessas perguntas você disse que não sabe, é só você assistir à aula anterior.
0:42
Na verdade, todas as aulas anteriores. Elas ficam aqui em cima no "i" de interatividade
0:46
e é muito importante que você veja todos os vídeos até o fim, na sequência
0:51
E se você soube responder as três perguntas, seja bem-vindo, seja bem-vinda à mais uma aula
0:57
Legendas: Samara Affonso
1:09
Olá, pequeno gafanhoto! Seja bem-vindo à mais uma aula do seu Curso em Vídeo de JavaScript totalmente
1:15
patrocinado pelo Google. O meu nome é Gustavo Guanabara, eu sou professor. E agora,
1:20
na 11º aula do seu curso de JavaScript, a gente vai falar sobre condições. E essa, é a parte 1 dos conceitos
1:26
porque condição tem muita coisa pra falar. E é claro que se você já é um programador ou
1:32
uma programadora mais experiente, vc disse: " Ele vai falar só de if ".
1:35
Eu vou tentar ilustrar com outras coisas também, para que a aula não fique tão monótona para quem já sabe.
1:41
Agora, você sabe, a gente já tinha combinado no início que esse curso é para iniciantes.
1:46
Então, nada mais justo do que eu falar sobre tudo isso. E se você acha desnecessário,
1:50
lembre-se: quando você começou a prender programar, você não sabia condições. Alguém precisa te ensinar,
1:57
Então, pode ser que eu seja a pessoa que vai ensinar os primeiros passos para alguém.
2:02
E na verdade, a intenção é que ele ensine os primeiros passos para muita gente.
2:06
Então, vamos colaborar. Antes de mais nada, antes de falar das nossas condições, eu preciso falar de
2:12
sequências, porque todos os códigos que a gente fez até hoje, até o momento nesse Curso de JavaScript
2:18
foram códigos sequenciais. Então, veja o exemplo, o meu primeiro comando que aparece aqui,
2:23
var n = 3
2:24
com esse comando, acabei de declarar uma variável e colocar um valor dentro dela
2:28
No próximo comando, eu faço, por exemplo, n += 2
2:31
Na aula de operadores a gente falou sobre isso, essa segunda linha vai pegar o valor de n, que é 3,
2:37
somar 2 e jogar o resultado, que é 5, dentro do próprio n. E por fim, o último comando
2:43
window.alert(n)
2:45
Esse último comando vai mostrar na tela em forma de uma janela, na forma do navegador, uma janela
2:49
de alerta. Sendo assim, eu te pergunto: o primeiro comando, o segundo comando e o terceiro comando,
2:55
nesse caso, nessa disposição, tem como executar o primeiro, depois o terceiro e depois de segundo? Não.
3:01
Eu tenho que executar o primeiro, o segundo e o terceiro não posso mudar a ordem. Outra coisa, eu posso,
3:06
por exemplo, executar o primeiro, executar o terceiro e não executar do meio em alguma situação?
3:12
Também não, porque é só você olhar o fluxo. O fluxo que está representado aqui ao lado têm que ser,
3:17
já que é uma sequência, têm que se executar primeiro o comando um, em segundo o comando dois,
3:24
em terceiro o comando três. Porém, existem situações. Se você fala assim:
3:27
" Tem horas que eu vou querer executar o comando dois, e tem horas que eu não vou querer
3:32
executar o comando dois". Então, chegou a hora da gente aprender um pouco mais sobre as condições
3:37
Imagine a seguinte situação, para a gente não ficar botando comando e ficar enchendo muito a tela
3:42
Veja, começa na primeira bolinha e termina que na última bolinha.
3:46
Então, basicamente, eu tenho dois comandos e eu tenho um comando aqui embaixo. No meio está vazio porque,
3:51
dependendo de alguma coisa, eu quero executar um determinado comando. E se não der certo,
3:57
eu executo outro comando. Por exemplo, como eu represento isso aqui do lado?
4:01
Seria, por exemplo, um losango. Vou com representar como losango. Ele vai fazer um filtro,
4:06
tipo uma placa de trânsito. Sabe aquela placa que você está andando de carro, mas chega uma hora que
4:11
você só pode virar à esquerda ou virar à direita, exatamente. Imagina essa placa.
4:15
O meu programa está sendo executado de cima para baixo, de cima para baixo, exatamente como está aqui.
4:19
Chegou aqui embaixo, eu vou ter duas possibilidades. Existe uma bifurcação, exatamente
4:24
como está sendo representado aqui do lado. Essa bifurcação vai me levar para dois caminhos possíveis:
4:29
para um lado, se acontecer alguma coisa. E pro outro lado, se essa coisa não acontecer.
4:34
A gente vai ver isso de forma prática, mas eu quero que você entenda. Meu programa, agora, não será executado
4:40
de cima para baixo, do início ao fim. Existe uma bifurcação no meio do caminho. Depois que eu executo
4:44
um dos lados dessa bifurcação, elas vão se encontrar de novo e então fluxo do meu programa vai terminar,
4:50
vai seguir normalmente até o fim dele, até esse último ponto. Então, basicamente,
4:55
eu não sigo mais uma linha vertical. Eu tenho desvios. E a gente chama esse primeiro desvio de
5:02
desvio condicional. Esse desvio condicional é muito importante. Ele faz parte dos
5:07
fundamentos da programação.Toda a linguagem de programação que a gente conhece, dita imperativa,
5:12
aquelas linguagens mais populares, elas têm vários tipos de condições e o JavaScript
5:17
é uma linguagem popular. Então, ela também tem esse tipo de estrutura.
5:21
Então, vou isolar só a parte que nos interessa pra essa aula. Isso que está representado aqui do lado,
5:26
é uma condição agora. Agora, temos que ver como se representa esse gráfico diretamente no JavaScript.
5:33
E a resposta para isso é muito simples, dá uma olhada. Vamos começar pelo losango
5:38
(dei uma marcação em amarelo). Pro losango em JavaScript, a gente vai utilizar a estrutura if
5:45
Então, vou colocar if e vou botar uma condição qualquer. Logo a gente vai ver isso na prática, fica bem tranquilo.
5:51
E nessa condição, eu tenho duas possibilidades: a possibilidade da esquerda
5:56
e a possibilidade da direita da sua tela. Vamos começar com a possibilidade da esquerda,
6:01
aquela mais distante de mim. Então, é isso que eu tô marcando agora.
6:05
Essa parte será representa como? Eu vou criar um bloco. E você viu na aula anterior como criar um bloco
6:11
Se você não viu acessa a nossa playlist. É sempre a primeira playlist que aparece aqui em cima
6:17
no "i" de interatividade e assiste a aula anterior, porque eu falei sobre bloco.
6:21
Então, a gente vai criar um bloco, você sabe que um bloco é um par de chaves, abertura e fechamento
6:27
de chaves, e aqui dentro vou colocar o bloco. Logo, falaremos agora sobre esse bloco.
6:31
Agora, vamos passar para a outra parte, o outro lado. O lado direito, nesse caso, esse que está
6:37
marcado aqui lado. Para eu fazer o lado direito, eu tenho que utilizar uma palavra também, que é a palavra else,
6:42
que quer dizer senão. If quer dizer "se". Else quer dizer "senão", é o oposto de "se"
6:50
Então, tenho um bloco para fazer, esse que está pertinho de mim, do lado direito.
6:53
Eu vou fazer também um bloco, isto é, eu abro e fecho chaves. Então, essa é estrutura. Ela tem dois blocos.
7:00
Um bloco é pra quando o if der positivo, isto é, são os comandos com os executados caso essa condição,
7:08
que está representada aqui, seja verdadeira. E esse bloco não precisa ter apenas um comando ,
7:13
pode ter vários comandos, sem problema nenhum. Por isso eu desenhei um bloquinho aqui embaixo.
7:17
Esse bloco de verdadeiro é como se fosse esse bloco aqui de cima. Está vendo? Do lado esquerdo
7:23
Então, é só olhar embaixo e olhar em cima. Já o bloco aqui de baixo, o último, vai ser executado
7:29
caso essa condição que está aqui em cima seja falsa. E mais uma vez,
7:33
esse bloquinho que está escrito false aqui embaixo, podem ser vários comandos. Não precisa ser um só
7:38
e ele está localizado perto de mim, no bloco da direita. Então, qualquer coisa, pausa, anota no seu caderno
7:45
aquilo que a gente sempre falou, faz o desenho no seu caderno, porque logo isso vai clarear bastante
7:50
na sua mente. Essa, é uma maneira mais completa de representar as condições. O conceito é esse
7:56
que está anotado aqui em cima. Condição é uma estrutura de controle muito importante
8:00
para a programação. Mas, vamos tirar esse bloco lateral e eu vou puxar um bloco aqui embaixo
8:05
pra gente tem um aproveitamento melhor de espaço, porque existem dois tipos de condição
8:10
e eu vou te explicar a diferença entre eles. Na verdade, existem mais tipos. Nessa aula, a gente vai ver
8:15
dois tipos de condição. Aqui embaixo a gente vai ter uma condição bem simples,
8:19
que só tem um tipo de bloco. Então, dá uma olhada, eu fiz uma condição e tenho apenas o bloco do verdadeiro.
8:26
O bloco do falso não existe. Eu já vou dar um exemplo típico do uso desse tipo de estrutura.
8:31
E essa estrutura, por ser simples, é considerada, é chamada tecnicamente de condição simples.
8:38
Perto de mim, eu vou colocar, exatamente, a condição que a gente acabou de ver, que tem o if e o else
8:44
e os dois blocos relacionados. Nessa daqui, se a condição for falsa, nada vai acontecer em especial.
8:51
O fluxo do programa continua funcionando sem problemas. Nesta aqui, caso seja verdadeira,
8:56
tenho uma coisa pra fazer e caso seja falsa, tem outra coisa para fazer. É porque nossas vidas acontece isso
9:01
constantemente. Existem situações onde uma determinada condição nos leva a dois caminhos. E tem
9:06
umas outras condições que se eu fizer alguma coisa, eu vou ganhar uma coisa a mais, vai acontecer uma coisa
9:11
a mais. Mas, se eu não fizer nada, tudo continua como antes. Eu vou representar esses dois tipos de condição
9:18
agora, no seu Visual Studio Code e de quebra, eu vou te ensinar uma coisa bem legal,
9:23
que é executar o código JavaScript utilizando Node de uma maneira automática com um plugin
9:28
que a gente já instalou anteriormente
9:33
Vamos lá! Já estou com o Visual Studio Code aberto e eu já ensinei em aulas anteriores (se você não aprendeu,
9:40
assiste o vídeo anterior, os vídeos anteriores, na verdade) a gente já tinha explicado como instalar
9:45
a extensão Node Exec. Essa extensão facilita a nossa vida colocando uma tecla especial: F8
9:52
para executar o Node.js automaticamente para arquivos ponto JavaScript (.js) .
9:59
É a primeira vez que a gente vai utilizar isso. Então, vou fazer bem devagarinho. Segue o passo a passo comigo
10:05
usando a sua máquina. Não adianta só assistir eu fazendo. Então, vou fechar aqui,
10:10
vou fechar a área de extensões. O plugin e tem que estar instalado e habilitado.
10:15
Tem que estar aqui. Se não estiver escrito disable, você coloca, porque deve estar escrito enable, que é habilitar.
10:22
E eu vou fazer seguinte, nós vamos começar, essa é a aula 11
10:27
Então vamos criar (botão direito)New Folder e botar aula 11. Na aula 10, a gente parou no exercício 007
10:34
Vou abrir o exercício 008. Só que é um pouco diferente, dá uma olhada. Vou criar um arquivo, exercício008...
10:42
Em vez de .html, eu vou usar .js (JavaScript)
10:48
Perceba que quando eu boto html, ele coloca umas tags aqui do lado. Quando eu boto .js, ele coloca o js do lado
10:55
Já criei, posso até encolher essa parte. E antes de fazer uma condição, efetivamente, vamos testar
11:01
essa extensão que a gente fez. Em primeiro lugar, vamos escrever na tela. Para escrever na tela no Node js
11:07
não funciona o document.write, a gente tem que fazer o console.log pra mim poder escrever no console
11:16
Vou botar: " O console funcionou corretamente! ". Para eu executar esse código JavaScript,
11:23
eu vou no meu teclado, apertar a tecla F8, que fica na barra de cima.
11:27
Apertei o F8 e ele me mostrou: "O console funcionou corretamente! "
11:31
Então, está tudo certinho, tudo bonito. Depois de executar, se você quiser sai,r pode fechar aqui embaixo
11:37
ou deixa aqui em cima. Não tem problema, nosso código está bem pequenininho.
11:40
Eu posso fazer o seguinte, vamos imaginar que eu tenha uma variável que o chamar de velocidade,
11:46
chamar de vel, que vai ser a velocidade de um carro. Não sei, meu carro está andando a 60.5 km/h.
11:52
Criei uma variável numérica, essa variável numérica é real e eu coloquei dentro de vel
11:58
o que eu vou fazer aqui é o seguinte: se eu botar um escreva na tela (com crase para pode interpolar)
12:07
console. log(`A velocidade do seu carro é $(vel)km/h `)
12:15
Vamos ver como isso funciona. Vamos executar o F8. Veja, a velocidade de seu carro é 60.5 km/h.
12:22
Funcionando, sem problema nenhum. Aqui eu vou botar um outro console.log .
12:27
consol.log(`Dirija sempre usando cinto de segurança`)
12:32
Só isso, F8. "A velocidade de seu carro é 60,5. Dirija sempre usando cinto de segurança."
12:38
Perceba que esses três comandos que foram digitados são comandos sequenciais. não existe a possibilidade
12:45
de executar só esse comando e esse comando. A não ser que eu coloque esse como um comentário
12:51
Coloco um // aqui, aperta F8, ele executou.
12:55
Só que, por exemplo, imagine que toda vez que, "eu quero executar esse comando". Então eu tiro.
12:59
"Não quero executar esse", eu tiro. "Eu quero executar", bota de novo.
13:03
Fica complicado, por exemplo, se eu quiser uma
13:06
console.log(`Você ultrapassou a velocidade permitida, MULTADO!`)
13:14
Então, eu vou multar o cara. Mas, presta atenção. Se eu executar esse comando, eu vou ser obrigado
13:20
a sempre multar a pessoa, qualquer pessoa. Quer ver? Vou apertar F8
13:24
"A velocidade de seu carro é 60,5. Você ultrapassou a velocidade permitida, MULTADO!
13:29
Dirija sempre usando cinto de segurança". Só que o cara passou a 12km/h.
13:35
À 12 km/h não tem como multar ninguém. Mas, se eu executar o programa desse jeito que está,
13:40
ele sempre vai dizer: "Você ultrapassou a velocidade permitida...". E você pode pensar:
13:44
" mas quando a velocidade for baixa, você vêm aqui e bota um comentário e na hora de executar,
13:49
eu não preciso e ele não mostra que foi multado". Imagina você ter o trabalho de toda vez pegar
13:54
a velocidade da pessoa, ver se você precisa tirar ou colocar um comentário e executar
13:59
o que a gente vai fazer é, justamente, o seguinte: eu vou tirar esse comando daqui, vou selecionar,
14:04
vou dar Ctrl+X, tirei ele daqui. O que eu vou criar nessa linha 3 é uma condição.
14:09
Se por acaso, ( se você escrever if, leia como: se por acaso) a velocidade...
14:15
A gente já viu os operadores aritméticos, vamos supor que o limite de velocidade dessa estrada seja 60km/h.
14:22
if (vel >= 60) { }
14:28
Eu abro bloco e aqui dentro eu vou colocar o comando. Vou dar Ctrl+V e agora, ele está funcionando.
14:34
Então, o que eu estou fazendo? Eu estou automatizando a minha programação
14:39
Então, vou fazer o seguinte, esse "você ultrapassou a velocidade permitida, MULTADO!" só vai acontecer
14:45
se a velocidade for maior do que 60. Percebe que esse comando está escrito pra dentro? Está vendo?
14:51
Ele não está bagunçado. Quando a gente começa a programar a gente fala: "o código está meio bagunçado,
14:56
têm umas coisas escritas pra fora, umas coisas escritas pra dentro". O nome dessa técnica de organização
15:00
do código que você está vendo na tela agora, é indenização, que quer dizer recuo.
15:05
Então, eu faço um recuo. Para eu fazer esse recuo, no caso do Visual Studio Code,
15:11
ele mesmo já criou um recuo para você. Mas, se você quiser, você pode usar a tecla tab do seu teclado
15:16
pra aumentar ou diminuir o recuo. Veja, tab e eu usei backspace para voltar o recuo.
15:22
Então, estou dizendo o seguinte: esse comando que está aqui dentro só vai acontecer se a velocidade
15:28
for acima de 60. Por exemplo, agora sem botar comentário, nem nada, a minha velocidade é 12.
15:33
Vou executar, F8. "A velocidade de seu carro é 12km/h. Dirija sempre usando cinto de segurança."
15:39
Sem problema, agora se eu botar, por exemplo, 78.2. O cara passou a 78.2, vou apertar F8 de novo
15:46
"A velocidade de seu carro é 78.2km/h. Você ultrapassou a velocidade permitida, MULTADO!"
15:52
Viu? Entendeu como funciona o negócio? Esse comando só vai acontecer se isso for verdade.
15:57
Essa condição a gente classifica como( vou colocar como comentário aqui do lado. Lembra do comentário?)
16:02
uma condição simples. Porque é uma condição simples? Porque ela não tem senão.
16:08
Isto é, você passa em um radar, se você passou acima da velocidade, você ganhou uma multa.
16:13
E se você passou abaixo da velocidade? Você não ganha um "parabéns", você apenas não fez mais
16:17
do que sua obrigação. Então, nesse caso, quando não tem senão, a gente chama isso de condição simples.
16:23
Combinado? Agora, o que a gente vai fazer é, criar um outro arquivo, que é o exercício 009 dentro da aula 11.
16:29
Vou criar um arquivo novo chamado ex009.js de novo, fechei o ex008
16:36
E nesse 009, eu vou fazer uma condição composta. Vamos ver uma situação. Vou fechar o meu terminal
16:43
Vamos começar um programa novo. Eu vou botar o que é uma variável país. e o país que eu vou colocar
16:51
é Estados Unidos. Eu vou verificar o seguinte:
16:54
if(país == `Brasil`){
17:00
console.log(`Brasileiro`) }
17:04
else{ console.log (`Estrangeiro`) }
17:07
Isto é, se o país da pessoa for Brasil, ela é brasileira. Senão, é estrangeira. Certo? Vamos executar o programa.
17:14
O país é Estados Unidos. Vou colocar: console.log (`Vivendo em $(país)`)
17:23
Têm que ser crase. Até o próprio Visual Studio Code facilita a nossa vida e não deixou azul aqui
17:29
Eu já percebi que tinha errado. Vivendo em $país e vou botar: "Você é Brasileiro" e "Você é estrangeiro"
17:37
Vamos executar, F8. "Vivendo em Estados Unidos" "Você é estrangeiro". Se o país for Brasil... escrevi Brasil, F8
17:45
"Vivendo no Brasil". "Você é brasileiro". Vou botar França. "Vivendo em França".
17:50
"Você é estrangeiro". E qualquer coisa que seja diferente de Brasil, perceba que se o país for igual à
17:56
Brasil, ele vai executar esse comando. Senão, isto é, se o país for diferente de Brasil, ele é estrangeiro.
18:03
Eu poderia inverter e no lugar desse igual, botar diferente de Brasil. Se o país for diferente de Brasil,
18:09
estrangeiro. Senão, brasileiro. Fica a seu critério. Nenhum deles está errado e nenhum deles está certo,
18:15
a opção que você escolher. Então, vivendo na França, você é estrangeiro. Vivendo no Brasil, você é brasileiro.
18:24
Funcionou na sua casa? Só que agora a gente vai fazer isso em forma de site, porque esse curso
18:29
é para a criação de sites.
18:32
Nós vamos fazer esse mesmo exemplo, para pessoa digitar, talvez, a velocidade do carro
18:37
e ver se ele está multado ou não. Vamos criar outro exercício. Vou criar o exercício 010.
18:42
Só que nesse caso, como é site, (salvando aqui) eu vou criar, na aula 11, o arquivo ex010.html
18:52
já que é site. Então, já criei, vou fechar o 09, vou fechar os arquivos e vou fechar o terminal também,
18:57
Porque eu não vou mais precisar dele. vamos criar o < html lang = "pt-br" >
19:04
Vamos colocar ali, DETRAN (Departamento de Trânsito). Vou criar um h1. "Sistema de multas".
19:11
e vou pedir a velocidade do cara. Eu vou colocar:
19:14
< input type = "number" name = "txtvel" id="txtvel">
19:23
Lembrando que esse nome ele é muito útil para outras linguagens, como PHP. Por isso, eu não vou tirar.
19:29
Mas, a gente vai trabalhar com id para facilitar no JavaScript. Por isso, eu tenho esses dois
19:34
Antes, eu vou botar: "Velocidade do carro: " ... "km/h". Vou fazer também:
19:41
< input type = "button" value = "Verificar" > (para ele ter um botão com valor de verificação )
19:47
Vamos ver como está o funcionamento até aqui
19:49
Ctrl + Shift + P
19:51
Vou clicar em "Watch in Chrome", que é um outro plugin que a gente já instalou.
19:54
Ele vai abrir o Chrome e vai abrir o site. Está vendo? Vou apenas arrumar a tela, colocar cada um de um lado,
20:01
aquele negócio sempre para ficar mais fácil. Vou amentar um pouco, porque esse é menor
20:08
Já estou aqui na velocidade do carro, tantos km/h e eu clico em verificar. Quando eu clicar em verificar...
20:14
Então, vou botar OnClick="calcular", que é a minha ação. A gente viu isso também na aula anterior.
20:21
Se você tem alguma dúvida em relação à isso, não se esqueça. Aqui em cima, na primeira playlist,
20:26
você sempre vai ter o acesso às aulas anteriores. Então, assiste. Nós estamos na aula 11. Se você não sabe
20:32
criar uma função, a gente aprendeu isso na aula 10. Então, segue o procedimento.
20:37
Vamos criar um script. E esse script vai fazer o seguinte:
20:41
Vou criar uma variável txt de velocidade (txtv). Vai ser a ligação do JavaScript com essa caixa de texto
20:49
que eu chamei de txtv. Então, vou botar: var txtv = window.document.
20:57
Você pode omitir esse window, pode começar apenas em document... sem problema.
21:02
Vou colocar o id que é (`txtvel` ). Você também pode colocar no lugar de getElementById,
21:09
sem diferença nenhuma, o querySelector(`inputidtxtvel`)
21:19
e fazer a seleção pelo seletor do JavaScript. Tanto fez, vou deixar ese segundo aqui.
21:24
Embaixo, eu vou criar uma function. A minha função vai se chamar calcular, já que eu tenho uma chamada
21:30
para calcular aqui e criei um bloco. Na verdade, eu vou pegar esse comando e vou colocar aqui dentro.
21:35
É só arrastar ele pra dentro para facilitar, já que eu tenho só uma função. Então, ele vai pegar o objeto.
21:41
Vou pegar velocidade dele. Para pegar a velocidade, eu vou fazer: var vel = Number(txtv.value),
21:48
que é o valor que está digitado na caixa de texto. Então, eu vou pegar a velocidade e vou jogar dentro
21:53
da variável vel. Também tenho que criar aqui embaixo( e eu sempre esqueço) uma div, que eu vou chamá-la,
22:00
colocar o id dela de res(resultado). Também vou fazer:
22:05
var res = window.document.querySelector(``div#res`)
22:12
Lembrando mais uma vez, id é com a hashtag e class é com ponto pra CSS
22:18
Anota isso no seu caderno para não esquecer. Feito isso, nós vamos escrever dentro da div
22:23
Então, vai ser... a minha div se chama res
22:25
res.innerHTML = `Sua velocidade atual é de ${vel}`
22:33
Certo? Vamos fazer só até aqui. Salvei, vou atualizar
22:37
"Velocidade do carro: 200km/h" "Sua velocidade atual é de 200 "
22:41
${vel}km/h. Para ficar bonito. 340. "Sua velocidade atual é de 340km/h". Como a gente botou innerHTML,
22:50
Você consegue colocar em negrito. Eu boto : ${vel}km/h
22:56
Também vou colocar isso como parágrafo. Isso é HTML básico. Certo?
23:01
Então, meu comando está desse jeito. Vamos salvar, atuaizar, escrever 20km/h.
23:06
"Sua velocidade atual é de 20km/h". Vou fazer o seguinte:
23:10
res.innerHTML += "Dirija sempre com cinto de segurança" (+= concatenação por ser uma string)
23:26
Aquilo que a gente acabou de fazer no modo terminal, utilizando o Node. Vamos executar de novo.
23:32
Vou botar 20. "Sua velocidade atual é de 20km/h". "Dirija sempre com cinto de segurança".
23:38
Porém, eu quero saber se a pessoa foi multada ou não. Para saber se a pessoa for multado ou não, é simples:
23:43
if (vel) > 60 { res.innerHTML += "Você está MULTADO por excesso de velocidade" }
24:05
Fim do parágrafo. Vou botar a palavra multado em strong também. Então, vamos lá!
24:11
Salvei. Vou botar 10km/k, bem devagar. "Sua velocidade atual é de 10km/h".
24:16
"Dirija sempre com cinto de segurança". Agora, eu vou botar 100km/h.
24:20
"Sua velocidade atual é de 10km/h"."Você está MULTADO por excesso de velocidade"
24:24
"Dirija sempre com cinto de segurança". Viu? Essa mensagem aqui só aparece se a velocidade acima de 60 .
24:32
E antes de encerrar sua aula, eu quero deixar um desafio para você. É o seguinte:
24:38
A gente fez esse, o exercício 10 , que é exatamente o exercício 8. Está vendo? "Você ultrapassou a velocidade
24:45
permitida. MULTADO!" O exercício 10 foi fazer isso em forma de site. Crie você o exercício 9 em forma de site.
24:52
Você vai perguntar em que país a pessoa mora, ela vai digitar em que país ela mora.
24:57
Você não vai precisar fazer conversão. Essa conversão de number, você não precisa fazer.
25:01
Ela já está em forma de texto. Essas caixas de texto sempre são em forma de texto.
25:07
Então faz o exercício 009, que essa condição, se a pessoa estrangeira ou brasileira ,
25:13
só que utilizando esse formato em forma de sites. Usando HTML5, CSS3 e JavaScript
25:21
Posso contar com a sua prática? Espero que sim, porque como já disse um milhão de vezes,
25:25
não adianta só assistir vídeo, não adianta só no caderno a prática é uma das coisas mais fundamentais
25:31
quando a gente está aprendendo qualquer coisa na vida, principalmente, programação.
25:37
Eu me despeço por aqui. E como a gente meio que já deu um spoiler, eu falei que essa aula era a parte 1,
25:43
obviamente, o próximo vídeo é a parte 2 desse assunto, onde nós vamos ver outros tipos mais complexos
25:50
de condições. Isso porque tem condições que executam caso seja verdade, outra não.
25:55
Têm uma coisa que acontece quando ela é verdadeira e outra quando é falsa, mas nem tudo na vida
26:00
são só dois caminhos. Às vezes, têm três, quatro, cinco, dez, vinte caminhos e eu vou te ensinar como criar
26:06
caminhos ilimitados no próximo vídeo. Mas antes, pratica esse, coloca tudo em prática.
26:11
O seu curso já está totalmente disponibilizado para você. Então, não adianta.
26:14
Você não vai ter que esperar a próxima semana para sair vídeo, como é de costume aqui no Curso em Vídeo
26:19
O Google trouxe uma coisa muito boa. Eles pediram pra mim:
26:22
"Guanabara, a gente quer o curso inteiro no mesmo dia para que ninguém precise ficar esperando"
26:27
E essa vantagem, você já tem aqui no Curso de JavaScript. Então, não adianta correr.
26:31
Já está tudo aqui disponibilizado. Faz a prática na sua casa e logo a gente vêm com a aula 12
26:37
ensinando condições mais complexas. Não se esquece, como sempre, de se inscrever no canal,
26:41
habilitar o sininho para receber notificações e aqui em cima, além da playlist de JavaScript,
26:46
que é sempre a primeira playlist, nós temos outras playlists auxiliares. Inclusive, do nosso curso
26:52
bem antigo, mas bem atualizado ainda, de HTML5 e CSS3 já disponibilizado, também já está completo.
26:59
Você não tem do que reclamar na hora de estudar JavaScript aqui com a gente.
27:02
Eu me despeço por aqui. E como sempre digo,
27:05
boas práticas, treina tudo direitinho, um grande abraço e até a próxima!
27:11
Legendas: Samara Affonso
FIM
*/
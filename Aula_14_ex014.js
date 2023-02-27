// Exercícios da Aula 14 - Parte 4
// https://youtu.be/6tyHypeY4-8

/* QUESTÕES DA AULA ANTERIOR 
1) Já aprendeu a usar a extensão Watch In Chrome no VS Code? No caso Live Server? 
2) Já aprendeu a usar o modo de DEPURAÇÃO no VS Code? 
3) Já fez todos os testes com a estrutura while, do..while, for? 
4) Quer aprender um pouco mais em como manipular dados em CONTROLES HTML no JS? 


*/

/* 
///Html:
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>model</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1> Vamos contar</h1>
    </header>
    <section>
        <div>
           <p>Inicio:<input type="number" name="numInicio" id="numInicio"></p>
           <P>Fim:<input type="number" name="numFim" id="numFim"></P>
           <P>Passo<input type="number" name="passo" id="passo"></P>
           <input type="button" value="contar" onclick="contar()">
        </div>
        <div id='res'>
            Preparando a contagem
        </div>
    </section>
    <footer>
        <p>
            &copy; Daviddds
        </p>
    </footer>
    <script src="exe.js"></script>
</body>
</html>
/*css
body{
    background-color: rgb(61, 61, 199);
}
header{
    text-align: center;
    font:normal 15pt Arial;
    color: white;
}
section{
    background-color: white;
    width: 500px;
    margin: auto;
    padding: 5px;
    border-radius: 10px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.432);
}
div{
    margin-top: 8px;
}
footer{
    text-align: center;
    font:italic;
}
///script
function contar() {
    var numInicio = document.getElementById('numInicio')
    var numFim = document.getElementById('numFim')
    var passo1 = document.getElementById('passo')
    var numIn = Number(numInicio.value)
    var numF = Number(numFim.value)
    var passo = Number(passo1.value)
    var res = document.getElementById('res')
    if(numInicio.value.length == 0){
        res.innerText = 'impossivel contar'
    } else if (passo == 0){
        alert('passo invalido, considerando passo = 1')
        var passo = 1
        while(numIn <= numF){
            res.innerText += ` ${ numIn }`
             numIn = numIn + passo
         }
    } else {
        for( ; numIn <= numF ; numIn = numIn + passo ){
            res.innerText += ` ${numIn} `
        }
        }
        /*while(numIn <= numF){
          res.innerText += ` ${ numIn }`
           numIn = numIn + passo*/
       }
*/ 


/* POST 666.666

666.666
há 1 mês
CSS: 
body{
    width: auto;
    margin-top: 100px;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    background: #2c78be;
    color: white;
}


header {
    padding: 20px;
    display: flex;
    flex-direction: row;    
    background-color: #538ae2;
    border-radius: 10px;
    text-align: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
}

#botao{
    margin-top: 10px;
    padding: 10px;
    text-decoration: none;
    border: 2px solid black;
    border-radius: 5px;
    color: white;
    background-color: #4285F4;
    border: none;
    border-radius: 2px;
    font-size: 16px;
    width: 90px;
    text-transform: uppercase;
    cursor: pointer;
    box-shadow: 0 0 4px #999;
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
}
#botao:hover{
    text-decoration: none;
    border: 2px solid black;
    border-radius: 5px;
    color: white;
    background-color: #2b5aa5;
    border: none;
    border-radius: 2px;
    font-size: 17px;
    text-transform: uppercase;
    cursor: pointer;
    box-shadow: 0 0 4px #999;
    outline: none;
    width: 95px;
    transition: all 0.2s;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
}
input{
    width: 34px;
    margin: 5px;
    position: static;
}
input:hover {
    width: 36px;
    margin: 5px;
    transition: all 0.2s;
}
#res{
    margin-top: 34px;
}
Responder
666.666
666.666
há 1 mês
JS:
function contar() {
    function contando(){
        inicio = document.getElementById("inicio_v")
        fim = document.getElementById("fim_v")
        passo = document.getElementById("passo_v")
        resultado = document.getElementById("res")
        i = Number(inicio.value)
        f = Number(fim.value)
        p = Number(passo.value)
        for (c = i; c <= f; c = c + p){
            resultado.innerHTML += `${c} `
            chegou.innerText = `Chegou!`
    }
}
contando()
}
function reset(){
    resultado.innerHTML = null
    chegou.innerText = null
    document.getElementById('passo_v').value = ""
    document.getElementById('fim_v').value = ""
    document.getElementById('inicio_v').value = ""
}
Responder
666.666
666.666
há 1 mês
EX 2 esse foi fofa errei uma coisa boba e fiquei mais de 1 hora

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title></title>
    <style>
    </style>
</head>

<body>

<!--FIM-->
<section>
Número: <input type="number" value="0" id="numero">
<input id="botao" type="button" value="Gerar Tabuada" onclick="gerar()">
<br>
</section>
<section>
    <textarea id="atalho" cols="30" placeholder="Preencha o campo acima" rows="10" disabled></textarea>
</section>


<!--FIM-->
    <script src="script.js"></script>

</body>
</html>
Responder
666.666
666.666
há 1 mês
CSS:
body{
    width: auto;
    margin-top: 100px;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    background: #93b6d6;
    color: white;
    font-style: normal;
    font-weight: bold;
}


header {
    padding: 20px;
    display: flex;
    flex-direction: row;    
    background-color: #538ae2;
    border-radius: 10px;
    text-align: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
}

#botao{
    margin-top: 10px;
    padding: 10px;
    text-decoration: none;
    border: 2px solid black;
    border-radius: 5px;
    color: white;
    background-color: #4285F4;
    border: none;
    border-radius: 2px;
    font-size: 8px;
    width: 90px;
    text-transform: uppercase;
    cursor: pointer;
    box-shadow: 0 0 4px #999;
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
}
#botao:hover{
    text-decoration: none;
    border: 2px solid black;
    border-radius: 5px;
    color: white;
    background-color: #2b5aa5;
    border: none;
    border-radius: 2px;
    font-size: 8px;
    text-transform: uppercase;
    cursor: pointer;
    box-shadow: 0 0 4px #999;
    outline: none;
    width: 90px;
    transition: all 0.2s;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 17px 35px, rgba(0, 0, 0, 0.22) 0px 12px 10px;
}
input:focus, textarea:focus {
    background: rgb(206, 206, 206);
    transition: all 0.5s;
    
}
input:disabled, textarea:disabled {
    background: rgb(255, 255, 255);
    color: black;
}
input:target-text, textarea::marker {
    background: rgb(161, 51, 51);
}
body::-webkit-scrollbar {
    width: 1em;
  }
textarea::-webkit-scrollbar {
width: 1em;
}

#atalho {
    border: 1px solid black;
    border-radius: 1px;
    margin-top: 20px;
    -webkit-touch-callout: none; /* iOS Safari 
      -webkit-user-select: none; /* Safari 
       -khtml-user-select: none; /* Konqueror HTML 
         -moz-user-select: none; /* Old versions of Firefox 
          -ms-user-select: none; /* Internet Explorer/Edge 
              user-select: none; /* Non-prefixed version, currently
                                    supported by Chrome, Edge, Opera and Firefox 
  }

#numero {
    width: 40px;
    color: black;
}
#numero:focus{
    transition: all 0.2s;
    text-decoration: disabled;
    cursor: auto;
}
Responder
666.666
666.666
há 1 mês
JS:
function gerar(){

    numero = document.getElementById("numero")
    caixa = document.getElementById("atalho")
    c = 0 
    n = Number(numero.value)
    
    if (n == null){
        alert("Revise os dados e tente novamente.")
        caixa.value = ""

    }
    else{
    if (caixa.value.length > 30){
        caixa.innerHTML = ""

    }
    for (c = 1; c <= 10; c++){
    soma = c * n
    caixa.innerHTML += n + " x " + c + " = " + soma + "\n"
        }
    }
}
Responder


*/

/* TRANSCRIÇÃO 
0:00
Mais uma aula de exercício chegando aqui dentro de seu curso de
0:03
JavaScript e se você ainda não viu nenhuma aula de exercício está pensando:
0:08
"Essa eu posso pular porque ele não vai ensinar nada de novo." Aí é que você se engana,
0:12
porque nas aulas de exercício a gente tem um monte de coisa pra fazer, então, antes de vocês desdenhar
0:17
dessas aulas tenta responder essas quatro perguntas aqui pra mim: em primeiro lugar você já aprendeu a usar
0:23
direito a extensão Watch in Chrome dentro do Visual Studio Code?
0:26
e além do Watch in Chrome você aprendeu a utilizar o modo de depuração?
0:30
Aquele inseto que aparece do lado esquerdo, eu te ensinei isso durante a aula 14.
0:35
Você por acaso já fez todos os testes com as estruturas while, do..while e for?
0:40
Que são as três estruturas de laço ou as três estruturas de repetição dentro do JavaScript.
0:45
E por último você quer aprender um pouco mais sobre como manipular dados
0:49
em controles HTML utilizando JavaScript?
0:51
Pois é exatamente para isso, para resolver todas as questões que estão aparecendo aqui do lado,
0:56
que serve essas aulas de exercícios.
0:58
Então sente se confortavelmente, abra todo o seu ambiente e vamos começar a praticar!
1:05
Legendas: Rayssa Victoria
1:17
Olá pequeno gafanhoto! Seja bem vindo a mais um vídeo, mais um importante vídeo
1:23
aqui do seu curso em vídeo de JavaScript, totalmente patrocinado pelo Google.
1:27
O meu nome é Gustavo Guanabara, eu sou professor, e mais uma vez chegou a nossa hora de praticar,
1:33
colocar tudo aquilo que a gente aprendeu em prática é tão importante, e eu diria até mais
1:38
importante, do que simplesmente assistir aulas.
1:41
E você pode mais uma vez pensar no cara mais top do esporte que você mais gosta, você acha que ele ficou
1:49
no esporte lendo sobre esporte ou assistindo vídeos no Youtube sobre esporte?
1:54
Ou ele chegou lá dia após dia e foi treinando, foi praticando?
1:58
Não precisa ser nem muito inteligente para saber a resposta disso,
2:01
qualquer pessoa que ficou boa em alguma coisa, não foi por que ela assistiu um milhão de vídeos,
2:05
foi porque ela treinou, e para incentivar você assistir esse tipo de vídeo a gente sempre
2:10
adiciona coisas novas, dentro dessas aulas, para que tenha sempre um conteúdo extra para você aprender.
2:15
Esse conteúdo extra faz parte sim do curso
2:18
então, infelizmente, você vai ter que sim, que assistir todos os vídeos,
2:22
mas vai por mim, lá no final você vai me agradecer muito por isso.
2:26
E se você se lembra lá na aula 12, na verdade depois da aula 12, nós fizemos alguns exercícios
2:32
e criamos um site modelo, criamos um modelo bem simples,
2:35
que está sendo montado aqui do lado, onde a gente tem os componentes básicos de um site
2:39
minimamente bonitinho e que nos atenda para criar coisas em JavaScript e unir as coisas com HTML e CSS
2:46
basicamente, esse modelo aqui do lado, ele tem alguns componentes
2:49
como o corpo, uma área de cabeçalho, uma section no meio,
2:53
a área de rodapé, um footer e na section, no meio, eu tenho duas divs
2:57
uma pra gente colocar um formulário, componentes interativos e a div de baixo para mostrar os resultados.
3:02
Na verdade a gente já criou esses documentos nos exercícios pós aula 12
3:07
e vou te convidar agora para abrir o Visual Studio Code e pegar os arquivos que a gente criou pós aula 12
3:12
e reaproveitar aqui, nos vídeos pós aula 14
3:18
Então olha só, em primeiro lugar vamos abrir o Visual Studio Code, com aqueles arquivos,
3:22
vou até maximizar ele, então eu já tenho aqui, fechar essa janela de Welcome.
3:26
Eu tenho aqui, durante a aula 12 exercícios
3:29
a gente criou o exercício 14, o exercício 15 e o modelo,
3:32
vamos fazer o seguinte, clica em modelo, botão direito, copy ou selecione o modelo e pressiona Ctrl c.
3:38
Nós vamos agora criar a pasta de aula 14ex, exercício,
3:42
botão direito em uma área livre, new folder e nós vamos colocar aula 14ex, que é o exercío da aula 14.
3:49
Vou colocar o botão direito em cima de aula 14ex e vamos colocar em paste
3:53
ou control v, agora eu tenho o modelo aqui dentro também. Eu tenho exercício 14 e o exercício 15,
3:59
nós vamos fazer o seguinte, esse modelo que é aqueles documentos limpos que a gente tem,
4:04
nós vamos fazer o seguinte, eu vou selecionar o modelo da aula 14, vou dar Ctrl c, Ctrl V,
4:09
ele vai criar um modelo.1 .Eu tinha dentro da aula 12 o exercício 14 e 15,
4:14
então eu vou criar agora, esse daqui, vou renomear, botão direito rename ou aperta F2 e nós vamos criar o
4:21
exercício 016, esse exercício 016 eu posso brincar à vontade e fazer o nosso exercício.
4:27
Também vou fazer o seguinte, vou pegar esse 016 que a gente acabou de criar Ctrl c Ctrl v
4:33
e ele já vai criar o exercício 17, que são os dois exercícios que a gente vai precisar para essas aulas.
4:39
E nesse exato momento eu vou te mostrar os exercícios 16 e 17 funcionando no meu computador
4:45
e depois de ver eles funcionando chegou a sua hora de fazer eles funcionarem,
4:50
dá uma conferida aí nos exercícios que eu preparei pra você.
4:54
O primeiro exercício é bem simples nós vamos colocar um número aqui, por exemplo, 5
4:59
o número de fim, sei lá, 12 e o passo 2.
5:02
Basicamente ele vai contar de 5 até 12
5:04
pulando de dois em dois. Quando eu clicar em contar, ele está aqui preparando contagem
5:07
quando eu clicar em contar ele vai contar de 5 a 12, aqui no caso pulando de 2 em 2, o próximo já passaria de 12,
5:13
seria o 13, ele fez 5, 7, 9, 11 e banderinha.
5:17
Você percebe aqui que utilizei emojis na tela, dá pra fazer isso em JavaScript, como você faz?
5:23
Eu vou te ensinar na resolução desses exercícios, como eu disse
5:26
exercício não é pra você pular, é para você aprender coisas novas,
5:29
então, eu estou deixando coisas novas para aprender aqui, por exemplo se eu contar de 0 a 10
5:34
pulando de 1 em 1, ele vai fazer de 0 a 10 pulando de 1 em 1, está com 0, 1, 2, 3, 4 e assim sucessivamente.
5:40
Se por acaso deixar uma caixa vazia, por exemplo, não tem início tem como não ter início, então ele vai colocar
5:45
"Impossível contar." Viu? Já fiz uma pequena validação aqui dos formulários
5:50
E outra coisa que eu posso fazer de 1 à 10, pulando de 0 em 0,
5:53
não tem como eu pular de 0 em 0, então na hora que contar ele vai dizer "Passo inválido
5:58
considerando passo 1." Então ele vai ignorar o passo 0 e vai colocar passo 1 e aí ele faz a contagem para a gente
6:04
Então esse é o primeiro exercício a contagem é simples,
6:08
o exercício é bem simples, na verdade ele vai ficar um pouquinho mais longo por conta dessas
6:12
validações que estou fazendo não pode deixar a caixa vazia, não pode ser passo 0,
6:16
isso vai dar um trabalho e outro trabalho que você vai ter que dar uma pesquisada ou
6:20
dar uma olhada na resolução é como é que eu mostro emoji na tela utilizando JavaScript,
6:25
não é muito difícil não, é bem tranquilo na verdade, esse é o primeiro exercício, vamos para o próximo.
6:30
O próximo exercício também é bem clássica para mostrar uma tabuada dentro do HTML,
6:34
eu tenho aqui um controle de caixa de texto normal,
6:36
onde eu posso escolher um número, por exemplo 8, e aqui embaixo eu tenho um select
6:41
é um select, é uma lista na verdade, em HTML,
6:44
você tem também o curso de HTML aqui em cima da minha cabeça,
6:47
a gente ensina tudo, se você não sabe HTML não tem grandes problemas não, você aprende JavaScript
6:52
a gente vai dando as sequências aqui direito dos comandos,
6:55
mas também é importante que você saiba HTML
6:57
já completo no canal, bem antigo na verdade, a imagem está bem diferente eu estou bem diferente,
7:03
mas o curso também atualizado ainda.
7:05
Vou colocar tabuada de 8 e gerar tabuada, ele me mostra tabuada de 8 está vendo? Eu consigo
7:10
selecionar os itens aqui e dentro de uma tabuada, resolvi fazer uma coisa um pouco diferente
7:15
este exercício vai ficar um pouco menor do que o outro, mas eu considerei ele vindo depois
7:20
do anterior, que é o da contagem, por conta dessa
7:23
manipulação de elementos em HTML que dá pra fazer.
7:26
Outra coisa, aqui nesse caso, eu posso colocar a 0 sem problema por que existe a tabuada de 0,
7:31
posso colocar números negativos, sem problema nenhum, oque não pode é deixar vazio
7:36
se eu deixar vazio vai dizer: "Por favor digite um número."
7:38
Não tem como não digitar um número eu preciso ter um número para
7:41
mostrar tabuada a dele. E essa é a sua missão pequeno gafanhoto, a ideia é você resolver esses exercícios
7:49
Por conta própria sem a minha ajuda, se por acaso você não conseguir
7:53
não tem problema, existem os próximos vídeos que são a resolução respectivamente desses dois exercícios,
7:58
mas o mais importante, você precisa fazer esses exercícios, você precisa provar para você mesmo
8:05
que é capaz de resolver esses desafios que eu acabei de fazer pra você e não adianta você só assistir o vídeo
8:10
e só porque você entendeu, considerar que você já sabe fazer, você precisa colocar a mão na massa e fazer.
8:16
Fica a dica, na verdade oque eu recomendo agora é você dar uma pausa,
8:19
abrir o seu Visual Studio Code, tentar fazer os seus exercícios
8:23
baseados nos modelos que a gente já copiou e caso você não consiga uma determinada funcionalidade
8:29
por exemplo o da contagem, só não consegui colocar emoji
8:32
vai lá e assistir o próximo vídeo só para colocar o emoji,
8:35
oque importa é você queimar a cuca um pouco para tentar resolver
8:39
porque é assim que a gente aprende a programar,
8:40
na verdade a gente já combinou, a gente só aprende a fazer as coisas praticando, não é assistindo vídeo,
8:46
não é lendo matéria, não é lendo o livro, a gente só aprende quando a gente coloca a mão na massa
8:49
e coloca pra funcionar.
8:52
Viu os exercícios funcionando? Entendeu qual é a proposta de cada um deles? Pois agora chegou a sua
8:59
hora, chegou a sua hora de provar pra você mesmo, pra você mesma, você é capaz de criar esses exercícios,
9:05
eles precisam de um conhecimento prévio de HTML e CSS, isso é bem verdade, mas se você der uma
9:11
pesquisada, der uma esforçada, você consegue fazer.
9:14
E se por acaso você tiver qualquer problema na resolução de qualquer um desses exercícios
9:18
não tem problema nenhum, a resposta estão nos próximos dois vídeos desse curso
9:23
então você não perde nada, inclusive você vai aprender a utilizar essas funcionalidades extras
9:28
que a gente viu acontecendo, mas eu recomendo fortemente que antes de você ver a resposta
9:33
e só de assistir fazendo você considere que "Está aí, eu entendi."
9:37
Se eu entendi eu já sei fazer e infelizmente não é assim que as coisas funcionam,
9:42
infelizmente mesmo, se você só assistir os vídeos de eu fazendo esses exercícios
9:46
você simplesmente está comprovando que eu sei fazer esses exercícios e não é porque você
9:51
entendeu os comandos que eu fiz que você já sabe fazer, é preciso colocar a mão na massa
9:56
e fazer sua própria solução, pode ser até baseada na minha não tem nada de errado com isso,
10:01
principalmente quando a gente está começando, mas
10:03
faça a sua própria solução, é muito importante isso. Por um momento eu me despeço por aqui pausa a
10:10
visualização de qualquer aula desse curso, abre o seu Visual Studio Code, abre o seu Google Chrome
10:15
e tenta fazer, por você mesmo, cada um dos exercícios propostos agora por mim
10:19
e se por acaso você precisar de alguma ajuda
10:21
conta com a gente, porque os próximos vídeos estão aí exatamente para isso. Um grande abraço,
10:25
se você ainda não se inscreveu no canal se inscreve, deixa ele aquele like já para fortalecer
10:30
em forma de agradecimento pela nossa ajuda e a gente se vê já já. Boas práticas e até a próxima
10:38
Legendas: Rayssa Victoria
*/

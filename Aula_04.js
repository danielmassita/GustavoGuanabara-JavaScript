// Aula 04 - Criando o seu primeiro script
// https://youtu.be/OmmJBfcMJA8

/*
Você já sabe diferenciar dentro do seu código, os trechos em HTML5, em CSS3 e em JavaScript? Sabe organizar as pastas do seu projeto dentro do Visual Studio Code? Sabe como testar se o Node.js está devidamente instalado? Já sabe utilizar os comandos alert, confirm e prompt do JavaScript? 

Pois, para responder a essas e muitas outras perguntas, assista essa aula do Curso de JavaScript para Iniciantes até o final. E não se esqueça sempre de praticar todas as atividades que fizermos durante o vídeo no seu próprio computador.

Aula do Curso de JavaScript e ECMAScript para Iniciantes, criado pelo professor Gustavo Guanabara para o canal CursoemVideo.
*/

/* 
PERGUNTAS AULA ANTERIOR
- Qual a bibliografia recomendada? (2 livros (FLANAGAN e SILVA) e 2 sites guias de referência (ECMA e Mozilla)...
- Precisa saber inglês? Não, é balela...
- Quais dicas pra estudar? Ver aos vídeos + escrever e codar + ler manuais, refs., artigos + fazer anotações + estudar juntes + criar projetos próprios + PERSISTIR!
- Quais programas pra instalar? Google Chrome (navegador) + VS Code (escritor de códigos) + Node.js (backend). 
*/

/*
NOSSOS PRIMEIROS SCRIPTS
- Tríade de documentos: conteúdo (HTML), design (CSS) e interatividade (JS).
- Abrir o Google Chrome e VS Code.
- Organizar bem uma pasta e arquivos (no meu caso, até no GitHub).
- Criar arquivo ex001.html
- digitar html no corpo do arquivo e selecionar 
- html:5
- Entender a <head> e a <body>, primeiro são configurações, título, etc... 
- "Olá, Mundo!" é a primeira coisa de qualquer código...
- <h1> Tag de título nível 1
- <p> Tag de parágrafo
- <style> Tag de estilo dentro do <head>, que configura geral
- body {background-color: RGB(67, 67, 230)}
- Você não programa em HTML, você não programa em CSS, mas vamos programar em Javascript...
- No final do <body>, antes do </body> vamos adicionar a tag <script> pra rodar depois de carregar todo o body.
- digitar window.alert('Meu primeiro script...');
*/

/*CÓDIGO FINAL DA AULA

Aula_04_ex001.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Primeiro Programa</title>
    <style>
        body {
            background-color: rgb(67, 67, 230);
            color: #FFFFFF;
            font: normal 20pt Arial;
        }
        h1 {
            color: yellow;
        }
    </style>
</head>
<body>
    <h1>Olá, Mundo!</h1>
    <p>Já me livrei da "maldição"...</p>
    Olá, Mundo! Mas aqui é só um texto, sem ser título nem nada... 

    <script>
        window.alert('Minha primeira mensagem...');
        window.confirm('Está gostando de JavaScript?');
        window.prompt("Qual é o seu nome?");
    </script>
</body>
</html>


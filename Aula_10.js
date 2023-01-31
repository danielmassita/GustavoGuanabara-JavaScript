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
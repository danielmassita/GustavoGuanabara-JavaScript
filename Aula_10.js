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

/* 

*/
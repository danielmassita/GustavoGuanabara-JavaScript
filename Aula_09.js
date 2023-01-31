// Aula 09 - Introdução ao DOM - Curso JavaScript #09
// https://youtu.be/WWZX8RWLxIk

/* Você sabe o que significa a sigla DOM? Sabe para que serve o Document Object Model? Sabe como criar uma árvore DOM para o seu site? Sabe como usar o JavaScript para manipular o DOM? Sabe para que servem os elementos Parent e Child em um DOM? Sabe utilizar os métodos getElementByTagName, getElementById, getElementByName, getElementByClassName, querySelector de acesso ao DOM no JavaScript?

Pois, para responder a essas e muitas outras perguntas, assista essa aula do Curso de JavaScript para Iniciantes até o final. E não se esqueça sempre de praticar todas as atividades que fizermos durante o vídeo no seu próprio computador.

Aula do Curso de JavaScript e ECMAScript para Iniciantes, criado pelo professor Gustavo Guanabara para o canal CursoemVideo.*/

/* PERGUNTAS DA AULA ANTERIOR
- Qual a diferença entre =, ==, === escritos em JS? Um igual é atribuição var nome = 'Daniel'. Dois, igualdade do valor do dado, 5 == '5' (true), testa apenas o valor. Três, igualdade estricta 5 === '5' (false), testa também o tipo (typeof). 
- Em uma operação com && e ||, quem eu resolvo primeiro? A ordem de precedência observa negação primeiro (!), depois CONJUNÇÃO (&&) (por ser mais estrita), por fim a disjunção (||) por ser mais ampla. O escopo é do menor pro maior, sendo possível "pegar" SE's anteriores que inviabilizariam "aceites" de SE's posteriores. 
- Sabe usar OPERADOR pra colocar um valor ou outro, dentro de uma mesma variável? Sim. OPERADOR TERNÁRIO é composto por TESTE ? TRUE : FALSE, por exemplo: (idade >= 18) : ("Autorizado.") : ("Desautorizado.") 
*/

/* `${Entrendendo o DOM}`
Na Aula01 já fizemos o uso do DOM. Mas sem entrar em detalhes. Instalar alguns programas no VSCode e Chrome. 

- Live Server (antigo "Watch In Chrome");
- Ctrl+Shift+P (dentro do arquivo do VSCode e no prompt) e digitar > Live Server e escolher entre LIGAR/DESLIGAR, podendo usar Alt+L Alt+O pra usar e Alt+L Alt+C pra desativar.
*/

/* O QUE É O DOM? 
(Document Object Model) - Uma árvore DOM do site,


Ilustração de uma árvore DOM:
               window
       /       |       \
    location document history
               |
              html
            /      \
        head       body
        /  |     / |  | \
    meta title  h1 p p div
                     |
                    strong

começando da raíz (window) e indo pra outas ramificações (location, document, history). No document temos (head, body). No head temos (meta, title). No body temos (h1 p p div). Dentro do segundo p, temos (strong). 

relação de PARENT/CHILD

Dentro de window eu tenho location, document e history. Dentro do document eu tenho html, dividido entre head e body. Dentro de head, meta, title, outros. Dentro de body temos h1, p, p, div. Dentro de um dos p, temos strong. 

Agora poderemos ACESSAR OS COMPONENTES. 

        window.document.write('Olá, Mundo!') // maneira mais simples porém não a melhor pra adicionar componentes...

        window.document.write(window.document.characterSet) // UTF-8 como no head...
        window.document.write(window.navigator.appName) // Google chrome se comportando como Netscape... 
        window.document.write(window.document.URL)

        /*Acesso a vários componentes dentro da árvore DOM para poder escolher como navegar melhor entre os ELEMENTOS...

        Possos selecionar 5 MÉTODOS DE ACESSO pra selecionar um elemento da Árvore DOM. Podem ser:
        - por Marca
            getElementsByTagName()[] - plural, pois temos dois parágrafos, por exemplo, então indicamos o índice, pois temos duas tags <p>... 
        - por ID
            getElementById() - no singular, usando a ID dos elementos que foram marcados no corpo do html...
        - por Nome
            getElementsByName()[] - que tem plural, então pega o índice [0] e etc...
        - por Classe
            getElementsByClassName()[]
        - por Seletor
            querySelector()
            querySelectorAll()[]

            para criar uma nova variável, usando o método do querySelector, posso usar a sintaxe do CSS como exemplo, sendo # para ID e . para classe - querySelector('div#msg') para ID ou então ('div.msg') para uma classe mais ampla.
            O querySelector também ajuda a fazer alterações mais rápidas no site, em termos de performance. E é um método mais recente, então ECMAScript mais antigos não terão suporte. 
/*

/* ANOTAÇÔES DO LUCAS LEAL (YT @LuuuKz1999) 

NOVIDADES:

  O que é DOM?

DOM (Document Object Model), Modelo de Objeto para Documento, é uma *INTERFACE padronizada utilizada para REPRESENTAR um DOCUMENTO HTML. Este modelo utiliza uma linguagem neutra que, por meio de uma árvore hierárquica de diretórios, permite você ACESSAR e INTERAGIR com QUALQUER ELEMENTO de seu DOCUMENTO de maneira DINÂMICA com o uso do JavaScript. Desta forma, o JS tem o poder de:
alterar, excluir e adicionar: elementos HTML, atributos HTML, eventos HTML, estilos CSS.
*Interface, do latim INTER(entre) + FACIES(faces), significa: ligação física ou lógica entre 2 sistemas ou partes que não poderiam ser conectados diretamente.
Ou seja, o DOM é o INTERMEDIADOR da COMUNICAÇÃO da linguagem JavaScript com as tecnologias HTML5 e CSS3.

Ilustração de uma árvore DOM:
                  window
               /        |       \
location document history
                       |
                   html
                    /   \
            head     body
           /  |         / |  | \
  meta title  h1 p p div
                              |
                         strong

Parent (pai)  - é quem está ACIMA na árvore HIERARQUICA.
Child (filho) - é quem está ABAIXO na árvore HIERARQUICA.
É como se fosse uma árvore genealógica. Exemplos:
HEAD e BODY são FILHOS de HTML;
HTML é PAI de HEAD e BODY;
HTML é FILHO de DOCUMENT.

É importante ressaltar que: um DOCUMENTO HTML e sua REPRESENTAÇÃO DOM são a MESMA COISA. A única diferença é que estes estão REPRESENTADOS de FORMAS DIFERENTES. Ex:
("uma garrafa") e ("a bottle") são a MESMA COISA, só que representadas em línguas diferentes. É a mesma ideia.
Caso você altere o DOCUMENTO HTML você também alterará o seu DOM e vice-versa.
____________________________

    Como ACESSAR/SELECIONAR ELEMENTOS através do DOM:
  Lista de 5 MÉTODOS de acesso:
by Tag         - getElementsByTagName("")
by ID            - getElementByID("")
by Name     - getElementsByName("")
by Class      - getElementsByClassName("")
by Selector - querySelector (""); querySelectorAll ("");

O método getElementsByTagName() SELECIONA ELEMENTOS via TAG.
O método getElementById() SELECIONA UM ELEMENTO via ID.
O método getElementsByName() SELECIONA ELEMENTOS via NOME.
O método getElementsByClassName("") SELECIONA ELEMENTOS via CLASSE.
O método querySelector() SELECIONA UM ELEMENTO via SELETOR CSS.
O método queySelectorAll() SELECIONA ELEMENTOS via SELETOR CSS.

*Atente-se que alguns dos seletores estão no SINGULAR e outros no PLURAL (Element e Element*S*)
Caso utilize um seletor que está no PLURAL, para ESPECIFICAR qual TAG, NAME ou CLASS você deseja ACESSAR, você têm que usar, após os parênteses (), os colchetes [] e, dentro destes, você indicará qual a POSIÇÃO do elemento que você deseja ACESSAR.
Ex da aula:
document.getElementsByTagName('p')[1];
Neste exemplo selecionou-se, dentro dos parênteses, todas as tags <p>. E, dentro dos colchetes, selecionou-se a tag <p> que se encontra na 1° POSIÇÃO, ou seja, a 2° tag <p>.
*Lembrando que a contagem começa em 0. Portanto:
a posição 0 é a 1° tag <p>
a posição 1 é a 2° tag <p>
a posição 2 é a 3° tag <p> ...

____________________________

  Diferença entre  .innerText  e  .innerHTML  :

A propriedade  .innerText  serve para DEFINIR ou RETORNAR o CONTEÚDO de TEXTO de um ELEMENTO.

A propriedade  .innerHTML  serve para DEFINIR ou RETORNAR o CONTEÚDO HTML (texto+formatação) de um ELEMENTO.

ILUSTRAÇÃO (crie um outro documento, monte a estrutura básica HTML5 (!+enter) e insira este código dentro do body):

<body>
    <h1>Diferença entre innerText e InnerHTML:</h1>
    <p class="teste_1"></p>
    <p id="teste_2"></p>
    <script>
        var variavel_1 = document.querySelector('.teste_1')
        variavel_1.innerText = "Teste do <strong>innerText</strong>"

        var variavel_2 = document.querySelector('#teste_2')
        variavel_2.innerHTML = "Teste do <strong>innerHTML</strong>"
    </script>
</body>

____________________________

  ALGUMAS DEFINIÇÕES:

*Um OBJETO no JS é um CONTAINER de PROPRIEDADES e MÉTODOS.

*Uma FUNÇÃO no JS é um subprograma que pode receber PARÂMETROS e RETORNAR um resultado. São AÇÕES executadas assim que são CHAMADAS ou em decorrência de algum EVENTO. É um bloco de códigos projetado para executar uma tarefa ou calcular um valor.

*Um MÉTODO é uma FUNÇÃO que é ARMAZENADA como PROPRIEDADE de um OBJETO. Ou seja, MÉTODOS são AÇÕES que podem ser EXECUTADAS em OBJETOS.

*Um EVENTO no JS é uma CONDIÇÃO que, quando verdadeira, fará a CHAMADA de uma FUNÇÃO.

*O Seletor de Classe é representado por:  .
*O Seletor de ID é representado por:  #

*/
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

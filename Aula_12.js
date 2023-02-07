// Aula 12 - Condições (Parte 2) - Curso JavaScript #12
// https://youtu.be/EEStcIe8rAM

/* Você sabe mudar a cor de fundo de um site, dinamicamente, usando JavaScript? Sabe como inserir uma imagem usando JavaScript em um site, sem ter a tag img previamente definida? Sabe como utilizar condições simples (if), condições compostas (if..else), condições aninhadas (if..elseif..else) e condições múltiplas (switch..case) em JavaScript?

Pois, para responder a essas e muitas outras perguntas, assista essa aula do Curso de JavaScript para Iniciantes até o final. E não se esqueça sempre de praticar todas as atividades que fizermos durante o vídeo no seu próprio computador.

Aula do Curso de JavaScript e ECMAScript para Iniciantes, criado pelo professor Gustavo Guanabara para o canal CursoemVideo. */

/* PERGUNTAS AULA ANTERIOR

- Você sabe utilizar a extensão "Node Exec" no VSCode? Temos que selecionar o código a ser testado, e apertar o F8/F9 (iniciar/finalizar) para rodar no terminal apenas o trecho selecionado.

- Você sabe criar uma condição em JavaScript (e operadores relacionais, ==, ===)? Sim, a condição em JS é descrita assim (abaixo). Códigos com igualdade restrita === vão testar a condição inclusive para o valor do dado E TAMBÉM o tipo (typeof). Porém, com igualdade == apenas o valor do dado será testado. Por exemplo:

    if (condição) {
        códigos para true...
    } else {
        códigos para false...
    }

- Consegue diferenciar condições SIMPLES e condições COMPOSTAS? 

if (condição1 == true) {
    código de ação Z aqui
} // caso contrário, nada de especial acontece e o código segue o fluxo, sem ter executado a ação Z se for FALSA a condição1...

if (condição 2 == true) {
    código de ação A aqui para TRUE...
} else {
    código de ação B aqui para FALSE...
} // a condição composta vai dar uma alternativa de execução B pra quando a premissa for falsa... */


/* `${`Condições em JS} - CONDIÇÕES Parte 2`

- Praticar SEMPRE! 
- Revisando: Condição Simples + Condição Composta. CONDIÇÃO SIMPLES (eu tenho um IF e se a condição for TRUE, executa bloco códigos). Se for a CONDIÇÃO COMPOSTA (eu tenho um IF e se a condição for TRUE, executa o bloco de códigos, ELSE e a condição for FALSE executa outro bloco de código). 

CONDIÇÃO SIMPLES
    if (condição) {
        [   true    ]
    }

CONDIÇÃO COMPOSTA
    if (condição) {
        [   true    ]
    } else {
        [   false   ]
    }

- Quando a condição Simples/Composta fica muito confusa, podemos usar outras ferramentas... 

- CONDIÇÕES ANINHADAS (nest)

- Vamos usar uma CONDIÇÃO COMPOSTA e colocar outras condições internamente com vários níveis... 

    if (condição) {
        [bloco1]
    } else {
        if (condição2) {
            [bloco2]        // bloco2 só executa se a cond1 for falsa!
        } else {
            [bloco3]        // se cond1 && cond2 == false, exec. bloc3
        }
    }


- CONDIÇÕES MÚLTIPLAS (SWITCH-CASE-BREAK) 

- A condição múltipla serve pra condições múltiplas, principalmente para VALORES FIXOS. Ela não ajuda com INTERVALOS DE VALORES (bom dia, tarde, noite), mas pra eventos PONTUAIS e VALORES FIXOS é ótima (). Ao invés de valores BOOLEANOS, trabalhaos com conidionais de valores FIXOS. 

EXPRESSÃO
    teste1
    teste2
    teste3
    teste4
VOLTA

ILUSTRAÇÃO

    [   EXPRESSÃO   ]
/       |       |       \
A       B       C       D
\       |       |       /
    [   VOLTA FLUXO ]

- É muito útil para situações pontuais e específicas.


switch (expressão) {
    case valor 1:
        [       ]
    case valor 2:
        [       ]
    case valor 3:
        [       ]
    default:
        [       ]
}

- Dentro da estrutura Switch, proveniente da Linguagem C, dentro de cada bloco de código, é OBRIGATÓRIO usar um 'BREAK', na última é opcional, mas vamos usar sempre.

switch (expressão) {
    case valor 1:
        [       ]
        break
    case valor 2:
        [       ]
        break
    case valor 3:
        [       ]
        break
    default:
        [       ]
        break
}

A expressão vai testar a condição, digamos pra valor 2, vai executar o bloco do valor 2, vai executar o BREAK e vai sair do SWITCH, continuando ao final do código.

*/
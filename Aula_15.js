// Aula 15 - Variáveis Compostas
// https://youtu.be/XdkW62tkAgU

/* MÓDULO F - Avançando nos Estudos
- Variáveis Compostas (arrays)
- Uso de Funções e Eventos (function, method, event)
- Passagem de Parâmetros
- Exercícios Arrays, Vetores, funcionalidades...
- Próximos Passos...

*/

/* PERGUNTAS AULA ANTERIOR 
1) Já treinou bastante o uso das estruturas de repetição while, do..while, for? 
2) Aprendeu como manipular objetos de formulários HTML usando JS? 
3) Seria bom tornar seus códigos menores e mais simplificados? 
4) Você já ouviu falar por alguém que "array é difícil"? 

1) Sim, podemos revisar com um contador básico:*/
var c = 1
while (c <= 5){
  console.log(`Contando ${c}...`)
  c++
}
console.log('Fim.')

c = 1
do {
  console.log(`Contando ${c}...`)
  c++
} while (c <= 5)
console.log("Fim.")

for (c = 1; c <= 5; c++){
  console.log(`Contando ${c}...`)
} 
console.log(`Final.`)

/*
2) Sim, podemos usar algumas estruturas básicas... */

// CONTADOR COM INPUTS NO HTML
function contar(){
    let ini = window.document.getElementById('txti') // Pega o input do usuário no formulário inicial e atribui uma variável no JS...
    let fim = document.getElementById('txtf') // Pega o input do usuário no formulário final e atribui uma variável no JS...
    let passo = document.querySelector('#txtp') // Pega o input do usuário no formulário passo e atribui uma variável no JS...
    let res = document.getElementById('res') // Pega a <div id='res'> pra poder trabalhar essa área dinamicamente do JS...

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) { // Validação de dados para que o formulário nunca esteja vazio...
        res.innerHTML = 'Impossível contar!' // Utiliza a variável res, e retorna dentro do HTML uma alteração dinâmica, no caso a string com o erro...
    
    } else { // Caso contrário ao IF de erro, seguimos com o código abaixo...
        res.innerHTML = `Contando: <br>` // Colocar um texto dinamicamente no HTML, aparece 'Contando: ' e depois uma quebra de linha <br> em tag de html...
        let i = Number(ini.value) // Nova VAR já com type Number proveniente do valor literal da variável ini que puxou dados do html formulário...
        let f = Number(fim.value) // Nova VAR já com type Number proveniente do valor literal da variável fim que puxou dados do html formulário...
        let p = Number(passo.value) // Nova VAR já com type Number proveniente do valor literal da variável passo que puxou dados html formulário...

        if (p <= 0) { // Nova validação de erro, se o passo for 0 ou negativo...
            window.alert('Passo inválido. Considerando PASSO 1') // Aviso de erro em prompt... 
            p = 1 // Alternativa pro código não quebrar... O próprio dev atribui um valor válido pra variável...
        }

        if (i < f) { 
            // Contagem crescente...
            for (let c = i; c <= f; c += p){ // O loop começa sendo o contador o valor inicial, o teste o valor final, e o c ser atualizado no valor cf. p...
                res.innerHTML += `${c} \u{1F449} ` // No final do res, na div do html, será incluído no HTML via JS o valor do número inicial/iterador + UNIcode...
            }
            res.innerHTML += `\u{1F3C1}`   // Unicode final ao término do loop, usando o emoji da bandeira de fim...
        } else if (i > f) { 
            // Contagem regressiva...
            for (let c = i; c >= f; c -=p){ // Validação negativa, se o número inicial for maior que o final, ao invés de somar o iterador, a gente subtrai um passo do iterador, que diminui o valor até sair da condição...
                res.innerHTML+= ` ${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        }
    }
}


// TABUADA COM RETORNO NA TABELA DO OPTION

function tabuada(){
    let num = document.getElementById('txtn') // var num recebe o input do usuário 'txtn' do html...
    let tab = document.getElementById('seltab') // var tab recebe o 'seltab' da estrutura do html sendo <select>, <option>... 

    if (num.value.length == 0) { // Validação de dados pra evitar input vazio do usuário...
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value) // atribui nova variável pra trabalhar n, sendo o Number(num.value) puxado² do html...
        let c = 1 // Seta o contador pro valor inicial, e ainda ajuda a montar a tabuada pois vai se repetir com o iterador...
        tab.innerHTML = '' // Cria dinamicamente um novo texto '' dentro do HTML na área da tabela <select>...
        while (c <= 10) {
            let item = document.createElement('option') // Uma nova variável chamada item CRIA um novo elemento dentro do tab, do tipo 'option'
            item.text = `${n} x ${c} = ${n*c}` // O texto do elemento (item.text) passa a ser a template string dizendo 1 x c = resultado... De 1 a 10...
            item.value = `tab${c}` // faz muito sentido o item com value pro PHP // Atribuímos o valor e nome de cada novo item sendo tab1, tab2, tab3, cf. iterador.
            tab.appendChild(item) // Ao final, adiciona um novo 'item' ao final, pra que na próximo loop, isso já se repita em uma nova <option>tab2 e etc...
            c++ // Incremento do valor do contador/iterador...
        }
    }
}

/*
3) Lógico! Menos é mais! Mais orgânico, clean e minimalista....

4) Sim, mas ainda não entendi o motivo...

*/

/* AULA 15 - VARIÁVEIS COMPOSTAS EM JAVASCRIPT 

- O que é uma variável composta? 
- VARIÁVEL SIMPLES é uma variável que só consegue armazenar um único valor por vez, sendo necessário perder esse valor pra atribuir um novo...
- VARIÁVEIS COMPOSTAS devem ser capazes de armazenar vários valores em uma mesma estrutura.
- No exemplo do terreno pro estacionamento, tínhamos várias vagas de automóveis e colocamos um identificador (a0, a1, a2...), isso consome muito código na hora de programar...

vaga a1 = 
vaga a2 =
vaga a3 = 
vaga a4 = 
vaga a5 = 

- Precisamos remover um carro da vaga pra ficar livre e depois colocar outro carro. Não posso ter dois carros na mesma vaga... Mas o código, se tiver muitos carros, ficará enorme...
- Todas as vagas serão então denominadas em conjunto:

vaga a = [] //

- Para cada vaga, vamos usar um índice (sempre começam em zero)... E vamos declarar com COLCHETES [] pra adquirir o typeof de OBJECT (array).

vaga a = [    ,     ,    ]
vaga a = [carroX, carroY, carroZ] 
// cada vaga possui um índice, a[0], a[1]. a[2].

- A variável a é uma VARIÁVEL COMPOSTA, ou um VETOR (em inglês, um ARRAY)...
- Vetor é uma variável com vários espaços, que no caso, são compostos de ELEMENTOS...
- ELEMENTO é um par que agrupa o espaço da memória, o valor dentro dele e o índice/chave (key)...
- Por último, temos o conteúdo (VALOR) de cada elemento.

"Um array ou vetor ou variável composta é uma variável que tem vários elementos, cada elemento é composto por seu valor e uma chave de identificação."
*/

let num = []
// let num = [    ,     ,     ]
let num = [5, 8, 4]

// O elemento zero tem o valor 5. O elemento um tem o valor 8. O elemento dois tem o valor 4.

/* MÃO NA MASSA!!! AMBIENTE.JS */

let num = []
num = [5, 8, 2]
console.log(`O nosso número no array é o ${num[0]}.`)
console.log(`O nosso número no array é o ${num[1]}.`)
console.log(`O nosso número no array é o ${num[2]}.`)



*/

*/

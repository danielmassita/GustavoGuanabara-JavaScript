// Aula 15 - Variáveis Compostas
// https://youtu.be/XdkW62tkAgU

/* MÓDULO F
- 
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
    let num = document.getElementById('txtn') // 
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` // faz muito sentido o item com value pro PHP
            tab.appendChild(item)
            c++
        }
    }
}

/*
3) Lógico! Menos é mais! Mais orgânico, clean e minimalista....

4) Sim, mas ainda não entendi o motivo...

*/

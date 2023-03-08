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

/* 
Lucas Leal
há 3 meses (editado)
RELEMBRANDO:

  O que é uma VARIÁVEL?
É um ESPAÇO VAGO, dedicado dentro da memória do computador, que permite você ARMAZENAR DADOS.

    NOVIDADES:

  Diferença entre VARIÁVEL SIMPLES e (VARIÁVEL COMPOSTA || ARRAY || VETOR):

Uma variável SIMPLES só consegue armazenar UM VALOR por vez. Syntax:
let identificador = valor

Uma variável COMPOSTA é capaz de armazenar VÁRIOS VALORES em uma MESMA ESTRUTURA. Syntax:
let identificador = [valor, valor, valor]

    Exemplo:
let num = [5, 8, 4]
                   0  1  2 (posições)

  Nesta array há:
3 ELEMENTOS (elemento é conjunção de: VALOR && POSIÇÃO)
com VALORES 5, 8 e 4, respectivamente.
o valor 5 está na POSIÇÃO 0;
o valor 8 está na POSIÇÃO 1;
o valor 4 está na POSIÇÃO 2.
*posição == índice == chave == key

  Para ADICIONAR um NOVO VALOR à esta ARRAY em uma POSIÇÃO ESPECÍFICA:
num[3] = 6
  Ou seja:
ATRIBUA o VALOR "6" na POSIÇÃO 3.
Agora  num  vale: [5, 8, 4, 6]

  Para ADICIONAR um NOVO VALOR à esta ARRAY na ÚLTIMA POSIÇÃO:
num.push(7)
  Ou seja:
ATRIBUA o VALOR "7" na ÚLTIMA POSIÇÃO.
Agora  num  vale: [5, 8, 4, 6, 7]

  Para RETORNAR o COMPRIMENTO desta ARRAY:
num.length
  Ou seja:
RETORNE a QUANTIDADE de ELEMENTOS/KEYS da ARRAY  num  .
O valor retornado é: 5

----------

  Para ORDENAR CRESCENTEMENTE os ELEMENTOS/VALORES desta ARRAY:
num.sort()
  Ou seja:
Agora  num  vale: [4, 5, 6, 7, 8]

ATENÇÃO: este método apresenta algumas PECULIARIDADES que podem gerar CONFUSÃO ao tentar ordenar tanto STRINGS quanto NUMBERS. O que ele faz EXATAMENTE: O método  sort()  TRANSFORMA os ELEMENTOS de um ARRAY em STRING e depois, utilizando o sistema de Codificação de Caracteres UTF-16 (Unicode Transformation Format 16-bit), COMPARA a UNIDADE de CÓDIGO de CADA CARACTERE, em seu formato DECIMAL (Unicode Decimal Characters), ordenando-os CRESCENTEMENTE. Simplificando: cada caractere têm um número que o representa (indo de 0 à 65535). Ex: "e" = 101; "L" = 76, "Z" = 90, etc. O  sort()  irá ORDENAR os CARACTERES com base NESTES NÚMEROS, e não com base nos CARACTERES em SI. Por isso é um ordenamento CRESCENTE, e não ALFABÉTICO e nem NUMÉRICO. Para ver a tabela, jogue no Google:  "Unicode Table (Decimal)"  . Copie, cole e rode este código para ver EXEMPLOS:

// Vamos ORDENAR CRESCENTEMENTE os VALORES de  array  e EXIBIR no CONSOLE os VALORES ORDENADOS e seus respectivos CÓDIGOS UNICODE.
let array = ['b', 'p', 'c', 'a']
array.sort()
console.log("ORDENADO:", array)
for (let x in array) {
    console.log(`LETRA: ${array[x]} CÓDIGO: ${array[x].charCodeAt(0)}`)
}
// Os códigos foram ORDENADOS de maneira CRESCENTE. Mas os CARACTERES TAMBÉM ficaram em ORDEM ALFABÉTICA, por quê? Se você observar a tabela que mencionei anteriormente, verá que os CÓDIGOS dos CARACTERES que compõem o ALFABETO em MINÚSCULO estão DISPOSTOS de maneira CRESCENTE, começando no  "a" = 97  e terminando no  "z" = 123. Devido a ESTA DISPOSIÇÃO, os CARACTERES ficaram TAMBÉM em ORDEM ALFABÉTICA.

console.log('----------')

// Vamos ALTERAR o "p" MINÚSCULO para "P" MAIÚSCULO e REPETIR o PROCESSO.
array = ['b', 'P', 'c', 'a']
array.sort()
console.log("ORDENADO:", array)
for (let x in array) {
    console.log(`LETRA: ${array[x]} CÓDIGO: ${array[x].charCodeAt(0)}`)
}
// O "P" MAIÚSCULO foi exibido ANTES de TODOS os outros CARACTERES MINÚSCULOS, por quê? Pelo mesmo motivo. O ALFABETO em MAIÚSCULO começa no  "A" = 66  e  termina no  "Z" = 90  . Ou seja, TODOS os CARACTERES MAIÚSCULOS aparecerão ANTES dos MINÚSCULOS.

console.log('----------')

// E com os NÚMEROS é a QUASE a MESMA COISA. Eles são CONVERTIDOS em STRING e considera-se apenas o CÓDIGO do 1° CARACTERE. Os códigos começam no  "0" = 48  e  terminam no  "9" = 57  .
const numeros = [99, 25, 100]
numeros.sort()
console.log("ORDENADO:", numeros)
for (let x in numeros) {
    console.log(`NÚMERO: ${numeros[x]} CÓDIGO: ${String(numeros[x]).charCodeAt(0)}`)
}
// ↑ Faça o teste: ACRESCENTE os valores  9, 2, 1  dentro do array  numeros  e rode. Você verá que os códigos são IGUAIS, porque o  sort()  só considera o 1° caractere.

console.log('----------')

// Como então ORDENAR os números CORRETAMENTE, tanto CRESCENTEMENTE quanto DECRESCENTEMENTE? A sintaxe do método  sort()  permite que se use uma FUNÇÃO de COMPARAÇÃO como PARÂMETRO. Syntax:  array.sort(compareFunction)  . Esta função DEVE RETORNAR um valor POSITIVO, NEGATIVO ou ZERO. Ex:
const numbers = [40, 100, 1, 5, 25, 10]
numbers.sort((a, b) => a - b)
console.log("ORDENADO:", numbers)
/* O que aconteceu:
 a  - b   = returned value
100 - 1   = 99 [40, 1, 100, 5, 25, 10]
100 - 5   = 95 [40, 1, 5, 100, 25, 10]
100 - 25  = 75 [40, 1, 5, 25, 100, 10]
100 - 10  = 90 [40, 1, 5, 25, 10, 100]
40 - 1    = 39 [1, 40, 5, 25, 10, 100]
40 - 5    = 35 [1, 5, 40, 25, 10, 100]
40 - 25   = 15 [1, 5, 25, 40, 10, 100]
40 - 10   = 30 [1, 5, 25, 10, 40, 100]
25 - 10   = 15 [1, 5, 10, 25, 40, 100] ←  numbers  ORDENADOS CRESCENTEMENTE.

Quando o VALOR RETORNADO é NEGATIVO, então ORDENA-SE:  a  ANTES  de  b  
Quando o VALOR RETORNADO é POSITIVO, então ORDENA-SE:  a  DEPOIS de  b

Ou seja, os NÚMEROS RETORNADOS só tem UM PROPÓSITO, saber se é: POSITIVO, NEGATIVO ou ZERO. O valor em si não importa. O nome disso é: Lei da Tricotomia ou Three Way Comparison.

*Eu OMITI TODOS os resultados NEGATIVOS porquê, além do fato de que iria ficar GIGANTESCO, quando isto acontece, NADA ACONTECE. Ilustração:  a(1) - b(5)  RETORNARÁ  -4 (negativo)  . POSICIONAR o  a  ANTES  do  b  não vai mudar nada, porque ele já está antes do  b  .

*Para ORDENAR DECRESCENTEMENTE, basta mudar o código da função de  a - b  para  b - a  . Ilustração:  b(1) - a(5)  RETORNARÁ  -4 (negativo)  . Então o  a  será POSICIONADO ANTES de  b  .

----------

  Para BUSCAR um VALOR dentro desta ARRAY:
num.indexOf(7)
  Ou seja:
RETORNE a CHAVE/ÍNDICE do VALOR 7.
O valor retornado é: 3
*Caso seja passado um número INEXISTENTE como PARÂMETRO, o valor retornado será: -1

    ESTRUTURA de REPETIÇÃO: for/in (para/em)

Esta estrutura faz um LOOP ATRAVÉS das PROPRIEDADES de um OBJETO ou ARRAY. Syntax:
for (key in object) {}
for (key in array) {}

  Ilustração (crie um documento HTML, cole este código e rode no seu navegador):

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>for in</title>
</head>
<style>
    body {
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
</style>
<body>
    <p id="demo"></p>
</body>
<script>
    txt = "<h2>Ilustração de for in ATRAVÉS de um ARRAY:</h2>"

    const numeros = [45, 4, 9, 16, 25]

    for (let x in numeros) {
        txt += `índice: ${x} | valor: ${numeros[x]} <br>`
    }

    /* Lê-se: PARA(for) cada POSIÇÃO(x) NO(in) ARRAY(numeros) {execute este bloco}

    inseriu-se no 1° placeholder: a CHAVE(x);
    Foi exibido: a CHAVE de CADA PROPRIEDADE do OBJETO.

    PERCEBA: em ARRAYS, a CHAVE é o ÍNDICE de cada ELEMENTO (chave:valor == índice:valor).

    inseriu-se no 2° placeholder: o ARRAY(numeros) na POSIÇÃO de x;
    Foi exibido: o VALOR de CADA PROPRIEDADE do OBJETO. 
    
    LEMBRE-SE:
    TODO ARRAY É UM OBJETO. MAS NÃO TODO OBJETO É UM ARRAY. 

    //----------------------------------------

    txt += "<h2>Ilustração de for in ATRAVÉS de um OBJETO:</h2>"

    const pessoa = {nome: 'Elon', Snome: 'Musk', idade: 51}
    
    for (let x in pessoa) {
        txt += `chave: ${x} | valor: ${pessoa[x]}<br>`
    }

    /* Lê-se: PARA(for) cada POSIÇÃO(x) NO(in) OBJETO(pessoa) {execute este bloco}

    inseriu-se no 1° placeholder: a CHAVE(x);
    Foi exibido: a CHAVE de CADA PROPRIEDADE do OBJETO.
    
    PERCEBA: em OBJETOS, a CHAVE é o NOME dado à cada PROPRIEDADE (chave:valor == nome:valor).

    inseriu-se no 2° placeholder: o OBJETO(pessoa) na POSIÇÃO de x;
    Foi exibido: o VALOR de CADA PROPRIEDADE do OBJETO. 

    txt += "<br><strong>*posição == índice == chave == key</strong>"

    document.getElementById('demo').innerHTML = txt
</script>
</html>
*/

/* TRANSCRIÇÃO
0:00
Antes de começar as aulas que é muito importante responde para você mesmo: você já treinou bastante uso das estruturas de repetição whille, do..wille e for? Já fez todos os exercícios
0:11
que acabaram de passar na aula 14? E por falar em exercícios que acabaram de passar, você já aprendeu a manipular objetos em HTML utilizando JavaScript?
0:20
Principalmente os objetos de formulário porque você vai precisar bastante quando você tiver trabalhando
0:25
na construção de um site que exija JavaScript para a validação de dados por exemplo, outra coisa seria interessante você dar uma reduzida, uma simplificada, uma otimizada nos seus códigos?
0:36
Agora que a gente já viu um pouquinho do básico, fazer mais escrevendo menos e uma pergunta muito
0:42
importante: você é daquele tipo de pessoas que pensam assim "ah não usar array é muito difícil trabalhar
0:48
com vetores é complicadíssimo nas linguagens de programação"? Ou você passou no seu colégio e faculdade por aquele tipo de gente que olha pra você no fundo dos olhos e diz: "ah você está aprendendo
0:57
a programar não é? Espera só chegar até array, espera aprender a utilizar vetores e você vai ver o que é difícil",
1:03
pois eu estou te avisando não tem nada de difícil e se você quer aprender de uma vez por todas
1:09
a utilizar vetores exemplificando aqui com o JavaScript é só você assistir esse vídeo até o final.
1:15
Legendas:Tainá Bandeira
1:28
Olá pequeno Gafanhoto, seja bem vindo a mais uma aula do seu Curso em Vídeo de JavaScript
1:33
totalmente patrocinado pelo Google, o meu nome é Gustavo Guanabara, eu sou professor e agora durante a aula 15 nós vamos começar a trabalhar com variáveis compostas
1:42
na linguagem JavaScript e se nesse momento você está pensando assim: " o que é uma variável composta?"
1:48
Pois é só você analisar o nome é muito simples de entender, eu não entendo sinceramente aquilo que
1:53
eu falei no início do vídeo, a galera falando que utilizar variáveis compostas, utilizar arrays
1:58
é uma coisa complicada não é, mas pra eu te provar que utilizar variáveis compostas é uma coisa muito simples,
2:04
vamos entender a diferença entre variáveis simples variáveis compostas. Como a gente já viu durante as aulas anteriores, toda aula a gente usou variáveis,
2:12
variáveis simples só consegue armazenar um valor por vez, então quando você cria uma variável com var
2:18
ou com let, você criou uma variável N e essa variável N recebe 5 por exemplo, sua variável está valendo 5,
2:24
se por acaso você tentar atribuir 8 a ela, ela vai perder o 5 isso porque é uma variável simples
2:30
e variáveis simples só aguarda um valor por vez e você não precisa nem pensar muito para chegar a conclusão
2:36
do que uma variável composta, uma variável composta deve ser capaz de armazenar vários valores em uma mesma estrutura, isso é você colocou 5 ela guarda, você colocou 8 ela guarda também,
2:46
vai colocar um 12 ela guarda também, isso é ela não vai perder os valores anteriores para poder guardar
2:51
os próximos valores esse é um conceito fundamental de variáveis compostas. Mas pra te explicar direitinho daquele jeito que a gente sempre faz, vamos para a tela cheia
3:00
e para dar uma relembrada num conceito, num exemplo prático que eu te dei lá anteriormente na aula de variáveis.
3:07
♫ Você deve se lembrar muito bem do exemplo que a gente viu anteriormente naquele lance do terreno
3:14
para fazer um estacionamento, a gente tinha um terreno exatamente como está aqui e a gente colocava várias vagas de automóveis, a gente delimita para poder caber dentro de uma vaga apenas um automóvel,
3:24
nós fizemos isso durante as aulas de variáveis e para facilitar para eu saber onde que eu guardei o carro,
3:29
eu coloco um identificador, um nome para cada uma dessas vagas, eu coloquei aqui do lado do a0 até o a5, só que isso consumia muito código na hora que a gente
3:41
programava, quando a gente precisa de muitas variáveis em um programa, ela consome muito código a gente tem que escrever muito então por exemplo para declarar essas vagas que estão aqui do lado
3:49
representadas, eu tenho que colocar vaga várias vezes que seria o nosso var ou let
3:54
e eu tenho que colocar o nome de cada um dos indicadores de a0 até a5, agora você imagina que
4:00
sejam 200 vagas, imagina o tamanho do código que iria aparecer aqui do meu lado, a partir do momento
4:06
em que eu declarei essas variáveis, que declarei essas vagas de estacionamento, eu consigo colocar
4:11
automóveis ali dentro sem problema nenhum e a gente viu durante as aulas de variável, se você não viu aperta aqui em cima da minha cabeça, vai para o curso completo e acessa aula de variáveis,
4:21
não esquece disso! A gente naquele momento utilizou o código maior e eu nem me lembro se durante a aula eu prometi reduzir
4:27
esse código mas a gente vai reduzir a partir de agora, naquela aula também eu coloquei um carro na vaga a2,
4:34
se por acaso eu quiser colocar outro carro na vaga a2 eu sou obrigado a tirar esse daqui, isso porque elas são variáveis simples e se eu quiser colocar em outra vaga que esteja livre por exemplo a1,
4:45
tem uma vaga ali eu posso colocar sem problema porque a vaga está livre mas qualquer vaga se eu quiser colocar outro carro eu tenho que tirar um carro que por ventura esteja lá.
4:53
Acho que você entendeu isso lá durante a aula de variáveis, o que eu vou fazer agora é propor uma outra forma em que você vai escrever menos e vai ser muito mais fácil para você gerenciar os automóveis
5:04
que estão nessas vagas. Eu não vou dar mais um identificador pra cada uma das vagas que estão aparecendo aqui do lado, eu vou chamar elas todas pelo mesmo nome,
5:12
então eu vou traçar uma linha aqui, dá uma olhada nessa linha azul que eu tracei, todas essas vagas vão se chamar a, que são vagas para automóveis, por isso que eu coloquei o a.
5:21
Nunca se esqueça pequeno Gafanhoto coloque nomes claros para suas variáveis, não adianta ficar sendo
5:27
programador alfabeto abcdef para todas as variáveis e nem o o programador contador n1,n2,n3,n4,
5:34
aqui eu utilizei a porque é uma vaga de automóveis poderia ser "auto" por exemplo também,
5:39
você escolhe o nome contanto que ele seja claro pra você. Sendo assim eu estou com as vagas a e você vai falar: "mas não tem a identificação de cada vaga",
5:48
tem sim porque essa variável grandona é a minha variável a e eu vou colocar um identificador de índice,
5:55
uma chave que vai identificar cada uma delas e para declarar essas vagas eu só vou usar uma linha,
6:00
"vaga a" e para cada vaga eu coloco uma chave, um índice, exatamente o que acabou de acontecer aqui
6:06
na animação e aí você pode estar pensando: "ah mas deu no mesmo", não é exatamente no mesmo, eu simplesmente escrevi muito menos, agora eu continuo tendo do a0 até o a5,
6:17
só que eu vou escrever de uma forma um pouco diferente, utilizando colchetes, já você vai ver, o que eu quero é que você entenda que antes eu utilizei um monte de linha para declarar, agora eu só
6:26
utilizei uma e para que eu faça essa variável funcionar como uma variável composta que é exatamente isso
6:32
que acabei de explicar, essa é uma variável única chamada "a" que guarda vários valores identificados
6:37
por uma chave que é a identificação de cada vaga, pra eu declarar isso em JavaScript, é muito simples!
6:44
É só eu colocar isso aqui: vaga a = [ ] e é claro que não é só colocar assim, porque se você olhar aqui eu tenho carros nas vagas como é que
6:53
eu declaro uma variável desse tipo e já coloca os carros na vaga, simples dá uma olhada aqui, eu vou colocar:
6:59
vaga a = [ , ] e vou colocar 3 áreas ali, se você identificar dentro dos colchetes eu tenho 3 espaços
7:07
para colocar carros, é só eu colocar os carros ali, automaticamente quando eu faço isso ele já vai
7:12
arrumando os carros nas vagas. Basicamente o que vai acontecer é eu vou declarar uma variável a, olha lá embaixo como é que tá acontecendo,
7:19
só que essa variável a é um pouco mais espaçosa, isso porque ela vai ter que ser dividida em 3 partes,
7:25
no caso pela declaração ali em cima, não precisa ser sempre 3 partes, pode ser quantas partes você precisar,
7:30
quando eu faço aquela linha que está ali em cima, vaga a abre colchete e coloca os 3 carros, automaticamente
7:36
os 3 carros vão para essas vagas, vão para esses espaços e cada espaço desse recebe uma identificação,
7:43
recebe um número que a gente chama de chave ou índice então coloquei ali embaixo de vermelho os números, então eu tenho a0 que está com o primeiro carro, a1 que está com o segundo carro e a2 que está
7:54
com o terceiro carro, aquele menorzinho. E uma observação muito importante, geralmente as pessoas que estão começando se enrolam um pouco
8:02
porque as variáveis compostas na maioria das linguagens de programação começam com índice 0, geralmente a gente pensa assim: a primeira vaga é a vaga 1, só que na programação, já acostume-se
8:11
com isso, tem várias linguagens de programação que funcionam assim, a primeira vaga não é a vaga 1, é a vaga 0, então uma variável composta de 10 posições não vai de 1 a 10, vai de 0 a 9 acostume-se com isso.
8:23
E vamos aproveitar que a gente já está aqui com esse desenho na tela e vamos dar nome aos bois, vamos começar a dar nome às coisas, essa variável composta que a gente declarou, essa variável a
8:33
ela é uma variável do tipo composta ou array ou em português vetor, então sempre que você pensar assim:
8:39
"ah o vetor tal", vetor é uma variável com vários espaços, exatamente como está representada aqui embaixo,
8:45
o vetor ele é composto de elementos, um elemento de um vetor, ele é um par que agrupa o espaço da memória,
8:53
o valor colocado dentro dele e o índice. E por falar em índice, índice é esse número que está aqui embaixo também pode ser chamado de chave
9:00
ou inglês key e por último aqui no nosso componente está o conteúdo de cada elemento,
9:06
então analisando esse gráfico que tem na sua tela fica muito simples, um array ou um vetor
9:11
ou uma variável composta é uma variável que tem vários elementos, cada elemento é composto por seu valor e por uma chave de identificação.
9:20
Aproveita que você está com o caderno na mão que eu sei e a nota essa frase é muito importante
9:25
e se você não pegou a frase é só você voltar um pouquinho no vídeo e anota ela vai ser muito importante
9:31
mas pra frente pra você. E como é que eu faço isso aqui que aconteceu com carros acontecer em JavaScript?
9:37
Muito simples o que está vaga vira var ou então vou fazer um pouco mais moderno, let
9:42
então vou colocar: let num = [, é uma variável composta então ela não vai guardar um número,
9:48
ela vai guardar vários números, sendo assim essa linha que apareceu vai declarar uma variável num
9:54
que é um pouquinho mais larguinha, um pouco mais gordinha, dentro dos colchetes que estão aqui em cima eu vou utilizar vírgulas para separar os elementos, nesse caso mais uma vez eu separei 3 espaços
10:04
mas na prática eu separo mais pra você quando eu separo 3 espaços automaticamente ele vai dividir
10:10
essa variável em 3 partes e já vai dar os índices exatamente como aconteceu ali, lembrando o primeiro índice não é 1, é 0, vou colocar o primeiro valor ali, vou escrever 5 o que vai acontecer?
10:20
O 5 vai primeiro espaço, vou colocar o segundo valor 8 e 8 foi para o espaço 1, vou colocar mais um valor 4
10:26
e o 4 vai pro espaço 2, sendo assim acabei de representar que um vetor de 3 elementos,
10:32
elementos 0, 1 e 2 que tem os valores 5, 8 e 4. Facinho de entender mas você não precisa
10:39
acreditar em mim não, você vai abrir o seu Visual Studio Code e vamos começar a praticar.
10:45
Então vamos abrir o VS Code e dentro do VS Code, vamos criar primeiro a nossa pasta da aula 15,
10:51
vamos vir aqui em cima "New Folder" e eu vou criar a aula 15, dentro de aula 15 eu vou criar um documento,
10:58
posso vir aqui para criar um documento ou dentro da aula 15, botão direito "New File" vou colocar:
11:03
ambiente.js, porque eu vou utilizar aquela nossa extensão que quando aperta f8 ela já executa,
11:10
se você não sabe é por que você pulou alguma aula, não adianta você vir aqui só para tentar aprender array não,
11:15
o curso está bem completo, bem passo a passo e você precisa assistir tudo. Então já posso encolher aqui, fechar o "Welcome" e vou ficar aqui com o meu ambiente,
11:23
vamos começar criando o nosso primeiro vetor vamos colocar o var ou let, vou colocar let
11:28
e vou chamar de num então acabei de criar uma variável num aqui, certo, vamos tentar mostrar aqui:
11:34
console.log(num), vamos mostrar o num na tela e pra executar vamos apertar F8
11:40
e ele mostrou lá que está vazio, ele mostrou que o num é uma variável vazia.
11:45
Eu posso até utilizar as crases para utilizar nossa template string, vamos colocar aqui:
11:51
console.log('Nosso valor é o $(num)') vamos executar, F8, "Nosso valor é o" e está vazio lá, vamos colocar valores aqui 5, 8, 2, 9 e 3
12:03
viu? Já coloquei vários valores não só um, vamos executar, "Nosso vetor é 5, 8, 2, 9 e 3"
12:10
e já colocou os valores aqui separados por vírgula, se por acaso você só colocar o num sem template string,
12:16
na hora de executar ele ainda acrescenta os colchetes [5, 8, 2, 9 e 3] sem problema nenhum,
12:22
acabei de criar meu vetor mas você pode me perguntar: "tá Guanabara e se eu quiser acrescentar um valor,
12:27
por exemplo, eu não quero perder os valores que estão lá e eu quero acrescentar um valor dá pra fazer isso?" e eu te respondo dá sim e é muito fácil, vamos voltar pra nossa tela com o gráfico desenhado.
12:38
Então estamos aqui exatamente onde a gente parou, está o vetor aqui com 5, 8 e 4
12:43
e você percebe que os índices são 0, 1 e 2, se eu quiser acrescentar a vaga 3, se eu quiser acrescentar
12:50
mais um espaço é muito simples, é só fazer assim: num[3] = 6 quando eu coloco num e entre colchetes eu coloco 3, eu estou dizendo assim para o JavaScript:
12:59
coloque o valor 6 na posição 3, só que a posição 3 se você olhar um gráfico não existe,
13:04
o JavaScript percebe isso e cria pra você. Então essa linha que apareceu num[3] = 6, eu vou ler num 3 só que você não vai escrever num 3
13:13
sem o colchete, não pode esquecer o colchete, quando eu digito essa linha ele vai criar mais um elemento,
13:19
vai colocar o índice 3 e vai colocar o valor que está ali, o valor 6, vai colocar dentro do elemento.
13:25
Essa é uma maneira automatizada do JavaScript mas se você quiser colocar explicitamente olha eu quero
13:30
que você coloque na última posição, eu não quero saber qual é a posição, não quero ficar preocupado com isso,
13:36
é só você usar um comando muito fácil que é: num.push(7) que é um método interno que vai
13:42
acrescentar valores a um array, então estou tentando acrescentar o valor 7 é só olhar aquele comando que
13:47
está escrito ali, com isso o JavaScript já vai criar mais um elemento já vai automaticamente decidir
13:53
que o índice, que a chave é 4 e vai colocar lá dentro o valor 7 exatamente como acabou de aparecer
13:59
na animação e se por acaso você está vendo o vídeo em outra aba e não viu a animação, cara vou até
14:04
pra outra câmera para falar contigo, não faça isso! Depois você vai falar que array é difícil e na verdade estava com duas abas, três abas, vendo televisão, estava fazendo outras coisas,
14:14
quando você está aprendendo a programar você não pode ter distrações, se você estava fazendo isso, volta pro início do vídeo e assiste direito, faz esse favor pra você mesmo.
14:24
Outra coisa que a gente pode fazer também arrays, que a gente pode utilizar os comandos aqui é saber
14:29
o comprimento dele como que eu vou saber o comprimento? Simples, num.length cuidado anota em um papel como se escreve a palavra length muita gente se confunde e coloca length
14:42
confunde bastante principalmente pra gente que o inglês não é a primeira língua e outra confusão muito grande é que do lado de length não tem parênteses para o JavaScript, em outras linguagens têm,
14:52
pro Javascript não tem, length não é um método, length é um atributo e pra que ele serve?
14:58
Simples, é só você olhar o desenho está aqui embaixo, quantas casas, quantos elementos existem
15:04
no array num, se você respondeu que tem 5 elementos você bem observador e é exatamente esse valor 5
15:09
que é o num.length que é o comprimento do meu vetor e pra gente voltar lá para o Visual Studio Code
15:15
e fazer alguns exemplos eu vou te ensinar mais um comando, um método interno também de todo vetor que é muito útil que é o método sort, então quando eu coloco num.sort, ele vai simplesmente pegar todos
15:26
esses valores, olha nesse momento como está meu vetor, os elementos são: 5, 8, 4, 6 e 7 nas posições
15:32
0, 1, 2, 3 e 4 quando eu uso o num.sort, olha o que ele vai fazer, ele vai pegar todos os elementos e colocar
15:39
em ordem crescente sendo assim eu tenho agora 4, 5, 6, 7 e 8 ordenados,
15:45
vamos voltar lá para o Visual Studio Code e fazer alguns exemplos. Então já estou com os elementos aqui e eu quero mostrar no lugar do vetor quero colocar: ('O vetor tem $
15:59
( ) posições'), eu quero mostrar quantas posições têm um vetor, se eu mostrar
16:05
consolo.log('O vetor tem ${num.length} posições'), ele já até ajuda para você não escrever errado, não tem parênteses no final, vou apertar F8, o vetor tem cinco posições, realmente ele tem cinco posições,
16:16
se você quiser você pode mostrar isoladamente posso fazer por exemplo que ele me mostre
16:21
o num na posição 0, se ele me mostrar o num na posição 0, quem é o num na posição 0? O num na posição 0 é o 5, executei, ele mostrou o 5 que é a primeira posição mas posso colocar assim:
16:32
console.log('O primeiro valor do vetor é ${num[1]}')
16:40
tem gente que confunde num [1] a primeira posição, o primeiro valor é num [1], quando eu executar
16:45
"O primeiro valor do vetor é 8", 8 não é o primeiro valor, não é o primeiro elemento.
16:50
O primeiro elemento é 5 porque eu botei num [1] e como a gente começa no 0, agora consertando ele mostra
16:57
"O primeiro valor do vetor é 5", se por acaso a gente antes de mostrar na tela vou colocar aqui para mostrar
17:03
também o console.log(num), fazendo tudo mostrou o vetor, "O vetor tem 5 posições",
17:10
"O primeiro valor do vetor é 5", sem problema nenhum, se você quiser você pode vir aqui em cima
17:16
e colocar por exemplo: num.sort ( ) e aqui tem parênteses, se você não colocar vai dar problema,
17:21
num.sort é um método interno de todo elemento que é um vetor e ele vai colocar em ordem, então eu tenho:
17:28
5, 8, 2, 9 e 3 e quando eu executar vai ficar 2, 3, 5, 8 e 9 que foi o meu vetor colocado em ordem,
17:36
vamos adicionar um elemento de valor 1: num.push(1), isso é, ele vai pegar vai colocar um no final aqui
17:43
então ficaria 5, 8, 2, 9, 3 e 1 e logo em seguida ele coloca em ordem, colocando em ordem o 1
17:49
já vai pra cá pra frente, se por acaso você mudar essa linha aqui, tirar ela daqui e colocar aqui embaixo
17:56
você vai ver que ele vai colocar o vetor em ordem e depois vai adicionar 1 no final.
18:01
Sendo assim olha lá "O primeiro valor do vetor é 2" e 1 ficou realmente no final e você vai falar:
18:06
"porque não ficou em ordem?", porque você colocou em ordem, ele ordenou tudo e logo em seguida
18:11
você adicionou o valor 1 no final do vetor, então tem que tomar cuidado com isso, a ordem daqui
18:17
vai influenciar muito, faz uns testes na sua casa e você vai ver sobre o que estou falando. Outra coisa que é muito comum da gente fazer com o vetor é mostrar ele na tela sem a formatação padrão
18:28
porque geralmente ele mostra que aquela formatação padrão com colchetes é bem bagunçado, se você quiser mostrar do seu jeito, da maneira que você preferir, tem um jeito sim, tem que ter,
18:37
toda linguagem tem e eu vou te mostrar como fazer isso, vamos voltar lá pra aquela tela, para o nosso quadro de explicação.
18:43
Estamos aqui de volta e aqui na tela está o vetor que a gente criou anteriormente, ele tem 5 elementos
18:49
de 0 a 4 e ele está lá com 4, 5, 6, 7 e 8 já está ordenado porque a gente deu sort nele, para eu escrever esse
18:55
vetor como a gente acabou de ver, a gente pode fazer isso por exemplo eu coloco: console.log(num [0]),
19:01
quando eu colocar num[0], ele vai mostrar o valor 4 que é o primeiro elemento, se eu quiser mostrar o segundo
19:07
é só colocar lá: console.log(num[1]) e eu posso fazer a mesma coisa pra todos os elementos,
19:13
eu dou um console.log para cada um deles e dentro de cada um dos parentes eu coloco num[2], num[3],
19:19
num[4] e assim sucessivamente. Dá só uma olhada no tamanho do código que eu gerei só pra mostrar um vetor de 5 posições,
19:25
imagina agora se ele tivesse por exemplo 200 posições, seria um grande trabalho de código e não é assim
19:31
que a gente trabalha, mas a solução para isso é muito simples e a resposta está nas aulas anteriores,
19:37
por isso que eu perguntei no início você praticou o suficiente o uso wille, do..wille e do for,
19:42
principalmente o do for? Pois esse conhecimento vai ser extremamente útil para você agora porque dá uma analisada nessas linhas que estão aqui console.log(num[0]) e etc,
19:54
dá uma olhada o que tem de diferente dentro de cada uma dessas linhas? A única diferença entre elas é isso aqui que eu acabei de marcar, são os índices,
20:02
então tenho 0 na primeira, 1 na segunda, 2 na terceira e assim sucessivamente. Pois esses números que estão marcados aqui são exatamente as minhas chaves, elas indicam a posição
20:12
dentro de cada vetor, agora você imagina que eu possa utilizar, criar uma variável chamada "pos"
20:17
e essa variável pos começar valendo 0 e for valendo até 4 que é exatamente o limite do meu vetor,
20:23
se eu fizer uma repetição para isso eu escrevo essas linhas de console.log apenas uma vez
20:28
e coloco dentro de uma estrutura de repetição e se por acaso você tem problemas em estruturas repetição, clica aqui em cima, vai para as aulas 12, 13 e 14, principalmente na 14 mas a 12 e a 13 são importantes
20:41
também para você e ter a construção do seu aprendizado, vai aqui em cima e estuda direito,
20:46
pratica direito as estruturas de repetição, porque a grande dificuldade dos vetores não é o vetor,
20:51
é a estrutura de repetição. Sendo assim, eu vou substituir esse código todo que está aqui em cima, esse monte de linha console.log por apenas duas linhas, eu vou criar
21:00
uma estrutura chamada for (que a gente já viu nas aulas anteriores), vou fazer um for aqui, você viu durante a aula que está bem do lado da minha cabeça, que o for tem 3 elementos,
21:08
o primeiro elemento é a inicialização, o segundo teste lógico e o terceiro incremento. Vou colocar aqui dentro do for o console.log e vou escrever alguma coisa ali dentro e vamos começar
21:18
a preencher aqui o nosso for: em primeiro lugar a inicialização, como eu disse há alguns segundos atrás,
21:23
eu vou criar uma variável chamada pos, então eu vou colocar lá: for(let pos = 0;
21:29
que ela vai se inicializar, variável pos vai se inicializar com 0, o meu teste lógico é fazer o pos chegar até 4,
21:35
só que chegar até 4 pra um vetor de 4 posições e se o vento tiver 200? E se o vetor tiver 50?
21:41
Tem como eu saber quantas as posições têm? Tem, eu acabei de ensinar! É só fazer isso aqui: pos
21:51
que é o comprimento dele, eu vou fazer: pos++ pra ele adicionar um cada vez que ele fizer um looping.
21:57
Eu não vou ficar explicando o looping de novo porque eu já expliquei isso na aula 14, então acabamos de montar for aqui do lado, sendo assim eu tenho uma variável pos que vai começar
22:05
com 0 e vai até o tamanho do vetor. Então eu vou ter 0, 1, 2, 3, 4 e 5 até chegar no final do vetor, para escrever na tela é só substituir aquele
22:13
pedaço do console.log por num[pos], em vez de num [0], num [1] e num [2], eu coloco num no índice pos,
22:20
na chave pos, vamos testar esse código aqui pra ver se ele funciona? Então eu vou criar um novo elemento, vou criar dentro da aula 15 eu vou criar um novo "New File"
22:29
e eu vou chamar de: "vetor na tela.js", já estou aqui com ele e nós vamos criar um vetor que é o seguinte:
22:38
vamos criar aqui, vou chamar de "valores" e esses valores vão ser um vetor, vou colocar:
22:43
let valores = [8, 1, 7, 4, 2, 9], coloquei aqui e eu posso escrever na tela utilizando:
22:51
console.log(valores[0]), para mostrar primeiro elemento e ai você deve estar pensando assim:
23:00
"ah Guanabara deixa de ser bobo, seleciona aqui e CTRL+C e CTRL+V e vai substituindo os valores",
23:10
se você está achando isso fácil, você está muito errado na sua vida. Olha lá 0, 1, 2, 3, 4 e 5 se eu executar na tela, ele mostrou a 8, 1, 7, 4, 2 e 9
23:22
se por acaso você quiser mostrar eles sem muita formatação você vai colocar assim: console.log(valores), essa é a primeira maneira de fazer que a gente já viu, ele vai mostrar o vetor primeiro,
23:34
esse aqui é o resultado desse primeiro comando só que eu não quero dessa maneira, coloquei como comentário,
23:39
essa outra aqui é a maneira meio burra de fazer, vou colocar isso aqui como um comentário também,
23:45
comentário de várias linhas (a gente já viu isso também em JavaScript) e nós vamos fazer agora desse modo
23:50
um pouco mais inteligente que é vamos criar: for(let pos=0; pos < valores.length; pos++)
24:07
tenho aqui meu bloco e vou escrever na tela e ainda vou fazer bonitinho aqui: console.log('A posição $ {pos} tem o valor $ {valores [pos]}')
24:22
não esquece os colchetes, dá uma pausa, faz no seu próprio computador, testa utilizando o Node.js
24:29
e vamos fazer, vou apertar F8: "Aposição 0 tem o valor 8", "A posição 1 tem o valor 1" está vendo? Essa forma aqui de cima (vou montar essa parte de cima pra rodar),
24:38
essa é a forma padrão de executar que não é bonita para um produto final mas aqui você consegue
24:44
personalizar totalmente a saída mostrando dessa maneira, não se esquece pausa o seu vídeo digita
24:51
essa solução vê ela funcionando, a única maneira de você dizer que aprendeu é você mesmo
24:56
colocar a mão na massa, pausa esse vídeo agora e faz na sua casa. Fez na sua casa? Eu espero que sim e eu tenho uma ótima notícia para te dar essa não é a única
25:06
maneira de fazer, tem uma um pouquinho mais simples e é que a gente gosta mais utilizar! Esse código que está aqui do lado é o código tradicional do percurso em vetores, isso é o que a gente chama
25:16
de percurso para exibição no vetor e o JavaScript a partir das versões mais recentes do ECMAScripit
25:22
tem um jeito mais fácil, mais simplificado para fazer. Lembra no início da aula que eu te prometi
25:28
simplificar seu código? Pois agora a gente vai continuar simplificando, dá uma olhadinha aqui: eu vou criar uma estrutura que a gente chama de for só que utilizando o in dentro,
25:37
então vou utilizar o for..in e ele não tem 3 elementos como está aqui no for do lado da minha cabeça,
25:42
ele é um for pouco mais simplificado e ele é otimizado para variáveis compostas e objetos,
25:47
isso porque vetores e objetos são muito importantes para a linguagem JavaScript. Vou colocar aqui dentro o mesmo console.log exatamente como está aqui em cima
25:56
e olha como vai ficar pequenininho: a primeira coisa que vou botar aqui dentro do for é o meu índice, é a variável que eu criei aqui em cima let pos =0, eu só vou colocar let pos ou var pos
26:08
e do lado do in basta colocar o nome da variável composta, olha que simples, no nosso caso aqui
26:13
a minha variável composta se chama num, então eu vou colocar: para cada posição dentro de num, é assim que a gente vai ler, o for a gente lê para, o in a gente lê dentro ou "em" em português.
26:24
Então vamos ler essa frase em português: para cada posição em num, para cada posição
26:30
na variável composta, eu vou mostrar o num pos, simples assim, olha que simplicidade!
26:35
Lembrando que essa sintaxe do for ela só funciona para arrays e objetos, que na verdade são a mesma coisa
26:43
porque todo array em JavaScript é um object. Vamos treinar isso no nosso computador, então olha vou colocar isso aqui como comentário também,
26:52
na verdade eu vou tirar isso daqui e vou colocar aqui embaixo tudo aqui é comentário e eu vou fazer da maneira mais simplificada: for(let pos in num), olha que simples, é muito mais simples do que esse for aqui
27:05
os dois funcionam sem problema nenhum, não está errado, você não é um péssimo programador, uma péssima programadora por fazer isso, eu estou te explicando uma maneira mais simplificada
27:13
que está nas versões mais recentes da ECMScript, vamos lá: console.log('A posição ${pos} tem valor
27:24
${valores [pos]}') você viu? O comando daqui é exatamente o comando daqui, só que esse for recebeu uma grande simplificada,
27:32
rodei, ele deu erro porque não se chama num e sim valores, rodei de novo está lá, ele mostrou
27:39
da forma tradicional que eu nem queria e aqui ele mostrou "Aposição 0 tem o valor 8", "A posição 1
27:45
tem o valor 1", sem problema nenhum, olha isso, olha a simplificação, vou mostrar aqui, esse código
27:51
e esse código tem exatamente a mesma funcionalidade, se eu rodar, ele vai escrever a mesma coisa 2 vezes,
27:57
acabou ficando confuso aqui, deixa eu colocar é essa aqui como o comentário. Uma coisa que eu posso fazer por exemplo, está tudo fora de ordem vir aqui e colocar:
28:03
valores.sort, quando eu rodar 1, 2, 4, 7, 8 e 9 foram os valores eu digitei só que agora eles estão ordenados.
28:11
E você está vendo que dá pra fazer um monte de coisas utilizando vetores em JavaScript, se eu tivesse que te explicar tudo sobre vetores, não daria pra fazer isso em uma, duas, três, quatro aulas
28:20
esse é um curso introdutório e para a introdução vou te mostrar mais uma funcionalidade, a última funcionalidade que é buscar valores dentro de um vetor e dá pra fazer isso
28:29
com comandos bem simples dá uma olhadinha. Coloquei aqui mais uma vez o mesmo vetor que a gente estava trabalhando aqui como exemplo,
28:35
o nosso vetor num que eu até errei ali na frente e eu vou fazer o seguinte: eu quero buscar o valor lá dentro,
28:40
eu vou utilizar o método indexOf, lembrando anota isso aqui, Of com letra maiúscula senão não vai funcionar.
28:48
O que é indexOf(7)? Ele vai procurar lá no vetor lá embaixo onde está o valor 7, se você é observador(a)
28:56
você percebeu que o 7 está ali, essa função então vai me retornar a chave onde esse valor se encontra,
29:03
então por exemplo mandei aqui com esse comando num.indexOf(7) pesquisar "JavaScript tem o valor 7
29:08
dentro do vetor?" Ele vai me responder "tem e está na posição 3", então é exatamente dessa maneira que
29:14
o indexOf funciona e você pode estar perguntando: "tá Guanabara e se eu der um num.indexOf(3)?",
29:20
dá procurada ali existe 3? E se você está dizendo que existe presta atenção, não é o número vermelho lá
29:25
debaixo é o valor, não é a chave, não existe o valor 3, ele vai procurar e vai falar: "3 não tem",
29:32
ele deu uma olhada no vetor e não tem, sendo assim ele retorna o valor - 1, - 1 significa para o JavaScript
29:39
que ele pesquisou dentro do vetor e não encontrou nenhuma ocorrência, vamos esses comandos
29:45
para a gente finalizar dentro do nosso ambiente. Então voltar aqui no ambiente, esse vetor na tela vou guardar ele para a posteridade ele é importante,
29:53
vou vir aqui no ambiente e vou procurar vou colocar aqui: console.log e eu vou criar aqui uma variável
30:01
chamada pos, let pos = e essa pos aqui ela vai receber o num.indexOf
30:08
(Of com letra maiúscula) e eu tenho lá o valor 8, estou procurando o valor 8, em que posição o 8 foi parar?
30:15
E eu vou colocar aqui: ('O valor 8 está na posição ${pos}')
30:21
e você vai pensar assim: "O valor 8 está na posição 1", na hora que eu rodo ele vai dizer "O valor 8 está
30:27
na posição 3", porque ele foi parar na posição 3? Ele foi parar na posição 3 porque usei um sort está vendo?
30:32
Vou jogar até esse sort para baixo pra ele primeiro colocar o valor e depois ordenar, então está lá agora o 8 está na posição 4, porque tem na posição 4? Porque ele ordenou esses valores incluindo o valor 1,
30:44
o meu vetor ficou assim e o 8 está aqui na posição 4, se por acaso for buscar um valor que não existe,
30:51
por exemplo o valor 4, se você olhar aqui no vetor não tem o valor 4, na hora que eu executar
30:56
"O valor 4 está na posição -1", isso significa que ele não foi encontrado e você vai falar que era melhor eu ter dito
31:02
que o valor 4 não foi encontrado, é só você fazer isso aqui: if (pos == -1) ele vai mostrar
31:14
console.log('O valor 4 não foi encontrado!'), se não abre aqui e vamos colocar esse código aqui dentro,
31:22
então eu vou buscar o valor 4, "O valor não foi encontrado!", seu buscar o valor 8, que existe, "O valor
31:30
está na posição 4". Então você pode começar a utilizar dos nossos conhecimentos que a gente vai trazendo de aula após a aula, pra gente poder fazer programas
31:39
cada vez mais completos. ♫ Então é isso chegamos ao final de mais uma aula aula, essa aula foi bem grandinha,
31:47
inclusive eu vou te dar um grande conselho, aulas grandes, aulas importantes como essa de array,
31:53
elas precisam ser vistas mais de uma vez, elas precisam mais do que tudo ser praticadas, você precisa praticar
31:59
todos esses conceitos que a gente viu. Eu me despeço por aqui deixando o conselho de praticar muito, estudar muito e assistir esse vídeo
32:07
mais uma vez, se por acaso você sentiu qualquer dificuldade no uso do if, no uso do for aprende de novo vai lá na aula do if, aqui em cima você acessa o curso completo de JavaScript lá tem as aulas
32:19
que você precisa para tirar essas dúvidas. Não adianta você cair de paraquedas aqui, se você foi buscar uma aula de utilizar vetores em JavaScript
32:27
e chegou a essa, seja muito bem-vindo(a) mas você tem um curso inteiro para poder assistir,
32:33
então vai com paciência, vai com calma faz todas as aulas, faz todas as práticas para você aprender
32:39
a linguagem Javascript. Eu me despeço por aqui e no próximo vídeo a gente continua os estudos em linguagem JavaScript.
32:45
Um grande abraço, boas práticas e até a próxima!
32:50
Legendas:Tainá Bandeira
*/

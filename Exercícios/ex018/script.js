let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res') // Aqui já temos os 3 componentes básicos (número, lista, resultado)...
let valores = [] // Vetor vazio que será nossa análise da base de dados incluídos pelo usuário, a partir do array...

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        // window.alert("Tudo OK!") 
        // Aqui vamos trabalhar pra colocar o valor do input (number) e ir adicionando na lista valores=[], conforme for validando os valores novos...
        // Primeiro vamos adicionar o valor  do input pra dentro da lista...
        valores.push(Number(num.value)) // Adiciona o input:number na lista vetor = [], mas sem retorno visual...
        let item = document.createElement('option') // Variável item que "cria" um novo elemento como 'option' do html 'select'...
        item.text = `Valor ${num.value} adicionado.` // O novo elemento (número), em forma de texto, será a template string (texto corrido) do num.value (ou seja, do valor input do usuário armazenado na var num)... 
        lista.appendChild(item) // Adiciona o item como appendChild(item), em forma de option dentro da estrutura 'select#flista' html, jogando dentro do elemento html 'select', desse novo valor do item adicionado...
        res.innerHTML = '' // Reseta o valor ao final do clique em Finalizar! quando dá certo, pois será novos os stats final...
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    // Dando certo o número válido, ou dando errado, em ambos os casos vamos apagar o input:num da tela html, e dar o foco (do clique) de volta na caixa de input...
    num.value = '' // reseta a caixa 'num'
    num.focus() // 'clica' e joga o foco do mouse na caixa 'num'
}

function finalizar() {
    // Primeiro teste, verificar se o valor da lista valores = [] está vazio...
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0] 
        let soma = 0
        let media = 0

        // Aqui abaixo é um for que vai percorrer a lista de valores = [], e pra cada vez que percorrer num índice pos, vai fazer o teste dentro de ver quem é o maior elemento da array, ou menor, e atribuir quem for na variável acima...
        for (let pos in valores) {
            soma += valores[pos]

            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot 
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }   
}
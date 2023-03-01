// window.alert(`Olá, Mundo!`);

function contar() {
    var numeroInicial = document.getElementById('numeroinicial')
    var numeroFinal = document.getElementById('numerofinal')
    var numeroPasso = document.getElementById('numeropasso')
    var divResultado = document.getElementById('divresultado')

    if (numeroInicial.value.length == 0 || Number(numeroInicial.value) > Number(numeroFinal.value)){
        window.alert('[ERRO] Impossível calcular com esses dados. Tente um número válido não negativo e cujo valor final seja maior que o inicial.')
    } else if (numeroPasso.value.length == 0 || Number(numeroPasso.value) <= 0) {
        window.alert('[ERRO] Impossível calcular sem um intervalo. Vamos adotar o intervalo numérico 1 (um).')
    } else {
        window.alert('Tudo certo...')
        for (i = Number(numeroInicial); Number(numeroInicial) <= Number(numeroFinal); numeroInicial++){
            console.log(`O valor de i é: ${i}`)
            divResultado.innerHTML += ` ${i} -`
        }
    }
}
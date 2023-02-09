function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
//    var hora = 11 // hard coded test
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora > 5 && hora <= 12) {
        // Bom dia!
        img.src = 'fotomanha.png'
        document.body.style.background = 'rgb(250, 195, 90)'
    } else if (hora > 12 && hora < 19) {
        // Boa tarde!
        img.src = 'fototarde.png'
        document.body.style.background = 'rgb(180, 75, 55)'
    } else {
        // Boa noite!
        img.src = 'fotonoite.png'
        document.body.style.background = 'rgb(4, 59, 123'
    }
}
    
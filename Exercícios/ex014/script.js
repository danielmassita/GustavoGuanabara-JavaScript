// window.alert(`Olá, Mundo!`)

function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    //var hora = 10 // teste brute force...
    var hora = data.getHours();
    msg.innerHTML = `Agora são exatamente ${hora} hora(s).`   
    if (hora >= 6 && hora <= 12) {
        // Bom dia!
        img.src = 'fotomanha.png'
        document.body.style.background = '#fee88e'
    } else if (hora > 12 && hora < 18) {
        // Boa tarde!
        img.src = 'fototarde.png'
        document.body.style.background = 'rgb(71, 44, 67)'
    } else {
        // Boa noite!
        img.src = 'fotonoite.png'
        document.body.style.background = '#01263d'
    }
}


function carregar() {
    var msg = document.getElementById('msg')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
}
if (hora >= 0 && hora < 12) {
    document.body.style.background = '#ebbbtt'
} else if (hora >= 12 && hora <= 18) {
    document.body.style.background = '#b9846f'
} else {
    document.body.style.background = '#515154'
}
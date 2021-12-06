function clique() {
    let numero = document.querySelector('input#numero')
    let tabuada = document.getElementById('tab')
    if (numero.value.length == 0) {
        alert('Por favor! Digite um número!')
    } else {
        let n = Number(numero.value)
        let c = 1
        tabuada.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tabuada${c}`
            tabuada.appendChild(item)
            c++
        }
    }
}

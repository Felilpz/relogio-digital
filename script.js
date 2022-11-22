function relogio() {
    let dHora = window.document.getElementById("hora")
    let dMinuto = window.document.getElementById("minuto")
    let dSegundo = window.document.getElementById("segundo")
    let img = window.document.getElementById("imagem")
    

    let agora = new Date() 
    let horas = agora.getHours()
    let minutos = agora.getMinutes()
    let segundos = agora.getSeconds()
    let milisegundos = agora.getMilliseconds()

    if(horas < 10) {
        horas = "0" + horas
    }

    if(minutos < 10) {
        minutos = "0" + minutos
    }

    if(segundos < 10) {
        segundos = "0" + segundos
    }

    if(milisegundos < 10) {
        milisegundos = "0" + milisegundos
    }

    dHora.innerHTML = `<span class="tempo">${horas}</span>`
    dMinuto.innerHTML = `<span class="tempo">${minutos}</span>`
    dSegundo.innerHTML = `<span class="tempo">${segundos}</span>`

    dHora.innerHTML += `<p><span class="font">Horas</span></p>` 
    dMinuto.innerHTML += `<p><span class="font">Minutos</span></p>`
    dSegundo.innerHTML += `<p><span class="font">Segundos</span></p>`

}

setInterval(relogio, 1000)
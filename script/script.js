function relogio() {
    let dHora = window.document.getElementById("hora")
    let dMinuto = window.document.getElementById("minuto")
    let dSegundo = window.document.getElementById("segundo")
    
    let dias = window.document.getElementById("dias")
    
    

    let agora = new Date() 
    let horas = agora.getHours()
    let minutos = agora.getMinutes()
    let segundos = agora.getSeconds()
    let milisegundos = agora.getMilliseconds()


    let dia = agora.getDate()
    let diaSem = agora.getDay()
    let mes = agora.getMonth()

    if(horas < 10) {
        horas = "0" + horas
        document.getElementById('imagem').src=""
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

    //Dias da semana
    switch(diaSem) {
        case 0:
            diaSem = "Domingo"
            break
        case 1:
            diaSem = "Segunda-Feira"
            break
        case 2:
            diaSem = "Terça-Feira"
            break
        case 3:
            diaSem = "Quarta-Feira"
            break
        case 4:
            diaSem = "Quinta-Feira"
            break
        case 5:
            diaSem = "Sexta-Feira"
        default:
            diaSem = "Sábado"
    }

    //mes
    switch(mes) {
        case 0:
            mes = "Janeiro"
            break
        case 1:
            mes = "Fevereiro"
            break
        case 2:
            mes = "Março"
            break
        case 3:
            mes = "Abril"
            break
        case 4:
            mes = "Maio"
            break
        case 5:
            mes = "Junho"
            break
        case 6:
            mes = "Julho"
            break
        case 7:
            mes = "Agosto"
            break
        case 8:
            mes = "Setembro"
            break
        case 9 :
            mes = "Outubro"
            break
        case 10:
            mes = "Novembro"
            break
        default:
            mes = "Dezembro"
    }

    dias.innerHTML = `<p id="dias">${diaSem}, ${dia} de ${mes} de ${agora.getFullYear()}</p>`

    dHora.innerHTML = `<span class="tempo">${horas}</span>`
    dMinuto.innerHTML = `<span class="tempo">${minutos}</span>`
    dSegundo.innerHTML = `<span class="tempo">${segundos}</span>`

    dHora.innerHTML += `<p><span class="font">Horas</span></p>` 
    dMinuto.innerHTML += `<p><span class="font">Minutos</span></p>`
    dSegundo.innerHTML += `<p><span class="font">Segundos</span></p>`

}
setInterval(relogio, 1000)
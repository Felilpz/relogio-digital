function relogio() {
    let dHora = window.document.querySelector(".hora")
    let dMinuto = window.document.querySelector(".minuto")
    let dSegundo = window.document.querySelector(".segundo")
    let imagem = window.document.getElementById("imagem")
    let body = window.document.getElementsByClassName('body')

    let dias = window.document.querySelector(".dias")
    
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

    if(horas > 5 && horas <= 12) {
        imagem.innerHTML = `<img src="script/img/morning.png">`

        document.querySelector('.body').style.background = "linear-gradient(120deg, #304878, #c0d8d8)"
        
        document.querySelector('.dias').style.color = "#c0d8d8"

        document.querySelector('#relogio').style.color = "#c0d8d8"

        document.querySelector('.hora').style.background = "linear-gradient(to right, #304878, #304878, #c0d8d8)"
        document.querySelector('.minuto').style.background = "linear-gradient(to right, #304878, #304878, #c0d8d8)"
        document.querySelector('.segundo').style.background = "linear-gradient(to right, #304878, #304878, #c0d8d8)"

        document.querySelector('img').style.boxShadow = " 0px 0px 29px 4px rgba(0,110,204,1)"

    } else if(horas > 12 && horas <= 17) {
        imagem.innerHTML = `<img src="script/img/afternoon.png">`

        document.querySelector('.body').style.background = "linear-gradient(150deg, #6F7302, #A1A61B, #F2D1CE, #D9BF3D)"
        
        document.querySelector('.dias').style.color = "#5C6B00"

        document.querySelector('#relogio').style.color = "#F2D1CE"

        document.querySelector('.hora').style.background = "linear-gradient(to right, #5C6B00, #A1A61B)"
        document.querySelector('.minuto').style.background = "linear-gradient(to right, #5C6B00, #A1A61B)"
        document.querySelector('.segundo').style.background = "linear-gradient(to right, #5C6B00, #A1A61B)"

        document.querySelector('img').style.boxShadow = "0px 0px 29px 4px rgba(224,193,40,1)"

    } else if(horas > 17 && horas <= 19) {
        imagem.innerHTML = `<img src="/script/img/evening.png">`

        document.querySelector('.body').style.background = "linear-gradient(150deg, #F25C69, #593202, #F28705)"
        
        document.querySelector('.dias').style.color = "#F28705"

        document.querySelector('#relogio').style.color = "#593202"

        document.querySelector('.hora').style.background = "linear-gradient(to right, #F29F05, #F28705, #F28705)"
        document.querySelector('.minuto').style.background = "linear-gradient(to right, #F29F05, #F28705, #F28705)"
        document.querySelector('.segundo').style.background = "linear-gradient(to right, #F29F05, #F28705)"

        document.querySelector('img').style.boxShadow = " 0px 0px 29px 4px rgba(242,159,5,1)"

    } else {
        imagem.innerHTML = `<img src="script/img/night.png">`

        document.querySelector('.body').style.background = "linear-gradient(150deg, #101240, #0367A6, #022873)"
        
        document.querySelector('.dias').style.color = "#D5D1DB"

        document.querySelector('#relogio').style.color = "#D5D1DB"

        document.querySelector('.hora').style.background = "linear-gradient(to right, #101240, #0367A6)"
        document.querySelector('.minuto').style.background = "linear-gradient(to right, #101240, #0367A6)"
        document.querySelector('.segundo').style.background = "linear-gradient(to right, #101240, #0367A6)"

        document.querySelector('img').style.boxShadow = "0px 0px 29px 4px rgba(213,209,219,1)"

    }

    dias.innerHTML = `<p class="dias">${diaSem}, ${dia} de ${mes} de ${agora.getFullYear()}</p>`

    dHora.innerHTML = `<span class="tempo">${horas}</span>`
    dMinuto.innerHTML = `<span class="tempo">${minutos}</span>`
    dSegundo.innerHTML = `<span class="tempo">${segundos}</span>`

    dHora.innerHTML += `<p><span class="font">Horas</span></p>` 
    dMinuto.innerHTML += `<p><span class="font">Minutos</span></p>`
    dSegundo.innerHTML += `<p><span class="font">Segundos</span></p>`
}
setInterval(relogio, 1000)

/* 
Morning
#0487D9
#049DD9
#888C03
#D9CB04
#F27649

Afternoon
#CBAEF2
#6F7302
#A1A61B
#D9BF3D
#F2D1CE

Evening
#F25C69
#7D6BF2
#F29F05
#F28705
#593202

Night
#048ABF
#0367A6
#022873
#03318C
#101240
 */
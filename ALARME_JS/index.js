    let minutos = document.getElementById('minutos')
    let segundos = document.getElementById('segundos')
    let comecar = document.getElementById('comecar')
    let display = document.getElementById('display')
    let sound = document.getElementById('sound')

    let minutoAtual
    let segundoAtual
    let interval

    for(let i = 0; i <= 60; i++) {
        minutos.innerHTML += '<option value="'+i+'">'+i+'</option>'
    }

    for(let i = 1; i < 60; i++) {
        segundos.innerHTML += '<option value="'+i+'">'+i+'</option>'
    }

    comecar.addEventListener('click',function() {
        minutoAtual = parseInt(minutos.value)
        segundoAtual = parseInt(segundos.value)
    

    display.childNodes[1].innerHTML = minutoAtual + ':' + segundoAtual

    interval = setInterval(function() {

        segundoAtual--
        if(segundoAtual <= 0) {
            if(minutoAtual > 0) {
                minutoAtual--
                segundoAtual = 59
            } else {
                alert('Acabou')
                document.getElementById('sound').play()
                clearInterval(interval)
            }
        }
        display.childNodes[1].innerHTML = minutoAtual + ':' + segundoAtual
    }, 1000)


})
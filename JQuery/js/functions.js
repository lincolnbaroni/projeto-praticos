$(document).ready(function() {

    
    $('.form_contato').submit(function() {
        let container = $('.container')
        let content = 'Nome: '+ $('input[name=nome]').val() +
        '<hr>E-mail: ' + $('input[name=email]').val()+
        '<hr>Telefone: ' +$('input[name=telefone]').val()


        container.html(content)
        return false
    })

    

}) 
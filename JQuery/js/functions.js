$(document).ready(function() {

   $('.form').submit(function() {
    let container = $('.container')
    let content = 'Nome: '+ $('input[type=text]').val() +
    '<hr>E-mail: '+ $('input[type=email]').val() +
    '<hr>Telefone: '+ $('input[type=tel]').val()

    container.html(content)

    return false
   })
}) 
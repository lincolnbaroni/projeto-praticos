$(document).ready(function() {

  //$('.box div').append('<h3>Meu elemento adicionado</h3>')

  //let el = $('<h3>Meu conteudo</h3>').appendTo($('.box'))
  //el.css('color','red')

  //$('.box').prepend('<h3> meu conteudo 1 </h3>')
  //let el = $('<h3> meu conteudo </h3>').prependTo($('.box'))
  //el.css('font-size','30px')

let t = ('<p>Meu conteudo depois da variavel</p>')
 // $('.box').after(t)

 // $('.box').before(t)

$(t).insertAfter($('.box')).css('color','red')
$(t).insertBefore($('.box')).css('color','red')
}) 
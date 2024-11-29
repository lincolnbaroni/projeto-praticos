$(document).ready(function() {

  let el = $('.box')

  let meutexto = 'ola mundo'
  el.html("<h1 class=\"texto1\">"+meutexto+"</h1>")

  let texto2 = 'Segundo texto'
  el.html(el.html() + '<div class="texto2">'+texto2+'</div>')
  el.html(texto2).css('font-size','20px')

})
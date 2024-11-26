$(window).on('load',function() {
   
  let el = $('.box')

  let meutexto = 'Ola mundo'
  el.html("<div class=\"teste\">"+meutexto+"</div>")

  el.html(el.html() + '<h1 class="texto1">Meu primeiro texto dinamico</div>')

    $('.box2').text("<div></div>")
    $('.box2').text($('.box2').text() + "Ola mundo!!")
    console.log(el.text())

})
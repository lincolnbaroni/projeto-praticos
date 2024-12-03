$(document).ready(function() {

  /*
  let v = $('.box')
  let texto = 'ola mundo'
  v.html("<div class=\"test1\">"+texto+"</div>")

  v.html(v.html()+ '<h1 class="texto1">Meu texto via JavaScript</div>')

  $('.box2').text('<div></div>')
  $('.box2').text($('.box2').text() + 'ola mundo')

  console.log($('.box2').text())

  $('input[type=text]').val('ola mundo')
  $('textarea').text('ola mundo')
  */

  $('input[type=button]').click(function() {
    let v = $('input[type=text]').val()
    //let v2 = v.split('@')
    //console.log(v2)

    let splitstr = v.split('@')
    if(splitstr[1] == 'hotmail.com') {
      $('input[type=text]').css('opacity','0')
    } else {
      console.log('condição não foi valida')
    }
  })

}) 
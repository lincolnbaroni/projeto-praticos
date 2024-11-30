$(document).ready(function() {

  /*
  let el = $('.box')

  let meutexto = 'ola mundo'
  el.html("<h1 class=\"texto1\">"+meutexto+"</h1>")
   

  let texto2 = 'Segundo texto'
  el.html(el.html() + '<div class="texto2">'+texto2+'</div>')

  $('.box2').text('Ola mundo')
  $('.box2').text($('.box2').text() +  'Tudo bem com voce')
  console.log($('.box2').text())

  $('input[type=text]').text('ola mundo')
  $('textarea').text('ola tudo bem')
  */

  $('input[type=button]').click(function() {
    let v = $('input[type=text]').val()
    //let v2 = v.split('@')
   //console.log(v.substr(3,2))

   let splitstr = v.split('@')

   if(splitstr[1] == 'hotmail.com') {
      $('input[type=text]').css('opacity','0')
   } else {
    console.log('A condição não bateu')
   }
     
  }) 
  

})
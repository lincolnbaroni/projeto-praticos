$(window).on('load',function() {
   
  /*
  let el = $('.box')

  let meutexto = 'Ola mundo'
  el.html("<div class=\"teste\">"+meutexto+"</div>")
  el.html(el.html() + '<h1 class="texto1">Meu primeiro texto dinamico em JQuery</h1>')
  
    $('.box2').text("<div></dvi>")
    $('.box2').text($('.box2').text() + 'Ola mundo')
    console.log($('.box2').text())

    $('input[type=text]').val('ola mundo')
    $('textarea').text('ola mundo')
    */


    $('input[type=button]').click(function() {
        let str = $('input[type=text]').val()
        //let var2 = v.split('@')
        //console.log(var2)
        //console.log(str.substr(1,4))

        let splitstr = str.split('@')
        if(splitstr[1] == 'hotmail.com') {
          $('input[type=text]').css('opacity','0')
        } else {
          console.log('A condição nao bateu')
        }
        
    })

})
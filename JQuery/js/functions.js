$(document).ready(function() {

   $('.box1').addClass('minhaClasse')

   
   $('.box1').removeClass('minhaClasse')

   let el = $('.box1').find('.child1').find('.child2')
   el.css('color','green')

   $('minhatag').attr('meuattr','outrovalor')
   alert($('minhatag').attr('meuattr'))
  
}) 
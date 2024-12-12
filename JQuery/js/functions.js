$(document).ready(function() {

   /*
   let timer
   let timeOut = function() {
      $('.box2').animate({
      'width':'40%',
      'height':'500px',
      'padding':'35px',
      'marginLeft':'490px'
      },2000)
   }
 
   $('body').click(function() {
      alert('animaçãop foi cancelada')
      clearTimeout(timer)
   })

   $('.box1').animate({
      'width':'40%',
      'height':'500px',
      'padding':'35px',
      'marginLeft':'490px'
   }, 2000, function() {
      timer = setTimeout(timeOut, 3000)
   })
      */

   let timer
   timer = setInterval(function() {
      alert('ola bem vindo')
   },3000)
  
}) 
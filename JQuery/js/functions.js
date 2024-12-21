$(document).ready(function() {

  $.ajax({
   'url':'conteudo.html',
   // 'method':'post',
   // data:{'nome':'lincoln','idade':'26'}

  }).done(function(data){
      $('#container').append(data)
  })

})  
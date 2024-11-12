$(function() {
    $('.artigo1').hover(function() {
        $('.artigo2').css('background-color','red')
    }, function() {
        $('.artigo2').css('background-color','blue')
    })
})
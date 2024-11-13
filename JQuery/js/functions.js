$(function() {


    /*
        let time

    $(window).resize(function() {
        clearTimeout(time)
        time = setTimeout(function() {
            location.href ="file:///C:/Users/Lincoln%20Baroni/OneDrive/Desktop/ESTUDOS/estudy-front%20end/projeto-praticos/JQuery/index.html"
        }, 2000)
    })

    $('a').click(function(e) {
        e.preventDefault()
    })
   */

    $('.box').click(function(e) {
        e.stopPropagation()
    })

    $('body').click(function() {
        $('.box').css('background-color','green')
    })
})
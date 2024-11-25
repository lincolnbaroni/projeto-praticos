$(window).on('load',function() {
   
   //let elWidth = $('.box').width()
   $('.box').width('900')
   $('.box').css('width','900px')
   console.log("Width: "+ $('.box').width())
  
    console.log("InnerWidth: " + $('.box').innerWidth())
    console.log("OuterWidth: " + $('.box').outerWidth(true))


})
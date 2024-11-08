$(function() {

    function validarClickEHover() {
        $('.artigo1').click(function() {
        $('.artigo2').css('background-color','red')
        })

        $('.artigo1').hover(function() {
        $('.artigo2').css('background-color','blue')
        }, function() {
        $('.artigo2').css('background-color','black')
        })
    }

    
    function validarFormulario() {
        $('select').change(function() {
            console.log('Meu select foi alterado')
        })
    }

    validarFormulario()
    validarClickEHover()

})
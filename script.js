$(document).ready(function(){
    $('.burger').click(function(event){
        $('.menu_burger,.karts').toggleClass('active')
        $('body').toggleClass('lock')
    });
});
$(document).ready(function() {
    $('.btn').on('click', function() {
       //alert('You clicked me!!!') ;
    });
    
    
    $(window).scroll(function(){
        if ($(window).scrollTop() > 50){
            $('.mynavbar').addClass('navbar-fixed-top');
        }else{
            $('.mynavbar').removeClass('navbar-fixed-top');
        }
    });
    
    $('.pop').on('click', function(e) {
        e.preventDefault();
        $('.imagepreview').attr('src', $(this).find('img').attr('src'));
        $('#imagemodal').modal('show');   
    });	
    
});
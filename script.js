$(function () {
    $('.photo').click (function()  { 
    
    $(this).addClass('active').siblings('.photo').removeClass('active');

    $(this).next().show().animate({width:'280px'}).siblings('.description').animate({width: 0}, function() {

    $(this).hide();
    })});
 }
)
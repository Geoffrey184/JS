$(function () {

    $('.description').hide().css({width: 0});
    $('.photo.active').next().show().css({width: '280px'});

    $('.photo').click(function() {
        if (!$(this).hasClass('active')) {
            $('.photo').removeClass('active');
            $('.description').hide().css({width: 0}); 
            $(this).addClass('active');
            $(this).next().show().animate({width:'280px'}); 
        }
    });

    $('.btnOne').click(function () {
        $('.a.photo').click();
    }); 
    $('.btnTwo').click(function () {
        $('.b.photo').click();
    }); 
    $('.btnThree').click(function () {
        $('.c.photo').click();
    }); 
    $('.btnFour').click(function () {
        $('.d.photo').click();
    }); 
    $('.btnFive').click(function () {
        $('.e.photo').click();
    }); 
});
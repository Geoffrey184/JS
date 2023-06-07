$(function () {
    $('.photo').click(function() {
        if (!$(this).hasClass('active')) {
            $('.photo').removeClass('active');
            $('.description').hide();
            $(this).addClass('active');
            $('.description').animate({width: 0});
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



    
    

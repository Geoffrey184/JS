$(function () {
    $('.photo').click(function() {
        // Vérifie si l'élément cliqué n'a pas déjà la classe "active"
        if (!$(this).hasClass('active')) {
            // Supprime la classe "active" de tous les éléments ayant la classe "photo"
            $('.photo').removeClass('active');


            // Masque toutes les descriptions
            $('.description').hide();
            
            
            // Ajoute la classe "active" à l'élément cliqué
            $(this).addClass('active');
            
            
            // Réinitialise la largeur de toutes les descriptions à 0 pixels
            $('.description').animate({width: 0});
            
           // Affiche la description correspondante à l'élément cliqué
            $(this).next().show().animate({width:'280px'});

        }
    });
});
//

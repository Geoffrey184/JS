// Ici vous pouvez écrire du code JavaScript

// Attendre que le document soit prêt
document.addEventListener("DOMContentLoaded", function() {
    // Obtenir la référence vers l'élément image
    var image = document.getElementById("image");
  
    // Obtenir les dimensions de l'image
    var imageWidth = image.offsetWidth;
    var imageHeight = image.offsetHeight;
  
    // Calculer les dimensions de chaque section
    var sectionWidth = imageWidth / 5;
    var sectionHeight = imageHeight;
  
    // Créer les sections
    for (var i = 0; i < 5; i++) {
      var section = document.createElement("div");
      section.className = "imageSection";
      section.style.width = sectionWidth + "px";
      section.style.height = sectionHeight + "px";
      section.style.left = (i * sectionWidth) + "px";
      section.addEventListener("click", sectionClickHandler);
  
      // Ajouter la section à l'élément conteneur
      document.getElementById("imageContainer").appendChild(section);
    }
  
    // Gérer le clic sur une section
    function sectionClickHandler(event) {
      // Insérer ici le code à exécuter lorsque l'utilisateur clique sur une section de l'image
      console.log("Section cliquée !");


      
    }
  });
   
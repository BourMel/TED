//questions à poser :
//vidéo vraiment plein écran
//#lecteurSource is not a function
//possible de récupérer lieu, année, durée sans data-attribute ?

$(document).ready(function() {
   console.log('jQuery ready');
    
    //charge la première vidéo de la liste
    
    var lecteur = $('#lecteur');
    var source = $("#lecteurSource")
    var liste = $('#listeVideos div');
    var first = liste.first();
    var burger = $('#burger');
    var volet = $('section');
    
    var firstLien = first.attr('data-lien');
    var firstPoster = first.attr('data-poster');
    lecteurSource.attr('src', firstLien);
    lecteur.attr('poster', firstPoster);
    
    //menu hamburger
    
    var isOpen = false;
    burger.click(function() {
        if(isOpen === false) {
            volet.show();
            isOpen=true;
        } else {
            volet.hide();
            isOpen=false;
        }
        
    });
    
    //clic dans la liste = vidéo lue + fermeture burger
    
    liste.click(function () {
        //récupération de la vidéo
        var lien = $(this).attr('data-lien');
        var poster = $(this).attr('data-poster');
        console.log(lien);
        console.log(poster);
        
        //récupération des attributs
        var premierePhrase = $(this).attr('data-premierePhrase');
        var description = $(this).attr('data-description');
        //var personne = $(this).children('ul').children('.personne').html();
        //lieu
        //année
        //durée
        console.log(premierePhrase);
        console.log(description);
        
        lecteurSource.attr('src', lien);
        lecteur.attr('poster', poster);
        //fermeture burger
        volet.hide();
    });
});
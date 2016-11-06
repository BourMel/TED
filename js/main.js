$(document).ready(function() {
   console.log('jQuery ready');
    
    //charge la première vidéo de la liste
    
    var lecteur = $('#lecteur');
    var liste = $('#listeVideos div');
    var first = liste.first();
    
    var firstLien = first.attr('data-lien');
    var firstPoster = first.attr('data-poster');
    lecteur.attr('src', firstLien);
    lecteur.attr('poster', firstPoster);
    
    //bouton play/pause
    
    var play = $('#play');
    var isplaying = false;
    
    play.text('>');
    play.css('display', 'block');
    
    function read () {
        if (isplaying == false) {
            lecteur[0].play();
            isplaying = true;
            play.css('display', 'none');
        } else {
            lecteur[0].pause();
            isplaying = false;
            play.text('>');
            play.css('display', 'block');
        }
    }
    
    lecteur.click(read);
    play.click(read);
    
    //menu hamburger
    
    var burger = $('#burger');
    var volet = $('section');
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
    
    //clic dans la liste = vidéo lue
    
    liste.click(function () {
        var lien = $(this).attr('data-lien');
        var poster = $(this).attr('data-poster');
        console.log(lien);
        console.log(poster);
        lecteur.attr('src', lien);
        lecteur.attr('poster', poster);
    });
});
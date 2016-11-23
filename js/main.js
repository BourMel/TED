//video plein écran : plugin (big video js par ex)

$(document).ready(function() {
    
   console.log('jQuery ready');
 
    /*le lecteur vidéo*/
    var lecteur = $('#lecteur_html5_api');
    /*source de la vidéo*/
    var lecteurSource = lecteur.attr('src');
    /*menu des vidéos*/
    var liste = $('#listeVideos div');
    
    var burger = $('#burger');
    var volet = $('section');
    
    //pour travailler
   // volet.show();
    
    //première vidéo de la liste chargée
    
    var first = liste.first();
    var firstLien = first.attr('data-lien');
    var firstPoster = first.attr('data-poster');
    var firstPersonne = first.find('.personne').html();
	var firstTitre = first.find('h3').html();
    var firstLieu = first.find('.lieu').html();
    var firstAnnee = first.find('.annee').html();
    var firstDuree = first.find('.duree').html();
    var firstPremierePhrase =first.attr('data-premierePhrase');
    var firstDescription = first.attr('data-description');
    firstDescription = "<span class='premierePhrase'>" + firstPremierePhrase + "</span>" + firstDescription;
    
    lecteur.attr('src', firstLien);
    lecteur.attr('poster', firstPoster);
    $('.description.personne').html(firstPersonne);
	$('.description.titre').html(firstTitre);
    $('.description.lieu').html(firstLieu);
    $('.description.annee').html(firstAnnee);
    $('.description.duree').html(firstDuree);
    $('.description.texte').html(firstDescription);

    //menu hamburger
    
    var isOpen = false;
    function hamburger() {
        if(isOpen === false) {
            volet.show();
            isOpen=true;
            burger.attr('src', './images/croix.png');
        } else {
            volet.hide();
            isOpen=false;
            burger.attr('src', './images/burger.png');
        }
    }
    
    burger.click(hamburger);
    
    //si le volet est ouvert
    if(isOpen === true) { // à corriger
        //cliquer sur la vidéo le ferme
        lecteur.click(hamburger); // à corriger
    }
    
    
    //initialisation du slider
      $('#listeVideos').slick();
    
    //clic dans la liste = vidéo lue + fermeture burger
    
    liste.click(function () {
        //récupération de la vidéo
        var lien = $(this).attr('data-lien');
        var poster = $(this).attr('data-poster');
        
        
        //récupération des infos de description
        var titre = $(this).find('h3').html();
        var personne = $(this).find('.personne').html();
        var lieu = $(this).find('.lieu').html();
        var annee = $(this).find('.annee').html();
        var duree = $(this).find('.duree').html();
        
        //récupération des attributs
        var premierePhrase = $(this).attr('data-premierePhrase');
        var description = $(this).attr('data-description');
        description = "<span class='premierePhrase'>" + premierePhrase + "</span>" + description;
        
        //attribution au lecteur
        lecteur.attr('src', lien);
        lecteur.attr('poster', poster);
        $('.description.titre').html(titre);
        $('.description.personne').html(personne);
        $('.description.lieu').html(lieu);
        $('.description.annee').html(annee);
        $('.description.duree').html(duree);
        $('.description.texte').html(description);
        
        
        //fermeture burger si clic vidéo
        hamburger();

    });
});
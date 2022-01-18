/*
    

************************************ 24 to 12

    Créez un programme qui transforme une heure affichée en format 24h 
    en une heure affichée en format 12h.

Exemples d’utilisation :
$> ruby exo.rb 23:40
11:40PM

Attention : midi et minuit.
*/

// gestion des erreurs
if (process.argv[2] == null) {
    console.log ('Erreur.');
    return;
}

var test_saisie = new RegExp('^[:0-9]+$');
if ((!test_saisie.test(process.argv[2]) || process.argv[3] != null)){
    console.log(' Erreur.');
    return;
}


// parsing
var saisie = process.argv[2];
//console.log(saisie);

tableau = saisie.split(':');
//console.log(tableau);

var heure_saisie = tableau[0];
var minute_saisie = tableau[1];
//console.log(heure_saisie + " " + minute_saisie);

var sortie;
var heure_sortie = heure_saisie;

// resolution
if (heure_saisie == 00) {
    heure_sortie = 12;
    sortie = "AM";
}
if (heure_saisie == 12) {
        sortie = "PM";
    }
   else if  (13 <= heure_saisie && heure_saisie <= 23) { 
        heure_sortie -= 12;
        sortie = "PM";
   }
    else if (0 <=  heure_saisie && heure_saisie <= 11 ){
        sortie = "AM"; 
    }
    else {
        console.log('erreur.');
        return;
    }  

// affichage
console.log(heure_sortie + ':' + minute_saisie + sortie);


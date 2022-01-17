#!usr/bin/env ruby

/*
    ************************************* 12 to 24
    
    Créez un programme qui transforme une heure affichée en format 12h en une heure affichée au format 24h.


Exemples d’utilisation :
$> ruby exo.rb 11:40PM
23:40

Attention : midi et minuit.
*/



// parsing
if (process.argv[2] != null) {
var saisie = process.argv[2]; }
else { console.log('Erreur.');
        return;}

var tableau = saisie.split(':');
//console.log(tableau); 
//console.log(saisie);
var sub_string = tableau[1];
var am_ou_pm = tableau[1].slice(2,4);
//console.log(am_ou_pm);

var heure = parseInt(tableau[0]);
var minute = tableau[1].slice(0,2)
//console.log(heure + " " + minute + " " + am_ou_pm);

// gestion des erreurs

var test_saisie = new RegExp('^[:0-9]+$');
if ((!test_saisie.test(heure) ||  !test_saisie.test(minute) || (am_ou_pm != 'AM' && am_ou_pm != 'PM'))){
    console.log(' Erreur.');
    return;
}


// resolution

if (am_ou_pm == 'AM') {
    
    if (heure == 12) {
        heure = '00';
    } 
}
    // else { heure = heure;}
if (am_ou_pm == "PM") {
        if (heure == 12 ) {
            heure = '12';
            //console.log('ok');
        }
    else { heure = heure + 12}
}

if (heure >= 24) {
   console.log("Erreur.");
   return
}

// affichage
console.log ("En Français : " + heure + "h" + minute );

 
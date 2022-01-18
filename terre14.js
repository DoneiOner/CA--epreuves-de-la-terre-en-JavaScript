#!usr/bin/env ruby

/*
    
**************************** Trié ou pas

    Créez un programme qui détermine si une liste d’entiers est triée ou pas.

Exemples d’utilisation :
$> ruby exo.rb 9 8 3
Pas triée !

$> ruby exo.rb 3 8 9 12
Triée !

$> ruby exo.rb “Salut”
erreur.

*/

var saisie = process.argv;
var test_saisie = new RegExp('^[0-9]+$');
//console.log(saisie);

if (saisie[2] == null || saisie[3] == null) {
    console.log('Erreur.');
    return
}

for (var i = 2; i < saisie.length; i++) {
    if (!test_saisie.test(saisie[i])) {
        console.log('Erreur.');
    }    
}

//PARSING
var condition = true;


// RESOLUTION
for (var i = 2; i < (saisie.length-1); i++) {
    if ( parseInt(saisie[i]) >= parseInt(saisie[i+1]) ) {
            condition = false;
            break;
    }
}
console.log(condition);

// AFFICHAGE RESULTAT

if (condition == true) {
    console.log('Triée !');
}
else {
    console.log('Pas Triée !');
}

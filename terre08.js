#!usr/bin/env ruby

/*
    **************************** Puissance d’un nombre

    Créez un programme qui affiche le résultat d’une puissance.

L’exposant ne pourra pas être négatif.

Exemples d’utilisation :
$> node exo.js 2 3
8

Attention : je compte sur vous pour gérer les potentielles erreurs d’arguments.
*/

//gestion des erreurs
if ((process.argv[2] || process.argv[3]) == null) {
    console.log ('Erreur.');
    return;
}

var test_saisie = new RegExp('^[0-9]+$');
//console.log(test_saisie.test(saisie[index]));
if ((!test_saisie.test(process.argv[2])) || (!test_saisie.test(process.argv[3])) || process.argv[3] < 0){
    console.log('tu pensais me la mettre? => Erreur.');
    return;
}

//parsing
var nombre1 = parseInt(process.argv[2]);
var nombre2 = parseInt(process.argv[3]);

//resolution
console.log( nombre1 ** nombre2);


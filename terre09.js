/*
      ******************* Racine carrée d’un nombre
  
Créez un programme qui affiche la racine carrée d’un entier positif.

Exemples d’utilisation :
$> node exo.js 9
3

Attention : je compte sur vous pour gérer les potentielles erreurs d’arguments.
*/

// gestion des erreurs
if (process.argv[2] == null) {
    console.log ('Erreur.');
    return;
}

var test_saisie = new RegExp('^[0-9]+$');
//console.log(test_saisie.test(saisie[index]));
if ((!test_saisie.test(process.argv[2]) || process.argv[3] != null)){
    console.log('tu pensais me la mettre? => Erreur.');
    return;
}


// parsing
var nombre = process.argv[2];

// resolution
console.log(Math.sqrt(nombre));
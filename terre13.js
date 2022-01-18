

/*
    ************************* Trouver la Suisse (lol)

    Créez un programme qui prend en paramètre trois entiers et affiche la valeur du milieu.

Exemples d’utilisation :
$> ruby exo.rb 11 40 34
34

$> ruby exo.rb 2 1 3
2

$> ruby exo.rb 2 2 2
erreur.
*/

// GESTION DES ERREURS
var saisie = process.argv;
console.log(saisie);
var test_saisie = new RegExp('^[0-9]+$');
if (((!test_saisie.test(saisie[2]) ||  (saisie[2] == null )) || ((!test_saisie.test(saisie[3]) || (saisie[3] == null )) || ((!test_saisie.test(saisie[4]) || (saisie[4] == null))
|| (saisie[5] != null))))) {
    console.log(' Erreur.');
    return;
}

// PARSING
var a = parseInt(saisie[2]);
var b = parseInt(saisie[3]);
var c = parseInt(saisie[4]);
var result = 'd';

// GESTION D'ERREUR
if ( a == b || a == c || b ==c ) {
    console.log('Erreur.');
    return;
}

// RESOLUTION

if  (( a < b && b < c ) || ( a > b && b > c )) {
    result = b;
} else if  (( b < a && a < c ) || ( b > a && a > c)) {
    result = a;
} else if  (( a < c && c < b ) || ( a > c && c > b)) {
    result = c;
} else {
    console.log("Erreur.");
}
console.log("La valeur du milieu est " + result);







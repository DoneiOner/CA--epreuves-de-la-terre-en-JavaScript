/*    *********************** Inverser une chaîne

Créez un programme qui affiche l’inverse de la chaîne de caractères donnée en argument

Exemples d’utilisation :
$> node exo.js “Hello world!”
!dlrow olleH

$> node exo.js “lehciM”
Michel

Attention : je compte sur vous pour gérer les potentielles erreurs d’arguments
=end

# on a la method .reverse!
# mais je suppose que ce n'est pas le but de l'exercice
*/

var tableau = [];

if (process.argv[2] == null) {
    console.log('Erreur. il faut entrer une chaine de caracteres en argument');
}

for (i = 2; i < process.argv.length; i++) {
    tableau[i-2] = process.argv[i];
}
//console.log(tableau);

var string_to_reverse = tableau.join(' ');
//console.log(string_to_reverse);

for (i = string_to_reverse.length; i != -1; i--) {
    process.stdout.write(string_to_reverse.substring(i, i+1));
}
console.log(" ");






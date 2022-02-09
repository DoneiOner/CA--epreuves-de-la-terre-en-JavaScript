/*
************************ Taille d’une chaîne

Créez un programme qui affiche le nombre de caractères d’une chaîne de caractères passée en argument.

Exemples d’utilisation :
$> python exo.py “Hello world!”
12

$> python exo.py
erreur.

$> python exo.py “Bonjour” “Aurevoir”
erreur.

$> python exo.py 10
erreur.

*/

// gestion des erreurs
if (process.argv[2] == null) {
    console.log('Erreur.');
    process.exit(0);
}
//console.log(process.argv);
//console.log(process.argv[2]);
if (process.argv[3] != null) {
    console.log('Erreur.');
    process.exit(0);
}

if (!isNaN (process.argv[2])) {
    console.log('Erreur.');
    process.exit(0);
}

//parsing
var string = process.argv[2];
//console.log(string);

// resolution
console.log(string.length);

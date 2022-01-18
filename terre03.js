/*
******************** L’alphabet à partir de

Créez un programme qui affiche l’alphabet à partir de la lettre donnée en argument 
en lettres minuscules suivi d’un retour à la ligne.

Exemples d’utilisation :
$> python exo.py n
nopqrstuvwxyz
$>

Attention : votre programme devra utiliser une boucle.
*/

/*
Créez un programme qui affiche l’alphabet à partir de la lettre donnée en argument 
en lettres minuscules suivi d’un retour à la ligne.

Exemples d’utilisation :
$> python exo.py n
nopqrstuvwxyz
$>

Attention : votre programme devra utiliser une boucle.
*/

tableau = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

lettre_demandee = process.argv[2]


function recherche_index (lettre_demandee) {
    for (i=0; i<tableau.length-1; i++) {
        if (tableau[i] == lettre_demandee) {
            index = i;
            i++
     //  console.log (index)
            return index
        }
}
}
 
function affichage (index) {
    for (i=index; i<tableau.length; i++) {
        process.stdout.write(tableau[i])
    }
}

recherche_index(lettre_demandee);
affichage(index);


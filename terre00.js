

/*console.log ("hello world")*/

/*
*********************** L’alphabet
  
Créez un programme qui affiche l’alphabet en lettres minuscules suivi d’un retour
 à la ligne.

Exemples d’utilisation :
$> python exo.py
abcdefghijklmnopqrstuvwxyz
$>

Attention : votre programme devra utiliser une boucle.    
=end
*/


tableau = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
     'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

/* console.log(tableau) */

for (i=0; i<tableau.length; i++)
process.stdout.write(tableau[i])
console.log("\n")


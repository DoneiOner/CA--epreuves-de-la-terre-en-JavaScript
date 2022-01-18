

/*
************************** Afficheur d’arguments

Créez un programme qui affiche les arguments qu’il reçoit ligne par ligne, 
peu importe le nombre d’arguments.

Exemples d’utilisation :
$> ruby exo.rb je suis solide !
je
suis
solide
!
*/

/* process.argv est un tableau contenant les arguments de la ligne de commande. 
Le premier élément sera 'node', le second élément sera le nom du fichier JavaScript. 
Les éléments suivants seront tous les arguments de ligne de commande supplémentaires.
*/
for (i=2; i<process.argv.length; i++)

console.log(process.argv[i])



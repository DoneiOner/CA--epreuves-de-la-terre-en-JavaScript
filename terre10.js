

/*
************************* Nombre premier
    
Créez un programme qui affiche si un nombre est premier ou pas.

Exemples d’utilisation :
$> node exo.js 5
Oui, 5 est un nombre premier.

$> node exo.js 6
Non, 6 n’est pas un nombre premier.

Attention : 0 et 1 ne sont pas des nombres premiers. Gérez les erreurs d’arguments.
    
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

var nombre_a_tester = process.argv[2];

if ((nombre_a_tester == 1) || (nombre_a_tester == 0 )) {
    console.log('Non, ' + nombre_a_tester + " n'est pas un nombre premier.");
    return;
}


// resolution

nombre_a_tester = parseInt(nombre_a_tester);

var resultat_division;
var modulo;
for (i = 2; i <= nombre_a_tester; i++) {

resultat_division = (nombre_a_tester / i);
modulo = (nombre_a_tester % i);
//console.log(i + " = i");
//console.log(nombre_a_tester + " = nombre a tester");
//console.log(resultat_division + " = resultat division");
//console.log(modulo + "  = modulo");
//console.log(i);
//console.log((typeof nombre_a_tester) + ' = type de nombre a tester');
    if ((Number.isInteger(resultat_division)) && (modulo == 0) && (nombre_a_tester != i)) {
        
            console.log('Non, ' + nombre_a_tester + " n'est pas un nombre premier.");
            return;
        }
        
    else {
    console.log("Oui, " + nombre_a_tester + " est un nombre premier.");
    return;
    }
    }

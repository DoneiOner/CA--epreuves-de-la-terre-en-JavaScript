

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

function isPrime(nombre_a_tester) {

    if ((nombre_a_tester < 2)) {
        console.log('Non, ' + nombre_a_tester + " n'est pas un nombre premier.");
        process.exit(0);
    }

    if (nombre_a_tester == 2 ) {
        console.log('Oui, 2 est un nombre premier');
        process.exit(0);
    }

    if(nombre_a_tester%2 === 0) {
        console.log('Non, ' + nombre_a_tester + " n'est pas un nombre premier.");
        process.exit(0);
    }

    



    var racine = Math.sqrt(nombre_a_tester);

    if(racine == parseInt(racine)) {
        console.log('Non, ' + nombre_a_tester + " n'est pas un nombre premier.");
        process.exit(0);
    }


    for ( let i = 3; i<=racine; i+=2) {
        
        
        if(nombre_a_tester%i === 0) {
            
            console.log('Non, ' + nombre_a_tester + " n'est pas un nombre premier.");
            return;
        }
        
        
        
    }
    console.log("Oui, " + nombre_a_tester + " est un nombre premier.");
    return;

    }


isPrime(parseInt(process.argv[2]));
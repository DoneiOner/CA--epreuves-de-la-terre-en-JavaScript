#!usr/bin/env ruby

/*
    ************************** Pair ou impair
    Créez un programme qui permet de déterminer si l’argument donné 
    est un entier pair ou impair..

Exemples d’utilisation :
$> ruby exo.rb 2
pair

$> ruby exo.rb 5
impair

$> ruby exo.rb Bonjour
Tu ne me la mettras pas à l’envers.

$> ruby exo.rb
Tu ne me la mettras pas à l’envers.

Attention : gérez aussi les entiers négatifs.
   */



// recuperer l'argument
saisie = process.argv[2];
//console.log(saisie);


if (process.argv[2] == null) {
    console.log('Erreur. le programme attend un nombre en argument...');
    return;
}
saisie = saisie.split('-');
//console.log(saisie);
if (saisie[1] == null) {
    var index = 0 }
else {index = 1}
//console.log(index)


var test_saisie = new RegExp('^[0-9]+$');
//console.log(test_saisie.test(saisie[index]));
if (!test_saisie.test(saisie[index])) {
    console.log('tu pensais me la mettre? => Erreur.')
    return;
}

var nombre = parseInt(saisie[index]);
// tester la parité du nombre

if ( nombre % 2 == 0 ) {
    console.log("pair");
}
else {
    console.log("impair");
}
return;

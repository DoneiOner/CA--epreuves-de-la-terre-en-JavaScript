#!usr/bin/env ruby

/*
    ************************** DIVISIONS

    Créez un programme qui affiche le résultat et le reste d’une division entre deux nombres.

Exemples d’utilisation :
$> python exo.py 5 2
résultat: 2
reste: 1

$> python exo.py 10 0
erreur.

$> python exo.py 3 5
erreur.


#il semble que les divisions par defaut de ruby soient par integers. ok pour cet exo !!
# je compte utiliser le modulo pour le reste.
# et afficher "erreur" si le reste est un float ou que le diviseur est zero

if diviseur == 0 
puts "erreur"
abort
end

resultat = (a_diviser / diviseur)
reste = a_diviser % diviseur

if reste > resultat
puts "erreur"
abort
end

puts "resultat: #{resultat}"
puts "reste: #{reste}"

*/
var a_diviser = parseInt(process.argv[2])
var diviseur = parseInt(process.argv[3])

if (diviseur == 0) {
    console.log('Erreur.');
    return;
}

var resultat = parseInt(a_diviser / diviseur);
var reste = (a_diviser % diviseur);
console.log("résultat: " + resultat);
console.log("reste: " + reste);
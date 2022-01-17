#!usr/bin/env ruby

/*
    ************************************* 12 to 24
    
    Créez un programme qui transforme une heure affichée en format 12h en une heure affichée au format 24h.


Exemples d’utilisation :
$> ruby exo.rb 11:40PM
23:40

Attention : midi et minuit.

end

 recuperer argument en format 24h
 splitter les heures et les minutes

minuit : 12AM (midnight)                       ======> ex : 12:15 AM                   
de 01:00 à 11:59=> AM                          ==========>    afficher ARGV[0] + "PM"
midi  12PM (noon)  
de 12:01 à 12:59 => PM                         ===========>   afficher ARGV[0] + "PM"
de 13:00 à 23:59 => PM                        ===========> afficher ARGV[0] - 12 + "PM"


 afficher en format 12h
*/



// parsing
if (process.argv[2] != null) {
var saisie = process.argv[2]; }
else { console.log('Erreur.');
        return;}

var tableau = saisie.split(':');
//console.log(tableau); 
//console.log(saisie);
var sub_string = tableau[1];
var am_ou_pm = tableau[1].slice(2,4);
//console.log(am_ou_pm);

var heure = parseInt(tableau[0]);
var minute = tableau[1].slice(0,2)
//console.log(heure + " " + minute + " " + am_ou_pm);

// gestion des erreurs

var test_saisie = new RegExp('^[:0-9]+$');
if ((!test_saisie.test(heure) ||  !test_saisie.test(minute) || (am_ou_pm != 'AM' && am_ou_pm != 'PM'))){
    console.log(' Erreur.');
    return;
}


// resolution

if (am_ou_pm == 'AM') {
    
    if (heure == 12) {
        heure = '00';
    } 
}
    // else { heure = heure;}
if (am_ou_pm == "PM") {
        if (heure == 12 ) {
            heure = '12';
            //console.log('ok');
        }
    else { heure = heure + 12}
}



if (heure >= 24) {
   console.log("Erreur.");
   return
}

console.log ("En Français : " + heure + "h" + minute );

   /* when "AM"                ## 12:15AM c'est minuit et quart
        then if heure ==12
            then
                heure = "00" 
        else 
            heure = heure
        end           
        */              //  #=====> on ne change pas l'heure , de 00:01AM à 11:59

    /*when "PM" ,  (heure == 12)               # =====> 12:15PM c'est midi et quart
        then if heure == 12 
            then
                 heure = 12
        else 
            heure += 12
        end
    else
        puts "Erreur..."
end

if heure.to_i >= 24 then 
    puts "Erreur."
    abort
end

puts "En Français : #{heure.to_s}h#{minute.to_s}"

*/
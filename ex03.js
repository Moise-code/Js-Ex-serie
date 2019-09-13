/*
Exercice 3 - écriture d'une fonction avec arguments
Créez deux variables globales a et b, initialisées respectivement à 3 et à 2.
Créez une fonction triple prenant un argument x et renvoyant le résultat de la
 multiplication de x par 3
Créez une fonction affiche, appelée au clic sur un bouton, qui affiche dans 
des boîtes d'alerte successivement le résultat de triple appliquée à a, puis à b.
*/

let a = 3, b = 2, result;

function triple(x){
    return x * 3; 
}
triple();

function affiche(){
    document.getElementById('jaffiche').innerHTML = triple(a) +'<br>'; 
    document.getElementById('jaffiche').innerHTML += triple(b);
    alert(triple(a));
    alert(triple(b));
}

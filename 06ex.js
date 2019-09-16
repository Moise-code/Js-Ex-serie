/*
Exercice 6 - appel à une fonction retournant une valeur
Créez un tableau nommé tab dont le premier élément est -2, le deuxième 1 et le troisième 4

Créez une fonction soustrait prenant un argument x et renvoyant le résultat de 
la soustraction de x-2 si x est positif ou nul, la chaîne de caractères "Nombre négatif!" 
sinon.
Créez une fonction affiche, appelée au clic sur le bouton, qui affiche dans des 
boîtes d'alerte successivement le résultat de soustrait appliqué au premier 
élément, puis au dernier élément du tableau (en utilisant la propriété length).
*/

let tab = [-2,1,4];

/*Fonction soustrait avec un argument*/
for(let i=0; i<tab.length; i++){
    soustrait(tab[i]);
}

function soustrait(x){
    if(x >= 0){
        alert(x+ ' est positif');
    }else{
        alert(x + ' est négatif');
    }

    return x-2;
    
}
soustrait(tab[i]);

/*Fontion affiche*/
/*document.getElementById("button").onclick = function(){
    affiche()
}*/
function affiche(){
    document.getElementById('lasoustract').innerHTML = soustrait(tab[i]);

    alert(soustrait(tab[i]));
}
affiche();
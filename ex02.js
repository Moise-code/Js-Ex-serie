/*
Exercice 2 - écriture d'une fonction renvoyant une valeur
Créer une fonction qui :
demande la saisie d'un rayon;
retourne la surface du cercle de ce rayon. 
Afficher ensuite le résultat de l'appel à cette 
fonction en cliquant sur un bouton.
*/

let surface, diametre;
function surfaceRayon(){
    /*Demande de la saisie d'un rayon par l'utilisateur*/
        diametre = parseInt(prompt('Entrez un rayon !'));
        /*Périmetre = π x D x 2*/
        surface = Math.PI * diametre * 2;
        document.getElementById("lerayon").innerHTML = 'La surface du cerle est: ' + surface;

}
surfaceRayon()
/*
Exercice 7 :
Demander à l’utilisateur sa pointure et son année de naissance. 
Créer une fonction qui fait les calculs suivants :

Multiplier la pointure par 2
Ajouter 5 au résultat
Multiplier le tout par 50
Soustraire l’année de naissance
Ajouter au tout 1766
La fonction doit retourner le résultat. Tester avec votre 
date de naissance et votre pointure. Attention : 
n'utiliser une seule variable « resultat ».
*/

function calculer(){
    let pointure, anneeNaiss, result;

    /*Tant que c'est un nombre, Demander d'entrez la pointure*/
    while(isNaN(pointure) && isNaN(anneeNaiss)){
        pointure = prompt('Entrez votre pointure svp!');
        anneeNaiss = prompt('Entrez votre année de naissance!');
    };

    /*Calcul*/
    result = ((pointure * 2 + 5) * 50 - anneeNaiss) + 1766;
    return result;
}
calculer();

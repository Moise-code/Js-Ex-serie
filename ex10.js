/*
Exercice 10 - utilisation de la boucle for
Créer un bouton. Au click de ce bouton, lancer la fonction somme. 
Cette fonction demande trois fois à l'utilisateur de saisir un nombre 
et affiche ensuite la somme de ces trois nombres.
*/

let nbr1, nbr2,nbr3,lasomme;
function somme(){
    nbr1 = parseInt(prompt('Entrez un premier nombre!'));
    nbr2 = parseInt(prompt('Entrez un deuxième nombre'));
    nbr3 = parseInt(prompt('Entrez un troisième nombre'));

    for(i=0; i<3; i++){
        lasomme = nbr1 + nbr2 + nbr3;
        document.getElementById('plus').innerHTML = 'La somme de ' + nbr1 +' + '+nbr2+' + '+nbr3+' = ' + lasomme;
    }
    return lasomme;
    
}
somme();

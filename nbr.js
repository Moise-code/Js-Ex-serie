/*
Exercice 5 :
Demander à l’utilisateur deux nombres à virgule. 
Ne garder que la partie entière du premier .
Les multiplier et afficher le résultat dans une boîte de dialogue.
*/
let nbr1 = parseInt(prompt('Entrez un 1er nombre à virgule !'));
let nbr2 = parseInt(prompt('Entrez un 2ème nombre à virgule !'));
let resultat = nbr1 * nbr2;

alert(resultat);

/*Exercice 6 :
Dans un fichier séparé, créer une fonction 
permettant d’afficher le reste de leur division. L’appeler depuis le fichier html.*/
function mod(nbr1,nbr2){
    nbr1 = parseInt(prompt('Entrez un 1er nombre à virgule !'));
    nbr2 = parseInt(prompt('Entrez un 2ème nombre à virgule !'));
    return nbr1 % nbr2;
}
mod();

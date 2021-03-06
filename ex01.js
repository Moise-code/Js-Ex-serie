/*
Exercice 1 - écriture d'une fonction
Créer un bouton "Calculer la surface d'un rectangle". 
Faites en sorte que lorsqu'on clique sur le bouton, 
la fonction surfaceRectagle() se lance. Cette fonction va 
demander la saisie d'une largeur, d'une longueur et afficher la 
surface du rectangle correspondant.

Créer ensuite un nouveau bouton "Calculer le périmètre d'un rectangle".
Faites en sorte que lorsqu'on clique sur le bouton, la fonction 
periRectangle() se lance. Cette fonction va demander la saisie d'une 
largeur, d'une longueur et afficher le périmètre du rectangle.

Pour l'affichage des résultats, pensez à mettre du texte 
pour qu'on sache à quoi se réfère les réponses finales !
*/

/*Calcul de la surface d'un cercle en utilisant une fonction*/
let longueur, largeur, surface;
function surfaceRectagle(){
    longueur = parseInt(prompt('Entrez une longueur. Expl: 4'));
    largeur = parseInt(prompt('Entrez une largeur. Expl: 8'));

    surface = longueur * largeur;
    document.getElementById('lasurface').innerHTML = 'La surface est: ' + surface;
}
surfaceRectagle()

/*Calcul de la surface d'un cercle en utilisant une fonction*/
let perimetre, larg, long;
function perimRectangle(){
    long = parseInt(prompt('Entrez une longueur. Expl: 67'));
    larg = parseInt(prompt('Entrez une largeur. Expl: 12'));
    perimetre = (long + larg) * 2;

    document.getElementById('leperim').innerHTML = 'Le périmètre est: ' + perimetre;
}
perimRectangle()
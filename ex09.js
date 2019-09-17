/*
Exercice 9 - utilisation de la boucle while
Créer un bouton. Au click de ce bouton, lancer la fonction testWhile. 
Cette fonction demande à l'utilisateur de saisir une chaîne de caractères 
contenant la lettre p, et le redemande tant que l'utilisateur ne l'a pas 
fait. Il affiche ensuite la chaîne saisie entre guillemets.
*/

let laChaine;
function testWhile(){
    laChaine = prompt('Saisissez une chaine de caractère contenant un p!');
    while(!laChaine.includes('p')){
        testWhile();
        /*document.getElementById('chain').innerHTML = testWhile();*/
       
    }
}
testWhile();

/*
Exercice 11 - utilisation des boucles et tests
Créer un bouton. Au click de ce bouton, lancer la fonction calculMoyenne.

Cette fonction va calculer la moyenne des nombres entrés au clavier :

demande à l'utilisateur d'entrer un nombre entier.

si l'utilisateur entre autre chose qu'un nombre entier, un message d'alerte 
signale l'erreur et ensuite, la fonction redemande à l'utilisateur d'entrer 
un nombre entier.

tant que le nombre entré est positif ou nul, la fonction mémorise ce nombre et 
l'additionne aux autres nombres précédemment entrés.

si le nombre est négatif, alors la fonction calcule la moyenne de tous les nombres 
entrés en divisant la somme totale par le nombre de valeurs entrées.

la fonction affiche le nombre de valeurs entrées
la fonction affiche la moyenne
*/

//A retravailler complètement!!!!!!
let leNombre, nbrPreced = 0, laMoyenne, sommeTotale = 0;

function calculMoyenne(){
    while(parseInt(leNombre) >= 0){
        leNombre = prompt('Entrez un nombre entier!');
        if(!isNaN(leNombre)){
            alert('Non, ce n\'est pas un entier');
        }else if(parseInt(leNombre) >= 0){
            nbrPreced += leNombre;
            sommeTotale++; //nombre de valeur entrée.
        }else{
            laMoyenne = nbrPreced / sommeTotale;
        }

    }

}
document.getElementById('moyen').innerHTML = calculMoyenne();








/*function calculMoyenne(){
    //Entrée des donée de l'utilisateur
    leNombre = prompt('Entrez un nombre entier svp. Expl: 8');
    if(parseInt(leNombre) < 0 || parseInt(leNombre) >= 0){
        
    } else{
        //Alerter puis rapeller la fonction pour une entree correct.
        alert('Ce n\'est pas un entier')
        calculMoyenne();
    }
    */
    
    
   
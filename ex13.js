/*
Créer un bouton. Au click de ce bouton, lancer la fonction calculIMC.

Cette fonction va demander le poids et la taille, calculer l'IMC, 
ensuite l'afficher avec 2 décimales et enfin afficher un message disant 
dans quelle catégorie de corpulence on se situe.

_-_-_-_-_-_-_-_-__-__--__--__--__-
L'IMC ou Indice de Masse Corporelle est utilisé pour évaluer les risques sur 
la santé liés au surpoids chez l'adulte. Il se calcule en divisant le poids exprimé 
en kg par le carré de la taille exprimée en mètre.
*/

let poid, taille, lImc;

function calculIMC(){
    do{
        poid = parseFloat(prompt('Entrez votre poid !'));
        taille = parseFloat(prompt('Entrez votre taïlle !'));
    }while(isNaN(poid) && isNaN(taille));

    lImc = parseFloat(poid/(taille * taille)).toFixed(2);
    console.log(poid + 'Kg' + ' / ' + '('+ taille + '*' + taille + ')' + ' = ' + lImc);

    if(lImc < 16.5){
        console.log('Vous souffrez de malnutrition');
    } else if(lImc > 16.5 && lImc < 18.5){
        console.log('Vous souffrez de maigreur');
    }else if(lImc > 18.5 && lImc < 25){
        console.log('Vous avez une corpulance normale');
    }else if(lImc > 25 && lImc < 30){
        console.log('Vous êtes en surpoids');
    }else if(lImc > 30 && lImc < 35){
        console.log('Vous avez un obésité modérée');
    }else if(lImc > 35 && lImc < 40){
        console.log('Vous avez une obésité sévère');
    }else if(lImc > 40){
        console.log('Vous avez une obésité morbide');
    }else{
        console.log('Si vous n\'êtes pas dans les catégories, faîtes gaffe à votre santé');
    }


}


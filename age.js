/*
Exercice 8 :
Demander à l’utilisateur de saisir son âge. 
S’il a plus de 18 ans, afficher " Vous êtes majeur ". 
Sinon afficher " Vous êtes mineur ".
*/

/*Demander à l'utilisateur d'enter l'age*/
let age;
while(isNaN(age)){
    age = prompt('Entrez votre age svp !');
}

/*condition mag ou min*/
if(age > 18){
    document.write("Vous êtes majeur");
}else{
    document.write("Vous êtes mineur");
}
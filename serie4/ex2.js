/*
Dans le fichier HTML fourni, faire afficher ou masquer le texte en fonction de l'ancre.

*/

let texto;
function affiche(){
    texto = document.getElementById('texte').style.visibility = 'visible';
}

function affichPas(){
    texto = document.getElementById('texte').style.visibility = 'hidden';
}
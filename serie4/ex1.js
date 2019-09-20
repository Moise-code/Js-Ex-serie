/*
Dans le fichier HTML fourni, au survol de l'image ajouter une bordure de 3px 
rouge et la retirer quand la souris ne la survole plus.
*/

let bord;

function labordure(){
    bord = document.getElementById('image1').style.border = 'solid 3px red';
}

function sansbord(){
    bord = document.getElementById('image1').style.border = 'none';
}
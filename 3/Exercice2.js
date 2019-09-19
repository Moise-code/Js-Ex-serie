/*
Dans le fichier HTML fourni, afficher une boite de dialogue avec 
le message : "Merci de votre participation" quand le champ de saisie perd le focus.
*/

let lefocus;
function looseFocus(){
    lefocus = document.getElementById('nom'); 
    alert('Merci de votre participation');
}

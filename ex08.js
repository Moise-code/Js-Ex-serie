/*
Exercice 8 - utilisation de switch et de l'objet date
Créer un bouton. Au click de ce bouton, lancer la fonction 
jourDeLaSemaine(). Cette fonction détermine le jour de la semaine 
et affiche selon le cas dimanche, lundi, mardi... etc. jusqu'à samedi.
*/


let toDay, jourSem;
function jourDeLaSemaine(){
    toDay = new Date().getDay();
    jourSem = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samédi'];

    switch (toDay){
        case 0:
            alert(jourSem[toDay]);
            break;
        case 1:
            alert(jourSem[toDay]);
            break;
        case 2:
            alert(jourSem[toDay]);
            break;
        case 3:
            alert(jourSem[toDay]);
            break;
        case 4:
            alert(jourSem[toDay]);
            break;
        case 5:
            alert(jourSem[toDay]);
            break;
        case 6:
            alert(jourSem[toDay]);
            break;
        default:
            alert('On doit être dimanche soir');
    }


}
jourDeLaSemaine();

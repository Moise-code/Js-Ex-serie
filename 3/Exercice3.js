/*
Dans le fichier HTML fourni, afficher une boite de dialogue avec 
la valeur du champ dès que l'on appuie sur le clavier.
*/

let val = document.getElementById('nom');

   val.onkeydown = (e) => ajouVal(e); //On accède à la valeur de VAL par ONKEYDOWN et tout ça est égal à un appel d'evenement qi appel la funct
    function ajouVal(e){ //Donner une valeur à la function et elle est égale à l'event.
        if(e.key === 'Enter'){
            console.log(e.key);
            alert(val.value);
        }
    }
 
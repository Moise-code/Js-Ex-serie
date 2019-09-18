/*
Exercice 12 - Conversion de température Celsius, Fahrenheit et Kelvin
Créer un bouton. Au click de ce bouton, on lance la fonction conversionTemperature.

L'utilisateur choisit d'abord dans le menu affiché quel type de conversion 
il souhaite, il indique son choix en indiquant le numéro correspondant dans 
le menu au moyen d'un prompt javascript

Ensuite, un second prompt va lui demander la température à convertir et afficher 
le résultat dans une boîte d'alerte.

Le menu :

Fin du programme
De Celsius vers Fahrenheit
De Celsius vers Kelvin
De Fahrenheit vers Celsius
De Fahrenheit vers Kelvin
De Kelvin vers Celsius
De Kelvin vers Fahrenheit
Pour calculer la conversion, utilisez les formules suivantes :

[°F] = ([°C] x 9/5) + 32
[K] = [°C] + 273,15
[°C] = ([°F] - 32) / (9/5)
[K] = (([°F] - 32) x (5/9)) + 273,15
[°C] = [K] - 273,15
[°F] = ([K] x 9/5) - 459,67

où [K] représente la température en kelvin
où [°F] représente la température en degrés Fahrenheit
où [°C] représente la température en degrés Celsius
Exemples de valeurs à tester :

0 K = -273,15 °C = -459,67 °F
283,15 K = 10 °C = 50 °F
273,15 K = 0 °C = 32 °F
373,15 K = 100 °C = 212 °F
233,15 K = -40 °C = -40 °F
*/



let leChoix ,nbrDegre ;
let celsTofarnh = 0, celsTokelv = 1, farnhTocels = 2, farnhTokelv = 3, kelvTocels = 4, kelvTofarnh = 5, finProgram = 6;

/*La version avec if(statment)*/

function conversionTemperature(){
    /*Demander à l'utilisateur de choisir une T° à covertir */
    leChoix = prompt('Entrez une conversion, celsTofarnh = 0, celsTokelv = 1, farnhTocels = 2, farnhTokelv = 3, kelvTocels = 4, kelvTofarnh = 5, finProgram = 6 ');
    
    if(leChoix == celsTofarnh){
        leChoix = parseFloat(prompt('Entrez une T° à convertir, °C à °F !'));
        nbrDegre = (leChoix -32) / (9 / 5);
        alert(nbrDegre + ' °F');
    }else if(leChoix == celsTokelv){
        leChoix = parseFloat(prompt('Entrez une T° à convertir, °C à °K!'));
        nbrDegre = leChoix - 273.15;
        alert(nbrDegre + ' °K');
    }else if(leChoix == farnhTocels){
        leChoix = parseFloat(prompt('Entrez une T° à convertir, °F à °C'));
        nbrDegre = (leChoix * 9 / 5) + 32; 
        alert(nbrDegre + ' °C');
    }else if(leChoix == farnhTokelv){
        leChoix = parseFloat(prompt('Entrez une T° à convertir, °F à °K'));
        nbrDegre = (leChoix * 9 / 5) - 459.67;
        alert(nbrDegre + ' °K');

    }else if(leChoix == kelvTocels){
        leChoix = parseFloat(prompt('Entrez une T° à convertir, °K à °C'));
        nbrDegre = leChoix + 273.15;
        alert(nbrDegre + ' °C'); 
    }else if(leChoix == kelvTofarnh){
        leChoix = parseFloat(prompt('Entrez une T° à convertir, °K à °F'));
        nbrDegre = ((leChoix - 32) * (5 / 9)) + 273.15;
        alert(nbrDegre + ' °F');
    }else if( leChoix == finProgram){
        alert('Ok, une autre fois alors!');
    }else{

    }
    return nbrDegre;
    
}
document.getElementById('convert').innerHTML = conversionTemperature() + '';


/*La version avec switch case*/

//function conversionTemperature(){
    /*leChoix = parseInt(prompt('un choix'));
    switch(leChoix){
        case 0:
            leChoix == celsTofarnh;
            leChoix = parseFloat(prompt('Entrez une T° à convertir, °C à °F !'));
            nbrDegre = (leChoix -32) / (9 / 5);
            alert(nbrDegre + ' °F');
            break;

        case 1:
            leChoix == celsTokelv
            leChoix = parseFloat(prompt('Entrez une T° à convertir, °C à °K!'));
            nbrDegre = leChoix - 273.15;
            alert(nbrDegre + ' °K');
            break;
        case 2:
            leChoix == farnhTocels;
            leChoix = parseFloat(prompt('Entrez une T° à convertir, °F à °C'));
            nbrDegre = (leChoix * 9 / 5) + 32; 
            alert(nbrDegre + ' °C');
            break;

        case 3:
            leChoix == farnhTokelv;
            leChoix = parseFloat(prompt('Entrez une T° à convertir, °F à °K'));
            nbrDegre = (leChoix * 9 / 5) - 459.67;
            alert(nbrDegre + ' °K');
            break;

        case 4:
            leChoix == kelvTocels;
            leChoix = parseFloat(prompt('Entrez une T° à convertir, °K à °C'));
            nbrDegre = leChoix + 273.15;
            alert(nbrDegre + ' °C');
            break;

        case 6:
            leChoix == kelvTofarnh
            leChoix = parseFloat(prompt('Entrez une T° à convertir, °K à °F'));
            nbrDegre = ((leChoix - 32) * (5 / 9)) + 273.15;
            alert(nbrDegre + ' °F');
            break;

        default:
            leChoix == finProgram;
        
    }

}
conversionTemperature();
*/



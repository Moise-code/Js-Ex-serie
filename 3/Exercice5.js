/*
Exercice 5
Dans le fichier HTML fourni, faire comme dans l'exercice 1 mais avec 5 images.
Bonus Ne faire qu'une seule fonction JavaScript pour cet exercice.
*/

let lesimages = document.querySelectorAll('.image');

for (let i = 0; i < lesimages.length; i++){
    lesimages[i].addEventListener('mouseover', function () {
        lesimages[0].src="images/image2.jpg";
        lesimages[1].src="images/image2_2.jpg";
        lesimages[2].src="images/image1.jpg";
        lesimages[3].src="images/image3.jpg";
        lesimages[4].src="images/image1_2.jpg";
      });

}
  
//function qui permette de changer les images en onmouseover une fonction par image //
// function newPicture1(){
//   document.getElementById('image1').src = 'image1_2.jpg';
// }
// function newPicture2(){
//   document.getElementById('image2').src = 'image2_2.jpg';
// }
//
// function newPicture3(){
//   document.getElementById('image3').src = 'image3_2.jpg';
// }
//
// function newPicture4(){
//   document.getElementById('image4').src = 'image4_2.jpg';
// }
//
// function newPicture5(){
//   document.getElementById('image5').src = 'image5_2.jpg';
// }

//fonction qui permet de modifier toutes les images du body dans une seule fonction en onmouseover //
function newPicture(elem){
    elem.src= elem.id + '_2.jpg';
}
//fonction qui permet de revenir à la première images pour toutes les images du body en onmouseout //
function returnPicture(elem){
  elem.src = elem.id + '.jpg';
}

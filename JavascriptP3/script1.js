//Créer une bordure autour de image1 au survol de la souris//
function onMouseIn (elem){
  elem.style.border = '3px solid red';
}
//Retirer la bordure une fois le pointeur hors de l'image//
function onMouseOut (elem){
  elem.style.border = '';
}

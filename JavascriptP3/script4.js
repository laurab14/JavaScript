function comparePassword(){
  var password = document.getElementById('password').value;
  var confirmPassword= document.getElementById('confirmPassword').value;
  if (password != confirmPassword){
    document.getElementById('password').style.border = '2px solid red';
    document.getElementById('confirmPassword').style.border = '2px solid red';
  }else {
    document.getElementById('password').style.border ='2px solid green';
    document.getElementById('confirmPassword').style.border ='2px solid green';
  }
}

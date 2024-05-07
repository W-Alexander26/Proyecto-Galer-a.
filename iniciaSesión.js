let correo=document.getElementById("correos");
let contraseña=document.getElementById("contraseñas");

function IniciarSesión() {
  localStorage.setItem('usuario2', correo.value + " " + contraseña.value);
  localStorage.getItem('usuario2');
  
}
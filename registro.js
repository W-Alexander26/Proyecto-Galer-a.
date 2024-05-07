let nombre = document.getElementById("nombres");

let apellido = document.getElementById("apellidos");

let correo = document.getElementById("correos");

let contraseña=document.getElementById("contraseñas")

function Registracion() {

  localStorage.setItem('usuario1',nombre.value + " " + apellido.value + " " + correo.value + " " + contraseña.value);

  localStorage.getItem('usuario1')

  
}

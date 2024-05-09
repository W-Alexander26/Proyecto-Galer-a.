let nombre = document.getElementById("nombres");

let apellido = document.getElementById("apellidos");

let correo = document.getElementById("correos");

let contraseña=document.getElementById("contraseñas");

let correoValido= /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

/*let listaCorreos =[];

let listaContraseñas=[];*/

let objetUser=[];

function validarCorreo() {

  if (correoValido.test(correo.value) && nombre.value !="" && apellido.value !="" && contraseña.value !="") {

    let objetUser=JSON.parse(localStorage.getItem('infoUsuarios')) || [];

    infoUsuario={

      nombre: nombre.value,

      apellido: apellido.value,

      correo: correo.value,

      contraseña: contraseña.value,

    }
      alert('El correo es valido');

      objetUser.push(infoUsuario);
   
     localStorage.setItem('infoUsuarios', JSON.stringify(objetUser));

     window.location.href="index.html"

  } else {

    alert('Los datos son incorrectos.')

  }
  
}





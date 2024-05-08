let nombre = document.getElementById("nombres");

let apellido = document.getElementById("apellidos");

let correo = document.getElementById("correos");

let contraseña=document.getElementById("contraseñas");

let correoValido= /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

/*let listaCorreos =[];

let listaContraseñas=[];*/

let infoUser=[];

function validarCorreo() {

  if (correoValido.test(correo.value) && nombre.value !="" && apellido.value !="" && contraseña.value !="") {

    infoUsuario={

      nombre: nombre.value,

      apellido: apellido.value,

      correo: correo.value,

      contraseña: contraseña.value,

    }


    
    alert('El correo es valido');

    infoUser.push(infoUsuario);
   

    localStorage.setItem('infoUsuarios', JSON.stringify(infoUser));

    //console.log(listaCorreos);//

  //window.location.href="index.html"

    return true;

  } else {

 
    
    return false;
  }
  
}





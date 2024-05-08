let nombre = document.getElementById("nombres");

let apellido = document.getElementById("apellidos");

let correo = document.getElementById("correos");

let contraseña=document.getElementById("contraseñas");

let correoValido= /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

let listaCorreos =[];

let listaContraseñas=[];

function validarCorreo() {

  if (correoValido.test(correo.value)) {

    alert('El correo es valido');

    listaCorreos.push(correo.value);

    listaContraseñas.push(contraseña.value);

    localStorage.setItem('correo',listaCorreos);

    localStorage.setItem('contraseña',listaContraseñas);

    //console.log(listaCorreos);//

    window.location.href="iniciaSesión.html"

    return true;

  } else {

    alert('El correo es invalido');
    
    return false;
  }
  
}





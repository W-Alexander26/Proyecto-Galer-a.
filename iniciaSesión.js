let correo=document.getElementById("correos");

let contraseña=document.getElementById("contraseñas");

let correoValido= /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

function IniciarSesión() {

  let infoCorreos=localStorage.getItem('correo');

  let infoContraseñas=localStorage.getItem('contraseña');

  let correosAlmacenados=infoCorreos.split(",");
  let contraseñasAlmacenadas=infoContraseñas.split(",");
  
  for (let index = 0; index < correosAlmacenados.length; index++) {
    if (correosAlmacenados[index]==correo.value && contraseñasAlmacenadas[index]==contraseña.value) {
      //&& si contraseñasAlmacenadas es igual a la contresaña.value(login) entonces pasa a página de inicio.
      console.log(contraseñasAlmacenadas);
      console.log(correosAlmacenados);
      
      window.location.href="index.html"

    } else {

      alert('Correo no valido.' +" "+ "Tienes que registrarte primero.");
      window.location.href="registro.html"
      
    }
    
  }

 
/*
  if (correoValido.test(correo.value)) {
    alert('El correo es valido');
    return true;

  } else {
    alert('El correo es invalido');
    return false;
  }
*/  
}


///Tengo que investigar como hacer un objeto///
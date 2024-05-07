let correo=document.getElementById("correos");

let contraseña=document.getElementById("contraseñas");

let correoValido= /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

function IniciarSesión() {


  let valor=localStorage.getItem('correo');

  let correosAlmacenados=valor.split(",")
  
  for (let index = 0; index < correosAlmacenados.length; index++) {
    if (correosAlmacenados[index]==correo.value ) {
      //&& si contraseñasAlmacenadas es igual a la contresaña.value(login) entonces pasa a página de inicio.
      
      console.log("Tiene permiso de entrar al sistema", correosAlmacenados[index]);
      window.location.href="index.html"
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
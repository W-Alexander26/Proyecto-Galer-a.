let correo=document.getElementById("correos");

let contraseña=document.getElementById("contraseñas");

function IniciarSesión() {

  let objetUser=JSON.parse(localStorage.getItem('infoUsuarios'));

    encontrado = objetUser.find(user => user.correo == correo.value && user.contraseña==contraseña.value);
  
    if (encontrado) {
      
      window.location.href="mainpage.html"

    } else {
      alert('Datos incorrectos. Recuerda poner la misma información que usaste en el Registro.')
      
    }
    
    
  

  /*let infoCorreos=localStorage.getItem('correo');

  let infoContraseñas=localStorage.getItem('contraseña');

  let correosAlmacenados=infoCorreos.split(',');

  let contraseñasAlmacenadas=infoContraseñas.split(',');*/

  
  /*for (let index = 0; index < correosAlmacenados.length; index++) {

    if (correoValido.test(correo.value) && correosAlmacenados[index]==correo.value && contraseñasAlmacenadas[index]==contraseña.value) {

      //&& si contraseñasAlmacenadas es igual a la contresaña.value(login) entonces pasa a página de inicio.
      
      window.location.href="mainpage.html"

    } else {

      alert('Tu correo o contraseña son incorrectos.' +" "+ "¿Ya estás registrado?");

    
      
    }
    
  }*/

 
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
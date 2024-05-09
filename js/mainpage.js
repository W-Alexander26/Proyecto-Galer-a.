let nameUser=document.getElementById('nombreUsuario');

let changename=JSON.parse(localStorage.getItem('infoUsuarios'));

let preVista=document.getElementById('preVista');

/*searchName=changename.find(user=>user.nombre=nombre.value);*/
//window.location.reload//

/*console.log(searchName);*/

nameUser.innerHTML=(JSON.stringify(changename[0].nombre));
//Esto funciona muy bien sin embargo falta mejorarlo*/

function mostraImagen(preVista) {

  var file = preVista.files[0];

  var reader = new FileReader();

  reader.onloadend = function() {

    console.log('RESULT', reader.result)
  }
  reader.readAsDataURL(file);
}

//console.log(changename[0].nombre);//

//changename.JSON.parse(localStorage.getItem('infoUsuario',nombre.value)).push(nameUser);//
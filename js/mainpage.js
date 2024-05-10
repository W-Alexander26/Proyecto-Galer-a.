let nameUser=document.getElementById('nombreUsuario');

let changename=JSON.parse(localStorage.getItem('infoUsuarios'));

let preVista=document.getElementById('preVista');

/*searchName=changename.find(user=>user.nombre=nombre.value);*/
//window.location.reload//

/*console.log(searchName);*/

nameUser.innerHTML=(JSON.stringify(changename[1].nombre));
//Esto funciona muy bien sin embargo falta mejorarlo*/

function mostrarImagen(event) {

  var file = event.target;

  console.log(file);

  let files = file.files;

  let firstFile = files[0];

  var reader = new FileReader();

  reader.onload= function() {

    console.log('RESULT', reader.result)
  }
  reader.readAsDataURL(firstFile);
}

//console.log(changename[0].nombre);//

//changename.JSON.parse(localStorage.getItem('infoUsuario',nombre.value)).push(nameUser);//
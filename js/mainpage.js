let nameUser=document.getElementById('nombreUsuario');

let changename=JSON.parse(localStorage.getItem('infoUsuarios'));

let preVista=document.getElementById('preVista');

let archivoEntrada = document.querySelector('input');

let savedImg=[];

nameUser.innerHTML=(JSON.stringify(changename[1].nombre));

/*searchName=changename.find(user=>user.nombre=nombre.value);*/
//window.location.reload//

/*console.log(searchName);*/

//Esto funciona muy bien sin embargo falta mejorarlo*/

archivoEntrada.addEventListener('change', () => {

  const archivoLector = new FileReader();

  //console.log(archivoEntrada);
  
  archivoLector.readAsDataURL(archivoEntrada.files[0]);

  archivoLector.addEventListener('load',() => {

    const url = archivoLector.result;

     const img = new Image();

     img.src = url;

     img.style.width="15%"

     img.style.height="80px"

     img.style.margin= "5px"

     preVista.appendChild(img);

     console.log(img);

  })

})



/*function mostrarImagen(event) {

  var entradaArchvo = event.target;

  console.log(file);

  let Archivos = Archivos.Archivo;

  let primerArchivo = Archivos[0];

  var reader = new FileReader();

  reader.onload= function() {

    console.log('RESULT', reader.result)
  }
  reader.readAsDataURL(firstFile);
}*/

//console.log(changename[0].nombre);//

//changename.JSON.parse(localStorage.getItem('infoUsuario',nombre.value)).push(nameUser);//
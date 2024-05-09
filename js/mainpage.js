let nameUser=document.getElementById('nombreUsuario');

let changename=JSON.parse(localStorage.getItem('infoUsuarios'));

searchName=changename.find(user=>user.nombre=nombre.value);
//window.location.reload//

console.log(searchName);

//nameUser.innerHTML=(JSON.stringify(changename)); está sí tiene el objeto, falta mejorarlo//

//console.log(changename=JSON.parse(localStorage.getItem('infoUsuarios'.nombre)));//

//changename.JSON.parse(localStorage.getItem('infoUsuario',nombre.value)).push(nameUser);//
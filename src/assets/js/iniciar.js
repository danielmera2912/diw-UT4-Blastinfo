const acceder = document.querySelector(".pie__acceder__enlace");
const perfil =  document.querySelector(".perfil");
const iniciar =  document.querySelector(".iniciar_sesion");
const registrar =  document.querySelector(".registrar");
const fondo =  document.querySelector(".fondo");
const boton_cerrar = document.querySelector(".iniciar_sesion__cerrar");
const boton_cerrar2 = document.querySelector(".registrar__cerrar");
const boton_cerrar3 = document.querySelector(".perfil__cerrar");
const boton_registrar = document.querySelector(".iniciar_sesion__boton__opcion--registrar");
const boton_entrar = document.querySelector(".iniciar_sesion__boton__opcion--entrar");
const boton_iniciar = document.querySelector(".registrar__boton__opcion--iniciar");
const boton_registrar2 = document.querySelector(".registrar__boton__opcion--registrar");


acceder.addEventListener("click", abrir);
perfil.style.setProperty("display", "none")
iniciar.style.setProperty("display", "none")
registrar.style.setProperty("display", "none")
fondo.style.setProperty("display", "none")
fondo.addEventListener("click", cerrar);
boton_registrar.addEventListener("click", intercambiar1);
boton_registrar2.addEventListener("click", intercambiar2);
boton_iniciar.addEventListener("click", intercambiar2);
boton_entrar.addEventListener("click", abrirPerfil);

boton_cerrar.addEventListener("click", cerrar);
boton_cerrar2.addEventListener("click", cerrar);
boton_cerrar3.addEventListener("click", cerrar);

function abrir() {
  
  iniciar.style.setProperty("display", "flex")
  fondo.style.setProperty("display", "flex")
}

function cerrar() {
  
  iniciar.style.setProperty("display", "none")
  registrar.style.setProperty("display", "none")
  fondo.style.setProperty("display", "none")
  perfil.style.setProperty("display", "none")
}
function intercambiar1() {
  iniciar.style.setProperty("display", "none")
  fondo.style.setProperty("display", "none")
  registrar.style.setProperty("display", "flex")
  fondo.style.setProperty("display", "flex")
}
function intercambiar2() {
  registrar.style.setProperty("display", "none")
  fondo.style.setProperty("display", "none")
  iniciar.style.setProperty("display", "flex")
  fondo.style.setProperty("display", "flex")
}
function abrirPerfil() {
  iniciar.style.setProperty("display", "none")
  registrar.style.setProperty("display", "none")
  perfil.style.setProperty("display", "flex")
  fondo.style.setProperty("display", "flex")

}
  // function CloseModal() {
  //   let element = document.getElementById('overlay')
  //   element.style.display = 'none'
  // }
  //     function OpenModal() {
  //      $('#overlay').show();
  // }
  // function CloseModal() {
  //      $('#overlay').hide();
  // }
  
// Se recogen los desplegables que son llamados al pulsar en Cuenta de Usuario, además de los botones correspondientes
// de los desplegables y del mismo botón "Cuenta de Usuario", además del fondo.
const acceder = document.querySelector(".pie__acceder__enlace");
const perfil = document.querySelector(".perfil");
const iniciar = document.querySelector(".iniciar_sesion");
const registrar = document.querySelector(".registrar");
const fondo = document.querySelector(".fondo");
const boton_cerrar = document.querySelector(".iniciar_sesion__cerrar");
const boton_cerrar2 = document.querySelector(".registrar__cerrar");
const boton_cerrar3 = document.querySelector(".perfil__cerrar");
const boton_registrar = document.querySelector(".iniciar_sesion__boton__opcion--registrar");
const boton_entrar = document.querySelector(".iniciar_sesion__boton__opcion--entrar");
const boton_iniciar = document.querySelector(".registrar__boton__opcion--iniciar");
const boton_registrar2 = document.querySelector(".registrar__boton__opcion--registrar");
// al pulsar el botón Acceso de Cuenta llama directamente al primer desplegable
acceder.addEventListener("click", abrir);
// Se establece que todos los desplegables que no sean visibles
perfil.style.setProperty("display", "none");
iniciar.style.setProperty("display", "none");
registrar.style.setProperty("display", "none");
fondo.style.setProperty("display", "none");
// al pulsar el fondo, se llama a la función cerrar
fondo.addEventListener("click", cerrar);
// se establece que cada botón llame a sus funciones correspondientes
boton_registrar.addEventListener("click", intercambiar1);
boton_registrar2.addEventListener("click", intercambiar2);
boton_iniciar.addEventListener("click", intercambiar2);
boton_entrar.addEventListener("click", abrirPerfil);
// los botones de cerrar, llaman a la función cerrar
boton_cerrar.addEventListener("click", cerrar);
boton_cerrar2.addEventListener("click", cerrar);
boton_cerrar3.addEventListener("click", cerrar);
// abre el desplegable de iniciar sesión
function abrir() {
    iniciar.style.setProperty("display", "flex");
    fondo.style.setProperty("display", "flex");
}
// se cierran todos los desplegables y se quita el fondo
function cerrar() {
    iniciar.style.setProperty("display", "none");
    registrar.style.setProperty("display", "none");
    fondo.style.setProperty("display", "none");
    perfil.style.setProperty("display", "none");
}
// se intercambia un desplegable por el otro desplegable (iniciar sesión a registrar)
function intercambiar1() {
    iniciar.style.setProperty("display", "none");
    fondo.style.setProperty("display", "none");
    registrar.style.setProperty("display", "flex");
    fondo.style.setProperty("display", "flex");
}
// se intercambia un desplegable por el otro desplegable (registrar a iniciar sesión)
function intercambiar2() {
    registrar.style.setProperty("display", "none");
    fondo.style.setProperty("display", "none");
    iniciar.style.setProperty("display", "flex");
    fondo.style.setProperty("display", "flex");
}
// se abre el desplegable de acceso al perfil y se cierran los otros dos en caso de estar activos
function abrirPerfil() {
    iniciar.style.setProperty("display", "none");
    registrar.style.setProperty("display", "none");
    perfil.style.setProperty("display", "flex");
    fondo.style.setProperty("display", "flex");
}

//# sourceMappingURL=perfil.394f930b.js.map

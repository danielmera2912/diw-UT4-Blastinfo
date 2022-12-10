// Se recoge el botón del filtro del listado de Pokémon
const botton2 = document.querySelector(".cuerpo__filtro__boton--filtro");
// cuando se pulsa el botón llama la función cambiar
botton2.addEventListener("click", cambiar);
// Se guarda un array de las posibilidades que tendrá el filtro
let posibilidades = ['Filtro', 'Tipo', 'Generación', 'Region'];
// se establece un número que empieza en 1 para cambiar el texto del botón, según dicho número al llamar la función cambiar
let num= 1;

function cambiar() {
    // Cambia el texto del botón según el número en el momento que se llame la función
    document.querySelector('.cuerpo__filtro__eleccion').innerHTML = posibilidades[num];
    // se aumenta el valor num si aún no alcanza 3, y si lo supera se reinicia a 0
    if(num<3){
        num++;
    }else{
        num=0;
    }
    
}
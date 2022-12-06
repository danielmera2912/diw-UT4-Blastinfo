const botton2 = document.querySelector(".cuerpo__filtro__boton--filtro");
botton2.addEventListener("click", cambiar);
let posibilidades = [
    "Filtro",
    "Tipo",
    "Generaci\xf3n",
    "Region"
];
let num = 1;
function cambiar() {
    document.querySelector(".cuerpo__filtro__eleccion").innerHTML = posibilidades[num];
    if (num < 3) num++;
    else num = 0;
}

//# sourceMappingURL=contacto.a8b2b454.js.map

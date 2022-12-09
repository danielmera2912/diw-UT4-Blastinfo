document.getElementById("id-sol").onclick = function() {
    let body = document.getElementsByClassName("pagina");
    for (const elemento of body)elemento.classList.remove("dark-mode");
    document.getElementById("id-luna").classList.remove("active");
    this.classList.add("active");
};
document.getElementById("id-luna").onclick = function() {
    let body = document.getElementsByClassName("pagina");
    for (const elemento of body)elemento.classList.add("dark-mode");
    document.getElementById("id-sol").classList.remove("active");
    this.classList.add("active");
};

//# sourceMappingURL=perfil.2637e506.js.map

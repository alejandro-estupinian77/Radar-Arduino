//Navegación Responsive

const responsiveNav = document.querySelector(".nav-res");
const nav = document.querySelector(".responsive-nav");
const closeIcon = document.querySelector(".close .close-nav");

responsiveNav.addEventListener("click", abrirNav);
closeIcon.addEventListener("click", cerrarNav);

function abrirNav(){
    nav.style.display = "block";
}

function cerrarNav(){
    nav.style.display = "none";
}
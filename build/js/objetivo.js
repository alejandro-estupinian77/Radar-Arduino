//Aplicaciones Proyecto 

//Alarma para auto
const carroSvg = document.querySelector("#auto");
const aplicacionCarro = document.querySelector(".aplicacion-auto");
const botonAuto = document.querySelector(".close-auto");

carroSvg.addEventListener("click", abrirAuto);
botonAuto.addEventListener("click", cerrarAuto);

function abrirAuto(){
    aplicacionCarro.style.display = "block";
}

function cerrarAuto(){
    aplicacionCarro.style.display = "none";
}

//Alarma para cuarto
const cuartoSvg = document.querySelector("#cuarto");
const aplicacionCuarto = document.querySelector(".aplicacion-cuarto");
const botonCuarto = document.querySelector(".close-cuarto");

cuartoSvg.addEventListener("click", abrirCuarto);
botonCuarto.addEventListener("click", cerrarCuarto);

function abrirCuarto(){
    aplicacionCuarto.style.display = "block";
}

function cerrarCuarto(){
    aplicacionCuarto.style.display = "none";
}

//Alarma para cuarto
const negocioSvg = document.querySelector("#negocio");
const aplicacionNegocio = document.querySelector(".aplicacion-negocio");
const botonNegocio = document.querySelector(".close-negocio");

negocioSvg.addEventListener("click", abrirNegocio);
botonNegocio.addEventListener("click", cerrarNegocio);

function abrirNegocio(){
    aplicacionNegocio.style.display = "block";
}

function cerrarNegocio(){
    aplicacionNegocio.style.display = "none";
}
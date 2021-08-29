//Aplicaciones Arduino 

//Modal Robot
const robotSvg = document.querySelector("#robot");
const modalRobot = document.querySelector(".modal-robot");
const botonCerrar = document.querySelector(".close-modal");

robotSvg.addEventListener("click", abrirRobot);
botonCerrar.addEventListener("click", cerrarRobot);

function abrirRobot(){
    modalRobot.style.display = "block";
}

function cerrarRobot(){
    modalRobot.style.display = "none";
}

//Modal Radar
const radarSvg = document.querySelector("#radar");
const modalRadar = document.querySelector(".modal-radar");
const botonRadar = document.querySelector(".close-radar");

radarSvg.addEventListener("click", abrirRadar);
botonRadar.addEventListener("click", cerrarRadar);

function abrirRadar(){
    modalRadar.style.display = "block";
}

function cerrarRadar(){
    modalRadar.style.display = "none";
}

//Modal Joystick
const controlSvg = document.querySelector("#control");
const modalControl = document.querySelector(".modal-joystick");
const botonControl = document.querySelector(".close-joystick");

controlSvg.addEventListener("click", abrirControl);
botonControl.addEventListener("click", cerrarControl);

function abrirControl(){
    modalControl.style.display = "block";
}

function cerrarControl(){
    modalControl.style.display = "none";
}

//Modal Alarma 
const alarmaSvg = document.querySelector("#alarma");
const modalAlarma = document.querySelector(".modal-alarma");
const botonAlarma = document.querySelector(".close-alarma");

alarmaSvg.addEventListener("click", abrirAlarma);
botonAlarma.addEventListener("click", cerrarAlarma);

function abrirAlarma(){
    modalAlarma.style.display = "block";
}

function cerrarAlarma(){
    modalAlarma.style.display = "none";
}


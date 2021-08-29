//Cuenta regresiva

function countdown(){
    const inicioVenta = new Date("September 6, 2021 00:00:00").getTime();
    const fechaActual = new Date().getTime();
    const diferenciaFechas = inicioVenta - fechaActual;

    //Conversiones 
    const segundo = 1000;
    const minuto = 60 * segundo;
    const hora = minuto * 60;
    const dia = hora * 24;

    //Calcular tiempo
    const tiempoDia = Math.floor(diferenciaFechas / dia);
    const tiempoHora = Math.floor((diferenciaFechas % dia) / hora);
    const tiempoMinuto = Math.floor((diferenciaFechas % hora) / minuto);
    const tiempoSegundo = Math.floor((diferenciaFechas % minuto) / segundo);
    
    //HTML
    document.querySelector(".dia").innerText = tiempoDia;
    document.querySelector(".hora").innerText = tiempoHora;
    document.querySelector(".minutos").innerText = tiempoMinuto;
    document.querySelector(".segundos").innerText = tiempoSegundo;
    
};

setInterval (countdown, 1000);


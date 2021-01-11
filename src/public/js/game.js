let buclePrincipal = {
    idEjecucion: null,
    ultimoRegistro,
    aps,
    fps,
    iterar: (registroTemporal) => {
        buclePrincipal.idEjecucion = window.requestAnimationFrame(buclePrincipal.iterar);
        buclePrincipal.actualizar(registroTemporal);
        buclePrincipal.dibujar();

        if(registroTemporal - buclePrincipal.ultimoRegistro > 999){
            buclePrincipal.ultimoRegistro = registroTemporal;
            console.log("APS: " + buclePrincipal.aps + " | FPS: " + buclePrincipal.fps);
            buclePrincipal.aps = 0;
            buclePrincipal.fps = 0;
        }
    },
    detener: () =>{

    },
    actualizar: (registroTemporal)=>{

    },
    dibujar: (registroTemporal)=>{

    }

}
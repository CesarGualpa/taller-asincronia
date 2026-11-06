const consultarClima = (ciudad) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (ciudad) {

                const clima = {
                    temperatura: "24°C",
                    condicion: "Soleado"
                };

                resolve(clima);

            } else {

                reject("Debe ingresar una ciudad para consultar el clima");

            }

        }, 1500);

    });

};


async function mostrarClima(ciudad) {

    try {

        console.log("Consultando clima de " + ciudad + "...");

        const clima = await consultarClima(ciudad);

        console.log("Ciudad: " + ciudad);
        console.log("Temperatura: " + clima.temperatura);
        console.log("Condición: " + clima.condicion);

    } catch (error) {

        console.log("Error al consultar el clima: " + error);

    }

}


mostrarClima("Quito");
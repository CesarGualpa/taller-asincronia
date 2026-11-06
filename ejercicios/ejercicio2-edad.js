const verificarEdad = (edad) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (edad >= 18) {

                resolve(
                    "Acceso concedido. Bienvenido a la plataforma"
                );

            } else {

                reject(
                    "Acceso denegado. Registro permitido solo para mayores de edad"
                );

            }

        }, 1000);

    });

};


// CASO MAYOR DE EDAD
verificarEdad(20)
    .then((resultado) => {

        console.log(resultado);

    })
    .catch((error) => {

        console.log(error);

    });


// CASO MENOR DE EDAD
verificarEdad(16)
    .then((resultado) => {

        console.log(resultado);

    })
    .catch((error) => {

        console.log(error);

    });
const retirarDinero = (monto) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const saldoDisponible = 500;

            if (monto <= saldoDisponible) {

                const saldoRestante = saldoDisponible - monto;

                resolve(
                    "Retiro exitoso de $" + monto +
                    ". Saldo restante: $" + saldoRestante
                );

            } else {

                reject(
                    "Fondos insuficientes. Límite de retiro: $500"
                );

            }

        }, 1500);

    });

};


// CASO EXITOSO
retirarDinero(200)
    .then((resultado) => {

        console.log(resultado);

    })
    .catch((error) => {

        console.log(error);

    });


// CASO FALLIDO
retirarDinero(600)
    .then((resultado) => {

        console.log(resultado);

    })
    .catch((error) => {

        console.log(error);

    });
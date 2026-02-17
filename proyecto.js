let opcion = "";

while (opcion !== "Salir") {

    console.log("=== NUEVA COTIZACIÓN ===");

    let precioBase = 2000;
    let recargoTotal = 0; // IMPORTANTE reiniciarlo cada vez

    let edad = parseInt(prompt("Ingrese la edad del asegurado:"));

    if (edad < 18) {
        console.log("No se puede asegurar a menores de edad.");
    } else {

        // 🔹 Recargo por edad asegurado
        if (edad >= 18 && edad <= 24) {
            recargoTotal += precioBase * 0.10;
        } else if (edad >= 25 && edad <= 49) {
            recargoTotal += precioBase * 0.20;
        } else if (edad >= 50) {
            recargoTotal += precioBase * 0.30;
        }

        // 🔹 Recargo por cónyuge
        let casado = prompt("¿Está casado? (si/no)");

        if (casado.toLowerCase() === "si") {

            let edadConyuge = parseInt(prompt("Ingrese la edad del cónyuge:"));

            if (edadConyuge >= 18 && edadConyuge <= 24) {
                recargoTotal += precioBase * 0.10;
            } else if (edadConyuge >= 25 && edadConyuge <= 49) {
                recargoTotal += precioBase * 0.20;
            } else if (edadConyuge >= 50) {
                recargoTotal += precioBase * 0.30;
            }
        }

        // 🔹 Recargo por hijos
        let hijos = parseInt(prompt("¿Cuántos hijos tiene?"));
        recargoTotal += hijos * (precioBase * 0.20);

        // 🆕 Recargo por propiedades (35% por cada propiedad)
        let propiedades = parseInt(prompt("¿Cuántas propiedades tiene?"));
        recargoTotal += propiedades * (precioBase * 0.35);

        // 🆕 Recargo por salario (5% del salario)
        let salario = parseFloat(prompt("Ingrese su salario mensual:"));
        recargoTotal += salario * 0.05;

        let total = precioBase + recargoTotal;

        console.log("El total de la cotización es: Q." + total);
    }

    opcion = prompt("Escriba 'Salir' para terminar o presione Enter para continuar");
}

console.log("Programa finalizado.");

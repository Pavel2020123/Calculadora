let numero = parseInt(prompt("Ingresa un número (negativo para salir):"));

while (numero >= 0) {
    console.log("Ingresaste:", numero);
    numero = parseFloat(prompt("Ingresa otro número (negativo para salir):"));
}

console.log("Has ingresado un número negativo. Fin del programa.");

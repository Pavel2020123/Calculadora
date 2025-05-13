let cantidad = parseInt(prompt("INGRESA EL NUMERO DE NUMEROS QUE SE VA A REPETIR EL BUCLE: "));
let suma = 0;

for (let i = 0; i < cantidad; i++) {
    let numero = parseFloat(prompt(`Ingresa el número #${i + 1}:`));
    suma += numero;
}

let promedio = suma / cantidad;

console.log("La suma es:", suma);
console.log("El promedio es:", promedio);

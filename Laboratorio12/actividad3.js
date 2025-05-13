let contraseñaCorrecta = "1234";
let contraseñaIngresada;

do {
    contraseñaIngresada = prompt("Ingresa la contraseña:");
} while (contraseñaIngresada !== contraseñaCorrecta);

console.log("Contraseña correcta. Acceso permitido.");

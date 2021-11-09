let suma: number = 0;
let promedio: number;
function aleatorio(menorValor: number, mayorValor: number): any {
  return Math.floor(Math.random() * (mayorValor - menorValor + 1)) + menorValor;
}

let edades: number[] = new Array(10);

for (let i: number = 0; i < edades.length; i++) {
  edades[i] = aleatorio(3, 7);
  suma = suma + edades[i];
}
promedio = suma / edades.length;
console.log(edades);
console.log("el promedio es ", promedio);

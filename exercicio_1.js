let votosTotais = 5000;
let votosBrancos = 1000;
let votosNulos = 500;
let votosValidos = 3500;

let porcValidos = (votosValidos/votosTotais)*100;
let porcBrancos = (votosBrancos/votosTotais)*100;
let porcNulos = (votosNulos/votosTotais)*100;

console.log(`Válidos: ${porcValidos}%`);
console.log(`Nulos: ${porcNulos}%`);
console.log(`Brancos: ${porcNulos}%`);
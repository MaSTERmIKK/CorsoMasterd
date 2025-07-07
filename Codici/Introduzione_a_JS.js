let nome = "Mirko";
const eta = 30;

console.log("Ciao, " + nome + ". Hai " + eta + " anni.");




let numero = 3;

if (numero > 5) {
  console.log("Il numero è maggiore di 5");
} else {
  console.log("Il numero è 5 o minore");
}


let frutti = ["mela", "banana", "kiwi", "Pompelmo"];

for (let i = 0; i < frutti.length; i++) {
  console.log("Frutto: " + frutti[i]);
}



function saluta(nome) {
  console.log("Ciao, " + nome + "!");
}

let nomiantivo = "Mirko"; 

saluta(nomiantivo);
saluta("Anna");

// Tipi primitivi
let testo = "Ciao mondo 32";      // String
let numero = 42;                  // Number
let booleano = true;              // Boolean
let booleano2 = false;              // Boolean
let indefinito;                   // Undefined (non inizializzata)
let nullo = null;                 // Null (attenzione: typeof ritorna "object" per storicità)
let simbolo = Symbol("id");       // Symbol
let grandeNumero = 123456789012345678901234567890n; // BigInt

// Tipi complessi (object)
let oggetto = { nome: "Anna", eta: 30 };   // Object
let array = [1, 2, 3];                     // Array (è un tipo di oggetto)
function saluta() {                        // Function (anch’essa oggetto)
  return "Ciao!";
}

// Stampa dei tipi e valori
console.log("String:", typeof testo, "-", testo);
console.log("Number:", typeof numero, "-", numero);
console.log("Boolean:", typeof booleano, "-", booleano);
console.log("Undefined:", typeof indefinito, "-", indefinito);
console.log("Null:", typeof nullo, "-", nullo); // typeof null === "object" per errore storico
console.log("Symbol:", typeof simbolo, "-", simbolo.toString());
console.log("BigInt:", typeof grandeNumero, "-", grandeNumero);

console.log("Object:", typeof oggetto, "-", oggetto);
console.log("Array:", typeof array, "-", array);
console.log("Function:", typeof saluta, "-", saluta());

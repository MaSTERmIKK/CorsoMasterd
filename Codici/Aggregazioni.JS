// 1. ARRAY
// Un array contiene più valori ordinati e indicizzati numericamente
let numeri = [10, 20, 30, 40];

// Aggiungiamo un nuovo elemento in fondo
numeri.push(50);

// Stampiamo l'intero array
console.log("Array:", numeri);

// Accediamo al terzo elemento (indice 2)
console.log("Terzo elemento dell'array:", numeri[2]);

// -----------------------------------------------------------

// 2. OBJECT
// Un oggetto memorizza dati come coppie chiave–valore
let persona = {
  nome: "Luca",
  età: 25,
  città: "Torino"
  // professione
};

// Aggiungiamo una nuova proprietà
persona.professione = "Sviluppatore";

// Stampiamo tutto l’oggetto
console.log("Object:", persona);

// Stampiamo un singolo valore tramite la chiave
console.log("Nome della persona:", persona.nome);

// -----------------------------------------------------------

// 3. SET
// Un Set è una collezione di valori unici (niente duplicati)
let numeriUnici = new Set([1, 2, 2, 3, 4, 4]);

// Aggiungiamo un nuovo numero (se non esiste già)
numeriUnici.add(5);

// Stampiamo il contenuto del Set
console.log("Set:", numeriUnici);

// Verifichiamo se un elemento esiste nel Set
console.log("Il Set contiene il numero 3?", numeriUnici.has(3));

// -----------------------------------------------------------

//  4. MAP
// Una Map memorizza coppie chiave–valore e mantiene l’ordine di inserimento
let capitale = new Map();

// Aggiungiamo coppie chiave–valore
capitale.set("Italia", "Roma");
capitale.set("Francia", "Parigi");
capitale.set("Spagna", "Madrid");

// Stampiamo l’intera mappa
console.log("Map:", capitale);

// Otteniamo un valore tramite la chiave
console.log("Capitale della Francia:", capitale.get("Francia"));

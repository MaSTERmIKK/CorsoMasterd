// Lista di studenti con i loro voti

let studenti = [
  { nome: "Anna", voto: 28 },
  { nome: "Marco", voto: 30 },
  { nome: "Luca", voto: 24 }
];

// 1) Ciclo for: stampiamo i nomi degli studenti
for (let i = 0; i < studenti.length; i++) {
  console.log("Studente: " + studenti[i].nome);
}

// 2) Ciclo while: calcoliamo la media dei voti
let somma = 0;
let index = 0;
while (index < studenti.length) {
  somma += studenti[index].voto;
  index++;
}
let media = somma / studenti.length;
console.log("Media voti: " + media);

// 3) Ciclo for...of: stampiamo i voti superiori a 25
for (let studente of studenti) {
  if (studente.voto > 25) {
    console.log(studente.nome + " ha un voto alto: " + studente.voto);
  }}

// 4) Ciclo for...in: stampiamo le proprietà del primo studente
for (let chiave in studenti[0]) {
  console.log("Proprietà: " + chiave + " = " + studenti[0][chiave]);
}

// Programma che simula un controllo di accesso con bonus

let nome = "Luca";
let eta = 20;
let voto = 7;
let password = "1234";

// 1. Controllo età con if/else
if (eta < 18) {
  console.log(nome + " non può accedere (minorenne).");
} else {
  console.log(nome + " è maggiorenne.");
  
  // 2. Controllo password con operatore logico &&
  if (password === "1234" && nome === "Luca") {
    console.log("Accesso consentito.");
    
    // 3. Valutazione del voto con else if
    if (voto >= 9) {
      console.log("Valutazione: Ottimo");
    } else if (voto >= 6) {
      console.log("Valutazione: Sufficiente");
    } else {
      console.log("Valutazione: Insufficiente");
    }
    
    // 4. Uso operatore ternario per assegnare bonus
    let bonus = (voto >= 8) ? 10 : 5;
    console.log("Bonus ottenuto: " + bonus);
    
    // 5. Dimostrazione di truthy/falsy
    let codicePromo = "";  // stringa vuota → falsy
    if (codicePromo) {
      console.log("Hai usato un codice promo.");
    } else {
      console.log("Nessun codice promo inserito.");
    }
    
  } else {
    console.log("Accesso negato: credenziali errate.");
  }
}

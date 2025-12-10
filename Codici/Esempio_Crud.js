// ============================================================================
// ESEMPIO COMPLETO DI CRUD IN JAVASCRIPT (IN-MEMORIA)
// ============================================================================
// - Gestiamo una "tabella" di utenti come array di oggetti.
// - Implementiamo: Create, Read (tutti / singolo), Update, Delete.
// - Nei commenti evidenziamo alcuni possibili problemi di un CRUD reale.
// ============================================================================

// "Database" in memoria (in un sistema reale sarebbe un DB SQL/NoSQL)
let utenti = [];
let nextId = 1; // ID incrementale per semplicità

// ============================================================================
// CREATE - Crea un nuovo utente
// ============================================================================
/*
  Possibili problemi:
  - Nessuna validazione dei dati (es. nome vuoto, email non valida).
  - Duplicati (stessa email inserita più volte).
  - Mancanza di controlli sui permessi (chi può creare cosa?).
*/
function createUser(nome, email) {
  // Validazione minimale
  if (!nome || !email) {
    throw new Error("Nome ed email sono obbligatori (CREATE).");
  }

  // Controllo duplicato per email (molto basico)
  const esiste = utenti.some(u => u.email === email);
  if (esiste) {
    throw new Error("Esiste già un utente con questa email (CREATE).");
  }

  // Creazione del nuovo utente
  const nuovoUtente = {
    id: nextId++,   // ID univoco incrementale
    nome: nome,
    email: email,
    attivo: true,   // campo esempio per logica di business
    creatoIl: new Date()
  };

  utenti.push(nuovoUtente);
  return nuovoUtente;
}

// ============================================================================
// READ - Leggere utenti
// ============================================================================
/*
  Possibili problemi:
  - Read "aperta" che restituisce tutti i dati (anche sensibili).
  - Mancanza di paginazione (lista enorme => problemi di performance).
  - Nessun filtro su campi riservati (es. password, ruoli, ecc.).
*/

// READ: tutti gli utenti
function getAllUsers() {
  // In un caso reale si dovrebbero esporre solo i campi necessari
  return utenti;
}

// READ: singolo utente per ID
function getUserById(id) {
  const utente = utenti.find(u => u.id === id);

  if (!utente) {
    // In una API sarebbe meglio rispondere con 404 Not Found
    throw new Error(`Utente con id=${id} non trovato (READ).`);
  }

  return utente;
}

// ============================================================================
// UPDATE - Aggiornare un utente esistente
// ============================================================================
/*
  Possibili problemi:
  - Aggiornare tutto l’oggetto senza controllo (mass assignment).
  - Concorrenza: due update contemporanei che si sovrascrivono.
  - Nessun controllo su chi ha il permesso di modificare cosa.
*/
function updateUser(id, datiAggiornamento) {
  const utente = utenti.find(u => u.id === id);

  if (!utente) {
    throw new Error(`Utente con id=${id} non trovato (UPDATE).`);
  }

  // Esempio di "whitelisting" dei campi aggiornabili
  if (typeof datiAggiornamento.nome === "string" && datiAggiornamento.nome.trim() !== "") {
    utente.nome = datiAggiornamento.nome;
  }

  if (typeof datiAggiornamento.email === "string" && datiAggiornamento.email.trim() !== "") {
    // Controllo duplicato email su altri utenti
    const esiste = utenti.some(u => u.email === datiAggiornamento.email && u.id !== id);
    if (esiste) {
      throw new Error("Email già usata da un altro utente (UPDATE).");
    }
    utente.email = datiAggiornamento.email;
  }

  if (typeof datiAggiornamento.attivo === "boolean") {
    utente.attivo = datiAggiornamento.attivo;
  }

  // In un contesto più complesso potremmo gestire una versione (optimistic locking)
  utente.aggiornatoIl = new Date();

  return utente;
}

// ============================================================================
// DELETE - Eliminare un utente
// ============================================================================
/*
  Possibili problemi:
  - Cancellazione fisica dei dati (potrebbe servire soft delete per audit/log).
  - Nessun controllo di permessi (chi può cancellare chi?).
  - Effetti collaterali su dati collegati (FK, referenze, logiche di dominio).
*/
function deleteUser(id) {
  const lunghezzaOriginale = utenti.length;

  // Cancellazione fisica: l'oggetto sparisce dalla lista
  utenti = utenti.filter(u => u.id !== id);

  const eliminato = utenti.length < lunghezzaOriginale;
  if (!eliminato) {
    throw new Error(`Utente con id=${id} non trovato (DELETE).`);
  }

  return true;
}

// ============================================================================
// ESECUZIONE DI PROVA (simulazione di utilizzo CRUD)
// ============================================================================

try {
  console.log("=== CREATE ===");
  const u1 = createUser("Mirko", "mirko@example.com");
  const u2 = createUser("Anna", "anna@example.com");
  console.log("Utenti creati:", u1, u2);

  console.log("\n=== READ TUTTI ===");
  console.log(getAllUsers());

  console.log("\n=== READ PER ID ===");
  console.log(getUserById(u1.id));

  console.log("\n=== UPDATE ===");
  const u1Aggiornato = updateUser(u1.id, { nome: "Mirko Updated", attivo: false });
  console.log("Utente aggiornato:", u1Aggiornato);

  console.log("\n=== DELETE ===");
  const cancellato = deleteUser(u2.id);
  console.log("Utente 2 cancellato?", cancellato);

  console.log("\n=== READ FINALE ===");
  console.log(getAllUsers());

} catch (err) {
  // Gestione base degli errori (in una API andrebbe mappato su HTTP status code)
  console.error("Errore:", err.message);
}

/*
NOTE FINALI:
- Questo esempio usa un "database" in memoria: ad ogni riavvio si perde tutto.
- In un’app reale avresti:
  - un DB vero (SQL/NoSQL),
  - controlli di autenticazione e autorizzazione,
  - paginazione per la READ,
  - sistema di log e audit,
  - gestione di concorrenza (es. optimistic locking),
  - gestione di transazioni quando ci sono più operazioni collegate.
*/

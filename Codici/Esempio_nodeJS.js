// =============================
// 1. Server HTTP base
// =============================
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from Node.js!');
});

server.listen(3000);


// =============================
// 2. Lettura file con fs
// =============================
const fs = require('fs');

fs.readFile('testo.txt', 'utf8', (err, data) => {
  if (err) return console.error(err);
  console.log(data);
});


// =============================
// 3. Scrittura file con fs
// =============================
fs.writeFile('output.txt', 'Ciao!', (err) => {
  if (err) return console.error(err);
  console.log("File scritto!");
});


// =============================
// 4. Server Express semplice
// =============================
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express!');
});

app.listen(3000);


// =============================
// 5. Richiesta HTTP esterna con Axios
// =============================
const axios = require('axios');

axios.get('https://api.github.com/users/octocat')
  .then(res => console.log(res.data))
  .catch(err => console.error(err));


// =============================
// 6. Uso Moduli (CommonJS)
// =============================
// File: math.js
// module.exports.somma = (a, b) => a + b;

// File: index.js
// const { somma } = require('./math');
// console.log(somma(5, 3));


// =============================
// 7. Async / Await
// =============================
async function fetchData() {
  return new Promise(resolve => setTimeout(() => resolve("OK"), 1500));
}

async function run() {
  const result = await fetchData();
  console.log(result);
}

run();


// =============================
// 8. REST API Express
// =============================
const api = express();
api.use(express.json());

api.post('/user', (req, res) => {
  const { name } = req.body;
  res.json({ message: `Utente ${name} creato` });
});

api.listen(3001);

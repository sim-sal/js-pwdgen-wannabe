// dichiaro le variabili
let nomeUtente, cognomeUtente, coloreUtente, password, messaggio;

// Chiedere all’utente il suo nome 
nomeUtente = prompt("inserisci il tuo nome");
console.log(nomeUtente);

// chiedere il suo cognome
cognomeUtente = prompt("Inserisci il tuo cognome");
console.log(cognomeUtente);

// chiedere il suo colore preferito
coloreUtente = prompt("Inserisci il tuo colore preferito");
console.log(coloreUtente);

// creo password
password = nomeUtente + cognomeUtente + coloreUtente + 21;
console.log(password);

// creo messaggio per utente
messaggio = `La tua password generata è: ${password}`;
console.log(messaggio);

// infine, riportare il tutto sulla pagina
document.getElementById("mio_id").innerHTML = messaggio;







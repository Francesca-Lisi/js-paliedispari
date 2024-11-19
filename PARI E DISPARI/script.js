// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri.
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// PARI o DISPARI  GIOCATORE -----------------------------------

let giocataPlayer;          
let giocataValida = false;

do {
  giocataPlayer = prompt('Gioca PARI o DISPARI');
  if(giocataPlayer.toUpperCase() === 'PARI' || giocataPlayer.toUpperCase() === 'DISPARI'){
    giocataValida = true;
  }
} while (!giocataValida)

console.log(giocataPlayer)

// NUMERO DA 1 A 5 GIOCATORE ----------------------------------

let numeroPlayer;          
let isNumberValid = false;

while(!isNumberValid){
  numeroPlayer = parseInt(prompt('Inserisci un numero compreso fra 1 e 5'));
  if(!isNaN(numeroPlayer) && numeroPlayer > 0 && numeroPlayer < 6){
    isNumberValid = true;
  }
}

console.log(numeroPlayer)

// NUMERO DA 1 A 5 COMPUTER ------------------------------------

const numeroComputer = Math.floor(Math.random() * 5) + 1;

console.log(numeroComputer)

// SOMMA ------------------------------------------------------

const somma = numeroPlayer + numeroComputer 

console.log(somma);

// CONTROLLO DELLA SOMMA SE PARI O DISPARI --------------------
let risultato;

if (somma % 2) {
  risultato = 'DISPARI'
} else {
  risultato = 'PARI'
}
console.log(risultato)

// STABILIRE VINCITORE --------------------
let message;

if (risultato === giocataPlayer) {
  message = 'Hai Vinto!'
} else {
  message = 'Hai Perso!'
} 

console.log(message);
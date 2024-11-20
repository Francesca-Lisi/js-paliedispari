// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri.
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// PARI o DISPARI  GIOCATORE -----------------------------------

let giocataPlayer;          
let giocataValida = false;

do {
  giocataPlayer = prompt('Gioca PARI o DISPARI').toUpperCase();
  if(giocataPlayer === 'PARI' || giocataPlayer === 'DISPARI'){
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

//NUMERO DA 1 A 5 COMPUTER ---------------------(usare FUNZIONE)

let numeroComputer;

function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min)
}
 
numeroComputer = getRandomNumber(1,5);

console.log(numeroComputer)


// SOMMA ------------------------------------------------------

const somma = numeroPlayer + numeroComputer 

console.log(somma);

// CONTROLLO DELLA SOMMA SE PARI O DISPARI -------(usare FUNZIONE)

// let risultato;

function checkRisultato() {
if (somma % 2) {
  return 'DISPARI'
} else {
  return 'PARI'
}
}


console.log(checkRisultato())

// STABILIRE VINCITORE ---------------------------------------
let message;

if (checkRisultato() === giocataPlayer) {
  message = 'Hai Vinto!'
} else {
  message = 'Hai Perso!'
} 

console.log(message);
//Chiedere all’utente di inserire una parola.
//Creare una funzione per capire se la parola inserita è palindroma

const parolaUtente = prompt('inserisci una parola').toLowerCase();
let message;


// function parolaPalindromaCheck (parolaUtente) {
  let parolaReverse = ''; 
  for(let i = parolaUtente.length - 1; i >= 0; i-- ){
  parolaReverse += parolaUtente.at(i);
  }


if (parolaUtente === parolaReverse) {
  message = `La parola ${parolaUtente} è Palindroma`; 
} else {
  message = `La parola ${parolaUtente} NON è Palindroma`;
}


console.log(message);

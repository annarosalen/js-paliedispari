// ESERCIZIO Palidroma


// Chiedere all’utente di inserire una parola
var parolaUte = prompt("inserisci una parola");
console.log(funzparola(parolaUte));


// Creare una funzione per capire se la parola inserita è palindroma

function funzparola(parola) {
  if (parola == parola.split('').reverse().join('')){
    return "è palindroma";
  }else{
    return "non è palindroma";
  }
}

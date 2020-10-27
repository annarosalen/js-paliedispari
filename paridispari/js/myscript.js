// ESERCIZIO Pari e Dispari

// L’utente sceglie pari o dispari
var pariodispari = prompt("scrivi pari o dispari");
console.log(pariodispari);

// utente inserisce un numero da 1 a 5.
var numeroUte = parseInt(prompt("inserisci un numero da 1 a 5"));
console.log(numeroUte);



// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
var numeroPc = Math.floor(Math.random() *5) + 1;
console.log(numeroPc);


// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) e dichiariamo chi ha vinto
function funzione(numb1, numb2){
  if (pariodispari != "pari" && pariodispari != "dispari") {
    return "ERRORE! : non hai scelto pari o dispari";
  }

  if (numeroUte < 1 || numeroUte > 5) {
    return "ERRORE! : non hai inserito un numero da 1 a 5";
  }

  var risultato = numb1 + numb2;
  if (risultato % 2 === 0 && pariodispari === "pari") {
    return "hai vinto";
  }else{
    return "ha vinto il computer";
  }
}

var somma = funzione(numeroUte, numeroPc);
console.log(somma);

document.getElementById('stampa').innerHTML = somma;

/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65. */


let userFullName = document.getElementById("full_name").value
console.log(userFullName);

let trip_km = document.getElementById("trip_km").value
console.log(trip_km);

let user_age = document.getElementById("age").value
console.log(user_age);

//calcoliamo la tariffa del viaggio
let trip_cost = trip_km * 0.21


//calcoliamo gli sconti in base all'età dell'utente
if (user_age === 'minorenne') {
    trip_cost = (trip_km * 0.21) * 0.80
} else if (user_age === 'over 65') {
    trip_cost = (trip_km * 0.21) * 0.60
} 


console.log(trip_cost.toFixed(2) + " €")

//stampiamo il risultato all'utente

//bonus - avvisiamo l'utente se ha ricevuto uno sconto




document.getElementById("generate").addEventListener("click", function(){
    document.getElementById("p-name").innerHTML = userFullName
    document.getElementById("discount").innerHTML = `SCONTO ${user_age}`
    document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 10) + 1
    document.getElementById("cp").innerHTML = Math.floor(Math.random() * 10000) + 1
    document.getElementById("trip_cost").innerHTML = `${trip_cost.toFixed(2)} €`


});

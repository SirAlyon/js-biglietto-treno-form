/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65. */


const userFullName = document.getElementById("full_name")
console.log(userFullName);

const trip_km = Number(document.getElementById("trip_km").value)
console.log(trip_km);

let user_age = document.getElementById("age").value
console.log(user_age);

//calcoliamo la tariffa del viaggio
let trip_cost = trip_km * 0.21


//blocchiamo l'utente se scrive testo nei km da percorrere
if (isNaN(trip_km)) {
    alert("Per favore inserisci un valore numerico per indicare la distanza che vuoi percorrere in treno!")
}

//calcoliamo gli sconti in base all'età dell'utente
if (user_age === 'minorenne') {
    trip_cost = (trip_km * 0.21) * 0.80
} else if (user_age === 'over 65') {
    trip_cost = (trip_km * 0.21) * 0.60
} 


//creazione biglietto
document.getElementById("generate").addEventListener("click", function(){
    document.getElementById("p-name").innerHTML = userFullName.value.toUpperCase()
    document.getElementById("discount").innerHTML = `SCONTO ${user_age.toUpperCase()}`
    document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 10) + 1
    document.getElementById("cp").innerHTML = Math.floor(Math.random() * 10000) + 1
    document.getElementById("trip_cost").innerHTML = `${trip_cost.toFixed(2)} €`
    if (user_age ==='maggiorenne') {
        document.getElementById("discount").innerHTML = `SCONTO NON DISPONIBILE`
    }
    if(isNaN(trip_cost)){
        document.getElementById("trip_cost").innerHTML = `IMPOSSIBILE CALCOLARE LA TARIFFA, RICONTROLLA I DATI INSERITI`
    }
});

/* document.getElementById("delete").addEventListener("click", function(){
    document.getElementById("p-name").innerHTML = ''
    document.getElementById("discount").innerHTML = ''
    document.getElementById("carrozza").innerHTML = ''
    document.getElementById("cp").innerHTML = ''
    document.getElementById("trip_cost").innerHTML = ''
    document.getElementById("full_name").value = ''
    document.getElementById("trip_km").value = ''
    document.getElementById("age").value = ''
});  */

document.getElementById("delete").addEventListener("click", function(){
    document.location.reload();
    document.getElementById("p-name").innerHTML = ''
    document.getElementById("discount").innerHTML = ''
    document.getElementById("carrozza").innerHTML = ''
    document.getElementById("cp").innerHTML = ''
    document.getElementById("trip_cost").innerHTML = ''
    document.getElementById("full_name").value = ''
    document.getElementById("trip_km").value = ''
    document.getElementById("age").value = ''
}); 
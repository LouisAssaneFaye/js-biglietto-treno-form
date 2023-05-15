
const inputKm = parseInt(document.getElementById('user-Km'));
console.log(inputKm);
const inputAge = parseInt(document.getElementById('user-age'));
console.log(inputAge);
const price = 0.233 * inputKm;
console.log(price);

let ActualPrice

if ( isNaN(inputKm) || isNaN(inputAge) ) {
    ActualPrice = "C'è un errore nella scrittura dei dati";
} else if (inputAge <= 18 ){
    ActualPrice = 0.194 * price;
    ActualPrice = ActualPrice.toFixed(2);
} else if (inputAge >= 65 ){
    ActualPrice = 0.377 * price
    ActualPrice = ActualPrice.toFixed(2);
} else {
    ActualPrice= price;
}

console.log(ActualPrice);



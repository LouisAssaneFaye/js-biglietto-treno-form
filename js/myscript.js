
const inputKm = document.getElementById('user-Km');

const inputAge = document.getElementById('user-age');

const button = document.querySelector('button.button');

let ActualPrice;


button.addEventListener('click', function() {
    
    console.log(inputKm.value);
    console.log(inputAge.value);
    console.log(inputKm.value * 0.233);
    
    
    if ( inputAge.value <= 18 ) {
        ActualPrice = 0.194 * inputKm.value * 0.233;
        console.log(ActualPrice);
    } else if (inputAge.value >= 65 ){
        ActualPrice = 0.377 * inputKm.value * 0.233;
        console.log(ActualPrice);
    } else {
        ActualPrice= inputKm.value * 0.233;
        console.log(ActualPrice);
    }

    document.getElementById('prezzo_finale').innerHTML = ActualPrice + "Euro" ;

});



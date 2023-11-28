document.getElementById('formMuunna').addEventListener('submit', muunnaLampo);
document.body.style.fontFamily = "Tahoma";

function muunnaLampo(event) {
    event.preventDefault()
    
    // valikosta valittava syote
    let valinta = document.getElementById("yksikot").value;
    
    // muutettava lämpötila
    let syote = document.querySelector('input').value;
    
    // desimaalin valinta
    let desimaali = '';

    if(document.getElementById('yksi').checked == true) {
        desimaali = "yksi";
    } else if(document.getElementById('kaksi').checked == true) {
        desimaali = 'kaksi';
    } else {
        desimaali = 'kolme';
    }

   
    // laskutoimitukset
    
    if(valinta == "cf") {
        syote = (syote)* 1.8 + 32; // kaava celsiuksesta fahrenheitiin
    }
    else if(valinta == "ck") {
        syote = parseInt(syote) + 273.15; // kaava celsiuksesta kelviniin
    }
    else if(valinta == "fc") {
        syote = (syote - 32) / 1.8; // kaava fahrenheitista celsiukseen
    }
    else if(valinta == "fk") {
        syote = parseInt(syote) + 459.67 / 1.8; // kaava fahrenheitista kelviniin
    }
    else if(valinta == "kf") {
        syote = syote * 1.8 -459.67; // kaava kelvinistä fahrenheitiin
    }
    else if(valinta == "kc") {
        syote = syote - 273.15; // kaava kelvininstä celsiukseen
    }
    else if(valinta =="info") {
        syote = "Valitse muunnin";
    }
    else {
        syote = "Syötä lämpötila";
    }
    
    switch (desimaali) {
        case 'yksi':
            document.getElementById('tulos').innerHTML = syote.toFixed(1);
            break;
        case 'kaksi':
            document.getElementById('tulos').innerHTML = syote.toFixed(2);
            break;
        default:
            document.getElementById('tulos').innerHTML = syote.toFixed(3);
        }

    document.body.style.backgroundColor = "#dedede";
}


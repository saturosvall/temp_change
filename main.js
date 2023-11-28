document.getElementById('formMuunna').addEventListener('submit', muunnaLampo);
document.body.style.fontFamily = "Tahoma";

function muunnaLampo(event) {
    event.preventDefault()
    
    // valikosta valittava syote
    let valinta = document.getElementById("yksikot").value;
    
    // muutettava lämpötila
    let syote = document.querySelector('input').value;

    // syötteiden validointi
    if (isNaN(syote) || syote=='') {
        alert("Syötä numero!")
    }
    
    // desimaalin todentaminen
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
        tulos = (syote)* 1.8 + 32; // kaava celsiuksesta fahrenheitiin
        document.getElementById('tulos').innerHTML = "Fahrenheitia";

        if(tulos < -459.40) {
            document.getElementById('huomio').innerHTML = "Huom! Lämpötila on pienempi kuin absoluuttinen nollapiste!";
        }
    }
    else if(valinta == "ck") {
        tulos = parseInt(syote) + 273.15; // kaava celsiuksesta kelviniin
        if(tulos < 0.15) {
            document.getElementById('huomio').innerHTML = "Huom! Lämpötila on pienempi kuin absoluuttinen nollapiste!";
        }
    }
    else if(valinta == "fc") {
        tulos = (syote - 32) / 1.8; // kaava fahrenheitista celsiukseen
        if(tulos < -273.15) {
            document.getElementById('huomio').innerHTML = "Huom! Lämpötila on pienempi kuin absoluuttinen nollapiste!";
        }
    }
    else if(valinta == "fk") {
        tulos = parseInt(syote) + 459.67 / 1.8; // kaava fahrenheitista kelviniin
        if(tulos < 0) {
            document.getElementById('huomio').innerHTML = "Huom! Lämpötila on pienempi kuin absoluuttinen nollapiste!";
        }
    }
    else if(valinta == "kf") {
        tulos = syote * 1.8 -459.67; // kaava kelvinistä fahrenheitiin
        if(tulos < -459.40) {
            document.getElementById('huomio').innerHTML = "Huom! Lämpötila on pienempi kuin absoluuttinen nollapiste!";
        }
    }
    else if(valinta == "kc") {
        tulos = syote - 273.15; // kaava kelvininstä celsiukseen
        if(tulos < -273.15) {
            document.getElementById('huomio').innerHTML = "Huom! Lämpötila on pienempi kuin absoluuttinen nollapiste!";
        }
    }
    else if(valinta =="info") {
        document.getElementById('tulos').innerHTML = "Valitse muunnin!";
    } else {
        document.getElementById('tulos').innerHTML = "Valitse muunnin!";
    }
    
    // tulos desimaalin mukaan
    switch (desimaali) {
        case 'yksi':
            document.getElementById('tulos').innerHTML = tulos.toFixed(1);
            break;
        case 'kaksi':
            document.getElementById('tulos').innerHTML = tulos.toFixed(2);
            break;
        default:
            document.getElementById('tulos').innerHTML = tulos.toFixed(3);
        }

    document.body.style.backgroundColor = "#dedede";
}



console.log("testi")
document.getElementById('formMuunna').addEventListener('submit', muunnaLampo);


function muunnaLampo(event) {
    event.preventDefault()
    
    let valinta = document.getElementById("yksikot").value;
    let syote = document.querySelector('input').value;
    document.getElementById('tulos').innerHTML = muunnos;

  
    if(valinta == "cf") {
        celsiusTofahrenheit(syote)    
    }    
    
    else if(valinta == "ck") {
        celsiusTokelvin()
    }
    
    else if(valinta == "fc") {
        fahrenheitTocelsius()
    }

    else if(valinta == "fk") {
        fahrenheitTokelvin()
    }
    
    else if(valinta == "kf") {
        kelvinTofahrenheit()
    }
    
    else if (valinta == "kc") {
        kelvinTocelsius()
    }

    else {
        syote = syote;
    }
        
  
}

let muunnos = null;
function celsiusTofahrenheit(syote) {
    muunnos = (syote) * 1.8 + 32;
    return muunnos  
}

function celsiusTokelvin() {
    muunnos = parseInt(syote) + 273.15;
    return muunnos  
}

function fahrenheitTocelsius() {
    muunnos = (syote - 32) / 1.8;
    return muunnos  
}

function fahrenheitTokelvin() {
    muunnos = parseInt(syote) + 459.67 / 1.8;
    return muunnos  
}

function kelvinTofahrenheit() {
    muunnos = syote * 1.8 -459.67;
    return muunnos  
}

function kelvinTocelsius() {
    muunnos = syote - 273,15;
    return muunnos  
}
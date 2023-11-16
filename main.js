

document.getElementById('formMuunna').addEventListener('submit', muunnaLampo);


function muunnaLampo(event) {
    event.preventDefault()
    // muuttujien määrittely
    // muutettava lämpötila
    let syote = document.querySelector('input').value;
    // valikosta valittava muunnos
    let valinta = document.getElementById("yksikot");
    valinta = valinta.options[valinta.selectedIndex].text;
    //console.log(valinta);
    //console.log(syote);

    // laskutoimitukset
    if(valinta == "cf") 
    syote = (syote)* 1.8 + 32; // kaava celsiuksesta fahrenheitiin
    
    else if(valinta == "ck") 
    syote = syote + 273,15; // kaava celsiuksesta kelviniin
    
    else if(valinta == "fc") 
    syote = (syote - 32) / 1.8 // kaava fahrenheitista celsiukseen
    
    else if(valinta == "fk") 
    syote = (syote + 459.67) / 1.8 // kaava fahrenheitista kelviniin
    
    else if(valinta == "kf") 
    syote = syote * 1.8 -459.67 // kaava kelvinistä fahrenheitiin
    
    else (valinta == "kc") 
    syote = syote - 273,15 // kaava kelvininstä celsiukseen
    
    document.getElementById('tulos').innerHTML = 5+6;
    
}

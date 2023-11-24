
console.log("testi")
document.getElementById('formMuunna').addEventListener('submit', muunnaLampo);


function muunnaLampo(event) {
    event.preventDefault()
    // muuttujien määrittely
    

    // valikosta valittava muunnos
    let valinta = document.getElementById("yksikot");
    valinta = valinta.options[valinta.selectedIndex].text;
    
    // muutettava lämpötila
    let syote = document.querySelector('input').value;
    //let syote = Number(document.getElementById('flampo').value);
    

    // laskutoimitukset
    
    if(valinta == "cf") 
    syote = (syote)* 1.8 + 32; // kaava celsiuksesta fahrenheitiin // kaava celsiuksesta fahrenheitiin
    
    else if(valinta == "ck") 
    syote = syote + 273,15;// kaava celsiuksesta kelviniin
    
    else if(valinta == "fc") 
    syote = (syote - 32) / 1.8// kaava fahrenheitista celsiukseen
    
    else if(valinta == "fk") 
    syote = (syote + 459.67) / 1.8 // kaava fahrenheitista kelviniin
    
    else if(valinta == "kf") 
    syote = syote * 1.8 -459.67 // kaava kelvinistä fahrenheitiin
    
    else if (valinta == "kc") 
    syote = syote - 273,15 // kaava kelvininstä celsiukseen +

    else (valinta == "")
    syote = syote
    
    console.log(syote)
    console.log(valinta)
    document.getElementById('tulos').innerHTML = syote;
}
// sintak javascript

function convert(){
    const celcius = document.getElementById("celcius").value;
    const fahrenheit = (celcius * 1.8) + 32;
    document.getElementById("fahrenheit").value = fahrenheit;
    document.getElementById("cara-konversi").value = celcius + "\xB0C" +" = * 1.8 + 32 = " + fahrenheit + "\xB0F";
}
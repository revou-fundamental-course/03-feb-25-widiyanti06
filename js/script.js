let isFahrenheitToCelsius = true;

// fungsi konversi suhu
function convertTemperature() {
    if (isFahrenheitToCelsius) {
        let fahrenheit = parseFloat(document.getElementById("temperatureInput").value);
        let celsius = (fahrenheit - 32) * 5 / 9;
        document.getElementById("result").value = `${celsius.toFixed(2)}°C`;
        document.getElementById("cara-konversi").value = `(${fahrenheit}°F - 32) * 5/9 = ${celsius.toFixed(2)}°C`;
    } else {
        let celsius = parseFloat(document.getElementById("temperatureInput").value);
        let fahrenheit = (celsius * 9 / 5) + 32;
        document.getElementById("result").value = `${fahrenheit.toFixed(2)}°C`;
        document.getElementById("cara-konversi").value = `(${celsius}°C* 9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
    }
}

//fungsi untuk melakukan reset
function reset() {
    document.getElementById("temperatureInput").value = "";
    document.getElementById("result").value = "";
    document.getElementById("cara-konversi").value = "";
}

//fungsi untuk mereverse suhu
function reverseConversion() {
    isFahrenheitToCelsius = !isFahrenheitToCelsius;
    document.getElementById("unitLabel").innerText = isFahrenheitToCelsius ? "Fahrenheit:" : "Celsius:";
    document.getElementById("resultLabel").innerText = isFahrenheitToCelsius ? "Celsius:" : "Fahrenheit:";
    document.getElementById("temperatureInput").value = "";
    document.getElementById("result").value = "";
    document.getElementById("cara-konversi").value = "";
}
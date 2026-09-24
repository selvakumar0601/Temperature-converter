const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const kelvin = document.getElementById("kelvin");

const error = document.getElementById("error");
const clearBtn = document.getElementById("clearBtn");

// Celsius → Fahrenheit
function celsiusToFahrenheit(c) {
    return (c * 9 / 5) + 32;
}

// Celsius → Kelvin
function celsiusToKelvin(c) {
    return c + 273.15;
}

// Fahrenheit → Celsius
function fahrenheitToCelsius(f) {
    return (f - 32) * 5 / 9;
}

// Kelvin → Celsius
function kelvinToCelsius(k) {
    return k - 273.15;
}

// Celsius input
celsius.addEventListener("input", () => {

    const value = parseFloat(celsius.value);

    if (isNaN(value)) {
        fahrenheit.value = "";
        kelvin.value = "";
        error.textContent = "";
        return;
    }

    if (value < -273.15) {
        error.textContent = "Temperature cannot be below absolute zero.";
        fahrenheit.value = "";
        kelvin.value = "";
        return;
    }

    error.textContent = "";

    fahrenheit.value = celsiusToFahrenheit(value).toFixed(2);
    kelvin.value = celsiusToKelvin(value).toFixed(2);
});

// Fahrenheit input
fahrenheit.addEventListener("input", () => {

    const value = parseFloat(fahrenheit.value);

    if (isNaN(value)) {
        celsius.value = "";
        kelvin.value = "";
        error.textContent = "";
        return;
    }

    if (value < -459.67) {
        error.textContent = "Temperature cannot be below absolute zero.";
        celsius.value = "";
        kelvin.value = "";
        return;
    }

    error.textContent = "";

    const c = fahrenheitToCelsius(value);

    celsius.value = c.toFixed(2);
    kelvin.value = celsiusToKelvin(c).toFixed(2);
});

// Kelvin input
kelvin.addEventListener("input", () => {

    const value = parseFloat(kelvin.value);

    if (isNaN(value)) {
        celsius.value = "";
        fahrenheit.value = "";
        error.textContent = "";
        return;
    }

    if (value < 0) {
        error.textContent = "Kelvin temperature cannot be negative.";
        celsius.value = "";
        fahrenheit.value = "";
        return;
    }

    error.textContent = "";

    const c = kelvinToCelsius(value);

    celsius.value = c.toFixed(2);
    fahrenheit.value = celsiusToFahrenheit(c).toFixed(2);
});

// Clear button
clearBtn.addEventListener("click", () => {
    celsius.value = "";
    fahrenheit.value = "";
    kelvin.value = "";
    error.textContent = "";
});
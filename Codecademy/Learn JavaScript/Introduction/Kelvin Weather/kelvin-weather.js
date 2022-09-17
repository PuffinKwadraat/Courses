// Kelvin Temperature.
const kelvin = 293;

// Convert Kelvin to Celsius.
const celsius = kelvin - 273;

// Convert Celsius to Newton.
const newton = Math.round(celsius * (33 / 100));

// Convert Celsius to Fahrenheit.
var fahrenheit = celsius * (9 / 5) + 32;

// Remove decimals.
var fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
console.log(`The temperature is ${newton} degrees Newton.`)
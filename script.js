const kelvin = 293;
//The forecast today is 293 degrees Kelvin
let celsius = kelvin - 273;
//To convert from kelvin to celsius I have to substract 273 from kelvin 
let fahrenheit = celsius * (9/5) +32;
//This is the equation to get fahrenheit 
fahrenheit = Math.floor(fahrenheit);
//I round the number so I don't get decimals
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
let newton = Math.floor(celsius * (33/100));
console.log(`The temperature is ${newton} degrees Newton.`);
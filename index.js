// Complete the following functions to make our program work!

/**
 * Converts the given Fahrenheit temperature `f` to Celsius.
 * @param {number} f temperature in °F
 * @returns {number} temperature in °C
 */

function convertToCelsius(Fahrenheit) {
  return (Fahrenheit - 32) * 5 / 9;
}


/**
 * | Temperature | Description |
 * | ----------- | ----------- |
 * | < 32        | "very cold" |
 * | < 64        | "cold"      |
 * | < 86        | "warm"      |
 * | < 100       | "hot"       |
 * | >= 100      | "very hot"  |
 *
 * @param {number} f temperature in °F
 * @returns {string} the description from the table above corresponding to
 * the given Fahrenheit temperature `f`
 */


function createMessage(Fahrenheit, Celsius) {
  let message='';
  const Temperature = (Fahrenheit - 32) * 5 / 9;
  if (Temperature < 32) {
    message = 'Very cold';
  }
  else if (Temperature < 64) {
    message = 'cold';
  }
  else if (Temperature < 86) {
    message = 'warm';
  }
  else if (Temperature < 100) {
    message = 'hot';
  }
  else (Temperature > 100)
  {
    message = 'Very hot';
  }
  
  return `${Fahrenheit} Fahrenheit is ${ Celsius} Celsius. ${message}`;
}

/**
 * @param {number} limit
 * @returns {number} a random integer in the range [0, `limit`)
 */
function rand(limit) {
  return Math.round(Math.random()*limit);
}

// -------------------- DO NOT CHANGE THE CODE BELOW ---------------------- //
/**
 * Converts the given temperature from Fahrenheit to Celsius,
 * then alerts the user with a descriptive message.
 * @param {number} f temperature in °F
 */
let inputTemp = prompt("enter a number, we will convert that number from fahrenheit to Celsius");
let Celsius = convertToCelsius(inputTemp);
let output = createMessage(inputTemp, Celsius);
console.log(output);

inputTemp = prompt('Lets try again! enter a number, we will convert that number from fahrenheit to Celsius');
Celsius = convertToCelsius(inputTemp);
output = createMessage(inputTemp, Celsius);
console.log(output);


let randomTemp = rand(100); 
Celsius = convertToCelsius(randomTemp);
output = createMessage(randomTemp, Celsius);
console.log(output);

randomTemp = rand(100); 
Celsius = convertToCelsius(randomTemp);
output = createMessage(randomTemp, Celsius);
console.log(output);

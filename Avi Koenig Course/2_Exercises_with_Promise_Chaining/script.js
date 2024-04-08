// changed: added as a new branch

// Exercise 1: Basic Arithmetic Operations
// Create a chain of promises to perform and log the result of three arithmetic operations in sequence. 
// Start with a number, then add 5, multiply by 3, and finally subtract 2.

//   The first .then() is attached to the initial promise that resolves with startingNumber.
const startingNumber = 10;
Promise.resolve(startingNumber)
.then(number => number + 5)
.then(number => number * 3)
.then(number => number - 2)

// Exercise 2: String Manipulation
// Write a promise chain that takes a string, converts it to uppercase, then reverses it, and finally appends the string "-finished" at the end. Log the final result.
// Use `then` for every phase
const stringConst = "string";
Promise.resolve(stringConst)
.then(string => string.toUpperCase())
.then(string => string.split("").reverse().join(""))
.then(string => string + "-finished")
.then(finalResult => {
    console.log(finalResult); // Log the final result
  })
// Exercise 3: Array Filtering and Mapping
// Write a function compareToNum that takes a number as an argument and returns a Promise
// that tests if the value is less than or greater than the value 10 (reject otherwise)
function compareToNum(number) {
    return new Promise((resolve, reject) => {
      if (typeof number !== 'number' || isNaN(number)) {
        reject('not a number');
      } else if (number > 10) {
        resolve('greater than 10');
      } else {
        reject('less than or equal to 10');
      }
    });
  }
compareToNum(1)
    .then(result => console.log(result))
    .catch(error => console.log(error));
compareToNum(10)
    .then(result => console.log(result))
    .catch(error => console.log(error));
compareToNum(11)
    .then(result => console.log(result))
    .catch(error => console.log(error));

// Exercise 4: Delayed Greetings
// Simulate a delayed greeting with promises. First, wait 2 seconds, then log "Hello", wait another second, and log "World!". Each step should be done in a separate .then().
function delay(delayTime) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, delayTime);
    });
  }
  
  delay(2000) // Wait 2 seconds
    .then(() => console.log("Hello"))
    .then(() => delay(1000))
    .then(() => console.log("World!"))
    .catch(error => console.error("Error:", error)); 
  

// Exercise 5: Error Handling
// Create a promise chain that attempts to parse JSON data. Use a try/catch block within a .then() method to handle JSON parsing errors. If successful, log the parsed object; if an error occurs, log "Invalid JSON".
// Bonus
// Make an async await version
const jsonData = '{ "name": "Michael", "age": 30 }'; 

function parseJSON(data) {
  return new Promise((resolve, reject) => {
    try {
      const parsedData = JSON.parse(data);
      resolve(parsedData); // Resolve
    } catch (error) {
      reject(error); // Reject 
    }
  });
}

parseJSON(jsonData)
  .then(data => {
    try {
      console.log(data);
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  })
  .catch(error => {
    console.error("Invalid JSON:", error); 
  });

async function parseJSONAsync(data) {
    try {
      const parsedData = await JSON.parse(data);
      return parsedData;
    } catch (error) {
      throw error;
    }
  }
  
  (async () => {
    try {
      const data = await parseJSONAsync(jsonData);
      console.log(data); // Log the parsed object
    } catch (error) {
      console.error("Invalid JSON:", error); // Handle JSON parsing errors
    }
  })();

// Exercise 6: Promise all
// Create "resolveImmediate" that resolves immediately to a number
// Create "resolveDelayed" that resolves to a number after 2 seconds
// function combine(prmX, prmY) {
//   return Promise.all([prmX, prmY]).then((values) => {
//   return values[0] + values[1];
//   });
// }
// // `

// resolveImmediate  ()` should return a promise that is resolved to 25 immediately
// // and `

// resolveDelayed  ()` should return a promise that is resolved after 2 seconds to 17
// combine(resolveImmediate(), resolveDelayed())
// .then((sum) => {
// console.log(sum);
// });
function resolveImmediate(value = 25) { // default value 
    return Promise.resolve(value); // Immediately resolve a promise
  }
  
  function resolveDelayed(value = 17, delay = 2000) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(value); // Resolve after a delay
      }, delay);
    });
  }
  
  function combine(prmX, prmY) {
    return Promise.all([prmX, prmY]) // Wait for both promises to resolve
      .then((values) => values[0] + values[1]); // Add the resolved values
  }
  
  combine(resolveImmediate(), resolveDelayed())
    .then((sum) => {
      console.log(sum); // Log the sum (42, assuming defaults)
    });
  
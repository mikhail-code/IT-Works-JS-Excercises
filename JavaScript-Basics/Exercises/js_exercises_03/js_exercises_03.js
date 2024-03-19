//27

function countLetters(array) {
const letterCount = {};
for (let str of array) {
    str = str.toLowerCase();

    for (let char of str) {
    if (/[a-z]/.test(char)) {
        letterCount[char] = (letterCount[char] || 0) + 1;
    }
    }
}

let maxLetter = '';
let maxCount = 0;
for (let letter in letterCount) {
    if (letterCount[letter] > maxCount) {
    maxLetter = letter;
    maxCount = letterCount[letter];
    }
}

return { letterCount, maxLetter, maxCount };
}

//28
function findItems(arr1, arr2) {
const common = [];

for (let item1 of arr1) {
    for (let item2 of arr2) {
    if (item1 === item2) {
        common.push(item1);
    }
    }
}
return common.length > 0 ? common : false;
}

//29
function steps(N) {
    for (let row = 0; row < N; row++) {
      let shape = '';
      for (let column = 0; column < N; column++) {
        if (column <= row) {
          shape += '#';
        } else {
          shape += ' ';
        }
      }
      console.log(shape);
    }
  }

//30
function isString(str, callback) {
    if (typeof str === 'string') {
      callback(str);
    } else {
      console.log("Error: Input is not a string.");
    }
  }
  
  function logString(string) {
    console.log(string);
  }
  
  isString("Hello", logString);
  isString(123, logString);
  
  function firstWordUpperCase(sentence, callback) {
    const words = sentence.split(" ");
    words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
    const modifiedSentence = words.join("-");
    callback(modifiedSentence);
  }
  
  function createDashes(string) {
    console.log(string);
  }
  
  firstWordUpperCase("this is a test sentence", createDashes);
  
  function myFunction(callback) {
    console.log("Inside myFunction");
    callback();
  }
  
  function callbackFunction() {
    console.log("Callback function is called.");
  }

  //31
  function max(arr) {
    if (arr.length === 0) {
      return undefined;
    }
    return arr.reduce((maxValue, currentValue) => {
      return Math.max(maxValue, currentValue);
    });
  }

  function sumOfEven(arr) {
    return arr.reduce((sum, currentValue) => {
      return currentValue % 2 === 0 ? sum + currentValue : sum;
    }, 0);
  }
  
function average(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  const sum = arr.reduce((total, currentValue) => total + currentValue);
  return sum / arr.length;
}

  
  
  

  
  
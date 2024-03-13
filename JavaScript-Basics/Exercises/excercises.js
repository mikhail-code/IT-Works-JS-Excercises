// ex
let myString = "String";
let myNumber = 1;
let myObject = { key: "value" };
let myBoolean = true;
let myNull = null;
let myUndefined;
let mySymbol = Symbol("mySymbol");

//ex 2
/*--Delete the wrong answers--
1. Which of the following is/are strings?
c) '4'
2. Which of the following is/are numbers?
a) 4
b) 4.0
d) -4
3. Which of the following is/are booleans?
a) true
b) false
4. What is the result of 80 + 71.2?
a) 151.2
5. What is the result of "80" + 71.2?
c) "8071.2"
6. Does 100 + 30 produce a number or a string?
a) number
7. Does "100" + 30 produce a number or a string?
b) string
*/

//create three different ways to declare variables
let x = 10;
var y = 20;
const z = 30;

//declare a variable and reassign a value to it
let variable = 5;
variable = 10;

//create a variable and after that assign a string
//with its value being: He's got it!
let phrase;
phrase = "He's got it!";

/*
1. create a variable and assign a value on how
much a restaurant bill is.
*/
let restaurantBill = 100.50;

/*
2. create a variable and assign a value on how
much tax they should pay.
*/
let taxAmount = 10.25;

/*
3. create a variable that will calculate the bill
* tax and its output would be: Your total bill is
<total bill> $.
*/
let totalBill = restaurantBill + taxAmount;
console.log(`Your total bill is $${totalBill}.`);

// Round the number 50.6 to its nearest integer
let roundedNumber = Math.round(50.6);

//Create a variable that is undefined
let undefinedVariable;




//ex 2

function countryInfo(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

let country1Info = countryInfo("Spain", 47, "Madrid");
let country2Info = countryInfo("France", 67, "Paris");
let country3Info = countryInfo("Italy", 60, "Rome");

console.log(country1Info);
console.log(country2Info);
console.log(country3Info);

//ex 3
function tellFortune(jobTitle, location, partnerName, numberOfChildren) {
    return `You will be a ${jobTitle} in ${location} married to ${partnerName} with ${numberOfChildren} children.`;
}

let fortune = tellFortune("programmer", "New York", "Rana", 2);
console.log(fortune);


//ex 4
function calculateCircleArea(radius) {
    let area = Math.PI * radius * radius;

    console.log("The area of the circle: " + area);

    console.log("The area of the circle rounded: " + area.toFixed(2));
}

//ex 5
function getCurrentDate() {
    let currentDate = new Date();
    

    let day = currentDate.toLocaleString('en-us', { weekday: 'long' });
    let date = currentDate.getDate();
    let month = currentDate.toLocaleString('en-us', { month: 'long' });
    let year = currentDate.getFullYear();

    let dateString = `Today is ${day} the ${date} of ${month} ${year}`;
    return dateString;
}

//ex 6
// From function declarations to function expressions
const welcome = function() {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
};

const power = function(a) {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
};

const add = function(a, b = 5) {
    let myNumber = a;
    let sum = myNumber + b;
    return sum;
};

// From function expressions to function declarations
function hello() {
    return "Hello!";
}

function squareRoot(a) {
    return Math.sqrt(a);
}

function randomNumbers(a, b) {
    return Math.random() * (a - b) + b;
}

//ex 7
function welcomeExplicit() {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
}

const welcomeImplicit = () => 'Welcome to Appleseeds Bootcamp!';

function powerExplicit(a) {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
}

const powerImplicit = (a) => {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
}

(function squareRootIIFE(a) {
    console.log(Math.sqrt(a));
})(25);

(function randomNumbersIIFE(a, b) {
    console.log(Math.random() * (a - b) + b);
})(10, 5);

//ex 8
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}
let russiaPercentage = percentageOfWorld1(145);
let israelPercentage = percentageOfWorld1(9);
let usaPercentage = percentageOfWorld1(331);

console.log(`Russia: ${russiaPercentage}%`);
console.log(`Israel: ${israelPercentage}%`);
console.log(`USA: ${usaPercentage}%`);

let percentageOfWorld2 = function(population) {
    return (population / 7900) * 100;
};
let russiaPercentage2 = percentageOfWorld2(145);
let israelPercentage2 = percentageOfWorld2(9);
let usaPercentage2 = percentageOfWorld2(331);

console.log(`Russia: ${russiaPercentage2}%`);
console.log(`Israel: ${israelPercentage2}%`);
console.log(`USA: ${usaPercentage2}%`);


//ex 9
let numSiblings = prompt('How many siblings do you have?');

if (numSiblings == 1) {
    console.log('1 sibling');
} else if (numSiblings > 1) {
    console.log('More than 1 sibling');
} else {
    console.log('No siblings');
}

numSiblings = Number(numSiblings);

//ex 10
function getGrade(score) {
    if (score >= 90 && score <= 100) {
        return "A";
    } else if (score >= 80 && score < 90) {
        return "B";
    } else if (score >= 70 && score < 80) {
        return "c";
    } else if (score >= 65 && score < 70) {
        return "D";
    } else if (score >= 0 && score < 65) {
        return "F";
    }
}

//ex 11
//Team scores
let john = [89, 120, 103];
let mike = [116, 94, 123];
let mary = [97, 134, 105];

function calculateAverage(scores) {
    let total = 0;
    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
    }
    return total / scores.length;
}

let johnAverage = calculateAverage(johnTeamScores);
let mikeAverage = calculateAverage(mikeTeamScores);
let maryAverage = calculateAverage(maryTeamScores);

console.log(`John's team average score: ${johnAverage}`);
console.log(`Mike's team average score: ${mikeAverage}`);
console.log(`Mary's team average score: ${maryAverage}`);

if (johnAverage > mikeAverage && johnAverage > maryAverage) {
    console.log(`John's team wins with an average score of ${johnAverage}`);
} else if (mikeAverage > johnAverage && mikeAverage > maryAverage) {
    console.log(`Mike's team wins with an average score of ${mikeAverage}`);
} else if (maryAverage > johnAverage && maryAverage > mikeAverage) {
    console.log(`Mary's team wins with an average score of ${maryAverage}`);
} else {
    console.log(`It's a draw!`);
}

john = [100, 110, 83];
mike = [136, 94, 76];
mary = [97, 115, 105];
johnAverage = calculateAverage(johnTeamScores);
mikeAverage = calculateAverage(mikeTeamScores);
maryAverage = calculateAverage(maryTeamScores);
if (johnAverage > mikeAverage && johnAverage > maryAverage) {
    console.log(`John's team wins with an average score of ${johnAverage}`);
} else if (mikeAverage > johnAverage && mikeAverage > maryAverage) {
    console.log(`Mike's team wins with an average score of ${mikeAverage}`);
} else if (maryAverage > johnAverage && maryAverage > mikeAverage) {
    console.log(`Mary's team wins with an average score of ${maryAverage}`);
} else {
    console.log(`It's a draw!`);
}

//ex 12
function printBoomNumbers(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 7 === 0 && String(i).includes('7')) {
            console.log("BOOM-BOOM");
        } else if (i % 7 === 0) {
            console.log("BOOM");
        } else {
            console.log(i);
        }
    }
}

//ex 13 - changed commit name
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log("a leap year");
    } else {
        console.log("not a leap year");
    }
}

//ex 14
function countryToLiveIn(language, isIsland, population, country) {
    if (language === 'English' && !isIsland && population < 50) {
        console.log(`Dear Sara, you should live in ${country}.`);
    } else {
        console.log(`${country} is not for you`);
    }
}

//ex 15
function logLanguageRank(language) {
    switch (language) {
        case 'Mandarin':
            console.log('MOST number of native speakers!');
            break;
        case 'Spanish':
            console.log('2nd place in a number of native speakers');
            break;
        case 'English':
            console.log('3rd place');
            break;
        case 'Hindi':
            console.log('Number 4');
            break;
        case 'Arabic':
            console.log('5th most spoken language');
            break;
        default:
            console.log('Not in the top 5');
    }
}

//ex 16
function validatePasswordIfElse(password) {
    if (password.length > 7) {
        return "Strong";
    } else {
        return "Weak";
    }
}

//ternary
function validatePasswordTernary(password) {
    return password.length > 7 ? "Strong" : "Weak";
}

//AND
function validatePasswordAND(password) {
    return password.length > 7 && "Strong" || "Weak";
}

//ex 17
function getColorType(color) {
    switch (color) {
        case 'yellow':
        case 'pink':
        case 'orange':
            return 'light color';
        case 'blue':
        case 'purple':
        case 'brown':
            return 'dark color';
        default:
            return 'Unknown color';
    }
}
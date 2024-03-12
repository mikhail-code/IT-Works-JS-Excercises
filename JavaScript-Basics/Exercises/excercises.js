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
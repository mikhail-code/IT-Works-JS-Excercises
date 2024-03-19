//1
const people = ["Greg", "Mary", "Devon", "James"];

for (let person of people) {
  console.log(person);
}

const indexGreg = people.indexOf("Greg");
if (indexGreg !== -1) {
  people.splice(indexGreg, 1);
}

const indexJames = people.indexOf("James");
if (indexJames !== -1) {
  people.splice(indexJames, 1);
}

people.unshift("Matt");
people.push("Michael");

for (let person of people) {
  console.log(person);
  if (person === "Mary") {
    break;
  }
}

const copyWithoutMaryMatt = people.slice(1);
const indexOfMary = people.indexOf("Mary");
const indexOfFoo = people.indexOf("Foo");

people.splice(2, 1, "Elizabeth", "Artie");

const withBob = people.concat("Bob");

console.log(people);


//2
function getStringLengths(arr) {
    const lengths = [];
    for (let str of arr) {
      lengths.push(str.length);
    }
    return lengths;
  }

//3
const populations = [1000000, 5000000, 750000, 20000000];
function populationPercentages(populationArray) {
  const percentages = [];

  for (let population of populationArray) {
    const percentage = (population / populationArray.reduce((a, b) => a + b, 0)) * 100;
    percentages.push(percentage);
  }

  return percentages;
}

//4
function removeDuplicates(array) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      if (result.indexOf(array[i]) === -1) {
        result.push(array[i]);
      }
    }
    return result;
  }  
function isEven(number){
    if (number % 2==0){
        return true
    } else {
        return false
    }
}

function printOddNumbers(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (!isEven(numbers[i])) {
            console.log(numbers[i]);
        }
    }
}

function doesNumExistsInArr(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return true;
        }
    }
    return false;
}

let calculator = {
    add: function(x, y) {
        return x + y;
    },
    subtract: function(x, y) {
        return x - y;
    }
}

const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2)) //should print 42
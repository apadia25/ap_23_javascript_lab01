//Write a program to accept a number from user input and print whether the number is even or odd.

function checkEvenOrOdd(number) {
    return number % 2 === 0 ? "Even" : "Odd";
}

// Prompt the user to enter a number
const number = prompt("Enter a number:");

const result = checkEvenOrOdd(parseInt(number));
console.log(`The number ${number} is ${result}.`);

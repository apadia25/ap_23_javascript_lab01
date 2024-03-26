//Write a program to find max number among two numbers passed in to a function, use ternary operator to find max number.

function findMax(n1, n2) {
    return n1 > n2 ? n1 : n2;
}

const number1 = 30;
const number2 = 189;
console.log("Maximum number is:", findMax(number1, number2));

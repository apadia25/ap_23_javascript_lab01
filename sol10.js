//Write a program to create an array of 8 integers and use map function to square each element and print the results.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const squaredNumbers = numbers.map(number => number ** 2);
console.log("Squared numbers:", squaredNumbers);

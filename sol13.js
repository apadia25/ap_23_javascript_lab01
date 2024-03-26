//Write a program that creates an array of numbers and returns a new array that contains only the unique numbers using reduce function.

function getUniqueNumbers(numbers) {
    const uniqueNumbers = numbers.reduce((acc, num) => {
        if (!acc.includes(num)) {
            acc.push(num);
        }
        return acc;
    }, []);
    return uniqueNumbers;
}
const numbersArray = [1, 2, 3, 4, 5, 2, 3, 6, 7, 1, 8, 9, 4];
const uniqueNumbersArray = getUniqueNumbers(numbersArray);
console.log("Unique numbers:", uniqueNumbersArray);

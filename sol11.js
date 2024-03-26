//Write a program to create an array of 10 string, create a function that returns longest string from the array.
function findLongestString(strings) {
    let longest = "";
    for (let string of strings) {
        if (string.length > longest.length) {
            longest = string;
        }
    }
    return longest;
}

const stringsArray = ["apple", "banana", "pineapple", "kiwi", "grape", "orange", "strawberry", "blueberry", "watermelon", "mango"];

const longestString = findLongestString(stringsArray);
console.log("Longest string:", longestString);

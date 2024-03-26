//Write a program that creates two arrays of numbers and returns a new array that contains the intersection of the two arrays (i.e. only the numbers that appear in both arrays) and print the results to console.

function findIntersection(arr1, arr2) {
    const intersection = [];
    for (let num of arr1) {
        if (arr2.includes(num) && !intersection.includes(num)) {
            intersection.push(num);
        }
    }
    return intersection;
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

const intersectionArray = findIntersection(array1, array2);
console.log("Intersection:", intersectionArray);

// 1. Find Last Occurrence Using Binary Search
// Problem Statement

// Given a sorted array that may contain duplicate elements, find the last occurrence of the target element. If the target is not found, return -1.

// Input 1
// arr = [1, 2, 2, 2, 3, 4, 5]
// target = 2
// Output 1
// 3

// Input 2
// arr = [1, 3, 3, 5, 7]
// target = 4
// Output 2
// -1

function lastOccurrence(arr, target) {
    let last = -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            last = i;
        }
    }

    return last;
}

let arr1 = [1, 2, 2, 2, 3, 4, 5];
console.log(lastOccurrence(arr1, 2));

let arr2 = [1, 3, 3, 5, 7];
console.log(lastOccurrence(arr2, 4));








// 2. Count Occurrences of a Number Using Binary Search
// Problem Statement

// Given a sorted array and a target element, find how many times the target appears in the array.

// Input 1
// arr = [1, 2, 2, 2, 3, 4, 5]
// target = 2
// Output 1
// 3

// Input 2
// arr = [5, 5, 5, 5, 5]
// target = 5
// Output 2
// 5









// 3. Find Minimum Difference Between Any Two Elements
// Problem Statement

// Given an array of integers, find the minimum absolute difference between any two elements.

// Input 1
// arr = [4, 9, 1, 32, 13]
// Output 1
// 3

// Explanation


// Input 2
// arr = [10, 20, 30, 40]
// Output 2
// 10


function minimumDifference(arr) {

    let min = arr[1] - arr[0];

    if (min < 0) {
        min = -min;
    }

    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {

            let diff = arr[i] - arr[j];

            if (diff < 0) {
                diff = -diff;
            }

            if (diff < min) {
                min = diff;
            }
        }
    }

    return min;
}

// Input 1
let arr1 = [4, 9, 1, 32, 13];
console.log(minimumDifference(arr1));

// Input 2
let arr2 = [10, 20, 30, 40];
console.log(minimumDifference(arr2));







// 4. Find the Element with Maximum Frequency
// Problem Statement

// Given an array of integers, find the element that appears the maximum number of times. If multiple elements have the same frequency, return any one of them.

// Input 1
// arr = [2, 3, 2, 5, 3, 2, 8]
// Output 1
// 2

// Input 2
// arr = [7, 7, 8, 8, 9]
// Output 2
// 7

function maxFrequency(arr) {

    let maxCount = 0;
    let element;

    for (let i = 0; i < arr.length; i++) {

        let count = arr.filter(function(value) {
            return value == arr[i];
        }).length;

        if (count > maxCount) {
            maxCount = count;
            element = arr[i];
        }
    }

    return element;
}

// Input 1
let arr1 = [2, 3, 2, 5, 3, 2, 8];
console.log(maxFrequency(arr1));

// Input 2
let arr2 = [7, 7, 8, 8, 9];
console.log(maxFrequency(arr2));

// Input 1
let arr1 = [2, 3, 2, 5, 3, 2, 8];
console.log(maxFrequency(arr1));

// Input 2
let arr2 = [7, 7, 8, 8, 9];
console.log(maxFrequency(arr2));



// 5. Find the Element with Minimum Frequency
// Problem Statement

// Given an array of integers, find the element that appears the minimum number of times. If multiple elements have the same minimum frequency, return any one of them.

// Input 1
// arr = [2, 3, 2, 5, 3, 2, 8]
// Output 1
// 5

// Explanation

// Frequency:

// 2 → 3 times
// 3 → 2 times
// 5 → 1 time
// 8 → 1 time

// Return either 5 or 8.

// Input 2
// arr = [1, 1, 2, 2, 3]
// Output 2
// 3

function minFrequency(arr) {

    let minCount = arr.length;
    let element;

    for (let i = 0; i < arr.length; i++) {

        let count = arr.filter(function(value) {
            return value == arr[i];
        }).length;

        if (count < minCount) {
            minCount = count;
            element = arr[i];
        }
    }

    return element;
}

// Input 1
let arr1 = [2, 3, 2, 5, 3, 2, 8];
console.log(minFrequency(arr1));

// Input 2
let arr2 = [1, 1, 2, 2, 3];
console.log(minFrequency(arr2));

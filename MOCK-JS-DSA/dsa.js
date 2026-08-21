// ## 🧠 10 JavaScript DSA Questions — Moderate Level

// ### 1. Find the First Non-Repeating Character

// **Question:** Find the first character that appears only once in a string.

// **Input 1:**

// ```js
// "swiss"
// ```

// **Output 1:**

// ```js
// "w"
// ```

// **Input 2:**

// ```js
// "aabbcde"
// ```

// **Output 2:**

// ```js
// "c"
// ```

// ---









// ### 2. Longest Substring Without Repeating Characters

// **Question:** Find the length of the longest substring that contains no duplicate characters.

// **Input 1:**

// ```js
// "abcabcbb"
// ```

// **Output 1:**

// ```js
// 3
// ```

// **Input 2:**

// ```js
// "bbbbb"
// ```

// **Output 2:**

// ```js
// 1
// ```

// ---

function longestSubstring(str) {
  let result = "";

  for (let char of str) {
    if (result.includes(char)) {
      result = result.slice(result.indexOf(char) + 1);
    }

    result += char;
  }

  return result.length;
}

console.log(longestSubstring("abcabcbb")); // 3
console.log(longestSubstring("bbbbb"));    // 1









// ### 3. Two Sum

// **Question:** Find two numbers in an array whose sum equals the given target.

// **Input 1:**

// ```js
// arr = [2, 7, 11, 15]
// target = 9
// ```

// **Output 1:**

// ```js
// [2, 7]
// ```

// **Input 2:**

// ```js
// arr = [3, 2, 4]
// target = 6
// ```

// **Output 2:**

// ```js
// [2, 4]
// ```

// ---






// ### 4. Find the Second Largest Number

// **Question:** Find the second largest element without using `sort()`.

// **Input 1:**

// ```js
// [10, 5, 8, 20, 15]
// ```

// **Output 1:**

// ```js
// 15
// ```

// **Input 2:**

// ```js
// [4, 1, 9, 7, 6]
// ```

// **Output 2:**

// ```js
// 7
// ```

// ---

function secondLargest(arr) {
  let max = Math.max(...arr);

  arr = arr.filter(num => num !== max);

  return Math.max(...arr);
}

console.log(secondLargest([10, 5, 8, 20, 15])); // 15
console.log(secondLargest([4, 1, 9, 7, 6]));    // 7





// ### 5. Remove Duplicates Without Using `Set`

// **Question:** Remove duplicate values from an array without using `Set`.

// **Input 1:**

// ```js
// [1, 2, 2, 3, 4, 4, 5]
// ```

// **Output 1:**

// ```js
// [1, 2, 3, 4, 5]
// ```

// **Input 2:**

// ```js
// [10, 20, 10, 30, 20, 40]
// ```

// **Output 2:**

// ```js
// [10, 20, 30, 40]
// ```

// ---





// ### 6. Check Whether Two Strings Are Anagrams

// **Question:** Check whether two strings contain the same characters with the same frequency.

// **Input 1:**

// ```js
// "listen"
// "silent"
// ```

// **Output 1:**

// ```js
// true
// ```

// **Input 2:**

// ```js
// "hello"
// "world"
// ```

// **Output 2:**

// ```js
// false
// ```

// ---




// ### 7. Maximum Subarray Sum
// **Question:** Find the maximum possible sum of a contiguous subarray.

// **Input 1:**

// ```js
// [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// ```

// **Output 1:**

// ```js
// 6
// ```

// **Input 2:**

// ```js
// [5, 4, -1, 7, 8]
// ```

// **Output 2:**

// ```js
// 23
// ```

// ---





// ### 8. Move All Zeros to the End

// **Question:** Move all `0`s to the end of the array while maintaining the order of the other elements.

// **Input 1:**

// ```js
// [0, 1, 0, 3, 12]
// ```

// **Output 1:**

// ```js
// [1, 3, 12, 0, 0]
// ```

// **Input 2:**

// ```js
// [1, 0, 2, 0, 4, 5]
// ```

// **Output 2:**

// ```js
// [1, 2, 4, 5, 0, 0]
// ```

// ---







// ### 9. Find the Missing Number

// **Question:** An array contains numbers from `1` to `n`, but one number is missing. Find the missing number.

// **Input 1:**

// ```js
// [1, 2, 4, 5, 6]
// ```

// **Output 1:**

// ```js
// 3
// ```

// **Input 2:**

// ```js
// [1, 2, 3, 5]
// ```

// **Output 2:**

// ```js
// 4
// ```

// ---






// ### 10. Find Frequency of Each Element

// **Question:** Count how many times each element appears in an array.

// **Input 1:**

// ```js
// [1, 2, 2, 3, 1, 1]
// ```

// **Output 1:**

// ```js
// { 1: 3, 2: 2, 3: 1 }
// ```

// **Input 2:**

// ```js
// ["a", "b", "a", "c", "b", "a"]
// ```

// **Output 2:**

// ```js
// { a: 3, b: 2, c: 1 }
// ```

function frequency(arr) {
  let count = {};

  for (let item of arr) {
    count[item] = (count[item] || 0) + 1;
  }

  return count;
}

console.log(frequency([1, 2, 2, 3, 1, 1]));
// { 1: 3, 2: 2, 3: 1 }

console.log(frequency(["a", "b", "a", "c", "b", "a"]));
// { a: 3, b: 2, c: 1 }
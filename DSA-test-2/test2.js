// Q.5Count Word Frequency

function countWordFrequency(words) {

 let frequency = {};

    for (let word of words) {
    
        frequency[word] = (frequency[word] || 0) + 1; }

    return frequency;
}

let words = ["apple", "banana", "apple", "orange", "banana", "apple"];

console.log(countWordFrequency(words));








// Q.2 Group Students by Course

function groupStudents(students) {

    let result = {};

    for (let student of students) {

    if (!result[student.course]) {

    result[student.course] = [];
      }

     result[student.course].push(student);
    }

    return result;
}


let students = [
    { name: "rahul", course: "react" },
   { name: "priya", course: "node" },
    { name: "Amit", course: "react" }
];



console.log(groupStudents(students));









// Q.3 Find Duplicate Elements

function findDuplicates(arr) {

    let freq = {};
    let result = [];

    
    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }

    
    for (let key in freq) {
        if (freq[key] > 1) {
            result.push(Number(key));
  }
    }

    return result;
}

let arr = [1, 2, 3, 2, 4, 5, 1, 6];

console.log(findDuplicates(arr));








// Q.4 Find the Second Highest Number

function secondHighest(arr) {

 let unique = [...new Set(arr)];

 unique.sort((a, b) => b - a);

 return unique[1];
}

let arr = [10, 5, 20, 8, 20, 15];

console.log(secondHighest(arr));


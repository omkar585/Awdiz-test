//For Loop Questions
//Question 1
//Print numbers from 100 to 1 using a for loop.

for( i = 100; i >= 1; i--){
    console.log(i);
}


//Question 2
//Print all numbers between 1 and 100 that are divisible by 7.


for( i = 1; i<=100;i++){
        console.log(7*i);
    
}

//uestion 3
//Find the sum of all odd numbers between 1 and 50.

for(i=1;i<=50;i++){
   if(i % 2 === 1){
    console.log(i);
   }
} 


// Question 4
// Print the multiplication table of a user-given number.
// Example:5

for(i =1;i<=10;i++){
    
        console.log(5 * i);
    
}


// Question 5
// Count how many numbers between 1 and 500 are divisible by 10.

for( i = 1; i<=500;i++){
        console.log(i / 10);
    
}

// Question 6
// Print numbers from 1 to 100 but skip numbers divisible by 3.
// Example:
// 1
// 2
// 4
// 5


for (let i = 1; i <= 100; i++) {
    if (i % 3 !== 0) {
       console.log(i);
    }

}


// Question 7
// Find the factorial of a number using a for loop.
// Example:

// 5! = 120

let num = 5;
let factorial = 1;

for (let i = 1; i <= num; i++) {
 if  ( factorial *= i){
    
 }
}
console.log(factorial)


// Question 8
// Print this pattern using loops:



// Question 9
// Find the sum of digits of a number using a loop.
// Example:

// Input: 1234





// Question 10
// Reverse a number using a loop.
// Example:
// Input: 12345




// if-Else Questions
// Question 11
// Check whether a number is:
// Divisible by 2
// Divisible by 3
// Divisible by both
// Not divisible by both


let num = 4;

if(num % 2 ==0){
    console.log("Divisible by 2");
}else if(num % 3==0){
console.log("Divisible by 3");
}else if( num % 2 == 0  && num % 3 == 0){
    console.log("Divisible by both");
}else{
    console.log("Not divisible by both");
}

// Question 12
// Create a grading system:

// 90+  → A Grade
// 75-89 → B Grade
// 50-74 → C Grade
// 35-49 → D Grade
// Below 35 → Fail


let marks = 50;
if(marks >= 90){
    console.log("grade A");
}
else if(marks >= 75){
  console.log("grade B");
}
else if(marks >= 50){
  console.log("grade C");
}
else if(marks >= 35){
  console.log("grade D");
}
else if(marks >= 35){
  console.log("grade fail");
}


// Question 13
// Check whether a person is eligible for marriage:

// Age >= 21 → Eligible
// Age < 21 → Not Eligible

let age = 19;
if(age>=21){
    console.log("Eligible");
}else if(age < 21){
    console.log ("Not Eligible");
}



// Question 14
// Find the largest number among three numbers.
// Example:

// 10, 50, 30

// Output: 50


let a = 10;
let b = 50;
let c = 30;

if (a >= b && a >= c) {
    console.log(a);
} 
else if (b >= a && b >= c) {
    console.log(b);
} 
else {
    console.log(c);
}


// Question 15
// Check username and password:

// username = admin
// password = 12345

// Correct → Login Successful
// Wrong → Invalid Login

 let username = "admin";
let password = "12345";

if (username === "admin" && password === "12345") {
    console.log("Login Successful");
} else {
    console.log("Invalid Login");
}


// Switch Questions
// Question 16
// Create a calculator using switch:

// +
// -
// *
// /
// Example:

// 10 + 5 = 15





let num1 = 10;
let num2 = 5;
let operator = "+";

switch (operator) {
    case "+":
        console.log(num1 + num2);
        break;

    case "-":
        console.log(num1 - num2);
        break;

    case "*":
        console.log(num1 * num2);
        break;

    case "/":
        console.log(num1 / num2);
        break;

    default:
        console.log("Invalid Operator");
}



// Question 17
// Create switch for mobile brands:

// Apple → iPhone
// Samsung → Galaxy
// OnePlus → Android Phone
// Default → Brand Not Found


let brands = "apple";

switch(brands) {

    case "apple":
    console.log("apple");
    break;

    case "samsung":
    console.log("samsung");
    break;

    case "oneplus":
    console.log("oneplus");
    break;

    default:
    console.log("Brand nt found");

}




// Question 18
// Create switch for user roles:

// admin → Full Access
// teacher → Manage Students
// student → View Courses
// Default → Access Denied
// Mixed Loop + Condition Questions




let role = "teacher";

switch (role) {
    case "admin":
        console.log("Full Access");
        break;

    case "teacher":
        console.log("Manage Students");
        break;

    case "student":
        console.log("View Courses");
        break;

    default:
        console.log("Access Denied");
}



// Question 19
// Print numbers from 1 to 100:
// If number is:
// divisible by 3 → "Fizz"
// divisible by 5 → "Buzz"
// divisible by both → "FizzBuzz"
// otherwise print number

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}



// Question 20
// Find how many numbers between 1 and 200 are:
// Even
// Odd
// Divisible by 5
// Print final counts.


let evenCount = 0;
let oddCount = 0;
let divisibleBy5Count = 0;

for (let i = 1; i <= 200; i++) {
    if (i % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }

    if (i % 5 === 0) {
        divisibleBy5Count++;
    }
}

console.log("Even numbers =", evenCount);
console.log("Odd numbers =", oddCount);
console.log("Divisible by 5 =", divisibleBy5Count);

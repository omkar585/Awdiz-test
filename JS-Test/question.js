
// Question 8
// *
// **
// ***
// ****
// *****
// Print this pattern using loops:

let pattern = "";
for(i=0;i<5;i++){
  pattern += "*";
  console.log(pattern);
  
}




// Question 9
// Find the sum of digits of a number using a loop.
// Example:

// Input: 1234

let num = "1234";
let sum = 0;

for(i = 0 ; i < num.length ; i++){
  sum += Number (num[i]);
}
  console.log("sum=",sum);




// Question 10
// Reverse a number using a loop.
// Example:
// Input: 12345

let num = "12345";
let rev = "";

for (let i = num.length - 1; i >= 0; i--) {
    rev += num[i];
}

console.log(rev);
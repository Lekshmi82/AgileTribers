//EX1//
function check(num){
   if (num>0){
    return "Positive";
   }
   else if (num<0){
    return "Negative";
   }
} 
console.log("Number is",check(10))
//EX 2//
function checks(number) {
    if (number % 2 === 0) {
        console.log(number + " is Even");
    } else {
        console.log(number + " is Odd");
    }
}
checks(10);
//EX 3//
let base=5;
let exponenet=2;
let result=base**exponenet;
console.log("Power of a number is:",result)
//Ex 4//
function compare(num1, num2) {
    if (num1 > num2) {
        console.log(num1 + " is greater than " + num2);
    } else if (num1 < num2) {
        console.log(num2 + " is greater than " + num1);
    } else {
        console.log("Both numbers are equal.");
    }
}
compare(10, 20); 
compare(15, 5);  
compare(8, 8);  
//EX 5//
function LeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year + " is a Leap Year.");}
    else {
        console.log(year + " is not a Leap Year.");}
}
LeapYear(2024); 
//EX6//

//npm install readline-sync
//npm audit fix
const readline =require("readline-sync");
let score=parseInt(readline.question("Enter the score:"));

let grade;
if (score>=90 && score<=100) grade="A";
else if(score>=80 && score<=89) grade="B";
else if(score>=70 && score<=79) grade="C";
else if(score>=60 && score<=69) grade="D";
else grade="F";
console.log("The student Grade is is:",(grade))

//EX7//
function howolddd(age) {
    if (age < 16) {
        console.log("You can't drive.");
    } else if (age >= 16 && age <= 17) {
        console.log("You can drive but not vote.");
    } else if (age >= 18 && age <= 24) {  
        console.log("You can vote but not rent a car.");
    } else {  
        console.log("You can do pretty much anything.");
    }
}
howolddd(10);  
howolddd(16);  
howolddd(25);   
//EX8//
for(let i=1; i<=100;i++){
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
    } else if ( i %3 ==0){
        console.log("Fizz");}
        else if ( i %5 ==0){
            console.log("Buzz");}
            else {
                console.log(i);
             }
}
//EX 9//
function LeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year + " is a Leap Year.");}
    else {
        console.log(year + " is not a Leap Year.");}
}
LeapYear(2024); 





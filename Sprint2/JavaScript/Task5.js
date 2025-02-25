//EX1//
for (let i = 1; i <= 10; i++) {
    console.log("Numbers from 1 to 10",i);
}
//Ex2//
for(let i=2; i<=20;i+=2){
    console.log("Even Numbers",i);
}
//Ex3//
for(let i=1; i<=20;i+=2){
    console.log("Odd Numbers",i);
}
//Ex4//
function fact(n) {
    let fact= 1;  
    for (let i = 1;i<=n; i++) {
        fact*= i; 
    }
    return fact;
}
console.log("Factorial is:", fact(5));
//Ex5//
let sum = 0;  
for (let i = 1; i <= 100; i++) {
    sum += i;  
}
console.log("Sum of numbers is:", sum);
//Ex6//
function average(arr) {
    let sum = 0;  
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length; 
let numbers = [20, 30, 40, 50, 10];  
console.log("Average of the array is:", average(numbers));
}
//EX7//
function drawSquare(n) {
    for (let i = 0; i < n; i++) { 
        let row = "";  
        for (let j = 0; j < n; j++) {  
            row += "*";  
        }
        console.log("Pattern is ",row); 
    }
}
let n = 5; 
drawSquare(n);

//Ex 8//
for(let i=1; i<=5;i++){
    console.log("Numbers from 1 to 5 :",i);}
//Ex 9//
for(let i=1; i<=10;i++){
    console.log("Natural number is",i);}
//Ex 10//
function check(arr) {
    if (arr.length===0) return false; 
    return arr[0]===arr[arr.length - 1]; 
}
let numbers = [10, 20, 30, 40, 10]; 
console.log(check("checking:",numbers)); 
//EX 11//
function Divisible(start,end) {
    for (let i= start; i<= end; i++) {  
        if (i % 5 === 0) {  
            console.log("Divisible by 5",i);
        }}
}
Divisible(1,30); 
//EX 12//
function checks(char){
    let vowels="aeiouAEIOU";
    if (vowels.includes(char)){
        console.log("Vowel")
    }else{
        console.log("Consonant")}
}
checks('A')
checks('z')
//EX 13//
function count(start,end) {
    let evenCount = 0;
    let oddCount = 0;
    for (let i = start; i <= end; i++) {  
        if (i % 2 === 0) {
            evenCount++;  
        } else {
            oddCount++;   
        }
    }
    console.log("Even numbers count:", evenCount);
    console.log("Odd numbers count:", oddCount);
}
count(10, 55);
//EX 14//
for (let i = 1; i <= 25; i++) {
    if (i % 5 !== 0) {
        console.log(i);
    }
}
//EX 15//
function factorial(n) {
    let fact = 1;
    for (let i=1; i<= n; i++) {
        fact*= i;
    }
    return fact;
}
function calculateFactorials(arr) {
    let results = arr.map(num => factorial(num));
    console.log("Factorials:", results);
}
let number = [3, 5, 7, 4];
calculateFactorials(number);
//EX 16//
function calculate(a, b, operation) {
    if (operation ==="sum") {
        return a + b;
    } else if (operation==="product") {
        return a * b;
    } else {
        return "Invalid operation. Choose 'sum' or 'product'.";
    }
}
let num1 = 5, num2 = 3;
let operation = "product"; 
console.log(`Product or Sum of two integers: ${calculate(num1, num2, operation)}`);
//EX 17//
function find(a,b) {
    if (a > b) {
        console.log(`The greatest number is: ${a}`);
    } else if (b > a) {
        console.log(`The greatest number is: ${b}`);
    } else {
        console.log("Both numbers are equal.");
    }
}
let num3 = 10, num4= 20;
find(num1, num2);
//EX 18//
function findGreatest(a, b, c) {
    if (a > b && a > c) {
        console.log(`The greatest number is: ${a}`);
    } else if (b > a && b > c) {
        console.log(`The greatest number is: ${b}`);
    } else if (c > a && c > b) {
        console.log(`The greatest number is: ${c}`);
    } else {
        console.log("Some or all numbers are equal.");
    }
}
let first = 10, second = 20, third = 40;
findGreatest(first, second, third);
//EX 19//
function separateNumbers(arr) {
    let positiveNumbers = [];
    let negativeNumbers = [];

    for (let num of arr) {
        if (num >= 0) {
            positiveNumbers.push(num);
        } else {
            negativeNumbers.push(num);
        }
    }

    console.log("Positive Numbers:", positiveNumbers);
    console.log("Negative Numbers:", negativeNumbers);
}
let x = [23, 4, -6, 23, -9, 21, 3, -45, 8];  
separateNumbers(x);







//EX 1//
let arr=[5,2,-7,3,-2,-1]
let ans=arr.filter(num => num<0)
console.log(ans);
//EX 2//
let arr1=[5,10,15,20,22,23]
for(i=0;i<arr1.length;i++){
    if(arr1[i]%2!==0)arr1[i]=0;
}
console.log(arr1);
//EX 3//
// 3
// npm install readline-sync
// npm audit fix
const readline = require("readline-sync");
let num,sum=0;
while(true){
    num= parseInt(readline.question(" Enter num: "));
    if (num==0)break;
    sum+=num; 
}
console.log(sum);
//5//
let sum1=0;
for(let i=1;i<=10;i++){
    console.log("Previous sum",sum1) 
  sum1=sum1+i;
  console.log("Current sum",sum1 , "\n")}

//6//
let even=0;
let odd=0;
for (let i=10;i<=55;i++){
    if (i % 2 === 0) {
        even++;
}else{
    odd++;
}}
console.log("Even Number ",even)
console.log("Odd Number" ,odd)


//Ex 1//
function sayHello(name) {
    console.log("Hello" ,name);
}
sayHello("nas");
//Ex 2//
function add(a, b) {
    return a + b;
}
console.log("Addition of is ",add(5, 3)); 
//EX 3//
function multiply(x,y){
    return x*y;
}
console.log("Multiplication is",multiply(5,3));
//Ex 4//
function multiply(a,b){
    return a*b;
}
console.log("Multiplication is",multiply (2,2));
//EX 5//
function division(a,b){
    return a/b;
}
console.log("Division is ",division(8,2));
//EX 6//
function fact(n) {
    if (n==0) return 1;
    return n *fact(n-1);
}
console.log("Factorial is",fact(5)); 
//Ex 7//
function sqrt(n){
    return Math.pow(n,2);
}
console.log("Square is",sqrt(5)); 


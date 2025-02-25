//EX 1//
function calculate(num1, num2) {
    let product=num1 *num2;
    if (product > 500) {
        return num1 + num2; 
    } else {
        return product;
    }
} 
console.log("Product or Sum :",calculate(50, 12));    
//EX 2//
 function greatest(num1,num2,num3){
    if(num1>=num2 && num1>= num3){
        console.log(num1+"is the greatest");
    }else if (num2>=num1 && num2>= num3){
        console.log(num2+"is the greatest");
    }else {
        console.log(num3+"is the greatest")
 }}
greatest(10,20,30)
//Ex3//
function removeDuplicates(num) {
    return [...new Set(num)];
}

let num = [1, 2, 3, 1, 4, 2, 5];
let uniqueNum = removeDuplicates(num);
console.log(uniqueNum); 

//EX 4//
function Element(nums,remove) {
    return nums.filter(num => num !== remove);
}
let nums = [3, 2, 2, 3];
let remove = 3;
nums = Element(nums, remove);
console.log(nums); 
//EX 5//
function Duplicate(nums) {
    let seen = new Set();
    for (let num of nums) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }
    return false;
}
console.log(Duplicate([1, 2, 3, 1])); 
//6//
function add(num) {
    while (num >= 10) {
        let sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        num = sum;
    }
    return num;
}
console.log(add(38)); 

//7//
function duplicateZeros(arr) {
    let i = 0;
    while (i < arr.length) {
        if (arr[i] === 0) {
            arr.splice(i, 0, 0); 
            arr.pop(); 
            i++; 
        }
        i++;
    }
}
let arr = [1,0,2,3,0,4,5,0];
duplicateZeros(arr);
console.log(arr); 

// 8//
function intersection(nums1, nums2) {
    return [...new Set(nums1.filter(num => nums2.includes(num)))];
}
console.log(intersection([1,2,2,1], [2,2])); 

// Ex1//
function passwordstrength(password) { 
    const minLength = /.{8,}/; 
    const lowercase = /[a-z]/; 
    const uppercase = /[A-Z]/; 
    const digit = /[0-9]/; 
    const specialChar = /[!@#$%^&*(),.?":{}|<>]/;

    if (
        minLength.test(password) &&
        lowercase.test(password) &&
        uppercase.test(password) &&
        digit.test(password) &&
        specialChar.test(password)
    ) {
        return "Strong password";
    } else {
        return "Weak password";
    }
}
console.log(passwordstrength("Pass@123")); 
console.log(passwordstrength("weakpass")); 
console.log(passwordstrength("WEAKPASS1")); 
console.log(passwordstrength("Weak@1")); 

// Ex2//
function arrayOperations(nums, operation) {
    if (operation === "Add") {
        return nums.flat().reduce((sum, num) => sum + num, 0);
    } else if (operation === "String") {
        return nums.flat();
    } else {
        return "Invalid operation";
    }
}
console.log(arrayOperations([[1, 2], [3, 4]], "Add"));   
console.log(arrayOperations([[23, 98], [42, 70]], "Add")); 

// Ex 3//
function modifyArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i]); 
        if (i < arr.length - 1 && arr[i] !== 0) {
            result.push(arr[i] + arr[i + 1]);
        }
    }
    return result;
}
let inputArray = [5, 10, 20, 2, 0, 33, 100, 90];
console.log(modifyArray(inputArray));

// Ex4//
function moveZeroes(nums) {
    let nonZeroIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroIndex] = nums[i];
            nonZeroIndex++;
        }
    }
    while (nonZeroIndex < nums.length) {
        nums[nonZeroIndex] = 0;
        nonZeroIndex++;
    }
    return nums;
}
console.log(moveZeroes([0, 1, 0, 3, 12])); 

// Ex5//
function removeSpaces(str) {
    return str.replace(/\s/g, ""); 
}
console.log(removeSpaces("Hey! yo! wasupp!"));

// EX6//
function swapNumbers(a, b) {
    console.log("Before Swap: a =", a, ", b =", b);
    a = a^b;
    b = a^b; 
    a = a^b;
    console.log("After Swap: a =", a, ", b =", b);
}
swapNumbers(5, 10);

// EX7//
function areAnagrams(str1, str2) {
    str1 = str1.replace(/\s/g, '').toLowerCase();
    str2 = str2.replace(/\s/g, '').toLowerCase();

    if (str1.length !== str2.length) {
        return false;
    }
    let charCount = {};
    for (let char of str1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let char of str2) {
        if (!charCount[char]) return false;
        charCount[char]--;
    }
    return true;
}
console.log(areAnagrams("listen", "silent")); 
console.log(areAnagrams("hello", "world"));   

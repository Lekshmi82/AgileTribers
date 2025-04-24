//EX1
function replaceAllOccurrences(originalString, targetSubstring, newSubstring) {
    return originalString.replaceAll(targetSubstring, newSubstring);
  }

  const inputString = 'apple banana apple grape apple';
  const result = replaceAllOccurrences(inputString, 'apple', 'orange');
  console.log('EX1 Output:',result);  

  //EX2
  function includesValue(arr, value) {
    return arr.includes(value);
  }
  
  const fruits = ['apple', 'banana', 'Orange'];
  const searchValue = 'banana';
  console.log('EX2 Output:',includesValue(fruits, searchValue)); 
  
  //EX3

  async function fetchDataWithFetch(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log('EX3 Output:',data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  fetchDataWithFetch('https://jsonplaceholder.typicode.com/todos/1');

  //EX4

  function safeDivide(a, b) {
    try {
      if (b === 0) {
        throw new Error("Division by zero is not allowed.");
      }
      return a / b;
    } catch (error) {
      return error.message;
    }
  }
  console.log('EX4 Output:',safeDivide(4, 2)); 
  console.log(safeDivide(4, 0)); 

  //EX5
  function introducePerson(name, age) {
    return `Hello, my name is ${name} and I am ${age} years old.`;
  }
  console.log('EX5 Output:',introducePerson('John', 30)); 

  //EX6
  function logPersonDetails(person) {
    const { name, age, city } = person;
    console.log('EX6 Output:',name);
    console.log(age);
    console.log(city);
  }
  logPersonDetails({ name: 'Alice', age: 25, city: 'New York' });

  //EX7
  function sum(a, b = 10) {
    return a + b;
  }
  console.log('EX7 Output:',sum(2, 3));  
  console.log(sum(5));     

  //EX8
  function sumRestParams(...args) {
    return args.reduce((total, num) => total + num, 0);
  }
  console.log('EX8 Output:',sumRestParams(1, 2, 3, 4, 5)); 

  //EX9
  function sumNumbers(arr) {
    return arr.reduce((total, num) => total + num, 0);
  }
  console.log('EX9 Output:',sumNumbers([1, 2, 3, 4, 5])); 
  
  
  

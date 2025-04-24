//EX1
function findFirstPositive(numbers) {
    return numbers.find(num => num > 0);
  }
  
  const numbers = [-5, -3, 0, 9, 2];
  console.log('Task 1 Output:', findFirstPositive(numbers)); 
//EX2
function findBookByTitle(books, title) {
    return books.find(book => book.title === title);
  }
  
  const books = [
    { title: '1984', author: 'George Orwell' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' }
  ];
  
  console.log('Task 2 Output:', findBookByTitle(books, 'To Kill a Mockingbird'));
  //EX3
  function findEmployeeById(employees, id) {
    return employees.find(employee => employee.id === id);
  }
  
  const employees = [
    { id: 1, name: 'Alice', position: 'Manager' },
    { id: 2, name: 'Bob', position: 'Engineer' },
    { id: 3, name: 'Charlie', position: 'Technician' }
  ];
  console.log("Task 3 Output:", findEmployeeById(employees, 2));

  //EX4
  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  function findFirstPrime(numbers) {
    return numbers.find(isPrime);
  }
  const numberArray = [4, 6, 8, 9, 11, 15];
  console.log("Task 4 Output:", findFirstPrime(numberArray));

//EX5
function describePerson(person) {
    const { firstName, lastName, age } = person;
    return `${firstName} ${lastName} is ${age} years old!`;
  }
  
  const person = { firstName: 'John', lastName: 'Doe', age: 30 };
  console.log("Task 5 Output:", describePerson(person));
  
//EX6
function getEvenSquares(numbers) {
    return numbers
      .filter(num => num % 2 === 0)
      .map(num => num ** 2);
  }
  const numbers1 = [1, 2, 3, 4, 5, 6];
  console.log("Task 6 Output:", getEvenSquares(numbers));
  
  //EX7
  function joinWords(separator = ',', ...words) {
    return words.join(separator);
  }
  console.log("Task 7 Output 1:", joinWords('-', 'apple', 'banana', 'cherry'));
  console.log("Task 7 Output 2:", joinWords('apple', 'banana', 'cherry'));

//EX8

function getUniqueElements(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
  }
  const result = getUniqueElements([1, 2, 3], [3, 4, 5]);
  console.log("Task 8 Output:", result);

//EX9

async function fetchTodo() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const data = await response.json();
      console.log("Task 9 Output:", data);
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  fetchTodo();

  //EX10

  function productsAboveAverage(products) {
    const totalPrice = products.reduce((total, { price }) => total + price, 0);
    const averagePrice = totalPrice / products.length;
  
    return products
      .filter(({ price }) => price > averagePrice)
      .map(({ name }) => name);
  }
  const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 700 }
  ];
  console.log("Task 10 Output:", productsAboveAverage(products)); 
  
  
  
  
 
  
  
  
 
//EX1
function longestString(arr) {
    return arr.reduce((longest, current) => {
      return current.length > longest.length ? current : longest;
    }, ''); 
  }
  
  const strings = ['apple', 'banana', 'cherry', 'date'];
  console.log('Task 1 Output:', longestString(strings)); 

//EX2
function flattenArray(arr) {
    return arr.reduce((flattened, current) => {
      return flattened.concat(current); 
    }, []); 
  }
  const nestedArray = [[1, 2, 3], [4, 5], [6, 7, 8, 9]];
  console.log('Task 2 Output:', flattenArray(nestedArray));

  //EX3
  function countOccurrences(arr) {
    return arr.reduce((acc, word) => {
      acc[word] = (acc[word] || 0) + 1;  
      return acc;
    }, {});  
  }
  const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
  console.log('Task 3 Output:', countOccurrences(words));  

  //EX4
  function groupByProperty(arr, property) {
    return arr.reduce((acc, obj) => {
      const key = obj[property];  
      if (!acc[key]) {
        acc[key] = [];  
      }
      acc[key].push(obj);  
      return acc;
    }, {});  
  }
  
  const people = [
    { name: 'Nimi', age: 25, city: 'New York' },
    { name: 'Nile', age: 30, city: 'Los Angeles' },
    { name: 'Lekzz', age: 25, city: 'New York' },
    { name: 'Sonu', age: 30, city: 'Los Angeles' },
  ];
  
  console.log('Task 4 Output:', groupByProperty(people, 'age'));
  
  //EX5
  function calculateTotal(cart) {
    return cart.reduce((total, item) => total + item.price, 0);
  }
  
  const cart = [
    { item: 'apple', price: 1.5 },
    { item: 'banana', price: 2.0 },
    { item: 'orange', price: 1.25 }
  ];
  
  console.log('Task 5 Output:', calculateTotal(cart));  

  //EX6
  function findFirstEvenNumber(numbers) {
    return numbers.find(num => num % 2 === 0);
  }
  
  const numbers = [1, 3, 7, 10, 2];
  console.log('Task 6 Output:', findFirstEvenNumber(numbers)); 

  //EX7
  function findStudentByName(students, name) {
    return students.find(student => student.name === name);
  }
  
  const students = [
    { name: 'Alice', age: 21 },
    { name: 'Bob', age: 25 },
    { name: 'Niya', age: 23 }
  ];
  console.log('Task 7 Output:', findStudentByName(students, 'Bob')); 

  //EX8
  function findProductByID(products, id) {
    return products.find(product => product.id === id);
  }
  
  const products = [
    { id: 101, name: 'Laptop' },
    { id: 102, name: 'Phone' },
    { id: 103, name: 'Tablet' }
  ];
  console.log('Task 8 Output:', findProductByID(products, 102)); 

  //EX9
  function findOverdueTask(tasks) {
    const currentDate = new Date();  
    return tasks.find(task => new Date(task.dueDate) < currentDate); 
  }
  
  const tasks = [
    { taskName: 'Task 1', dueDate: '2023-06-01' },
    { taskName: 'Task 2', dueDate: '2024-05-01' },
    { taskName: 'Task 3', dueDate: '2024-01-01' }
  ];
  
  console.log('Task 9 Output:', findOverdueTask(tasks));
  
  
  
  
  
  
  

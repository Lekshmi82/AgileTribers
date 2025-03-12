const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter first number: ", (num1) => {
    readline.question("Enter second number: ", (num2) => {
        readline.question("Enter operation (+, -, *, /): ", (op) => {
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);

            if (isNaN(num1) || isNaN(num2)) {
                console.log("Error: Invalid input!");
            } else {
                console.log("Result:", eval(`${num1} ${op} ${num2}`));
            }

            readline.close();
        });
    });
});

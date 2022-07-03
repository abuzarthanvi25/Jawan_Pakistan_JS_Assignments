// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.
// ------------------ Addition -------------------
var num1 = 3;
var num2 = 5;
const h1Addition = document.createElement("h1");
h1Addition.textContent = "Sum of " + num1 + " and " + num2 + " is " + (num1+num2);
document.body.append(h1Addition);

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.
// ------------------ Subtraction -------------------
const h1Subtraction = document.createElement("h1");
h1Subtraction.textContent = "Subtraction of " + num1 + " and " + num2 + " is " + (num1-num2);
document.body.append(h1Subtraction);

// ------------------ Multiplication -------------------
const h1Multiplication = document.createElement("h1");
h1Multiplication.textContent = "Product of " + num1 + " and " + num2 + " is " + (num1*num2);
document.body.append(h1Multiplication);

// ------------------ Division -------------------
const h1Division = document.createElement("h1");
h1Division.textContent = "Division of " + num1 + " and " + num2 + " is " + (num1/num2);
document.body.append(h1Division);

// ------------------ Modulus -------------------
const h1Modulus = document.createElement("h1");
h1Modulus.textContent = "Modulus of " + num1 + " and " + num2 + " is " + (num1%num2);
document.body.append(h1Modulus);

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// MATH EXPRESSIONS | JAVASCRIPT
// Page 2 of 9
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.
var value;
document.write("Value after variable declaration is: " + value + "<br>");
value = 5;
document.write("Initial value: " + value + "<br>");
++value;
document.write("Value after increment is: " + value + "<br>");
value += 7;
document.write("Value after addition is: " + value + "<br>");
--value;
document.write("Value after decrement is: " + value + "<br>");
value = value%3;
document.write("The remainder is: " + value + "<br>");
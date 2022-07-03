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
document.write("The remainder is: " + value + "<br> <br>");

// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:
var costOfTicket = 600;
var costOf5Tickets = 600*5;
document.write("The cost to buy 5 tickets to a movie is " + costOf5Tickets + " PKR" + "<br><br>");

// 5. Write a script to display multiplication table of any
// number in your browser. E.g
var num = 4;
document.write("Table of " + num + "<br>");
for(i=1; i<11; i++){
    document.write(num + " x " + i + " = " + num*i + "<br>");
}

// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
var celsiusTemp = 25;
var farenheitTemp = 70;
var convertedToF = ((celsiusTemp*9)/5) + 32;
var convertedToC = ((farenheitTemp - 30))* 5/9;
document.write("<br>" + celsiusTemp + "\u00B0" + "C" +  " is " + convertedToF + "\u00B0" + "F" + "<br>" );
document.write(farenheitTemp + "\u00B0" + "F" +  " is " + convertedToC + "\u00B0" + "C" + "<br><br>" )

// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// MATH EXPRESSIONS | JAVASCRIPT
// Page 5 of 9
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.
var priceOfItem1 = 650;
var quantityOfItem1 = 3;
var priceOfItem2 = 100;
var quantityOfItem2 = 7;
var shippingCharges = 100;
var totalCost = (quantityOfItem1*priceOfItem1) + (quantityOfItem2*priceOfItem2) + shippingCharges

const h1ShoppingCart = document.createElement("h1");
h1ShoppingCart.textContent = "Shopping Cart \n";
document.body.append(h1ShoppingCart);

document.write("Price of item 1 is " + priceOfItem1 + "<br>");
document.write("Quantity of item 1 is " + quantityOfItem1 + "<br>");
document.write("Price of item 2 is " + priceOfItem2 + "<br>");
document.write("Quantity of item 2 is " + quantityOfItem2 + "<br>");
document.write("Shipping charges " + shippingCharges + "<br><br>");
document.write("Total cost of your order is " + totalCost + "<br><br>");

// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser
const h1MarksSheet = document.createElement("h1");
h1MarksSheet.textContent = "Marks Sheet \n";
document.body.append(h1MarksSheet);

var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained/totalMarks) * 100;

document.write("Total Marks: " + totalMarks);
document.write("Marks Obtained: " + marksObtained);
document.write("Percentage: " + percentage + "%");
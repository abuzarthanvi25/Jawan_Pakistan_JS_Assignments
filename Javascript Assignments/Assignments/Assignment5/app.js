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
document.write("Percentage: " + percentage + "%" + "<br><br>");

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)
const h1Currency = document.createElement("h1");
h1Currency.textContent = "Currency in PKR \n";
document.body.append(h1Currency);

var USD = 10;
var saudiRiyal = 25;
var totalCurrency = (USD*104.80) + (saudiRiyal*28);
document.write("Total Currency in PKR: " + totalCurrency + "<br><br>");

// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
const h1exp = document.createElement("h1");
h1exp.textContent = "1 Expression Calculations \n";
document.body.append(h1exp);

var mathNum = 2;
var calculation = (((mathNum+5) *10)/2);
document.write("Calculations in single expressions result: " + calculation);

// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.
const h1AgeCalculator = document.createElement("h1");
h1AgeCalculator.textContent = "Age Calculator \n";
document.body.append(h1AgeCalculator);

var currentYear = 2016;
var birthYear = 1992;
var AgeCal = currentYear - birthYear;
document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("Your Age is: " + AgeCal + "<br>");

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// MATH EXPRESSIONS | JAVASCRIPT
// Page 8 of 9
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
const h1Geometrizer = document.createElement("h1");
h1Geometrizer.textContent = "Geometrizer \n";
document.body.append(h1Geometrizer);

var radius = 20;
var circumference = 2 * Math.PI * radius;
var area = Math.PI * (radius ** 2);
document.write("Radius of a cirle is: " + radius + "<br>")
document.write("The circumference is: " + circumference + "<br>")
document.write("The area is: " + area + "<br><br>");

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.
const h1LifetimeSuppy = document.createElement("h1");
h1LifetimeSuppy.textContent = "The Lifetime Suppy Calculator \n";
document.body.append(h1LifetimeSuppy);

var favSnack = "chocolate chip";
var currAge = 15;
var estmMaxAge = 65;
var snacksPerDay = 3;
var leftTime = estmMaxAge - currAge;
var total = (leftTime*365) * snacksPerDay;

document.write("Favourite Snack: " + favSnack + "<br>");
document.write("Current Age: " + currAge + "<br>");
document.write("Estimated Maximum Age: " + estmMaxAge + "<br>")
document.write("Amount of snacks per day: " + snacksPerDay + "<br>");
document.write("You will need " + total + " chocolate chips to last you until the ripe old age of " + estmMaxAge + "<br><br>");
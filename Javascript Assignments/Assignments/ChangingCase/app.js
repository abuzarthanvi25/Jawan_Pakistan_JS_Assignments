// Changing case
document.write("<h2>Changing case</h2><br>");
// 1. Write a program that takes user input. Convert and show the input
// in capital letters.
var userInp = prompt("Enter a string to convert it to uppercase: ");
var upperCased = userInp.toUpperCase()
document.write("<b>The Original String: </b>" + userInp + "<br>" + "The Converted string: " + upperCased + "<br><br>");

// 2. Write a program that takes user input. Convert and show the
// input in title case.
var userInp2 = prompt("Enter a string to convert it to Title Case: ");
function titleCase(string) {
    var sentence = string.toLowerCase().split(" ");
    for(var i = 0; i< sentence.length; i++){
       sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    return sentence.join(" ");
 }
 var titleCased = titleCase(userInp2);
document.write("<b>The Original String: </b>" + userInp2 + "<br>" + "The Converted string: " + titleCased);

// Strings: measuring length and extracting parts
// ----------------------------------------------
// 1. Write a program to take a user input about his favorite mobile
// phone model. Find and display the length of user input in your
// browser.
document.write("<h2>Strings: measuring length and extracting parts</h2> <br>");
var favMobile = prompt("Enter you favourite mobile phone model: ");
var favMobileLength = favMobile.length
document.write("<b>Q1. </b> The length of the input you provided is : " + favMobileLength + "<br><br>");

// 2. Write a program to display the last character of a user input
var userInp3 = prompt("Enter a string to display its last character: ");
var lastChar = userInp3.charAt(userInp3.length-1);
document.write("<b>Q2. </b> The last character of the input you provided is : " + lastChar + "<br><br>");

// Strings: finding segments
// -------------------------
// 1. Write a program to find the index of letter “n” in the word “Pakistani”
// and display the result in your browser.
document.write("<h2>Strings: finding segments</h2> <br>");
var userInp4 = "Pakistani";
var indexOfN = userInp4.indexOf("n");
document.write("<b>Q1. </b>The index of the letter 'n' of the word pakistani is : " + indexOfN + "<br><br>");

// 2. Write a program to take user input and store username in a
// variable. If the username contains any special symbol among (@ . ,
// !), prompt the user to enter a valid username.
var userInp5 =  prompt("Enter your username: ");
var specialCharCheck1 = userInp5.indexOf("@");
var specialCharCheck2 = userInp5.indexOf(".");
var specialCharCheck3 = userInp5.indexOf("!");
if(specialCharCheck1!==-1 || specialCharCheck2!==-1 || specialCharCheck3!==-1){
    alert("Enter a valid username!")
}
else{
    document.write("<b>Q2. </b>Your username " +  "'" + userInp5 + "'" + " is valid" + "<br><br>")
}

// 3. You have a string “The quick brown fox jumps over the lazy
// dog”. Write a program to count number of occurrences of word “the”
// in given string.

var str = "The quick brown fox jumps over the lazy dog";
var occurences =0;
for(i=0; i<str.length; i++){
    var selection = str.slice(i,i+3).toLowerCase();
    if(selection === "the"){
        occurences++;
    }
}
document.write("<b>Q3.</b> The number of occurences of the word 'the' is : <b>" + occurences + "</b> times" + "<br><br>");

// Strings: finding a character at a location
// ------------------------------------------
// 1. Write a program to find the character at 3 rd index in the word
// “Pakistani” and display the result in your browser.
var userInp6 = "Pakistani";
var charAt3rd = userInp6.charAt(2);
document.write("<h2>Strings: finding a character at a location</h2> <br>");
document.write("<b>Q1. </b>The character at 3rd index of 'Pakistani' is : " + charAt3rd + "<br><br>");

// Strings: replacing characters
// -----------------------------
// 1. Write a program to replace the “Hyder” to “Islam” in the word
// “Hyderabad” and display the result in your browser.
document.write("<h2>Strings: replacing characters</h2> <br>");
var initString = "Hyderabad";
// for(i=0; i<initString.length; i++){
//     var selection = initString.splice(i,i+5);
//     if(selection === "Hyder"){

//     }
// }
var finalString = initString.replace(/Hyder/g, "Islam");
document.write("<b>Q1. </b>The initial string: " + initString + "<br>" + "The changed string: " + finalString + "<br><br>");

// 2. Write a program to replace all occurrences of “and” in the string
// with “&” and display the result in your browser.
var str2 = "“Ali and Sami are best friends. They play cricket and football together.";
var str3 = str2.replace(/and/g, "&");
document.write("<b>Q2. </b>The initial string: " + str2 + "<br>" + "The changed string: " + str3 + "<br><br>");

// Rounding numbers
// ----------------
// 1. Write a program that takes a positive integer from user & display
// the following in your browser.
// a. number (example number: 3.45214)
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
document.write("<h2>Rounding numbers</h2> <br>");
var userInp7 = parseFloat(prompt("Enter a positive integer: "));
document.write("<b>Q1(a). </b>The number is: " + userInp7 + "<br>");
document.write("<b>Q1(b). </b>The round off value of the input is : " + Math.round(userInp7) + "<br>");
document.write("<b>Q1(c). </b>The floor value of the input is : " + Math.floor(userInp7) + "<br>");
document.write("<b>Q1(d). </b>The ceil value of the input is : " + Math.ceil(userInp7) + "<br>");

// 2. Write a program that takes a negative floating point number
// from user & display the following in your browser.
// a. Number (example number: -2.678 )
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
var userInp8 = parseFloat(prompt("Enter a negative integer: "));
document.write("<b>Q2(a). </b>The number is: " + userInp8 + "<br>");
document.write("<b>Q2(b). </b>The round off value of the input is : " + Math.round(userInp8) + "<br>");
document.write("<b>Q2(c). </b>The floor value of the input is : " + Math.floor(userInp8) + "<br>");
document.write("<b>Q2(d). </b>The ceil value of the input is : " + Math.ceil(userInp8) + "<br>");

// Generating random numbers
// -------------------------
// 1. Write a program that simulates a dice using random() method of JS
// Math class. Display the value of dice in your browser.
document.write("<h2>Generating random numbers</h2> <br>");
var dice = parseFloat(Math.ceil(Math.random()*6));
document.write("<b>Q1. </b>The random dice generated: " + dice + "<br><br>");

// 2. Write a program that simulates a coin toss using random() method
// of JS Math class. Display the value of coin in your browser.
// 2 = Heads and 1 = Tails
var coin = parseFloat(Math.ceil(Math.random()*2));
if(coin === 2){
    document.write("<b>Q2. </b>Heads<br><br>")
}
else if(coin === 1){
    document.write("<b>Q2. </b>Tails<br><br>")
}

// 3. Write a program that stores a random secret number from 1 to 10 in a
// variable. Ask the user to input a number between 1 and 10. If the user input
// equals the secret number, congratulate the user.
var randomSecretNumber = Math.ceil(Math.random()*10);
var userInp9 = parseInt(prompt("Enter a number to guess the secret number: "));
if(userInp9 === randomSecretNumber){
    alert("Congratulations! You guessed the secret number correctly!");
}

// Converting strings to integers and decimals
// -------------------------------------------
// 1. Write a program that asks the user about his weight. Parse the user
// input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms
document.write("<h2>Converting strings to integers and decimals</h2> <br>");
var userInp10 = parseFloat(prompt("Enter the weight: "));
document.write("<b>Q1. </b>The weight is : " + userInp10 + "<br><br>");

// Converting strings to numbers, numbers to strings
// -------------------------------------------------
// 1. Write a program that converts a string “472” to a number 472.
// Display the values & types in your browser.
// Hint: (use typeof())
document.write("<h2>Converting strings to numbers, numbers to strings</h2> <br>");
var userInp11 = prompt("Enter a number BUT as a string: ");
document.write("<b>Q1. </b>The Unconverted input is : "+ userInp11 + " and its Datatype is: " + typeof userInp11 + "<br>");
var convertedToInt = parseInt(userInp11);
document.write("The input converted to Integer is: " + convertedToInt + " and its Datatype is " + typeof convertedToInt + "<br><br>");

// 2. Write a program that converts the variable num to string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.
var num = parseInt(prompt("Enter a number: "));
document.write("<b>Q2. </b>The Unconverted input is : "+ num + " and its Datatype is: " + typeof num + "<br>");
var convertedToString = num.toString();
document.write("The input converted to String is: " + convertedToString + " and its Datatype is " + typeof convertedToString + "<br><br>");

// Controlling the length of decimals
// ----------------------------------
// 1. Write a program to control the length of decimals to 2.
// var percentage = 30 / 45 * 100; -> 66.66666666666666
document.write("<h2>Controlling the length of decimals</h2> <br>");
var percentage = (30 / 45) * 100;
document.write("<b>Q1. </b>Current Output: " + percentage+ "<br>");
var fixedDecimals = percentage.toFixed(2);
document.write("The Changed output to 2 decimal places:  " + fixedDecimals);

// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).



// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.
var num1 = parseInt(prompt("Enter the first number: "));
var num2 = parseInt(prompt("Enter the second number: "));
if(num1 > num2){
    alert("The fist number is greater, " + num1);
}
else if(num1 < num2){
    alert("The second number is greater, " + num2);
}
else if(num1 == num2){
    alert("Both are equal")
}

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.
var userInp = parseInt(prompt("Enter your number: "));
if(userInp > 0){
    alert("The number is positive");
}
else if(userInp < 0){
    alert("The number is negative");
}
else if(userInp === 0){
    alert("The number is zero");
}

// 4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise
var character = prompt("Enter a char: ");
if(character === "a" || character === "e" || character === "i" || character === "o" || character === "u"){
    alert("The character is a vowel");
}
else{
    alert("The character is a consonant and NOT a vowel");
}

// Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.
var pwd = prompt("Enter password: ");
var correctPwd = "abcd123";
if(pwd === correctPwd){
    alert("Correct! The password you entered matches the original password");
}
else{
    alert("Incorrect password")
}

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

//                                    CORRECT CODE
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
    greeting = "Good evening";
}

// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements
var time = parseInt(prompt("Enter time in 25hr format: "));
if(time >= 0000 && time < 1200){
    alert("Good Morning");
}
else if(time>= 1200 && time< 1700){
    alert("Good Afternoon");
}
else if(time >= 1700 && time < 2100){
    alert("Good Evening");
}
else if(time >= 2100 && time <= 2359){
    alert("Good Night")
}
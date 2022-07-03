// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights
var city = prompt("Enter a city: ").toLowerCase();
if(city=="karachi"){
    alert("Welcome to the city of lights")
}

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.
var gender = prompt("Enter your gender: ").toLowerCase();
if(gender == "male"){
    alert("Good Morning Sir");
}
else{
    alert("Good Morning Ma'am");
}

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
var trafficSignalColor = prompt("Enter the traffic light color: ").toLowerCase();
if(trafficSignalColor === "red"){
    alert("Must Stop")
}
else if(trafficSignalColor === "yellow"){
    alert("Ready to move");
}
else if(trafficSignalColor === "green"){
    alert("Move now")
}

// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”
var remainingFuel = parseFloat(prompt("Enter your remaining amount of fuel: "));
if(remainingFuel < 0.25 ){
    alert("Please refill the fuel in your car");
}

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// User Input & Conditional Statement | JAVASCRIPT
// Page 2 of 4
// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// User Input & Conditional Statement | JAVASCRIPT
// Page 3 of 4
// f. if("car" < "cat"){
// alert("car is smaller than cat");
// }

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// if (true){
// alert("True");
// }
// if (false){
// alert("false");
// }
// if("car" < "cat"){
// alert("car is smaller than cat");
// }

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:
// Show the total marks, marks obtained, percentage, grade &
// remarks like:
var marksOfSub1 = parseInt(prompt("Enter marks of subject 1: "));
var marksOfSub2 = parseInt(prompt("Enter marks of subject 2: "));
var marksOfSub3 = parseInt(prompt("Enter marks of subject 3: "));
var marksObtained = marksOfSub1 + marksOfSub2 + marksOfSub3;
var totalMarks = 300;
var percentage = ((marksOfSub1 + marksOfSub2 + marksOfSub3)*100)/300;
var grade; var remarks;
if(percentage >= 80){
    grade = "A-one";
    remarks = "Excellent";
}
else if(percentage >= 70){
    grade = "A";
    remarks = "Good";
}
else if(percentage >= 60){
    grade = "B";
    remarks = "You need to improve";
}
else if(percentage < 60){
    grade = "Fail";
    remarks = "Sorry";
}
document.write("<h1>Marksheet</h1> <br>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%" + "<br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks + "<br>");

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

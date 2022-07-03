// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:
var a = 10;
document.write("Result: <br> The value of a is:" + a + "<br><br> ..................................... <br><br>");
document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br>"+ "<br>") ;
document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br>"+ "<br>");
document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br>"+ "<br>")
document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a + "<br>"+ "<br>");

// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;                                           a=1
// --a - --b;                                     1 - 0
// --a - --b + ++b;                               1 - 0 + 1
//--a - --b + ++b + b--;                          1 - 0 + 1 + 1    =====> 3
var a = 2, b = 1;
var result = --a - --b + ++b + b--;

document.write("OUTPUT EXPLAINED STEP BY STEP: <br><br> --a;    here a=1 <br> --a - --b;     here,   1 - 0  <br> --a - --b + ++b;     here,      1 - 0 + 1  <br> --a - --b + ++b + b--;    here,      1 - 0 + 1 + 1 <br><br> <b>Therefore</b>, The <b>Result</b> becomes:    " + result + "<br><br>");
document.write("a is " + a + "<br>");
document.write("b is " + b + "<br>");
document.write("result is " + result + "<br><br>");

// 3. Write a program that takes input a name from user &
// greet the user.
userName = prompt("Enter your name: ");
document.write("Hello! " + userName + "<br><br>");

// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.
document.write("<h1>Multiplication Table by User Input<h1>");
var userInp = parseInt(prompt("Enter a number to generate is multiplication table: "))
document.write("<h3>Table of " + userInp + "</h3>")


if(userInp == NaN ){
    for(i=1; i<11; i++){
        document.write(5 + "x" + i + "=" + 5*i)
    }
}else{
    for(i=1; i<11; i++){
        document.write(userInp + "x" + i + "=" + userInp*i + "<br>")
    }
}

// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// ALERTS | JAVASCRIPT
// Page 3 of 3
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)
var sub1, sub2, sub3, sub4, sub5;
sub1 = prompt("Please Enter the name of first subject", "English");
sub2 = prompt("Please Enter the name of second subject", "Math");
sub3 = prompt("Please Enter the name of third subject", "Urdu");
sub4 = prompt("Please Enter the name of fourth subject", "Science");
sub5 = prompt("Please Enter the name of fifth subject", "Computer");
var totalSubMarks = 100;
var obtMarksSub1, obtMarksSub2, obtMarksSub3, obtMarksSub4, obtMarksSub5;
obtMarksSub1 = parseInt(prompt("Enter the marks obtained in " + sub1));
obtMarksSub2 = parseInt(prompt("Enter the marks obtained in " + sub2));
obtMarksSub3 = parseInt(prompt("Enter the marks obtained in " + sub3));
obtMarksSub4 = parseInt(prompt("Enter the marks obtained in " + sub4));
obtMarksSub5 = parseInt(prompt("Enter the marks obtained in " + sub5));
var totalMarks = 500;
var totalObtainedMarks = obtMarksSub1 + obtMarksSub2 + obtMarksSub3 + obtMarksSub4 + obtMarksSub5;

document.write("<h2>Marksheet Table</h2>")
document.write("<table cellspacing = 2 cellpadding = 20px>");
document.write(
    "<tr>"
    + "<th> Subject </th>" + 
       "<th> Total Marks </th>" +
       "<th> Obtained Marks </th>" + 
       "<th> Percentage </th>" +
    "<tr>"
)

document.write(
    "<tr>" + 
    "<td>" + sub1 + "</td>" + 
    "<td>" + totalSubMarks + "</td>" +
    "<td>" + obtMarksSub1 + "</td>" + 
    "<td>" + (obtMarksSub1*100/totalSubMarks) + "% </td>" + 
    "</tr>"
)

document.write(
    "<tr>" + 
    "<td>" + sub2 + "</td>" + 
    "<td>" + totalSubMarks + "</td>" +
    "<td>" + obtMarksSub2 + "</td>" + 
    "<td>" + (obtMarksSub2*100/totalSubMarks) + "% </td>" + 
    "</tr>"
)

document.write(
    "<tr>" + 
    "<td>" + sub3 + "</td>" + 
    "<td>" + totalSubMarks + "</td>" +
    "<td>" + obtMarksSub3 + "</td>" + 
    "<td>" + (obtMarksSub3*100/totalSubMarks) + "% </td>" + 
    "</tr>"
)

document.write(
    "<tr>" + 
    "<td>" + sub4 + "</td>" + 
    "<td>" + totalSubMarks + "</td>" +
    "<td>" + obtMarksSub4 + "</td>" + 
    "<td>" + (obtMarksSub4*100/totalSubMarks) + "% </td>" + 
    "</tr>"
)

document.write(
    "<tr>" + 
    "<td>" + sub5 + "</td>" + 
    "<td>" + totalSubMarks + "</td>" +
    "<td>" + obtMarksSub5 + "</td>" + 
    "<td>" + (obtMarksSub5*100/totalSubMarks) + "% </td>" + 
    "</tr>"
)

document.write(
    "<tr>" + 
    "<th>" + totalMarks + "</th>" +
    "<th>" + totalObtainedMarks + "</th>" +
    "<th>" + (totalObtainedMarks*100/totalMarks) + "%" + "</th>" +
    "</th>"
)

document.write("</table>");
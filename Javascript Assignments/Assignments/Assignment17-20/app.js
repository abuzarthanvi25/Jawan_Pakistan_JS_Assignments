// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)
var multiDemArr = [
    [0,1,2], [3,4,5], [6,7,8]
]

// 2. Declare and initialize a multidimensional array
// representing the following matrix:
var multiDimensionalArr = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
]

// 3. Write a program to print numeric counting from 1 to 10.
document.write("<h2>Counting</h2><br>");
for(var i=1; i<11; i++){
    document.write(i + "<br>");
}

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.
document.write("<h2>Userdefined Multiplication Table</h2><br>");
var number = parseInt(prompt('Enter a number to show its multiplication table: '));
var range = parseInt(prompt('Enter length multiplication table: '));

for(var i = 1; i <= range; i++) {
    var result = i * number;
    document.write(`${number} * ${i} = ${result}` + "<br>");
}

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
document.write("<h2>Fruits using for loop</h2><br>")
document.write("Fruits Array: " + fruits + "<br><br>")
for(i=0; i<fruits.length; i++){
    document.write(fruits[i] + "<br>");
}
document.write("<br>")
for(i=0; i<fruits.length; i++){
    document.write("Element at index " + i + " is " + fruits[i] + "<br>");
}

// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
document.write("<h2>Patterns</h2><br>");
document.write("<h3>Counting: </h3> <br>");
for(var i=0; i<11; i++){
    document.write(i + "<br>");
}

document.write("<br>")

document.write("<h3>Reverse Counting: </h3> <br>");
for(var i=10; i>0; i--){
    document.write(i + "<br>");
}

document.write("<br>");

document.write("<h3>Even: </h3> <br>");
for(var i=0; i<21; i+=2){
    document.write(i + "<br>");
}

document.write("<br>");

document.write("<h3>Odd: </h3> <br>");
for(var i=1; i<20; i+=2){
    document.write(i + "<br>");
}

document.write("<br>");

document.write("<h3>Series: </h3> <br>");
for(var i=2; i<21; i+=2){
    document.write(i + "k<br>");
}

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var flag = true;
document.write("<h2>Search By User Input</h2><br>");
var searchItem = prompt("Welcome to ABC bakery. What do you want to order sir/ma'am? ");
for(var i=0; i<A.length; i++){
    if(searchItem === A[i]){
        document.write(searchItem + " is <b>available</b> at " + i + " in our bakery");
        break
    }
    else{
        flag = false;
    }
}
if(flag === false){
    document.write("We are sorry. " + searchItem + " is <b>not available</b> in our bakery");
}

// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].
var arrNum = [24, 53, 78, 91, 12];
document.write("<h2>Max of an Array</h2><br>");
document.write("Array items: " + arrNum + "<br>");
document.write("The largest number is " + Math.max(...arrNum));

// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]
var arrNum = [24, 53, 78, 91, 12];
document.write("<h2>Min of an Array</h2><br>");
document.write("Array items: " + arrNum + "<br>");
document.write("The smallest number is " + Math.min(...arrNum));

// 10. Write a program to print multiples of 5 ranging 1 to
// 100.
document.write("<h2>Multiples of 5 till 100</h2><br>");
for(var i = 5; i<101; i+=5){
    document.write(i + ", ");
}
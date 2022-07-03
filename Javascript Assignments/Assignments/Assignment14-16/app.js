// 1. Declare an empty array using JS literal notation to store
// student names in future.
var arrStudents = []

// 2. Declare an empty array using JS object notation to store
// student names in future.
var arrStudent = {}

// 3. Declare and initialize a strings array
var strArr = ["abc", "def"];

// 4. Declare and initialize a numbers array.
var numArr = [1,2,3];

// 5. Declare and initialize a boolean array.
var boolArr = [true, false];

// 6. Declare and initialize a mixed array.
var mixedArr = [1, 'abc', true];

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:
var qualificationArr = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "Phd"];
document.write("<h4>Qualifications</h4>");
for(var i=0; i<qualificationArr.length; i++){
    document.write(qualificationArr[i] + "<br>");
}

document.write("<br>")
// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:
var studentArr = ["Michael", "John, Tony"];
var studentMarksArr = [320, 230, 480];
var studentPercentagesArr = ["64%", "46%", "96%"];

document.write("<h2>Scores and Percentages</h2>")
document.write("Score of " + studentArr[0] + " is " + studentMarksArr[0] + ". Percentage: " + studentPercentagesArr[0]  + "<br>");
document.write("Score of " + studentArr[1] + " is " + studentMarksArr[1] + ". Percentage: " + studentPercentagesArr[1]  + "<br>");
document.write("Score of " + studentArr[2] + " is " + studentMarksArr[2] + ". Percentage: " + studentPercentagesArr[2]  + "<br>");

// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// Arrays | JAVASCRIPT
// Page 3 of 6
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

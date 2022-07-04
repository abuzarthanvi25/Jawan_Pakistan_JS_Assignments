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
var studentArr = ["Michael", "John", "Tony"];
var studentMarksArr = [320, 230, 480];
var studentPercentagesArr = ["64%", "46%", "96%"];

document.write("<h2>Scores and Percentages</h2>")
document.write("Score of " + studentArr[0] + " is " + studentMarksArr[0] + ". Percentage: " + studentPercentagesArr[0]  + "<br>");
document.write("Score of " + studentArr[1] + " is " + studentMarksArr[1] + ". Percentage: " + studentPercentagesArr[1]  + "<br>");
document.write("Score of " + studentArr[2] + " is " + studentMarksArr[2] + ". Percentage: " + studentPercentagesArr[2]  + "<br><br>");

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
var colors = ["red", "blue", "green", "yellow", "orange"];
document.write("<h2>Colors Array</h2><br>")
document.write(colors + "<br><br>");
var addColorToStart = prompt("What color do you want to add to the beggining of the array: ");
colors.unshift(addColorToStart);
document.write("<b>Array after adding color to start becomes:</b> <br> " + colors + "<br><br>");
var addColorToEnd = prompt("What color do you want to add to the end of the array: ");
colors.push(addColorToEnd);
document.write("<br><b>Array after adding color to the end becomes:</b> <br> " + colors + "<br><br>");
colors.unshift("purple", "indigo");
document.write("<br><b>Array after adding color to the start becomes:</b> <br> " + colors + "<br><br>");
colors.shift();
document.write("<br><b>Array after removing the 1st color becomes:</b> <br> " + colors + "<br><br>");
colors.pop();
document.write("<br><b>Array after removing the last color becomes:</b> <br> " + colors + "<br><br>");
var addColorToIndex = prompt("At which index do you want to add the color: ");
var indexColor = prompt("What color do you want to add at that index: ");
colors[addColorToIndex] = indexColor;
document.write("<br><b>Array after adding the color to index " + addColorToIndex +   " becomes:</b> <br> " + colors + "<br><br>");
var removeColorFromIndex = prompt("At which index do you want to delete the colors: ");
var removeColorFromIndexCount = prompt("How many colors do you want to delete: ");
colors.splice(removeColorFromIndex, removeColorFromIndexCount);
document.write("<br><b>Array after removing " + removeColorFromIndexCount + " colors from index/es " + removeColorFromIndex + " becomes:</b> <br> " + colors + "<br><br>");

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.
arrNums = [2,5,7,1,3,4,8,6];
document.write("<h2>Array Sorting</h2> <br> The initial Array is : " + arrNums);
document.write("<br> The Sorted Array becomes: <br> " + arrNums.sort() + "<br><br>")

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.
var arrStudentScores = [320, 230, 480, 120];
document.write("Scores of Students: " + arrStudentScores + "<br>");
document.write("Ordered Scores of Students : " + arrStudentScores.sort() + "<br>");

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.
var arrCities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write("<h2>Array Of Cities</h2> <br>");
document.write("Cities List: <br> " + arrCities + "<br><br>");
var selectedCities = arrCities.slice(2,4);
document.write("Selected cities list: <br> " + selectedCities + "<br><br>");

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)
var arr = ["This ", " is ", " my ", " cat"];
var txt = arr.join(" ");
document.write("<h2>Array Join Method</h2> <br>");
document.write("Array: " + arr + "<br>");
document.write("String: " + txt + "<br><br>");

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)
var fifoDevices = ["keyboard", "mouse", "printer", "monitor"];
document.write("<h2>FIFO Implementation using Array</h2> <br>");
document.write("Devices: <br>" + fifoDevices + "<br><br>")
var fifoRemove = fifoDevices.shift()
document.write("Out: " + fifoRemove + "<br><br>");
fifoRemove = fifoDevices.shift()
document.write("Out: " + fifoRemove + "<br><br>");
fifoRemove = fifoDevices.shift()
document.write("Out: " + fifoRemove + "<br><br>");
fifoRemove = fifoDevices.shift()
document.write("Out: " + fifoRemove + "<br><br>");

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)
var lifoDevices = ["keyboard", "mouse", "printer", "monitor"];
document.write("<h2>LIFO Implementation using Array</h2> <br>");
document.write("Devices: <br>" + lifoDevices + "<br><br>");
var lifoRemove = lifoDevices.pop()
document.write("Out: " + fifoRemove + "<br><br>");
lifoRemove = lifoDevices.pop()
document.write("Out: " + lifoRemove + "<br><br>");
lifoRemove = lifoDevices.pop()
document.write("Out: " + lifoRemove + "<br><br>");
lifoRemove = lifoDevices.pop()
document.write("Out: " + lifoRemove + "<br><br>");

// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:
document.write("<h2>Phones Dropdown</h2>")
var phonesArr = ["Apple", "Samsung", "Motorolla", "Nokia", "Sony", "Haier"];
document.write(
    "<select>"
)
document.write("<option>" + phonesArr[0] + "</option>");
document.write("<option>" + phonesArr[1] + "</option>");
document.write("<option>" + phonesArr[2] + "</option>");
document.write("<option>" + phonesArr[3] + "</option>");
document.write("<option>" + phonesArr[4] + "</option>");
document.write("</select>")
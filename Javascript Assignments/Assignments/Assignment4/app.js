// 1. Declare 3 variables in one statement 
var a = 1; var b = 2 ; var c = 3;

// 2. Declare 5 legal & 5 illegal variable names
// ------------ legal names -------------
var legal = "legal variable 1";
var legal123 = "legal variable 2";
var legal_Var3 = "legal variable 3";
var legal$Var4 = "legal variable 4";
var LEGAL = 'legal variable 5';
// ------------- illegal names -----------
// var 123 = "illegal variable 1";
// var *123 = "illegal variable 2";
// var a b c = "illegal variable 3";
// var %123 = "illegal variable 4";
// var ^123 = "illegal variable 5";


// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________
var numbers = "numbers";
var dllr = "$";
var undscr = "_";
var letter = "letter";
document.write("Variable names can only contain " + numbers + " , " + dllr + " and " + undscr + ". For example: $my_1stVariable" + "<br>" + "Variable must begin with a " + letter + "," + undscr + "." + "For example: $name, _name or name" + "<br>" + "Variable names are case sensitive" + "<br>" + "Variable name should not be JS keywords" )

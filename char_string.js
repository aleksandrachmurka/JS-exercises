// Check if your name characters present in a given string

// Write a function that takes a a string as an argument represents your name that checks if all your name characters presents in this string

//  "hello all my great friends";

// For example:


// check("karl"); // false
// check("sally"); // true


var name = "aleksandra";
var str = "hello all my great friends";
var resultTrue = 0;
var resultFalse = 0;

function checkStr(name, str) {
	name = name.toLowerCase().split("");
	str = str.toLowerCase().split("");
	for (var i=0; i<name.length; i++) {
		if (str.includes(name[i])) {
			resultTrue++;
			} else {
			resultFalse--;
		}
	}
	return resultFalse < 0 ? false : true
}


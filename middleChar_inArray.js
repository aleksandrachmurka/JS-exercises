// Concatenating mid characters in array of words

// Write a function that takes an array of words as an argument and returns a string represents every middle characters in odd number letters words

// For example:

// midChars(["Happy","New","Year","All","Friends"]); // pele

// var x = ["Happy","New","Year","All","Friends"];

function middleLetters(array) {
	var result = "";
	for (i=0; i<array.length; i++) {
		if (array[i].length%2 > 0) {
			result += array[i][Math.round((array[i].length - 1)/2)];
		}
	}
	return result;
}

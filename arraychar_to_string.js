// Write a function that takes an array as a parameter and return string that represents two words, one represent every first character in every word in array and the second represent every last characters in array words concatenated together with is in between

// For example

// [“Umbrella”,“drum”, “aka”, “cartz”, “ini”, “toon”, “young”];

// Output: Udacity is amazing.

var arr = ['Umbrella', 'drum', 'aka', 'cartz', 'ini', 'toon', 'young'];

var wordOne = "";
var wordTwo = "";

function wordFromArray(array) {
	for (var word of arr) {
		wordOne += word.charAt(0);
		wordTwo += word.charAt(word.length-1);
	}
	return wordOne + " is " + wordTwo;
}
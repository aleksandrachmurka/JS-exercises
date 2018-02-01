// Sum of two largest numbers in array

// Write a function that takes an array of numbers as argument and returns a number represent the sum of the two largest numbers in it.

function great(array) {
	sum.sort(function(a, b){return a - b});
	return sum[sum.length-1] + sum[sum.length-2];
}


/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

var gcd = function (a, b) {
	if (b === 0)
		return a;

	return gcd(b, a % b);
},
lcm = function (a, b) {
	return (a * b) / gcd(a, b);
},
i,
list = [];

for (i = 1; i <= 20; ++i)
	list[i] = i;

// Calculate the lcm for 1-20
console.log(list.reduce(function (prev, n) {
	return lcm(prev, n);
}));
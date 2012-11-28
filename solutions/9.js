/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a^2 + b^2 = c^2
For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.

a = 1000 - b - c
a = sqrt((c-b)(c+b))

1000 - b - c = sqrt((c-b)(c+b))

*/

var isTriplet = function (a, b, c) {
	return a * a + b * b === c * c;
},
solve = function () {
	var a, b, c, bMax, cMin;

	// Loop through all values of a, b, c that total to 1000 and check if any are a triplet
	for (a = 1; a < 332; ++a) {
		bMax = Math.floor((1000 - a) / 2);
		for (b = a + 1, c = 1000 - a - b; b <= bMax; ++b, --c)
			if (isTriplet(a, b, c))
				return a * b * c;
	}
};

console.log(solve());
/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

var isPalindrome = function (n) {
	var s = n + '',
		endIndex = s.length - 1,
		i;

	for (i = 0; i < s.length; ++i) {
		if (s[i] !== s[endIndex - i])
			return false;
	}

	return true;
},
// Checks if n is made from the product of two 3-digit numbers
divisorCheck = function (n) {
	var quotient, i;
	for (i = 100; i <= 999; ++i) {
		quotient = n / i;
		if (n % i === 0 && quotient >= 100 && quotient <= 999)
			return true;
	}

	return false;
},
i;

// Check all palindromes from 999 * 999 to 100 * 100 if they can be made from
// a product of two 3-digit numbers
for (i = 999 * 999; i >= 10000; --i) {
	if (isPalindrome(i) && divisorCheck(i)) {
		console.log(i);
		break;
	}
}
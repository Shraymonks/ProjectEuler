/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/

var nthPrime = (function () {
	var primes = [2, 3];

	return function (n) {
		// Generates prime by finding next number coprime to all primes known so far
		var findNextPrime = function () {
			var i = primes[primes.length - 1] + 2,
				isCoprime = function (n) {
					var root = Math.sqrt(n),
						i;

					for (i = 0; i < primes.length; ++i)
						if (i <= root) {
							if (n % primes[i] === 0)
								return false;
						}
						else
							return true;

					return true;
				},
				isPrime = false;

			for (isPrime = false; !isPrime; i += 2)
				isPrime = isCoprime(i);

			i -= 2;
			primes.push(i);

			return i;
		},
		i;

		for (i = primes.length; primes.length < n; ++i)
			findNextPrime();

		return primes[n - 1];
	};
}).call(this);

console.log(nthPrime(10001));
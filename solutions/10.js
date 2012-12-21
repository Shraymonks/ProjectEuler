/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
*/

var getPrimes = function (max) {
		var sieve = [],
			root = Math.floor(Math.sqrt(max)),
			i,
			j,
			step;

		// Mark even numbers in sieve
		sieve[2] = false;
		for (i = 3; i <= max; ++i)
			sieve[i] = i % 2 === 0;

		// Mark every other composite in sieve
		for (i = 3; i <= root; i += 2) {
			if (!sieve[i]) {
				step = 2 * i;
				for (j = i * i; j <= max; j += step) {
					sieve[j] = true;
				}
			}
		}

		return sieve.reduce(function (primes, composite, n) {
			if (!composite)
				primes.push(n);
			return primes;
		}, []);
	},
	solve = function () {
		return getPrimes(2000000).reduce(function (sum, n) {
			return sum += n;
		});
	};

console.log(solve());
/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

var largestPrimeFactor = (function () {
	var primes = [2, 3];

	// Returns largest prime from prime factorization
	return function (n) {
		var largestPrimeFactor = n,
			root = Math.floor(Math.sqrt(n)),
			divide = function () {
				var i;

				for (i = 0; i < primes.length; ++i) {
					if (primes[i] <= root) {
						if (n % primes[i] === 0) {
							n /= primes[i];
							largestPrimeFactor = Math.max(primes[i], n);
							root = Math.floor(Math.sqrt(n));
							return divide();
						}
					}
					else
						break;
				}

				--i;

				if (primes[i] <= root) {
					for (i = primes[i]; i <= root; i += 2) {
						if (n % i === 0) {
							n /= i;
							largestPrimeFactor = Math.max(i, n);
							primes.push(i);
							root = Math.floor(Math.sqrt(n));
							return divide();
						}
					}
				}

				return largestPrimeFactor;
			};

		return divide();
	};
}).call(this);

console.log(largestPrimeFactor(600851475143));
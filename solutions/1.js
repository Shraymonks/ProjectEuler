var sum = 0,
	i;

// Naive implementation is sufficent enough for this question
for (i = 0; i < 1000; ++i)
	if (i % 3 === 0 || i % 5 === 0)
		sum += i;

console.log(sum);
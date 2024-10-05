function isPrime(n) {
	if (n <= 1) {
		return false;
	}
	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i === 0) {
			return false;
		}
	}
	return true;
}

let myNumber = 15;
let isMyNumberPrime = isPrime(myNumber);
console.log(
	isMyNumberPrime ? "The Number is a Prime number" : "Not a Prime Number",
);

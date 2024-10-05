function factorial(n) {
	if (n === 0) {
		return 1;
	}
	return n * factorial(n - 1);
}

let myNumber = 5;
let factorialOfMyNumber = factorial(myNumber);
console.log(factorialOfMyNumber);
// Recurring function

function findLargestNumber(...rest) {
	let largestNumber = rest[0];
	for (let i = 1; i < rest.length; i++) {
		if (rest[i] > largestNumber) {
			largestNumber = rest[i];
		}
	}
	return largestNumber;
}

let largestNumber = findLargestNumber(4, 4);
console.log(largestNumber);

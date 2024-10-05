// average of a list of numbers
function average(...rest) {
	if (rest.length === 0) {
		return 0;
	}
	let sum = rest.reduce((acc, total) => acc + total, 0);
	const average = sum / rest.length;
	return average;
}

console.log(average(2, 5, 4, 8, 1, 12, 15));

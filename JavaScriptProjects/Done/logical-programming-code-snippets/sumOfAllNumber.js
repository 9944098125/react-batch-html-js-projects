// // sum of all numbers in the list
// function sum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// const arr = [1, 3, 6, 4];
// console.log(sum(arr));
function sumOfArray(arr) {
	sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

const nums = [1, 5, 4, 3, 4];
console.log(sumOfArray(nums));

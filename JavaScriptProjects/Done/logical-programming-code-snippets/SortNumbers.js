function sortArray(numbers) {
  return numbers.sort(function (a, b) {
    return a - b;
  });
}

let myArray = [1, 4, 7, 3, 9, 2];
let sortedArray = sortArray(myArray);
console.log(sortedArray);

// remove duplicates
function removeDuplicates(arr) {
  return arr.filter((value, index, self) => self.indexOf(value) === index);
}

console.log(removeDuplicates([1, 1, 3, 3, 5, 3, 7, 7]));

function reverseString(str) {
  return str.split("").reverse().join("");
}

let myString = "Hello world";
let reversedString = reverseString(myString);
console.log(reversedString);

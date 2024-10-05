const parent = document.getElementById("parent");
const inputField = document.getElementById("input");
const message = document.getElementById("resultText");

function checkPalindrome() {
	const inputValue = inputField.value;
	const reversedValue = inputValue.split("").reverse().join("");
	const result = inputValue === reversedValue;
	result === true
		? (parent.style.backgroundColor = "green")
		: (parent.style.backgroundColor = "red");
	message.style.display = "block";
	message.textContent = result ? "It's a palindrome" : "It's not a palindrome";
}

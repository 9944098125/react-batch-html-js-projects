function checkPalindrome(str) {
	const len = str.length;
	for (let i = 0; i < len / 2; i++) {
		if (str[i] !== str[len - 1 - i]) {
			console.log("NOT a palindrome");
		}
	}
	console.log("The string is a palindrome");
}

checkPalindrome("racecar");

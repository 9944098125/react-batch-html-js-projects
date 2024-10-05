let startTime = 0;
let timerInterval;
let quote = "Fetching a random quote...";

// Function to fetch a random quote from the Quotable API
async function getRandomQuote() {
	try {
		const response = await fetch("https://api.quotable.io/random");
		const data = await response.json();
		quote = data.content;
		document.getElementById("quote").textContent = `Quote : "${quote}"`;
	} catch (error) {
		console.error("Failed to fetch a random quote:", error);
	}
}

function updateTimer() {
	const now = new Date().getTime();
	const elapsedSeconds = Math.floor((now - startTime) / 1000);
	// console.log("elapsedSeconds", elapsedSeconds);
	const remainingSeconds = Math.max(0, 60 - elapsedSeconds);
	document.getElementById("timer").innerHTML =
		remainingSeconds + `<span class='small-text'>Seconds</span>`;
	if (remainingSeconds === 0) {
		clearInterval(timerInterval);
		document.getElementById("input").readOnly = true;
		showResult();
	}
}

function startTimer() {
	if (startTime === 0) {
		startTime = new Date().getTime();
		timerInterval = setInterval(updateTimer, 1000);
	}
}

function checkQuote() {
	const typedText = document.getElementById("input").value;
	if (typedText === quote) {
		clearInterval(timerInterval);
		document.getElementById("input").readOnly = true;
		showResult();
	}
}

function showResult() {
	const words = document.getElementById("input").value.split(" ").length;
	// console.log(
	// 	document.getElementById("input").value.split(" ").filter(Boolean),
	// );
	// console.log(document.getElementById("input").value.split(" "));
	// console.log(
	// 	document.getElementById("input").value.split(" ").filter(Boolean),
	// );
	const wpm = Math.round(words);
	document.getElementById("result").innerHTML =
		"Your Typing speed is " +
		`<span class="span">${wpm}<span id='wpm'> words per minute.</span></span>`;
	document.getElementById("result").classList.remove("hidden");
}

function resetTimer() {
	clearInterval(timerInterval);
	startTime = 0;
	document.getElementById("timer").textContent = 60;
	getRandomQuote();
	document.getElementById("input").value = "";
	document.getElementById("input").readOnly = false;
	document.getElementById("result").textContent = "";
	document.getElementById("result").classList.add("hidden");
}

// Fetch the initial random quote
getRandomQuote();

let lastKeyWasOperator = false; // Flag to track if the last key was an operator
let shouldClearDisplay = false; // Flag to clear display after calculation
let isPercentageMode = false; // Flag to handle percentage correctly

// Function to append keys to the display
function appendKey(key) {
	const display = document.getElementById("display");

	// Clear the display if the user starts a new calculation after pressing "="
	if (shouldClearDisplay && !["+", "-", "×", "÷", "%"].includes(key)) {
		display.value = "";
		shouldClearDisplay = false;
	}

	// Handle percentage key (just add it as an operator, not immediate calculation)
	if (key === "%") {
		if (lastKeyWasOperator || display.value === "") return; // Prevent consecutive operators or starting with %
		display.value += key;
		lastKeyWasOperator = true;
		isPercentageMode = true;
		return;
	}

	// Handle operators: Prevent consecutive operators
	if (["+", "-", "×", "÷"].includes(key)) {
		if (lastKeyWasOperator || display.value === "") return; // Prevent consecutive operators
		lastKeyWasOperator = true;
		isPercentageMode = false; // Reset percentage mode after other operators
	} else {
		lastKeyWasOperator = false; // Reset flag if key is not an operator
	}

	// Append the key to the display
	display.value += key;
}

// Function to clear the display
function clearDisplay() {
	const display = document.getElementById("display");
	display.value = "";
	lastKeyWasOperator = false;
	shouldClearDisplay = false;
	isPercentageMode = false; // Reset percentage mode on clear
}

// Function to calculate the result
function calculate() {
	const display = document.getElementById("display");
	try {
		// Replace × and ÷ with * and / for evaluation
		let expression = display.value.replace(/×/g, "*").replace(/÷/g, "/");

		// Handle x % y as (x * y / 100)
		if (isPercentageMode && expression.includes("%")) {
			let parts = expression.split("%");
			if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
				// Calculate x * y / 100
				let x = parseFloat(parts[0]);
				let y = parseFloat(parts[1]);
				let result = (x * y) / 100;
				display.value = result.toString();
				isPercentageMode = false; // Reset percentage mode after calculation
				shouldClearDisplay = true;
				return;
			}
		}

		// Evaluate the expression normally
		let result = eval(expression);

		// Show result in the display
		display.value = result;
		shouldClearDisplay = true;
		isPercentageMode = false; // Reset percentage mode after calculation
	} catch (error) {
		display.value = "Error"; // Handle invalid expressions
		shouldClearDisplay = true;
	}
}

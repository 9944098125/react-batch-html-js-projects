const form = document.getElementById("question-form");
const fruitsAnswerDiv = document.getElementById("fruits-answer");
const ageCategoryAnswerDiv = document.getElementById("age-category-answer");
const timesAnswerDiv = document.getElementById("times-answer");
const nameDiv = document.getElementById("name-answer");
const fruitsError = document.getElementById("fruits-error");
const ageError = document.getElementById("age-error");
const timesError = document.getElementById("times-error");
const nameError = document.getElementById("name-error");

form.addEventListener("submit", function (e) {
	e.preventDefault();

	fruitsError.textContent = "";
	ageError.textContent = "";
	timesError.textContent = "";
	nameError.textContent = "";

	let fruitsAnswer = [];
	let ageCategoryAnswer = "";
	let timesAnswer = "";

	const fruits = Array.from(
		document.querySelectorAll("input[name=fruits]:checked"),
	);
	const ageCategory = document.querySelector("input[name=ageCategory]:checked");
	const times = form.elements.times.value;
	const name = document.getElementById("nameInput").value;

	// Validate that at least one fruit is selected
	if (fruits.length === 0) {
		fruitsError.textContent = "Select at least one Fruit !";
		fruitsError.style.color = "red";
	}

	// Validate that age category is selected
	if (!ageCategory) {
		ageError.textContent = "Please select some Age Group !";
		ageError.style.color = "red";
	}

	// Validate that times are selected
	if (!times) {
		timesError.textContent =
			"Please select how many times do you eat for a day !";
		timesError.style.color = "red";
	}

	// Validate that name is entered
	if (!name.trim()) {
		nameError.textContent = "Name is required !";
		nameError.style.color = "red";
		return;
	}

	// Process answers if all validations pass
	const selectedFruits = fruits.map((fruit) => fruit.value).join(", ");
	fruitsAnswer.push(`Fruits Preferred - ${selectedFruits}`);
	ageCategoryAnswer = `Age Category - ${ageCategory.value}`;
	timesAnswer = `Food Intake - ${times}`;

	// Display answers
	fruitsAnswerDiv.textContent = fruitsAnswer.join("\n");
	ageCategoryAnswerDiv.textContent = ageCategoryAnswer;
	timesAnswerDiv.textContent = timesAnswer;
	nameDiv.innerHTML = "Name: " + name;
});

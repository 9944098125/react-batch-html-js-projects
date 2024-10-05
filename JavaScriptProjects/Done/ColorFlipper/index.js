const changeColorBtn = document.getElementById("changeBtn");
const currentColor = document.getElementById("currentColor");

const hexCodesArray = [
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
];

function getRandomItem() {
	const randomIndexItem = Math.floor(Math.random() * hexCodesArray.length);
	const randomItem = hexCodesArray[randomIndexItem];
	return randomItem;
}

function getRandomHexString(length) {
	let hexString = "";
	for (let i = 0; i < length; i++) {
		hexString += getRandomItem();
	}
	return hexString;
}

changeColorBtn.addEventListener("click", () => {
	const randomHexString = getRandomHexString(6);
	const hexString = `#${randomHexString}`;
	currentColor.textContent = hexString;
	document.body.style.backgroundColor = hexString;
	document.body.style.transition = "all 0.5s ease-in-out";
});

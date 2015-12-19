function changeBackground() {
	bodyElement = document.getElementById("random_background");
	randomHexCode = generateRandomHexCode();
	console.log(randomHexCode);
	bodyElement.style.backgroundColor = randomHexCode;
}

function generateRandomHexCode() {
	return "#" + Math.random().toString(16).slice(2, 8);

}
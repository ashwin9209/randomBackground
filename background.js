function changeBackground() {
	
	/* Get body element and change its background color based on the random color code. */
	bodyElement = document.getElementById("initial-state-body");
	randomHexCode = generateRandomHexCode();
	console.log(randomHexCode);
	bodyElement.style.backgroundColor = randomHexCode;

	/* Print the hex code on the screen */
	hexCodeText = document.getElementById("hexCode-value");
	hexCodeText.innerHTML = randomHexCode;
}

function generateRandomHexCode() {
	return "#" + Math.random().toString(16).slice(2, 8);

}
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");

color1.value = "#ffff00";
color2.value = "#ffff00";
body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

css.textContent = body.style.background + ";";

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomNumber(from, to) {
	if (from === 0) {
		return Math.floor(Math.random() * (to + 1));
	}
	else return Math.floor((Math.random() * to ) + from);
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}


function setRandomGradient() {
	var randomNumberRed1 = randomNumber(0, 255);
	var randomNumberGreen1 = randomNumber(0, 255);
	var randomNumberBlue1 = randomNumber(0, 255);
	var randomNumberRed2 = randomNumber(0, 255);
	var randomNumberGreen2 = randomNumber(0, 255);
	var randomNumberBlue2 = randomNumber(0, 255);

	var hexColor1 = rgbToHex(randomNumberRed1, randomNumberGreen1, randomNumberBlue1);
	var hexColor2 = rgbToHex(randomNumberRed2, randomNumberGreen2, randomNumberBlue2);

	color1.value = hexColor1;
	color2.value = hexColor2;


	body.style.background = 
	"linear-gradient(to right, rgb(" 
	+ randomNumberRed1 
	+ ", " 
	+ randomNumberGreen1 
	+ ", " 
	+ randomNumberBlue1
	+ ")" 
	+ ", "
	+ "rgb(" 
	+ randomNumberRed2
	+ ", "
	+ randomNumberGreen2
	+ ", "
	+ randomNumberBlue2
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", setRandomGradient);
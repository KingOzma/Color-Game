var numCircles = 6;
var	colors = [];
var pickedColor;
var circles = document.querySelectorAll(".circle");
var colorDisplay = document.getElementById("colorDisplay");
var infoDisplay = document.querySelector("#info");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var statusButtons = document.querySelectorAll(".status");

init();

  function init(){
  	//status buttons event listeners
  	setupStatusButtons();
  	setupCircles();
  	reset();
  }

  function setupStatusButtons(){
  	for(var i = 0; i < statusButtons.length; i++){
	statusButtons[i].addEventListener("click", function(){
		statusButtons[0].classList.remove("selected");
		statusButtons[1].classList.remove("selected");
		statusButtons[2].classList.remove("selected");
		statusButtons[3].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent === "Easy"){
        numCircles = 3;
      } else if (this.textContent === "Medium") {
        numCircles = 6;
      } else if (this.textContent === "Hard") {
        numCircles = 9;
      }  else {
      	numCircles = 12;
      }
		reset();
	});
  }
}

function setupCircles(){
	  for(var i = 0; i < circles.length; i++){
	//add click listeners to circles
	circles[i].addEventListener("click", function(){
		//grab color of clicked circles
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor === pickedColor){
			infoDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?"
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else {
			this.style.backgroundColor= "#232323";
			infoDisplay.textContent = "Try Again"
		}
		});
	}
}

function reset(){
	//generate all new colors
	colors = generateRandomColors(numCircles);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors"
	infoDisplay.textContent = "";
	//change colors of circles
	for(var i = 0; i < circles.length; i++){
		if(colors[i]){
		circles[i].style.display = "block";
		circles[i].style.backgroundColor = colors[i];
	} else {
		circles[i].style.display = "none";
	}
}
	h1.style.backgroundColor = "#b20505";
}

resetButton.addEventListener("click", function(){
	reset();
})

function changeColors(color){
	//loop through all circles
	for(var i = 0; i < circles.length; i++){
	//change each color to match given color
	circles[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = []
	//repeat num times
	for(var i = 0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor())
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0-255
	var r =Math.floor(Math.random() * 256);
	//pick a "green" from 0-255
	var g =Math.floor(Math.random() * 256);
	//pick a "blue" from 0-255
	var b =Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
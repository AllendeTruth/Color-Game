
var colors = [];
var	numSquares = 6;
var pickedColor;

var resetButton = document.querySelector("#reset");
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var colorDisplay = document.querySelector("#colorDisplay");
var h1 = document.querySelector("h1");
var modeButtons = document.querySelectorAll(".mode");

init();
function init(){
	setUpModeButtons();
	setUpSquares();
	reset();
};

// reset
function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
	for (var i =0; i<squares.length; i++){
		if(colors[i]){
		squares[i].style.display = "block";
		squares[i].style.backgroundColor=colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor="steelblue";
}

// resetButton.addEventListener("click", function(){
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent=pickedColor;
// 	for(var i = 0; i<squares.length; i++){
// 		squares[i].style.backgroundColor=colors[i];
// 		}
// 	h1.style.backgroundColor="steelblue";
// });

function setUpModeButtons(){
	for(var i = 0; i<modeButtons.length; i++){
		
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares=3: numSquares=6;
			reset();
		});
	}
};
// modebuttons------------------------
// easyButton.addEventListener("click", function(){
// 	hardButton.classList.remove("selected");
// 	easyButton.classList.add("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent=pickedColor;
// 	for(var i = 0; i<squares.length; i++){
// 		if(colors[i]){
// 		squares[i].style.backgroundColor=colors[i];
// 		}else{
// 			squares[i].style.display = "none";
// 		}
// 	}
	
// });

// hardButton.addEventListener("click", function(){
// 	easyButton.classList.remove("selected");
// 	hardButton.classList.add("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent=pickedColor;
// 	for(var i = 0; i<squares.length; i++){
// 		if(colors[i]){
// 		squares[i].style.backgroundColor=colors[i];
// 		squares[i].style.display = "block";
// 		}
// 	}
// });
 

 // colorDisplay.textContent = pickedColor;

 function setUpSquares(){
 	
 	for (var i = 0; i<squares.length; i++){
 		// squares[i].style.backgroundColor = colors[i];
 		squares[i].addEventListener("click", function(){
 			var clickedColor = this.style.backgroundColor;
 			if(clickedColor === pickedColor){
 				messageDisplay.textContent = "Correct!";
 				resetButton.textContent = "Play Again?";
 				changeColors(clickedColor);
 				h1.style.backgroundColor = pickedColor;
 			} else{
 				messageDisplay.textContent = "Try Again";
 				this.style.backgroundColor="#232323";
 			}
 		});
 	}
 }
// set up squares
// for(var i = 0; i < squares.length; i++){
// 	squares[i].style.backgroundColor = colors[i];
// 	squares[i].addEventListener("click", function(){
		
// 		var clickedColor = this.style.backgroundColor;

// 		if(clickedColor === pickedColor){
// 			messageDisplay.textContent="Correct!"
// 			resetButton.textContent="Play Again?"
// 			changeColors(clickedColor);
// 			h1.style.backgroundColor = clickedColor;
// 		} else {
// 			messageDisplay.textContent="Try Again"
// 			this.style.backgroundColor="#232323"
// 		}

// 	});	
// }
// function reset(){

// }


resetButton.addEventListener("click", function(){
	reset();
});

// generate random color
function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);

	return "rgb("+r+", "+g+", "+b+")"
}
// generate array of colors
function generateRandomColors(num){
	var arr=[];
	for (var i=0; i<num; i++){
		arr.push(randomColor());
	}
	return arr;
}    
// pick color out of array     
function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
};
// put color in index of squares
function changeColors(color){
	for(var i = 0; i<squares.length; i++){
		squares[i].style.backgroundColor = color; 
	}
}
// put color in background of h1

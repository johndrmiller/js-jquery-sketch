$(document).ready(function(){
	var button=$("button"),
	newsides,
	padContainer = $(".padContainer");
	setup(16,1);
	function setup(sides, option) {
		var side=(600/sides); 
		for (var i=0; i<sides; i++) {
			var row = $('<div class="row"></div>');
			row.css({'width': '100%', "height":side+"px", "display":"block"});
			padContainer.append(row);
			for (var j=0; j<sides; j++) {
				var cell = $('<div class="cell"></div>');
				cell.css({'width':side+'px', 'height':side+"px", 'background-color': "white", 'display':'inline-block', 'margin':0, 'padding':0});
				row.append(cell);
			}
		}
		gameMode(option);
	}
	function gameMode(option) {
		switch (option) {
			case 1:
				padContainer.on("mousemove", ".cell", function(){
					$(this).css({"background-color": "black"});
				});	
				break;
			case 2:
				padContainer.on("mousemove", ".cell", function(){
					var newColor="rgb("+randomCV()+","+randomCV()+","+randomCV()+")";
					$(this).css({"background-color": newColor});
				});	
				break;
		}
	}
	function checkNum(num){
		if (5<num && num<60) {
			return num;
		} else {
			checkNum(prompt("Please select a number between 5 and 60"));
		}
	}
	function randomCV(){
		return Math.floor(Math.random()*(256-0));
	}
	$("#option1").on("click", function(){
		padContainer.empty();
		newsides = checkNum(prompt("How many squares per side? (a number between 5 and 60)"));
		setup(newsides, 1);
	});
	$("#option2").on("click", function(){
		padContainer.empty();
		checkNum(prompt("How many squares per side? (a number between 5 and 60)"));
		setup(newsides,2);
	});







});

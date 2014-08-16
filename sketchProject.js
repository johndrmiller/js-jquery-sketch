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
		padContainer.off("mouseover");
		switch (option) {
			case 1:
				padContainer.on("mouseover", ".cell", function(){
					$(this).css({"background-color": "black"});
				});	
				break;
			case 2:
				padContainer.on("mouseover", ".cell", function(){
					var newColor="rgb("+randomCV()+","+randomCV()+","+randomCV()+")";
					$(this).css({"background-color": newColor});
				});	
				break;
			case 3:
				padContainer.on("mouseover",".cell", function(){
					var that = $(this);
					if (that.css("background-color")==="rgb(255, 255, 255)") {
						var newColor="rgb("+randomCV()+","+randomCV()+","+randomCV()+")";
						that.css({"background-color": newColor });
					} else {	
						var cArray = that.css("background-color").match(/\d+/g);
						var nArray = [];
						cArray.forEach(function(element, index, array){
							var nElement = parseInt(element);
							if (nElement>25){
								nElement-=25;
							} else {
								nElement = 0;
							}
							nArray.push(nElement);
						});
						that.css({"background-color": "rgb("+nArray[0]+","+nArray[1]+","+nArray[2]+")"});
					}
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
		newsides = checkNum(prompt("How many squares per side? (a number between 5 and 60)"));
		setup(newsides,2);
	});
	$("#option3").on("click", function(){
		padContainer.empty();
		newsides = checkNum(prompt("How many squares per side? (a number between 5 and 60)"));
		setup(newsides,3);
	});
});
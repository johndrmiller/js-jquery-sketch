$(document).ready(function(){
	var side=(600/16);
	var padContainer = $(".padContainer");
	for (var i=0; i<16; i++) {
		var row = $('<div class="row"></div>');
		row.css({'width': '100%', "height":side+"px", "display":"block"});
		padContainer.append(row);
		for (var j=0; j<16; j++) {
			var cell = $('<div class="cell"></div>');
			cell.css({'width':side+'px', 'height':side+"px", 'background-color': "white", 'display':'inline-block', 'margin':0, 'padding':0});
			row.append(cell);
		}
	}
	padContainer.on("mouseenter", ".cell", function(){

		console.log("yep");
	})












});
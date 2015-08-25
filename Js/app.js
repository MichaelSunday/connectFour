$(function() { 
console.log('jQuery linked');

$('.col').click(function() {
	getNextOpen($(this));
	dropGamePiece($(this));
	});

board = [ "", "", "", "", "", "", "",
		  "", "", "", "", "", "", "",
		  "", "", "", "", "", "", "",
		  "", "", "", "", "", "", "",
		  "", "", "", "", "", "", "",
		  "", "", "", "", "", "", ""];
var boxIndex;
var clickCount = 0;

function dropGamePiece(column) {
var boxes = $(column).children();
var curBox = boxes.eq(boxIndex);
	clickCount++;
		if (clickCount % 2 === 1) {
			$(curBox).css('background-color', 'blue');
			console.log(clickCount);
		}
	
	        else {
	        	
	        	$(curBox).css('background-color', 'red');
	        	console.log(clickCount);
	        }
	    };
function isOpen(elm) {
	var color = $(elm).css('background-color')

	if (color == 'rgb(0, 0, 255)' || color == 'rgb(255, 0, 0)') {
		return false; }
			else {
				return true;
		}
}	

function getNextOpen(column){
	 var boxes = $(column).children();

	 	boxes.each(function(index,value) {
	 			if (isOpen(value)){
	 				boxIndex = index;

	 			}
	 	})
}
   




});







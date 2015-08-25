$(function() { 
console.log('jQuery linked');

$('.col').click(function() {
	colIndex = $(this).attr('data-pos');
	getNextOpen($(this));
	dropGamePiece($(this));
	});

var board = [ ["", "", "", "", "", "", ""],
		      ["", "", "", "", "", "", ""],
		      ["", "", "", "", "", "", ""],
		      ["", "", "", "", "", "", ""],
		      ["", "", "", "", "", "", ""],
		      ["", "", "", "", "", "", ""]
		];  


function printBoard() {
for (i = 0; i < board.length; i++) { console.log(board[i]) }
 }	
var colIndex;
var boxIndex;
var clickCount = 0;

function dropGamePiece(column) {
var boxes = $(column).children();
var curBox = boxes.eq(boxIndex);
	clickCount++;
		if (clickCount % 2 === 1) {
			$(curBox).css('background-color', 'blue');
			board[boxIndex][colIndex] = "1";
		}
	
	        else {
	        	
	        	$(curBox).css('background-color', 'red');
	        	board[boxIndex][colIndex] = "2";
	        }
	    console.log('CURRENT BOARD');    
	    console.log(printBoard());
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
function checkHoriz() {
	for (var i = 0; i < board.length; i++)  //rows
		for (var j =0; j < board[0].length - 3 ; j++)  //columns
			if board[boxIndex][colIndex] == board[boxIndex][colIndex+1];
}
   




});







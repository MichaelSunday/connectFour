 console.log('jQuery linked');



$('.col').click(function() {
	colIndex = $(this).attr('data-pos');
	getNextOpen($(this));
	dropGamePiece($(this));
	console.log(checkHoriz());
	console.log(checkVert());

	});

var board = [ [0, 0, 0, 0, 0, 0, 0],
		      [0, 0, 0, 0, 0, 0, 0],
		      [0, 0, 0, 0, 0, 0, 0],
		      [0, 0, 0, 0, 0, 0, 0],
		      [0, 0, 0, 0, 0, 0, 0],
		      [0, 0, 0, 0, 0, 0, 0]
		];  


// HARD CODE -  function checkHoriz() {
// 	for (i = 0; i < board.length; i++) {
// 			if  (board[5][0] != 0 &&
// 				(board[5][0] == board[5][1]) &&
// 				(board[5][0] == board[5][2]) &&
// 				(board[5][0] == board[5][3]))
// 					{ return true } 
// 			else { return false } 
						
// }

//  JULI's TRY - function checkHoriz() {
// 	for (i = 0; i < board.length; i++)  { //rows
// 		for (j = 0; j < board.length-3; j++)  {//columns
// 			if (board[i][j] == 0) { console.log('cool') }
// 			else if (board[i][j] == board[i][j+1] &&
// 				    board[i][j] == board[i][j+2] &&
// 				    board[i][j] == board[i][j+3] )
// 					{ return true } 
// 			else { return false } 
// 		}
//  }	
// }
function getCur() {	

if (clickCount % 2 === 1) {
			return 1;
		}
	
	        else {
	        	
	        	return 2;
	        }
}

function checkHoriz() {
	var sym = getCur();
	for (var i = 0; i < board.length; i++)  { //rows		
		for (var j = 0; j < board[i].length - 3; j++)  {//columns
			
			if ( (board[i][j] == board[i][j+1]) &&
				 (board[i][j] == board[i][j+2]) &&
				 (board[i][j] == board[i][j+3]) &&
				 (board[i][j] == sym))
					{ return true }
				

		}

						
	}
	return false;
}

function checkVert() {
	var sym = getCur();
	for (var i = 0; i < board[i].length - 3; i++) {
		for (var j = 0; j < board.length; j++) {
			if ( (board[i][j] == board[i+1][j]) &&
				 (board[i][j] == board[i+2][j]) &&
				 (board[i][j] == board[i+3][j]) &&
				 (board[i][j] == sym))
					{ return true }
		}
	}
	return false;
}

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
			board[boxIndex][colIndex] = 1;
		}
	
	        else {
	        	
	        	$(curBox).css('background-color', 'red');
	        	board[boxIndex][colIndex] = 2;
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



   












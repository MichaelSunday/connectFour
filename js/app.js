 console.log('jQuery linked');



$('.col').click(function() {
	colIndex = $(this).attr('data-pos');
	getNextOpen($(this));
	dropGamePiece($(this));
	console.log(checkHoriz());
	console.log(checkVert());
	console.log(checkDiagRightDown());
	console.log(checkDiagRightUp());

	});
//6 rows made in array
var board = [ [0, 0, 0, 0, 0, 0, 0],
		      [0, 0, 0, 0, 0, 0, 0],
		      [0, 0, 0, 0, 0, 0, 0],
		      [0, 0, 0, 0, 0, 0, 0],
		      [0, 0, 0, 0, 0, 0, 0],
		      [0, 0, 0, 0, 0, 0, 0]
		];  
//return player 1 or 2 in board
function getCur() {	

if (clickCount % 2 === 1) {
			return 1;
		}
	
	        else {
	        	
	        	return 2;
	        }
}
//start at col 4- down all 4 rows. 1+2+3 to get the remaining 3 cols.
function checkHoriz() {
	var sym = getCur();
	for (var i = 0; i < board.length; i++)  { //rows		
		for (var j = 0; j < board[i].length - 3; j++)  {//columns
			
			if ( (board[i][j] == board[i][j+1]) &&
				 (board[i][j] == board[i][j+2]) &&
				 (board[i][j] == board[i][j+3]) &&
				 (board[i][j] == sym))
					{ showWinner(); playVid(); return true }
				

		}

						
	}
	return false;
}
//start at row 3. across all cols.
function checkVert() {
	var sym = getCur();
	for (var i = 0; i < board.length - 3; i++) {
		for (var j = 0; j < board.length; j++) {
			if ( (board[i][j] == board[i+1][j]) &&
				 (board[i][j] == board[i+2][j]) &&
				 (board[i][j] == board[i+3][j]) &&
				 (board[i][j] == sym))
					{ showWinner(); playVid(); return true }
		}
	}
	return false;
}
//checks from 0-2 row, col 0-3 which connects only dia.
function checkDiagRightDown() {
	var sym = getCur();
	for (var i = 0; i < board.length - 3; i++) {
		for (var j =0; j < board[i].length - 3; j++) {
			if ( (board[i][j] == board[i+1][j+1]) &&
				 (board[i][j] == board[i+2][j+2]) &&
				 (board[i][j] == board[i+3][j+3]) &&
				 (board[i][j] == sym))
					{ showWinner(); playVid(); return true }
		}
	}
	return false
}
//starts from rows 3-5, col 0-3 checks only diag going the opposite way of right down
function checkDiagRightUp() {
	var sym = getCur();
	for (var i = 3; i < board.length; i++) {
		for (var j =0; j < board[i].length - 3; j++) {
			if ( (board[i][j] == board[i-1][j+1]) &&
				 (board[i][j] == board[i-2][j+2]) &&
				 (board[i][j] == board[i-3][j+3]) &&
				 (board[i][j] == sym))
					{ showWinner(); playVid(); return true }
		}
	}
	return false
}

function printBoard() {
for (i = 0; i < board.length; i++) { console.log(board[i]) }
 }	
var colIndex;
var boxIndex;
var clickCount = 0;

//click counter thats drops to the next opening slot. 
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
//checks if their is an opening
function isOpen(elm) {
	var color = $(elm).css('background-color')

	if (color == 'rgb(0, 0, 255)' || color == 'rgb(255, 0, 0)') {
		return false; }
			else {
				return true;
		}
}	
//checks all children of each column if their is a next opening in the col
function getNextOpen(column){
	 var boxes = $(column).children();

	 	boxes.each(function(index,value) {
	 			if (isOpen(value)){
	 			   boxIndex = index;

	 			}
	 	})
}

function hideWinner() {
	$(".hide").hide(); 
}
hideWinner();

function showWinner() {
	$(".hide").show();
}
var vid = document.getElementById("myVideo");
function playVid() { 
    vid.play();
} 
   












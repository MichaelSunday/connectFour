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

var board = [ [0, 0, 0, 0, 0, 0, 0],
		      [0, 0, 0, 0, 0, 0, 0],
		      [0, 0, 0, 0, 0, 0, 0],
		      [0, 0, 0, 0, 0, 0, 0],
		      [0, 0, 0, 0, 0, 0, 0],
		      [0, 0, 0, 0, 0, 0, 0]
		];  

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
					{ showWinner(); playVid(); return true }
				

		}

						
	}
	return false;
}

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

function dropGamePiece(column) {
var boxes = $(column).children();
var curBox = boxes.eq(boxIndex);
	clickCount++;
	// $(this).css("transform", "rotateY(180dec");
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
   












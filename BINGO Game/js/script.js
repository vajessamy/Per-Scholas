
let usedNums = new Array(40);
let usedNumsPlayer2 = new Array(40)
let callNum = new Array(40);
let calledNums = new Array(40)
let callNumTimer

//center buttons, call number and play under the called number table
	document.getElementById('belowTables').style.textAlign = "center";

//Create a new card
	newCard();

function squareClick(bingoNumID) { //squareClick is called from index.html and id is passed to javascript function
	// //check to see if number was called
	// 	markNum = document.getElementById(bingoNumID).innerHTML
	//change the color of the called number on the Bingo Card by changing the classname
		// document.getElementById(bingoNumID).bgColor = '#00FF00'; 
		document.getElementById(bingoNumID).className = 'pickedNum';
		document.getElementById(bingoNumID).style.textAlign = "center";
}

function clearSquare(bingoNumID) { 
	//change the color of the called number on the Bingo Card by changing the classname
		// document.getElementById(bingoNumID).bgColor = '#00FF00'; 
		document.getElementById(bingoNumID).className = 'bingoCardNum';
		document.getElementById(bingoNumID).style.textAlign = "center";
}

function calledBingoNums(numCalled){
	//change the color of the number that was called on the bingo number table
		//console.log('calledBingoNums function NumCalled =' + numCalled)
		if(numCalled != null){
			document.getElementById(numCalled).bgColor = '#00FF00';
		}
}

function numClear(){
		
	//get all of the elements of the pickedNum class (numbers that are on the bingo card)
		const bingoCardNums = document.querySelectorAll('.pickedNum');
		console.log('numClear Function bingoCardNums =' + bingoCardNums)
	//get each element of the class and change the color back and classname back to default
		for(let bingoCardNum of bingoCardNums) {
			document.getElementById(bingoCardNum.id).className = 'bingoCardNum'
			document.getElementById(bingoCardNum.id).bgColor = '#0facaa'
			}
	//get all of the elements of the pickednum2 class (numbers that are on the computer bingo card)
		const bingoCardNums2 = document.querySelectorAll('.pickedNum2');
		console.log('numClear Function bingoCardNums =' + bingoCardNums2)
	//get each element of the class and change the color back and classname back to default
		for(let bingoCardNum2 of bingoCardNums2) {
			document.getElementById(bingoCardNum2.id).className = 'bingoCardNum'
			document.getElementById(bingoCardNum2.id).bgColor = '#0facaa'
		}
	//get all of the elements of the bingoNums class  (all numbers that were called))
		const calledNumstable = document.querySelectorAll('.bingoNums');
		console.log(calledNumstable)
	//get each element of the class and change the color back to default ()
		for(let calledNum of calledNumstable) {
			document.getElementById(calledNum.id).bgColor = 'DodgerBlue'
		}
	//clear all numbers from the calledNums global varable 
		for(var i=1; i<calledNums.length; i++) {
			calledNums[i] = false;
		}	
	//stop the call number timer
	 	clearInterval(callNumTimer)
	 //clear the last displayed number
		 document.getElementById("displayBingoNum").innerHTML = ""
}

function newCard() {
	//Clear color from the numbers of the Bingo Card and call number tables
		numClear();
	//Starting loop through each square on Bingo card
		for(var i=0; i < 24; i++) {  
			setSquare(i);
		}
	//Starting loop through each square on Bingo card
		for(var i=0; i < 24; i++) {  
			setSquarePlayer2(i);
		}
}

function setSquare(squareNumber) {
	var currSquare = "square"+ squareNumber;
	var newNum;
	
	 do {
		newNum = getNewNum(squareNumber)
		console.log(newNum)
	 }
	 while (usedNums[newNum] );

	usedNums[newNum] = currSquare;
	//console.log("currsquare= "+ currSquare)
	document.getElementById(currSquare).innerHTML = newNum;
	}	

function getNewNum(i) {
	//get random number according to B 1-8, I 9-16, N 17-24, G 25-32, O 33-40 
		if (i <= 4){
			return Math.floor(Math.random() * 8) + 1;
			console.log('this is a test ' +i)
		}
		else if (i <= 9){
			return Math.floor(Math.random() * 8) + 9;
			//console.log(`i = ${i} in second if`)
		}
		else if (i <= 13){
			return Math.floor(Math.random() * 8) + 17;
			//console.log(`i = ${i} in third if`)
		}
		else if (i <= 18){
			return Math.floor(Math.random() * 8) + 25;
			//console.log(`i = ${i} in fourth if`)
		}
		else if (i <= 23){
			return Math.floor(Math.random() * 8) + 33;
			console.log('this is a test ' +i)
		}
		else {
			return Math.floor(Math.random() * 40) + 1;
		}
}

function anotherCard() {
	//set squares usedNums global varable to false to resuse for next card
		for(var i=1; i<usedNums.length; i++) {
		usedNums[i] = false;
		usedNumsPlayer2[i] = false;
		}
		newCard();
		return false;
}

function checkWin() {
	clearInterval(callNumTimer)
	var winningOption = -1;
	var setSquares = 0;
	let matchingNumbers = 0
	let winner = false
	//array of the spacenumbers for bingo
	var bingoArray = [
		[0, 1, 2, 3, 4],
		[5, 6, 7, 8, 9],
		[10, 11, 12, 13],
		[14, 15, 16, 17, 18],
		[19, 20, 21, 22, 23],
		[0, 5, 10, 14, 19],
		[1, 6, 11, 15, 20],
		[2, 7, 16, 21],
		[3, 8, 12, 17, 22],
		[4, 9, 13, 18, 23],
		[0, 6, 17, 23],
		[4, 8, 15, 19]
	]
	
	//get the array of arrays of ways to get bingo
		for(let bingoWays of bingoArray){
			matchingNumbers = 0
			//go through the array of ways to get bingo
				for(i = 0; i <= bingoWays.length -1; i++){
					// matchingNumbers = 0
				//get array of elements for the class of pickedNum
					const bingoCardNums = document.querySelectorAll('.pickedNum');
					//matchingNumbers =0
				//get each id of the square on the bingo card
					for(x = 0; x <= bingoCardNums.length-1; x++) {
						//console.log(`bingoWays = ${bingoWays[i]} bingocardnum = ${bingoCardNums[x].id}`)
						//match the id for each square with the number representing the square on bingo card
							if ('square' + bingoWays[i] == bingoCardNums[x].id ){
								matchingNumbers += 1
								console.log(`matchingNumber = ${matchingNumbers} i = ${i} and bingoWays length = ${bingoWays.length-1}`)
								
								if((i  == bingoWays.length-1) && (matchingNumbers == bingoWays.length)){
										console.log(`message 2 matchingNumber = ${matchingNumbers} and bingoWays.length ${bingoWays.length}`)
										document.getElementById("displayBingoNum").innerHTML = "YOU WIN!"
										readOutLoud('winner WINNER CHICKEN DINNER')
										matchingNumbers = 0
										winner = true;
										break;
									//}
									//else {
										//matchingNumbers = 0
										//continue
									//}
								}
							}
					}
			}
		}
		if (winner == false){
			document.getElementById("displayBingoNum").innerHTML = "False BINGO"
			readOutLoud('False BINGO')	
			setCallNumTimer()
		}
	}

function callBingoNumbers(){
	let displayNewNum = ""
	var newBingoNum;
	
	//get  number than check if it has been used.  keep getting numbers until you get a number that is not used
	do {
		newBingoNum = getNewNum(60)
		//console.log('newBingoNum = ' + newBingoNum)
	 }
	while (calledNums[newBingoNum]);

	calledNums[newBingoNum] = true;
	
	//if statement to add B I N G O in front of the number
		if (newBingoNum <= 8){
			displayNewNum = "B" + newBingoNum
		}
		else if (newBingoNum <= 16){
			displayNewNum = "I" + newBingoNum
			// console.log("testing if else")
		}
	  	else if (newBingoNum <= 24){
			displayNewNum = "N" + newBingoNum
		}
		else if (newBingoNum <= 32){
			displayNewNum = "G" + newBingoNum
		}
		else if (newBingoNum <= 40){
			displayNewNum = "O" + newBingoNum
		}
	//set the called number display
		document.getElementById("displayBingoNum").innerHTML = displayNewNum
	//read the call number out loud
		readOutLoud(displayNewNum)
	//function to change the color of the called number
		calledBingoNums(newBingoNum)
	//document.getElementById(newBingoNum).bgColor = '#0facaa'
		markSecondCard(newBingoNum)
}

function readOutLoud(message) {
	var speech = new SpeechSynthesisUtterance();
  
	// Set the text and voice attributes.
		speech.text = message;
		speech.volume = 1;
		speech.rate = 1;
		speech.pitch = 1;
	
		window.speechSynthesis.speak(speech);
  }

function setCallNumTimer(){
	clearInterval(callNumTimer)
	callNumTimer = setInterval(callBingoNumbers, 2000)
	
	//const element = document.getElementById("play");

}
// ***********************Player 2 code************************

function setSquarePlayer2(squareNumber) {
	var currSquare = "player"+ squareNumber;
	var newNum;
	
	 do {
		newNum = getNewNum(squareNumber)
		console.log(newNum)
	 }
	 while (usedNumsPlayer2[newNum]);
	// console.log(currSquare)


	//usedNumsPlayer2[newNum] = true;
	usedNumsPlayer2[newNum] = currSquare;
	console.log("currsquare= "+ currSquare)
	document.getElementById(currSquare).innerHTML = newNum;
}

function markSecondCard(calledNumber){
	var markSquare = usedNumsPlayer2[calledNumber]
	
	if (markSquare != null){
		console.log('marksquare = ' + markSquare)
		// document.getElementById(markSquare).bgColor = '#00FF00'; 
		document.getElementById(markSquare).className = 'pickedNum2';
		checkWin2();
	}
}

function checkWin2() {
	
	var winningOption = -1;
	var setSquares = 0;
	let matchingNumbers = 0
	let winner = false
	//array of the spacenumbers for bingo
		var bingoArray = [
			[0, 1, 2, 3, 4],
			[5, 6, 7, 8, 9],
			[10, 11, 12, 13],
			[14, 15, 16, 17, 18],
			[19, 20, 21, 22, 23],
			[0, 5, 10, 14, 19],
			[1, 6, 11, 15, 20],
			[2, 7, 16, 21],
			[3, 8, 12, 17, 22],
			[4, 9, 13, 18, 23],
			[0, 6, 17, 23],
			[4, 8, 15, 19]
		]
	
	//get the array of arrays of ways to get bingo
		for(let bingoWays of bingoArray){
			matchingNumbers = 0
			//go through the array of ways to get bingo
				for(i = 0; i <= bingoWays.length -1; i++){
					// matchingNumbers = 0
				//get array of elements for the class of pickedNum
					const bingoCardNums = document.querySelectorAll('.pickedNum2');
					//matchingNumbers =0
				//get each id of the square on the bingo card
					for(x = 0; x <= bingoCardNums.length-1; x++) {
						//console.log(`bingoWays = ${bingoWays[i]} bingocardnum = ${bingoCardNums[x].id}`)
						//match the id for each square with the number representing the square in ways
							if ('player' + bingoWays[i] == bingoCardNums[x].id ){
								matchingNumbers += 1
								console.log(`matchingNumber = ${matchingNumbers} i = ${i} and bingoWays length = ${bingoWays.length-1}`)
								
								if((i  == bingoWays.length-1) && (matchingNumbers == bingoWays.length)){
										console.log(`message 2 matchingNumber = ${matchingNumbers} and bingoWays.length ${bingoWays.length}`)
										document.getElementById("displayBingoNum").innerHTML = "BINGO Computer WINS!"
										readOutLoud('BINGO Computer Wins')
										matchingNumbers = 0
										winner = true;
										clearInterval(callNumTimer)
										break;
									}
							}
					}
			}
		}
	}
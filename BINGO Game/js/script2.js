//  let x = 0
//  let tblNumRowID = ""
//  for (let  i = 1;  i < 41;  i++) {
//     if((i == 1) || (i == 9) || (i ==17) || (i == 25) || (i == 33)) {
//       x += 1
//       const tblNumRow = document.createElement('tr')
//       tblNumRow.classname = "bingoNumRow";
//       tblNumRow.id = "tblRow" + x ;
//       tblNumRowID = "tblRow" + x;
//       tblNumRow.style.backgroundColor = "DodgerBlue";
//       document.getElementById("bingoNumTable").appendChild(tblNumRow)
//       console.log(tblNumRow)
//     } 
         
//     const tblNum = document.createElement("td");
//     tblNum.classname = "bingoNums";
//     tblNum.id = i;
//     tblNum.innerText = i;
//     tblNum.style.fontSize = '27px'
//     tblNum.style.paddingLeft = '20px'
//     tblNum.style.paddingtop = "10px"
//     tblNum.style.width = '40px'
//     document.getElementById(tblNumRowID).appendChild(tblNum);
//     console.log(document.getElementById(i))
//  }
//  const td = document.querySelector('td')
//  td.addEventListener('click', (event) => {
//  event.target.style.backgroundColor = 'red'
//  })

let usedNums = new Array(40);
let usedNumsPlayer2 = new Array(40)
let callNum = new Array(40);
let calledNums = new Array(40)
let callNumTimer = ""

document.getElementById('belowTables').style.textAlign = "center";

//Create a new card
newCard();

function btnClick(bingoNumID) { //btnClick on card TD called from index.html passed ID to javascript function
	//change the color of the called number on the Bingo Card by changing the classname
		// document.getElementById(bingoNumID).bgColor = '#00FF00'; 
		document.getElementById(bingoNumID).className = 'pickedNum';
		document.getElementById(bingoNumID).style.textAlign = "center";
}

function calledBingoNums(numCalled){
	//change the color of the number that was called on the bingo number table
		//console.log('calledBingoNums function NumCalled =' + numCalled)
		if (numCalled != null){
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
		const calledNums = document.querySelectorAll('.bingoNums');
		console.log(calledNums)
	//get each element of the class and change the color back to default
		for(let calledNum of calledNums) {
			document.getElementById(calledNum.id).bgColor = 'DodgerBlue'
		}
	 //stop the call number timer
	 	clearInterval(callNumTimer)
	 //clear the last displayed number
		 document.getElementById("displayBingoNum").innerHTML = ""
}

function newCard() {
	//Clear color from the numbers of the Bingo Card and call number tables
		numClear();
	//Starting loop through each square card
		for(var i=0; i < 24; i++) {  //<--always this code for loops. change in red
			setSquare(i);
		}
	//Starting loop through each square card
		for(var i=0; i < 24; i++) {  //<--always this code for loops. change in red
			setSquarePlayer2(i);
		}
}

function setSquare(squareNumber) {
	var currSquare = "square"+ squareNumber;
	var newNum;
	
	do {
		newNum = getNewNum(squareNumber)
		//console.log(newNum)
	}
	while (usedNums[newNum]);
	
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
	for(var i=1; i<usedNums.length; i++) {
	usedNums[i] = false;
	usedNumsPlayer2[i] = false;
	}
	newCard();
}

function checkWin(player) {
	//clearInterval(callNumTimer)
	var winningOption = -1;
	var setSquares = 0;
	let matchingNumbers = 0
	let winner = false
	let bingoArray = [
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
	
	const pickedNums = document.querySelectorAll('.pickedNum');
	//get each element of the class pickedNum user bingo card
		for(let bingoWays of bingoArray){
			for(i = 0; i <= bingoWays.length -1; i++){
				//get all the elements for the pickedNum class
					const bingoCardNums = document.querySelectorAll('.pickedNum');
				//get each element of the class 
					for(x = 0; x <= bingoCardNums.length-1; x++) {
						
						//console.log(`bingoWays = ${bingoWays[i]} bingocardnum = ${bingoCardNums[x].id}`)
						if (player + bingoWays[i] == bingoCardNums[x].id ){
							matchingNumbers += 1
							//console.log(`pickednumberID = ${bingoCardNums[x].id}} and bingoWays = player${bingoWays[i]}`)
						
							if((i == bingoWays.length-1) && ((matchingNumbers == 5) || (matchingNumbers == 4))){
								console.log(`#2 matchingNumber = ${matchingNumbers} and length ${bingoWays.length-1}`)
								if(matchingNumbers == bingoWays.length){
									console.log(matchingNumbers + ' = ' + bingoWays.length)
									if(player == 'square'){
										document.getElementById("displayBingoNum").innerHTML = "WINNER"
										readOutLoud("winner")
									}
									else{
										document.getElementById("displayBingoNum").innerHTML = "Computer Won! You Loss!"
										readOutLoud("Computer Won! You Loss!")
									}
									clearInterval(callNumTimer)
									matchingNumbers = 0
									winner = true;
									break;
								}
								else {
									matchingNumbers = 0
									break;
								}
							}
						}
					}
			}
		}
		
			
	 //get all of the elements of pickedNum2 class (computer card)
		const pickedNums2 = document.querySelectorAll('.pickedNum2');
		for(let pickedNum2 of pickedNums2) {
			console.log('checkWin function pickedNum2 = ' + pickedNum2.id)
		}

//*************************************************************************************************8 */

	// for (var i=0; i<bingoArray.length; i++) {
	// 	for (var x=0; x<bingoArray[i].length; x++){
	// 		While 
				
	// 		}
	// 	}

	// for (var i=0; i<24; i++) {
	// 	var currSquare = "square" + i;
		//  if (document.getElementById(currSquare).className != "") {
		//  	document.getElementById(currSquare).className = "pickedNum";
		//  	setSquares = setSquares | Math.pow(2,i);
		//  }
	// }

	// for (var i=0; i<winners.length; i++) {
	// 	if ((winners[i] & setSquares) == winners[i]) {
	// 		winningOption = i;
	// 	}
	// }
	
	// if (winningOption > -1) {
	// 	for (var i=0; i<24; i++) {
	// 		if (winners[winningOption] & Math.pow(2,i)) {
	// 			currSquare = "square" + i;
	// 			document.getElementById(currSquare).className = "winningBG";
	// 		}
	// 	}
	// }
}

function callBingoNumbers(){
	let displayNewNum = ""
	var newBingoNum;
	
	do {
		newBingoNum = getNewNum(60)
		console.log('newBingoNum = ' + newBingoNum)
	}
	while (calledNums[newBingoNum]);
	
	calledNums[newBingoNum] = true;
	//let newBingoNum = getNewNum(60)
	
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
	//document.getElementById("displayBingoNum").innerHTML = newBingoNum
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
	callNumTimer = setInterval(callBingoNumbers, 6000)
}

// ***********************Player 2 code************************

function setSquarePlayer2(squareNumber) {
	var currSquare = "player"+ squareNumber;
	var newNum;
	
	do {
		newNum = getNewNum(squareNumber)
		//console.log(newNum)
	}
	while (usedNumsPlayer2[newNum]);
	console.log(currSquare)
	
	// usedNumsPlayer2[newNum] = true;
	usedNumsPlayer2[newNum] = currSquare;
	//console.log("currsquare= "+ currSquare)
	document.getElementById(currSquare).innerHTML = newNum;
}

function markSecondCard(calledNumber){
	let markSquare = usedNumsPlayer2[calledNumber]
	
	if (markSquare != null){
		//console.log('marksquare = ' + markSquare)
		// document.getElementById(markSquare).bgColor = '#00FF00'; 
		//set color of marked square by changing the classsname
			document.getElementById(markSquare).className = 'pickedNum2';
			checkWin('player');
	}
}



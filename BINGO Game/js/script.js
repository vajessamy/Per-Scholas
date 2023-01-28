
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


var usedNums = new Array(40);
let usedNumsPlayer2 = new Array(40)
let callNum = new Array(40);
let calledNums = new Array(40)
let callNumTimer = ""

//Create a new card
newCard();

function btnClick(bingoNumID) {
	//change the color of the called number on the Bingo Card
	document.getElementById(bingoNumID).bgColor = '#00FF00'; 
}
function calledBingoNums(NumCalled){
	//change the color of the number that was called on the bingo number table
	document.getElementById(NumCalled).bgColor = '#00FF00';
}

function numClear(){
	//get all of the elements of the bingoCardNum class (numbers that are on the bingo card)
	const bingoCardNums = document.querySelectorAll('.bingoCardNum');
	console.log(bingoCardNums)
	//get each element of the class and change the color back to default
	for(let bingoCardNum of bingoCardNums) {
		document.getElementById(bingoCardNum.id).bgColor = '#0facaa'
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
	
	usedNums[newNum] = true;
	console.log("currsquare= "+ currSquare)
	document.getElementById(currSquare).innerHTML = newNum;
}

function getNewNum(i) {
	//gets a random number starting at 1 going up to 40
	//console.log(i)
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

 function toggleColor(evt) {
 	if (evt) {
		var thisSquare = evt.target;
	}	else {
		var thisSquare = window.event.srcElement;
	}
	if (thisSquare.className == "") {
		thisSquare.className = "pickedBG";
	}	else {
		thisSquare.className = "";
	}
	checkWin();
}

function checkWin() {
	clearInterval(callNumTimer)
	var winningOption = -1;
	var setSquares = 0;
	var winners = new Array(31,992,15360,507904,541729,557328,1083458,2162820,4329736,8519745,8659472,16252928);


	// var bingoArray = [
	// 	[0, 1, 2, 3, 4],
	// 	[5, 6, 7, 8, 9],
	// 	[10, 11, 12, 13],
	// 	[15. 16, 17, 18],
	// 	[20, 21, 22, 23, 24],
	//	[1, 6, 11, 16, 21],
	// 	[2, 7, 12, 17, 22],
	// 	[3, 8, 13, 18, 23],
	// 	[4, 9, 14, 19, 24],
	// 	[0, 5, 10, 15, 20],
	// 	[0, 6, 12, 18, 24],
	// 	[4, 8, 12, 16, 20]
	// ]


	for (var i=0; i<24; i++) {
		var currSquare = "square" + i;
		//  if (document.getElementById(currSquare).className != "") {
		//  	document.getElementById(currSquare).className = "pickedBG";
		//  	setSquares = setSquares | Math.pow(2,i);
		//  }
	}

	for (var i=0; i<winners.length; i++) {
		if ((winners[i] & setSquares) == winners[i]) {
			winningOption = i;
		}
	}
	
	if (winningOption > -1) {
		for (var i=0; i<24; i++) {
			if (winners[winningOption] & Math.pow(2,i)) {
				currSquare = "square" + i;
				document.getElementById(currSquare).className = "winningBG";
			}
		}
	}
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
			console.log("testing if else")
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

	document.getElementById("displayBingoNum").innerHTML = displayNewNum
	//document.getElementById("displayBingoNum").innerHTML = newBingoNum
	//function to change the color of the called number
	calledBingoNums(newBingoNum)
	//document.getElementById(newBingoNum).bgColor = '#0facaa'
	markSecondCard(newBingoNum)

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
	console.log("currsquare= "+ currSquare)
	document.getElementById(currSquare).innerHTML = newNum;
}

function markSecondCard(calledNumber){
	var markSquare = usedNumsPlayer2[calledNumber]
	if (markSquare != null){
		document.getElementById(markSquare).bgColor = '#00FF00'; 
	}
	
}





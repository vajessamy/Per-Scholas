
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

var usedNums = new Array(76);

function newCard() {
	//Starting loop through each square card
	for(var i=0; i < 24; i++) {  //<--always this code for loops. change in red
		setSquare(i);
	}
}

function setSquare(thisSquare) {
	var currSquare = "square"+thisSquare;
	var newNum;
	
	var colPlace =new Array(0,1,2,3,4,0,1,2,3,4,0,1,3,4,0,1,2,3,4,0,1,2,3,4);
	
	do {
		newNum =(colPlace[thisSquare] * 15) + getNewNum() + 1;
	}
	while (usedNums[newNum]);
	
	usedNums[newNum] = true;
	document.getElementById(currSquare).innerHTML = newNum;
}

function getNewNum() {
	return Math.floor(Math.random() * 75);
	
}

function anotherCard() {
	for(var i=1; i<usedNums.length; i++) {
	usedNums[i] = false;
	}
	
	newCard();
}




//window.onload = initAll;

// //creates an array with 40 empty spaces
// var usedNums = new Array(40);
// console.log(usedNums.length)


// //1st function called
// function initAll() {
// 	if (document.getElementById) {
//  		document.getElementById("reload").onclick = anotherCard;
//  		newCard();
// 	}
// 	else {
// 		alert("Sorry, your browser doesn't support this script");
// 	}
// }


// function newCard() {
// 	for (var i=0; i<24; i++) {
// 		setSquare(i);
// 	}
// }


// function setSquare(thisSquare) {
// 	var currSquare = "square" + thisSquare;

//  	var colPlace = new Array(0,0,0,0,0,1,1,1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4);
//  	var colBasis = colPlace[thisSquare] * 15;
//  	var newNum;

// 	do {
// 		newNum = colBasis + getNewNum() + 1;
// 	}


// 	while (usedNums[newNum]);

//     usedNums[newNum] = true;
//     document.getElementById(currSquare).innerHTML = newNum;
//     document.getElementById(currSquare).className = "";
//     document.getElementById(currSquare).onmousedown = toggleColor;
// }


// function getNewNum() {
// 	console.log(Math.floor(Math.random()*40))
//   return Math.floor(Math.random() * 40);
  
// }
// //testing code do not use
// let bingoNum = getNewNum()
// console.log(bingoNum)

// function anotherCard() {
// 	for (var i=1; i<usedNums.length; i++) {
// 		usedNums[i] = false;
// 	}
// 	newCard();
// 	return false;
// }


// function toggleColor(evt) {
// 	if (evt) {
// 		var thisSquare = evt.target;
// 	}	else {
// 		var thisSquare = window.event.srcElement;
// 	}
// 	if (thisSquare.className == "") {
// 		thisSquare.className = "pickedBG";
// 	}	else {
// 		thisSquare.className = "";
// 	}
// 	checkWin();
// }


// function checkWin() {
// 	var winningOption = -1;
// 	var setSquares = 0;
// 	var winners = new Array(31,992,15360,507904,541729,557328,1083458,2162820,4329736,8519745,8659472,16252928);

// 	for (var i=0; i<24; i++) {
// 		var currSquare = "square" + i;
// 		if (document.getElementById(currSquare).className != "") {
// 			document.getElementById(currSquare).className = "pickedBG";
// 			setSquares = setSquares | Math.pow(2,i);
// 		}
// 	}

// 	for (var i=0; i<winners.length; i++) {
// 		if ((winners[i] & setSquares) == winners[i]) {
// 			winningOption = i;
// 		}
// 	}
	
// 	if (winningOption > -1) {
// 		for (var i=0; i<24; i++) {
// 			if (winners[winningOption] & Math.pow(2,i)) {
// 				currSquare = "square" + i;
// 				document.getElementById(currSquare).className = "winningBG";
// 			}
// 		}
// 	}
// };
// Footer
// © 2023 GitHub, Inc.
// Footer navigation
// Terms
// Privacy
// Security




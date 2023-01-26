
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


 function btnClick(btnID) {
		document.getElementById(btnID).bgColor = '#00FF00'; 
 }




//btnClick()

var usedNums = new Array(40);
newCard();

function numClear(){
	//get all of the elements of the bingoCardNum class
	const bingoCardNums = document.querySelectorAll('.bingoCardNum');
	console.log(bingoCardNums)
	//get each element of the class and change the color back to default
	for(let bingoCardNum of bingoCardNums) {
	document.getElementById(bingoCardNum.id).bgColor = '#0facaa'
	}
}

function newCard() {
	//Clear color from the numbers of the Bingo Card and Call Tables
	numClear();

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
		//newNum =(colPlace[thisSquare] * 15) + getNewNum() + 1;
		//newNum =(colPlace[thisSquare] * 1) + getNewNum();
		newNum = getNewNum()
		console.log(newNum)
	}
	while (usedNums[newNum]);
	
	usedNums[newNum] = true;
	document.getElementById(currSquare).innerHTML = newNum;
	//     document.getElementById(currSquare).className = "";
	//     document.getElementById(currSquare).onmousedown = toggleColor;
}

function getNewNum() {
	return Math.floor(Math.random() * 40) + 1;
	
}

function anotherCard() {
	for(var i=1; i<usedNums.length; i++) {
	usedNums[i] = false;
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

//document.getElementById(currSquare).className = "pickedBG";


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




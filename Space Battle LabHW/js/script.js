//get id of elements on the page
const btnAttack = document.getElementById('btnAttack')
const btnReset = document.getElementById("btnReset")
const btnRetreat = document.getElementById("btnRetreat")
const msgBox = document.getElementById("messages")
const inputImage = document.getElementById("imgEarthLing")
const alienShip = document.getElementById("imgAlien")
let i = 1
console.log(msgBox)
msgBox.textContent = "To start the game click ATTACK"


class Ship{
   constructor(name){
      this.name = name
   }

   //create alien ship method
   createAlien( ){
    //create the alien and earthLing objects
   const alien1 = new AlienShip('Alien')
   return alien1
   }

   //create new earthling ship method
   createEarthLing(){
      //create the earthLing objects
      const earthLing = new USSShip('USS Assembly')
      return earthLing
   }

   //attack method called by the attach button
   attack(attacker, target){
    
      
      //Get random number to check aganist accuracy 
      let randomNum = Math.random()   
      if(randomNum < target.accuracy){
          //subtract the attacker firepower from the target hull
          console.log('hull = ' + target.hull + ' - ' + attacker.firepower)
         //subtract the firepower from the hull to get the new hull value
          target.hull = target.hull - attacker.firepower 
         //check the hull of the ships to see if it is less than 0. 
         if ((target.hull <= 0 )){
            //check to see which ship hull is 0 or has been killed.
            if(attacker.name =='USS Assembly') {
               msgBox.textContent = 'You killed an alien! ' + (6 - i) + ' more to go!  ATTACK or RETREAT.'
               console.log('You killed an alien. ')
              
               //increment number of AlienShips hit
               i += 1
               //call the createAlien method
               alien1 = ships.createAlien()
               console.log(`New alien created hull = ${alien1.hull} firepower = ${alien1.firepower}`)
               //enable the retreat button
               btnRetreat.disabled = false
               return
            }
            else {
               msgBox.textContent = 'Sorry you are dead!!  Game over!!  Press RESET to play again.'
               console.log('sorry dead')
               target.Killed = true
               btnAttack.disabled = true
               rotateImg(imgEarthLing, '360deg')
               }
               return
            }
         else
            if(attacker.name == 'USS Assembly'){
               msgBox.textContent = 'You hit the alien!!  Keep fighting!!'
               console.log('Keep fighting')
               return
            }
            else{
               msgBox.textContent = 'You were hit! Hull strength is ' + target.hull 
               console.log('You been hit. hull = ' + target.hull)
               return
            }
         }
      else{
         msgBox.textContent = attacker.name + ' missed a shot!'}
         console.log('Missed shot !')
         return
  }
}
class USSShip extends Ship{
 	constructor(name){
 		super(name)
      this.hull = 20
      this.firepower = 5
      this.accuracy = .7
      this.turn = true
      this.killed = false
    }
 }

 class AlienShip {
   constructor(name){
     this.name = name
     this.hull = Math.floor(Math.random() * 4)+3 //create a random number starting at 3 max 6
     this.firepower = Math.floor(Math.random() * 3)+2  //create a random number starting at 2 max 4
     this.accuracy = Math.floor(Math.random() * .3)+.6 //create a random number starting at .6 max .8
    }
 }

//create main ship object
 const ships = new Ship("allShips")

//create the alien object
let alien1 = ships.createAlien()
console.log(`New alien created hull = ${alien1.hull} firepower = ${alien1.firepower}`)

//create earthLing object from the createEarthling method
let earthLing = ships.createEarthLing()

//Attack button event
 btnAttack.addEventListener('click', (event) => {
      //check to see if the earthling was killed or all of the aliens were killed if so GAME OVER disabled attack button
     if((earthLing.Killed == true) || (i > 6)) {
         console.log('Killed = ' + earthLing.killed + ', i = ' + i)
         msgBox.textContent = "Game Over! Press RESET to play again."
         btnAttack.disabled = true
         
     }
     //if the earthling and aliens are still alive call the attack method
     else{
         if(earthLing.turn == true){
         earthLing.attack(earthLing, alien1)
         earthLing.turn = false
         //bullets()
         }
         else {
         earthLing.attack(alien1, earthLing )
         earthLing.turn = true
          }
      }

   })

 btnReset.addEventListener('click', (event) => {
   //recreate the alien and earthLing objects
   alien1 = ships.createAlien()
   earthLing = ships.createEarthLing()
   btnAttack.disabled = false
   btnRetreat.disabled = true
   i = 1
   msgBox.textContent = "New Game Started. May the force be with you."
   rotateImg(imgEarthLing, '360deg')
 })

 btnRetreat.addEventListener('click', (event) => {
   //create the alien and earthLing objects
   btnRetreat.disabled = true
   msgBox.textContent = "Game Over.   Press RESET to Play again."
   btnAttack.disabled = true
 })

 

 function rotateImg(imageID, degree) {
        document.querySelector(imageID).style.transform = "rotate(degree)";
      }






//  function bullets(){
//  var myGamePiece;

// function startGame() {
//     myGamePiece = new component(3, 10, "red", 225, 225);
//     myGameArea.start();
// }

// var myGameArea = {
//     //canvas : document.createElement("canvas"),
//     canvas : document.getElementById("playArea"),
//     start : function() {
//       //   this.canvas.width = 480;
//       //   this.canvas.height = 270;
//         this.context = this.canvas.getContext("2d");
//         document.body.insertBefore(this.canvas, document.body.childNodes[0]);
//         this.frameNo = 0;
//         this.interval = setInterval(updateGameArea, 20);
//     },
//     stop : function() {
//         clearInterval(this.interval);
//     },    
//     clear : function() {
//         this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
//     }
// }
// console.log("checking to see if its getting here")

//     class component {
//        constructor(width, height, color, x, y, type) {

//           this.type = type
//           this.width = width
//           this.height = height
//           this.speed = 1
//           this.angle = 0
//           this.x = x
//           this.y = y
//           this.update = function () {
//              ctx = myGameArea.context
//              ctx.save()
//              ctx.translate(this.x, this.y)
//              ctx.rotate(this.angle)
//              ctx.fillStyle = color
//              ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height)
//              ctx.restore()
//           }
//           this.newPos = function () {
//              this.x += this.speed * Math.sin(this.angle)
//              this.y -= this.speed * Math.cos(this.angle)
//           }
//        }
//     }

// function updateGameArea() {
//     myGameArea.clear();
//     myGamePiece.newPos();
//     myGamePiece.update();
// }
//  }


// function flipImage() {
    
//    const outputImage = document.createElement("canvas");
//    outputImage.width = inputImage.naturalWidth;
//    outputImage.height = inputImage.naturalHeight;
     
//    const ctx = outputImage.getContext("2d");
 
//    // Flip the image by scaling negatively to the left
//    ctx.scale(-1, 1);
 
//    // Draw the image on the canvas
//    // Starts at [-width, 0] because the flip scaled negatively
//    ctx.drawImage(inputImage, -outputImage.width, 0);
     
//    // Display the output image after the input image in your client
//  inputImage.parentNode.insertBefore(outputImage, inputImage.nextElementSibling);
//  }
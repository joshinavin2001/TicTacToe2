console.log("Welcome To TicTacToe");
let music = new Audio("music.mp3");
let turnAudio = new Audio("ting.mp3");
let GameOver = new Audio("gameover.mp3");
let turn = "X";
let isgameover = false;
//function to create changeTurn //
function changeTurn() {
  return turn == "X" ? "0" : "X";
}
let blankX=document.querySelector(".bl-X")
let blankY=document.querySelector(".bl-Y")
let boxText = document.getElementsByClassName("box_text");
//function to win Game//
const WinGame = () => {
    let info=document.querySelector(".info")
    let image=document.querySelector(".gif img")
   
  
  let winnigCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  winnigCondition.forEach(function (e) {
    if (
      boxText[e[0]].innerText === boxText[e[1]].innerText &&
      boxText[e[2]].innerText === boxText[e[1]].innerText &&
      boxText[e[0]].innerText !== ""
    ) {
      
         info.innerText=boxText[e[0]].innerText+" Won"
         isgameover = true;
         image.style.width="18vw"
         image.style.transition="2s"
        
         if( info.innerText=="X Won"){
            let count=0
            for(let i=0;i<=0;i++){
                count++
                blankX.innerHTML=count///////////////////////////////////////++++++++++++++++++++*********///
            }
         
            
           let boxText=document.getElementsByClassName("box_text")
           Array.from(boxText).forEach(function(element){
            
              element.innerHTML=""
           })
         }else{
            blankY.innerHTML=1
            let boxText=document.getElementsByClassName("box_text")
           Array.from(boxText).forEach(function(element){
            
              element.innerHTML=""
           })
           
         }
    //   document.querySelector(".info").boxText[e[0]].innerHTML = "Won";
    }
  });
};

//Game Logic//
let boxes = document.getElementsByClassName("box");
let info = document.querySelector(".info");
Array.from(boxes).forEach(function (elem) {
  let boxText = elem.querySelector(".box_text");
  elem.addEventListener("click", function () {
    if (boxText.innerHTML === "") {
      boxText.innerHTML = turn;
      turn = changeTurn();
      WinGame();
      if (!isgameover) {
        info.innerHTML = "Turn For " + turn;
      }
    }
  });
});

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
let newgame = document.querySelector(".newGame");
let blankX = document.querySelector(".bl-X");
let won = document.querySelector(".won");
let blankY = document.querySelector(".bl-Y");
let boxText = document.getElementsByClassName("box_text");
//function to win Game//

let image = document.querySelector(".gif img");
const WinGame = () => {
  let info = document.querySelector(".info");

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
      info.innerHTML = boxText[e[0]].innerText + " Won";
      won.innerHTML = info.innerHTML;
      isgameover = true;
      image.style.width = "18vw";
      image.style.transition = "2s";

      boxText[e[0]].style.color = "orange";
      boxText[e[1]].style.color = "orange";
      boxText[e[2]].style.color = "orange";

      updatescore();
    }
  });
};
let scoreX = 0;
let scoreY = 0;
function updatescore() {
  if (info.innerText == "X Won") {
    scoreX++;
    // music.play()
    blankX.innerHTML = scoreX;
    won.innerHTML = "X WON";
    isgameover = false;
    setTimeout(function () {
      let boxText = document.getElementsByClassName("box_text");
      Array.from(boxText).forEach(function (element) {
        setTimeout(function () {
          element.style.color = "black";
        }, 1000);
        element.innerHTML = "";
        won.innerHTML=""
        
        image.style.width = "0vw";
      });
    }, 2000);
  } else {
    isgameover = false;
    scoreY++;
    blankY.innerHTML = scoreY;
    won.innerHTML = "0 WON";
    //  boxText.style.color="red"
    setTimeout(function () {
      let boxText = document.getElementsByClassName("box_text");
      Array.from(boxText).forEach(function (element) {
        element.innerHTML = "";
        won.innerHTML ="";
       
        element.style.color = "black";
        image.style.width = "0vw";
      });
    }, 1000);
  }
  info.innerHTML = "Turn For " + turn;
}

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
      turnAudio.play()
      // checkTie()
      if (!isgameover) {
        info.innerHTML = "Turn For " + turn;
      } else if (elem.innerHTML !== "") {
        won.innerHTML = "won";
      }
    }
  });
});

//reset//

let btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  let boxText = document.getElementsByClassName("box_text");
  Array.from(boxText).forEach(function (element) {
    element.innerHTML = "";
    image.style.width = "0vw";
    won.innerHTML=""
  });
});

//newgame button//
newgame.addEventListener("click", function () {
  window.location.reload();
  image.style.display= "none";
});

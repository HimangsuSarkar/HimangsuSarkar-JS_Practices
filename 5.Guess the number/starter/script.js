'use strict';

// const hideNumber = Math.trunc( Math.random()*20)+1;
//  document.querySelector(".number").textContent = hideNumber;

// let score = 20;

// document.querySelector(".check").addEventListener("click", function () {
//   const inputNumber = Number(document.querySelector(".guess").value);

//   console.log(inputNumber);
//   if (!inputNumber) {
//     document.querySelector(".message").textContent = "💥Not a number";
//   } else if (inputNumber === hideNumber) {
//     document.querySelector(".message").textContent = "Correct Number";
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width="30rem"
//   }else if (inputNumber > hideNumber) {
    
//     if (score >1) {
//       document.querySelector(".message").textContent = "Too high";
//       score--;
//       document.querySelector(".score").textContent = score;
      
//     }else {
//       document.querySelector(".message").textContent = "loose the game";
//       document.querySelector(".score").textContent = 0;
//   }
  
//   } else if (inputNumber<hideNumber) {
//      if (score >1) {
//       document.querySelector(".message").textContent = "Too Low";
//       score--;
//       document.querySelector(".score").textContent = score;
      
//     }else {
//       document.querySelector(".message").textContent = "loose the game";
//       document.querySelector(".score").textContent = 0;
//   }
//   } 

// })

const secretNumber = Math.trunc(Math.random() * 20) + 1;


let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function () {
  const guess =Number( document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  if (!guess) {
    // document.querySelector(".message").textContent = "⛔No Number";
    displayMessage("⛔No Number");
  } else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "Correct Number";
    displayMessage("Correct Number");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem"
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

  } else if (guess !== secretNumber) {
    // document.querySelector(".message").textContent = guess>secretNumber? "Too High":"Too Low";
    displayMessage(guess > secretNumber ? "Too High" : "Too Low");

    if (score > 1) {
      score--;
    document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent = "lose the game";
      displayMessage("lose the game");
      document.querySelector(".score").textContent = 0;
    }

//   }else if (guess > secretNumber) {
//     document.querySelector(".message").textContent = "Too High";

//     if (score > 1) {
//       score--;
//     document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "lose the game";
//       document.querySelector(".score").textContent = 0;
//     }
     
//   } else if (guess < secretNumber) {
//     document.querySelector(".message").textContent = "Too Low";
  
//     if (score > 1) {
//       score--;
//     document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "lose the game";
//       document.querySelector(".score").textContent = 0;
//     }
  
   }
 }
);

document.querySelector(".again").addEventListener("click", function () {
  console.log("click")
  document.querySelector(".number").textContent = "";
  document.querySelector(".score").textContent = 20;
  // document.querySelector(".message").textContent = "Start guessing..."
  displayMessage("Start guessing...");
  
document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem"
  
  document.querySelector(".number").textContent="?"
  document.querySelector(".guess").value = "";
})



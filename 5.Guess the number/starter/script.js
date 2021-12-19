'use strict';

const hideNumber = Math.trunc( Math.random()*20)+1;
 document.querySelector(".number").textContent = hideNumber;

let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const inputNumber = Number(document.querySelector(".guess").value);

  console.log(inputNumber);
  if (!inputNumber) {
    document.querySelector(".message").textContent = "💥Not a number";
  } else if (inputNumber === hideNumber) {
    document.querySelector(".message").textContent = "Correct Number";
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width="30rem"
  }else if (inputNumber > hideNumber) {
    
    if (score >1) {
      document.querySelector(".message").textContent = "Too high";
      score--;
      document.querySelector(".score").textContent = score;
      
    }else {
      document.querySelector(".message").textContent = "loose the game";
      document.querySelector(".score").textContent = 0;
  }
  
  } else if (inputNumber<hideNumber) {
     if (score >1) {
      document.querySelector(".message").textContent = "Too Low";
      score--;
      document.querySelector(".score").textContent = score;
      
    }else {
      document.querySelector(".message").textContent = "loose the game";
      document.querySelector(".score").textContent = 0;
  }
  } 

})



let rock = document.querySelector(".rock"); //ROCK
let paper = document.querySelector(".paper"); //PAPER
let scissor = document.querySelector(".scissor"); //scissor
let userchoice = document.getElementById("userchoice"); //user's choice
let compchoice = document.getElementById("compchoice");
let playerscore = document.querySelector(".playerscore");  //Player's score
let computerscore = document.querySelector(".computerscore"); //Computer's score
let or = document.getElementById("overallresult");  //Total results
let count = 0;
let count1 = 0;

//rock button logic
rock.addEventListener("click", (e) => {
  e.preventDefault();
  let choice = ["rock", "paper", "scissor"];
  let mychoice = Math.floor(Math.random() * choice.length);
  let resultz = choice[mychoice];
  userchoice.innerText = "ROCK";
  compchoice.innerHTML = resultz;
  if (compchoice.innerHTML === "rock" && userchoice.innerHTML === "ROCK") {
    or.innerText = "Draw!!!";
    or.style.color = "yellow";
  } else if (
    compchoice.innerHTML == "paper" &&
    userchoice.innerHTML === "ROCK"
  ) {
    or.innerText = "You Loose!!!";
    or.style.color = "RED";
    count1 = count1 + 1;
    computerscore.innerText = count1;
  } else {
    or.innerText = "You Won!!!";
    or.style.color = "green";
    count = count + 1;
    playerscore.innerText = count;
  }
});

//LOGIC FOR PAPER

paper.addEventListener("click", (e) => {
  e.preventDefault();
  let choice = ["rock", "paper", "scissor"];
  let mychoice = Math.floor(Math.random() * choice.length);
  let resultz = choice[mychoice];
  userchoice.innerText = "Paper";
  compchoice.innerHTML = resultz;

  if (compchoice.innerHTML === "rock" && userchoice.innerHTML === "Paper") {
    or.innerText = "You Won!!!";
    or.style.color = "green";
    count = count + 1;
    playerscore.innerText = count;
  } else if (compchoice.innerHTML == "paper" && userchoice.innerHTML === "Paper") {
    or.style.color = "yellow";
    or.innerText = "Draw!!!";
  } else {
    or.innerText = "You Loose!!!";
    or.style.color = "RED";
    count1 = count1 + 1;
    computerscore.innerText = count1;
  }
});
//  scissor
scissor.addEventListener("click", (e) => {
  e.preventDefault();
  let choice = ["rock", "paper", "scissor"];
  let mychoice = Math.floor(Math.random() * choice.length);
  let resultz = choice[mychoice];
  userchoice.innerText = "scissor";
  compchoice.innerHTML = resultz;

  if (compchoice.innerHTML === "rock" && userchoice.innerHTML === "scissor") {
    or.innerText = "You Loose!!!";
    or.style.color = "RED";
    count1 = count1 + 1;
    computerscore.innerText = count1;
  } else if (
    compchoice.innerHTML == "paper" &&
    userchoice.innerHTML === "scissor"
  ) {
    or.innerText = "You Won!!!";
    or.style.color = "green";
    count = count + 1;
    playerscore.innerText = count;
  } else {
    or.style.color = "yellow";
  }
});

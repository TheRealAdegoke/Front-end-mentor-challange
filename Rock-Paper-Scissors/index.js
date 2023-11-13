const openRules = document.getElementById("open-rules")
const closeRules = document.getElementById("close-rules")
const ruleModal = document.querySelector(".rule-book")
const characters = document.querySelector(".game-piece")
const piece = document.querySelector(".chosen-piece")
const rock = document.querySelector(".rock-container")
const paper = document.querySelector(".paper-container")
const scissors = document.querySelector(".scissors-container")
const lizard = document.querySelector(".lizard-container")
const spock = document.querySelector(".spock-container")
const restartGame = document.querySelector(".restart")
const humanMove = document.getElementById("human-move");
const computerMoveImg = document.getElementById("computer-move");


openRules.addEventListener("click", function() {
  ruleModal.classList.remove("hidden")
})

closeRules.addEventListener("click", function() {
  ruleModal.classList.add("hidden")
})

function getHumanMove(imagepath) {
  const displayedMoveImg = humanMove
  displayedMoveImg.src = imagepath
}


function getComputerMove() {
  const computerMoves = [
  "./images/icon-scissors.svg",
  "./images/icon-paper.svg",
  "./images/icon-rock.svg",
  "./images/icon-lizard.svg",
  "./images/icon-spock.svg"
]
  const randomIndex = Math.floor(Math.random() * computerMoves.length)
  const randomChoice = computerMoves[randomIndex]
  computerMoveImg.src = randomChoice;
  console.log("Computer selected: ", randomChoice)
}

restartGame.addEventListener("click", function() {
  characters.classList.remove("hidden")
  piece.classList.add("hidden")
  console.log("Game Restarted");
})

rock.addEventListener("click", function () {
  characters.classList.add("hidden");
  piece.classList.remove("hidden");
  getHumanMove("./images/icon-rock.svg")
  getComputerMove()
  console.log("rock");
});

paper.addEventListener("click", function () {
  characters.classList.add("hidden");
  piece.classList.remove("hidden");
  getHumanMove("./images/icon-paper.svg")
  getComputerMove()
  console.log("paper");
});

scissors.addEventListener("click", function() {
  characters.classList.add("hidden")
  piece.classList.remove("hidden")
  getHumanMove("./images/icon-scissors.svg")
  getComputerMove()
  console.log("scissors");
})

lizard.addEventListener("click", function() {
  characters.classList.add("hidden")
  piece.classList.remove("hidden")
  getHumanMove("./images/icon-lizard.svg")
  getComputerMove()
  console.log("lizard");
})

spock.addEventListener("click", function() {
  characters.classList.add("hidden")
  piece.classList.remove("hidden")
  getHumanMove("./images/icon-spock.svg")
  getComputerMove()
  console.log("spock");
})
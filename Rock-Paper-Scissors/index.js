const openRules = document.getElementById("open-rules");
const closeRules = document.getElementById("close-rules");
const ruleModal = document.querySelector(".rule-book");
const characters = document.querySelector(".game-piece");
const piece = document.querySelector(".chosen-piece");
const rock = document.querySelector(".rock-container");
const paper = document.querySelector(".paper-container");
const scissors = document.querySelector(".scissors-container");
const lizard = document.querySelector(".lizard-container");
const spock = document.querySelector(".spock-container");
const restartGame = document.querySelector(".restart");
const humanMove = document.getElementById("human-move");
const humanPicked = document.getElementById("human-picked");
const computerPicked = document.getElementById("computer-picked");
const computerMove = document.getElementById("computer-move");
const message = document.getElementById("message");
const score = document.getElementById("score");

let playerScore = 0;

openRules.addEventListener("click", function () {
  ruleModal.classList.remove("hidden");
});

closeRules.addEventListener("click", function () {
  ruleModal.classList.add("hidden");
});

function getHumanMove(imagepath) {
  const displayedMoveImg = humanMove;
  displayedMoveImg.src = imagepath;
}

function changeColor(color) {
  humanPicked.classList.add(color);
}

function changeStyle(styles) {
  // Ensure styles is an array
  if (!Array.isArray(styles)) {
    console.error("Styles must be an array");
    return;
  }

  // Add each style to the element
  styles.forEach((style) => {
    humanMove.classList.add(style);
  });
}

function removeStyle(styles) {
  // Ensure styles is an array
  if (!Array.isArray(styles)) {
    console.error("Styles must be an array");
    return;
  }

  // Add each style to the element
  styles.forEach((style) => {
    humanMove.classList.remove(style);
  });
}

function changeComputerColor(color) {
  computerPicked.classList.add(color);
}

function getComputerMove() {
  const computerMoves = [
    "./images/icon-scissors.svg",
    "./images/icon-paper.svg",
    "./images/icon-rock.svg",
    "./images/icon-lizard.svg",
    "./images/icon-spock.svg",
  ];

  const randomIndex = Math.floor(Math.random() * computerMoves.length);
  const randomChoice = computerMoves[randomIndex];
  computerMove.src = randomChoice;
  if (randomChoice === "./images/icon-rock.svg") {
    changeComputerColor("rock-container");
  } else if (randomChoice === "./images/icon-paper.svg") {
    changeComputerColor("paper-container");
  } else if (randomChoice === "./images/icon-scissors.svg") {
    changeComputerColor("scissors-container");
  } else if (randomChoice === "./images/icon-lizard.svg") {
    changeComputerColor("lizard-container");
  } else if (randomChoice === "./images/icon-spock.svg") {
    changeComputerColor("spock-container");
  }

  return randomChoice;
}

function determineResult(humanMove, computerMove) {
  if (humanMove === computerMove) {
    console.log("It's a tie!");
    return (message.innerHTML = "It's a tie");
  } else if (
    (humanMove === "./images/icon-scissors.svg" &&
      computerMove === "./images/icon-paper.svg") ||
    (humanMove === "./images/icon-scissors.svg" &&
      computerMove === "./images/icon-lizard.svg") ||
    (humanMove === "./images/icon-paper.svg" &&
      computerMove === "./images/icon-rock.svg") ||
    (humanMove === "./images/icon-paper.svg" &&
      computerMove === "./images/icon-spock.svg") ||
    (humanMove === "./images/icon-rock.svg" &&
      computerMove === "./images/icon-lizard.svg") ||
    (humanMove === "./images/icon-rock.svg" &&
      computerMove === "./images/icon-scissors.svg") ||
    (humanMove === "./images/icon-lizard.svg" &&
      computerMove === "./images/icon-paper.svg") ||
    (humanMove === "./images/icon-lizard.svg" &&
      computerMove === "./images/icon-spock.svg") ||
    (humanMove === "./images/icon-spock.svg" &&
      computerMove === "./images/icon-scissors.svg") ||
    (humanMove === "./images/icon-spock.svg" &&
      computerMove === "./images/icon-rock.svg")
  ) {
    console.log("You win", playerScore);
    playerScore++;

    return (score.innerHTML = playerScore), (message.innerHTML = "You Win");
  } else {
    console.log("Computer win");
    playerScore--;
    return (score.innerHTML = playerScore), (message.innerHTML = "You Lose");
  }
}

restartGame.addEventListener("click", function () {
  characters.classList.remove("hidden");
  piece.classList.add("hidden");
  removeStyle([
    "py-[12px]",
    "px-[12px]",
    "px-[14px]",
    "py-[11px]",
    "py-[14px]",
    "py-[10px]",
  ]);
  humanPicked.classList.remove(
    "spock-container",
    "rock-container",
    "lizard-container",
    "scissors-container",
    "paper-container"
  );
  computerPicked.classList.remove(
    "spock-container",
    "rock-container",
    "lizard-container",
    "scissors-container",
    "paper-container"
  );
});

rock.addEventListener("click", function () {
  characters.classList.add("hidden");
  piece.classList.remove("hidden");
  changeColor("rock-container");
  changeStyle(["py-[12px]", "px-[12px]"]);
  const humanMove = "./images/icon-rock.svg";
  const computerMove = getComputerMove();
  getHumanMove(humanMove);
  determineResult(humanMove, computerMove);
});

paper.addEventListener("click", function () {
  characters.classList.add("hidden");
  piece.classList.remove("hidden");
  changeColor("paper-container");
  changeStyle(["py-[11px]", "px-[14px]"]);
  const humanMove = "./images/icon-paper.svg";
  const computerMove = getComputerMove();
  getHumanMove(humanMove);
  determineResult(humanMove, computerMove);
});

scissors.addEventListener("click", function () {
  characters.classList.add("hidden");
  piece.classList.remove("hidden");
  changeColor("scissors-container");
  changeStyle(["py-[12px]", "px-[14px]"]);
  const humanMove = "./images/icon-scissors.svg";
  const computerMove = getComputerMove();
  getHumanMove(humanMove);
  determineResult(humanMove, computerMove);
});

lizard.addEventListener("click", function () {
  characters.classList.add("hidden");
  piece.classList.remove("hidden");
  changeColor("lizard-container");
  changeStyle(["py-[14px]", "px-[14px]"]);
  const humanMove = "./images/icon-lizard.svg";
  const computerMove = getComputerMove();
  getHumanMove(humanMove);
  determineResult(humanMove, computerMove);
});

spock.addEventListener("click", function () {
  characters.classList.add("hidden");
  piece.classList.remove("hidden");
  changeColor("spock-container");
  changeStyle(["py-[10px]", "px-[14px]"]);
  const humanMove = "./images/icon-spock.svg";
  const computerMove = getComputerMove();
  getHumanMove(humanMove);
  determineResult(humanMove, computerMove);
});

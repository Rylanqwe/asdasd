const flipButton = document.getElementById("flip-button");
const result = document.getElementById("result");
const resultMessage = document.getElementById("result-message");
const headsBet = document.getElementById("heads-bet");
const tailsBet = document.getElementById("tails-bet");

flipButton.addEventListener("click", () => {
  const flip = Math.round(Math.random());
  if (flip === 0) {
    result.innerHTML = "Heads";
  } else {
    result.innerHTML = "Tails";
  }

  if (headsBet.checked && result.innerHTML === "Heads") {
    resultMessage.innerHTML = "You win!";
  } else if (tailsBet.checked && result.innerHTML === "Tails") {
    resultMessage.innerHTML = "You win!";
  } else {
    resultMessage.innerHTML = "You lose.";
  }
});

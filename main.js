const flipButton = document.getElementById("flip-button");
const result = document.getElementById("result");
const resultMessage = document.getElementById("result-message");
const betAmountResult = document.getElementById("bet-amount-result");
const headsBet = document.getElementById("heads-bet");
const tailsBet = document.getElementById("tails-bet");
const betAmount = document.getElementById("bet-amount");
let currentBetAmount = 0;

flipButton.addEventListener("click", () => {
  const flip = Math.round(Math.random());
  if (flip === 0) {
    result.innerHTML = "Heads";
  } else {
    result.innerHTML = "Tails";
  }

  if (headsBet.checked && result.innerHTML === "Heads") {
    resultMessage.innerHTML = "You win!";
    currentBetAmount = betAmount.value * 2;
    betAmountResult.innerHTML = `You won ${currentBetAmount}`;
  } else if (tailsBet.checked && result.innerHTML === "Tails") {
    resultMessage.innerHTML = "You win!";
    currentBetAmount = betAmount.value * 2;
    betAmountResult.innerHTML = `You won ${currentBetAmount}`;
  } else {
    resultMessage.innerHTML = "You lose.";
    currentBetAmount = 0;
    betAmountResult.innerHTML = `You lost ${betAmount.value}`;
  }
  const solana = await Solana.new('https://testnet.solana.com');const recipientPublicKey = '<recipient-public-key>';
const senderPrivateKey = '<sender-private-key>';
const amount = 1000000;

const result = await solana.sendTransaction(recipientPublicKey, senderPrivateKey, amount);
  const publicKey = '<public-key>';
const balance = await solana.getBalance(publicKey);
console.log(balance);
  const transactionId = '<transaction-id>';
const transaction = await solana.getTransaction(transactionId);
console.log(transaction);
});

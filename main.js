const flipButton = document.getElementById("flip-button");
const result = document.getElementById("result");
const resultMessage = document.getElementById("result-message");
const betAmountResult = document.getElementById("bet-amount-result");
const headsBet = document.getElementById("heads-bet");
const tailsBet = document.getElementById("tails-bet");
const betAmount = document.getElementById("bet-amount");
let currentBetAmount = 0;
const connectButton = document.getElementById("connect-button");
let publicKey;

(async () => {
  const solana = await Solana.new('https://testnet.solana.com');
  const phantom = await Phantom.new('https://testnet.phantom.us');

  flipButton.addEventListener("click", async () => {
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
      const transaction = {
        amount: currentBetAmount,
        recipient: publicKey,
      };
      const signature = await phantom.signTransaction(transaction);
      await solana.sendTransaction(transaction, signature);
    } else if (tailsBet.checked && result.innerHTML === "Tails") {
      resultMessage.innerHTML = "You win!";
      currentBetAmount = betAmount.value * 2;
      betAmountResult.innerHTML = `You won ${currentBetAmount}`;
      const transaction = {
        amount: currentBetAmount,
        recipient: publicKey,
      };
      const signature = await phantom.signTransaction(transaction);
      await solana.sendTransaction(transaction, signature);
    } else {
      resultMessage.innerHTML = "You lose.";
      currentBetAmount = 0;
      betAmountResult.innerHTML = `You lost ${betAmount.value}`;
      const transaction = {
        amount: betAmount.value,
        recipient: '<recipient-public-key>',
      };
      const signature = await phantom.signTransaction(transaction);
      await solana.sendTransaction(transaction, signature);
    }
  });

  connectButton.add

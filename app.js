const Web3 = require('solana-web3');
const web3 = new Web3();

const flipBtn = document.querySelector('.flip-btn');
const result = document.querySelector('.result');
const connectBtn = document.querySelector('.connect-btn');

flipBtn.addEventListener('click', () => {
  const num = Math.floor(Math.random() * 2) + 1;
  if (num === 1) {
    result.textContent = 'Heads';
  } else {
    result.textContent = 'Tails';
  }
});

connectBtn.addEventListener('click', () => {
  web3.connection.connect().then(() => {
    console.log('Connected to phantom wallet');
  });
});

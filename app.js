function flip() {
  var result = Math.floor(Math.random() * 2 + 1);
  if (result === 1) {
    document.getElementById("result").innerHTML = "Heads";
  } else {
    document.getElementById("result").innerHTML = "Tails";
  }
}

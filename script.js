// Get elements
const envelopeContainer = document.getElementById("envelope-container");
const letterContainer = document.getElementById("letter-container");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

const title = document.getElementById("letter-title");
const cat = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");
const music = document.getElementById("loveMusic");

// Hide letter at start
letterContainer.style.display = "none";

// Open letter
envelopeContainer.addEventListener("click", () => {
  envelopeContainer.style.display = "none";
  letterContainer.style.display = "flex";
});

// Move NO button randomly
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 300 - 150;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// YES button clicked
yesBtn.addEventListener("click", () => {
  title.textContent = "Yippeeee! ❤️";
  cat.src = "cat_dance.gif";

  buttons.style.display = "none";
  finalText.style.display = "block";

  music.play();
});

// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");
const music = document.getElementById("loveMusic");

// Open Letter
envelope.addEventListener("click", () => {
  envelope.style.display = "none";
  letter.style.display = "flex";
});

// Move NO button
noBtn.addEventListener("mouseover", () => {
  const distance = 200;
  const angle = Math.random() * Math.PI * 2;

  const moveX = Math.cos(angle) * distance;
  const moveY = Math.sin(angle) * distance;

  noBtn.style.transition = "transform 0.3s ease";
  noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// YES Click
yesBtn.addEventListener("click", () => {

  title.textContent = "Yippeeee! ❤️";
  catImg.src = "cat_dance.gif";

  buttons.style.display = "none";
  finalText.style.display = "block";

  // 🎵 Play music
  music.play();
});

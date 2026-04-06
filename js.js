const text = "TRIYOGA PRASETYA";
let i = 0;

function typingEffect() {
  if (i < text.length) {
    document.querySelector(".header h1").innerHTML += text.charAt(i);
    i++;
    setTimeout(typingEffect, 100);
  }
}

document.querySelector(".header h1").innerHTML = "";
typingEffect();

function toggleMode() {
  document.body.classList.toggle("dark");
}

function updateClock() {
  const now = new Date();
  document.getElementById("clock").innerHTML =
    now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
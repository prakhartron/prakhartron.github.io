const surpriseBtn = document.getElementById("surpriseBtn");
const celebrationLayer = document.getElementById("celebration-layer");
const surpriseMessage = document.getElementById("surprise-message");

surpriseBtn.addEventListener("click", function () {
  setTimeout(() => {
    startCelebration();
  }, 300);
});

function startCelebration() {
  showSurpriseMessage();

  const emojis = ["🎉", "🎊", "❤️", "💕", "🌸", "🌺", "💖", "✨"];

  let count = 0;
  const maxItems = 120;

  const interval = setInterval(() => {
    createCelebrationItem(emojis[Math.floor(Math.random() * emojis.length)]);
    count++;

    if (count >= maxItems) {
      clearInterval(interval);
    }
  }, 90);
}

function createCelebrationItem(symbol) {
  const item = document.createElement("div");
  item.className = "celebration-item";
  item.textContent = symbol;

  item.style.left = Math.random() * 100 + "vw";
  item.style.fontSize = 18 + Math.random() * 20 + "px";
  item.style.animationDuration = 3 + Math.random() * 3 + "s";
  item.style.transform = `rotate(${Math.random() * 360}deg)`;

  celebrationLayer.appendChild(item);

  setTimeout(() => {
    item.remove();
  }, 7000);
}

function showSurpriseMessage() {
  surpriseMessage.classList.add("show");

  setTimeout(() => {
    surpriseMessage.classList.remove("show");
  }, 2500);
}

// Trigger celebration when birthday section comes into view
const birthdaySection = document.getElementById("birthday");

let hasTriggeredOnScroll = false;

window.addEventListener("scroll", () => {
  const rect = birthdaySection.getBoundingClientRect();

  if (rect.top < window.innerHeight * 0.6 && rect.bottom > 0) {
    if (!hasTriggeredOnScroll) {
      startCelebration();
      hasTriggeredOnScroll = true;
    }
  } else {
    hasTriggeredOnScroll = false; // reset when out of view
  }
});

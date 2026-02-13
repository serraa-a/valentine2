// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");
const hoohBtn = document.querySelector(".hooh-btn");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");
const nextContainer = document.getElementById("next-container");
const yappingContainer = document.getElementById("yapping-container");

// Klik Envelope → buka Letter
envelope.addEventListener("click", () => {
  envelope.style.display = "none";
  letter.style.display = "flex";
  setTimeout(() => {
    document.querySelector(".letter-window").classList.add("open");
  }, 50);
});

// NO button kabur
noBtn.addEventListener("mouseover", () => {
  const distance = 200;
  const angle = Math.random() * Math.PI * 2;
  const moveX = Math.cos(angle) * distance;
  const moveY = Math.sin(angle) * distance;
  noBtn.style.transition = "transform 0.3s ease";
  noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// YES button → ubah tampilan + munculkan Next
yesBtn.addEventListener("click", () => {
  title.textContent = "Yippeeee!";
  catImg.src = "yippie.gif"; // pastikan file ada
  document.querySelector(".letter-window").classList.add("final");

  buttons.style.display = "none";
  finalText.style.display = "block";
  nextContainer.style.display = "block"; // tombol "here!!" muncul
});

// Next button (hooh-btn) → buka Yapping
hoohBtn.addEventListener("click", () => {
  nextContainer.style.display = "none";
  yappingContainer.style.display = "block"; // tampilkan halaman selanjutnya
});

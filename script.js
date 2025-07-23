// Typing animation
const text = "🚀 Executive Virtual Assistant | Customer Service & Admin Support 🚀";
const typingElement = document.querySelector(".typing-text");
let idx = 0;

function typeEffect() {
  if (idx < text.length) {
    typingElement.innerHTML += text.charAt(idx);
    idx++;
    setTimeout(typeEffect, 50);
  }
}
typingElement.innerHTML = "";
typeEffect();

// Smooth scroll
document.querySelectorAll(".scroll-link").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Toggle dark mode
document.getElementById("toggle-dark").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Contact form
document.getElementById("contact-form").addEventListener("submit", e => {
  e.preventDefault();
  document.getElementById("thank-you-modal").classList.remove("hidden");
  e.target.reset();
});

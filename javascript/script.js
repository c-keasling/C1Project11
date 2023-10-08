const body = document.querySelector("body");
const modeToggle = document.getElementById("mode-toggle");
const modeStatus = document.querySelector(".mode-status");

function toggleMode() {
  body.classList.toggle("dark-mode");
}
modeToggle.addEventListener("click", toggleMode);

document.addEventListener("DOMContentLoaded", (event) => {
  const sections = document.querySelectorAll(".Career, .Projects");
  const options = {
    threshold: 0.1,
  };

  function addSlideIn(entries) {
    entries.forEach((entry) => {
      console.log("Observing:", entry.target);
      if (entry.isIntersecting) {
        console.log("Element sliding in:", entry.target);
        entry.target.classList.add("slide-in");
      }
    });
  }

  const observer = new IntersectionObserver(addSlideIn, options);
  sections.forEach((section) => {
    observer.observe(section);
  });

  document.querySelector(".landing").classList.add("slide-in");
});

const contact = document.getElementById("contact");
const closeBtn = document.querySelector(".close-modal");

contact.addEventListener("click", function () {
  document.querySelector(".modal").classList.toggle("hidden");
});

closeBtn.addEventListener("click", function () {
  document.querySelector(".modal").classList.add("hidden");
});

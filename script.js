
// For intro ito
document.getElementById("unlock-btn").addEventListener("click", () => {
  const intro = document.getElementById("intro");
  intro.style.opacity = "0";
  intro.style.transition = "opacity 1s ease";

  setTimeout(() => {
    intro.style.display = "none";
    document.body.style.overflow = "auto"; 
  }, 1000);
});

//For navigation bar
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu .link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

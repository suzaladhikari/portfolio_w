// Reveal sections on scroll
const revealEls = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
  }
);

revealEls.forEach((el) => observer.observe(el));


// Blog dropdown
function toggleSummary(button) {
  const card = button.closest(".blog-card");
  const summary = card.querySelector(".blog-summary");

  summary.classList.toggle("open");
  button.classList.toggle("open");
}
const menu = document.getElementById('mobileMenu');
const toggleBtn = document.getElementById('menuToggle');

// Toggle menu visibility
toggleBtn.addEventListener('click', function (e) {
  e.stopPropagation(); // Prevent click from bubbling to document
  menu.classList.toggle('translate-x-full');
});

// Close menu when clicking outside
document.addEventListener('click', function (e) {
  if (
    !menu.contains(e.target) && 
    !toggleBtn.contains(e.target) &&
    !menu.classList.contains('translate-x-full')
  ) {
    menu.classList.add('translate-x-full');
  }
});

// Contact form validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const phone = this.phone.value.trim();
  const message = this.message.value.trim();

  if (!name || !email || !phone || !message) {
    alert('Please fill all fields before submitting.');
    e.preventDefault();
  }
});














// script.js
document.addEventListener("DOMContentLoaded", () => {
  const left = document.getElementById("revealLeft");
  const right = document.getElementById("revealRight");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        left.classList.remove("opacity-0", "-translate-x-24");
        left.classList.add("opacity-100", "translate-x-0");

        right.classList.remove("opacity-0", "translate-x-24");
        right.classList.add("opacity-100", "translate-x-0");
      }
    });
  }, { threshold: 0.3 });

  observer.observe(document.querySelector('.reveal-container'));
});

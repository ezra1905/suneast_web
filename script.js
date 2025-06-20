const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navActions = document.querySelector(".nav-actions");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  navActions.classList.toggle("show");
});

const sections = document.querySelectorAll('.home-section, .services-section');
const navItems = document.querySelectorAll(".nav-item");

  const showSection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target); // hanya muncul sekali
      }
    });
  };

  const observer = new IntersectionObserver(showSection, {
    threshold: 0.1
  });

  sections.forEach(section => {
    observer.observe(section);
  });

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach(item => {
    item.classList.remove("active");
    if (item.getAttribute("href") === `#${current}`) {
      item.classList.add("active");
    }
  });
});

    // Animasi saat muncul di viewport
 
   const carousel = document.querySelector('.products-carousel');
  const btnLeft = document.querySelector('.carousel-btn.left');
  const btnRight = document.querySelector('.carousel-btn.right');

  btnLeft.addEventListener('click', () => {
    carousel.scrollBy({ left: -250, behavior: 'smooth' });
  });

  btnRight.addEventListener('click', () => {
    carousel.scrollBy({ left: 250, behavior: 'smooth' });
  });
 

window.onload = function () {
    const form = document.querySelector('.subscribe-form');
const emailInput = form.querySelector('input[type="email"]');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const email = emailInput.value.trim();
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (isValidEmail) {
    showNotification("✅ Thank you for subscribing!", "success");
    emailInput.value = "";
    emailInput.classList.remove('error');
  } else {
    showNotification("❌ Please enter a valid email address.", "error");
    emailInput.classList.add('error');
  }
});

function showNotification(message, type) {
  let notif = document.createElement("div");
  notif.className = "form-notification " + type;
  notif.textContent = message;
  document.body.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}

// === Optional: Dark Mode ===
const toggleBtn = document.getElementById("darkToggle");
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}
};

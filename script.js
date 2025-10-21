// ------------------- Display Current Time -------------------
function displayTime() {
  const timeEl = document.getElementById("time");
  if (!timeEl) return;

  const now = new Date();
  const timeString = now.toLocaleTimeString();
  const ms = now.getMilliseconds();

  timeEl.innerHTML = `${timeString} <span class="ms">${ms}ms</span>`;
}

displayTime();
setInterval(displayTime, 50);

// ------------------- Contact Form Handling -------------------
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    document.querySelectorAll(".error").forEach(el => (el.textContent = ""));
    let hasError = false;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    if (!name.value.trim()) {
      document.getElementById("error-name").textContent = "Please enter your name.";
      hasError = true;
    }

    if (!email.value.trim() || !/^\S+@\S+\.\S+$/.test(email.value)) {
      document.getElementById("error-email").textContent = "Please enter a valid email.";
      hasError = true;
    }

    if (!subject.value.trim()) {
      document.getElementById("error-subject").textContent = "Please enter a subject.";
      hasError = true;
    }

    if (!message.value.trim()) {
      document.getElementById("error-message").textContent = "Please enter a message.";
      hasError = true;
    }

    if (!hasError) {
      contactForm.reset();
      showToast("Message sent successfully!");
    }
  });
}

// ------------------- Toast Function -------------------
function showToast(msg) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = msg;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 10);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => document.body.removeChild(toast), 300);
  }, 3000);
}


 const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const bars = document.querySelectorAll(".bar");

  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    bars.forEach(bar => bar.classList.toggle("active"));
  });

  // Optional: Close menu when a link is clicked
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      bars.forEach(bar => bar.classList.remove("active"));
    });
  });
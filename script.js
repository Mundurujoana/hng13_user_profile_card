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
const overlay = document.getElementById("overlay");
const successPopup = document.getElementById("success-popup");
const closePopupBtn = document.getElementById("close-popup");

if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    // Clear previous errors
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
      // Reset form
      contactForm.reset();

      // Show overlay and popup
      overlay.style.display = "flex";
      successPopup.style.display = "block";
    }
  });
}

// Close popup
if (closePopupBtn) {
  closePopupBtn.addEventListener("click", () => {
    overlay.style.display = "none";
    successPopup.style.display = "none";
  });
}

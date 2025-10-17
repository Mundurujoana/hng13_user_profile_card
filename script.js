// Elements
const timeEl = document.querySelector('[data-testid="test-user-time"]');
const avatarInput = document.getElementById('avatarUpload');
const avatarImg = document.getElementById('avatarImage');
const nameEl = document.querySelector('[data-testid="test-user-name"]');

// Format time into 12:45 PM
function formatTime(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  return `${hours}:${minutes} ${ampm}`;
}

// Update time every second
function updateTime() {
  const now = new Date();
  const humanReadable = formatTime(now);
  const ms = Date.now();
  timeEl.textContent = `${humanReadable} (${ms})`;
}
updateTime();
setInterval(updateTime, 1000);

// Avatar upload handling
avatarInput.addEventListener('change', (e) => {
  const file = e.target.files && e.target.files[0];
  if (!file) return;
  if (!file.type.startsWith('image/')) {
    alert('Please select an image file.');
    return;
  }

  if (avatarImg.dataset.objectUrl) {
    URL.revokeObjectURL(avatarImg.dataset.objectUrl);
    delete avatarImg.dataset.objectUrl;
  }

  const objectUrl = URL.createObjectURL(file);
  avatarImg.src = objectUrl;
  avatarImg.alt = `Uploaded profile picture of ${nameEl.textContent || 'user'}`;
  avatarImg.dataset.objectUrl = objectUrl;
});

// Keyboard accessibility for upload
const uploadLabel = document.querySelector('.upload-btn');
uploadLabel.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    avatarInput.click();
  }
});
uploadLabel.setAttribute('tabindex', '0');

// Ensure links are keyboard-focusable
document.querySelectorAll('a').forEach(a => {
  a.setAttribute('tabindex', '0');
});

// Cleanup on unload
window.addEventListener('beforeunload', () => {
  if (avatarImg.dataset.objectUrl) URL.revokeObjectURL(avatarImg.dataset.objectUrl);
});

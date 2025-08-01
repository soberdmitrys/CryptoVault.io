// Simulate login (no backend yet)
document.getElementById('login-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  localStorage.setItem('user', email);
  if (email === 'admin@cryptovault.com') {
    window.location.href = 'admin.html';
  } else {
    window.location.href = 'dashboard.html';
  }
});

// Display user info on dashboard
if (window.location.pathname.includes('dashboard.html')) {
  const user = localStorage.getItem('user') || 'User';
  document.getElementById('user-email').textContent = user;
}

// Simulate admin setting plan
document.getElementById('admin-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const userEmail = document.getElementById('admin-user-email').value;
  const investment = document.getElementById('investment').value;
  const dailyRate = document.getElementById('daily-rate').value;
  const duration = document.getElementById('plan-duration').value;
  const endBalance = (investment * Math.pow(1 + dailyRate / 100, duration)).toFixed(2);
  alert(`Plan set for ${userEmail}: $${investment} at ${dailyRate}% daily for ${duration} days. End balance: $${endBalance}`);
});

// Logout
function logout() {
  localStorage.removeItem('user');
  window.location.href = 'index.html';
}

// Scroll Effects
document.addEventListener('scroll', () => {
  const scrollEffects = document.querySelectorAll('.scroll-effect');
  scrollEffects.forEach(effect => {
    const rect = effect.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    if (rect.top >= 0 && rect.top < windowHeight) {
      if (effect.dataset.type === 'fade') {
        effect.style.opacity = 1;
      } else if (effect.dataset.type === 'parallax') {
        const scrollPosition = window.scrollY;
        effect.style.transform = `translateY(${scrollPosition * 0.2}px)`;
      }
    } else {
      if (effect.dataset.type === 'fade') {
        effect.style.opacity = 0;
      }
    }
  });
});

// Initial check on page load
window.addEventListener('load', () => {
  const scrollEffects = document.querySelectorAll('.scroll-effect');
  scrollEffects.forEach(effect => {
    const rect = effect.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    if (rect.top >= 0 && rect.top < windowHeight) {
      if (effect.dataset.type === 'fade') {
        effect.style.opacity = 1;
      }
    }
  });
});

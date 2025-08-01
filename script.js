// Simulate login (no backend yet)
document.getElementById('login-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  // Fake authentication
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

// Simulate admin setting plan (no backend yet)
document.getElementById('admin-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const userEmail = document.getElementById('admin-user-email').value;
  const investment = document.getElementById('investment').value;
  const dailyRate = document.getElementById('daily-rate').value;
  const duration = document.getElementById('plan-duration').value;
  // Calculate end balance (compound interest)
  const endBalance = (investment * Math.pow(1 + dailyRate / 100, duration)).toFixed(2);
  alert(`Plan set for ${userEmail}: $${investment} at ${dailyRate}% daily for ${duration} days. End balance: $${endBalance}`);
});

// Logout
function logout() {
  localStorage.removeItem('user');
  window.location.href = 'index.html';
}

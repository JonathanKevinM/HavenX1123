// Redirect to home.html after login
document.querySelector('.login-form').addEventListener('submit', function(e) {
  e.preventDefault(); // prevent default form submission

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if(email && password) {
    // Redirect to the home.html page
    window.location.href = 'home.html';
  } else {
    alert('Please enter both your email and password');
  }
});

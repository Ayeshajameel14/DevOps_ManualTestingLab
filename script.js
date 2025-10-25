// Simple manual testing-friendly login logic
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  // Predefined valid credentials
  const validUsername = "admin";
  const validPassword = "12345";

  if (username === "" || password === "") {
    message.textContent = "Please enter both username and password.";
    message.style.color = "red";
  } else if (username === validUsername && password === validPassword) {
    message.textContent = "Login successful! Redirecting to dashboard...";
    message.style.color = "green";
    setTimeout(() => {
      window.location.href = "dashboard.html"; // you can create later if needed
    }, 1000);
  } else {
    message.textContent = "Invalid username or password!";
    message.style.color = "red";
  }
});

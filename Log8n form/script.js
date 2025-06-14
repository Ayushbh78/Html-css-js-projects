
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});

document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  const confirmPassword = document.getElementById("signupConfirmPassword").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  const otp = Math.floor(100000 + Math.random() * 900000);
  alert("Your OTP is: " + otp);
  const userOtp = prompt("Enter OTP sent to your email:");

  if (userOtp == otp) {
    const user = { name, email, password };
    localStorage.setItem(email, JSON.stringify(user));
    alert("Signup successful! You can now log in.");
    container.classList.remove("right-panel-active");
  } else {
    alert("Invalid OTP. Signup failed.");
  }
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const storedUser = JSON.parse(localStorage.getItem(email));

  if (storedUser && storedUser.password === password) {
    alert("Welcome, " + storedUser.name + "!");
    // Redirect to chatbot.html or load chatbot view
  } else {
    alert("Invalid email or password!");
  }
});

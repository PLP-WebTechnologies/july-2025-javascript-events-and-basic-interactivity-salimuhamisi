// 🌙 Dark Mode Toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// 🎮 Counter
let count = 0;
document.getElementById("counterBtn").addEventListener("click", () => {
  count++;
  document.getElementById("countValue").textContent = count;
});

// 💡 FAQ Toggle
document.querySelectorAll(".faq-item h3").forEach((item) => {
  item.addEventListener("click", () => {
    const answer = item.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// Tabs
document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document
      .querySelectorAll(".tab-content")
      .forEach((tc) => tc.classList.remove("active"));
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

// Form Validation
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;

  // Name Validation
  const name = document.getElementById("name").value.trim();
  if (name.length < 3) {
    valid = false;
    document.getElementById("nameError").textContent =
      "Name must be at least 3 characters";
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Email Validation
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    valid = false;
    document.getElementById("emailError").textContent = "Invalid email address";
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Password Validation
  const password = document.getElementById("password").value;
  if (password.length < 6) {
    valid = false;
    document.getElementById("passwordError").textContent =
      "Password must be at least 6 characters";
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // Success Message
  if (valid) {
    document.getElementById("successMessage").textContent =
      "Form submitted successfully!";
    this.reset();
  } else {
    document.getElementById("successMessage").textContent = "";
  }
});

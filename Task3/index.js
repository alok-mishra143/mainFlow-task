// index.js

document.addEventListener("DOMContentLoaded", (event) => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    // Prevent the form from submitting the traditional way
    event.preventDefault();

    // Get the values from the form fields
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Simple validation checks
    if (name === "") {
      alert("Please enter your name.");
      return;
    }

    if (email === "") {
      alert("Please enter your email.");
      return;
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (message === "") {
      alert("Please enter your message.");
      return;
    }

    // Store the form data in localStorage
    localStorage.setItem("contactName", name);
    localStorage.setItem("contactEmail", email);
    localStorage.setItem("contactMessage", message);

    // Redirect to thank you page
    window.location.href = "formData.html";
  });
});

// thankyou.js

document.addEventListener("DOMContentLoaded", (event) => {
  const name = localStorage.getItem("contactName");
  const email = localStorage.getItem("contactEmail");
  const message = localStorage.getItem("contactMessage");

  document.getElementById("displayName").textContent = name;
  document.getElementById("displayEmail").textContent = email;
  document.getElementById("displayMessage").textContent = message;
});

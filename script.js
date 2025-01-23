// Function to handle DOMContentLoaded
function initializeFormValidation() {
  // Form and feedback division selection
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  // Add event listener for form submission
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission

    // Retrieve and trim user inputs
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Initialize validation variables
    let isValid = true;
    const messages = [];

    // Username validation
    if (username.length < 3) {
      isValid = false;
      messages.push("Username must be at least 3 characters long.");
    }

    // Email validation
    if (!email.includes("@") || !email.includes(".")) {
      isValid = false;
      messages.push("Email must include '@' and '.' characters.");
    }

    // Password validation
    if (password.length < 8) {
      isValid = false;
      messages.push("Password must be at least 8 characters long.");
    }

    // Display feedback
    feedbackDiv.style.display = "block";
    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745"; // Success color
    } else {
      feedbackDiv.innerHTML = messages.join("<br>"); // Error messages
      feedbackDiv.style.color = "#dc3545"; // Error color
    }
  });
}

// Wrap the function in a DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", initializeFormValidation);

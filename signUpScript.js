let eyeIcon = document.getElementById("eyeIcon");
let eyeIcon2 = document.getElementById("eyeIcon2");

let password1 = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");

eyeIcon.onclick = function () {
  if (password1.type == "password") {
    password1.type = "text";
    eyeIcon.src = "assets/eye-open.png";
  } else {
    password1.type = "password";
    eyeIcon.src = "assets/eye-close.png";
  }
};

eyeIcon2.onclick = function () {
  if (confirmPassword.type == "password") {
    confirmPassword.type = "text";
    eyeIcon2.src = "assets/eye-open.png";
  } else {
    confirmPassword.type = "password";
    eyeIcon2.src = "assets/eye-close.png";
  }
};

document
  .getElementById("signup-form")
  .addEventListener("submit", function (event) {
    const password = document.getElementById("password").value;
    const passwordCriteria = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /\d/.test(password),
      specialChar: /[@$!%*?&]/.test(password),
    };

    const allCriteriaMet = Object.values(passwordCriteria).every(Boolean);

    if (!allCriteriaMet) {
      event.preventDefault(); // Prevent form submission
      alert(
        "Password must meet the following requirements:\n" +
          "- At least 8 characters\n" +
          "- At least one uppercase letter\n" +
          "- At least one lowercase letter\n" +
          "- At least one number\n" +
          "- At least one special character (@$!%*?&)"
      );
    }

    if (password1 != confirmPassword) {
      event.preventDefault();
      alert("Passwords do not match");
    } else {
      alert("You've done it fam");
    }
  });

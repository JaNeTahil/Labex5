// 1. Prompt the user to input a password
let password = prompt("Enter your password:");

// 2. Evaluate the length of the password and provide feedback
let lengthFeedback = "";
if (password.length < 8) {
  lengthFeedback = "Weak: Password should be at least 8 characters long.";
} else if (password.length < 12) {
  lengthFeedback = "Moderate: Consider a longer password for better security.";
} else {
  lengthFeedback = "Strong: Good job on having a sufficiently long password!";
}

// 3. Check for the presence of uppercase letters, lowercase letters, numbers, and special characters
let hasUppercase = /[A-Z]/.test(password);
let hasLowercase = /[a-z]/.test(password);
let hasNumber = /\d/.test(password);
let hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);

// 4. Assign a strength rating to the password based on the above criteria
let strengthRating = "Weak";
if (hasUppercase && hasLowercase && hasNumber && hasSpecialChar) {
  strengthRating = "Strong";
} else if (hasUppercase || hasLowercase || hasNumber || hasSpecialChar) {
  strengthRating = "Moderate";
}

// 5. Display the strength rating and feedback message to the user
console.log("Password Strength: " + strengthRating);
console.log("Length Feedback: " + lengthFeedback);

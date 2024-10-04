// Get all input fields and error spans
const fullNameInput = document.getElementById('fullName');
const emailInput = document.getElementById('email');
const phoneNumberInput = document.getElementById('phoneNumber');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const fullNameError = document.getElementById('fullNameError');
const emailError = document.getElementById('emailError');
const phoneNumberError = document.getElementById('phoneNumberError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

// Add event listeners to input fields
fullNameInput.addEventListener('input', validateFullName);
emailInput.addEventListener('input', validateEmail);
phoneNumberInput.addEventListener('input', validatePhoneNumber);
passwordInput.addEventListener('input', validatePassword);
confirmPasswordInput.addEventListener
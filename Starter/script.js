// Assignment Code
var generateBtn = document.querySelector("#generate");


// for loop
for (i = 0; i = complexity)


// Write password to the #password input
function writePassword() { 
  length = prompt("Select between 8 and 128 characters");
  specialCharacters = confirm("Special characters in your password?");
  numeric = confirm("Numbers in your password?");
  lowercase = confirm("Lowercase letters in your password?");
  uppercase = confirm("Uppercase letters in your password?");


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

// BONUS EVENT LISTENER

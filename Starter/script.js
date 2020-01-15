// Assignment Code
var generateBtn = document.querySelector("#generate");
var maxLength = 128
var minLength = 8

const key_strings = {
	lowercase: 'abcdefghijklmnopqrstuvwxyz',
	uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
	number: '0123456789',
	symbol: '*;<>()[]{}#$?!^|'
};


// Write password to the #password input
function writePassword() { 
 var length = prompt("Select between 8 and 128 characters");
 var specialCharacters = confirm("Special characters in your password?");
 var numeric = confirm("Numbers in your password?");
 var lowercase = confirm("Lowercase letters in your password?");
 var uppercase = confirm("Uppercase letters in your password?");



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

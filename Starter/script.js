// Assignment Code
var generateBtn = document.querySelector("#generate");


const key_strings = {
	lowercase: 'abcdefghijklmnopqrstuvwxyz',
	uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
	number: '0123456789',
	specialCharacters: '*;<>()[]{}#$?!^|'
};


// Write password to the #password input
function writePassword() { 
 var passwordLength = prompt("Select between 8 and 128 characters");
 var specialCharactersConfirm = confirm("Special characters in your password?");
 var numberConfirm = confirm("Numbers in your password?");
 var lowercaseConfirm = confirm("Lowercase letters in your password?");
 var uppercaseConfirm = confirm("Uppercase letters in your password?");

 function generatePassword() {
  var length = passwordLength,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}



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

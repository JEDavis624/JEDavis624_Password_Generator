// Assignment Code
var generateBtn = document.querySelector("#generate");



	var lowercase = ('abcdefghijklmnopqrstuvwxyz');
	var uppercaser = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
	var number = ('0123456789');
	var specialCharacters = ('*;<>()[]{}#$?!^|');



// Write password to the #password input
function writePassword() { 
 var passwordLength = prompt("Select between 8 and 128 characters");
 var specialCharactersConfirm = confirm("Special characters in your password?");
 var numberConfirm = confirm("Numbers in your password?");
 var lowercaseConfirm = confirm("Lowercase letters in your password?");
 var uppercaseConfirm = confirm("Uppercase letters in your password?");

 specialCharactersConfirm === specialCharacters;
 numberConfirm === number;
 lowercaseConfirm === lowercase;
 uppercaseConfirm === uppercaser;


 function generatePassword() {
  var length = passwordLength,
      charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+",
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

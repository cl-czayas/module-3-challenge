// Assignment Code
var generateBtn = document.querySelector("#generate");

var number=["0123456789"]
var numbers=number.split("")
var lower=["abcdefghijklmnopqrstuvwxyz"]
var lowers=lower.split("")
var upper=["ABCDEFGHIKLMNOPQRSTUVWXYZ"]
var uppers=upper.split("")

function generatePassword() {
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  passwordText.innerHTML
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
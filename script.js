// Assignment Code
var generateBtn = document.querySelector("#generate");

var number=["0123456789"]
var numbers=number.split("")
var lower=["abcdefghijklmnopqrstuvwxyz"]
var lowers=lower.split("")
var upper=["ABCDEFGHIKLMNOPQRSTUVWXYZ"]
var uppers=upper.split("")
var special=["~!@#$%^&*-+"] 
var specials=special.split("")

function generatePassword() {
  pwLength=(prompt("Choose password length from 8-128 characters.")); 
  if (pwLength<8 || pwLength>128){
    alert("Must choose a number between 8-128. Try again!")
    prompt("Choose password length from 8-128 characters.")
  }
    var wantSpecial = confirm("Click OK to include special characters in password.");
    var wantNumber = confirm("Click OK to include numeric characters in password.");    
    var wantLower = confirm("Click OK to include lowercase characters in password.");
    var wantUpper = confirm("Click OK to include uppercase characters in password.");
      
    if(wantNumber===false && wantSpecial===false && wantUpper===false && wantLower===false) {
        alert("You need to choose at least one character type!");
        var wantSpecial = confirm("Click OK to include special characters in password.");
        var wantNumber = confirm("Click OK to include numeric characters in password.");    
        var wantLower = confirm("Click OK to include lowercase characters in password.");
        var wantUpper = confirm("Click OK to include uppercase characters in password.");
    } 

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) {
  
}
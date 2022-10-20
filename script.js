// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers=["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var lowers=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppers=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specials=["#","$","%","&","'","(",")","*","+","-",".","/",":",";","<","=",">","?","@","]","[","^","_","`","'","{","|","}","~"] 

var pwLength= "";
var wantSpecial
var wantNumber
var wantLower
var wantUpper

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

  var generatedPW=[]
    if (wantSpecial){
      generatedPW=generatedPW+specials
    }
    if (wantNumber){
      generatedPW=generatedPW+numbers
    }
    if (wantLower){
      generatedPW=generatedPW+lowers
    }
    if (wantUpper){
      generatedPW=generatedPW+uppers
    }

    var finalPW="";

    for (var i = 0; i < pwLength; i++) {
      finalPW = finalPW + generatedPW[Math.floor(Math.random() * generatedPW.length)];
    }
    return finalPW;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) 
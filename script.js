// Assignment code here
var range = {
  minLength: 8,
  maxLength: 128
}

var characterSets = {
  lower: "abcdefghijklmnopqrstuvwxyz",
upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
numeric: "0123456789",
special: "!@#$%^&*()_-+=?{}[]:;"
}
var getRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

var generatePassword = function() {
  var length = window.prompt("What length would you like your password to be?\n Enter a number of digits between " +
    range.minLength + "-" + range.maxLength + ".");
  if (length === null)
    return "";
}

   // Have enter a vaild number between 8-128 //
  length = parseInt(length);
  if (Number.isNaN(length) || length < range.minLength || length > range.maxLength) {
    window.alert("Enter a number between " + range.minLength + "-" + range.maxLength + ".");
    return generatePassword();
  }






// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

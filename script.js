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

var generatePassword = function() {

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

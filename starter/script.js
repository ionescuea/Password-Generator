// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

alert("Welcome to Password Generator!");
alert("Your NEW password will be at least 8 characters long, but no more than 128.")
var passwordLength = prompt("Please chose how long your password should be:")
alert("Please select at least ONE character type from the following:")
var lowercase = confirm("Please confirm, by pressing OK, if you want to include Lowercase Characters in your password?")
var uppercase = confirm("Please confirm, by pressing OK, if you want to include Uppercase Characters in your password?")
var numeric = confirm("Please confirm, by pressing OK, if you want to include Numeric Characters in your password?")
var Special = confirm("Please confirm, by pressing OK, if you want to include Special Characters in your password?")

var symbols = specialCharacters.concat(numericCharacters, lowerCasedCharacters, upperCasedCharacters)

// Function to prompt user for password options
function getPasswordOptions(passwordLength) {


// Function for getting a random element from an array
function getRandom(arr) {
  // Math.floor(Math.random(symbols))
}

// Function to generate password with user input
function generatePassword() {
  

  return "Your NEW Password will appear HERE!";

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
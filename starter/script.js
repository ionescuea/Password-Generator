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


// Function to prompt user for password options
function getPasswordOptions() {
  var passwordLength = prompt("Please chose how long your password should be (between 8 and 128 characters):")
  if (passwordLength >= 8 && passwordLength <= 128) {
    var characters = [];
    var lowercase = confirm("Please confirm, by pressing OK, if you want to include Lowercase Characters in your password?")
    if (lowercase == true) {
      characters = characters.concat(lowerCasedCharacters)
    }
    var uppercase = confirm("Please confirm, by pressing OK, if you want to include Uppercase Characters in your password?")
    if (uppercase == true) {
      characters = characters.concat(upperCasedCharacters)
    }
    var numeric = confirm("Please confirm, by pressing OK, if you want to include Numeric Characters in your password?")
    if (numeric == true) {
      characters = characters.concat(numericCharacters)
    }
    var special = confirm("Please confirm, by pressing OK, if you want to include Special Characters in your password?")
    if (special == true) {
      characters = characters.concat(specialCharacters)
    }
    return [passwordLength, characters];
  } else {
    return [0, null];
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor((Math.random()*arr.length))];
}

// Function to generate password with user input
function generatePassword() {
  const [totalChar, symbols] = getPasswordOptions();
  if (totalChar > 0) {
    if (symbols.length === 0) {
      return "No character type was selected";
    } else {
      var pwd = "";
      for (let i=0; i < totalChar; i++) {
        pwd += getRandom(symbols);
      }
      return pwd;
    }
  } else {
    return "Wrong number of characters";
  }
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
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
var characterLength=8;
var choicePool=[];

// Function to prompt user for password options
function getPasswordOptions() {
choicePool=[]
characterLength=parseInt(prompt("Please choose a character length between 8 and 128 character"));

if (isNaN(characterLength) || characterLength<8 || characterLength>128) {
  alert ("Please try again and choose a number between 8 and 128");

  return false;
}

if (confirm ("Do you prefer to have speacial characters in your password?")) {
  choicePool=choicePool.concat(specialCharacters); 
}
if (confirm ("Do you prefer to have numeric characters in your password?")) {
  choicePool=choicePool.concat(numericCharacters);
}
if (confirm ("Do you prefer to have lowercase characters in your password?")) {
  choicePool=choicePool.concat(lowerCasedCharacters);
}
if (confirm ("Do you prefer to have uppercase characters in your password?")) {
  choicePool=choicePool.concat(upperCasedCharacters);
}
if(choicePool=="" ){
  alert("Please try again and choose at least one of the options")
  return false;
}

return true;

}

// Function to generate password with user input

function generatePassword() {

var password="";

for (var i = 0; i < characterLength; i++) {
  var randomCharacter= Math.floor(Math.random()*choicePool.length);
  password=password+choicePool[randomCharacter];
}

return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var validChoice= getPasswordOptions();

  if (validChoice) {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
    passwordText.value = password;
  }
  else {

    passwordText.value="";
  }
  }
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
//Password generator will display password of 8-128 characters

// Assignment code here
document.querySelector("#generate").addEventListener("click", writePassword);

//Variables
var specialCharacters = "!@#$%^&*();:<>+=-";
var numberCharacters = "0123456789";
var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


//FUNCTIONS
// Function to prompt password criteria
function generatePassword() {
  var password = "";
  var passwordCharset = "";

  // Prompt for password/ invalid if not between 8-128 characters
  var passwordLength = window.prompt(" How long do you want your password to be? (between 8-128 characters)");
  
  if (Number(passwordLength < 8) | Number(passwordLength > 128) | isNaN(passwordLength)) {
    window.alert("Your passowrd is not a valid lenght! (8-128)");
    return;
  }

  // Prompt asking character types (numbers, lower Case, upper case, and special characters)
  var characterSetChoice1 = window.confirm("Would you like to include numbers?");
  if (characterSetChoice1) {passwordCharset += numberCharacters; }

  var characterSetChoice2 = window.confirm("Would you like to include lowercase letters?");
  if (characterSetChoice2) {passwordCharset += lowercaseCharacters; }

  var characterSetChoice3 = window.confirm("Would you like to include upper case letters?");
  if (characterSetChoice3) {passwordCharset += uppercaseCharacters; }

  var characterSetChoice4 = window.confirm("Would you like to include special characters?");
  if (characterSetChoice4) {passwordCharset += specialCharacters; }

  // Statment incase user does not select anything at all
  if (passwordCharset === "") {
    window.alert("You must choose at leaset one option.");
  }

  //Stating password needs to be between 8-128 characters
  if(passwordLength >=8 && passwordLength <=128) {
    for(var i = 0; i < passwordLength; i++) {
      password += passwordCharset.charAt(Math.floor(Math.random() * passwordCharset.length));
    };
    return password;
  };
};



//Function for password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

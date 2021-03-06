// Assignment Code
var generateBtn = document.querySelector("#generate");
// Declare global variables
  var characters = "" ;
  var password = "";
  function generatePassword() {
    characters = "";
    password ="";
    // prompt user to choose a password length from 8 to 128 characters
    var userInput1 = prompt("Password must have a length of at least 8 characters and no more than 128 characters. How many characters would you like for your password?");
    var userLength = parseInt(userInput1);
    var charLower = "abcdefghijklmnopqrstuvwxyz";
    var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var charNumber = "0123456789";
    var charSpecial = "/[]&\/#+()$~%.':*?<>{}/g'_'";
    
  // Check if user's input is from 8 to 128 characters
    if (userLength > 7 && userLength < 129) {
      // Create all the variables that store user's possible input
      var user2 = confirm("Would you like to include lowercase characters?");
      var user3 = confirm("Would you like to include uppercase characters?");
      var user4 = confirm("Would you like to include numeric characters?");
      var user5 = confirm("Would you like to include special characters like # $ % & ' < > * ()");
      // Check for user's choice of characters for the password
      if (user2) {
      // if user choose yes, add string value from charLower variable to chararters var
        characters = characters + charLower;
      }
      if (user3) {
      // if user choose yes, add string value from charUpper variable to chararters var
        characters = characters +charUpper;
      }
      if (user4) {
      // if user choose yes, add string value from charNumber variable to chararters var
        characters = characters + charNumber;
      }
      if (user5) {
      // if user choose yes, add string value from charSpecial variable to chararters var
        characters = characters + charSpecial;
      }
      // Loop through the whole string from characters and randomly choose characters for the passowrd
      for (let i = 0; i < userLength; i++) {
        password = password + characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
      }
    // if user does not choose from 8 to 128, alert the message 
    } else {
      alert("Your password input does not meet the requirement. Please choose from 8 to 128!");
    }
  // Return value for the password
    return password;
}

  // Write password to the #password input
  function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



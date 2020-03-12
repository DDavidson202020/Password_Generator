// Assignment Code
var generateBtn = document.querySelector("#generate");




    
  var password ="";
  function generatePassword() {
    // prompt user to choose a password length from 8 to 128 characters
    var userInput1 = prompt("Password must have a length of at least 8 characters and no more than 128 characters. How many characters would you like for your password?");
    var userLength = parseInt(userInput1);
    var characters =[];
    
    
    // Check if user's input is from 8 to 128 characters
    if (userLength > 7 && userLength < 129) {
      // Create all the variables that store user's possible input
      var user2 = confirm("Would you like to include lowercase characters?");
      var user3 = confirm("Would you like to include uppercase characters?");
      var user4 = confirm("Would you like to include numeric characters?");
      var user5 = confirm("Would you like to include special characters like # $ % & ' < > * ()");
      if (user2 == true) {
        characters = characters.push("abcdefghijklmnopqrstuvwxyz");
      }
      if (user3 == true) {
        characters= characters.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
      }
      if (user4 = true) {
        characters= characters.push("0123456789");
      }
      if (user5 == true) {
        characters= characters.push("/[]&\/#,+()$~%.':*?<>{}/g, '_'");
      }
      for (i = 0; i < userLength; i++) {
        password = password + characters[Math.floor(Math.random() * (characters.length -1))][Math.floor(Math.random() * characters.length -1)];
      }
    } else {
      alert("Your password input does not meet the requirement. Please choose from 8 to 128!");
    }

  
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





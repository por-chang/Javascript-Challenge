 //Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

document.querySelector("#generate").addEventListener("click", writePassword);

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var letterUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var letterLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var symbol = ["!","@", "#","$","^", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var confirmLength = "";
var confirmNumberCharacter;
var confirmLetterUpperCase;
var confirmLetterLowerCase;
var confirmSymbolCharacter;

// generate a password base on user criteria
function generatePassword() {
  var confirmLength = (prompt("Choose a length of at least 8 characters and no more than 128 characters"));
  
  //Determine the length of the password to see if it matches the characters lenght
  while(confirmLength <= 7 || confirmLength >= 128) {
    alert("Password length must be between 8-128 characters");
    var confirmLength = (prompt("How many characters would you like your password to contain?"));
    } 
// Alert the user to know that how many characters are currently going to pop up
    alert(`Your password will have ${confirmLength} characters`);
// Create a prompt to allow user to choose if they want Number, LetterUp, LetterDown, or Symbol
    var confirmNumberCharacter = confirm("Click OK if you want to include Number character or cancel");
    var confirmLetterUpperCase = confirm("Click OK if you want to include Letter Upper character or cancel");    
    var confirmLetterLowerCase = confirm("Click OK if you want to include Letter Lower character or cancel");
    var confirmSymbolCharacter = confirm("Click OK if you want to include Symbol character or cancel");
    while(confirmLetterUpperCase === false && confirmLetterLowerCase === false && confirmSymbolCharacter === false && confirmNumberCharacter === false) {
      alert("Need to have at least one perameters");
      var confirmNumberCharacter = confirm("Click OK if you want to include Number character or cancel");
      var confirmLetterUpperCase = confirm("Click OK if you want to include Letter Upper character or cancel");    
      var confirmLetterLowerCase = confirm("Click OK if you want to include Letter Lower character or cancel");
      var confirmSymbolCharacter = confirm("Click OK if you want to include Symbol character or cancel");
      } 
//Creating a password base on user creteria 
      var passwordCharacters = []     
    if (confirmNumberCharacter) {
      passwordCharacters = passwordCharacters.concat(number)
    }
    if (confirmLetterUpperCase) {
      passwordCharacters = passwordCharacters.concat(letterUpper)
    }  
    if (confirmLetterLowerCase) {
      passwordCharacters = passwordCharacters.concat(letterLower)
    }
    if (confirmSymbolCharacter) {
      passwordCharacters = passwordCharacters.concat(symbol)
    }
      console.log(passwordCharacters)
    //Generate the password password base on user creteria
      var randomPassword = ""
      
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      //random the number base on user choose
      return randomPassword;
}  

// had a little problem with my code so had to keep these on the side incase i needed to fix some stuff.
//function generatePassword(){
  //var letter ="abcdefghijklmnopqrstuvwxyz";
 // var length = (8)?(8):8;
 // var numeric = '0123456789';
  //var symbol = '!@#$%^&*?+-';
  //var password = "";
 // var char ="";
 // var crunch = true
 // while( password.length<length ) {
    //entity1 = Math.ceil(letter.length * Math.random()*Math.random());
    //entity2 = Math.ceil(numeric.length * Math.random()*Math.random());
    //entity3 = Math.ceil(symbol.length * Math.random()*Math.random());
    //hold = letter.charAt( entity1 );
    //hold = (password.length%2==0)?(hold.toUpperCase()):(hold);
   // char += hold;
    //char += numeric.charAt( entity2 );
    //char += symbol.charAt( entity3 );
   // password = char;
//}
//password=password.split('').sort(function(){return 0.5-Math.random()}).join('');
//return password.substr(0,8);
//console.log( password_generator() );

  //for (var index = 0; index < password_length; index++)
  //{
    //var randomgenerate = Math.floor(Math.random() * chars.length);
    //password += chars[randomgenerate];
    //console.log(password);
    //if (checkPasswordCriteria(password) == true)
   // {
    // generatePassword()
    //}
  //}
  //return password;
//}

//testing password generator to see if this function or not.

//function checkPasswordCriteria(pw) {
  //var chars = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"
  //var num = "0123456789"
  //var symbol ="!@#$%^&*"
  //for(var index = 0; index <chars.length; index ++)
  //var boo = false;
  //if(pw.match(/[0123456789]/) == true){
   //boo = true;
  //}
  //else
   // boo = false;
  //if(pw.match(/[AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz]/) == true) {
  //  boo = true;
  //}
  //else
   // boo = false;
  //if(pw.match(/[!@#$%^&*]/) == true){
   // boo = true
  //}
  //else
   // boo = false;
  
  //return boo;//

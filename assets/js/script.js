//declare vars for dom elements for each passwordparameter
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*)(><';,";
//event listen on load page, when copy and generate button are clicked, will generate pw and copy to clipboard
  window.addEventListener('DOMContentLoaded', (event) => {
      // listen for click generate pw button, generatepw when clicked
  document.getElementById('generateBtn').addEventListener('click', generatePassword);
  // listen for click copy btn
  document.getElementById('copy').addEventListener('click', copyClipboard);
  // copies pw val to clipboard on copy click
  document.getElementById('pw').addEventListener('click', copyClipboard);
});

/**
repeat generatechar function for creating a single random character
equal to value set for length of pw, must fall between 8-128 and and 
only if checkbox is checked will it generate characters
 */
function generatePassword() {
    let len = document.getElementById('lengthBox').value;
    let password = '';
    // if numberbox checked, fetch numbers
    if (document.getElementById('numberbox').checked) {
        password += getNumber();
    }
    // if lowercase checked, fetch lower case
    if (document.getElementById('lowercasebox').checked) {
        password += getLowercase();
    }
    //if symbols checked fetch symbols
    if (document.getElementById('symbolbox').checked) {
        password += getSymbols();
    }
    //if uppercase checked fetch uppercase
    if (document.getElementById('uppercasebox').checked) {
        password += getUppercase();
    }
//gen pw and place near top for user to see, pw length must fall within min/max
    for (let i = password.length; i < len; i++) {
        let char = generateChar();
        password += char;
    }
    // show password to user
document.getElementById('pw').innerText = password;
}

//returns random chars from strings, pertaining to type of value 
// return uppercase random
function getUppercase() {
    return uppercase[Math.floor(Math.random() * uppercase.length)];
}
//return lowercase random
function getLowercase() {
    return lowercase[Math.floor(Math.random() * lowercase.length)];
}
//return number random
function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}
//return symbols random
function getSymbols() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

/**
turn to array, check if boxes are checked, atleast one must be checked, if not returns nothing,
alert prompt could not be closed when I tried that may be something to do with looping?//
**/
// pushes values fetched above onto screen
// for user to see password if boxes are checked
function generateChar() {
    let chars = [];
    if (document.getElementById('symbolbox').checked) {
        chars.push(getSymbols());
    }
    
    if (document.getElementById('numberbox').checked) {
        chars.push(getNumber());
    }
    if (document.getElementById('lowercasebox').checked) {
        chars.push(getLowercase());
    }
    if (document.getElementById('uppercasebox').checked) {
        chars.push(getUppercase());
    }
    // why does alert message not close when trying that?
    if (chars.length === 0) {
      console.log("must select atleast one criteria")
      return ('')   
    }
    //math.random ensures random values selected taking into acccount selected length
    return chars[Math.floor(Math.random() * chars.length)];
  }


//copy to clipboard fn
function copyClipboard() {
    navigator.clipboard.writeText(document.getElementById('pw').innerText);
    // tells user it has been copied to clipboard
    document.getElementById('copy').innerText ='Copied';
    //returns copied to copy after 750ms
    setTimeout(() =>{document.getElementById('copy').innerText = 'Copy';}, 750);
}

//declare vars for dom elements for each passwordparameter
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*)(><';,";
//event listen on load page, when copy and generate button are clicked, will generate pw and copy to clipboard
  window.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('generateBtn').addEventListener('click', generatePassword);
  document.getElementById('copy').addEventListener('click', copyClipboard);
  document.getElementById('pw').addEventListener('click', copyClipboard);
});

/**
repeat generatechar function for creating a single random character
= to the amount set for pw length value
 */
function generatePassword() {
    let len = document.getElementById('lengthBox').value;
    let password = '';
    if (document.getElementById('numberbox').checked) {
        password += getNumber();
    }
    if (document.getElementById('lowercasebox').checked) {
        password += getLowercase();
    }
    if (document.getElementById('symbolbox').checked) {
        password += getSymbols();
    }
    if (document.getElementById('uppercasebox').checked) {
        password += getUppercase();
    }
//gen pw and place near top for user to see, pw length less then 
    for (let i = password.length; i < len; i++) {
        let char = generateChar();
        password += char;
    }
    // show password to user
document.getElementById('pw').innerText = password;
}

//returns random chars from strings
function getUppercase() {
    return uppercase[Math.floor(Math.random() * uppercase.length)];
}
function getLowercase() {
    return lowercase[Math.floor(Math.random() * lowercase.length)];
}
function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}
function getSymbols() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

/**
turn to array, check if boxes are checked, atleast one must be checked, if not returns nothing,
alert prompt could not be closed when I tried that may be something to do with looping?//
**/
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
    if (chars.length === 0) {
      console.log("must select atleast one criteria")
      return ('')   
    }
    //math.random ensures random values selected taking into account needed length min 8 chars
    return chars[Math.floor(Math.random() * chars.length)];
  }


//copy to clipboard, 
function copyClipboard() {
    navigator.clipboard.writeText(document.getElementById('pw').innerText);
    document.getElementById('copy').innerText ='Copied';
    //returns copied to copy after 750ms
    setTimeout(() =>{document.getElementById('copy').innerText = 'Copy';}, 750);
}

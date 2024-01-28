/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

//SOLVED

function isPalindrome(str) {
  let lowerCase_str=str.toLowerCase();
  let specialChars = /[^a-zA-Z0-9]/g;
  let result = lowerCase_str.replace(specialChars, '');

  let tempstr="";
  for(let i=result.length-1;i>=0;i--){
    tempstr+=result[i];
}
 if(result==tempstr) {
  return true;
 }
 else return false;
}

module.exports = isPalindrome;

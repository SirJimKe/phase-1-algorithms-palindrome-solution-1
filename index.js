function reverse(word) {
  return word.split("").reverse().join("");
}

function isPalindrome(word) {

  const reversedWord = reverse(word);

  return word === reversedWord
}

/* 
  Pseudocode:
  reverse the input string
  if the reversed string is the same as the input
    return true
  else
    return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("wow"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("code"));
}

module.exports = isPalindrome;
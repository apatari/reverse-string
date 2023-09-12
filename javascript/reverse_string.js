function reverseString(str) {
  // type your code here
  let res = ""
  for(let i = str.length - 1; i >=0; i-- ) {
    res += str[i]
  }
  return res
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// initialize an empty result string
// iterate over the provided string backwards, adding each char to the result


// And a written explanation of your solution
// The function creates an empty string and then works its way backwards
// through the provided string, adding each letter to the result.  Once
// it has made it through the whole string the result string is returned.

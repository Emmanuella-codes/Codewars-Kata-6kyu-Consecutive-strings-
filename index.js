// Import stylesheets
import './style.css';

// strarr is an array of strings
// k is the integer
// return the first longest string 
// consisting of k(integer) consecutive strings taken in the array
// example: if k = 4, return the first longest string taken out
// of the 4 consecutive strings. 

function longestConsec(strarr, k) {
  // return an empty string if strarr(array) or k = 0 
  // or if k is greater than the length of strarr
  if (strarr.length == 0 || k > strarr.length || k <= 0) return "";

  // create two variables to store the longest string and the consecutive strings
  let longestStr = "";
  let consecutiveStr = ""; 

  // use a for loop to iterate through the length of strings in the array
  for (let i = 0; i < strarr.length; i++) {
    // slice through the array to get individual strings
    // and initialize the first result to the consecutiveStr variable
    consecutiveStr = strarr.slice(i, i + k);
    // check the length of the strings 
    if (consecutiveStr.join("").length > longestStr.length) {
      // assign the longest string to the longestStr variable 
      longestStr = consecutiveStr.join("")
    }
  }
  return longestStr
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2));
// returns abigailtheta

console.log(longestConsec([], 3));    // returns ""



